/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoadBalancerStatus } from '@ei-tech/k8s-core/v1/LoadBalancerStatus';

/**
 * IngressStatus describe the current state of the Ingress.
 */
export type IngressStatus = {
  /**
   * LoadBalancer contains the current status of the load-balancer.
   */
  loadBalancer?: LoadBalancerStatus;
};
