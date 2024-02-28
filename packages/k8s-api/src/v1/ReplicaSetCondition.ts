/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time';

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export type ReplicaSetCondition = {
  /**
   * The last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Time;
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string;
  /**
   * The reason for the condition's last transition.
   */
  reason?: string;
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string;
  /**
   * Type of replica set condition.
   */
  type: string;
};
