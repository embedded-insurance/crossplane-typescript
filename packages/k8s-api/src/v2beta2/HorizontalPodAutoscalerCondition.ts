/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time';

/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export type HorizontalPodAutoscalerCondition = {
  /**
   * lastTransitionTime is the last time the condition transitioned from one status to another
   */
  lastTransitionTime?: Time;
  /**
   * message is a human-readable explanation containing details about the transition
   */
  message?: string;
  /**
   * reason is the reason for the condition's last transition.
   */
  reason?: string;
  /**
   * status is the status of the condition (True, False, Unknown)
   */
  status: string;
  /**
   * type describes the current condition
   */
  type: string;
};
