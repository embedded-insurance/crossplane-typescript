/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * PodFailurePolicyOnPodConditionsPattern describes a pattern for matching an actual pod condition type.
 */
export type PodFailurePolicyOnPodConditionsPattern = {
  /**
   * Specifies the required Pod condition status. To match a pod condition it is required that the specified status equals the pod condition status. Defaults to True.
   */
  status: string;
  /**
   * Specifies the required Pod condition type. To match a pod condition it is required that specified type equals the pod condition type.
   */
  type: string;
};