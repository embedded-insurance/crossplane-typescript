/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

export type AuthorizationPolicy = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "security.istio.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "AuthorizationPolicy";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Configuration for access control on workloads. See more details at: https://istio.io/docs/reference/config/security/authorization-policy.html
   */
  spec?: {
    /**
     * Optional.
     */
    action?: 'ALLOW' | 'DENY' | 'AUDIT' | 'CUSTOM';
    /**
     * Specifies detailed configuration of the CUSTOM action.
     */
    provider?: {
      /**
       * Specifies the name of the extension provider.
       */
      name?: string;
    };
    /**
     * Optional.
     */
    rules?: Array<{
      /**
       * Optional.
       */
      from?: Array<{
        /**
         * Source specifies the source of a request.
         */
        source?: {
          /**
           * Optional.
           */
          ipBlocks?: Array<string>;
          /**
           * Optional.
           */
          namespaces?: Array<string>;
          /**
           * Optional.
           */
          notIpBlocks?: Array<string>;
          /**
           * Optional.
           */
          notNamespaces?: Array<string>;
          /**
           * Optional.
           */
          notPrincipals?: Array<string>;
          /**
           * Optional.
           */
          notRemoteIpBlocks?: Array<string>;
          /**
           * Optional.
           */
          notRequestPrincipals?: Array<string>;
          /**
           * Optional.
           */
          principals?: Array<string>;
          /**
           * Optional.
           */
          remoteIpBlocks?: Array<string>;
          /**
           * Optional.
           */
          requestPrincipals?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      to?: Array<{
        /**
         * Operation specifies the operation of a request.
         */
        operation?: {
          /**
           * Optional.
           */
          hosts?: Array<string>;
          /**
           * Optional.
           */
          methods?: Array<string>;
          /**
           * Optional.
           */
          notHosts?: Array<string>;
          /**
           * Optional.
           */
          notMethods?: Array<string>;
          /**
           * Optional.
           */
          notPaths?: Array<string>;
          /**
           * Optional.
           */
          notPorts?: Array<string>;
          /**
           * Optional.
           */
          paths?: Array<string>;
          /**
           * Optional.
           */
          ports?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      when?: Array<{
        /**
         * The name of an Istio attribute.
         */
        key?: string;
        /**
         * Optional.
         */
        notValues?: Array<string>;
        /**
         * Optional.
         */
        values?: Array<string>;
      }>;
    }>;
    /**
     * Optional.
     */
    selector?: {
      matchLabels?: Record<string, string>;
    };
  };
  status?: any;
};
