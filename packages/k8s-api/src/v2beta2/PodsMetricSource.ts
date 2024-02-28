/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricIdentifier } from './MetricIdentifier';
import type { MetricTarget } from './MetricTarget';

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export type PodsMetricSource = {
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifier;
  /**
   * target specifies the target value for the given metric
   */
  target: MetricTarget;
};
