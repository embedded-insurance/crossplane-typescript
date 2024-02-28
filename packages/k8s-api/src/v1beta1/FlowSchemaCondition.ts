/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time';

/**
 * FlowSchemaCondition describes conditions for a FlowSchema.
 */
export type FlowSchemaCondition = {
  /**
   * `lastTransitionTime` is the last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Time;
  /**
   * `message` is a human-readable message indicating details about last transition.
   */
  message?: string;
  /**
   * `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
   */
  reason?: string;
  /**
   * `status` is the status of the condition. Can be True, False, Unknown. Required.
   */
  status?: string;
  /**
   * `type` is the type of the condition. Required.
   */
  type?: string;
};
