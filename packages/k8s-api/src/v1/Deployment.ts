/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeploymentSpec } from './DeploymentSpec';
import type { DeploymentStatus } from './DeploymentStatus';
import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export type Deployment = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "apps/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "Deployment";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Specification of the desired behavior of the Deployment.
   */
  spec?: DeploymentSpec;
  /**
   * Most recently observed status of the Deployment.
   */
  status?: DeploymentStatus;
};
