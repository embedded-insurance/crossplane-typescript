/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MicroTime } from '@ei-tech/k8s-apimachinery/v1/MicroTime';

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export type EventSeries = {
  /**
   * Number of occurrences in this series up to the last heartbeat time
   */
  count?: number;
  /**
   * Time of the last occurrence observed
   */
  lastObservedTime?: MicroTime;
};
