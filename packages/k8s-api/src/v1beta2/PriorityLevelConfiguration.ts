/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PriorityLevelConfigurationSpec } from './PriorityLevelConfigurationSpec';
import type { PriorityLevelConfigurationStatus } from './PriorityLevelConfigurationStatus';
import type { ObjectMeta } from "@ei-tech/k8s-apimachinery/v1/ObjectMeta";

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 */
export type PriorityLevelConfiguration = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "flowcontrol.apiserver.k8s.io/v1beta2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "PriorityLevelConfiguration";
  /**
   * `metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * `spec` is the specification of the desired behavior of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  spec?: PriorityLevelConfigurationSpec;
  /**
   * `status` is the current status of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  status?: PriorityLevelConfigurationStatus;
};
