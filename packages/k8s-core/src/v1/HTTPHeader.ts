/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export type HTTPHeader = {
  /**
   * The header field name
   */
  name: string;
  /**
   * The header field value
   */
  value: string;
};