/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

export type Telemetry = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "telemetry.istio.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "Telemetry";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
   */
  spec?: {
    /**
     * Optional.
     */
    accessLogging?: Array<{
      /**
       * Controls logging.
       */
      disabled?: any;
      /**
       * Optional.
       */
      filter?: {
        /**
         * CEL expression for selecting when requests/connections should be logged.
         */
        expression?: string;
      };
      /**
       * Allows tailoring of logging behavior to specific conditions.
       */
      match?: {
        mode?: 'CLIENT_AND_SERVER' | 'CLIENT' | 'SERVER';
      };
      /**
       * Optional.
       */
      providers?: Array<{
        /**
         * Required.
         */
        name?: string;
      }>;
    }>;
    /**
     * Optional.
     */
    metrics?: Array<{
      /**
       * Optional.
       */
      overrides?: Array<{
        /**
         * Optional.
         */
        disabled?: any;
        /**
         * Match allows provides the scope of the override.
         */
        match?: {
          /**
           * Allows free-form specification of a metric.
           */
          customMetric?: string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          metric?: 'ALL_METRICS' | 'REQUEST_COUNT' | 'REQUEST_DURATION' | 'REQUEST_SIZE' | 'RESPONSE_SIZE' | 'TCP_OPENED_CONNECTIONS' | 'TCP_CLOSED_CONNECTIONS' | 'TCP_SENT_BYTES' | 'TCP_RECEIVED_BYTES' | 'GRPC_REQUEST_MESSAGES' | 'GRPC_RESPONSE_MESSAGES';
          mode?: 'CLIENT_AND_SERVER' | 'CLIENT' | 'SERVER';
        };
        /**
         * Optional.
         */
        tagOverrides?: Record<string, {
          /**
           * Operation controls whether or not to update/add a tag, or to remove it.
           */
          operation?: 'UPSERT' | 'REMOVE';
          /**
           * Value is only considered if the operation is `UPSERT`.
           */
          value?: string;
        }>;
      }>;
      /**
       * Optional.
       */
      providers?: Array<{
        /**
         * Required.
         */
        name?: string;
      }>;
      /**
       * Optional.
       */
      reportingInterval?: string;
    }>;
    /**
     * Optional.
     */
    selector?: {
      matchLabels?: Record<string, string>;
    };
    /**
     * Optional.
     */
    tracing?: Array<{
      /**
       * Optional.
       */
      customTags?: Record<string, {
        /**
         * Environment adds the value of an environment variable to each span.
         */
        environment?: {
          /**
           * Optional.
           */
          defaultValue?: string;
          /**
           * Name of the environment variable from which to extract the tag value.
           */
          name?: string;
        };
        header?: {
          /**
           * Optional.
           */
          defaultValue?: string;
          /**
           * Name of the header from which to extract the tag value.
           */
          name?: string;
        };
        /**
         * Literal adds the same, hard-coded value to each span.
         */
        literal?: {
          /**
           * The tag value to use.
           */
          value?: string;
        };
      }>;
      /**
       * Controls span reporting.
       */
      disableSpanReporting?: any;
      /**
       * Allows tailoring of behavior to specific conditions.
       */
      match?: {
        mode?: 'CLIENT_AND_SERVER' | 'CLIENT' | 'SERVER';
      };
      /**
       * Optional.
       */
      providers?: Array<{
        /**
         * Required.
         */
        name?: string;
      }>;
      randomSamplingPercentage?: any;
      useRequestIdForTraceSampling?: any;
    }>;
  };
  status?: any;
};
