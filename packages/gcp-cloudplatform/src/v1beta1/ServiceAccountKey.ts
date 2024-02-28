/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta'

/**
 * ServiceAccountKey is the Schema for the ServiceAccountKeys API. Allows management of a Google Cloud Platform service account Key
 */
export type ServiceAccountKey = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "cloudplatform.gcp.upbound.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "ServiceAccountKey";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * ServiceAccountKeySpec defines the desired state of ServiceAccountKey
   */
  spec: {
    /**
     * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. This field is planned to be deprecated in favor of the ManagementPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
     */
    deletionPolicy?: io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey.deletionPolicy;
    forProvider: {
      /**
       * Arbitrary map of values that, when changed, will trigger a new key to be generated.
       */
      keepers?: Record<string, string>;
      /**
       * The algorithm used to generate the key. KEY_ALG_RSA_2048 is the default algorithm. Valid values are listed at ServiceAccountPrivateKeyType (only used on create)
       */
      keyAlgorithm?: string;
      /**
       * The output format of the private key. TYPE_GOOGLE_CREDENTIALS_FILE is the default output format.
       */
      privateKeyType?: string;
      /**
       * Public key data to create a service account key for given service account. The expected format for this field is a base64 encoded X509_PEM and it conflicts with public_key_type and private_key_type.
       */
      publicKeyData?: string;
      /**
       * The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.
       */
      publicKeyType?: string;
      /**
       * The Service account id of the Key. This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}. If the {ACCOUNT}-only syntax is used, either the full email address of the service account or its name can be specified as a value, in which case the project will automatically be inferred from the account. Otherwise, if the projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT} syntax is used, the {ACCOUNT} specified can be the full email address of the service account or the service account's unique id. Substituting - as a wildcard for the {PROJECT_ID} will infer the project from the account.
       */
      serviceAccountId?: string;
      /**
       * Reference to a ServiceAccount to populate serviceAccountId.
       */
      serviceAccountIdRef?: {
        /**
         * Name of the referenced object.
         */
        name: string;
        /**
         * Policies for referencing.
         */
        policy?: {
          /**
           * Resolution specifies whether resolution of this reference is required. The default is 'Required', which means the reconcile will fail if the reference cannot be resolved. 'Optional' means this reference will be a no-op if it cannot be resolved.
           */
          resolution?: io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey.resolution;
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey.resolve;
        };
      };
      /**
       * Selector for a ServiceAccount to populate serviceAccountId.
       */
      serviceAccountIdSelector?: {
        /**
         * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
         */
        matchControllerRef?: boolean;
        /**
         * MatchLabels ensures an object with matching labels is selected.
         */
        matchLabels?: Record<string, string>;
        /**
         * Policies for selection.
         */
        policy?: {
          /**
           * Resolution specifies whether resolution of this reference is required. The default is 'Required', which means the reconcile will fail if the reference cannot be resolved. 'Optional' means this reference will be a no-op if it cannot be resolved.
           */
          resolution?: io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey.resolution;
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey.resolve;
        };
      };
    };
    /**
     * THIS IS AN ALPHA FIELD. Do not use it in production. It is not honored unless the relevant Crossplane feature flag is enabled, and may be changed or removed without notice. ManagementPolicy specifies the level of control Crossplane has over the managed external resource. This field is planned to replace the DeletionPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
     */
    managementPolicy?: io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey.managementPolicy;
    /**
     * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
     */
    providerConfigRef?: {
      /**
       * Name of the referenced object.
       */
      name: string;
      /**
       * Policies for referencing.
       */
      policy?: {
        /**
         * Resolution specifies whether resolution of this reference is required. The default is 'Required', which means the reconcile will fail if the reference cannot be resolved. 'Optional' means this reference will be a no-op if it cannot be resolved.
         */
        resolution?: io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey.resolution;
        /**
         * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
         */
        resolve?: io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey.resolve;
      };
    };
    /**
     * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
     */
    providerRef?: {
      /**
       * Name of the referenced object.
       */
      name: string;
      /**
       * Policies for referencing.
       */
      policy?: {
        /**
         * Resolution specifies whether resolution of this reference is required. The default is 'Required', which means the reconcile will fail if the reference cannot be resolved. 'Optional' means this reference will be a no-op if it cannot be resolved.
         */
        resolution?: io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey.resolution;
        /**
         * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
         */
        resolve?: io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey.resolve;
      };
    };
    /**
     * PublishConnectionDetailsTo specifies the connection secret config which contains a name, metadata and a reference to secret store config to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
     */
    publishConnectionDetailsTo?: {
      /**
       * SecretStoreConfigRef specifies which secret store config should be used for this ConnectionSecret.
       */
      configRef?: {
        /**
         * Name of the referenced object.
         */
        name: string;
        /**
         * Policies for referencing.
         */
        policy?: {
          /**
           * Resolution specifies whether resolution of this reference is required. The default is 'Required', which means the reconcile will fail if the reference cannot be resolved. 'Optional' means this reference will be a no-op if it cannot be resolved.
           */
          resolution?: io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey.resolution;
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey.resolve;
        };
      };
      /**
       * Metadata is the metadata for connection secret.
       */
      metadata?: {
        /**
         * Annotations are the annotations to be added to connection secret. - For Kubernetes secrets, this will be used as "metadata.annotations". - It is up to Secret Store implementation for others store types.
         */
        annotations?: Record<string, string>;
        /**
         * Labels are the labels/tags to be added to connection secret. - For Kubernetes secrets, this will be used as "metadata.labels". - It is up to Secret Store implementation for others store types.
         */
        labels?: Record<string, string>;
        /**
         * Type is the SecretType for the connection secret. - Only valid for Kubernetes Secret Stores.
         */
        type?: string;
      };
      /**
       * Name is the name of the connection secret.
       */
      name: string;
    };
    /**
     * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource. This field is planned to be replaced in a future release in favor of PublishConnectionDetailsTo. Currently, both could be set independently and connection details would be published to both without affecting each other.
     */
    writeConnectionSecretToRef?: {
      /**
       * Name of the secret.
       */
      name: string;
      /**
       * Namespace of the secret.
       */
      namespace: string;
    };
  };
  /**
   * ServiceAccountKeyStatus defines the observed state of ServiceAccountKey.
   */
  status?: {
    atProvider?: {
      /**
       * an identifier for the resource with format projects/{{project}}/serviceAccounts/{{account}}/keys/{{key}}
       */
      id?: string;
      /**
       * Arbitrary map of values that, when changed, will trigger a new key to be generated.
       */
      keepers?: Record<string, string>;
      /**
       * The algorithm used to generate the key. KEY_ALG_RSA_2048 is the default algorithm. Valid values are listed at ServiceAccountPrivateKeyType (only used on create)
       */
      keyAlgorithm?: string;
      /**
       * The name used for this key pair
       */
      name?: string;
      /**
       * The output format of the private key. TYPE_GOOGLE_CREDENTIALS_FILE is the default output format.
       */
      privateKeyType?: string;
      /**
       * The public key, base64 encoded
       */
      publicKey?: string;
      /**
       * Public key data to create a service account key for given service account. The expected format for this field is a base64 encoded X509_PEM and it conflicts with public_key_type and private_key_type.
       */
      publicKeyData?: string;
      /**
       * The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.
       */
      publicKeyType?: string;
      /**
       * The Service account id of the Key. This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}. If the {ACCOUNT}-only syntax is used, either the full email address of the service account or its name can be specified as a value, in which case the project will automatically be inferred from the account. Otherwise, if the projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT} syntax is used, the {ACCOUNT} specified can be the full email address of the service account or the service account's unique id. Substituting - as a wildcard for the {PROJECT_ID} will infer the project from the account.
       */
      serviceAccountId?: string;
      /**
       * The key can be used after this timestamp. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
       */
      validAfter?: string;
      /**
       * The key can be used before this timestamp. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
       */
      validBefore?: string;
    };
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

export namespace io_upbound_gcp_cloudplatform_v1beta1_ServiceAccountKey {

  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. This field is planned to be deprecated in favor of the ManagementPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
   */
  export enum deletionPolicy {
    ORPHAN = 'Orphan',
    DELETE = 'Delete',
  }

  /**
   * Resolution specifies whether resolution of this reference is required. The default is 'Required', which means the reconcile will fail if the reference cannot be resolved. 'Optional' means this reference will be a no-op if it cannot be resolved.
   */
  export enum resolution {
    REQUIRED = 'Required',
    OPTIONAL = 'Optional',
  }

  /**
   * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
   */
  export enum resolve {
    ALWAYS = 'Always',
    IF_NOT_PRESENT = 'IfNotPresent',
  }

  /**
   * THIS IS AN ALPHA FIELD. Do not use it in production. It is not honored unless the relevant Crossplane feature flag is enabled, and may be changed or removed without notice. ManagementPolicy specifies the level of control Crossplane has over the managed external resource. This field is planned to replace the DeletionPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
   */
  export enum managementPolicy {
    FULL_CONTROL = 'FullControl',
    OBSERVE_ONLY = 'ObserveOnly',
    ORPHAN_ON_DELETE = 'OrphanOnDelete',
  }


}
