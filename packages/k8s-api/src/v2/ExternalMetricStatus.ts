/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricIdentifier } from './MetricIdentifier';
import type { MetricValueStatus } from './MetricValueStatus';

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export type ExternalMetricStatus = {
  /**
   * current contains the current value for the given metric
   */
  current: MetricValueStatus;
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifier;
};
