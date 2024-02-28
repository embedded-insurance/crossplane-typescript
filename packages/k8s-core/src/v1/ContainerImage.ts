/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Describe a container image
 */
export type ContainerImage = {
  /**
   * Names by which this image is known. e.g. ["kubernetes.example/hyperkube:v1.0.7", "cloud-vendor.registry.example/cloud-vendor/hyperkube:v1.0.7"]
   */
  names?: Array<string>;
  /**
   * The size of the image in bytes.
   */
  sizeBytes?: number;
};