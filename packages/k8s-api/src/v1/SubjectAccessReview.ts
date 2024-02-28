/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubjectAccessReviewSpec } from './SubjectAccessReviewSpec';
import type { SubjectAccessReviewStatus } from './SubjectAccessReviewStatus';
import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export type SubjectAccessReview = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "authorization.k8s.io/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "SubjectAccessReview";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Spec holds information about the request being evaluated
   */
  spec: SubjectAccessReviewSpec;
  /**
   * Status is filled in by the server and indicates whether the request is allowed or not
   */
  status?: SubjectAccessReviewStatus;
};
