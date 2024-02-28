/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HTTPHeader } from './HTTPHeader';
import type { IntOrString } from '@ei-tech/k8s-apimachinery/v1/IntOrString';


/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
export type HTTPGetAction = {
  /**
   * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
   */
  host?: string;
  /**
   * Custom headers to set in the request. HTTP allows repeated headers.
   */
  httpHeaders?: Array<HTTPHeader>;
  /**
   * Path to access on the HTTP server.
   */
  path?: string;
  /**
   * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
   */
  port: IntOrString;
  /**
   * Scheme to use for connecting to the host. Defaults to HTTP.
   *
   * Possible enum values:
   * - `"HTTP"` means that the scheme used will be http://
   * - `"HTTPS"` means that the scheme used will be https://
   */
  scheme?: "HTTP" | "HTTPS";
};

