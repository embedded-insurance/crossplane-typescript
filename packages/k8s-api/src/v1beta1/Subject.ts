/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupSubject } from './GroupSubject';
import type { ServiceAccountSubject } from './ServiceAccountSubject';
import type { UserSubject } from './UserSubject';

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 */
export type Subject = {
  /**
   * `group` matches based on user group name.
   */
  group?: GroupSubject;
  /**
   * `kind` indicates which one of the other fields is non-empty. Required
   */
  kind: string;
  /**
   * `serviceAccount` matches ServiceAccounts.
   */
  serviceAccount?: ServiceAccountSubject;
  /**
   * `user` matches based on username.
   */
  user?: UserSubject;
};
