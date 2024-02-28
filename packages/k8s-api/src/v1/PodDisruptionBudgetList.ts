/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PodDisruptionBudget } from './PodDisruptionBudget';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 */
export type PodDisruptionBudgetList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "policy/v1";
  /**
   * Items is a list of PodDisruptionBudgets
   */
  items: Array<PodDisruptionBudget>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "PodDisruptionBudgetList";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ListMeta;
};
