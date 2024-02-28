/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * Topic is the Schema for the Topics API. A named resource to which messages are sent by publishers.
 */
export type Topic = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "pubsub.gcp.upbound.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "Topic";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * TopicSpec defines the desired state of Topic
   */
  spec: {
    /**
     * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. This field is planned to be deprecated in favor of the ManagementPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
     */
    deletionPolicy?: 'Orphan' | 'Delete';
    forProvider: {
      /**
       * The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. Your project's PubSub service account (service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com) must have roles/cloudkms.cryptoKeyEncrypterDecrypter to use this feature. The expected format is projects*locations*keyRings*cryptoKeys*
       */
      kmsKeyName?: string;
      /**
       * Reference to a CryptoKey in kms to populate kmsKeyName.
       */
      kmsKeyNameRef?: {
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
          resolution?: 'Required' | 'Optional';
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: 'Always' | 'IfNotPresent';
        };
      };
      /**
       * Selector for a CryptoKey in kms to populate kmsKeyName.
       */
      kmsKeyNameSelector?: {
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
          resolution?: 'Required' | 'Optional';
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: 'Always' | 'IfNotPresent';
        };
      };
      /**
       * A set of key/value label pairs to assign to this Topic.
       */
      labels?: Record<string, string>;
      /**
       * Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last messageRetentionDuration are always available to subscribers. For instance, it allows any attached subscription to seek to a timestamp that is up to messageRetentionDuration in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. Cannot be more than 31 days or less than 10 minutes.
       */
      messageRetentionDuration?: string;
      /**
       * Policy constraining the set of Google Cloud Platform regions where messages published to the topic may be stored. If not present, then no constraints are in effect. Structure is documented below.
       */
      messageStoragePolicy?: Array<{
        /**
         * A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage. Messages published by publishers running in non-allowed GCP regions (or running outside of GCP altogether) will be routed for storage in one of the allowed regions. An empty list means that no regions are allowed, and is not a valid configuration.
         */
        allowedPersistenceRegions: Array<string>;
      }>;
      /**
       * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
       */
      project?: string;
      /**
       * Settings for validating messages published against a schema. Structure is documented below.
       */
      schemaSettings?: Array<{
        /**
         * The encoding of messages validated against schema. Default value is ENCODING_UNSPECIFIED. Possible values are: ENCODING_UNSPECIFIED, JSON, BINARY.
         */
        encoding?: string;
        /**
         * The name of the schema that messages published should be validated against. Format is projects/{project}/schemas/{schema}. The value of this field will be deleted-schema if the schema has been deleted.
         */
        schema: string;
      }>;
    };
    /**
     * THIS IS AN ALPHA FIELD. Do not use it in production. It is not honored unless the relevant Crossplane feature flag is enabled, and may be changed or removed without notice. ManagementPolicy specifies the level of control Crossplane has over the managed external resource. This field is planned to replace the DeletionPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
     */
    managementPolicy?: 'FullControl' | 'ObserveOnly' | 'OrphanOnDelete';
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
        resolution?: 'Required' | 'Optional';
        /**
         * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
         */
        resolve?: 'Always' | 'IfNotPresent';
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
        resolution?: 'Required' | 'Optional';
        /**
         * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
         */
        resolve?: 'Always' | 'IfNotPresent';
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
          resolution?: 'Required' | 'Optional';
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: 'Always' | 'IfNotPresent';
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
   * TopicStatus defines the observed state of Topic.
   */
  status?: {
    atProvider?: {
      /**
       * an identifier for the resource with format projects/{{project}}/topics/{{name}}
       */
      id?: string;
      /**
       * The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. Your project's PubSub service account (service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com) must have roles/cloudkms.cryptoKeyEncrypterDecrypter to use this feature. The expected format is projects*locations*keyRings*cryptoKeys*
       */
      kmsKeyName?: string;
      /**
       * A set of key/value label pairs to assign to this Topic.
       */
      labels?: Record<string, string>;
      /**
       * Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last messageRetentionDuration are always available to subscribers. For instance, it allows any attached subscription to seek to a timestamp that is up to messageRetentionDuration in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. Cannot be more than 31 days or less than 10 minutes.
       */
      messageRetentionDuration?: string;
      /**
       * Policy constraining the set of Google Cloud Platform regions where messages published to the topic may be stored. If not present, then no constraints are in effect. Structure is documented below.
       */
      messageStoragePolicy?: Array<{
        /**
         * A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage. Messages published by publishers running in non-allowed GCP regions (or running outside of GCP altogether) will be routed for storage in one of the allowed regions. An empty list means that no regions are allowed, and is not a valid configuration.
         */
        allowedPersistenceRegions?: Array<string>;
      }>;
      /**
       * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
       */
      project?: string;
      /**
       * Settings for validating messages published against a schema. Structure is documented below.
       */
      schemaSettings?: Array<{
        /**
         * The encoding of messages validated against schema. Default value is ENCODING_UNSPECIFIED. Possible values are: ENCODING_UNSPECIFIED, JSON, BINARY.
         */
        encoding?: string;
        /**
         * The name of the schema that messages published should be validated against. Format is projects/{project}/schemas/{schema}. The value of this field will be deleted-schema if the schema has been deleted.
         */
        schema?: string;
      }>;
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
