/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { Quantity } from "@ei-tech/k8s-apimachinery/v1/Quantity"

/**
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export type Overhead = {
  /**
   * PodFixed represents the fixed resource overhead associated with running a pod.
   */
  podFixed?: Record<string, Quantity>;
};
