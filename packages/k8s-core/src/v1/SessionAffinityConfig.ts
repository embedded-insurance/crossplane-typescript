/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientIPConfig } from './ClientIPConfig';

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export type SessionAffinityConfig = {
  /**
   * clientIP contains the configurations of Client IP based session affinity.
   */
  clientIP?: ClientIPConfig;
};
