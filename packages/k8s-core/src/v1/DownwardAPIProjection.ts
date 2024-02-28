/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DownwardAPIVolumeFile } from './DownwardAPIVolumeFile';

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export type DownwardAPIProjection = {
  /**
   * Items is a list of DownwardAPIVolume file
   */
  items?: Array<DownwardAPIVolumeFile>;
};
