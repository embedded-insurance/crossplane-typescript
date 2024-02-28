/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleBinding } from './RoleBinding';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * RoleBindingList is a collection of RoleBindings
 */
export type RoleBindingList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "rbac.authorization.k8s.io/v1";
  /**
   * Items is a list of RoleBindings
   */
  items: Array<RoleBinding>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "RoleBindingList";
  /**
   * Standard object's metadata.
   */
  metadata?: ListMeta;
};
