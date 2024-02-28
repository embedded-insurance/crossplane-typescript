/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta'

/**
 * ProjectUsageExportBucket is the Schema for the ProjectUsageExportBuckets API. Manages a project's usage export bucket.
 */
export type ProjectUsageExportBucket = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "cloudplatform.gcp.upbound.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "ProjectUsageExportBucket";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * ProjectUsageExportBucketSpec defines the desired state of ProjectUsageExportBucket
   */
  spec: {
    /**
     * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. This field is planned to be deprecated in favor of the ManagementPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
     */
    deletionPolicy?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.deletionPolicy;
    forProvider: {
      /**
       * :  The bucket to store reports in.
       */
      bucketName?: string;
      /**
       * Reference to a Bucket in storage to populate bucketName.
       */
      bucketNameRef?: {
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
          resolution?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolution;
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolve;
        };
      };
      /**
       * Selector for a Bucket in storage to populate bucketName.
       */
      bucketNameSelector?: {
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
          resolution?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolution;
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolve;
        };
      };
      /**
       * :  A prefix for the reports, for instance, the project name.
       */
      prefix?: string;
      /**
       * :  The project to set the export bucket on. If it is not provided, the provider project is used.
       */
      project?: string;
      /**
       * Reference to a Project to populate project.
       */
      projectRef?: {
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
          resolution?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolution;
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolve;
        };
      };
      /**
       * Selector for a Project to populate project.
       */
      projectSelector?: {
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
          resolution?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolution;
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolve;
        };
      };
    };
    /**
     * THIS IS AN ALPHA FIELD. Do not use it in production. It is not honored unless the relevant Crossplane feature flag is enabled, and may be changed or removed without notice. ManagementPolicy specifies the level of control Crossplane has over the managed external resource. This field is planned to replace the DeletionPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
     */
    managementPolicy?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.managementPolicy;
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
        resolution?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolution;
        /**
         * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
         */
        resolve?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolve;
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
        resolution?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolution;
        /**
         * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
         */
        resolve?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolve;
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
          resolution?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolution;
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket.resolve;
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
   * ProjectUsageExportBucketStatus defines the observed state of ProjectUsageExportBucket.
   */
  status?: {
    atProvider?: {
      /**
       * :  The bucket to store reports in.
       */
      bucketName?: string;
      id?: string;
      /**
       * :  A prefix for the reports, for instance, the project name.
       */
      prefix?: string;
      /**
       * :  The project to set the export bucket on. If it is not provided, the provider project is used.
       */
      project?: string;
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

export namespace io_upbound_gcp_cloudplatform_v1beta1_ProjectUsageExportBucket {

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
