/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
export type VolumeDevice = {
  /**
   * devicePath is the path inside of the container that the device will be mapped to.
   */
  devicePath: string;
  /**
   * name must match the name of a persistentVolumeClaim in the pod
   */
  name: string;
};