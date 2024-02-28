/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 *
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export type ConfigMapEnvSource = {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string;
  /**
   * Specify whether the ConfigMap must be defined
   */
  optional?: boolean;
};