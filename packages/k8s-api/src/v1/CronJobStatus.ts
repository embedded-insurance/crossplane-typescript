/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectReference } from '@ei-tech/k8s-core/v1/ObjectReference';
import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time';

/**
 * CronJobStatus represents the current state of a cron job.
 */
export type CronJobStatus = {
  /**
   * A list of pointers to currently running jobs.
   */
  active?: Array<ObjectReference>;
  /**
   * Information when was the last time the job was successfully scheduled.
   */
  lastScheduleTime?: Time;
  /**
   * Information when was the last time the job successfully completed.
   */
  lastSuccessfulTime?: Time;
};
