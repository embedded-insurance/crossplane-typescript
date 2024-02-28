/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobSpec } from './JobSpec';
import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export type JobTemplateSpec = {
  /**
   * Standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  spec?: JobSpec;
};
