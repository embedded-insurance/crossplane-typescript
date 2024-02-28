/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

export type ServiceEntry = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "networking.istio.io/v1alpha3";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "ServiceEntry";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
   */
  spec?: {
    /**
     * The virtual IP addresses associated with the service.
     */
    addresses?: Array<string>;
    /**
     * One or more endpoints associated with the service.
     */
    endpoints?: Array<{
      address?: string;
      /**
       * One or more labels associated with the endpoint.
       */
      labels?: Record<string, string>;
      /**
       * The locality associated with the endpoint.
       */
      locality?: string;
      network?: string;
      /**
       * Set of ports associated with the endpoint.
       */
      ports?: Record<string, number>;
      serviceAccount?: string;
      /**
       * The load balancing weight associated with the endpoint.
       */
      weight?: number;
    }>;
    /**
     * A list of namespaces to which this service is exported.
     */
    exportTo?: Array<string>;
    /**
     * The hosts associated with the ServiceEntry.
     */
    hosts?: Array<string>;
    location?: 'MESH_EXTERNAL' | 'MESH_INTERNAL';
    /**
     * The ports associated with the external service.
     */
    ports?: Array<{
      /**
       * Label assigned to the port.
       */
      name?: string;
      /**
       * A valid non-negative integer port number.
       */
      number?: number;
      /**
       * The protocol exposed on the port.
       */
      protocol?: string;
      targetPort?: number;
    }>;
    /**
     * Service resolution mode for the hosts.
     */
    resolution?: 'NONE' | 'STATIC' | 'DNS' | 'DNS_ROUND_ROBIN';
    subjectAltNames?: Array<string>;
    /**
     * Applicable only for MESH_INTERNAL services.
     */
    workloadSelector?: {
      labels?: Record<string, string>;
    };
  };
  status?: any;
};
