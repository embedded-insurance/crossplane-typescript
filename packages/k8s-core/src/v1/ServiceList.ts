/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Service } from './Service';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta'

/**
 * ServiceList holds a list of services.
 */
export type ServiceList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "v1";
  /**
   * List of services
   */
  items: Array<Service>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "ServiceList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  metadata?: ListMeta;
};
