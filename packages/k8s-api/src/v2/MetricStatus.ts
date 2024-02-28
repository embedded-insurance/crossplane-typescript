/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerResourceMetricStatus } from './ContainerResourceMetricStatus';
import type { ExternalMetricStatus } from './ExternalMetricStatus';
import type { ObjectMetricStatus } from './ObjectMetricStatus';
import type { PodsMetricStatus } from './PodsMetricStatus';
import type { ResourceMetricStatus } from './ResourceMetricStatus';

/**
 * MetricStatus describes the last-read state of a single metric.
 */
export type MetricStatus = {
  /**
   * container resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing a single container in each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
   */
  containerResource?: ContainerResourceMetricStatus;
  /**
   * external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
   */
  external?: ExternalMetricStatus;
  /**
   * object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
   */
  object?: ObjectMetricStatus;
  /**
   * pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
   */
  pods?: PodsMetricStatus;
  /**
   * resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
   */
  resource?: ResourceMetricStatus;
  /**
   * type is the type of metric source.  It will be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each corresponds to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled
   */
  type: string;
};
