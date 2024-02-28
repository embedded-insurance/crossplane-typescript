/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VolumeError } from './VolumeError';

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export type VolumeAttachmentStatus = {
  /**
   * The last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attachError?: VolumeError;
  /**
   * Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attached: boolean;
  /**
   * Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attachmentMetadata?: Record<string, string>;
  /**
   * The last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher.
   */
  detachError?: VolumeError;
};
