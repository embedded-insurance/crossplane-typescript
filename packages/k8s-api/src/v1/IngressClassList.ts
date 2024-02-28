/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IngressClass } from './IngressClass';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * IngressClassList is a collection of IngressClasses.
 */
export type IngressClassList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "networkingk8s.io/networking";
  /**
   * Items is the list of IngressClasses.
   */
  items: Array<IngressClass>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "IngressClassList";
  /**
   * Standard list metadata.
   */
  metadata?: ListMeta;
};
