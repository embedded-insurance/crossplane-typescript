/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MutatingWebhookConfiguration } from './MutatingWebhookConfiguration';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export type MutatingWebhookConfigurationList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "admissionregistration.k8s.io/v1";
  /**
   * List of MutatingWebhookConfiguration.
   */
  items: Array<MutatingWebhookConfiguration>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "MutatingWebhookConfigurationList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  metadata?: ListMeta;
};
