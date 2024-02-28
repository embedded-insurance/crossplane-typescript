/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortStatus } from './PortStatus';

/**
 * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
 */
export type LoadBalancerIngress = {
  /**
   * Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
   */
  hostname?: string;
  /**
   * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
   */
  ip?: string;
  /**
   * Ports is a list of records of service ports If used, every port defined in the service should have an entry in it
   */
  ports?: Array<PortStatus>;
};
