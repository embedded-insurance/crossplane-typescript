/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Sysctl defines a kernel parameter to be set
 */
export type Sysctl = {
  /**
   * Name of a property to set
   */
  name: string;
  /**
   * Value of a property to set
   */
  value: string;
};