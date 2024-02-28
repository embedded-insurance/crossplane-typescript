/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HorizontalPodAutoscalerSpec } from './HorizontalPodAutoscalerSpec';
import type { HorizontalPodAutoscalerStatus } from './HorizontalPodAutoscalerStatus';
import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * configuration of a horizontal pod autoscaler.
 */
export type HorizontalPodAutoscaler = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "autoscaling/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "HorizontalPodAutoscaler";
  /**
   * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * behaviour of autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
   */
  spec?: HorizontalPodAutoscalerSpec;
  /**
   * current information about the autoscaler.
   */
  status?: HorizontalPodAutoscalerStatus;
};
