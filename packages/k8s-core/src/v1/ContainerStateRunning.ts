/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time';

/**
 * ContainerStateRunning is a running state of a container.
 */
export type ContainerStateRunning = {
  /**
   * Time at which the container was last (re-)started
   */
  startedAt?: Time;
};
