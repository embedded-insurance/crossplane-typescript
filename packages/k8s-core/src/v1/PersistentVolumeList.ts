/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PersistentVolume } from './PersistentVolume';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta'

/**
 * PersistentVolumeList is a list of PersistentVolume items.
 */
export type PersistentVolumeList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "v1";
  /**
   * items is a list of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
   */
  items: Array<PersistentVolume>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "PersistentVolumeList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  metadata?: ListMeta;
};
