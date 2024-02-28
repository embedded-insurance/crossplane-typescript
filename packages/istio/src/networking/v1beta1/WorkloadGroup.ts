/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

export type WorkloadGroup = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "networking.istio.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "WorkloadGroup";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  spec?: {
    /**
     * Metadata that will be used for all corresponding `WorkloadEntries`.
     */
    metadata?: {
      annotations?: Record<string, string>;
      labels?: Record<string, string>;
    };
    /**
     * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
     */
    probe?: {
      /**
       * Health is determined by how the command that is executed exited.
       */
      exec?: {
        /**
         * Command to run.
         */
        command?: Array<string>;
      };
      /**
       * Minimum consecutive failures for the probe to be considered failed after having succeeded.
       */
      failureThreshold?: number;
      httpGet?: {
        /**
         * Host name to connect to, defaults to the pod IP.
         */
        host?: string;
        /**
         * Headers the proxy will pass on to make the request.
         */
        httpHeaders?: Array<{
          name?: string;
          value?: string;
        }>;
        /**
         * Path to access on the HTTP server.
         */
        path?: string;
        /**
         * Port on which the endpoint lives.
         */
        port?: number;
        scheme?: string;
      };
      /**
       * Number of seconds after the container has started before readiness probes are initiated.
       */
      initialDelaySeconds?: number;
      /**
       * How often (in seconds) to perform the probe.
       */
      periodSeconds?: number;
      /**
       * Minimum consecutive successes for the probe to be considered successful after having failed.
       */
      successThreshold?: number;
      /**
       * Health is determined by if the proxy is able to connect.
       */
      tcpSocket?: {
        host?: string;
        port?: number;
      };
      /**
       * Number of seconds after which the probe times out.
       */
      timeoutSeconds?: number;
    };
    /**
     * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
     */
    template?: {
      address?: string;
      /**
       * One or more labels associated with the endpoint.
       */
      labels?: Record<string, string>;
      /**
       * The locality associated with the endpoint.
       */
      locality?: string;
      network?: string;
      /**
       * Set of ports associated with the endpoint.
       */
      ports?: Record<string, number>;
      serviceAccount?: string;
      /**
       * The load balancing weight associated with the endpoint.
       */
      weight?: number;
    };
  };
  status?: any;
};
