/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * BucketObject is the Schema for the BucketObjects API. Creates a new object inside a specified bucket
 */
export type BucketObject = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "storage.gcp.upbound.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "BucketObject";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?:ObjectMeta;
  /**
   * BucketObjectSpec defines the desired state of BucketObject
   */
  spec: {
    /**
     * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. This field is planned to be deprecated in favor of the ManagementPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
     */
    deletionPolicy?: 'Orphan' | 'Delete';
    forProvider: {
      /**
       * The name of the containing bucket.
       */
      bucket?: string;
      /**
       * Reference to a Bucket to populate bucket.
       */
      bucketRef?: {
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
       * Selector for a Bucket to populate bucket.
       */
      bucketSelector?: {
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
       * Cache-Control directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600
       */
      cacheControl?: string;
      /**
       * Data as string to be uploaded. Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.
       */
      content?: string;
      /**
       * Content-Disposition of the object data.
       */
      contentDisposition?: string;
      /**
       * Content-Encoding of the object data.
       */
      contentEncoding?: string;
      /**
       * Content-Language of the object data.
       */
      contentLanguage?: string;
      /**
       * Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".
       */
      contentType?: string;
      /**
       * Enables object encryption with Customer-Supplied Encryption Key (CSEK). [Google documentation about CSEK.](https://cloud.google.com/storage/docs/encryption/customer-supplied-keys) Structure is documented below.
       */
      customerEncryption?: Array<{
        /**
         * Encryption algorithm. Default: AES256
         */
        encryptionAlgorithm?: string;
        /**
         * Base64 encoded Customer-Supplied Encryption Key.
         */
        encryptionKeySecretRef: {
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
      }>;
      /**
       * MD5 hash of the data, encoded using base64. This field is not present for composite objects. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.
       */
      detectMd5Hash?: string;
      /**
       * Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).
       */
      eventBasedHold?: boolean;
      /**
       * The resource name of the Cloud KMS key that will be used to encrypt the object.
       */
      kmsKeyName?: string;
      /**
       * User-provided metadata, in key/value pairs.
       */
      metadata?: Record<string, string>;
      /**
       * The name of the object. If you're interpolating the name of this object, see output_name instead.
       */
      name?: string;
      /**
       * A path to the data you want to upload. Must be defined if content is not.
       */
      source?: string;
      /**
       * The StorageClass of the new bucket object. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.
       */
      storageClass?: string;
      /**
       * Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites.
       */
      temporaryHold?: boolean;
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
   * BucketObjectStatus defines the observed state of BucketObject.
   */
  status?: {
    atProvider?: {
      /**
       * The name of the containing bucket.
       */
      bucket?: string;
      /**
       * Cache-Control directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600
       */
      cacheControl?: string;
      /**
       * Data as string to be uploaded. Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.
       */
      content?: string;
      /**
       * Content-Disposition of the object data.
       */
      contentDisposition?: string;
      /**
       * Content-Encoding of the object data.
       */
      contentEncoding?: string;
      /**
       * Content-Language of the object data.
       */
      contentLanguage?: string;
      /**
       * Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".
       */
      contentType?: string;
      /**
       * (Computed) Base 64 CRC32 hash of the uploaded data.
       */
      crc32c?: string;
      /**
       * Enables object encryption with Customer-Supplied Encryption Key (CSEK). [Google documentation about CSEK.](https://cloud.google.com/storage/docs/encryption/customer-supplied-keys) Structure is documented below.
       */
      customerEncryption?: Array<{
        /**
         * Encryption algorithm. Default: AES256
         */
        encryptionAlgorithm?: string;
      }>;
      /**
       * MD5 hash of the data, encoded using base64. This field is not present for composite objects. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.
       */
      detectMd5Hash?: string;
      /**
       * Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).
       */
      eventBasedHold?: boolean;
      id?: string;
      /**
       * The resource name of the Cloud KMS key that will be used to encrypt the object.
       */
      kmsKeyName?: string;
      /**
       * (Computed) Base 64 MD5 hash of the uploaded data.
       */
      md5hash?: string;
      /**
       * (Computed) A url reference to download this object.
       */
      mediaLink?: string;
      /**
       * User-provided metadata, in key/value pairs.
       */
      metadata?: Record<string, string>;
      /**
       * The name of the object. If you're interpolating the name of this object, see output_name instead.
       */
      name?: string;
      /**
       * (Computed) The name of the object. Use this field in interpolations with google_storage_object_acl to recreate google_storage_object_acl resources when your google_storage_bucket_object is recreated.
       */
      outputName?: string;
      /**
       * (Computed) A url reference to this object.
       */
      selfLink?: string;
      /**
       * A path to the data you want to upload. Must be defined if content is not.
       */
      source?: string;
      /**
       * The StorageClass of the new bucket object. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.
       */
      storageClass?: string;
      /**
       * Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites.
       */
      temporaryHold?: boolean;
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
