/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Time } from '@ei-tech/k8s-apimachinery/v1/Time';

/**
 * TokenRequestStatus is the result of a token request.
 */
export type TokenRequestStatus = {
  /**
   * ExpirationTimestamp is the time of expiration of the returned token.
   */
  expirationTimestamp: Time;
  /**
   * Token is the opaque bearer token.
   */
  token: string;
};
