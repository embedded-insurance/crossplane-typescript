/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PriorityLevelConfigurationCondition } from './PriorityLevelConfigurationCondition';

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 */
export type PriorityLevelConfigurationStatus = {
  /**
   * `conditions` is the current state of "request-priority".
   */
  conditions?: Array<PriorityLevelConfigurationCondition>;
};
