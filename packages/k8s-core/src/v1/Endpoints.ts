/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointSubset } from './EndpointSubset';
import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

/**
 * Endpoints is a collection of endpoints that implement the actual service. Example:
 *
 * Name: "mysvc",
 * Subsets: [
   * {
     * Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
     * Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
     * },
     * {
       * Addresses: [{"ip": "10.10.3.3"}],
       * Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
       * },
       * ]
       */
      export type Endpoints = {
        /**
         * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
         */
        apiVersion: "v1";
        /**
         * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        kind: "Endpoints";
        /**
         * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        metadata?: ObjectMeta;
        /**
         * The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service.
         */
        subsets?: Array<EndpointSubset>;
      };
