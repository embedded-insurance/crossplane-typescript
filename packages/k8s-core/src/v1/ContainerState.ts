/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerStateRunning } from './ContainerStateRunning';
import type { ContainerStateTerminated } from './ContainerStateTerminated';
import type { ContainerStateWaiting } from './ContainerStateWaiting';

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export type ContainerState = {
  /**
   * Details about a running container
   */
  running?: ContainerStateRunning;
  /**
   * Details about a terminated container
   */
  terminated?: ContainerStateTerminated;
  /**
   * Details about a waiting container
   */
  waiting?: ContainerStateWaiting;
};
