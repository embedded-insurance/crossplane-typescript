/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ingress } from './Ingress';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * IngressList is a collection of Ingress.
 */
export type IngressList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "networkingk8s.io/networking";
  /**
   * Items is the list of Ingress.
   */
  items: Array<Ingress>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "IngressList";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ListMeta;
};
