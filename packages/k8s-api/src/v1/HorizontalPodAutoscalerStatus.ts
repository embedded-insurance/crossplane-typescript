/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time';

/**
 * current status of a horizontal pod autoscaler
 */
export type HorizontalPodAutoscalerStatus = {
  /**
   * current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
   */
  currentCPUUtilizationPercentage?: number;
  /**
   * current number of replicas of pods managed by this autoscaler.
   */
  currentReplicas: number;
  /**
   * desired number of replicas of pods managed by this autoscaler.
   */
  desiredReplicas: number;
  /**
   * last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed.
   */
  lastScaleTime?: Time;
  /**
   * most recent generation observed by this autoscaler.
   */
  observedGeneration?: number;
};
