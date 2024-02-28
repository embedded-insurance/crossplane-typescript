/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

export type Gateway = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "networking.istio.io/v1alpha3";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "Gateway";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
   */
  spec?: {
    selector?: Record<string, string>;
    /**
     * A list of server specifications.
     */
    servers?: Array<{
      bind?: string;
      defaultEndpoint?: string;
      /**
       * One or more hosts exposed by this gateway.
       */
      hosts?: Array<string>;
      /**
       * An optional name of the server, when set must be unique across all servers.
       */
      name?: string;
      port?: {
        /**
         * Label assigned to the port.
         */
        name?: string;
        /**
         * A valid non-negative integer port number.
         */
        number?: number;
        /**
         * The protocol exposed on the port.
         */
        protocol?: string;
        targetPort?: number;
      };
      /**
       * Set of TLS related options that govern the server's behavior.
       */
      tls?: {
        /**
         * REQUIRED if mode is `MUTUAL`.
         */
        caCertificates?: string;
        /**
         * Optional: If specified, only support the specified cipher list.
         */
        cipherSuites?: Array<string>;
        credentialName?: string;
        httpsRedirect?: boolean;
        /**
         * Optional: Maximum TLS protocol version.
         */
        maxProtocolVersion?: 'TLS_AUTO' | 'TLSV1_0' | 'TLSV1_1' | 'TLSV1_2' | 'TLSV1_3';
        /**
         * Optional: Minimum TLS protocol version.
         */
        minProtocolVersion?: 'TLS_AUTO' | 'TLSV1_0' | 'TLSV1_1' | 'TLSV1_2' | 'TLSV1_3';
        mode?: 'PASSTHROUGH' | 'SIMPLE' | 'MUTUAL' | 'AUTO_PASSTHROUGH' | 'ISTIO_MUTUAL';
        /**
         * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
         */
        privateKey?: string;
        /**
         * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
         */
        serverCertificate?: string;
        subjectAltNames?: Array<string>;
        verifyCertificateHash?: Array<string>;
        verifyCertificateSpki?: Array<string>;
      };
    }>;
  };
  status?: any;
};
