/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SelfSubjectAccessReviewSpec } from './SelfSubjectAccessReviewSpec';
import type { SubjectAccessReviewStatus } from './SubjectAccessReviewStatus';
import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export type SelfSubjectAccessReview = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "authorization.k8s.io/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "SelfSubjectAccessReview";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Spec holds information about the request being evaluated.  user and groups must be empty
   */
  spec: SelfSubjectAccessReviewSpec;
  /**
   * Status is filled in by the server and indicates whether the request is allowed or not
   */
  status?: SubjectAccessReviewStatus;
};
