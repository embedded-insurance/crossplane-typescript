/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Adds and removes POSIX capabilities from running containers.
 */
export type Capabilities = {
  /**
   * Added capabilities
   */
  add?: Array<string>;
  /**
   * Removed capabilities
   */
  drop?: Array<string>;
};