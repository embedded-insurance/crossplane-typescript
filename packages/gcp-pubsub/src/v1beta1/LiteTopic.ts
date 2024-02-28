/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * LiteTopic is the Schema for the LiteTopics API. A named resource to which messages are sent by publishers.
 */
export type LiteTopic = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "pubsub.gcp.upbound.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "LiteTopic";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * LiteTopicSpec defines the desired state of LiteTopic
   */
  spec: {
    /**
     * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. This field is planned to be deprecated in favor of the ManagementPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
     */
    deletionPolicy?: 'Orphan' | 'Delete';
    forProvider: {
      /**
       * The settings for this topic's partitions. Structure is documented below.
       */
      partitionConfig?: Array<{
        /**
         * The capacity configuration. Structure is documented below.
         */
        capacity?: Array<{
          /**
           * Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
           */
          publishMibPerSec: number;
          /**
           * Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
           */
          subscribeMibPerSec: number;
        }>;
        /**
         * The number of partitions in the topic. Must be at least 1.
         */
        count: number;
      }>;
      /**
       * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
       */
      project?: string;
      /**
       * The region of the pubsub lite topic.
       */
      region?: string;
      /**
       * The settings for this topic's Reservation usage. Structure is documented below.
       */
      reservationConfig?: Array<{
        /**
         * The Reservation to use for this topic's throughput capacity.
         */
        throughputReservation?: string;
        /**
         * Reference to a LiteReservation to populate throughputReservation.
         */
        throughputReservationRef?: {
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
         * Selector for a LiteReservation to populate throughputReservation.
         */
        throughputReservationSelector?: {
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
      }>;
      /**
       * The settings for a topic's message retention. Structure is documented below.
       */
      retentionConfig?: Array<{
        /**
         * The provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic's partitions grows beyond this value, older messages will be dropped to make room for newer ones, regardless of the value of period.
         */
        perPartitionBytes: string;
        /**
         * How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below perPartitionBytes. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
         */
        period?: string;
      }>;
      /**
       * The zone of the pubsub lite topic.
       */
      zone: string;
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
   * LiteTopicStatus defines the observed state of LiteTopic.
   */
  status?: {
    atProvider?: {
      /**
       * an identifier for the resource with format projects/{{project}}/locations/{{zone}}/topics/{{name}}
       */
      id?: string;
      /**
       * The settings for this topic's partitions. Structure is documented below.
       */
      partitionConfig?: Array<{
        /**
         * The capacity configuration. Structure is documented below.
         */
        capacity?: Array<{
          /**
           * Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
           */
          publishMibPerSec?: number;
          /**
           * Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
           */
          subscribeMibPerSec?: number;
        }>;
        /**
         * The number of partitions in the topic. Must be at least 1.
         */
        count?: number;
      }>;
      /**
       * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
       */
      project?: string;
      /**
       * The region of the pubsub lite topic.
       */
      region?: string;
      /**
       * The settings for this topic's Reservation usage. Structure is documented below.
       */
      reservationConfig?: Array<{
        /**
         * The Reservation to use for this topic's throughput capacity.
         */
        throughputReservation?: string;
      }>;
      /**
       * The settings for a topic's message retention. Structure is documented below.
       */
      retentionConfig?: Array<{
        /**
         * The provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic's partitions grows beyond this value, older messages will be dropped to make room for newer ones, regardless of the value of period.
         */
        perPartitionBytes?: string;
        /**
         * How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below perPartitionBytes. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
         */
        period?: string;
      }>;
      /**
       * The zone of the pubsub lite topic.
       */
      zone?: string;
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
