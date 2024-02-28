/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time'

/**
 * PersistentVolumeClaimCondition contails details about state of pvc
 */
export type PersistentVolumeClaimCondition = {
  /**
   * lastProbeTime is the time we probed the condition.
   */
  lastProbeTime?: Time;
  /**
   * lastTransitionTime is the time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Time;
  /**
   * message is the human-readable message indicating details about last transition.
   */
  message?: string;
  /**
   * reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized.
   */
  reason?: string;
  status: string;
  type: string;
};
