/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForZone } from './ForZone';

/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 */
export type EndpointHints = {
  /**
   * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
   */
  forZones?: Array<ForZone>;
};
