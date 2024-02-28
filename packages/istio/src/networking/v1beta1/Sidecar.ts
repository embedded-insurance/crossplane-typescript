/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

export type Sidecar = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "networking.istio.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "Sidecar";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
   */
  spec?: {
    egress?: Array<{
      bind?: string;
      captureMode?: 'DEFAULT' | 'IPTABLES' | 'NONE';
      hosts?: Array<string>;
      /**
       * The port associated with the listener.
       */
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
    }>;
    ingress?: Array<{
      /**
       * The IP(IPv4 or IPv6) to which the listener should be bound.
       */
      bind?: string;
      captureMode?: 'DEFAULT' | 'IPTABLES' | 'NONE';
      defaultEndpoint?: string;
      /**
       * The port associated with the listener.
       */
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
    /**
     * Configuration for the outbound traffic policy.
     */
    outboundTrafficPolicy?: {
      egressProxy?: {
        /**
         * The name of a service from the service registry.
         */
        host?: string;
        /**
         * Specifies the port on the host that is being addressed.
         */
        port?: {
          number?: number;
        };
        /**
         * The name of a subset within the service.
         */
        subset?: string;
      };
      mode?: 'REGISTRY_ONLY' | 'ALLOW_ANY';
    };
    workloadSelector?: {
      labels?: Record<string, string>;
    };
  };
  status?: any;
};
