/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReplicationController } from './ReplicationController';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta'

/**
 * ReplicationControllerList is a collection of replication controllers.
 */
export type ReplicationControllerList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "v1";
  /**
   * List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
   */
  items: Array<ReplicationController>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "ReplicationControllerList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  metadata?: ListMeta;
};
