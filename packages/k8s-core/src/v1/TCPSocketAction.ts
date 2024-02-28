/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IntOrString } from '@ei-tech/k8s-apimachinery/v1/IntOrString';

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export type TCPSocketAction = {
  /**
   * Optional: Host name to connect to, defaults to the pod IP.
   */
  host?: string;
  /**
   * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
   */
  port: IntOrString;
};
