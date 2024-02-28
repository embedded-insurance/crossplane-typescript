/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DaemonSet } from './DaemonSet';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * DaemonSetList is a collection of daemon sets.
 */
export type DaemonSetList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "apps/v1";
  /**
   * A list of daemon sets.
   */
  items: Array<DaemonSet>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "DaemonSetList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ListMeta;
};
