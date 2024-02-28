/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CertificateSigningRequest } from './CertificateSigningRequest';
import type { ListMeta } from '@ei-tech/k8s-apimachinery/v1/ListMeta';

/**
 * CertificateSigningRequestList is a collection of CertificateSigningRequest objects
 */
export type CertificateSigningRequestList = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "certificates.k8s.io/v1";
  /**
   * items is a collection of CertificateSigningRequest objects
   */
  items: Array<CertificateSigningRequest>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "CertificateSigningRequestList";
  metadata?: ListMeta;
};
