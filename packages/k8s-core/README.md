# @ei-tech/k8s-core

## Overview
This package is curated, meaning it may have been bootstrapped with code generation but is not expected to receive additional updates via code generation.

core has most of the basic kubernetes resources we're familiar with. 

It should not introduce breaking changes to Kubernetes-versioned resources. Adding new types for e.g. v2 Kubernetes versions of this objects is anticipated and OK.

At the time of this writing there are no "default" exports from an index.ts file. All consumers will import from the v1 path explicitly. This allows us to limit our use of the package semver to representing breaking changes we introduce.

