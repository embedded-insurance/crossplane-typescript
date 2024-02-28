/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
export type LocalObjectReference = {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string;
};