/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExecAction } from './ExecAction';
import type { HTTPGetAction } from './HTTPGetAction';
import type { TCPSocketAction } from './TCPSocketAction';

/**
 * LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
 */
export type LifecycleHandler = {
  /**
   * Exec specifies the action to take.
   */
  exec?: ExecAction;
  /**
   * HTTPGet specifies the http request to perform.
   */
  httpGet?: HTTPGetAction;
  /**
   * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified.
   */
  tcpSocket?: TCPSocketAction;
};
