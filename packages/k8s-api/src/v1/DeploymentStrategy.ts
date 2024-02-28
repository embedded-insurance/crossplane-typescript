/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RollingUpdateDeployment } from './RollingUpdateDeployment';

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export type DeploymentStrategy = {
  /**
   * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
   */
  rollingUpdate?: RollingUpdateDeployment;
  /**
   * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
   *
   * Possible enum values:
   * - `"Recreate"` Kill all existing pods before creating new ones.
   * - `"RollingUpdate"` Replace the old ReplicaSets by new one using rolling update i.e gradually scale down the old ReplicaSets and scale up the new one.
   */
  type?: 'Recreate' | 'RollingUpdate';
};
