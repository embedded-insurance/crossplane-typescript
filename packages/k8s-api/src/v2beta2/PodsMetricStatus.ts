/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricIdentifier } from './MetricIdentifier';
import type { MetricValueStatus } from './MetricValueStatus';

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export type PodsMetricStatus = {
  /**
   * current contains the current value for the given metric
   */
  current: MetricValueStatus;
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifier;
};
