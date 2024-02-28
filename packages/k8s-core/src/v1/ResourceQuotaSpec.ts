/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScopeSelector } from './ScopeSelector';
import type { Quantity } from '@ei-tech/k8s-apimachinery/v1/Quantity'

/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 */
export type ResourceQuotaSpec = {
  /**
   * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
   */
  hard?: Record<string, Quantity>;
  /**
   * scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched.
   */
  scopeSelector?: ScopeSelector;
  /**
   * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
   */
  scopes?: Array<string>;
};
