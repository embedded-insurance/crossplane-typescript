/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Quantity } from "@ei-tech/k8s-apimachinery/v1/Quantity";


/**
 * MetricValueStatus holds the current value for a metric
 */
export type MetricValueStatus = {
  /**
   * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
   */
  averageUtilization?: number;
  /**
   * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
   */
  averageValue?: Quantity;
  /**
   * value is the current value of the metric (as a quantity).
   */
  value?: Quantity;
};
