/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowSchema } from './FlowSchema';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * FlowSchemaList is a list of FlowSchema objects.
 */
export type FlowSchemaList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "flowcontrol/v1beta1";
  /**
   * `items` is a list of FlowSchemas.
   */
  items: Array<FlowSchema>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "FlowSchemaList";
  /**
   * `metadata` is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ListMeta;
};
