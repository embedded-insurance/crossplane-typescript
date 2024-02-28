/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClusterRole } from './ClusterRole';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export type ClusterRoleList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "rbac.authorization.k8s.io/v1";
  /**
   * Items is a list of ClusterRoles
   */
  items: Array<ClusterRole>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "ClusterRoleList";
  /**
   * Standard object's metadata.
   */
  metadata?: ListMeta;
};
