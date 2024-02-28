(ns tech.ei.crossplane.typescript.cdk8s
  (:require [clojure.string :as str]))


(defn rewrite-text
  "Rewrites cdk8s generated file to rename class definitions with + Class suffix,
  adds a TypeScript type definition to the end of the string.
  Does not prune construct library imports or code that depends on it"
  [text]
  (let [defs
        (->> (str/split text #"export class")
             (mapcat (fn [x]
                       (let [first-line (first (str/split-lines x))
                             name (-> first-line
                                      (str/triml)
                                      (str/split #" ")
                                      (first))]
                         (if (not (str/includes? first-line "extends ApiObject"))
                           []
                           (let [gvk-search-string "public static readonly GVK: GroupVersionKind = "
                                 gvk-start (+ (count gvk-search-string) (str/index-of x gvk-search-string))
                                 gvk-end (+ 1 (str/index-of x "}" gvk-start))
                                 gvk (subs x gvk-start gvk-end)
                                 typedef (str "export type " name " = " gvk " & " name "Props")]
                             [{:gvk     gvk
                               :name    name
                               :typedef typedef}]))))))
        rewritten (reduce
                    (fn [s def]
                      (str (str/replace s
                                        (str "export class " (:name def))
                                        (str "export class " (:name def) "Class"))
                           "\n\n"
                           (:typedef def)))
                    text
                    defs)]
    rewritten))

(def text (slurp "/Users/alexdixon/ei/crossplane-typescript/codegen-tools/cdk8s-samples/index.ts"))
(rewrite-text text)
