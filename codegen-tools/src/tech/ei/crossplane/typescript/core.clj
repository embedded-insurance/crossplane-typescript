(ns tech.ei.crossplane.typescript.core
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data.json :as json]))


(defn get-full-idents [source-dir-path]
  (->> (clojure.java.io/file source-dir-path)
       (.list)
       (seq)
       (vec)
       (mapv (fn [x] (str/split x #"_")))
       (filterv #(-> % second #{"crossplane" "k8s" "upbound"}))
       (sort)
       (mapv (fn [x]
               (vec (concat
                      (butlast x)
                      (vector (-> (last x)
                                  (str/split #"\.")
                                  (first)))))))))
(defn get-tree [full-idents]
  (reduce
    (fn [a b]
      (update-in a (vec (butlast b)) (fnil conj []) (last b)))
    #_(cond
        (or
          ;; so confused
          (= (last b) "v2")
          (#{["io" "k8s" "apimachinery" "pkg" "api" "resource" "Quantity" "v2"]
             ["io" "k8s" "apimachinery" "pkg" "apis" "meta" "v1" "ListMeta" "v2"]
             ["io" "k8s" "apimachinery" "pkg" "apis" "meta" "v1" "ManagedFieldsEntry" "v2"]
             }
           b
           ))
        a

        :else (update-in a (vec (butlast b)) (fnil conj []) (last b)))
    {}
    full-idents))


(defn extract-api-version-and-kind [file]
  (let [found (str/index-of file "export type io_crossplane")
        begin (when (pos? found) (+ found (count "export type io_crossplane")))
        ident (subs file begin (str/index-of file " " begin))
        ; "Queue"
        kind (-> ident (str/split #"_") (last))
        ; "sqs.aws.crossplane.io/v1beta"
        api-version (-> ident
                        (str/split #"_")
                        (drop-last)
                        (reverse)
                        (rest)
                        (vec)
                        (#(str/join "." %))
                        (vector)
                        (conj (-> ident (str/split #"_") drop-last last))
                        (#(str/join "/" %)))]
    {:api-version api-version
     :kind        kind}))

(defn full-ident->info [full-ident]
  (let [reversed (reverse full-ident)
        resource (first reversed)
        version (second reversed)
        without-version-or-resource (drop 2 reversed)
        api-version-string (-> (str/join "." without-version-or-resource)
                               (str "/" version))]
    {:api-version api-version-string
     :module-name (cond
                    ;(is-aws? full-ident)
                    ;(str "aws-" (nth ident 3) "/" kind)
                    (str/starts-with? resource "io_k8s")
                    (->> full-ident (drop 2)
                         (drop-last 2)
                         (str/join "-")
                         :else (->> full-ident (drop 2)
                                    (drop-last 2)
                                    (str/join "-"))))
     :version     version
     :kind        resource}
    ))


#_(def file (slurp (str source-dir "/io_crossplane_aws_sqs_v1beta1_Queue.ts")))

(defn get-decl-line-index [lines]
  (->> lines
       (map-indexed vector)
       (filter (fn [param1]
                 (let [x (-> param1 second str/trim)]
                   (or
                     (str/starts-with? x "export type io_k8s")
                     (str/starts-with? x "export type io_crossplane")
                     (str/starts-with? x "export type io_upbound")
                     ))))
       (first)
       (first)))

(defn replace-with-literal-api-version-and-kind [api-version kind file]
  (try
    (let [lines (str/split file #"\n")
          decl-line-index (get-decl-line-index lines)
          n 20
          ;_ (println "processing" api-version kind)
          next-n (take n (drop decl-line-index lines))
          before-decl (take decl-line-index lines)
          rst (drop (+ decl-line-index n) lines)
          rewritten (->> (concat
                           before-decl
                           (->> next-n
                                (mapv (fn [line]
                                        (-> line
                                            str/trim
                                            (#(cond
                                                (= % "apiVersion?: string;")
                                                (str/replace line "apiVersion?: string;" (str "apiVersion: \"" api-version "\";"))
                                                (= % "kind?: string;")
                                                (str/replace line "kind?: string;" (str "kind: \"" kind "\";"))
                                                :else line))))))
                           rst))
          _ (assert (= (count rewritten) (count lines))
                    (str "rewritten: " (count rewritten)
                         " lines: " (count lines) "rewritten and lines are not the same length"))]

      (str/join \newline rewritten)
      ) (catch Exception e (println "error" [api-version kind file]))))

;; full ident is something like ["io" "crossplane" "aws" "sqs" "v1beta1" "Queue"]
(defn rename-main-export [file full-ident]
  (let [file-ident (str/join "_" full-ident)
        resource-ident (last full-ident)]
    (str/replace-first file file-ident resource-ident)))



(defn full-ident->source-filename [full-ident]
  (str (str/join "_" full-ident) ".ts"))



(defn looks-like-version-string? [x]
  (and
    (string? x)
    (str/starts-with? x "v")
    (number? (clojure.edn/read-string (str (nth x 1))))))


(defn get-package-name-info [xs]
  (let [[a b c d e] xs]
    (cond
      (= ["io" "crossplane" "aws"] [a b c])
      (if (looks-like-version-string? b)
        {:package-name           "aws"
         :path-from-package-root (drop 3 xs)
         :k8s/api-version        (str "aws.crossplane.io/" b)
         :k8s/kind               (last xs)}
        {:package-name           (str "aws-" d)
         :path-from-package-root (drop 4 xs)
         :k8s/api-version        (str "aws.crossplane.io/" c)
         :k8s/kind               (last xs)})

      (or (= ["io" "crossplane" "gcp"] [a b c])
          (= ["io" "upbound" "gcp"] [a b c]))
      (if (looks-like-version-string? d)
        ; gcp.upbound.io/v1beta1
        (let [v d]
          {:package-name           "gcp-provider"
           :path-from-package-root (drop 3 xs)
           :k8s/api-version        (str (str/join "." (reverse (drop-last 2 xs))) "/" v)
           :k8s/kind               (last xs)})
        ; cloudplatform.gcp.upbound.io/v1beta1
        (let [v (last (drop-last xs))]
          {:package-name           (str "gcp-" d)
           :path-from-package-root (drop 4 xs)
           :k8s/api-version        (str (str/join "." (reverse (drop-last 2 xs))) "/" v)
           :k8s/kind               (last xs)}

          ))

      (= ["io" "k8s"] [a b])
      (let [
            kind (last xs)
            v (last (drop-last xs))
            name-slash-version (str (last (drop 2 (drop-last 2 xs))) "/" v)]
        {:package-name           (if (= d "core")
                                   "k8s-core"
                                   (str "k8s-" c))
         ; io.k8s.blah
         :path-from-package-root (if (= c "api")
                                   (drop 4 xs)
                                   (drop 3 xs))

         :k8s/api-version        (cond
                                   ; core rule: drop it completely, just a v
                                   (str/starts-with? name-slash-version "core/")
                                   v

                                   ; api rule: just the name
                                   (#{
                                      ["io" "k8s" "api" "autoscaling"]
                                      ["io" "k8s" "api" "batch"]
                                      }
                                    [a b c d])
                                   (str d "/" (last (drop 2 (drop-last 2 xs))))

                                   (#{
                                      ["io" "k8s" "api" "rbac"]
                                      }
                                    [a b c d])
                                   (str "rbac.authorization.k8s.io/" (last (drop 2 (drop-last 2 xs))))


                                   (#{["io" "k8s" "api" "networking"]
                                      ["io" "k8s" "api" "certificates"]
                                      ["io" "k8s" "api" "autoscaling"]}
                                    [a b c d])
                                   (str d "k8s.io/"
                                        (last (drop 2 (drop-last 2 xs))))

                                   :else name-slash-version)
         :k8s/kind               kind})

      :else
      {:package-name           (str/join "-" [a b])
       :path-from-package-root (drop 2 xs)}
      )))

(defn to-ident-map
  "Parses a vec representing a full identifier of a kubernetes resource
  into a map with data used for all subsequent codegen"
  [full-ident]
  (let [[resource version] (reverse full-ident)
        #_#__ (assert (looks-like-version-string? version)
                      (str "version " version " does not look like a version string"))
        {:keys [package-name path-from-package-root] :as m} (get-package-name-info full-ident)
        ]
    (merge m
           {:full-ident             full-ident
            :resource               resource
            :version                version
            :package-name           package-name
            :path-from-package-root (vec path-from-package-root)
            :import-specifier       (str "@ei-tech/" package-name "/" (str/join "/" path-from-package-root))})
    ))



(defn -main []
  (let [source-dir-path "ts-codegen/models"
        out-dir-path "packages4"
        full-idents (get-full-idents source-dir-path)
        ;full-idents (filter (fn [x] (some #{"k8s"} x)) full-idents)
        full-idents (filter (fn [[a b c d]] (= ["io" "k8s" "api" "core"] [a b c d])) full-idents)
        ; some apimachinery idents end with a version like v2. it's not clear what this means. removing them for now
        full-idents (remove #(-> % last looks-like-version-string?) full-idents)
        ident-maps (map to-ident-map full-idents)]

    (doseq [[package-name ident-maps] (group-by :package-name ident-maps)]
      (clojure.java.io/make-parents (str/join "/" [out-dir-path package-name "src"]))
      ;(pr-str "package-name: " package-name, ident-maps)
      (let [deps-set (atom #{})]
        (doseq [m ident-maps]
          (let [ident (:full-ident m)
                {:keys [package-name path-from-package-root]} m
                api-version (:k8s/api-version m)
                kind (:k8s/kind m)
                source-filename (full-ident->source-filename ident)
                source-filepath (str/join "/" [source-dir-path source-filename])
                file (slurp source-filepath)

                ;{:keys [api-version kind module-name version]} (full-ident->info ident)
                rewritten (replace-with-literal-api-version-and-kind api-version kind file)
                rewritten (rename-main-export rewritten ident)
                imports (filter #(str/starts-with? % "import ")
                                (map str/triml (str/split-lines rewritten)))
                ; "import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';"
                ;imports (->> imports
                ;             (map #(str/replace % "import type {" ""))
                ;             (map #(take-while (fn [param1] (not= param1 \})) %))
                ;             (map #(str/join "" %))
                ;             (map #(str/replace % " " ""))
                ;             (map #(str/split % #","))
                ;             (reduce conj)
                ;             (map #(str/split % #"_"))
                ;             (set))
                ;_ (prn imports)
                ;_ (swap! deps-set set/union imports)
                out-filename (str (str/join "/" [out-dir-path
                                                 package-name
                                                 "src"
                                                 (str/join "/" path-from-package-root)
                                                 ]) ".ts")]


            (prn "out-filename: " out-filename)
            (clojure.java.io/make-parents out-filename)
            (spit out-filename rewritten)))

        (spit (str/join "/" [out-dir-path package-name "package.json"])
                ; todo. presume these are run over with yarn constraints for consistency
                (clojure.data.json/write-str
                  {:name         (str "@ei-tech/" package-name)
                   :version      "0.0.1"
                   :dependencies (->> @deps-set
                                      (map #(str/join "/" %))
                                      (map (fn [x] [x "0.0.1"]))
                                      (into {"@ei-tech/k8s-apimachinery" "1.0.0"}))}
                  :escape-slash false)))

      )))

(-main)
