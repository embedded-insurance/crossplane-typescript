/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigMapEnvSource } from './ConfigMapEnvSource';
import type { SecretEnvSource } from './SecretEnvSource';

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
export type EnvFromSource = {
  /**
   * The ConfigMap to select from
   */
  configMapRef?: ConfigMapEnvSource;
  /**
   * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
   */
  prefix?: string;
  /**
   * The Secret to select from
   */
  secretRef?: SecretEnvSource;
};
