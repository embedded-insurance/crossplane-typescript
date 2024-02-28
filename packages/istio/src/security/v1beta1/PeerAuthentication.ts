/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

export type PeerAuthentication = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "security.istio.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "PeerAuthentication";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * PeerAuthentication defines how traffic will be tunneled (or not) to the sidecar.
   */
  spec?: {
    /**
     * Mutual TLS settings for workload.
     */
    mtls?: {
      /**
       * Defines the mTLS mode used for peer authentication.
       */
      mode?: 'UNSET' | 'DISABLE' | 'PERMISSIVE' | 'STRICT';
    };
    /**
     * Port specific mutual TLS settings.
     */
    portLevelMtls?: Record<string, {
      /**
       * Defines the mTLS mode used for peer authentication.
       */
      mode?: 'UNSET' | 'DISABLE' | 'PERMISSIVE' | 'STRICT';
    }>;
    /**
     * The selector determines the workloads to apply the ChannelAuthentication on.
     */
    selector?: {
      matchLabels?: Record<string, string>;
    };
  };
  status?: any;
};
