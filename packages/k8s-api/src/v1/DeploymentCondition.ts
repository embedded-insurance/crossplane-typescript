/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time';

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export type DeploymentCondition = {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Time;
  /**
   * The last time this condition was updated.
   */
  lastUpdateTime?: Time;
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
   * Type of deployment condition.
   */
  type: string;
};
