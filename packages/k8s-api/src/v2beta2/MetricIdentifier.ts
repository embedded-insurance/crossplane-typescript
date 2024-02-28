/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LabelSelector } from "@ei-tech/k8s-apimachinery/v1/LabelSelector";

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 */
export type MetricIdentifier = {
  /**
   * name is the name of the given metric
   */
  name: string;
  /**
   * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
   */
  selector?: LabelSelector;
};
