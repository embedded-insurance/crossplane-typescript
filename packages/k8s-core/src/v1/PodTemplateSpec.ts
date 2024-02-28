/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PodSpec } from './PodSpec';
import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export type PodTemplateSpec = {
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  spec?: PodSpec;
};
