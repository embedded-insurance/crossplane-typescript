/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta'

/**
 * Project is the Schema for the Projects API. Allows management of a Google Cloud Platform project.
 */
export type Project = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "cloudplatform.gcp.upbound.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "Project";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * ProjectSpec defines the desired state of Project
   */
  spec: {
    /**
     * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. This field is planned to be deprecated in favor of the ManagementPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
     */
    deletionPolicy?: io_upbound_gcp_cloudplatform_v1beta1_Project.deletionPolicy;
    forProvider: {
      /**
       * Controls whether the 'default' network exists on the project. Defaults to true, where it is created. Therefore, for quota purposes, you will still need to have 1 network slot available to create the project successfully, even if you set auto_create_network to false.googleapis.com on the project to interact with the GCE API and currently leaves it enabled.
       */
      autoCreateNetwork?: boolean;
      /**
       * The alphanumeric ID of the billing account this project belongs to.user) on the billing account. See Google Cloud Billing API Access Control for more details.
       */
      billingAccount?: string;
      /**
       * The numeric ID of the folder this project should be created under. Only one of org_id or folder_id may be specified. If the folder_id is specified, then the project is created under the specified folder. Changing this forces the project to be migrated to the newly specified folder.
       */
      folderId?: string;
      /**
       * Reference to a Folder in cloudplatform to populate folderId.
       */
      folderIdRef?: {
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
          resolution?: io_upbound_gcp_cloudplatform_v1beta1_Project.resolution;
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: io_upbound_gcp_cloudplatform_v1beta1_Project.resolve;
        };
      };
      /**
       * Selector for a Folder in cloudplatform to populate folderId.
       */
      folderIdSelector?: {
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
          resolution?: io_upbound_gcp_cloudplatform_v1beta1_Project.resolution;
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: io_upbound_gcp_cloudplatform_v1beta1_Project.resolve;
        };
      };
      /**
       * A set of key/value label pairs to assign to the project.
       */
      labels?: Record<string, string>;
      /**
       * The display name of the project.
       */
      name?: string;
      /**
       * The numeric ID of the organization this project belongs to. Changing this forces a new project to be created.  Only one of org_id or folder_id may be specified. If the org_id is specified then the project is created at the top level. Changing this forces the project to be migrated to the newly specified organization. The numeric ID of the organization this project belongs to.
       */
      orgId?: string;
      /**
       * The project ID. Changing this forces a new project to be created.
       */
      projectId?: string;
      skipDelete?: boolean;
    };
    /**
     * THIS IS AN ALPHA FIELD. Do not use it in production. It is not honored unless the relevant Crossplane feature flag is enabled, and may be changed or removed without notice. ManagementPolicy specifies the level of control Crossplane has over the managed external resource. This field is planned to replace the DeletionPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
     */
    managementPolicy?: io_upbound_gcp_cloudplatform_v1beta1_Project.managementPolicy;
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
        resolution?: io_upbound_gcp_cloudplatform_v1beta1_Project.resolution;
        /**
         * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
         */
        resolve?: io_upbound_gcp_cloudplatform_v1beta1_Project.resolve;
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
        resolution?: io_upbound_gcp_cloudplatform_v1beta1_Project.resolution;
        /**
         * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
         */
        resolve?: io_upbound_gcp_cloudplatform_v1beta1_Project.resolve;
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
          resolution?: io_upbound_gcp_cloudplatform_v1beta1_Project.resolution;
          /**
           * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
           */
          resolve?: io_upbound_gcp_cloudplatform_v1beta1_Project.resolve;
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
   * ProjectStatus defines the observed state of Project.
   */
  status?: {
    atProvider?: {
      /**
       * Controls whether the 'default' network exists on the project. Defaults to true, where it is created. Therefore, for quota purposes, you will still need to have 1 network slot available to create the project successfully, even if you set auto_create_network to false.googleapis.com on the project to interact with the GCE API and currently leaves it enabled.
       */
      autoCreateNetwork?: boolean;
      /**
       * The alphanumeric ID of the billing account this project belongs to.user) on the billing account. See Google Cloud Billing API Access Control for more details.
       */
      billingAccount?: string;
      /**
       * The numeric ID of the folder this project should be created under. Only one of org_id or folder_id may be specified. If the folder_id is specified, then the project is created under the specified folder. Changing this forces the project to be migrated to the newly specified folder.
       */
      folderId?: string;
      /**
       * an identifier for the resource with format projects/{{project}}
       */
      id?: string;
      /**
       * A set of key/value label pairs to assign to the project.
       */
      labels?: Record<string, string>;
      /**
       * The display name of the project.
       */
      name?: string;
      /**
       * The numeric identifier of the project.
       */
      number?: string;
      /**
       * The numeric ID of the organization this project belongs to. Changing this forces a new project to be created.  Only one of org_id or folder_id may be specified. If the org_id is specified then the project is created at the top level. Changing this forces the project to be migrated to the newly specified organization. The numeric ID of the organization this project belongs to.
       */
      orgId?: string;
      /**
       * The project ID. Changing this forces a new project to be created.
       */
      projectId?: string;
      skipDelete?: boolean;
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

export namespace io_upbound_gcp_cloudplatform_v1beta1_Project {

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
