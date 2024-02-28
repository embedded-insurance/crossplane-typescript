/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CSIStorageCapacity } from './CSIStorageCapacity'
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * CSIStorageCapacityList is a collection of CSIStorageCapacity objects.
 */
export type CSIStorageCapacityList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "storage/v1beta1";
  /**
   * Items is the list of CSIStorageCapacity objects.
   */
  items: Array<CSIStorageCapacity>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "CSIStorageCapacityList";
  /**
   * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ListMeta;
};
