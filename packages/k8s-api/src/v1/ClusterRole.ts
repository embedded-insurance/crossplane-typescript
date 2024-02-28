/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AggregationRule } from './AggregationRule';
import type { PolicyRule } from './PolicyRule';
import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export type ClusterRole = {
  /**
   * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
   */
  aggregationRule?: AggregationRule;
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "rbac.authorization.k8s.io/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "ClusterRole";
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMeta;
  /**
   * Rules holds all the PolicyRules for this ClusterRole
   */
  rules?: Array<PolicyRule>;
};
