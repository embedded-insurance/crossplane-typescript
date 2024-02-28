/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MicroTime } from '@ei-tech/k8s-apimachinery/v1/MicroTime';

/**
 * LeaseSpec is a specification of a Lease.
 */
export type LeaseSpec = {
  /**
   * acquireTime is a time when the current lease was acquired.
   */
  acquireTime?: MicroTime;
  /**
   * holderIdentity contains the identity of the holder of a current lease.
   */
  holderIdentity?: string;
  /**
   * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
   */
  leaseDurationSeconds?: number;
  /**
   * leaseTransitions is the number of transitions of a lease between holders.
   */
  leaseTransitions?: number;
  /**
   * renewTime is a time when the current holder of a lease has last updated the lease.
   */
  renewTime?: MicroTime;
};
