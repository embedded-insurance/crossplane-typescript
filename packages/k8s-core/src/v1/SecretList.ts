/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Secret } from './Secret';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta'

/**
 * SecretList is a list of Secret.
 */
export type SecretList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "v1";
  /**
   * Items is a list of secret objects. More info: https://kubernetes.io/docs/concepts/configuration/secret
   */
  items: Array<Secret>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "SecretList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  metadata?: ListMeta;
};
