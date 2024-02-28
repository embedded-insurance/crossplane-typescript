/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Deployment } from './Deployment';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * DeploymentList is a list of Deployments.
 */
export type DeploymentList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "apps/v1";
  /**
   * Items is the list of Deployments.
   */
  items: Array<Deployment>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "DeploymentList";
  /**
   * Standard list metadata.
   */
  metadata?: ListMeta;
};
