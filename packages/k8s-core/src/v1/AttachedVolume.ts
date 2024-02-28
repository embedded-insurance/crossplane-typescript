/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * AttachedVolume describes a volume attached to a node
 */
export type AttachedVolume = {
  /**
   * DevicePath represents the device path where the volume should be available
   */
  devicePath: string;
  /**
   * Name of the attached volume
   */
  name: string;
};