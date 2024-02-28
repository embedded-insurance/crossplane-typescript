/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigMap } from './ConfigMap';
import type { ListMeta } from "@ei-tech/k8s-apimachinery/v1/ListMeta"

/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 */
export type ConfigMapList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "v1";
  /**
   * Items is the list of ConfigMaps.
   */
  items: Array<ConfigMap>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "ConfigMapList";
  /**
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ListMeta;
};
