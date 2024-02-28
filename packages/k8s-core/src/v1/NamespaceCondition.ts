/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time'

/**
 * NamespaceCondition contains details about state of namespace.
 */
export type NamespaceCondition = {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string;
  /**
   * Type of namespace controller condition.
   */
  type: string;
};
