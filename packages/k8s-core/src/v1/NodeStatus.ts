/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachedVolume } from './AttachedVolume';
import type { ContainerImage } from './ContainerImage';
import type { NodeAddress } from './NodeAddress';
import type { NodeCondition } from './NodeCondition';
import type { NodeConfigStatus } from './NodeConfigStatus';
import type { NodeDaemonEndpoints } from './NodeDaemonEndpoints';
import type { NodeSystemInfo } from './NodeSystemInfo';
import type { Quantity } from '@ei-tech/k8s-apimachinery/v1/Quantity'

/**
 * NodeStatus is information about the current status of a node.
 */
export type NodeStatus = {
  /**
   * List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See http://pr.k8s.io/79391 for an example.
   */
  addresses?: Array<NodeAddress>;
  /**
   * Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
   */
  allocatable?: Record<string, Quantity>;
  /**
   * Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
   */
  capacity?: Record<string, Quantity>;
  /**
   * Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
   */
  conditions?: Array<NodeCondition>;
  /**
   * Status of the config assigned to the node via the dynamic Kubelet config feature.
   */
  config?: NodeConfigStatus;
  /**
   * Endpoints of daemons running on the Node.
   */
  daemonEndpoints?: NodeDaemonEndpoints;
  /**
   * List of container images on this node
   */
  images?: Array<ContainerImage>;
  /**
   * Set of ids/uuids to uniquely identify the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#info
   */
  nodeInfo?: NodeSystemInfo;
  /**
   * NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.
   *
   * Possible enum values:
   * - `"Pending"` means the node has been created/added by the system, but not configured.
   * - `"Running"` means the node has been configured and has Kubernetes components running.
   * - `"Terminated"` means the node has been removed from the cluster.
   */
  phase?: "Pending" | "Running" | "Terminated";
  /**
   * List of volumes that are attached to the node.
   */
  volumesAttached?: Array<AttachedVolume>;
  /**
   * List of attachable volumes in use (mounted) by the node.
   */
  volumesInUse?: Array<string>;
};

