/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NodeSelector } from './NodeSelector';

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export type VolumeNodeAffinity = {
  /**
   * required specifies hard node constraints that must be met.
   */
  required?: NodeSelector;
};
