/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricValueStatus } from './MetricValueStatus';

/**
 * ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export type ContainerResourceMetricStatus = {
  /**
   * Container is the name of the container in the pods of the scaling target
   */
  container: string;
  /**
   * current contains the current value for the given metric
   */
  current: MetricValueStatus;
  /**
   * Name is the name of the resource in question.
   */
  name: string;
};
