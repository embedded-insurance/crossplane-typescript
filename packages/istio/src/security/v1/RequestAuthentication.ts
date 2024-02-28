/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

export type RequestAuthentication = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "security.istio.io/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "RequestAuthentication";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * RequestAuthentication defines what request authentication methods are supported by a workload.
   */
  spec?: {
    /**
     * Define the list of JWTs that can be validated at the selected workloads' proxy.
     */
    jwtRules?: Array<{
      audiences?: Array<string>;
      /**
       * If set to true, the original token will be kept for the upstream request.
       */
      forwardOriginalToken?: boolean;
      /**
       * List of header locations from which JWT is expected.
       */
      fromHeaders?: Array<{
        /**
         * The HTTP header name.
         */
        name?: string;
        /**
         * The prefix that should be stripped before decoding the token.
         */
        prefix?: string;
      }>;
      /**
       * List of query parameters from which JWT is expected.
       */
      fromParams?: Array<string>;
      /**
       * Identifies the issuer that issued the JWT.
       */
      issuer?: string;
      /**
       * JSON Web Key Set of public keys to validate signature of the JWT.
       */
      jwks?: string;
      jwksUri?: string;
      jwks_uri?: string;
      /**
       * This field specifies a list of operations to copy the claim to HTTP headers on a successfully verified token.
       */
      outputClaimToHeaders?: Array<{
        /**
         * The name of the claim to be copied from.
         */
        claim?: string;
        /**
         * The name of the header to be created.
         */
        header?: string;
      }>;
      outputPayloadToHeader?: string;
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
