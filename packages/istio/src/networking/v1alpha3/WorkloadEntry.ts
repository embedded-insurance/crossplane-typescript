/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

export type WorkloadEntry = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "networking.istio.io/v1alpha3";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "WorkloadEntry";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
   */
  spec?: {
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
  };
  status?: any;
};
