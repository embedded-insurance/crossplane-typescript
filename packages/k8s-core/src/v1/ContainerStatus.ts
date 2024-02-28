/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerState } from './ContainerState';

/**
 * ContainerStatus contains details for the current status of this container.
 */
export type ContainerStatus = {
  /**
   * Container's ID in the format '<type>://<container_id>'.
   */
  containerID?: string;
  /**
   * The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images.
   */
  image: string;
  /**
   * ImageID of the container's image.
   */
  imageID: string;
  /**
   * Details about the container's last termination condition.
   */
  lastState?: ContainerState;
  /**
   * This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
   */
  name: string;
  /**
   * Specifies whether the container has passed its readiness probe.
   */
  ready: boolean;
  /**
   * The number of times the container has been restarted.
   */
  restartCount: number;
  /**
   * Specifies whether the container has passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. Is always true when no startupProbe is defined.
   */
  started?: boolean;
  /**
   * Details about the container's current condition.
   */
  state?: ContainerState;
};
