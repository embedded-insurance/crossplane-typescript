/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectMeta } from '@ei-tech/k8s-apimachinery/v1/ObjectMeta';

export type DestinationRule = {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: "networking.istio.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: "DestinationRule";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
   */
  spec?: {
    /**
     * A list of namespaces to which this destination rule is exported.
     */
    exportTo?: Array<string>;
    /**
     * The name of a service from the service registry.
     */
    host?: string;
    subsets?: Array<{
      labels?: Record<string, string>;
      /**
       * Name of the subset.
       */
      name?: string;
      /**
       * Traffic policies that apply to this subset.
       */
      trafficPolicy?: {
        connectionPool?: {
          /**
           * HTTP connection pool settings.
           */
          http?: {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             */
            h2UpgradePolicy?: 'DEFAULT' | 'DO_NOT_UPGRADE' | 'UPGRADE';
            http1MaxPendingRequests?: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: string;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: number;
            maxRetries?: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: boolean;
          };
          /**
           * Settings common to both HTTP and TCP upstream connections.
           */
          tcp?: {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: number;
            /**
             * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
             */
            tcpKeepalive?: {
              /**
               * The time duration between keep-alive probes.
               */
              interval?: string;
              probes?: number;
              time?: string;
            };
          };
        };
        /**
         * Settings controlling the load balancer algorithms.
         */
        loadBalancer?: {
          consistentHash?: {
            /**
             * Hash based on HTTP cookie.
             */
            httpCookie?: {
              /**
               * Name of the cookie.
               */
              name?: string;
              /**
               * Path to set for the cookie.
               */
              path?: string;
              /**
               * Lifetime of the cookie.
               */
              ttl?: string;
            };
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: string;
            /**
             * The Maglev load balancer implements consistent hashing to backend hosts.
             */
            maglev?: {
              /**
               * The table size for Maglev hashing.
               */
              tableSize?: number;
            };
            /**
             * Deprecated.
             */
            minimumRingSize?: number;
            /**
             * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
             */
            ringHash?: {
              minimumRingSize?: number;
            };
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: boolean;
          };
          localityLbSetting?: {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: Array<{
              /**
               * Originating locality, '/' separated, e.g.
               */
              from?: string;
              /**
               * Map of upstream localities to traffic distribution weights.
               */
              to?: Record<string, number>;
            }>;
            /**
             * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
             */
            enabled?: any;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: Array<{
              /**
               * Originating region.
               */
              from?: string;
              to?: string;
            }>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: Array<string>;
          };
          simple?: 'UNSPECIFIED' | 'LEAST_CONN' | 'RANDOM' | 'PASSTHROUGH' | 'ROUND_ROBIN' | 'LEAST_REQUEST';
          /**
           * Represents the warmup duration of Service.
           */
          warmupDurationSecs?: string;
        };
        outlierDetection?: {
          /**
           * Minimum ejection duration.
           */
          baseEjectionTime?: string;
          /**
           * Number of 5xx errors before a host is ejected from the connection pool.
           */
          consecutive5xxErrors?: any;
          consecutiveErrors?: number;
          /**
           * Number of gateway errors before a host is ejected from the connection pool.
           */
          consecutiveGatewayErrors?: any;
          consecutiveLocalOriginFailures?: any;
          /**
           * Time interval between ejection sweep analysis.
           */
          interval?: string;
          maxEjectionPercent?: number;
          minHealthPercent?: number;
          /**
           * Determines whether to distinguish local origin failures from external errors.
           */
          splitExternalLocalOriginErrors?: boolean;
        };
        /**
         * Traffic policies specific to individual ports.
         */
        portLevelSettings?: Array<{
          connectionPool?: {
            /**
             * HTTP connection pool settings.
             */
            http?: {
              /**
               * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
               */
              h2UpgradePolicy?: 'DEFAULT' | 'DO_NOT_UPGRADE' | 'UPGRADE';
              http1MaxPendingRequests?: number;
              /**
               * Maximum number of active requests to a destination.
               */
              http2MaxRequests?: number;
              /**
               * The idle timeout for upstream connection pool connections.
               */
              idleTimeout?: string;
              /**
               * Maximum number of requests per connection to a backend.
               */
              maxRequestsPerConnection?: number;
              maxRetries?: number;
              /**
               * If set to true, client protocol will be preserved while initiating connection to backend.
               */
              useClientProtocol?: boolean;
            };
            /**
             * Settings common to both HTTP and TCP upstream connections.
             */
            tcp?: {
              /**
               * TCP connection timeout.
               */
              connectTimeout?: string;
              /**
               * The maximum duration of a connection.
               */
              maxConnectionDuration?: string;
              /**
               * Maximum number of HTTP1 /TCP connections to a destination host.
               */
              maxConnections?: number;
              /**
               * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
               */
              tcpKeepalive?: {
                /**
                 * The time duration between keep-alive probes.
                 */
                interval?: string;
                probes?: number;
                time?: string;
              };
            };
          };
          /**
           * Settings controlling the load balancer algorithms.
           */
          loadBalancer?: {
            consistentHash?: {
              /**
               * Hash based on HTTP cookie.
               */
              httpCookie?: {
                /**
                 * Name of the cookie.
                 */
                name?: string;
                /**
                 * Path to set for the cookie.
                 */
                path?: string;
                /**
                 * Lifetime of the cookie.
                 */
                ttl?: string;
              };
              /**
               * Hash based on a specific HTTP header.
               */
              httpHeaderName?: string;
              /**
               * Hash based on a specific HTTP query parameter.
               */
              httpQueryParameterName?: string;
              /**
               * The Maglev load balancer implements consistent hashing to backend hosts.
               */
              maglev?: {
                /**
                 * The table size for Maglev hashing.
                 */
                tableSize?: number;
              };
              /**
               * Deprecated.
               */
              minimumRingSize?: number;
              /**
               * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
               */
              ringHash?: {
                minimumRingSize?: number;
              };
              /**
               * Hash based on the source IP address.
               */
              useSourceIp?: boolean;
            };
            localityLbSetting?: {
              /**
               * Optional: only one of distribute, failover or failoverPriority can be set.
               */
              distribute?: Array<{
                /**
                 * Originating locality, '/' separated, e.g.
                 */
                from?: string;
                /**
                 * Map of upstream localities to traffic distribution weights.
                 */
                to?: Record<string, number>;
              }>;
              /**
               * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
               */
              enabled?: any;
              /**
               * Optional: only one of distribute, failover or failoverPriority can be set.
               */
              failover?: Array<{
                /**
                 * Originating region.
                 */
                from?: string;
                to?: string;
              }>;
              /**
               * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
               */
              failoverPriority?: Array<string>;
            };
            simple?: 'UNSPECIFIED' | 'LEAST_CONN' | 'RANDOM' | 'PASSTHROUGH' | 'ROUND_ROBIN' | 'LEAST_REQUEST';
            /**
             * Represents the warmup duration of Service.
             */
            warmupDurationSecs?: string;
          };
          outlierDetection?: {
            /**
             * Minimum ejection duration.
             */
            baseEjectionTime?: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            consecutive5xxErrors?: any;
            consecutiveErrors?: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            consecutiveGatewayErrors?: any;
            consecutiveLocalOriginFailures?: any;
            /**
             * Time interval between ejection sweep analysis.
             */
            interval?: string;
            maxEjectionPercent?: number;
            minHealthPercent?: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            splitExternalLocalOriginErrors?: boolean;
          };
          port?: {
            number?: number;
          };
          /**
           * TLS related settings for connections to the upstream service.
           */
          tls?: {
            caCertificates?: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            clientCertificate?: string;
            credentialName?: string;
            insecureSkipVerify?: any;
            mode?: 'DISABLE' | 'SIMPLE' | 'MUTUAL' | 'ISTIO_MUTUAL';
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            privateKey?: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            sni?: string;
            subjectAltNames?: Array<string>;
          };
        }>;
        /**
         * TLS related settings for connections to the upstream service.
         */
        tls?: {
          caCertificates?: string;
          /**
           * REQUIRED if mode is `MUTUAL`.
           */
          clientCertificate?: string;
          credentialName?: string;
          insecureSkipVerify?: any;
          mode?: 'DISABLE' | 'SIMPLE' | 'MUTUAL' | 'ISTIO_MUTUAL';
          /**
           * REQUIRED if mode is `MUTUAL`.
           */
          privateKey?: string;
          /**
           * SNI string to present to the server during TLS handshake.
           */
          sni?: string;
          subjectAltNames?: Array<string>;
        };
        tunnel?: {
          /**
           * Specifies which protocol to use for tunneling the downstream connection.
           */
          protocol?: string;
          /**
           * Specifies a host to which the downstream connection is tunneled.
           */
          targetHost?: string;
          /**
           * Specifies a port to which the downstream connection is tunneled.
           */
          targetPort?: number;
        };
      };
    }>;
    trafficPolicy?: {
      connectionPool?: {
        /**
         * HTTP connection pool settings.
         */
        http?: {
          /**
           * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
           */
          h2UpgradePolicy?: 'DEFAULT' | 'DO_NOT_UPGRADE' | 'UPGRADE';
          http1MaxPendingRequests?: number;
          /**
           * Maximum number of active requests to a destination.
           */
          http2MaxRequests?: number;
          /**
           * The idle timeout for upstream connection pool connections.
           */
          idleTimeout?: string;
          /**
           * Maximum number of requests per connection to a backend.
           */
          maxRequestsPerConnection?: number;
          maxRetries?: number;
          /**
           * If set to true, client protocol will be preserved while initiating connection to backend.
           */
          useClientProtocol?: boolean;
        };
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        tcp?: {
          /**
           * TCP connection timeout.
           */
          connectTimeout?: string;
          /**
           * The maximum duration of a connection.
           */
          maxConnectionDuration?: string;
          /**
           * Maximum number of HTTP1 /TCP connections to a destination host.
           */
          maxConnections?: number;
          /**
           * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
           */
          tcpKeepalive?: {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: string;
            probes?: number;
            time?: string;
          };
        };
      };
      /**
       * Settings controlling the load balancer algorithms.
       */
      loadBalancer?: {
        consistentHash?: {
          /**
           * Hash based on HTTP cookie.
           */
          httpCookie?: {
            /**
             * Name of the cookie.
             */
            name?: string;
            /**
             * Path to set for the cookie.
             */
            path?: string;
            /**
             * Lifetime of the cookie.
             */
            ttl?: string;
          };
          /**
           * Hash based on a specific HTTP header.
           */
          httpHeaderName?: string;
          /**
           * Hash based on a specific HTTP query parameter.
           */
          httpQueryParameterName?: string;
          /**
           * The Maglev load balancer implements consistent hashing to backend hosts.
           */
          maglev?: {
            /**
             * The table size for Maglev hashing.
             */
            tableSize?: number;
          };
          /**
           * Deprecated.
           */
          minimumRingSize?: number;
          /**
           * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
           */
          ringHash?: {
            minimumRingSize?: number;
          };
          /**
           * Hash based on the source IP address.
           */
          useSourceIp?: boolean;
        };
        localityLbSetting?: {
          /**
           * Optional: only one of distribute, failover or failoverPriority can be set.
           */
          distribute?: Array<{
            /**
             * Originating locality, '/' separated, e.g.
             */
            from?: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            to?: Record<string, number>;
          }>;
          /**
           * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
           */
          enabled?: any;
          /**
           * Optional: only one of distribute, failover or failoverPriority can be set.
           */
          failover?: Array<{
            /**
             * Originating region.
             */
            from?: string;
            to?: string;
          }>;
          /**
           * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
           */
          failoverPriority?: Array<string>;
        };
        simple?: 'UNSPECIFIED' | 'LEAST_CONN' | 'RANDOM' | 'PASSTHROUGH' | 'ROUND_ROBIN' | 'LEAST_REQUEST';
        /**
         * Represents the warmup duration of Service.
         */
        warmupDurationSecs?: string;
      };
      outlierDetection?: {
        /**
         * Minimum ejection duration.
         */
        baseEjectionTime?: string;
        /**
         * Number of 5xx errors before a host is ejected from the connection pool.
         */
        consecutive5xxErrors?: any;
        consecutiveErrors?: number;
        /**
         * Number of gateway errors before a host is ejected from the connection pool.
         */
        consecutiveGatewayErrors?: any;
        consecutiveLocalOriginFailures?: any;
        /**
         * Time interval between ejection sweep analysis.
         */
        interval?: string;
        maxEjectionPercent?: number;
        minHealthPercent?: number;
        /**
         * Determines whether to distinguish local origin failures from external errors.
         */
        splitExternalLocalOriginErrors?: boolean;
      };
      /**
       * Traffic policies specific to individual ports.
       */
      portLevelSettings?: Array<{
        connectionPool?: {
          /**
           * HTTP connection pool settings.
           */
          http?: {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             */
            h2UpgradePolicy?: 'DEFAULT' | 'DO_NOT_UPGRADE' | 'UPGRADE';
            http1MaxPendingRequests?: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: string;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: number;
            maxRetries?: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: boolean;
          };
          /**
           * Settings common to both HTTP and TCP upstream connections.
           */
          tcp?: {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: number;
            /**
             * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
             */
            tcpKeepalive?: {
              /**
               * The time duration between keep-alive probes.
               */
              interval?: string;
              probes?: number;
              time?: string;
            };
          };
        };
        /**
         * Settings controlling the load balancer algorithms.
         */
        loadBalancer?: {
          consistentHash?: {
            /**
             * Hash based on HTTP cookie.
             */
            httpCookie?: {
              /**
               * Name of the cookie.
               */
              name?: string;
              /**
               * Path to set for the cookie.
               */
              path?: string;
              /**
               * Lifetime of the cookie.
               */
              ttl?: string;
            };
            /**
             * Hash based on a specific HTTP header.
             */
            httpHeaderName?: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            httpQueryParameterName?: string;
            /**
             * The Maglev load balancer implements consistent hashing to backend hosts.
             */
            maglev?: {
              /**
               * The table size for Maglev hashing.
               */
              tableSize?: number;
            };
            /**
             * Deprecated.
             */
            minimumRingSize?: number;
            /**
             * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
             */
            ringHash?: {
              minimumRingSize?: number;
            };
            /**
             * Hash based on the source IP address.
             */
            useSourceIp?: boolean;
          };
          localityLbSetting?: {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            distribute?: Array<{
              /**
               * Originating locality, '/' separated, e.g.
               */
              from?: string;
              /**
               * Map of upstream localities to traffic distribution weights.
               */
              to?: Record<string, number>;
            }>;
            /**
             * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
             */
            enabled?: any;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            failover?: Array<{
              /**
               * Originating region.
               */
              from?: string;
              to?: string;
            }>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            failoverPriority?: Array<string>;
          };
          simple?: 'UNSPECIFIED' | 'LEAST_CONN' | 'RANDOM' | 'PASSTHROUGH' | 'ROUND_ROBIN' | 'LEAST_REQUEST';
          /**
           * Represents the warmup duration of Service.
           */
          warmupDurationSecs?: string;
        };
        outlierDetection?: {
          /**
           * Minimum ejection duration.
           */
          baseEjectionTime?: string;
          /**
           * Number of 5xx errors before a host is ejected from the connection pool.
           */
          consecutive5xxErrors?: any;
          consecutiveErrors?: number;
          /**
           * Number of gateway errors before a host is ejected from the connection pool.
           */
          consecutiveGatewayErrors?: any;
          consecutiveLocalOriginFailures?: any;
          /**
           * Time interval between ejection sweep analysis.
           */
          interval?: string;
          maxEjectionPercent?: number;
          minHealthPercent?: number;
          /**
           * Determines whether to distinguish local origin failures from external errors.
           */
          splitExternalLocalOriginErrors?: boolean;
        };
        port?: {
          number?: number;
        };
        /**
         * TLS related settings for connections to the upstream service.
         */
        tls?: {
          caCertificates?: string;
          /**
           * REQUIRED if mode is `MUTUAL`.
           */
          clientCertificate?: string;
          credentialName?: string;
          insecureSkipVerify?: any;
          mode?: 'DISABLE' | 'SIMPLE' | 'MUTUAL' | 'ISTIO_MUTUAL';
          /**
           * REQUIRED if mode is `MUTUAL`.
           */
          privateKey?: string;
          /**
           * SNI string to present to the server during TLS handshake.
           */
          sni?: string;
          subjectAltNames?: Array<string>;
        };
      }>;
      /**
       * TLS related settings for connections to the upstream service.
       */
      tls?: {
        caCertificates?: string;
        /**
         * REQUIRED if mode is `MUTUAL`.
         */
        clientCertificate?: string;
        credentialName?: string;
        insecureSkipVerify?: any;
        mode?: 'DISABLE' | 'SIMPLE' | 'MUTUAL' | 'ISTIO_MUTUAL';
        /**
         * REQUIRED if mode is `MUTUAL`.
         */
        privateKey?: string;
        /**
         * SNI string to present to the server during TLS handshake.
         */
        sni?: string;
        subjectAltNames?: Array<string>;
      };
      tunnel?: {
        /**
         * Specifies which protocol to use for tunneling the downstream connection.
         */
        protocol?: string;
        /**
         * Specifies a host to which the downstream connection is tunneled.
         */
        targetHost?: string;
        /**
         * Specifies a port to which the downstream connection is tunneled.
         */
        targetPort?: number;
      };
    };
    workloadSelector?: {
      matchLabels?: Record<string, string>;
    };
  };
  status?: any;
};
