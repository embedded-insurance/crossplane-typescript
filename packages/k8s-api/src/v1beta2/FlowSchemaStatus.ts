/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowSchemaCondition } from './FlowSchemaCondition';

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 */
export type FlowSchemaStatus = {
  /**
   * `conditions` is a list of the current states of FlowSchema.
   */
  conditions?: Array<FlowSchemaCondition>;
};
