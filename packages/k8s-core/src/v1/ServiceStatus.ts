/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoadBalancerStatus } from './LoadBalancerStatus';
import type { Condition } from '@ei-tech/k8s-apimachinery/v1/Condition';


/**
 * ServiceStatus represents the current status of a service.
 */
export type ServiceStatus = {
  /**
   * Current service state
   */
  conditions?: Array<Condition>;
  /**
   * LoadBalancer contains the current status of the load-balancer, if one is present.
   */
  loadBalancer?: LoadBalancerStatus;
};
