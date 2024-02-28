/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricIdentifier } from './MetricIdentifier';
import type { MetricTarget } from './MetricTarget';

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
export type ExternalMetricSource = {
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifier;
  /**
   * target specifies the target value for the given metric
   */
  target: MetricTarget;
};
