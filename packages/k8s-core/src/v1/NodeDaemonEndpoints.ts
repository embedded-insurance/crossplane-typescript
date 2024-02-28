/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DaemonEndpoint } from './DaemonEndpoint';

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export type NodeDaemonEndpoints = {
  /**
   * Endpoint on which Kubelet is listening.
   */
  kubeletEndpoint?: DaemonEndpoint;
};
