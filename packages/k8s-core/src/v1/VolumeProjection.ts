/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigMapProjection } from './ConfigMapProjection';
import type { DownwardAPIProjection } from './DownwardAPIProjection';
import type { SecretProjection } from './SecretProjection';
import type { ServiceAccountTokenProjection } from './ServiceAccountTokenProjection';

/**
 * Projection that may be projected along with other supported volume types
 */
export type VolumeProjection = {
  /**
   * configMap information about the configMap data to project
   */
  configMap?: ConfigMapProjection;
  /**
   * downwardAPI information about the downwardAPI data to project
   */
  downwardAPI?: DownwardAPIProjection;
  /**
   * secret information about the secret data to project
   */
  secret?: SecretProjection;
  /**
   * serviceAccountToken is information about the serviceAccountToken data to project
   */
  serviceAccountToken?: ServiceAccountTokenProjection;
};
