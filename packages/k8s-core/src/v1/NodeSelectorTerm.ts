/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NodeSelectorRequirement } from './NodeSelectorRequirement';

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export type NodeSelectorTerm = {
  /**
   * A list of node selector requirements by node's labels.
   */
  matchExpressions?: Array<NodeSelectorRequirement>;
  /**
   * A list of node selector requirements by node's fields.
   */
  matchFields?: Array<NodeSelectorRequirement>;
};
