/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export type NonResourceAttributes = {
  /**
   * Path is the URL path of the request
   */
  path?: string;
  /**
   * Verb is the standard HTTP verb
   */
  verb?: string;
};