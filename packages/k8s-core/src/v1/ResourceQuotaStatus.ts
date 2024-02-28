/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Quantity } from '@ei-tech/k8s-apimachinery/v1/Quantity'

/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
export type ResourceQuotaStatus = {
  /**
   * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
   */
  hard?: Record<string, Quantity>;
  /**
   * Used is the current observed total usage of the resource in the namespace.
   */
  used?: Record<string, Quantity>;
};
