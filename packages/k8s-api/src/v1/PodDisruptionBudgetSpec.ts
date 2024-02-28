/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LabelSelector } from '@ei-tech/k8s-apimachinery/v1/LabelSelector';
import type { IntOrString } from "@ei-tech/k8s-apimachinery/v1/IntOrString";

/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 */
export type PodDisruptionBudgetSpec = {
  /**
   * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
   */
  maxUnavailable?: IntOrString;
  /**
   * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
   */
  minAvailable?: IntOrString;
  /**
   * Label query over pods whose evictions are managed by the disruption budget. A null selector will match no pods, while an empty ({}) selector will select all pods within the namespace.
   */
  selector?: LabelSelector;
};
