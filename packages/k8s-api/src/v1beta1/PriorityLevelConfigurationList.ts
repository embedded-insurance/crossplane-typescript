/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PriorityLevelConfiguration } from './PriorityLevelConfiguration';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects.
 */
export type PriorityLevelConfigurationList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "flowcontrol/v1beta1";
  /**
   * `items` is a list of request-priorities.
   */
  items: Array<PriorityLevelConfiguration>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "PriorityLevelConfigurationList";
  /**
   * `metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ListMeta;
};
