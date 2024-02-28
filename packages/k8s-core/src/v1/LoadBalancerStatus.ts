/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoadBalancerIngress } from './LoadBalancerIngress';

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
export type LoadBalancerStatus = {
  /**
   * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
   */
  ingress?: Array<LoadBalancerIngress>;
};
