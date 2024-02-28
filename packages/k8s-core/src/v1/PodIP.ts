/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * IP address information for entries in the (plural) PodIPs field. Each entry includes:
 *
 * IP: An IP address allocated to the pod. Routable at least within the cluster.
 */
export type PodIP = {
  /**
   * ip is an IP address (IPv4 or IPv6) assigned to the pod
   */
  ip?: string;
};