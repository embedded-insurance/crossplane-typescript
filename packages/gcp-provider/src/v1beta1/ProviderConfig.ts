/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * A ProviderConfig configures a GCP provider.
 */
export type ProviderConfig = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "gcp.upbound.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "ProviderConfig";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * A ProviderConfigSpec defines the desired state of a ProviderConfig.
   */
  spec: {
    /**
     * Credentials required to authenticate to this provider.
     */
    credentials: {
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
       * Source of the provider credentials.
       */
      source: io_upbound_gcp_v1beta1_ProviderConfig.source;
      /**
       * Upbound defines the options for authenticating using Upbound as an identity provider.
       */
      upbound?: {
        /**
         * Federation is the configuration for federated identity.
         */
        federation?: {
          /**
           * ProviderID is the fully-qualified identifier for the identity provider on GCP. The format is `project/<project-id>/locations/global/workloadIdentityPools/<identity-pool>/providers/<identity-provider>`.
           */
          providerID: string;
          /**
           * ServiceAccount is the email address for the attached service account.
           */
          serviceAccount: string;
        };
      };
    };
    /**
     * ProjectID is the project name (not numerical ID) of this GCP ProviderConfig.
     */
    projectID: string;
  };
  /**
   * A ProviderConfigStatus reflects the observed state of a ProviderConfig.
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
    /**
     * Users of this provider configuration.
     */
    users?: number;
  };
};

export namespace io_upbound_gcp_v1beta1_ProviderConfig {

  /**
   * Source of the provider credentials.
   */
  export enum source {
    NONE = 'None',
    SECRET = 'Secret',
    ACCESS_TOKEN = 'AccessToken',
    INJECTED_IDENTITY = 'InjectedIdentity',
    ENVIRONMENT = 'Environment',
    FILESYSTEM = 'Filesystem',
    UPBOUND = 'Upbound',
  }


}
