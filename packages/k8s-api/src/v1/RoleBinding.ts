/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleRef } from './RoleRef';
import type { Subject } from './Subject';
import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export type RoleBinding = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "rbac.authorization.k8s.io/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "RoleBinding";
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMeta;
  /**
   * RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
   */
  roleRef: RoleRef;
  /**
   * Subjects holds references to the objects the role applies to.
   */
  subjects?: Array<Subject>;
};
