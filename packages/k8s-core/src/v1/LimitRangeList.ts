/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LimitRange } from './LimitRange';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta'

/**
 * LimitRangeList is a list of LimitRange items.
 */
export type LimitRangeList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "v1";
  /**
   * Items is a list of LimitRange objects. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
   */
  items: Array<LimitRange>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "LimitRangeList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  metadata?: ListMeta;
};
