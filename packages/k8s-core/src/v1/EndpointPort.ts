/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * EndpointPort is a tuple that describes a single port.
 */
export type EndpointPort = {
  /**
   * The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.
   */
  appProtocol?: string;
  /**
   * The name of this port.  This must match the 'name' field in the corresponding ServicePort. Must be a DNS_LABEL. Optional only if one port is defined.
   */
  name?: string;
  /**
   * The port number of the endpoint.
   */
  port: number;
  /**
   * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
   *
   * Possible enum values:
   * - `"SCTP"` is the SCTP protocol.
   * - `"TCP"` is the TCP protocol.
   * - `"UDP"` is the UDP protocol.
   */
  protocol?: "SCTP" | "TCP" | "UDP";
};
