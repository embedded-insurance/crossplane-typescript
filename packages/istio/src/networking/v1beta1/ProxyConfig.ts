/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

export type ProxyConfig = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "networking.istio.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "ProxyConfig";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Provides configuration for individual workloads. See more details at: https://istio.io/docs/reference/config/networking/proxy-config.html
   */
  spec?: {
    /**
     * The number of worker threads to run.
     */
    concurrency?: any;
    /**
     * Additional environment variables for the proxy.
     */
    environmentVariables?: Record<string, string>;
    /**
     * Specifies the details of the proxy image.
     */
    image?: {
      /**
       * The image type of the image.
       */
      imageType?: string;
    };
    /**
     * Optional.
     */
    selector?: {
      matchLabels?: Record<string, string>;
    };
  };
  status?: any;
};
