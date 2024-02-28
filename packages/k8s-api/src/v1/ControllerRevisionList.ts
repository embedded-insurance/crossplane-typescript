/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ControllerRevision } from './ControllerRevision';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export type ControllerRevisionList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "apps/v1";
  /**
   * Items is the list of ControllerRevisions
   */
  items: Array<ControllerRevision>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "ControllerRevisionList";
  /**
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ListMeta;
};
