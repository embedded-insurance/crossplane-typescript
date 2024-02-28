/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocalObjectReference } from './LocalObjectReference';

/**
 * Represents a source location of a volume to mount, managed by an external CSI driver
 */
export type CSIVolumeSource = {
  /**
   * driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
   */
  driver: string;
  /**
   * fsType to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
   */
  fsType?: string;
  /**
   * nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
   */
  nodePublishSecretRef?: LocalObjectReference;
  /**
   * readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
   */
  readOnly?: boolean;
  /**
   * volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
   */
  volumeAttributes?: Record<string, string>;
};
