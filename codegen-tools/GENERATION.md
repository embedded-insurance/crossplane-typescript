## Talk to a cluster with whatever types we want to generate installed
```sh
kubectl proxy --port=8080
```

## Pipe the entire API to a file
```sh
curl localhost:8080/openapi/v2 > k8s-openapi-v2.json
```

## Generate initial Typescript files and code
```sh
npx openapi-typescript-codegen@0.24.0 --input k8s-openapi-v2.json --output ts-codegen --exportSchemas=true --indent=2
```

## Run the main file
```sh
clj -main -Sdeps '{:deps {org.clojure/data.json {:mvn/version "2.3.1"}}}' -m tech.ei.crossplane.typescript.core.main
```

## Interactive development

### Run a Clojure nREPL server on port 60606
```shell
 clj -Sdeps '{:deps {cool {:git/url "https://gist.github.com/alex-dixon/bf2218ed3d3c633ed0602e23ae76c420" :sha "a9859300b5af48a18c88bdec2feb28bc91bd9d80"}}}' -m cool
```

### Connect to the nREPL server using preferred editor or command line below
```shell
clj -Sdeps '{:deps {nrepl {:mvn/version "0.8.3"}}}' -m nrepl.cmdline --connect --host localhost --port 60606
``` 
