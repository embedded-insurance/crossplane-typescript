/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IPBlock } from './IPBlock';
import type { LabelSelector } from '@ei-tech/k8s-apimachinery/v1/LabelSelector';

/**
 * NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed
 */
export type NetworkPolicyPeer = {
  /**
   * IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
   */
  ipBlock?: IPBlock;
  /**
   * Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.
   *
   * If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector.
   */
  namespaceSelector?: LabelSelector;
  /**
   * This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.
   *
   * If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace.
   */
  podSelector?: LabelSelector;
};
