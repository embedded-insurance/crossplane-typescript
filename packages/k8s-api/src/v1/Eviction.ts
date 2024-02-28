/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

// import type { DeleteOptions } from '@ei-tech/k8s-apimachinery/v1/DeleteOptions';
import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';
// TODO.
type DeleteOptions = unknown

/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export type Eviction = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "policy/v1";
  /**
   * DeleteOptions may be provided
   */
  deleteOptions?: DeleteOptions;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "Eviction";
  /**
   * ObjectMeta describes the pod that is being evicted.
   */
  metadata?: ObjectMeta;
};
