/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * HPAScalingPolicy is a single policy which must hold true for a specified past interval.
 */
export type HPAScalingPolicy = {
  /**
   * PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
   */
  periodSeconds: number;
  /**
   * Type is used to specify the scaling policy.
   */
  type: string;
  /**
   * Value contains the amount of change which is permitted by the policy. It must be greater than zero
   */
  value: number;
};