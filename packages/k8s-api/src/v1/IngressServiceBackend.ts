/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServiceBackendPort } from './ServiceBackendPort';

/**
 * IngressServiceBackend references a Kubernetes Service as a Backend.
 */
export type IngressServiceBackend = {
  /**
   * Name is the referenced service. The service must exist in the same namespace as the Ingress object.
   */
  name: string;
  /**
   * Port of the referenced service. A port name or port number is required for a IngressServiceBackend.
   */
  port?: ServiceBackendPort;
};
