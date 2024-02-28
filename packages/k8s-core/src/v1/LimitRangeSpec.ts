/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LimitRangeItem } from './LimitRangeItem';

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export type LimitRangeSpec = {
  /**
   * Limits is the list of LimitRangeItem objects that are enforced.
   */
  limits: Array<LimitRangeItem>;
};
