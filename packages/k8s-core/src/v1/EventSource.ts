/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * EventSource contains information for an event.
 */
export type EventSource = {
  /**
   * Component from which the event is generated.
   */
  component?: string;
  /**
   * Node name on which the event is generated.
   */
  host?: string;
};