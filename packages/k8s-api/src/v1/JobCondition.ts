/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time';

/**
 * JobCondition describes current state of a job.
 */
export type JobCondition = {
  /**
   * Last time the condition was checked.
   */
  lastProbeTime?: Time;
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
   * Type of job condition, Complete or Failed.
   */
  type: string;
};
