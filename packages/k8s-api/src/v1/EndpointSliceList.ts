/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointSlice } from './EndpointSlice';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * EndpointSliceList represents a list of endpoint slices
 */
export type EndpointSliceList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "discovery/v1";
  /**
   * List of endpoint slices
   */
  items: Array<EndpointSlice>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "EndpointSliceList";
  /**
   * Standard list metadata.
   */
  metadata?: ListMeta;
};
