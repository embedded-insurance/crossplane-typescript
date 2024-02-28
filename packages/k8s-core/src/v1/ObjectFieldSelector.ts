/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export type ObjectFieldSelector = {
  /**
   * Version of the schema the FieldPath is written in terms of, defaults to "v1".
   */
  apiVersion: "v1";
  /**
   * Path of the field to select in the specified API version.
   */
  fieldPath: string;
};