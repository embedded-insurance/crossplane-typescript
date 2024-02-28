/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * NodeAddress contains information for the node's address.
 */
export type NodeAddress = {
  /**
   * The node address.
   */
  address: string;
  /**
   * Node address type, one of Hostname, ExternalIP or InternalIP.
   */
  type: string;
};