/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PersistentVolumeSpec } from '@ei-tech/k8s-core/v1/PersistentVolumeSpec';

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export type VolumeAttachmentSource = {
  /**
   * inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod's inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod's inline VolumeSource to a PersistentVolumeSpec. This field is beta-level and is only honored by servers that enabled the CSIMigration feature.
   */
  inlineVolumeSpec?: PersistentVolumeSpec;
  /**
   * Name of the persistent volume to attach.
   */
  persistentVolumeName?: string;
};
