/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Quantity } from '@ei-tech/k8s-apimachinery/v1/Quantity'

/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export type ResourceFieldSelector = {
  /**
   * Container name: required for volumes, optional for env vars
   */
  containerName?: string;
  /**
   * Specifies the output format of the exposed resources, defaults to "1"
   */
  divisor?: Quantity;
  /**
   * Required: resource to select
   */
  resource: string;
};
