/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * A StoreConfig configures how GCP controller should store connection details.
 */
export type StoreConfig = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "gcp.upbound.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "StoreConfig";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * A StoreConfigSpec defines the desired state of a ProviderConfig.
   */
  spec: {
    /**
     * DefaultScope used for scoping secrets for "cluster-scoped" resources. If store type is "Kubernetes", this would mean the default namespace to store connection secrets for cluster scoped resources. In case of "Vault", this would be used as the default parent path. Typically, should be set as Crossplane installation namespace.
     */
    defaultScope: string;
    /**
     * Kubernetes configures a Kubernetes secret store. If the "type" is "Kubernetes" but no config provided, in cluster config will be used.
     */
    kubernetes?: {
      /**
       * Credentials used to connect to the Kubernetes API.
       */
      auth: {
        /**
         * Env is a reference to an environment variable that contains credentials that must be used to connect to the provider.
         */
        env?: {
          /**
           * Name is the name of an environment variable.
           */
          name: string;
        };
        /**
         * Fs is a reference to a filesystem location that contains credentials that must be used to connect to the provider.
         */
        fs?: {
          /**
           * Path is a filesystem path.
           */
          path: string;
        };
        /**
         * A SecretRef is a reference to a secret key that contains the credentials that must be used to connect to the provider.
         */
        secretRef?: {
          /**
           * The key to select.
           */
          key: string;
          /**
           * Name of the secret.
           */
          name: string;
          /**
           * Namespace of the secret.
           */
          namespace: string;
        };
        /**
         * Source of the credentials.
         */
        source: io_upbound_gcp_v1alpha1_StoreConfig.source;
      };
    };
    /**
     * Plugin configures External secret store as a plugin.
     */
    plugin?: {
      /**
       * ConfigRef contains store config reference info.
       */
      configRef?: {
        /**
         * APIVersion of the referenced config.
         */
        apiVersion: string;
        /**
         * Kind of the referenced config.
         */
        kind: string;
        /**
         * Name of the referenced config.
         */
        name: string;
      };
      /**
       * Endpoint is the endpoint of the gRPC server.
       */
      endpoint?: string;
    };
    /**
     * Type configures which secret store to be used. Only the configuration block for this store will be used and others will be ignored if provided. Default is Kubernetes.
     */
    type?: io_upbound_gcp_v1alpha1_StoreConfig.type;
    /**
     * Vault configures a Vault secret store. Deprecated: This API is scheduled to be removed in a future release. Vault should be used as a plugin going forward. See https://github.com/crossplane-contrib/ess-plugin-vault for more information.
     */
    vault?: {
      /**
       * Auth configures an authentication method for Vault.
       */
      auth: {
        /**
         * Method configures which auth method will be used.
         */
        method: string;
        /**
         * Token configures Token Auth for Vault.
         */
        token?: {
          /**
           * Env is a reference to an environment variable that contains credentials that must be used to connect to the provider.
           */
          env?: {
            /**
             * Name is the name of an environment variable.
             */
            name: string;
          };
          /**
           * Fs is a reference to a filesystem location that contains credentials that must be used to connect to the provider.
           */
          fs?: {
            /**
             * Path is a filesystem path.
             */
            path: string;
          };
          /**
           * A SecretRef is a reference to a secret key that contains the credentials that must be used to connect to the provider.
           */
          secretRef?: {
            /**
             * The key to select.
             */
            key: string;
            /**
             * Name of the secret.
             */
            name: string;
            /**
             * Namespace of the secret.
             */
            namespace: string;
          };
          /**
           * Source of the credentials.
           */
          source: io_upbound_gcp_v1alpha1_StoreConfig.source;
        };
      };
      /**
       * CABundle configures CA bundle for Vault Server.
       */
      caBundle?: {
        /**
         * Env is a reference to an environment variable that contains credentials that must be used to connect to the provider.
         */
        env?: {
          /**
           * Name is the name of an environment variable.
           */
          name: string;
        };
        /**
         * Fs is a reference to a filesystem location that contains credentials that must be used to connect to the provider.
         */
        fs?: {
          /**
           * Path is a filesystem path.
           */
          path: string;
        };
        /**
         * A SecretRef is a reference to a secret key that contains the credentials that must be used to connect to the provider.
         */
        secretRef?: {
          /**
           * The key to select.
           */
          key: string;
          /**
           * Name of the secret.
           */
          name: string;
          /**
           * Namespace of the secret.
           */
          namespace: string;
        };
        /**
         * Source of the credentials.
         */
        source: io_upbound_gcp_v1alpha1_StoreConfig.source;
      };
      /**
       * MountPath is the mount path of the KV secrets engine.
       */
      mountPath: string;
      /**
       * Server is the url of the Vault server, e.g. "https://vault.acme.org"
       */
      server: string;
      /**
       * Version of the KV Secrets engine of Vault. https://www.vaultproject.io/docs/secrets/kv
       */
      version?: string;
    };
  };
  /**
   * A StoreConfigStatus represents the status of a StoreConfig.
   */
  status?: {
    /**
     * Conditions of the resource.
     */
    conditions?: Array<{
      /**
       * LastTransitionTime is the last time this condition transitioned from one status to another.
       */
      lastTransitionTime: string;
      /**
       * A Message containing details about this condition's last transition from one status to another, if any.
       */
      message?: string;
      /**
       * A Reason for this condition's last transition from one status to another.
       */
      reason: string;
      /**
       * Status of this condition; is it currently True, False, or Unknown?
       */
      status: string;
      /**
       * Type of this condition. At most one of each condition type may apply to a resource at any point in time.
       */
      type: string;
    }>;
  };
};

export namespace io_upbound_gcp_v1alpha1_StoreConfig {

  /**
   * Source of the credentials.
   */
  export enum source {
    NONE = 'None',
    SECRET = 'Secret',
    ENVIRONMENT = 'Environment',
    FILESYSTEM = 'Filesystem',
  }

  /**
   * Type configures which secret store to be used. Only the configuration block for this store will be used and others will be ignored if provided. Default is Kubernetes.
   */
  export enum type {
    KUBERNETES = 'Kubernetes',
    VAULT = 'Vault',
    PLUGIN = 'Plugin',
  }


}
