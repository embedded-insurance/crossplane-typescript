/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PodAffinityTerm } from './PodAffinityTerm';

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
export type WeightedPodAffinityTerm = {
  /**
   * Required. A pod affinity term, associated with the corresponding weight.
   */
  podAffinityTerm: PodAffinityTerm;
  /**
   * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
   */
  weight: number;
};
