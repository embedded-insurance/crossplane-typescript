/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time'

/**
 * PodCondition contains details for the current condition of this pod.
 */
export type PodCondition = {
  /**
   * Last time we probed the condition.
   */
  lastProbeTime?: Time;
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Time;
  /**
   * Human-readable message indicating details about last transition.
   */
  message?: string;
  /**
   * Unique, one-word, CamelCase reason for the condition's last transition.
   */
  reason?: string;
  /**
   * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
   */
  status: string;
  /**
   * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
   */
  type: string;
};
