/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time';

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export type VolumeError = {
  /**
   * String detailing the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
   */
  message?: string;
  /**
   * Time the error was encountered.
   */
  time?: Time;
};
