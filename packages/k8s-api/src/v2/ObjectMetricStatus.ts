/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CrossVersionObjectReference } from './CrossVersionObjectReference';
import type { MetricIdentifier } from './MetricIdentifier';
import type { MetricValueStatus } from './MetricValueStatus';

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export type ObjectMetricStatus = {
  /**
   * current contains the current value for the given metric
   */
  current: MetricValueStatus;
  /**
   * DescribedObject specifies the descriptions of a object,such as kind,name apiVersion
   */
  describedObject: CrossVersionObjectReference;
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifier;
};
