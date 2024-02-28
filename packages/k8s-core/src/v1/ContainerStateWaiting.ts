/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ContainerStateWaiting is a waiting state of a container.
 */
export type ContainerStateWaiting = {
  /**
   * Message regarding why the container is not yet running.
   */
  message?: string;
  /**
   * (brief) reason the container is not yet running.
   */
  reason?: string;
};