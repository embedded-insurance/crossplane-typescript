/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export type BoundObjectReference = {
  /**
   * API version of the referent.
   */
  apiVersion: "authentication.k8s.io/v1";
  /**
   * Kind of the referent. Valid kinds are 'Pod' and 'Secret'.
   */
  kind: "BoundObjectReference";
  /**
   * Name of the referent.
   */
  name?: string;
  /**
   * UID of the referent.
   */
  uid?: string;
};
