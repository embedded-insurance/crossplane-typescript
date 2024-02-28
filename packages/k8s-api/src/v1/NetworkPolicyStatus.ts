/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Condition } from '@ei-tech/k8s-apimachinery/v1/Condition';

/**
 * NetworkPolicyStatus describe the current state of the NetworkPolicy.
 */
export type NetworkPolicyStatus = {
  /**
   * Conditions holds an array of metav1.Condition that describe the state of the NetworkPolicy. Current service state
   */
  conditions?: Array<Condition>;
};
