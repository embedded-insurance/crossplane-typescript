/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time'

/**
 * NodeCondition contains condition information for a node.
 */
export type NodeCondition = {
  /**
   * Last time we got an update on a given condition.
   */
  lastHeartbeatTime?: Time;
  /**
   * Last time the condition transit from one status to another.
   */
  lastTransitionTime?: Time;
  /**
   * Human readable message indicating details about last transition.
   */
  message?: string;
  /**
   * (brief) reason for the condition's last transition.
   */
  reason?: string;
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string;
  /**
   * Type of node condition.
   */
  type: string;
};
