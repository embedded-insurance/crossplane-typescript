/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Quantity } from '@ei-tech/k8s-apimachinery/v1/Quantity'

/**
 * ResourceRequirements describes the compute resource requirements.
 */
export type ResourceRequirements = {
  /**
   * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
   */
  limits?: Record<string, Quantity>;
  /**
   * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
   */
  requests?: Record<string, Quantity>;
};
