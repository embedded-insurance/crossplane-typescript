/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Quantity } from "@ei-tech/k8s-apimachinery/v1/Quantity";

/**
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 */
export type MetricTarget = {
  /**
   * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
   */
  averageUtilization?: number;
  /**
   * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
   */
  averageValue?: Quantity;
  /**
   * type represents whether the metric type is Utilization, Value, or AverageValue
   */
  type: string;
  /**
   * value is the target value of the metric (as a quantity).
   */
  value?: Quantity;
};
