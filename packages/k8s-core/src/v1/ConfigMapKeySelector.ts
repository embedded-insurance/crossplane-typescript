/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Selects a key from a ConfigMap.
 */
export type ConfigMapKeySelector = {
  /**
   * The key to select.
   */
  key: string;
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string;
  /**
   * Specify whether the ConfigMap or its key must be defined
   */
  optional?: boolean;
};