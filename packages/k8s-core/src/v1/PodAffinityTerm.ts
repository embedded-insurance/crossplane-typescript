/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LabelSelector } from '@ei-tech/k8s-apimachinery/v1/LabelSelector';

/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 */
export type PodAffinityTerm = {
  /**
   * A label query over a set of resources, in this case pods.
   */
  labelSelector?: LabelSelector;
  /**
   * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
   */
  namespaceSelector?: LabelSelector;
  /**
   * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
   */
  namespaces?: Array<string>;
  /**
   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
   */
  topologyKey: string;
};
