/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * A ProviderConfigUsage indicates that a resource is using a ProviderConfig.
 */
export type ProviderConfigUsage = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "gcp.upbound.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "ProviderConfigUsage";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * ProviderConfigReference to the provider config being used.
   */
  providerConfigRef: {
    /**
     * Name of the referenced object.
     */
    name: string;
    /**
     * Policies for referencing.
     */
    policy?: {
      /**
       * Resolution specifies whether resolution of this reference is required. The default is 'Required', which means the reconcile will fail if the reference cannot be resolved. 'Optional' means this reference will be a no-op if it cannot be resolved.
       */
      resolution?: io_upbound_gcp_v1beta1_ProviderConfigUsage.resolution;
      /**
       * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
       */
      resolve?: io_upbound_gcp_v1beta1_ProviderConfigUsage.resolve;
    };
  };
  /**
   * ResourceReference to the managed resource using the provider config.
   */
  resourceRef: {
    /**
     * APIVersion of the referenced object.
     */
    apiVersion: string;
    /**
     * Kind of the referenced object.
     */
    kind: string;
    /**
     * Name of the referenced object.
     */
    name: string;
    /**
     * UID of the referenced object.
     */
    uid?: string;
  };
};

export namespace io_upbound_gcp_v1beta1_ProviderConfigUsage {

  /**
   * Resolution specifies whether resolution of this reference is required. The default is 'Required', which means the reconcile will fail if the reference cannot be resolved. 'Optional' means this reference will be a no-op if it cannot be resolved.
   */
  export enum resolution {
    REQUIRED = 'Required',
    OPTIONAL = 'Optional',
  }

  /**
   * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
   */
  export enum resolve {
    ALWAYS = 'Always',
    IF_NOT_PRESENT = 'IfNotPresent',
  }


}
