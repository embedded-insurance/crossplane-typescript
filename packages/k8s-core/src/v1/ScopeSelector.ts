/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScopedResourceSelectorRequirement } from './ScopedResourceSelectorRequirement';

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export type ScopeSelector = {
  /**
   * A list of scope selector requirements by scope of the resources.
   */
  matchExpressions?: Array<ScopedResourceSelectorRequirement>;
};
