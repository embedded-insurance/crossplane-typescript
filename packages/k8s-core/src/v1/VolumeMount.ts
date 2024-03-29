/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * VolumeMount describes a mounting of a Volume within a container.
 */
export type VolumeMount = {
  /**
   * Path within the container at which the volume should be mounted.  Must not contain ':'.
   */
  mountPath: string;
  /**
   * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
   */
  mountPropagation?: string;
  /**
   * This must match the Name of a Volume.
   */
  name: string;
  /**
   * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
   */
  readOnly?: boolean;
  /**
   * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
   */
  subPath?: string;
  /**
   * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive.
   */
  subPathExpr?: string;
};