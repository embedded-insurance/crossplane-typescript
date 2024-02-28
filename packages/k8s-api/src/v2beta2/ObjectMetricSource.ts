/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CrossVersionObjectReference } from './CrossVersionObjectReference';
import type { MetricIdentifier } from './MetricIdentifier';
import type { MetricTarget } from './MetricTarget';

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export type ObjectMetricSource = {
  describedObject: CrossVersionObjectReference;
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifier;
  /**
   * target specifies the target value for the given metric
   */
  target: MetricTarget;
};
