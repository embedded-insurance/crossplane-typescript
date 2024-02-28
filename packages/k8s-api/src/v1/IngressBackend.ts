/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TypedLocalObjectReference } from '@ei-tech/k8s-core/v1/TypedLocalObjectReference';
import type { IngressServiceBackend } from './IngressServiceBackend';

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export type IngressBackend = {
  /**
   * Resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with "Service".
   */
  resource?: TypedLocalObjectReference;
  /**
   * Service references a Service as a Backend. This is a mutually exclusive setting with "Resource".
   */
  service?: IngressServiceBackend;
};
