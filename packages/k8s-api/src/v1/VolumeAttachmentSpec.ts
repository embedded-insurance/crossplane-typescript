/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VolumeAttachmentSource } from './VolumeAttachmentSource';

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export type VolumeAttachmentSpec = {
  /**
   * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
   */
  attacher: string;
  /**
   * The node that the volume should be attached to.
   */
  nodeName: string;
  /**
   * Source represents the volume that should be attached.
   */
  source: VolumeAttachmentSource;
};
