/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NonResourceAttributes } from './NonResourceAttributes';
import type { ResourceAttributes } from './ResourceAttributes';

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export type SelfSubjectAccessReviewSpec = {
  /**
   * NonResourceAttributes describes information for a non-resource access request
   */
  nonResourceAttributes?: NonResourceAttributes;
  /**
   * ResourceAuthorizationAttributes describes information for a resource access request
   */
  resourceAttributes?: ResourceAttributes;
};
