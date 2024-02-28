/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export type CrossVersionObjectReference = {
  /**
   * API version of the referent
   */
  apiVersion: "autoscaling/v2beta2";
  /**
   * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
   */
  kind: string;
  /**
   * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
   */
  name: string;
};
