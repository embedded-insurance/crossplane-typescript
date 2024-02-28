/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
export type NamespaceSpec = {
  /**
   * Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
   */
  finalizers?: Array<string>;
};