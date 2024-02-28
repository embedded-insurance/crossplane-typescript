/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * Bucket is the Schema for the Buckets API. Creates a new bucket in Google Cloud Storage.
 */
export type Bucket = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "storage.gcp.upbound.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "Bucket";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?:ObjectMeta;
  /**
   * BucketSpec defines the desired state of Bucket
   */
  spec: {
    /**
     * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. This field is planned to be deprecated in favor of the ManagementPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
     */
    deletionPolicy?: 'Orphan' | 'Delete';
    forProvider: {
      /**
       * The bucket's Autoclass configuration.  Structure is documented below.
       */
      autoclass?: Array<{
        /**
         * While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.
         */
        enabled: boolean;
      }>;
      /**
       * The bucket's Cross-Origin Resource Sharing (CORS) configuration. Multiple blocks of this type are permitted. Structure is documented below.
       */
      cors?: Array<{
        /**
         * The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.
         */
        maxAgeSeconds?: number;
        /**
         * The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".
         */
        method?: Array<string>;
        /**
         * The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".
         */
        origin?: Array<string>;
        /**
         * The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
         */
        responseHeader?: Array<string>;
      }>;
      /**
       * The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty. Structure is documented below.
       */
      customPlacementConfig?: Array<{
        /**
         * The list of individual regions that comprise a dual-region bucket. See Cloud Storage bucket locations for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.
         */
        dataLocations: Array<string>;
      }>;
      /**
       * Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.
       */
      defaultEventBasedHold?: boolean;
      /**
       * The bucket's encryption configuration. Structure is documented below.
       */
      encryption?: Array<{
        /**
         * : The id of a Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.
         */
        defaultKmsKeyName: string;
      }>;
      /**
       * When deleting a bucket, this boolean option will delete all contained objects.
       */
      forceDestroy?: boolean;
      /**
       * A map of key/value label pairs to assign to the bucket.
       */
      labels?: Record<string, string>;
      /**
       * The bucket's Lifecycle Rules configuration. Multiple blocks of this type are permitted. Structure is documented below.
       */
      lifecycleRule?: Array<{
        /**
         * The Lifecycle Rule's action configuration. A single block of this type is supported. Structure is documented below.
         */
        action: Array<{
          /**
           * The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
           */
          storageClass?: string;
          /**
           * The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.
           */
          type: string;
        }>;
        /**
         * The Lifecycle Rule's condition configuration. A single block of this type is supported. Structure is documented below.
         */
        condition: Array<{
          /**
           * Minimum age of an object in days to satisfy this condition.
           */
          age?: number;
          /**
           * A date in the RFC 3339 format YYYY-MM-DD. This condition is satisfied when an object is created before midnight of the specified date in UTC.
           */
          createdBefore?: string;
          /**
           * A date in the RFC 3339 format YYYY-MM-DD. This condition is satisfied when the customTime metadata for the object is set to an earlier date than the date used in this lifecycle condition.
           */
          customTimeBefore?: string;
          /**
           * Days since the date set in the customTime metadata for the object. This condition is satisfied when the current date and time is at least the specified number of days after the customTime.
           */
          daysSinceCustomTime?: number;
          /**
           * Relevant only for versioned objects. Number of days elapsed since the noncurrent timestamp of an object.
           */
          daysSinceNoncurrentTime?: number;
          /**
           * One or more matching name prefixes to satisfy this condition.
           */
          matchesPrefix?: Array<string>;
          /**
           * Storage Class of objects to satisfy this condition. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, DURABLE_REDUCED_AVAILABILITY.
           */
          matchesStorageClass?: Array<string>;
          /**
           * One or more matching name suffixes to satisfy this condition.
           */
          matchesSuffix?: Array<string>;
          /**
           * Relevant only for versioned objects. The date in RFC 3339 (e.g. 2017-06-13) when the object became nonconcurrent.
           */
          noncurrentTimeBefore?: string;
          /**
           * Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.
           */
          numNewerVersions?: number;
          /**
           * Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".
           */
          withState?: string;
        }>;
      }>;
      /**
       * The GCS location.
       */
      location?: string;
      /**
       * The bucket's Access & Storage Logs configuration. Structure is documented below.
       */
      logging?: Array<{
        /**
         * The bucket that will receive log objects.
         */
        logBucket: string;
        /**
         * The object prefix for log objects. If it's not provided, by default GCS sets this to this bucket's name.
         */
        logObjectPrefix?: string;
      }>;
      /**
       * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
       */
      project?: string;
      /**
       * Prevents public access to a bucket. Acceptable values are "inherited" or "enforced". If "inherited", the bucket uses public access prevention. only if the bucket is subject to the public access prevention organization policy constraint. Defaults to "inherited".
       */
      publicAccessPrevention?: string;
      /**
       * Enables Requester Pays on a storage bucket.
       */
      requesterPays?: boolean;
      /**
       * Configuration of the bucket's data retention policy for how long objects in the bucket should be retained. Structure is documented below.
       */
      retentionPolicy?: Array<{
        /**
         * If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.  Caution: Locking a bucket is an irreversible action.
         */
        isLocked?: boolean;
        /**
         * The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 2,147,483,647 seconds.
         */
        retentionPeriod: number;
      }>;
      /**
       * The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
       */
      storageClass?: string;
      /**
       * Enables Uniform bucket-level access access to a bucket.
       */
      uniformBucketLevelAccess?: boolean;
      /**
       * The bucket's Versioning configuration.  Structure is documented below.
       */
      versioning?: Array<{
        /**
         * While set to true, versioning is fully enabled for this bucket.
         */
        enabled: boolean;
      }>;
      /**
       * Configuration if the bucket acts as a website. Structure is documented below.
       */
      website?: Array<{
        /**
         * Behaves as the bucket's directory index where missing objects are treated as potential directories.
         */
        mainPageSuffix?: string;
        /**
         * The custom object to return when a requested resource is not found.
         */
        notFoundPage?: string;
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
   * BucketStatus defines the observed state of Bucket.
   */
  status?: {
    atProvider?: {
      /**
       * The bucket's Autoclass configuration.  Structure is documented below.
       */
      autoclass?: Array<{
        /**
         * While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.
         */
        enabled?: boolean;
      }>;
      /**
       * The bucket's Cross-Origin Resource Sharing (CORS) configuration. Multiple blocks of this type are permitted. Structure is documented below.
       */
      cors?: Array<{
        /**
         * The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.
         */
        maxAgeSeconds?: number;
        /**
         * The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".
         */
        method?: Array<string>;
        /**
         * The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".
         */
        origin?: Array<string>;
        /**
         * The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
         */
        responseHeader?: Array<string>;
      }>;
      /**
       * The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty. Structure is documented below.
       */
      customPlacementConfig?: Array<{
        /**
         * The list of individual regions that comprise a dual-region bucket. See Cloud Storage bucket locations for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.
         */
        dataLocations?: Array<string>;
      }>;
      /**
       * Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.
       */
      defaultEventBasedHold?: boolean;
      /**
       * The bucket's encryption configuration. Structure is documented below.
       */
      encryption?: Array<{
        /**
         * : The id of a Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.
         */
        defaultKmsKeyName?: string;
      }>;
      /**
       * When deleting a bucket, this boolean option will delete all contained objects.
       */
      forceDestroy?: boolean;
      id?: string;
      /**
       * A map of key/value label pairs to assign to the bucket.
       */
      labels?: Record<string, string>;
      /**
       * The bucket's Lifecycle Rules configuration. Multiple blocks of this type are permitted. Structure is documented below.
       */
      lifecycleRule?: Array<{
        /**
         * The Lifecycle Rule's action configuration. A single block of this type is supported. Structure is documented below.
         */
        action?: Array<{
          /**
           * The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
           */
          storageClass?: string;
          /**
           * The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.
           */
          type?: string;
        }>;
        /**
         * The Lifecycle Rule's condition configuration. A single block of this type is supported. Structure is documented below.
         */
        condition?: Array<{
          /**
           * Minimum age of an object in days to satisfy this condition.
           */
          age?: number;
          /**
           * A date in the RFC 3339 format YYYY-MM-DD. This condition is satisfied when an object is created before midnight of the specified date in UTC.
           */
          createdBefore?: string;
          /**
           * A date in the RFC 3339 format YYYY-MM-DD. This condition is satisfied when the customTime metadata for the object is set to an earlier date than the date used in this lifecycle condition.
           */
          customTimeBefore?: string;
          /**
           * Days since the date set in the customTime metadata for the object. This condition is satisfied when the current date and time is at least the specified number of days after the customTime.
           */
          daysSinceCustomTime?: number;
          /**
           * Relevant only for versioned objects. Number of days elapsed since the noncurrent timestamp of an object.
           */
          daysSinceNoncurrentTime?: number;
          /**
           * One or more matching name prefixes to satisfy this condition.
           */
          matchesPrefix?: Array<string>;
          /**
           * Storage Class of objects to satisfy this condition. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, DURABLE_REDUCED_AVAILABILITY.
           */
          matchesStorageClass?: Array<string>;
          /**
           * One or more matching name suffixes to satisfy this condition.
           */
          matchesSuffix?: Array<string>;
          /**
           * Relevant only for versioned objects. The date in RFC 3339 (e.g. 2017-06-13) when the object became nonconcurrent.
           */
          noncurrentTimeBefore?: string;
          /**
           * Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.
           */
          numNewerVersions?: number;
          /**
           * Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".
           */
          withState?: string;
        }>;
      }>;
      /**
       * The GCS location.
       */
      location?: string;
      /**
       * The bucket's Access & Storage Logs configuration. Structure is documented below.
       */
      logging?: Array<{
        /**
         * The bucket that will receive log objects.
         */
        logBucket?: string;
        /**
         * The object prefix for log objects. If it's not provided, by default GCS sets this to this bucket's name.
         */
        logObjectPrefix?: string;
      }>;
      /**
       * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
       */
      project?: string;
      /**
       * Prevents public access to a bucket. Acceptable values are "inherited" or "enforced". If "inherited", the bucket uses public access prevention. only if the bucket is subject to the public access prevention organization policy constraint. Defaults to "inherited".
       */
      publicAccessPrevention?: string;
      /**
       * Enables Requester Pays on a storage bucket.
       */
      requesterPays?: boolean;
      /**
       * Configuration of the bucket's data retention policy for how long objects in the bucket should be retained. Structure is documented below.
       */
      retentionPolicy?: Array<{
        /**
         * If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.  Caution: Locking a bucket is an irreversible action.
         */
        isLocked?: boolean;
        /**
         * The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 2,147,483,647 seconds.
         */
        retentionPeriod?: number;
      }>;
      /**
       * The URI of the created resource.
       */
      selfLink?: string;
      /**
       * The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
       */
      storageClass?: string;
      /**
       * Enables Uniform bucket-level access access to a bucket.
       */
      uniformBucketLevelAccess?: boolean;
      /**
       * The base URL of the bucket, in the format gs://<bucket-name>.
       */
      url?: string;
      /**
       * The bucket's Versioning configuration.  Structure is documented below.
       */
      versioning?: Array<{
        /**
         * While set to true, versioning is fully enabled for this bucket.
         */
        enabled?: boolean;
      }>;
      /**
       * Configuration if the bucket acts as a website. Structure is documented below.
       */
      website?: Array<{
        /**
         * Behaves as the bucket's directory index where missing objects are treated as potential directories.
         */
        mainPageSuffix?: string;
        /**
         * The custom object to return when a requested resource is not found.
         */
        notFoundPage?: string;
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
