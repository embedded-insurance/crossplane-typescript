/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LabelSelector } from '@ei-tech/k8s-apimachinery/v1/LabelSelector';

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export type AggregationRule = {
  /**
   * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
   */
  clusterRoleSelectors?: Array<LabelSelector>;
};
