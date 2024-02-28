/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

export type WasmPlugin = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "extensions.istio.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "WasmPlugin";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Extend the functionality provided by the Istio proxy through WebAssembly filters. See more details at: https://istio.io/docs/reference/config/proxy_extensions/wasm-plugin.html
   */
  spec?: {
    imagePullPolicy?: 'UNSPECIFIED_POLICY' | 'IfNotPresent' | 'Always';
    /**
     * Credentials to use for OCI image pulling.
     */
    imagePullSecret?: string;
    /**
     * Specifies the criteria to determine which traffic is passed to WasmPlugin.
     */
    match?: Array<{
      /**
       * Criteria for selecting traffic by their direction.
       */
      mode?: 'UNDEFINED' | 'CLIENT' | 'SERVER' | 'CLIENT_AND_SERVER';
      /**
       * Criteria for selecting traffic by their destination port.
       */
      ports?: Array<{
        number?: number;
      }>;
    }>;
    /**
     * Determines where in the filter chain this `WasmPlugin` is to be injected.
     */
    phase?: 'UNSPECIFIED_PHASE' | 'AUTHN' | 'AUTHZ' | 'STATS';
    /**
     * The configuration that will be passed on to the plugin.
     */
    pluginConfig?: any;
    pluginName?: string;
    /**
     * Determines ordering of `WasmPlugins` in the same `phase`.
     */
    priority?: any;
    selector?: {
      matchLabels?: Record<string, string>;
    };
    /**
     * SHA256 checksum that will be used to verify Wasm module or OCI container.
     */
    sha256?: string;
    /**
     * URL of a Wasm module or OCI container.
     */
    url?: string;
    verificationKey?: string;
    /**
     * Configuration for a Wasm VM.
     */
    vmConfig?: {
      /**
       * Specifies environment variables to be injected to this VM.
       */
      env?: Array<{
        name?: string;
        /**
         * Value for the environment variable.
         */
        value?: string;
        valueFrom?: 'INLINE' | 'HOST';
      }>;
    };
  };
  status?: any;
};
