/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventSeries } from './EventSeries';
import type { EventSource } from './EventSource';
import type { ObjectReference } from './ObjectReference';
import type { MicroTime } from '@ei-tech/k8s-apimachinery/v1/MicroTime'
import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta'
import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time'

/**
 * Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
 */
export type Event = {
  /**
   * What action was taken/failed regarding to the Regarding object.
   */
  action?: string;
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "v1";
  /**
   * The number of times this event has occurred.
   */
  count?: number;
  /**
   * Time when this Event was first observed.
   */
  eventTime?: MicroTime;
  /**
   * The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
   */
  firstTimestamp?: Time;
  /**
   * The object that this event is about.
   */
  involvedObject: ObjectReference;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * The time at which the most recent occurrence of this event was recorded.
   */
  lastTimestamp?: Time;
  /**
   * A human-readable description of the status of this operation.
   */
  message?: string;
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata: ObjectMeta;
  /**
   * This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
   */
  reason?: string;
  /**
   * Optional secondary object for more complex actions.
   */
  related?: ObjectReference;
  /**
   * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
   */
  reportingComponent?: string;
  /**
   * ID of the controller instance, e.g. `kubelet-xyzf`.
   */
  reportingInstance?: string;
  /**
   * Data about the Event series this event represents or nil if it's a singleton Event.
   */
  series?: EventSeries;
  /**
   * The component reporting this event. Should be a short machine understandable string.
   */
  source?: EventSource;
  /**
   * Type of this event (Normal, Warning), new types could be added in the future
   */
  type?: string;
};
