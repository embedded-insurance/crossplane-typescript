/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NetworkPolicySpec } from './NetworkPolicySpec';
import type { NetworkPolicyStatus } from './NetworkPolicyStatus';
import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export type NetworkPolicy = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "networkingk8s.io/networking";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "NetworkPolicy";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Specification of the desired behavior for this NetworkPolicy.
   */
  spec?: NetworkPolicySpec;
  /**
   * Status is the current state of the NetworkPolicy. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  status?: NetworkPolicyStatus;
};
