/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters.
 */
export type UncountedTerminatedPods = {
  /**
   * Failed holds UIDs of failed Pods.
   */
  failed?: Array<string>;
  /**
   * Succeeded holds UIDs of succeeded Pods.
   */
  succeeded?: Array<string>;
};