/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Quantity } from '@ei-tech/k8s-apimachinery/v1/Quantity'

/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
export type LimitRangeItem = {
  /**
   * Default resource requirement limit value by resource name if resource limit is omitted.
   */
  default?: Record<string, Quantity>;
  /**
   * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
   */
  defaultRequest?: Record<string, Quantity>;
  /**
   * Max usage constraints on this kind by resource name.
   */
  max?: Record<string, Quantity>;
  /**
   * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
   */
  maxLimitRequestRatio?: Record<string, Quantity>;
  /**
   * Min usage constraints on this kind by resource name.
   */
  min?: Record<string, Quantity>;
  /**
   * Type of resource that this limit applies to.
   */
  type: string;
};
