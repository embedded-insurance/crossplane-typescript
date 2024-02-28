/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 */
export type HostPathVolumeSource = {
  /**
   * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  path: string;
  /**
   * type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  type?: string;
};