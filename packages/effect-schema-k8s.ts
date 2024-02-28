import * as Schema from "@effect/schema/Schema";


export const FormatSchema = Schema.enums({
  "byte": "byte",
  "date-time": "date-time",
  "double": "double",
  "int32": "int32",
  "int64": "int64",
});
export type Format = Schema.From<typeof FormatSchema>;


export const TypeElementSchema = Schema.enums({
  "array": "array",
  "boolean": "boolean",
  "integer": "integer",
  "null": "null",
  "number": "number",
  "object": "object",
  "string": "string",
});
export type TypeElement = Schema.From<typeof TypeElementSchema>;


export const XKubernetesListTypeSchema = Schema.enums({
  "atomic": "atomic",
  "map": "map",
  "set": "set",
});
export type XKubernetesListType = Schema.From<typeof XKubernetesListTypeSchema>;


export const XKubernetesPatchStrategySchema = Schema.enums({
  "merge": "merge",
  "merge,retainKeys": "merge,retainKeys",
  "retainKeys": "retainKeys",
});
export type XKubernetesPatchStrategy = Schema.From<typeof XKubernetesPatchStrategySchema>;


export const GroupSchema = Schema.enums({
  "admission.k8s.io": "admission.k8s.io",
  "admissionregistration.k8s.io": "admissionregistration.k8s.io",
  "apiextensions.k8s.io": "apiextensions.k8s.io",
  "apiregistration.k8s.io": "apiregistration.k8s.io",
  "apps": "apps",
  "auditregistration.k8s.io": "auditregistration.k8s.io",
  "authentication.k8s.io": "authentication.k8s.io",
  "authorization.k8s.io": "authorization.k8s.io",
  "autoscaling": "autoscaling",
  "batch": "batch",
  "certificates.k8s.io": "certificates.k8s.io",
  "coordination.k8s.io": "coordination.k8s.io",
  "discovery.k8s.io": "discovery.k8s.io",
  "": "",
  "events.k8s.io": "events.k8s.io",
  "extensions": "extensions",
  "flowcontrol.apiserver.k8s.io": "flowcontrol.apiserver.k8s.io",
  "imagepolicy.k8s.io": "imagepolicy.k8s.io",
  "networking.k8s.io": "networking.k8s.io",
  "node.k8s.io": "node.k8s.io",
  "policy": "policy",
  "rbac.authorization.k8s.io": "rbac.authorization.k8s.io",
  "scheduling.k8s.io": "scheduling.k8s.io",
  "settings.k8s.io": "settings.k8s.io",
  "storage.k8s.io": "storage.k8s.io",
});
export type Group = Schema.From<typeof GroupSchema>;


export const VersionSchema = Schema.enums({
  "v1": "v1",
  "v1alpha1": "v1alpha1",
  "v1beta1": "v1beta1",
  "v1beta2": "v1beta2",
  "v2alpha1": "v2alpha1",
  "v2beta1": "v2beta1",
  "v2beta2": "v2beta2",
});
export type Version = Schema.From<typeof VersionSchema>;


export const ScaleTargetRefRequiredSchema = Schema.enums({
  "address": "address",
  "admissionReviewVersions": "admissionReviewVersions",
  "apiVersion": "apiVersion",
  "clientConfig": "clientConfig",
  "devicePath": "devicePath",
  "kind": "kind",
  "mountPath": "mountPath",
  "name": "name",
  "sideEffects": "sideEffects",
  "status": "status",
  "type": "type",
  "uid": "uid",
});
export type ScaleTargetRefRequired = Schema.From<typeof ScaleTargetRefRequiredSchema>;


export const QueuingEnumSchema = Schema.enums({
  "Queuing": "Queuing",
});
export type QueuingEnum = Schema.From<typeof QueuingEnumSchema>;


export const CsiRequiredSchema = Schema.enums({
  "driver": "driver",
  "volumeHandle": "volumeHandle",
});
export type CsiRequired = Schema.From<typeof CsiRequiredSchema>;


export const AwsElasticBlockStoreRequiredSchema = Schema.enums({
  "volumeID": "volumeID",
});
export type AwsElasticBlockStoreRequired = Schema.From<typeof AwsElasticBlockStoreRequiredSchema>;


export const AzureDiskRequiredSchema = Schema.enums({
  "diskName": "diskName",
  "diskURI": "diskURI",
});
export type AzureDiskRequired = Schema.From<typeof AzureDiskRequiredSchema>;


export const AzureFileRequiredSchema = Schema.enums({
  "secretName": "secretName",
  "shareName": "shareName",
});
export type AzureFileRequired = Schema.From<typeof AzureFileRequiredSchema>;


export const CephfsRequiredSchema = Schema.enums({
  "image": "image",
  "monitors": "monitors",
});
export type CephfsRequired = Schema.From<typeof CephfsRequiredSchema>;


export const ServiceDescriptionSchema = Schema.enums({
  "ServiceReference holds a reference to Service.legacy.k8s.io": "ServiceReference holds a reference to Service.legacy.k8s.io",
});
export type ServiceDescription = Schema.From<typeof ServiceDescriptionSchema>;


export const ConfigMapRequiredSchema = Schema.enums({
  "kubeletConfigKey": "kubeletConfigKey",
  "name": "name",
  "namespace": "namespace",
});
export type ConfigMapRequired = Schema.From<typeof ConfigMapRequiredSchema>;


export const KeytopathV1DescriptionSchema = Schema.enums({
  "Maps a string key to a path within a volume.": "Maps a string key to a path within a volume.",
});
export type KeytopathV1Description = Schema.From<typeof KeytopathV1DescriptionSchema>;


export const HostPathRequiredSchema = Schema.enums({
  "key": "key",
  "path": "path",
});
export type HostPathRequired = Schema.From<typeof HostPathRequiredSchema>;


export const PurpleDescriptionSchema = Schema.enums({
  "Items is a list of DownwardAPIVolume file": "Items is a list of DownwardAPIVolume file",
  "Items is a list of downward API volume file": "Items is a list of downward API volume file",
});
export type PurpleDescription = Schema.From<typeof PurpleDescriptionSchema>;


export const FieldRefDescriptionSchema = Schema.enums({
  "ObjectFieldSelector selects an APIVersioned field of an object.": "ObjectFieldSelector selects an APIVersioned field of an object.",
});
export type FieldRefDescription = Schema.From<typeof FieldRefDescriptionSchema>;


export const FieldRefRequiredSchema = Schema.enums({
  "fieldPath": "fieldPath",
});
export type FieldRefRequired = Schema.From<typeof FieldRefRequiredSchema>;


export const ResourceFieldRefRequiredSchema = Schema.enums({
  "resource": "resource",
});
export type ResourceFieldRefRequired = Schema.From<typeof ResourceFieldRefRequiredSchema>;


export const ValueFromDescriptionSchema = Schema.enums({
  "EnvVarSource represents a source for the value of an EnvVar.": "EnvVarSource represents a source for the value of an EnvVar.",
});
export type ValueFromDescription = Schema.From<typeof ValueFromDescriptionSchema>;


export const ConfigMapKeyRefDescriptionSchema = Schema.enums({
  "SecretKeySelector selects a key of a Secret.": "SecretKeySelector selects a key of a Secret.",
  "Selects a key from a ConfigMap.": "Selects a key from a ConfigMap.",
});
export type ConfigMapKeyRefDescription = Schema.From<typeof ConfigMapKeyRefDescriptionSchema>;


export const ConfigMapKeyRefRequiredSchema = Schema.enums({
  "devicePath": "devicePath",
  "ip": "ip",
  "key": "key",
  "mountPath": "mountPath",
  "name": "name",
  "type": "type",
  "uid": "uid",
});
export type ConfigMapKeyRefRequired = Schema.From<typeof ConfigMapKeyRefRequiredSchema>;


export const FluffyDescriptionSchema = Schema.enums({
  "EnvFromSource represents the source of a set of ConfigMaps": "EnvFromSource represents the source of a set of ConfigMaps",
});
export type FluffyDescription = Schema.From<typeof FluffyDescriptionSchema>;


export const GcePersistentDiskRequiredSchema = Schema.enums({
  "pdName": "pdName",
});
export type GcePersistentDiskRequired = Schema.From<typeof GcePersistentDiskRequiredSchema>;


export const GitRepoRequiredSchema = Schema.enums({
  "repository": "repository",
});
export type GitRepoRequired = Schema.From<typeof GitRepoRequiredSchema>;


export const GlusterfsRequiredSchema = Schema.enums({
  "endpoints": "endpoints",
  "path": "path",
});
export type GlusterfsRequired = Schema.From<typeof GlusterfsRequiredSchema>;


export const IscsiRequiredSchema = Schema.enums({
  "iqn": "iqn",
  "lun": "lun",
  "targetPortal": "targetPortal",
});
export type IscsiRequired = Schema.From<typeof IscsiRequiredSchema>;


export const PostStartDescriptionSchema = Schema.enums({
  "Handler defines a specific action that should be taken": "Handler defines a specific action that should be taken",
});
export type PostStartDescription = Schema.From<typeof PostStartDescriptionSchema>;


export const ExecDescriptionSchema = Schema.enums({
  "ExecAction describes a \"run in container\" action.": "ExecAction describes a \"run in container\" action.",
});
export type ExecDescription = Schema.From<typeof ExecDescriptionSchema>;


export const HttpGetDescriptionSchema = Schema.enums({
  "HTTPGetAction describes an action based on HTTP Get requests.": "HTTPGetAction describes an action based on HTTP Get requests.",
});
export type HttpGetDescription = Schema.From<typeof HttpGetDescriptionSchema>;


export const HttpheaderV1DescriptionSchema = Schema.enums({
  "HTTPHeader describes a custom header to be used in HTTP probes": "HTTPHeader describes a custom header to be used in HTTP probes",
  "Sysctl defines a kernel parameter to be set": "Sysctl defines a kernel parameter to be set",
});
export type HttpheaderV1Description = Schema.From<typeof HttpheaderV1DescriptionSchema>;


export const HttpheaderV1RequiredSchema = Schema.enums({
  "name": "name",
  "value": "value",
});
export type HttpheaderV1Required = Schema.From<typeof HttpheaderV1RequiredSchema>;


export const HttpGetRequiredSchema = Schema.enums({
  "port": "port",
  "protocol": "protocol",
});
export type HttpGetRequired = Schema.From<typeof HttpGetRequiredSchema>;


export const TcpSocketDescriptionSchema = Schema.enums({
  "TCPSocketAction describes an action based on opening a socket": "TCPSocketAction describes an action based on opening a socket",
});
export type TcpSocketDescription = Schema.From<typeof TcpSocketDescriptionSchema>;


export const ContainerportV1DescriptionSchema = Schema.enums({
  "ContainerPort represents a network port in a single container.": "ContainerPort represents a network port in a single container.",
});
export type ContainerportV1Description = Schema.From<typeof ContainerportV1DescriptionSchema>;


export const ContainerportV1RequiredSchema = Schema.enums({
  "containerPort": "containerPort",
  "protocol": "protocol",
});
export type ContainerportV1Required = Schema.From<typeof ContainerportV1RequiredSchema>;


export const CapabilitiesDescriptionSchema = Schema.enums({
  "Adds and removes POSIX capabilities from running containers.": "Adds and removes POSIX capabilities from running containers.",
});
export type CapabilitiesDescription = Schema.From<typeof CapabilitiesDescriptionSchema>;


export const SeLinuxOptionsDescriptionSchema = Schema.enums({
  "SELinuxOptions are the labels to be applied to the container": "SELinuxOptions are the labels to be applied to the container",
});
export type SeLinuxOptionsDescription = Schema.From<typeof SeLinuxOptionsDescriptionSchema>;


export const VolumemountV1DescriptionSchema = Schema.enums({
  "VolumeMount describes a mounting of a Volume within a container.": "VolumeMount describes a mounting of a Volume within a container.",
});
export type VolumemountV1Description = Schema.From<typeof VolumemountV1DescriptionSchema>;


export const CsinodedriverStorageV1RequiredSchema = Schema.enums({
  "name": "name",
  "nodeID": "nodeID",
});
export type CsinodedriverStorageV1Required = Schema.From<typeof CsinodedriverStorageV1RequiredSchema>;


export const LabelselectorrequirementMetaV1RequiredSchema = Schema.enums({
  "key": "key",
  "operator": "operator",
  "scopeName": "scopeName",
});
export type LabelselectorrequirementMetaV1Required = Schema.From<typeof LabelselectorrequirementMetaV1RequiredSchema>;


export const NfsRequiredSchema = Schema.enums({
  "path": "path",
  "server": "server",
});
export type NfsRequired = Schema.From<typeof NfsRequiredSchema>;


export const PersistentVolumeClaimRequiredSchema = Schema.enums({
  "claimName": "claimName",
});
export type PersistentVolumeClaimRequired = Schema.From<typeof PersistentVolumeClaimRequiredSchema>;


export const PhotonPersistentDiskDescriptionSchema = Schema.enums({
  "Represents a Photon Controller persistent disk resource.": "Represents a Photon Controller persistent disk resource.",
});
export type PhotonPersistentDiskDescription = Schema.From<typeof PhotonPersistentDiskDescriptionSchema>;


export const PhotonPersistentDiskRequiredSchema = Schema.enums({
  "pdID": "pdID",
});
export type PhotonPersistentDiskRequired = Schema.From<typeof PhotonPersistentDiskRequiredSchema>;


export const PortworxVolumeDescriptionSchema = Schema.enums({
  "PortworxVolumeSource represents a Portworx volume resource.": "PortworxVolumeSource represents a Portworx volume resource.",
});
export type PortworxVolumeDescription = Schema.From<typeof PortworxVolumeDescriptionSchema>;


export const ProjectedDescriptionSchema = Schema.enums({
  "Represents a projected volume source": "Represents a projected volume source",
});
export type ProjectedDescription = Schema.From<typeof ProjectedDescriptionSchema>;


export const SourcesDescriptionSchema = Schema.enums({
  "list of volume projections": "list of volume projections",
});
export type SourcesDescription = Schema.From<typeof SourcesDescriptionSchema>;


export const ProjectedRequiredSchema = Schema.enums({
  "sources": "sources",
});
export type ProjectedRequired = Schema.From<typeof ProjectedRequiredSchema>;


export const QuobyteRequiredSchema = Schema.enums({
  "registry": "registry",
  "volume": "volume",
});
export type QuobyteRequired = Schema.From<typeof QuobyteRequiredSchema>;


export const ScaleIoDescriptionSchema = Schema.enums({
  "ScaleIOVolumeSource represents a persistent ScaleIO volume": "ScaleIOVolumeSource represents a persistent ScaleIO volume",
});
export type ScaleIoDescription = Schema.From<typeof ScaleIoDescriptionSchema>;


export const ScaleIoRequiredSchema = Schema.enums({
  "gateway": "gateway",
  "secretRef": "secretRef",
  "system": "system",
});
export type ScaleIoRequired = Schema.From<typeof ScaleIoRequiredSchema>;


export const StorageosDescriptionSchema = Schema.enums({
  "Represents a StorageOS persistent volume resource.": "Represents a StorageOS persistent volume resource.",
});
export type StorageosDescription = Schema.From<typeof StorageosDescriptionSchema>;


export const VsphereVolumeDescriptionSchema = Schema.enums({
  "Represents a vSphere volume resource.": "Represents a vSphere volume resource.",
});
export type VsphereVolumeDescription = Schema.From<typeof VsphereVolumeDescriptionSchema>;


export const VsphereVolumeRequiredSchema = Schema.enums({
  "volumePath": "volumePath",
});
export type VsphereVolumeRequired = Schema.From<typeof VsphereVolumeRequiredSchema>;


export const IpBlockRequiredSchema = Schema.enums({
  "cidr": "cidr",
});
export type IpBlockRequired = Schema.From<typeof IpBlockRequiredSchema>;


export const TopologyselectorlabelrequirementV1RequiredSchema = Schema.enums({
  "key": "key",
  "values": "values",
});
export type TopologyselectorlabelrequirementV1Required = Schema.From<typeof TopologyselectorlabelrequirementV1RequiredSchema>;


export const NodeSelectorTermsDescriptionSchema = Schema.enums({
  "Required. A list of node selector terms. The terms are ORed.": "Required. A list of node selector terms. The terms are ORed.",
});
export type NodeSelectorTermsDescription = Schema.From<typeof NodeSelectorTermsDescriptionSchema>;


export const MatchFieldsDescriptionSchema = Schema.enums({
  "A list of node selector requirements by node's fields.": "A list of node selector requirements by node's fields.",
  "A list of node selector requirements by node's labels.": "A list of node selector requirements by node's labels.",
});
export type MatchFieldsDescription = Schema.From<typeof MatchFieldsDescriptionSchema>;


export const RequiredRequiredSchema = Schema.enums({
  "nodeSelectorTerms": "nodeSelectorTerms",
});
export type RequiredRequired = Schema.From<typeof RequiredRequiredSchema>;


export const PreferredschedulingtermV1RequiredSchema = Schema.enums({
  "preference": "preference",
  "weight": "weight",
});
export type PreferredschedulingtermV1Required = Schema.From<typeof PreferredschedulingtermV1RequiredSchema>;


export const PodspecV1DescriptionSchema = Schema.enums({
  "PodSpec is a description of a pod.": "PodSpec is a description of a pod.",
});
export type PodspecV1Description = Schema.From<typeof PodspecV1DescriptionSchema>;


export const AffinityDescriptionSchema = Schema.enums({
  "Affinity is a group of affinity scheduling rules.": "Affinity is a group of affinity scheduling rules.",
});
export type AffinityDescription = Schema.From<typeof AffinityDescriptionSchema>;


export const NodeAffinityDescriptionSchema = Schema.enums({
  "Node affinity is a group of node affinity scheduling rules.": "Node affinity is a group of node affinity scheduling rules.",
});
export type NodeAffinityDescription = Schema.From<typeof NodeAffinityDescriptionSchema>;


export const PodAffinityTermRequiredSchema = Schema.enums({
  "maxSkew": "maxSkew",
  "topologyKey": "topologyKey",
  "whenUnsatisfiable": "whenUnsatisfiable",
});
export type PodAffinityTermRequired = Schema.From<typeof PodAffinityTermRequiredSchema>;


export const WeightedpodaffinitytermV1RequiredSchema = Schema.enums({
  "podAffinityTerm": "podAffinityTerm",
  "weight": "weight",
});
export type WeightedpodaffinitytermV1Required = Schema.From<typeof WeightedpodaffinitytermV1RequiredSchema>;


export const StickyDescriptionSchema = Schema.enums({
  "PodDNSConfigOption defines DNS resolver options of a pod.": "PodDNSConfigOption defines DNS resolver options of a pod.",
});
export type StickyDescription = Schema.From<typeof StickyDescriptionSchema>;


export const PortsDescriptionSchema = Schema.enums({
  "Ports are not allowed for ephemeral containers.": "Ports are not allowed for ephemeral containers.",
});
export type PortsDescription = Schema.From<typeof PortsDescriptionSchema>;


export const PodreadinessgateV1DescriptionSchema = Schema.enums({
  "PodReadinessGate contains the reference to a pod condition": "PodReadinessGate contains the reference to a pod condition",
});
export type PodreadinessgateV1Description = Schema.From<typeof PodreadinessgateV1DescriptionSchema>;


export const PodreadinessgateV1RequiredSchema = Schema.enums({
  "conditionType": "conditionType",
});
export type PodreadinessgateV1Required = Schema.From<typeof PodreadinessgateV1RequiredSchema>;


export const PodspecV1RequiredSchema = Schema.enums({
  "containers": "containers",
});
export type PodspecV1Required = Schema.From<typeof PodspecV1RequiredSchema>;


export const PreferredVersionRequiredSchema = Schema.enums({
  "groupVersion": "groupVersion",
  "version": "version",
});
export type PreferredVersionRequired = Schema.From<typeof PreferredVersionRequiredSchema>;


export const ServeraddressbyclientcidrMetaV1RequiredSchema = Schema.enums({
  "clientCIDR": "clientCIDR",
  "serverAddress": "serverAddress",
});
export type ServeraddressbyclientcidrMetaV1Required = Schema.From<typeof ServeraddressbyclientcidrMetaV1RequiredSchema>;


export const ApiservicespecApiregistrationV1RequiredSchema = Schema.enums({
  "groupPriorityMinimum": "groupPriorityMinimum",
  "versionPriority": "versionPriority",
});
export type ApiservicespecApiregistrationV1Required = Schema.From<typeof ApiservicespecApiregistrationV1RequiredSchema>;


export const ApiservicelistApiregistrationV1RequiredSchema = Schema.enums({
  "items": "items",
});
export type ApiservicelistApiregistrationV1Required = Schema.From<typeof ApiservicelistApiregistrationV1RequiredSchema>;


export const RunningDescriptionSchema = Schema.enums({
  "ContainerStateRunning is a running state of a container.": "ContainerStateRunning is a running state of a container.",
});
export type RunningDescription = Schema.From<typeof RunningDescriptionSchema>;


export const TerminatedDescriptionSchema = Schema.enums({
  "ContainerStateTerminated is a terminated state of a container.": "ContainerStateTerminated is a terminated state of a container.",
});
export type TerminatedDescription = Schema.From<typeof TerminatedDescriptionSchema>;


export const TerminatedRequiredSchema = Schema.enums({
  "exitCode": "exitCode",
});
export type TerminatedRequired = Schema.From<typeof TerminatedRequiredSchema>;


export const WaitingDescriptionSchema = Schema.enums({
  "ContainerStateWaiting is a waiting state of a container.": "ContainerStateWaiting is a waiting state of a container.",
});
export type WaitingDescription = Schema.From<typeof WaitingDescriptionSchema>;


export const ContainerstatusV1RequiredSchema = Schema.enums({
  "image": "image",
  "imageID": "imageID",
  "name": "name",
  "ready": "ready",
  "restartCount": "restartCount",
});
export type ContainerstatusV1Required = Schema.From<typeof ContainerstatusV1RequiredSchema>;


export const HostportrangePolicyV1Beta1RequiredSchema = Schema.enums({
  "max": "max",
  "min": "min",
});
export type HostportrangePolicyV1Beta1Required = Schema.From<typeof HostportrangePolicyV1Beta1RequiredSchema>;


export const TentacledDescriptionSchema = Schema.enums({
  "A list of node selector requirements by node's labels.": "A list of node selector requirements by node's labels.",
  "A list of scope selector requirements by scope of the resources.": "A list of scope selector requirements by scope of the resources.",
});
export type TentacledDescription = Schema.From<typeof TentacledDescriptionSchema>;


export const NonresourcepolicyruleFlowcontrolV1Alpha1RequiredSchema = Schema.enums({
  "nonResourceURLs": "nonResourceURLs",
  "verbs": "verbs",
});
export type NonresourcepolicyruleFlowcontrolV1Alpha1Required = Schema.From<typeof NonresourcepolicyruleFlowcontrolV1Alpha1RequiredSchema>;


export const IndigoDescriptionSchema = Schema.enums({
  "NetworkPolicyPort describes a port to allow traffic on": "NetworkPolicyPort describes a port to allow traffic on",
});
export type IndigoDescription = Schema.From<typeof IndigoDescriptionSchema>;


export const EndpointaddressV1DescriptionSchema = Schema.enums({
  "EndpointAddress is a tuple that describes single IP address.": "EndpointAddress is a tuple that describes single IP address.",
});
export type EndpointaddressV1Description = Schema.From<typeof EndpointaddressV1DescriptionSchema>;


export const PathsDescriptionSchema = Schema.enums({
  "A collection of paths that map requests to backends.": "A collection of paths that map requests to backends.",
});
export type PathsDescription = Schema.From<typeof PathsDescriptionSchema>;


export const HttpingresspathExtensionsV1Beta1RequiredSchema = Schema.enums({
  "backend": "backend",
});
export type HttpingresspathExtensionsV1Beta1Required = Schema.From<typeof HttpingresspathExtensionsV1Beta1RequiredSchema>;


export const HttpRequiredSchema = Schema.enums({
  "paths": "paths",
});
export type HttpRequired = Schema.From<typeof HttpRequiredSchema>;


export const LoadBalancerDescriptionSchema = Schema.enums({
  "LoadBalancerStatus represents the status of a load-balancer.": "LoadBalancerStatus represents the status of a load-balancer.",
});
export type LoadBalancerDescription = Schema.From<typeof LoadBalancerDescriptionSchema>;


export const HpascalingpolicyAutoscalingV2Beta2RequiredSchema = Schema.enums({
  "periodSeconds": "periodSeconds",
  "type": "type",
  "value": "value",
});
export type HpascalingpolicyAutoscalingV2Beta2Required = Schema.From<typeof HpascalingpolicyAutoscalingV2Beta2RequiredSchema>;


export const RoleRefRequiredSchema = Schema.enums({
  "apiGroup": "apiGroup",
  "kind": "kind",
  "name": "name",
});
export type RoleRefRequired = Schema.From<typeof RoleRefRequiredSchema>;


export const SubjectsDescriptionSchema = Schema.enums({
  "Subjects holds references to the objects the role applies to.": "Subjects holds references to the objects the role applies to.",
});
export type SubjectsDescription = Schema.From<typeof SubjectsDescriptionSchema>;


export const JobspecBatchV1DescriptionSchema = Schema.enums({
  "JobSpec describes how the job execution will look like.": "JobSpec describes how the job execution will look like.",
});
export type JobspecBatchV1Description = Schema.From<typeof JobspecBatchV1DescriptionSchema>;


export const JobspecBatchV1RequiredSchema = Schema.enums({
  "template": "template",
});
export type JobspecBatchV1Required = Schema.From<typeof JobspecBatchV1RequiredSchema>;


export const CronjobspecBatchV1Beta1RequiredSchema = Schema.enums({
  "jobTemplate": "jobTemplate",
  "schedule": "schedule",
});
export type CronjobspecBatchV1Beta1Required = Schema.From<typeof CronjobspecBatchV1Beta1RequiredSchema>;


export const SeriesRequiredSchema = Schema.enums({
  "count": "count",
  "lastObservedTime": "lastObservedTime",
  "state": "state",
});
export type SeriesRequired = Schema.From<typeof SeriesRequiredSchema>;


export const ExternalmetricsourceAutoscalingV2Beta1RequiredSchema = Schema.enums({
  "currentValue": "currentValue",
  "metricName": "metricName",
  "target": "target",
  "targetValue": "targetValue",
});
export type ExternalmetricsourceAutoscalingV2Beta1Required = Schema.From<typeof ExternalmetricsourceAutoscalingV2Beta1RequiredSchema>;


export const ExternalmetricsourceAutoscalingV2Beta2RequiredSchema = Schema.enums({
  "describedObject": "describedObject",
  "metric": "metric",
  "target": "target",
});
export type ExternalmetricsourceAutoscalingV2Beta2Required = Schema.From<typeof ExternalmetricsourceAutoscalingV2Beta2RequiredSchema>;


export const CurrentDescriptionSchema = Schema.enums({
  "MetricValueStatus holds the current value for a metric": "MetricValueStatus holds the current value for a metric",
});
export type CurrentDescription = Schema.From<typeof CurrentDescriptionSchema>;


export const ExternalmetricstatusAutoscalingV2Beta2RequiredSchema = Schema.enums({
  "current": "current",
  "describedObject": "describedObject",
  "metric": "metric",
});
export type ExternalmetricstatusAutoscalingV2Beta2Required = Schema.From<typeof ExternalmetricstatusAutoscalingV2Beta2RequiredSchema>;


export const ResourcepolicyruleFlowcontrolV1Alpha1RequiredSchema = Schema.enums({
  "apiGroups": "apiGroups",
  "resources": "resources",
  "verbs": "verbs",
});
export type ResourcepolicyruleFlowcontrolV1Alpha1Required = Schema.From<typeof ResourcepolicyruleFlowcontrolV1Alpha1RequiredSchema>;


export const ConditionsDescriptionSchema = Schema.enums({
  "`conditions` is a list of the current states of FlowSchema.": "`conditions` is a list of the current states of FlowSchema.",
  "`conditions` is the current state of \"request-priority\".": "`conditions` is the current state of \"request-priority\".",
});
export type ConditionsDescription = Schema.From<typeof ConditionsDescriptionSchema>;


export const StatusRequiredSchema = Schema.enums({
  "conditions": "conditions",
  "currentReplicas": "currentReplicas",
  "desiredReplicas": "desiredReplicas",
});
export type StatusRequired = Schema.From<typeof StatusRequiredSchema>;


export const ResourcemetricsourceAutoscalingV2Beta2RequiredSchema = Schema.enums({
  "name": "name",
  "target": "target",
});
export type ResourcemetricsourceAutoscalingV2Beta2Required = Schema.From<typeof ResourcemetricsourceAutoscalingV2Beta2RequiredSchema>;


export const ResourcemetricstatusAutoscalingV2Beta2RequiredSchema = Schema.enums({
  "current": "current",
  "name": "name",
});
export type ResourcemetricstatusAutoscalingV2Beta2Required = Schema.From<typeof ResourcemetricstatusAutoscalingV2Beta2RequiredSchema>;


export const StatusDescriptionSchema = Schema.enums({
  "IngressStatus describe the current state of the Ingress.": "IngressStatus describe the current state of the Ingress.",
  "ServiceStatus represents the current status of a service.": "ServiceStatus represents the current status of a service.",
});
export type StatusDescription = Schema.From<typeof StatusDescriptionSchema>;


export const TaintV1RequiredSchema = Schema.enums({
  "effect": "effect",
  "key": "key",
});
export type TaintV1Required = Schema.From<typeof TaintV1RequiredSchema>;


export const VolumeattachmentspecStorageV1RequiredSchema = Schema.enums({
  "attacher": "attacher",
  "nodeName": "nodeName",
  "source": "source",
});
export type VolumeattachmentspecStorageV1Required = Schema.From<typeof VolumeattachmentspecStorageV1RequiredSchema>;

export const WeightedpodaffinitytermV1PropertiesSchema = Schema.struct({
  "podAffinityTerm": Schema.lazy(() => RequiredDuringSchedulingIgnoredDuringExecutionPodAffinityTermSchema),
  "weight": Schema.lazy(() => LastTransitionTimeSchema),
});
export type WeightedpodaffinitytermV1Properties = Schema.From<typeof WeightedpodaffinitytermV1PropertiesSchema>;

export const WeightedpodaffinitytermSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => WeightedpodaffinitytermV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => WeightedpodaffinitytermV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Weightedpodaffinityterm = Schema.From<typeof WeightedpodaffinitytermSchema>;

export const WebhookconversionApiextensionsV1PropertiesSchema = Schema.struct({
  "clientConfig": Schema.lazy(() => ClientConfigSchema),
  "conversionReviewVersions": Schema.lazy(() => ValuesClassSchema),
});
export type WebhookconversionApiextensionsV1Properties = Schema.From<typeof WebhookconversionApiextensionsV1PropertiesSchema>;

export const WebhookconversionSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => WebhookconversionApiextensionsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Webhookconversion = Schema.From<typeof WebhookconversionSchema>;

export const WebhookAuditregistrationV1Alpha1PropertiesSchema = Schema.struct({
  "clientConfig": Schema.lazy(() => ClientConfigSchema),
  "throttle": Schema.lazy(() => ThrottleSchema),
});
export type WebhookAuditregistrationV1Alpha1Properties = Schema.From<typeof WebhookAuditregistrationV1Alpha1PropertiesSchema>;

export const WebhookSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => WebhookAuditregistrationV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Webhook = Schema.From<typeof WebhookSchema>;

export const WatcheventMetaV1PropertiesSchema = Schema.struct({
  "object": Schema.lazy(() => DriverSchema),
  "type": Schema.lazy(() => BuildDateSchema),
});
export type WatcheventMetaV1Properties = Schema.From<typeof WatcheventMetaV1PropertiesSchema>;

export const WatcheventSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => WatcheventMetaV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Watchevent = Schema.From<typeof WatcheventSchema>;

export const VspherevirtualdiskvolumesourceV1PropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "storagePolicyID": Schema.lazy(() => DriverSchema),
  "storagePolicyName": Schema.lazy(() => DriverSchema),
  "volumePath": Schema.lazy(() => DriverSchema),
});
export type VspherevirtualdiskvolumesourceV1Properties = Schema.From<typeof VspherevirtualdiskvolumesourceV1PropertiesSchema>;

export const VspherevirtualdiskvolumesourceSchema = Schema.struct({
  "description": Schema.lazy(() => VsphereVolumeDescriptionSchema),
  "properties": Schema.lazy(() => VspherevirtualdiskvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => VsphereVolumeRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Vspherevirtualdiskvolumesource = Schema.From<typeof VspherevirtualdiskvolumesourceSchema>;

export const VolumemountV1PropertiesSchema = Schema.struct({
  "mountPath": Schema.lazy(() => DriverSchema),
  "mountPropagation": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "subPath": Schema.lazy(() => DriverSchema),
  "subPathExpr": Schema.lazy(() => DriverSchema),
});
export type VolumemountV1Properties = Schema.From<typeof VolumemountV1PropertiesSchema>;

export const VolumemountSchema = Schema.struct({
  "description": Schema.lazy(() => VolumemountV1DescriptionSchema),
  "properties": Schema.lazy(() => VolumemountV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Volumemount = Schema.From<typeof VolumemountSchema>;

export const VolumeattachmentstatusStorageV1PropertiesSchema = Schema.struct({
  "attachError": Schema.lazy(() => TachErrorSchema),
  "attached": Schema.lazy(() => DriverSchema),
  "attachmentMetadata": Schema.lazy(() => VolumeAttributesClassSchema),
  "detachError": Schema.lazy(() => TachErrorSchema),
});
export type VolumeattachmentstatusStorageV1Properties = Schema.From<typeof VolumeattachmentstatusStorageV1PropertiesSchema>;

export const VolumeattachmentstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => VolumeattachmentstatusStorageV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Volumeattachmentstatus = Schema.From<typeof VolumeattachmentstatusSchema>;

export const PurpleSourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => VolumeattachmentsourceStorageV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleSource = Schema.From<typeof PurpleSourceSchema>;

export const VolumeattachmentspecStorageV1PropertiesSchema = Schema.struct({
  "attacher": Schema.lazy(() => DriverSchema),
  "nodeName": Schema.lazy(() => DriverSchema),
  "source": Schema.lazy(() => PurpleSourceSchema),
});
export type VolumeattachmentspecStorageV1Properties = Schema.From<typeof VolumeattachmentspecStorageV1PropertiesSchema>;

export const VolumeattachmentspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => VolumeattachmentspecStorageV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => VolumeattachmentspecStorageV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Volumeattachmentspec = Schema.From<typeof VolumeattachmentspecSchema>;

export const Properties202Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec20Schema),
  "status": Schema.lazy(() => Status13Schema),
});
export type Properties202 = Schema.From<typeof Properties202Schema>;

export const Items185Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties202Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items185 = Schema.From<typeof Items185Schema>;

export const Items184Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items185Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items184 = Schema.From<typeof Items184Schema>;

export const VolumeattachmentlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items184Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type VolumeattachmentlistProperties = Schema.From<typeof VolumeattachmentlistPropertiesSchema>;

export const VolumeattachmentlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => VolumeattachmentlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Volumeattachmentlist = Schema.From<typeof VolumeattachmentlistSchema>;

export const Spec20Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties199Schema),
  "required": Schema.array(Schema.lazy(() => VolumeattachmentspecStorageV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type Spec20 = Schema.From<typeof Spec20Schema>;

export const Properties201Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec20Schema),
  "status": Schema.lazy(() => Status13Schema),
});
export type Properties201 = Schema.From<typeof Properties201Schema>;

export const Items183Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties201Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items183 = Schema.From<typeof Items183Schema>;

export const Items182Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items183Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items182 = Schema.From<typeof Items182Schema>;

export const VolumeattachmentlistStorageV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items182Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type VolumeattachmentlistStorageV1Properties = Schema.From<typeof VolumeattachmentlistStorageV1PropertiesSchema>;

export const VolumeattachmentlistStorageV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => VolumeattachmentlistStorageV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type VolumeattachmentlistStorageV1Beta1 = Schema.From<typeof VolumeattachmentlistStorageV1Beta1Schema>;

export const VolumeattachmentPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec19Schema),
  "status": Schema.lazy(() => Status13Schema),
});
export type VolumeattachmentProperties = Schema.From<typeof VolumeattachmentPropertiesSchema>;

export const VolumeattachmentSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => VolumeattachmentPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Volumeattachment = Schema.From<typeof VolumeattachmentSchema>;

export const AttachErrorPropertiesSchema = Schema.struct({
  "message": Schema.lazy(() => DriverSchema),
  "time": Schema.lazy(() => LastTransitionTimeSchema),
});
export type AttachErrorProperties = Schema.From<typeof AttachErrorPropertiesSchema>;

export const TachErrorSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AttachErrorPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TachError = Schema.From<typeof TachErrorSchema>;

export const Properties200Schema = Schema.struct({
  "attachError": Schema.lazy(() => TachErrorSchema),
  "attached": Schema.lazy(() => GroupVersionSchema),
  "attachmentMetadata": Schema.lazy(() => VolumeAttributesClassSchema),
  "detachError": Schema.lazy(() => TachErrorSchema),
});
export type Properties200 = Schema.From<typeof Properties200Schema>;

export const Status13Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties200Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status13 = Schema.From<typeof Status13Schema>;

export const VolumeattachmentsourceStorageV1PropertiesSchema = Schema.struct({
  "inlineVolumeSpec": Schema.lazy(() => InlineVolumeSpecClassSchema),
  "persistentVolumeName": Schema.lazy(() => DriverSchema),
});
export type VolumeattachmentsourceStorageV1Properties = Schema.From<typeof VolumeattachmentsourceStorageV1PropertiesSchema>;

export const VolumeattachmentsourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => VolumeattachmentsourceStorageV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
});
export type Volumeattachmentsource = Schema.From<typeof VolumeattachmentsourceSchema>;

export const Properties199Schema = Schema.struct({
  "attacher": Schema.lazy(() => GroupVersionSchema),
  "nodeName": Schema.lazy(() => GroupVersionSchema),
  "source": Schema.lazy(() => VolumeattachmentsourceSchema),
});
export type Properties199 = Schema.From<typeof Properties199Schema>;

export const Spec19Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties199Schema),
  "required": Schema.array(Schema.lazy(() => VolumeattachmentspecStorageV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec19 = Schema.From<typeof Spec19Schema>;

export const VolumeattachmentStorageV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec19Schema),
  "status": Schema.lazy(() => Status13Schema),
});
export type VolumeattachmentStorageV1Properties = Schema.From<typeof VolumeattachmentStorageV1PropertiesSchema>;

export const VolumeattachmentStorageV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => VolumeattachmentStorageV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type VolumeattachmentStorageV1Beta1 = Schema.From<typeof VolumeattachmentStorageV1Beta1Schema>;

export const VolumeV1PropertiesSchema = Schema.struct({
  "awsElasticBlockStore": Schema.lazy(() => AwsElasticBlockStoreSchema),
  "azureDisk": Schema.lazy(() => AzureDiskSchema),
  "azureFile": Schema.lazy(() => AzureFileSchema),
  "cephfs": Schema.lazy(() => PurpleCephfsSchema),
  "cinder": Schema.lazy(() => PurpleCinderSchema),
  "configMap": Schema.lazy(() => SecretClassSchema),
  "csi": Schema.lazy(() => PurpleCsiSchema),
  "downwardAPI": Schema.lazy(() => PurpleDownwardApiSchema),
  "emptyDir": Schema.lazy(() => EmptyDirSchema),
  "fc": Schema.lazy(() => FcSchema),
  "flexVolume": Schema.lazy(() => PurpleFlexVolumeSchema),
  "flocker": Schema.lazy(() => FlockerSchema),
  "gcePersistentDisk": Schema.lazy(() => GcePersistentDiskSchema),
  "gitRepo": Schema.lazy(() => GitRepoSchema),
  "glusterfs": Schema.lazy(() => GlusterfsSchema),
  "hostPath": Schema.lazy(() => HostPathSchema),
  "iscsi": Schema.lazy(() => PurpleIscsiSchema),
  "name": Schema.lazy(() => DriverSchema),
  "nfs": Schema.lazy(() => NfsSchema),
  "persistentVolumeClaim": Schema.lazy(() => PersistentVolumeClaimSchema),
  "photonPersistentDisk": Schema.lazy(() => PhotonPersistentDiskSchema),
  "portworxVolume": Schema.lazy(() => PortworxVolumeSchema),
  "projected": Schema.lazy(() => ProjectedSchema),
  "quobyte": Schema.lazy(() => QuobyteSchema),
  "rbd": Schema.lazy(() => PurpleRbdSchema),
  "scaleIO": Schema.lazy(() => PurpleScaleIoSchema),
  "secret": Schema.lazy(() => SecretClassSchema),
  "storageos": Schema.lazy(() => PurpleStorageosSchema),
  "vsphereVolume": Schema.lazy(() => VsphereVolumeSchema),
});
export type VolumeV1Properties = Schema.From<typeof VolumeV1PropertiesSchema>;

export const VolumeSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => VolumeV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Volume = Schema.From<typeof VolumeSchema>;

export const TopologyspreadconstraintV1PropertiesSchema = Schema.struct({
  "labelSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "maxSkew": Schema.lazy(() => LastTransitionTimeSchema),
  "topologyKey": Schema.lazy(() => DriverSchema),
  "whenUnsatisfiable": Schema.lazy(() => DriverSchema),
});
export type TopologyspreadconstraintV1Properties = Schema.From<typeof TopologyspreadconstraintV1PropertiesSchema>;

export const TopologyspreadconstraintSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TopologyspreadconstraintV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PodAffinityTermRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Topologyspreadconstraint = Schema.From<typeof TopologyspreadconstraintSchema>;

export const TopologyselectorlabelrequirementV1PropertiesSchema = Schema.struct({
  "key": Schema.lazy(() => DriverSchema),
  "values": Schema.lazy(() => ValuesClassSchema),
});
export type TopologyselectorlabelrequirementV1Properties = Schema.From<typeof TopologyselectorlabelrequirementV1PropertiesSchema>;

export const TopologyselectorlabelrequirementSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TopologyselectorlabelrequirementV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => TopologyselectorlabelrequirementV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Topologyselectorlabelrequirement = Schema.From<typeof TopologyselectorlabelrequirementSchema>;

export const TokenreviewPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec18Schema),
  "status": Schema.lazy(() => Status12Schema),
});
export type TokenreviewProperties = Schema.From<typeof TokenreviewPropertiesSchema>;

export const TokenreviewSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TokenreviewPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Tokenreview = Schema.From<typeof TokenreviewSchema>;

export const Properties198Schema = Schema.struct({
  "audiences": Schema.lazy(() => ValuesClassSchema),
  "authenticated": Schema.lazy(() => DriverSchema),
  "error": Schema.lazy(() => DriverSchema),
  "user": Schema.lazy(() => UserSchema),
});
export type Properties198 = Schema.From<typeof Properties198Schema>;

export const Status12Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties198Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status12 = Schema.From<typeof Status12Schema>;

export const Properties197Schema = Schema.struct({
  "audiences": Schema.lazy(() => ValuesClassSchema),
  "token": Schema.lazy(() => DriverSchema),
});
export type Properties197 = Schema.From<typeof Properties197Schema>;

export const Spec18Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties197Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec18 = Schema.From<typeof Spec18Schema>;

export const TokenreviewAuthenticationV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec18Schema),
  "status": Schema.lazy(() => Status12Schema),
});
export type TokenreviewAuthenticationV1Properties = Schema.From<typeof TokenreviewAuthenticationV1PropertiesSchema>;

export const TokenreviewAuthenticationV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TokenreviewAuthenticationV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type TokenreviewAuthenticationV1Beta1 = Schema.From<typeof TokenreviewAuthenticationV1Beta1Schema>;

export const TokenrequeststatusAuthenticationV1PropertiesSchema = Schema.struct({
  "expirationTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "token": Schema.lazy(() => DriverSchema),
});
export type TokenrequeststatusAuthenticationV1Properties = Schema.From<typeof TokenrequeststatusAuthenticationV1PropertiesSchema>;

export const TokenrequeststatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TokenrequeststatusAuthenticationV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Tokenrequeststatus = Schema.From<typeof TokenrequeststatusSchema>;

export const TokenrequestspecAuthenticationV1PropertiesSchema = Schema.struct({
  "audiences": Schema.lazy(() => CategoriesSchema),
  "boundObjectRef": Schema.lazy(() => BoundObjectRefSchema),
  "expirationSeconds": Schema.lazy(() => LastTransitionTimeSchema),
});
export type TokenrequestspecAuthenticationV1Properties = Schema.From<typeof TokenrequestspecAuthenticationV1PropertiesSchema>;

export const TokenrequestspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TokenrequestspecAuthenticationV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Tokenrequestspec = Schema.From<typeof TokenrequestspecSchema>;

export const TokenrequestPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec17Schema),
  "status": Schema.lazy(() => Status11Schema),
});
export type TokenrequestProperties = Schema.From<typeof TokenrequestPropertiesSchema>;

export const TokenrequestSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TokenrequestPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Tokenrequest = Schema.From<typeof TokenrequestSchema>;

export const Properties196Schema = Schema.struct({
  "expirationTimestamp": Schema.lazy(() => GroupPriorityMinimumSchema),
  "token": Schema.lazy(() => GroupVersionSchema),
});
export type Properties196 = Schema.From<typeof Properties196Schema>;

export const Status11Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties196Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status11 = Schema.From<typeof Status11Schema>;

export const BoundObjectRefSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => BoundobjectreferenceAuthenticationV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type BoundObjectRef = Schema.From<typeof BoundObjectRefSchema>;

export const Properties195Schema = Schema.struct({
  "audiences": Schema.lazy(() => ConversionReviewVersionsSchema),
  "boundObjectRef": Schema.lazy(() => BoundObjectRefSchema),
  "expirationSeconds": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties195 = Schema.From<typeof Properties195Schema>;

export const Spec17Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties195Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec17 = Schema.From<typeof Spec17Schema>;

export const TokenrequestAuthenticationV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec17Schema),
  "status": Schema.lazy(() => Status11Schema),
});
export type TokenrequestAuthenticationV1Properties = Schema.From<typeof TokenrequestAuthenticationV1PropertiesSchema>;

export const TokenrequestAuthenticationV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TokenrequestAuthenticationV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type TokenrequestAuthenticationV1 = Schema.From<typeof TokenrequestAuthenticationV1Schema>;

export const TcpsocketactionSchema = Schema.struct({
  "description": Schema.lazy(() => TcpSocketDescriptionSchema),
  "properties": Schema.lazy(() => TcpSocketPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HttpGetRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Tcpsocketaction = Schema.From<typeof TcpsocketactionSchema>;

export const TaintV1PropertiesSchema = Schema.struct({
  "effect": Schema.lazy(() => DriverSchema),
  "key": Schema.lazy(() => DriverSchema),
  "timeAdded": Schema.lazy(() => LastTransitionTimeSchema),
  "value": Schema.lazy(() => DriverSchema),
});
export type TaintV1Properties = Schema.From<typeof TaintV1PropertiesSchema>;

export const TaintSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TaintV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => TaintV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Taint = Schema.From<typeof TaintSchema>;

export const TentacledNonResourceRulesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items165Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TentacledNonResourceRules = Schema.From<typeof TentacledNonResourceRulesSchema>;

export const SubjectrulesreviewstatusAuthorizationV1PropertiesSchema = Schema.struct({
  "evaluationError": Schema.lazy(() => DriverSchema),
  "incomplete": Schema.lazy(() => DriverSchema),
  "nonResourceRules": Schema.lazy(() => TentacledNonResourceRulesSchema),
  "resourceRules": Schema.lazy(() => ResourceRulesClassSchema),
});
export type SubjectrulesreviewstatusAuthorizationV1Properties = Schema.From<typeof SubjectrulesreviewstatusAuthorizationV1PropertiesSchema>;

export const SubjectrulesreviewstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SubjectrulesreviewstatusAuthorizationV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Subjectrulesreviewstatus = Schema.From<typeof SubjectrulesreviewstatusSchema>;

export const SubjectaccessreviewstatusAuthorizationV1PropertiesSchema = Schema.struct({
  "allowed": Schema.lazy(() => DriverSchema),
  "denied": Schema.lazy(() => DriverSchema),
  "evaluationError": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
});
export type SubjectaccessreviewstatusAuthorizationV1Properties = Schema.From<typeof SubjectaccessreviewstatusAuthorizationV1PropertiesSchema>;

export const SubjectaccessreviewstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SubjectaccessreviewstatusAuthorizationV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Subjectaccessreviewstatus = Schema.From<typeof SubjectaccessreviewstatusSchema>;

export const SubjectFlowcontrolV1Alpha1PropertiesSchema = Schema.struct({
  "group": Schema.lazy(() => PriorityLevelConfigurationSchema),
  "kind": Schema.lazy(() => DriverSchema),
  "serviceAccount": Schema.lazy(() => ServiceAccountSchema),
  "user": Schema.lazy(() => PriorityLevelConfigurationSchema),
});
export type SubjectFlowcontrolV1Alpha1Properties = Schema.From<typeof SubjectFlowcontrolV1Alpha1PropertiesSchema>;

export const SubjectFlowcontrolV1Alpha1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SubjectFlowcontrolV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-unions": Schema.array(Schema.lazy(() => ItemsXKubernetesUnionSchema)),
  "$schema": Schema.string,
});
export type SubjectFlowcontrolV1Alpha1 = Schema.From<typeof SubjectFlowcontrolV1Alpha1Schema>;

export const Properties194Schema = Schema.struct({
  "allowVolumeExpansion": Schema.lazy(() => DriverSchema),
  "allowedTopologies": Schema.lazy(() => AllowedTopologiesSchema),
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "mountOptions": Schema.lazy(() => CategoriesSchema),
  "parameters": Schema.lazy(() => VolumeAttributesClassSchema),
  "provisioner": Schema.lazy(() => GroupVersionSchema),
  "reclaimPolicy": Schema.lazy(() => DriverSchema),
  "volumeBindingMode": Schema.lazy(() => DriverSchema),
});
export type Properties194 = Schema.From<typeof Properties194Schema>;

export const Items181Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties194Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items181 = Schema.From<typeof Items181Schema>;

export const Items180Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items181Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items180 = Schema.From<typeof Items180Schema>;

export const StorageclasslistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items180Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type StorageclasslistProperties = Schema.From<typeof StorageclasslistPropertiesSchema>;

export const StorageclasslistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StorageclasslistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Storageclasslist = Schema.From<typeof StorageclasslistSchema>;

export const Properties193Schema = Schema.struct({
  "allowVolumeExpansion": Schema.lazy(() => DriverSchema),
  "allowedTopologies": Schema.lazy(() => AllowedTopologiesSchema),
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "mountOptions": Schema.lazy(() => ValuesClassSchema),
  "parameters": Schema.lazy(() => VolumeAttributesClassSchema),
  "provisioner": Schema.lazy(() => GroupVersionSchema),
  "reclaimPolicy": Schema.lazy(() => DriverSchema),
  "volumeBindingMode": Schema.lazy(() => DriverSchema),
});
export type Properties193 = Schema.From<typeof Properties193Schema>;

export const Items179Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties193Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items179 = Schema.From<typeof Items179Schema>;

export const Items178Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items179Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items178 = Schema.From<typeof Items178Schema>;

export const StorageclasslistStorageV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items178Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type StorageclasslistStorageV1Properties = Schema.From<typeof StorageclasslistStorageV1PropertiesSchema>;

export const StorageclasslistStorageV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StorageclasslistStorageV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type StorageclasslistStorageV1Beta1 = Schema.From<typeof StorageclasslistStorageV1Beta1Schema>;

export const StorageclassPropertiesSchema = Schema.struct({
  "allowVolumeExpansion": Schema.lazy(() => DriverSchema),
  "allowedTopologies": Schema.lazy(() => AllowedTopologiesSchema),
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "mountOptions": Schema.lazy(() => StagesClassSchema),
  "parameters": Schema.lazy(() => VolumeAttributesClassSchema),
  "provisioner": Schema.lazy(() => DriverSchema),
  "reclaimPolicy": Schema.lazy(() => DriverSchema),
  "volumeBindingMode": Schema.lazy(() => DriverSchema),
});
export type StorageclassProperties = Schema.From<typeof StorageclassPropertiesSchema>;

export const StorageclassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StorageclassPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Storageclass = Schema.From<typeof StorageclassSchema>;

export const Properties192Schema = Schema.struct({
  "matchLabelExpressions": Schema.lazy(() => MatchLabelExpressionsSchema),
});
export type Properties192 = Schema.From<typeof Properties192Schema>;

export const AllowedTopologiesItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties192Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AllowedTopologiesItems = Schema.From<typeof AllowedTopologiesItemsSchema>;

export const AllowedTopologiesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => AllowedTopologiesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AllowedTopologies = Schema.From<typeof AllowedTopologiesSchema>;

export const StorageclassStorageV1PropertiesSchema = Schema.struct({
  "allowVolumeExpansion": Schema.lazy(() => DriverSchema),
  "allowedTopologies": Schema.lazy(() => AllowedTopologiesSchema),
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "mountOptions": Schema.lazy(() => ValuesClassSchema),
  "parameters": Schema.lazy(() => VolumeAttributesClassSchema),
  "provisioner": Schema.lazy(() => DriverSchema),
  "reclaimPolicy": Schema.lazy(() => DriverSchema),
  "volumeBindingMode": Schema.lazy(() => DriverSchema),
});
export type StorageclassStorageV1Properties = Schema.From<typeof StorageclassStorageV1PropertiesSchema>;

export const StorageclassStorageV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StorageclassStorageV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type StorageclassStorageV1Beta1 = Schema.From<typeof StorageclassStorageV1Beta1Schema>;

export const Properties191Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "code": Schema.lazy(() => LastTransitionTimeSchema),
  "details": Schema.lazy(() => DetailsSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "message": Schema.lazy(() => DriverSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "status": Schema.lazy(() => DriverSchema),
});
export type Properties191 = Schema.From<typeof Properties191Schema>;

export const StatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties191Schema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Status = Schema.From<typeof StatusSchema>;

export const DetailsPropertiesSchema = Schema.struct({
  "causes": Schema.lazy(() => CausesSchema),
  "group": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "retryAfterSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "uid": Schema.lazy(() => DriverSchema),
});
export type DetailsProperties = Schema.From<typeof DetailsPropertiesSchema>;

export const DetailsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DetailsPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Details = Schema.From<typeof DetailsSchema>;

export const StatusMetaV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "code": Schema.lazy(() => LastTransitionTimeSchema),
  "details": Schema.lazy(() => DetailsSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "message": Schema.lazy(() => DriverSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "status": Schema.lazy(() => DriverSchema),
});
export type StatusMetaV1Properties = Schema.From<typeof StatusMetaV1PropertiesSchema>;

export const StatusMetaV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StatusMetaV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type StatusMetaV1 = Schema.From<typeof StatusMetaV1Schema>;

export const StatefulsetstatusAppsV1PropertiesSchema = Schema.struct({
  "collisionCount": Schema.lazy(() => LastTransitionTimeSchema),
  "conditions": Schema.lazy(() => ApiGroupsClassSchema),
  "currentReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "currentRevision": Schema.lazy(() => DriverSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
  "readyReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
  "updateRevision": Schema.lazy(() => DriverSchema),
  "updatedReplicas": Schema.lazy(() => LastTransitionTimeSchema),
});
export type StatefulsetstatusAppsV1Properties = Schema.From<typeof StatefulsetstatusAppsV1PropertiesSchema>;

export const StatefulsetstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StatefulsetstatusAppsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Statefulsetstatus = Schema.From<typeof StatefulsetstatusSchema>;

export const StatefulsetspecPropertiesSchema = Schema.struct({
  "podManagementPolicy": Schema.lazy(() => DriverSchema),
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
  "revisionHistoryLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
  "serviceName": Schema.lazy(() => DriverSchema),
  "template": Schema.lazy(() => PurpleTemplateSchema),
  "updateStrategy": Schema.lazy(() => FluffyUpdateStrategySchema),
  "volumeClaimTemplates": Schema.lazy(() => Items118Schema),
});
export type StatefulsetspecProperties = Schema.From<typeof StatefulsetspecPropertiesSchema>;

export const StatefulsetspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StatefulsetspecPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Statefulsetspec = Schema.From<typeof StatefulsetspecSchema>;

export const StatefulsetspecAppsV1PropertiesSchema = Schema.struct({
  "podManagementPolicy": Schema.lazy(() => DriverSchema),
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
  "revisionHistoryLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
  "serviceName": Schema.lazy(() => DriverSchema),
  "template": Schema.lazy(() => PurpleTemplateSchema),
  "updateStrategy": Schema.lazy(() => FluffyUpdateStrategySchema),
  "volumeClaimTemplates": Schema.lazy(() => Items116Schema),
});
export type StatefulsetspecAppsV1Properties = Schema.From<typeof StatefulsetspecAppsV1PropertiesSchema>;

export const StatefulsetspecAppsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StatefulsetspecAppsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type StatefulsetspecAppsV1 = Schema.From<typeof StatefulsetspecAppsV1Schema>;

export const Items177Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StatefulsetPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items177 = Schema.From<typeof Items177Schema>;

export const Items176Schema = Schema.struct({
  "items": Schema.lazy(() => Items177Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items176 = Schema.From<typeof Items176Schema>;

export const StatefulsetlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items176Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type StatefulsetlistProperties = Schema.From<typeof StatefulsetlistPropertiesSchema>;

export const StatefulsetlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StatefulsetlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Statefulsetlist = Schema.From<typeof StatefulsetlistSchema>;

export const Items175Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StatefulsetAppsV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items175 = Schema.From<typeof Items175Schema>;

export const Items174Schema = Schema.struct({
  "items": Schema.lazy(() => Items175Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items174 = Schema.From<typeof Items174Schema>;

export const StatefulsetlistAppsV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items174Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type StatefulsetlistAppsV1Properties = Schema.From<typeof StatefulsetlistAppsV1PropertiesSchema>;

export const StatefulsetlistAppsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StatefulsetlistAppsV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type StatefulsetlistAppsV1 = Schema.From<typeof StatefulsetlistAppsV1Schema>;

export const Properties190Schema = Schema.struct({
  "podManagementPolicy": Schema.lazy(() => DriverSchema),
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
  "revisionHistoryLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => LabelselectorSchema),
  "serviceName": Schema.lazy(() => GroupVersionSchema),
  "template": Schema.lazy(() => FluffyTemplateSchema),
  "updateStrategy": Schema.lazy(() => FluffyUpdateStrategySchema),
  "volumeClaimTemplates": Schema.lazy(() => Items118Schema),
});
export type Properties190 = Schema.From<typeof Properties190Schema>;

export const Spec16Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties190Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec16 = Schema.From<typeof Spec16Schema>;

export const StatefulsetPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec16Schema),
  "status": Schema.lazy(() => Status10Schema),
});
export type StatefulsetProperties = Schema.From<typeof StatefulsetPropertiesSchema>;

export const StatefulsetSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StatefulsetPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Statefulset = Schema.From<typeof StatefulsetSchema>;

export const Properties189Schema = Schema.struct({
  "collisionCount": Schema.lazy(() => LastTransitionTimeSchema),
  "conditions": Schema.lazy(() => StickyConditionsSchema),
  "currentReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "currentRevision": Schema.lazy(() => DriverSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
  "readyReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "replicas": Schema.lazy(() => GroupPriorityMinimumSchema),
  "updateRevision": Schema.lazy(() => DriverSchema),
  "updatedReplicas": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties189 = Schema.From<typeof Properties189Schema>;

export const Status10Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties189Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status10 = Schema.From<typeof Status10Schema>;

export const Properties188Schema = Schema.struct({
  "rollingUpdate": Schema.lazy(() => FluffyRollingUpdateSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type Properties188 = Schema.From<typeof Properties188Schema>;

export const FluffyUpdateStrategySchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties188Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyUpdateStrategy = Schema.From<typeof FluffyUpdateStrategySchema>;

export const FluffyTemplateSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TemplatePropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type FluffyTemplate = Schema.From<typeof FluffyTemplateSchema>;

export const Properties187Schema = Schema.struct({
  "podManagementPolicy": Schema.lazy(() => DriverSchema),
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
  "revisionHistoryLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => LabelselectorSchema),
  "serviceName": Schema.lazy(() => GroupVersionSchema),
  "template": Schema.lazy(() => FluffyTemplateSchema),
  "updateStrategy": Schema.lazy(() => FluffyUpdateStrategySchema),
  "volumeClaimTemplates": Schema.lazy(() => Items116Schema),
});
export type Properties187 = Schema.From<typeof Properties187Schema>;

export const Spec15Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties187Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec15 = Schema.From<typeof Spec15Schema>;

export const StatefulsetAppsV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec15Schema),
  "status": Schema.lazy(() => Status10Schema),
});
export type StatefulsetAppsV1Properties = Schema.From<typeof StatefulsetAppsV1PropertiesSchema>;

export const StatefulsetAppsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StatefulsetAppsV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type StatefulsetAppsV1 = Schema.From<typeof StatefulsetAppsV1Schema>;

export const ServicereferenceAuditregistrationV1Alpha1Schema = Schema.struct({
  "description": Schema.lazy(() => ServiceDescriptionSchema),
  "properties": Schema.lazy(() => ServicereferenceAdmissionregistrationV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type ServicereferenceAuditregistrationV1Alpha1 = Schema.From<typeof ServicereferenceAuditregistrationV1Alpha1Schema>;

export const ServiceportV1PropertiesSchema = Schema.struct({
  "appProtocol": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "nodePort": Schema.lazy(() => LastTransitionTimeSchema),
  "port": Schema.lazy(() => LastTransitionTimeSchema),
  "protocol": Schema.lazy(() => DriverSchema),
  "targetPort": Schema.lazy(() => TargetAverageValueSchema),
});
export type ServiceportV1Properties = Schema.From<typeof ServiceportV1PropertiesSchema>;

export const ServiceportSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServiceportV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HttpGetRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Serviceport = Schema.From<typeof ServiceportSchema>;

export const Items173Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties186Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items173 = Schema.From<typeof Items173Schema>;

export const Items172Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items173Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items172 = Schema.From<typeof Items172Schema>;

export const ServicelistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items172Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ServicelistProperties = Schema.From<typeof ServicelistPropertiesSchema>;

export const ServicelistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServicelistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Servicelist = Schema.From<typeof ServicelistSchema>;

export const Items171Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServiceV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items171 = Schema.From<typeof Items171Schema>;

export const Items170Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items171Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items170 = Schema.From<typeof Items170Schema>;

export const ServicelistV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items170Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ServicelistV1Properties = Schema.From<typeof ServicelistV1PropertiesSchema>;

export const ServicelistV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServicelistV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ServicelistV1 = Schema.From<typeof ServicelistV1Schema>;

export const ServiceaccounttokenprojectionV1PropertiesSchema = Schema.struct({
  "audience": Schema.lazy(() => DriverSchema),
  "expirationSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "path": Schema.lazy(() => DriverSchema),
});
export type ServiceaccounttokenprojectionV1Properties = Schema.From<typeof ServiceaccounttokenprojectionV1PropertiesSchema>;

export const ServiceaccounttokenprojectionSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServiceaccounttokenprojectionV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HostPathRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Serviceaccounttokenprojection = Schema.From<typeof ServiceaccounttokenprojectionSchema>;

export const Items169Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServiceaccountPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items169 = Schema.From<typeof Items169Schema>;

export const Items168Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items169Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items168 = Schema.From<typeof Items168Schema>;

export const ServiceaccountlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items168Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ServiceaccountlistProperties = Schema.From<typeof ServiceaccountlistPropertiesSchema>;

export const ServiceaccountlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServiceaccountlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Serviceaccountlist = Schema.From<typeof ServiceaccountlistSchema>;

export const Items167Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServiceaccountV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items167 = Schema.From<typeof Items167Schema>;

export const Items166Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items167Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items166 = Schema.From<typeof Items166Schema>;

export const ServiceaccountlistV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items166Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ServiceaccountlistV1Properties = Schema.From<typeof ServiceaccountlistV1PropertiesSchema>;

export const ServiceaccountlistV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServiceaccountlistV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ServiceaccountlistV1 = Schema.From<typeof ServiceaccountlistV1Schema>;

export const ServiceaccountPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "automountServiceAccountToken": Schema.lazy(() => DriverSchema),
  "imagePullSecrets": Schema.lazy(() => FluffyImagePullSecretsSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "secrets": Schema.lazy(() => SecretsSchema),
});
export type ServiceaccountProperties = Schema.From<typeof ServiceaccountPropertiesSchema>;

export const ServiceaccountSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServiceaccountPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Serviceaccount = Schema.From<typeof ServiceaccountSchema>;

export const SecretsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => TargetRefSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type Secrets = Schema.From<typeof SecretsSchema>;

export const FluffyImagePullSecretsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => ItemsClassSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyImagePullSecrets = Schema.From<typeof FluffyImagePullSecretsSchema>;

export const ServiceaccountV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "automountServiceAccountToken": Schema.lazy(() => DriverSchema),
  "imagePullSecrets": Schema.lazy(() => FluffyImagePullSecretsSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "secrets": Schema.lazy(() => SecretsSchema),
});
export type ServiceaccountV1Properties = Schema.From<typeof ServiceaccountV1PropertiesSchema>;

export const ServiceaccountV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServiceaccountV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ServiceaccountV1 = Schema.From<typeof ServiceaccountV1Schema>;

export const Properties186Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec14Schema),
  "status": Schema.lazy(() => MagentaStatusSchema),
});
export type Properties186 = Schema.From<typeof Properties186Schema>;

export const ServiceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties186Schema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Service = Schema.From<typeof ServiceSchema>;

export const Properties185Schema = Schema.struct({
  "clusterIP": Schema.lazy(() => DriverSchema),
  "externalIPs": Schema.lazy(() => ValuesClassSchema),
  "externalName": Schema.lazy(() => DriverSchema),
  "externalTrafficPolicy": Schema.lazy(() => DriverSchema),
  "healthCheckNodePort": Schema.lazy(() => LastTransitionTimeSchema),
  "ipFamily": Schema.lazy(() => DriverSchema),
  "loadBalancerIP": Schema.lazy(() => DriverSchema),
  "loadBalancerSourceRanges": Schema.lazy(() => ValuesClassSchema),
  "ports": Schema.lazy(() => IndecentPortsSchema),
  "publishNotReadyAddresses": Schema.lazy(() => DriverSchema),
  "selector": Schema.lazy(() => VolumeAttributesClassSchema),
  "sessionAffinity": Schema.lazy(() => DriverSchema),
  "sessionAffinityConfig": Schema.lazy(() => SessionAffinityConfigSchema),
  "topologyKeys": Schema.lazy(() => ValuesClassSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type Properties185 = Schema.From<typeof Properties185Schema>;

export const Spec14Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties185Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec14 = Schema.From<typeof Spec14Schema>;

export const ServiceV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec14Schema),
  "status": Schema.lazy(() => MagentaStatusSchema),
});
export type ServiceV1Properties = Schema.From<typeof ServiceV1PropertiesSchema>;

export const ServiceV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServiceV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ServiceV1 = Schema.From<typeof ServiceV1Schema>;

export const ServeraddressbyclientcidrMetaV1PropertiesSchema = Schema.struct({
  "clientCIDR": Schema.lazy(() => DriverSchema),
  "serverAddress": Schema.lazy(() => DriverSchema),
});
export type ServeraddressbyclientcidrMetaV1Properties = Schema.From<typeof ServeraddressbyclientcidrMetaV1PropertiesSchema>;

export const ServeraddressbyclientcidrSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServeraddressbyclientcidrMetaV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ServeraddressbyclientcidrMetaV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Serveraddressbyclientcidr = Schema.From<typeof ServeraddressbyclientcidrSchema>;

export const SelinuxstrategyoptionsPolicyV1Beta1PropertiesSchema = Schema.struct({
  "rule": Schema.lazy(() => DriverSchema),
  "seLinuxOptions": Schema.lazy(() => SeLinuxOptionsSchema),
});
export type SelinuxstrategyoptionsPolicyV1Beta1Properties = Schema.From<typeof SelinuxstrategyoptionsPolicyV1Beta1PropertiesSchema>;

export const SelinuxstrategyoptionsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SelinuxstrategyoptionsPolicyV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Selinuxstrategyoptions = Schema.From<typeof SelinuxstrategyoptionsSchema>;

export const SelfsubjectrulesreviewspecSchema = Schema.struct({
  "properties": Schema.lazy(() => SelfsubjectrulesreviewspecAuthorizationV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Selfsubjectrulesreviewspec = Schema.From<typeof SelfsubjectrulesreviewspecSchema>;

export const SelfsubjectrulesreviewPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec13Schema),
  "status": Schema.lazy(() => Status9Schema),
});
export type SelfsubjectrulesreviewProperties = Schema.From<typeof SelfsubjectrulesreviewPropertiesSchema>;

export const SelfsubjectrulesreviewSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SelfsubjectrulesreviewPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Selfsubjectrulesreview = Schema.From<typeof SelfsubjectrulesreviewSchema>;

export const FluffyResourceRulesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items17Schema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type FluffyResourceRules = Schema.From<typeof FluffyResourceRulesSchema>;

export const Properties184Schema = Schema.struct({
  "nonResourceURLs": Schema.lazy(() => ValuesClassSchema),
  "verbs": Schema.lazy(() => ConversionReviewVersionsSchema),
});
export type Properties184 = Schema.From<typeof Properties184Schema>;

export const Items165Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties184Schema),
  "required": Schema.array(Schema.lazy(() => NonresourcepolicyruleFlowcontrolV1Alpha1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items165 = Schema.From<typeof Items165Schema>;

export const FluffyNonResourceRulesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items165Schema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type FluffyNonResourceRules = Schema.From<typeof FluffyNonResourceRulesSchema>;

export const Properties183Schema = Schema.struct({
  "evaluationError": Schema.lazy(() => DriverSchema),
  "incomplete": Schema.lazy(() => GroupVersionSchema),
  "nonResourceRules": Schema.lazy(() => FluffyNonResourceRulesSchema),
  "resourceRules": Schema.lazy(() => FluffyResourceRulesSchema),
});
export type Properties183 = Schema.From<typeof Properties183Schema>;

export const Status9Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties183Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status9 = Schema.From<typeof Status9Schema>;

export const SelfsubjectrulesreviewspecAuthorizationV1PropertiesSchema = Schema.struct({
  "namespace": Schema.lazy(() => DriverSchema),
});
export type SelfsubjectrulesreviewspecAuthorizationV1Properties = Schema.From<typeof SelfsubjectrulesreviewspecAuthorizationV1PropertiesSchema>;

export const Spec13Schema = Schema.struct({
  "properties": Schema.lazy(() => SelfsubjectrulesreviewspecAuthorizationV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec13 = Schema.From<typeof Spec13Schema>;

export const SelfsubjectrulesreviewAuthorizationV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec13Schema),
  "status": Schema.lazy(() => Status9Schema),
});
export type SelfsubjectrulesreviewAuthorizationV1Properties = Schema.From<typeof SelfsubjectrulesreviewAuthorizationV1PropertiesSchema>;

export const SelfsubjectrulesreviewAuthorizationV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SelfsubjectrulesreviewAuthorizationV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type SelfsubjectrulesreviewAuthorizationV1Beta1 = Schema.From<typeof SelfsubjectrulesreviewAuthorizationV1Beta1Schema>;

export const SelfsubjectaccessreviewPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec12Schema),
  "status": Schema.lazy(() => MischievousStatusSchema),
});
export type SelfsubjectaccessreviewProperties = Schema.From<typeof SelfsubjectaccessreviewPropertiesSchema>;

export const SelfsubjectaccessreviewSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SelfsubjectaccessreviewPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Selfsubjectaccessreview = Schema.From<typeof SelfsubjectaccessreviewSchema>;

export const Properties182Schema = Schema.struct({
  "nonResourceAttributes": Schema.lazy(() => NonResourceAttributesSchema),
  "resourceAttributes": Schema.lazy(() => ResourceAttributesSchema),
});
export type Properties182 = Schema.From<typeof Properties182Schema>;

export const Spec12Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties182Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec12 = Schema.From<typeof Spec12Schema>;

export const SelfsubjectaccessreviewAuthorizationV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec12Schema),
  "status": Schema.lazy(() => MischievousStatusSchema),
});
export type SelfsubjectaccessreviewAuthorizationV1Properties = Schema.From<typeof SelfsubjectaccessreviewAuthorizationV1PropertiesSchema>;

export const SelfsubjectaccessreviewAuthorizationV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SelfsubjectaccessreviewAuthorizationV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type SelfsubjectaccessreviewAuthorizationV1Beta1 = Schema.From<typeof SelfsubjectaccessreviewAuthorizationV1Beta1Schema>;

export const Items164Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties181Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items164 = Schema.From<typeof Items164Schema>;

export const Items163Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items164Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items163 = Schema.From<typeof Items163Schema>;

export const SecretlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items163Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type SecretlistProperties = Schema.From<typeof SecretlistPropertiesSchema>;

export const SecretlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SecretlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Secretlist = Schema.From<typeof SecretlistSchema>;

export const Items162Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SecretV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items162 = Schema.From<typeof Items162Schema>;

export const Items161Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items162Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items161 = Schema.From<typeof Items161Schema>;

export const SecretlistV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items161Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type SecretlistV1Properties = Schema.From<typeof SecretlistV1PropertiesSchema>;

export const SecretlistV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SecretlistV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type SecretlistV1 = Schema.From<typeof SecretlistV1Schema>;

export const Properties181Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "data": Schema.lazy(() => BinaryDataClassSchema),
  "immutable": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "stringData": Schema.lazy(() => VolumeAttributesClassSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type Properties181 = Schema.From<typeof Properties181Schema>;

export const SecretSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties181Schema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Secret = Schema.From<typeof SecretSchema>;

export const SecretV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "data": Schema.lazy(() => BinaryDataClassSchema),
  "immutable": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "stringData": Schema.lazy(() => VolumeAttributesClassSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type SecretV1Properties = Schema.From<typeof SecretV1PropertiesSchema>;

export const SecretV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SecretV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type SecretV1 = Schema.From<typeof SecretV1Schema>;

export const ScopedresourceselectorrequirementV1PropertiesSchema = Schema.struct({
  "operator": Schema.lazy(() => DriverSchema),
  "scopeName": Schema.lazy(() => DriverSchema),
  "values": Schema.lazy(() => CategoriesSchema),
});
export type ScopedresourceselectorrequirementV1Properties = Schema.From<typeof ScopedresourceselectorrequirementV1PropertiesSchema>;

export const ScopedresourceselectorrequirementSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ScopedresourceselectorrequirementV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => LabelselectorrequirementMetaV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Scopedresourceselectorrequirement = Schema.From<typeof ScopedresourceselectorrequirementSchema>;

export const ScalestatusAutoscalingV1PropertiesSchema = Schema.struct({
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => DriverSchema),
});
export type ScalestatusAutoscalingV1Properties = Schema.From<typeof ScalestatusAutoscalingV1PropertiesSchema>;

export const ScalestatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ScalestatusAutoscalingV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Scalestatus = Schema.From<typeof ScalestatusSchema>;

export const ScaleiovolumesourceV1PropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "gateway": Schema.lazy(() => DriverSchema),
  "protectionDomain": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ItemsClassSchema),
  "sslEnabled": Schema.lazy(() => DriverSchema),
  "storageMode": Schema.lazy(() => DriverSchema),
  "storagePool": Schema.lazy(() => DriverSchema),
  "system": Schema.lazy(() => DriverSchema),
  "volumeName": Schema.lazy(() => DriverSchema),
});
export type ScaleiovolumesourceV1Properties = Schema.From<typeof ScaleiovolumesourceV1PropertiesSchema>;

export const ScaleiovolumesourceSchema = Schema.struct({
  "description": Schema.lazy(() => ScaleIoDescriptionSchema),
  "properties": Schema.lazy(() => ScaleiovolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleIoRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Scaleiovolumesource = Schema.From<typeof ScaleiovolumesourceSchema>;

export const ScaleiopersistentvolumesourceV1PropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "gateway": Schema.lazy(() => DriverSchema),
  "protectionDomain": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "sslEnabled": Schema.lazy(() => DriverSchema),
  "storageMode": Schema.lazy(() => DriverSchema),
  "storagePool": Schema.lazy(() => DriverSchema),
  "system": Schema.lazy(() => DriverSchema),
  "volumeName": Schema.lazy(() => DriverSchema),
});
export type ScaleiopersistentvolumesourceV1Properties = Schema.From<typeof ScaleiopersistentvolumesourceV1PropertiesSchema>;

export const ScaleiopersistentvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ScaleiopersistentvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleIoRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Scaleiopersistentvolumesource = Schema.From<typeof ScaleiopersistentvolumesourceSchema>;

export const Properties180Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec11Schema),
  "status": Schema.lazy(() => Status8Schema),
});
export type Properties180 = Schema.From<typeof Properties180Schema>;

export const ScaleSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties180Schema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Scale = Schema.From<typeof ScaleSchema>;

export const Properties179Schema = Schema.struct({
  "replicas": Schema.lazy(() => GroupPriorityMinimumSchema),
  "selector": Schema.lazy(() => DriverSchema),
});
export type Properties179 = Schema.From<typeof Properties179Schema>;

export const Status8Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties179Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status8 = Schema.From<typeof Status8Schema>;

export const Properties178Schema = Schema.struct({
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties178 = Schema.From<typeof Properties178Schema>;

export const Spec11Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties178Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec11 = Schema.From<typeof Spec11Schema>;

export const ScaleAutoscalingV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec11Schema),
  "status": Schema.lazy(() => Status8Schema),
});
export type ScaleAutoscalingV1Properties = Schema.From<typeof ScaleAutoscalingV1PropertiesSchema>;

export const ScaleAutoscalingV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ScaleAutoscalingV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ScaleAutoscalingV1 = Schema.From<typeof ScaleAutoscalingV1Schema>;

export const RuntimeclassstrategyoptionsPolicyV1Beta1PropertiesSchema = Schema.struct({
  "allowedRuntimeClassNames": Schema.lazy(() => StagesClassSchema),
  "defaultRuntimeClassName": Schema.lazy(() => DriverSchema),
});
export type RuntimeclassstrategyoptionsPolicyV1Beta1Properties = Schema.From<typeof RuntimeclassstrategyoptionsPolicyV1Beta1PropertiesSchema>;

export const RuntimeclassstrategyoptionsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RuntimeclassstrategyoptionsPolicyV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Runtimeclassstrategyoptions = Schema.From<typeof RuntimeclassstrategyoptionsSchema>;

export const RuntimeclassspecNodeV1Alpha1PropertiesSchema = Schema.struct({
  "overhead": Schema.lazy(() => OverheadClassSchema),
  "runtimeHandler": Schema.lazy(() => DriverSchema),
  "scheduling": Schema.lazy(() => SchedulingClassSchema),
});
export type RuntimeclassspecNodeV1Alpha1Properties = Schema.From<typeof RuntimeclassspecNodeV1Alpha1PropertiesSchema>;

export const RuntimeclassspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RuntimeclassspecNodeV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Runtimeclassspec = Schema.From<typeof RuntimeclassspecSchema>;

export const Properties177Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "handler": Schema.lazy(() => GroupVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "overhead": Schema.lazy(() => OverheadClassSchema),
  "scheduling": Schema.lazy(() => SchedulingClassSchema),
});
export type Properties177 = Schema.From<typeof Properties177Schema>;

export const Items160Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties177Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items160 = Schema.From<typeof Items160Schema>;

export const Items159Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items160Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items159 = Schema.From<typeof Items159Schema>;

export const RuntimeclasslistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items159Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type RuntimeclasslistProperties = Schema.From<typeof RuntimeclasslistPropertiesSchema>;

export const RuntimeclasslistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RuntimeclasslistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Runtimeclasslist = Schema.From<typeof RuntimeclasslistSchema>;

export const Properties176Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "handler": Schema.lazy(() => GroupVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "overhead": Schema.lazy(() => OverheadClassSchema),
  "scheduling": Schema.lazy(() => SchedulingClassSchema),
});
export type Properties176 = Schema.From<typeof Properties176Schema>;

export const Items158Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties176Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items158 = Schema.From<typeof Items158Schema>;

export const Items157Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items158Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items157 = Schema.From<typeof Items157Schema>;

export const RuntimeclasslistNodeV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items157Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type RuntimeclasslistNodeV1Beta1Properties = Schema.From<typeof RuntimeclasslistNodeV1Beta1PropertiesSchema>;

export const RuntimeclasslistNodeV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RuntimeclasslistNodeV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type RuntimeclasslistNodeV1Beta1 = Schema.From<typeof RuntimeclasslistNodeV1Beta1Schema>;

export const Items156Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClusterroleRbacV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items156 = Schema.From<typeof Items156Schema>;

export const Items155Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items156Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items155 = Schema.From<typeof Items155Schema>;

export const RuntimeclasslistNodeV1Alpha1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items155Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type RuntimeclasslistNodeV1Alpha1Properties = Schema.From<typeof RuntimeclasslistNodeV1Alpha1PropertiesSchema>;

export const RuntimeclasslistNodeV1Alpha1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RuntimeclasslistNodeV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type RuntimeclasslistNodeV1Alpha1 = Schema.From<typeof RuntimeclasslistNodeV1Alpha1Schema>;

export const RuntimeclassPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "handler": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "overhead": Schema.lazy(() => OverheadClassSchema),
  "scheduling": Schema.lazy(() => SchedulingClassSchema),
});
export type RuntimeclassProperties = Schema.From<typeof RuntimeclassPropertiesSchema>;

export const RuntimeclassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RuntimeclassPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Runtimeclass = Schema.From<typeof RuntimeclassSchema>;

export const RuntimeclassNodeV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "handler": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "overhead": Schema.lazy(() => OverheadClassSchema),
  "scheduling": Schema.lazy(() => SchedulingClassSchema),
});
export type RuntimeclassNodeV1Beta1Properties = Schema.From<typeof RuntimeclassNodeV1Beta1PropertiesSchema>;

export const RuntimeclassNodeV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RuntimeclassNodeV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type RuntimeclassNodeV1Beta1 = Schema.From<typeof RuntimeclassNodeV1Beta1Schema>;

export const RuntimeclassNodeV1Alpha1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClusterroleRbacV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type RuntimeclassNodeV1Alpha1 = Schema.From<typeof RuntimeclassNodeV1Alpha1Schema>;

export const RolerefRbacV1PropertiesSchema = Schema.struct({
  "apiGroup": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "namespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type RolerefRbacV1Properties = Schema.From<typeof RolerefRbacV1PropertiesSchema>;

export const TypedlocalobjectreferenceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RolerefRbacV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => RoleRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Typedlocalobjectreference = Schema.From<typeof TypedlocalobjectreferenceSchema>;

export const Items154Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RoleRbacV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items154 = Schema.From<typeof Items154Schema>;

export const Items153Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items154Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items153 = Schema.From<typeof Items153Schema>;

export const RolelistRbacV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items153Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type RolelistRbacV1Properties = Schema.From<typeof RolelistRbacV1PropertiesSchema>;

export const RolelistRbacV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RolelistRbacV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type RolelistRbacV1Beta1 = Schema.From<typeof RolelistRbacV1Beta1Schema>;

export const RoleRbacV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "rules": Schema.lazy(() => ResourceRulesClassSchema),
});
export type RoleRbacV1Properties = Schema.From<typeof RoleRbacV1PropertiesSchema>;

export const RoleRbacV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RoleRbacV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type RoleRbacV1Beta1 = Schema.From<typeof RoleRbacV1Beta1Schema>;

export const Items152Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcequotaPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items152 = Schema.From<typeof Items152Schema>;

export const Items151Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items152Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items151 = Schema.From<typeof Items151Schema>;

export const ResourcequotalistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items151Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ResourcequotalistProperties = Schema.From<typeof ResourcequotalistPropertiesSchema>;

export const ResourcequotalistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcequotalistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Resourcequotalist = Schema.From<typeof ResourcequotalistSchema>;

export const Items150Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcequotaV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items150 = Schema.From<typeof Items150Schema>;

export const Items149Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items150Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items149 = Schema.From<typeof Items149Schema>;

export const ResourcequotalistV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items149Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ResourcequotalistV1Properties = Schema.From<typeof ResourcequotalistV1PropertiesSchema>;

export const ResourcequotalistV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcequotalistV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ResourcequotalistV1 = Schema.From<typeof ResourcequotalistV1Schema>;

export const ResourcequotaPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec10Schema),
  "status": Schema.lazy(() => Status7Schema),
});
export type ResourcequotaProperties = Schema.From<typeof ResourcequotaPropertiesSchema>;

export const ResourcequotaSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcequotaPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Resourcequota = Schema.From<typeof ResourcequotaSchema>;

export const Properties175Schema = Schema.struct({
  "hard": Schema.lazy(() => DefaultSchema),
  "used": Schema.lazy(() => DefaultSchema),
});
export type Properties175 = Schema.From<typeof Properties175Schema>;

export const Status7Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties175Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status7 = Schema.From<typeof Status7Schema>;

export const Properties174Schema = Schema.struct({
  "hard": Schema.lazy(() => DefaultSchema),
  "scopeSelector": Schema.lazy(() => ScopeSelectorSchema),
  "scopes": Schema.lazy(() => ValuesClassSchema),
});
export type Properties174 = Schema.From<typeof Properties174Schema>;

export const Spec10Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties174Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec10 = Schema.From<typeof Spec10Schema>;

export const ResourcequotaV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec10Schema),
  "status": Schema.lazy(() => Status7Schema),
});
export type ResourcequotaV1Properties = Schema.From<typeof ResourcequotaV1PropertiesSchema>;

export const ResourcequotaV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcequotaV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ResourcequotaV1 = Schema.From<typeof ResourcequotaV1Schema>;

export const ResourcepolicyruleFlowcontrolV1Alpha1PropertiesSchema = Schema.struct({
  "apiGroups": Schema.lazy(() => NonResourceUrLsSchema),
  "clusterScope": Schema.lazy(() => DriverSchema),
  "namespaces": Schema.lazy(() => NonResourceUrLsSchema),
  "resources": Schema.lazy(() => NonResourceUrLsSchema),
  "verbs": Schema.lazy(() => NonResourceUrLsSchema),
});
export type ResourcepolicyruleFlowcontrolV1Alpha1Properties = Schema.From<typeof ResourcepolicyruleFlowcontrolV1Alpha1PropertiesSchema>;

export const ResourcepolicyruleSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcepolicyruleFlowcontrolV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ResourcepolicyruleFlowcontrolV1Alpha1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Resourcepolicyrule = Schema.From<typeof ResourcepolicyruleSchema>;

export const ResourcemetricstatusAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "current": Schema.lazy(() => PurpleCurrentSchema),
  "name": Schema.lazy(() => DriverSchema),
});
export type ResourcemetricstatusAutoscalingV2Beta2Properties = Schema.From<typeof ResourcemetricstatusAutoscalingV2Beta2PropertiesSchema>;

export const ResourcemetricstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcemetricstatusAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ResourcemetricstatusAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Resourcemetricstatus = Schema.From<typeof ResourcemetricstatusSchema>;

export const ResourcemetricstatusAutoscalingV2Beta1PropertiesSchema = Schema.struct({
  "currentAverageUtilization": Schema.lazy(() => LastTransitionTimeSchema),
  "currentAverageValue": Schema.lazy(() => TargetAverageValueSchema),
  "name": Schema.lazy(() => DriverSchema),
});
export type ResourcemetricstatusAutoscalingV2Beta1Properties = Schema.From<typeof ResourcemetricstatusAutoscalingV2Beta1PropertiesSchema>;

export const ResourcemetricstatusAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcemetricstatusAutoscalingV2Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type ResourcemetricstatusAutoscalingV2Beta1 = Schema.From<typeof ResourcemetricstatusAutoscalingV2Beta1Schema>;

export const ResourcemetricsourceAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => DriverSchema),
  "target": Schema.lazy(() => PurpleTargetSchema),
});
export type ResourcemetricsourceAutoscalingV2Beta2Properties = Schema.From<typeof ResourcemetricsourceAutoscalingV2Beta2PropertiesSchema>;

export const ResourcemetricsourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcemetricsourceAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ResourcemetricsourceAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Resourcemetricsource = Schema.From<typeof ResourcemetricsourceSchema>;

export const ResourcemetricsourceAutoscalingV2Beta1PropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => DriverSchema),
  "targetAverageUtilization": Schema.lazy(() => LastTransitionTimeSchema),
  "targetAverageValue": Schema.lazy(() => TargetAverageValueSchema),
});
export type ResourcemetricsourceAutoscalingV2Beta1Properties = Schema.From<typeof ResourcemetricsourceAutoscalingV2Beta1PropertiesSchema>;

export const ResourcemetricsourceAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcemetricsourceAutoscalingV2Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type ResourcemetricsourceAutoscalingV2Beta1 = Schema.From<typeof ResourcemetricsourceAutoscalingV2Beta1Schema>;

export const ResourcefieldselectorV1PropertiesSchema = Schema.struct({
  "containerName": Schema.lazy(() => DriverSchema),
  "divisor": Schema.lazy(() => TargetAverageValueSchema),
  "resource": Schema.lazy(() => DriverSchema),
});
export type ResourcefieldselectorV1Properties = Schema.From<typeof ResourcefieldselectorV1PropertiesSchema>;

export const ResourcefieldselectorSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcefieldselectorV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ResourceFieldRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Resourcefieldselector = Schema.From<typeof ResourcefieldselectorSchema>;

export const Items148Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicationcontrollerPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items148 = Schema.From<typeof Items148Schema>;

export const Items147Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items148Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items147 = Schema.From<typeof Items147Schema>;

export const ReplicationcontrollerlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items147Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ReplicationcontrollerlistProperties = Schema.From<typeof ReplicationcontrollerlistPropertiesSchema>;

export const ReplicationcontrollerlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicationcontrollerlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Replicationcontrollerlist = Schema.From<typeof ReplicationcontrollerlistSchema>;

export const Items146Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicationcontrollerV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items146 = Schema.From<typeof Items146Schema>;

export const Items145Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items146Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items145 = Schema.From<typeof Items145Schema>;

export const ReplicationcontrollerlistV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items145Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ReplicationcontrollerlistV1Properties = Schema.From<typeof ReplicationcontrollerlistV1PropertiesSchema>;

export const ReplicationcontrollerlistV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicationcontrollerlistV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ReplicationcontrollerlistV1 = Schema.From<typeof ReplicationcontrollerlistV1Schema>;

export const ReplicationcontrollerPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec9Schema),
  "status": Schema.lazy(() => Status6Schema),
});
export type ReplicationcontrollerProperties = Schema.From<typeof ReplicationcontrollerPropertiesSchema>;

export const ReplicationcontrollerSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicationcontrollerPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Replicationcontroller = Schema.From<typeof ReplicationcontrollerSchema>;

export const Properties173Schema = Schema.struct({
  "minReadySeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => VolumeAttributesClassSchema),
  "template": Schema.lazy(() => PurpleTemplateSchema),
});
export type Properties173 = Schema.From<typeof Properties173Schema>;

export const Spec9Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties173Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec9 = Schema.From<typeof Spec9Schema>;

export const ReplicationcontrollerV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec9Schema),
  "status": Schema.lazy(() => Status6Schema),
});
export type ReplicationcontrollerV1Properties = Schema.From<typeof ReplicationcontrollerV1PropertiesSchema>;

export const ReplicationcontrollerV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicationcontrollerV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ReplicationcontrollerV1 = Schema.From<typeof ReplicationcontrollerV1Schema>;

export const ReplicasetstatusAppsV1PropertiesSchema = Schema.struct({
  "availableReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "conditions": Schema.lazy(() => ApiGroupsClassSchema),
  "fullyLabeledReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
  "readyReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
});
export type ReplicasetstatusAppsV1Properties = Schema.From<typeof ReplicasetstatusAppsV1PropertiesSchema>;

export const ReplicationcontrollerstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicasetstatusAppsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Replicationcontrollerstatus = Schema.From<typeof ReplicationcontrollerstatusSchema>;

export const ReplicasetspecAppsV1PropertiesSchema = Schema.struct({
  "minReadySeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
  "template": Schema.lazy(() => PurpleTemplateSchema),
});
export type ReplicasetspecAppsV1Properties = Schema.From<typeof ReplicasetspecAppsV1PropertiesSchema>;

export const ReplicasetspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicasetspecAppsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Replicasetspec = Schema.From<typeof ReplicasetspecSchema>;

export const Items144Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicasetPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items144 = Schema.From<typeof Items144Schema>;

export const Items143Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items144Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items143 = Schema.From<typeof Items143Schema>;

export const ReplicasetlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items143Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ReplicasetlistProperties = Schema.From<typeof ReplicasetlistPropertiesSchema>;

export const ReplicasetlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicasetlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Replicasetlist = Schema.From<typeof ReplicasetlistSchema>;

export const Items142Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicasetAppsV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items142 = Schema.From<typeof Items142Schema>;

export const Items141Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items142Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items141 = Schema.From<typeof Items141Schema>;

export const ReplicasetlistAppsV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items141Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ReplicasetlistAppsV1Properties = Schema.From<typeof ReplicasetlistAppsV1PropertiesSchema>;

export const ReplicasetlistAppsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicasetlistAppsV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ReplicasetlistAppsV1 = Schema.From<typeof ReplicasetlistAppsV1Schema>;

export const ReplicasetPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec8Schema),
  "status": Schema.lazy(() => Status6Schema),
});
export type ReplicasetProperties = Schema.From<typeof ReplicasetPropertiesSchema>;

export const ReplicasetSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicasetPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Replicaset = Schema.From<typeof ReplicasetSchema>;

export const Properties172Schema = Schema.struct({
  "availableReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "conditions": Schema.lazy(() => StickyConditionsSchema),
  "fullyLabeledReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
  "readyReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "replicas": Schema.lazy(() => GroupPriorityMinimumSchema),
});
export type Properties172 = Schema.From<typeof Properties172Schema>;

export const Status6Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties172Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status6 = Schema.From<typeof Status6Schema>;

export const Properties171Schema = Schema.struct({
  "minReadySeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => LabelselectorSchema),
  "template": Schema.lazy(() => PurpleTemplateSchema),
});
export type Properties171 = Schema.From<typeof Properties171Schema>;

export const Spec8Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties171Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec8 = Schema.From<typeof Spec8Schema>;

export const ReplicasetAppsV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec8Schema),
  "status": Schema.lazy(() => Status6Schema),
});
export type ReplicasetAppsV1Properties = Schema.From<typeof ReplicasetAppsV1PropertiesSchema>;

export const ReplicasetAppsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ReplicasetAppsV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ReplicasetAppsV1 = Schema.From<typeof ReplicasetAppsV1Schema>;

export const RbdvolumesourceV1PropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "image": Schema.lazy(() => DriverSchema),
  "keyring": Schema.lazy(() => DriverSchema),
  "monitors": Schema.lazy(() => StagesClassSchema),
  "pool": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ItemsClassSchema),
  "user": Schema.lazy(() => DriverSchema),
});
export type RbdvolumesourceV1Properties = Schema.From<typeof RbdvolumesourceV1PropertiesSchema>;

export const RbdvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RbdvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CephfsRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Rbdvolumesource = Schema.From<typeof RbdvolumesourceSchema>;

export const RbdpersistentvolumesourceV1PropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "image": Schema.lazy(() => DriverSchema),
  "keyring": Schema.lazy(() => DriverSchema),
  "monitors": Schema.lazy(() => StagesClassSchema),
  "pool": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "user": Schema.lazy(() => DriverSchema),
});
export type RbdpersistentvolumesourceV1Properties = Schema.From<typeof RbdpersistentvolumesourceV1PropertiesSchema>;

export const RbdpersistentvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RbdpersistentvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CephfsRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Rbdpersistentvolumesource = Schema.From<typeof RbdpersistentvolumesourceSchema>;

export const QuobytevolumesourceV1PropertiesSchema = Schema.struct({
  "group": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "registry": Schema.lazy(() => DriverSchema),
  "tenant": Schema.lazy(() => DriverSchema),
  "user": Schema.lazy(() => DriverSchema),
  "volume": Schema.lazy(() => DriverSchema),
});
export type QuobytevolumesourceV1Properties = Schema.From<typeof QuobytevolumesourceV1PropertiesSchema>;

export const QuobytevolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => QuobytevolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => QuobyteRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Quobytevolumesource = Schema.From<typeof QuobytevolumesourceSchema>;

export const FluffySourcesSchema = Schema.struct({
  "description": Schema.lazy(() => SourcesDescriptionSchema),
  "items": Schema.lazy(() => SourcesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffySources = Schema.From<typeof FluffySourcesSchema>;

export const ProjectedvolumesourceV1PropertiesSchema = Schema.struct({
  "defaultMode": Schema.lazy(() => LastTransitionTimeSchema),
  "sources": Schema.lazy(() => FluffySourcesSchema),
});
export type ProjectedvolumesourceV1Properties = Schema.From<typeof ProjectedvolumesourceV1PropertiesSchema>;

export const ProjectedvolumesourceSchema = Schema.struct({
  "description": Schema.lazy(() => ProjectedDescriptionSchema),
  "properties": Schema.lazy(() => ProjectedvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ProjectedRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Projectedvolumesource = Schema.From<typeof ProjectedvolumesourceSchema>;

export const PrioritylevelconfigurationspecFlowcontrolV1Alpha1PropertiesSchema = Schema.struct({
  "limited": Schema.lazy(() => LimitedSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type PrioritylevelconfigurationspecFlowcontrolV1Alpha1Properties = Schema.From<typeof PrioritylevelconfigurationspecFlowcontrolV1Alpha1PropertiesSchema>;

export const PrioritylevelconfigurationspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PrioritylevelconfigurationspecFlowcontrolV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-unions": Schema.array(Schema.lazy(() => SpecXKubernetesUnionSchema)),
  "$schema": Schema.string,
});
export type Prioritylevelconfigurationspec = Schema.From<typeof PrioritylevelconfigurationspecSchema>;

export const Items140Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PrioritylevelconfigurationPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items140 = Schema.From<typeof Items140Schema>;

export const Items139Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items140Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type Items139 = Schema.From<typeof Items139Schema>;

export const PrioritylevelconfigurationlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items139Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type PrioritylevelconfigurationlistProperties = Schema.From<typeof PrioritylevelconfigurationlistPropertiesSchema>;

export const PrioritylevelconfigurationlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PrioritylevelconfigurationlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Prioritylevelconfigurationlist = Schema.From<typeof PrioritylevelconfigurationlistSchema>;

export const Items138Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PrioritylevelconfigurationFlowcontrolV1Alpha1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items138 = Schema.From<typeof Items138Schema>;

export const Items137Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items138Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type Items137 = Schema.From<typeof Items137Schema>;

export const PrioritylevelconfigurationlistFlowcontrolV1Alpha1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items137Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type PrioritylevelconfigurationlistFlowcontrolV1Alpha1Properties = Schema.From<typeof PrioritylevelconfigurationlistFlowcontrolV1Alpha1PropertiesSchema>;

export const PrioritylevelconfigurationlistFlowcontrolV1Alpha1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PrioritylevelconfigurationlistFlowcontrolV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type PrioritylevelconfigurationlistFlowcontrolV1Alpha1 = Schema.From<typeof PrioritylevelconfigurationlistFlowcontrolV1Alpha1Schema>;

export const PrioritylevelconfigurationPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec7Schema),
  "status": Schema.lazy(() => IndecentStatusSchema),
});
export type PrioritylevelconfigurationProperties = Schema.From<typeof PrioritylevelconfigurationPropertiesSchema>;

export const PrioritylevelconfigurationSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PrioritylevelconfigurationPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Prioritylevelconfiguration = Schema.From<typeof PrioritylevelconfigurationSchema>;

export const StickyFieldsToDiscriminateBySchema = Schema.struct({
  "limited": Schema.string,
});
export type StickyFieldsToDiscriminateBy = Schema.From<typeof StickyFieldsToDiscriminateBySchema>;

export const SpecXKubernetesUnionSchema = Schema.struct({
  "discriminator": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "fields-to-discriminateBy": Schema.lazy(() => StickyFieldsToDiscriminateBySchema),
});
export type SpecXKubernetesUnion = Schema.From<typeof SpecXKubernetesUnionSchema>;

export const LimitedPropertiesSchema = Schema.struct({
  "assuredConcurrencyShares": Schema.lazy(() => LastTransitionTimeSchema),
  "limitResponse": Schema.lazy(() => LimitResponseSchema),
});
export type LimitedProperties = Schema.From<typeof LimitedPropertiesSchema>;

export const LimitedSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LimitedPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Limited = Schema.From<typeof LimitedSchema>;

export const Properties170Schema = Schema.struct({
  "limited": Schema.lazy(() => LimitedSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
});
export type Properties170 = Schema.From<typeof Properties170Schema>;

export const Spec7Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties170Schema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-unions": Schema.array(Schema.lazy(() => SpecXKubernetesUnionSchema)),
});
export type Spec7 = Schema.From<typeof Spec7Schema>;

export const PrioritylevelconfigurationFlowcontrolV1Alpha1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec7Schema),
  "status": Schema.lazy(() => IndecentStatusSchema),
});
export type PrioritylevelconfigurationFlowcontrolV1Alpha1Properties = Schema.From<typeof PrioritylevelconfigurationFlowcontrolV1Alpha1PropertiesSchema>;

export const PrioritylevelconfigurationFlowcontrolV1Alpha1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PrioritylevelconfigurationFlowcontrolV1Alpha1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type PrioritylevelconfigurationFlowcontrolV1Alpha1 = Schema.From<typeof PrioritylevelconfigurationFlowcontrolV1Alpha1Schema>;

export const Properties169Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "description": Schema.lazy(() => DriverSchema),
  "globalDefault": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "preemptionPolicy": Schema.lazy(() => DriverSchema),
  "value": Schema.lazy(() => UsersubjectSchema),
});
export type Properties169 = Schema.From<typeof Properties169Schema>;

export const Items136Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties169Schema),
  "required": Schema.array(Schema.lazy(() => HttpheaderV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items136 = Schema.From<typeof Items136Schema>;

export const Items135Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items136Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items135 = Schema.From<typeof Items135Schema>;

export const PriorityclasslistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items135Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type PriorityclasslistProperties = Schema.From<typeof PriorityclasslistPropertiesSchema>;

export const PriorityclasslistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PriorityclasslistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Priorityclasslist = Schema.From<typeof PriorityclasslistSchema>;

export const Properties168Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "description": Schema.lazy(() => DriverSchema),
  "globalDefault": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "preemptionPolicy": Schema.lazy(() => DriverSchema),
  "value": Schema.lazy(() => GroupPriorityMinimumSchema),
});
export type Properties168 = Schema.From<typeof Properties168Schema>;

export const Items134Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties168Schema),
  "required": Schema.array(Schema.lazy(() => HttpheaderV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items134 = Schema.From<typeof Items134Schema>;

export const Items133Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items134Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items133 = Schema.From<typeof Items133Schema>;

export const PriorityclasslistSchedulingV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items133Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type PriorityclasslistSchedulingV1Properties = Schema.From<typeof PriorityclasslistSchedulingV1PropertiesSchema>;

export const PriorityclasslistSchedulingV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PriorityclasslistSchedulingV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type PriorityclasslistSchedulingV1Beta1 = Schema.From<typeof PriorityclasslistSchedulingV1Beta1Schema>;

export const PriorityclassPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "description": Schema.lazy(() => DriverSchema),
  "globalDefault": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "preemptionPolicy": Schema.lazy(() => DriverSchema),
  "value": Schema.lazy(() => LastTransitionTimeSchema),
});
export type PriorityclassProperties = Schema.From<typeof PriorityclassPropertiesSchema>;

export const PriorityclassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PriorityclassPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HttpheaderV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Priorityclass = Schema.From<typeof PriorityclassSchema>;

export const PriorityclassSchedulingV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "description": Schema.lazy(() => DriverSchema),
  "globalDefault": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "preemptionPolicy": Schema.lazy(() => DriverSchema),
  "value": Schema.lazy(() => LastTransitionTimeSchema),
});
export type PriorityclassSchedulingV1Properties = Schema.From<typeof PriorityclassSchedulingV1PropertiesSchema>;

export const PriorityclassSchedulingV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PriorityclassSchedulingV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HttpheaderV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type PriorityclassSchedulingV1Beta1 = Schema.From<typeof PriorityclassSchedulingV1Beta1Schema>;

export const PreferredschedulingtermV1PropertiesSchema = Schema.struct({
  "preference": Schema.lazy(() => NodeSelectorTermsPreferenceSchema),
  "weight": Schema.lazy(() => LastTransitionTimeSchema),
});
export type PreferredschedulingtermV1Properties = Schema.From<typeof PreferredschedulingtermV1PropertiesSchema>;

export const PreferredschedulingtermSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PreferredschedulingtermV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PreferredschedulingtermV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Preferredschedulingterm = Schema.From<typeof PreferredschedulingtermSchema>;

export const TentacledSubjectsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => SubjectsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type TentacledSubjects = Schema.From<typeof TentacledSubjectsSchema>;

export const PolicyruleswithsubjectsFlowcontrolV1Alpha1PropertiesSchema = Schema.struct({
  "nonResourceRules": Schema.lazy(() => PurpleNonResourceRulesSchema),
  "resourceRules": Schema.lazy(() => PurpleResourceRulesSchema),
  "subjects": Schema.lazy(() => TentacledSubjectsSchema),
});
export type PolicyruleswithsubjectsFlowcontrolV1Alpha1Properties = Schema.From<typeof PolicyruleswithsubjectsFlowcontrolV1Alpha1PropertiesSchema>;

export const PolicyruleswithsubjectsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PolicyruleswithsubjectsFlowcontrolV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Policyruleswithsubjects = Schema.From<typeof PolicyruleswithsubjectsSchema>;

export const PolicyruleRbacV1PropertiesSchema = Schema.struct({
  "apiGroups": Schema.lazy(() => ValuesClassSchema),
  "nonResourceURLs": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "resourceNames": Schema.lazy(() => ValuesClassSchema),
  "resources": Schema.lazy(() => ValuesClassSchema),
  "verbs": Schema.lazy(() => ValuesClassSchema),
});
export type PolicyruleRbacV1Properties = Schema.From<typeof PolicyruleRbacV1PropertiesSchema>;

export const ResourceruleSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PolicyruleRbacV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => NonresourcepolicyruleFlowcontrolV1Alpha1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Resourcerule = Schema.From<typeof ResourceruleSchema>;

export const PolicyAuditregistrationV1Alpha1PropertiesSchema = Schema.struct({
  "level": Schema.lazy(() => DriverSchema),
  "stages": Schema.lazy(() => StagesClassSchema),
});
export type PolicyAuditregistrationV1Alpha1Properties = Schema.From<typeof PolicyAuditregistrationV1Alpha1PropertiesSchema>;

export const PolicySchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PolicyAuditregistrationV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Policy = Schema.From<typeof PolicySchema>;

export const PodspecV1PropertiesSchema = Schema.struct({
  "activeDeadlineSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "affinity": Schema.lazy(() => AffinityClassSchema),
  "automountServiceAccountToken": Schema.lazy(() => DriverSchema),
  "containers": Schema.lazy(() => InitContainersClassSchema),
  "dnsConfig": Schema.lazy(() => DnsConfigSchema),
  "dnsPolicy": Schema.lazy(() => DriverSchema),
  "enableServiceLinks": Schema.lazy(() => DriverSchema),
  "ephemeralContainers": Schema.lazy(() => EphemeralContainersSchema),
  "hostAliases": Schema.lazy(() => HostAliasesSchema),
  "hostIPC": Schema.lazy(() => DriverSchema),
  "hostNetwork": Schema.lazy(() => DriverSchema),
  "hostPID": Schema.lazy(() => DriverSchema),
  "hostname": Schema.lazy(() => DriverSchema),
  "imagePullSecrets": Schema.lazy(() => PurpleImagePullSecretsSchema),
  "initContainers": Schema.lazy(() => InitContainersClassSchema),
  "nodeName": Schema.lazy(() => DriverSchema),
  "nodeSelector": Schema.lazy(() => VolumeAttributesClassSchema),
  "overhead": Schema.lazy(() => DefaultSchema),
  "preemptionPolicy": Schema.lazy(() => DriverSchema),
  "priority": Schema.lazy(() => LastTransitionTimeSchema),
  "priorityClassName": Schema.lazy(() => DriverSchema),
  "readinessGates": Schema.lazy(() => ReadinessGatesSchema),
  "restartPolicy": Schema.lazy(() => DriverSchema),
  "runtimeClassName": Schema.lazy(() => DriverSchema),
  "schedulerName": Schema.lazy(() => DriverSchema),
  "securityContext": Schema.lazy(() => FluffySecurityContextSchema),
  "serviceAccount": Schema.lazy(() => DriverSchema),
  "serviceAccountName": Schema.lazy(() => DriverSchema),
  "shareProcessNamespace": Schema.lazy(() => DriverSchema),
  "subdomain": Schema.lazy(() => DriverSchema),
  "terminationGracePeriodSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "tolerations": Schema.lazy(() => TolerationsSchema),
  "topologySpreadConstraints": Schema.lazy(() => TopologySpreadConstraintsSchema),
  "volumes": Schema.lazy(() => PurpleVolumesSchema),
});
export type PodspecV1Properties = Schema.From<typeof PodspecV1PropertiesSchema>;

export const PodspecSchema = Schema.struct({
  "description": Schema.lazy(() => PodspecV1DescriptionSchema),
  "properties": Schema.lazy(() => PodspecV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PodspecV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Podspec = Schema.From<typeof PodspecSchema>;

export const PodsmetricstatusAutoscalingV2Beta1PropertiesSchema = Schema.struct({
  "currentAverageValue": Schema.lazy(() => TargetAverageValueSchema),
  "metricName": Schema.lazy(() => DriverSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
});
export type PodsmetricstatusAutoscalingV2Beta1Properties = Schema.From<typeof PodsmetricstatusAutoscalingV2Beta1PropertiesSchema>;

export const PodsmetricstatusAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodsmetricstatusAutoscalingV2Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type PodsmetricstatusAutoscalingV2Beta1 = Schema.From<typeof PodsmetricstatusAutoscalingV2Beta1Schema>;

export const PodsmetricsourceAutoscalingV2Beta1PropertiesSchema = Schema.struct({
  "metricName": Schema.lazy(() => DriverSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
  "targetAverageValue": Schema.lazy(() => TargetAverageValueSchema),
});
export type PodsmetricsourceAutoscalingV2Beta1Properties = Schema.From<typeof PodsmetricsourceAutoscalingV2Beta1PropertiesSchema>;

export const PodsmetricsourceAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodsmetricsourceAutoscalingV2Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type PodsmetricsourceAutoscalingV2Beta1 = Schema.From<typeof PodsmetricsourceAutoscalingV2Beta1Schema>;

export const FluffySeLinuxSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SeLinuxPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffySeLinux = Schema.From<typeof FluffySeLinuxSchema>;

export const SupplementalGroupsClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FsGroupPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type SupplementalGroupsClass = Schema.From<typeof SupplementalGroupsClassSchema>;

export const PodsecuritypolicyspecPolicyV1Beta1PropertiesSchema = Schema.struct({
  "allowPrivilegeEscalation": Schema.lazy(() => DriverSchema),
  "allowedCSIDrivers": Schema.lazy(() => AllowedCsiDriversSchema),
  "allowedCapabilities": Schema.lazy(() => ValuesClassSchema),
  "allowedFlexVolumes": Schema.lazy(() => AllowedFlexVolumesSchema),
  "allowedHostPaths": Schema.lazy(() => AllowedHostPathsSchema),
  "allowedProcMountTypes": Schema.lazy(() => ValuesClassSchema),
  "allowedUnsafeSysctls": Schema.lazy(() => ValuesClassSchema),
  "defaultAddCapabilities": Schema.lazy(() => ValuesClassSchema),
  "defaultAllowPrivilegeEscalation": Schema.lazy(() => DriverSchema),
  "forbiddenSysctls": Schema.lazy(() => ValuesClassSchema),
  "fsGroup": Schema.lazy(() => SupplementalGroupsClassSchema),
  "hostIPC": Schema.lazy(() => DriverSchema),
  "hostNetwork": Schema.lazy(() => DriverSchema),
  "hostPID": Schema.lazy(() => DriverSchema),
  "hostPorts": Schema.lazy(() => HostPortsSchema),
  "privileged": Schema.lazy(() => DriverSchema),
  "readOnlyRootFilesystem": Schema.lazy(() => DriverSchema),
  "requiredDropCapabilities": Schema.lazy(() => ValuesClassSchema),
  "runAsGroup": Schema.lazy(() => RunAsSchema),
  "runAsUser": Schema.lazy(() => RunAsSchema),
  "runtimeClass": Schema.lazy(() => RuntimeClassSchema),
  "seLinux": Schema.lazy(() => FluffySeLinuxSchema),
  "supplementalGroups": Schema.lazy(() => SupplementalGroupsClassSchema),
  "volumes": Schema.lazy(() => ValuesClassSchema),
});
export type PodsecuritypolicyspecPolicyV1Beta1Properties = Schema.From<typeof PodsecuritypolicyspecPolicyV1Beta1PropertiesSchema>;

export const PodsecuritypolicyspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodsecuritypolicyspecPolicyV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Podsecuritypolicyspec = Schema.From<typeof PodsecuritypolicyspecSchema>;

export const PodreadinessgateV1PropertiesSchema = Schema.struct({
  "conditionType": Schema.lazy(() => DriverSchema),
});
export type PodreadinessgateV1Properties = Schema.From<typeof PodreadinessgateV1PropertiesSchema>;

export const PodreadinessgateSchema = Schema.struct({
  "description": Schema.lazy(() => PodreadinessgateV1DescriptionSchema),
  "properties": Schema.lazy(() => PodreadinessgateV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PodreadinessgateV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Podreadinessgate = Schema.From<typeof PodreadinessgateSchema>;

export const Items132Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items132 = Schema.From<typeof Items132Schema>;

export const Items131Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items132Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items131 = Schema.From<typeof Items131Schema>;

export const PodlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items131Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type PodlistProperties = Schema.From<typeof PodlistPropertiesSchema>;

export const PodlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Podlist = Schema.From<typeof PodlistSchema>;

export const Items130Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items130 = Schema.From<typeof Items130Schema>;

export const Items129Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items130Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items129 = Schema.From<typeof Items129Schema>;

export const PodlistV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items129Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type PodlistV1Properties = Schema.From<typeof PodlistV1PropertiesSchema>;

export const PodlistV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodlistV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type PodlistV1 = Schema.From<typeof PodlistV1Schema>;

export const PoddisruptionbudgetstatusPolicyV1Beta1PropertiesSchema = Schema.struct({
  "currentHealthy": Schema.lazy(() => LastTransitionTimeSchema),
  "desiredHealthy": Schema.lazy(() => LastTransitionTimeSchema),
  "disruptedPods": Schema.lazy(() => DisruptedPodsSchema),
  "disruptionsAllowed": Schema.lazy(() => LastTransitionTimeSchema),
  "expectedPods": Schema.lazy(() => LastTransitionTimeSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
});
export type PoddisruptionbudgetstatusPolicyV1Beta1Properties = Schema.From<typeof PoddisruptionbudgetstatusPolicyV1Beta1PropertiesSchema>;

export const PoddisruptionbudgetstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PoddisruptionbudgetstatusPolicyV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Poddisruptionbudgetstatus = Schema.From<typeof PoddisruptionbudgetstatusSchema>;

export const Items128Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PoddisruptionbudgetPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items128 = Schema.From<typeof Items128Schema>;

export const Items127Schema = Schema.struct({
  "items": Schema.lazy(() => Items128Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items127 = Schema.From<typeof Items127Schema>;

export const PoddisruptionbudgetlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items127Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type PoddisruptionbudgetlistProperties = Schema.From<typeof PoddisruptionbudgetlistPropertiesSchema>;

export const PoddisruptionbudgetlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PoddisruptionbudgetlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Poddisruptionbudgetlist = Schema.From<typeof PoddisruptionbudgetlistSchema>;

export const Items126Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PoddisruptionbudgetPolicyV1Beta1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items126 = Schema.From<typeof Items126Schema>;

export const Items125Schema = Schema.struct({
  "items": Schema.lazy(() => Items126Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items125 = Schema.From<typeof Items125Schema>;

export const PoddisruptionbudgetlistPolicyV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items125Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type PoddisruptionbudgetlistPolicyV1Beta1Properties = Schema.From<typeof PoddisruptionbudgetlistPolicyV1Beta1PropertiesSchema>;

export const PoddisruptionbudgetlistPolicyV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PoddisruptionbudgetlistPolicyV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type PoddisruptionbudgetlistPolicyV1Beta1 = Schema.From<typeof PoddisruptionbudgetlistPolicyV1Beta1Schema>;

export const PoddisruptionbudgetPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec6Schema),
  "status": Schema.lazy(() => Status5Schema),
});
export type PoddisruptionbudgetProperties = Schema.From<typeof PoddisruptionbudgetPropertiesSchema>;

export const PoddisruptionbudgetSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PoddisruptionbudgetPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Poddisruptionbudget = Schema.From<typeof PoddisruptionbudgetSchema>;

export const AllowedcsidriverPolicyV1Beta1PropertiesSchema = Schema.struct({
  "name": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "ports": Schema.optional(Schema.union(Schema.lazy(() => StickyPortsSchema), Schema.null)),
  "to": Schema.optional(Schema.union(Schema.lazy(() => FromSchema), Schema.null)),
  "from": Schema.optional(Schema.union(Schema.lazy(() => FromSchema), Schema.null)),
  "ipBlock": Schema.optional(Schema.union(Schema.lazy(() => IpBlockSchema), Schema.null)),
  "namespaceSelector": Schema.optional(Schema.union(Schema.lazy(() => MetricSelectorClassSchema), Schema.null)),
  "podSelector": Schema.optional(Schema.union(Schema.lazy(() => MetricSelectorClassSchema), Schema.null)),
  "configSource": Schema.optional(Schema.union(Schema.lazy(() => AssignedSchema), Schema.null)),
  "externalID": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "podCIDR": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "podCIDRs": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "providerID": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "taints": Schema.optional(Schema.union(Schema.lazy(() => TaintsSchema), Schema.null)),
  "unschedulable": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "addresses": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "allocatable": Schema.optional(Schema.union(Schema.lazy(() => DefaultSchema), Schema.null)),
  "capacity": Schema.optional(Schema.union(Schema.lazy(() => DefaultSchema), Schema.null)),
  "conditions": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "config": Schema.optional(Schema.union(Schema.lazy(() => ConfigSchema), Schema.null)),
  "daemonEndpoints": Schema.optional(Schema.union(Schema.lazy(() => DaemonEndpointsSchema), Schema.null)),
  "images": Schema.optional(Schema.union(Schema.lazy(() => ImagesSchema), Schema.null)),
  "nodeInfo": Schema.optional(Schema.union(Schema.lazy(() => NodeInfoSchema), Schema.null)),
  "phase": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "volumesAttached": Schema.optional(Schema.union(Schema.lazy(() => VolumesAttachedSchema), Schema.null)),
  "volumesInUse": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "podFixed": Schema.optional(Schema.union(Schema.lazy(() => DefaultSchema), Schema.null)),
  "fsGroup": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "fsGroupChangePolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "runAsGroup": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "runAsNonRoot": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "runAsUser": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "seLinuxOptions": Schema.optional(Schema.union(Schema.lazy(() => SeLinuxOptionsSchema), Schema.null)),
  "supplementalGroups": Schema.optional(Schema.union(Schema.lazy(() => SupplementalGroupsSchema), Schema.null)),
  "sysctls": Schema.optional(Schema.union(Schema.lazy(() => HttpHeadersSchema), Schema.null)),
  "windowsOptions": Schema.optional(Schema.union(Schema.lazy(() => WindowsOptionsSchema), Schema.null)),
  "containerStatuses": Schema.optional(Schema.union(Schema.lazy(() => ContainerStatusesSchema), Schema.null)),
  "ephemeralContainerStatuses": Schema.optional(Schema.union(Schema.lazy(() => ContainerStatusesSchema), Schema.null)),
  "hostIP": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "initContainerStatuses": Schema.optional(Schema.union(Schema.lazy(() => ContainerStatusesSchema), Schema.null)),
  "message": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "nominatedNodeName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "podIP": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "podIPs": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "qosClass": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "reason": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "startTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "nonResourceAttributes": Schema.optional(Schema.union(Schema.lazy(() => NonResourceAttributesSchema), Schema.null)),
  "resourceAttributes": Schema.optional(Schema.union(Schema.lazy(() => ResourceAttributesSchema), Schema.null)),
  "level": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "role": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "type": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "user": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "causes": Schema.optional(Schema.union(Schema.lazy(() => CausesSchema), Schema.null)),
  "group": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "kind": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "retryAfterSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "uid": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type AllowedcsidriverPolicyV1Beta1Properties = Schema.From<typeof AllowedcsidriverPolicyV1Beta1PropertiesSchema>;

export const UsersubjectSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.optional(Schema.union(Schema.lazy(() => AllowedcsidriverPolicyV1Beta1PropertiesSchema), Schema.null)),
  "required": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)), Schema.null)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "format": Schema.optional(Schema.union(Schema.lazy(() => FormatSchema), Schema.null)),
});
export type Usersubject = Schema.From<typeof UsersubjectSchema>;

export const DisruptedPodsSchema = Schema.struct({
  "additionalProperties": Schema.lazy(() => LastTransitionTimeSchema),
  "description": Schema.string,
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type DisruptedPods = Schema.From<typeof DisruptedPodsSchema>;

export const Properties167Schema = Schema.struct({
  "currentHealthy": Schema.lazy(() => GroupPriorityMinimumSchema),
  "desiredHealthy": Schema.lazy(() => GroupPriorityMinimumSchema),
  "disruptedPods": Schema.lazy(() => DisruptedPodsSchema),
  "disruptionsAllowed": Schema.lazy(() => UsersubjectSchema),
  "expectedPods": Schema.lazy(() => UsersubjectSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties167 = Schema.From<typeof Properties167Schema>;

export const Status5Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties167Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status5 = Schema.From<typeof Status5Schema>;

export const Properties166Schema = Schema.struct({
  "maxUnavailable": Schema.lazy(() => TargetAverageValueSchema),
  "minAvailable": Schema.lazy(() => TargetAverageValueSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
});
export type Properties166 = Schema.From<typeof Properties166Schema>;

export const Spec6Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties166Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec6 = Schema.From<typeof Spec6Schema>;

export const PoddisruptionbudgetPolicyV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec6Schema),
  "status": Schema.lazy(() => Status5Schema),
});
export type PoddisruptionbudgetPolicyV1Beta1Properties = Schema.From<typeof PoddisruptionbudgetPolicyV1Beta1PropertiesSchema>;

export const PoddisruptionbudgetPolicyV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PoddisruptionbudgetPolicyV1Beta1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type PoddisruptionbudgetPolicyV1Beta1 = Schema.From<typeof PoddisruptionbudgetPolicyV1Beta1Schema>;

export const PodaffinitytermV1PropertiesSchema = Schema.struct({
  "labelSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "namespaces": Schema.lazy(() => CategoriesSchema),
  "topologyKey": Schema.lazy(() => DriverSchema),
});
export type PodaffinitytermV1Properties = Schema.From<typeof PodaffinitytermV1PropertiesSchema>;

export const PodaffinitytermSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodaffinitytermV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PodAffinityTermRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Podaffinityterm = Schema.From<typeof PodaffinitytermSchema>;

export const PodPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => PurpleSpecSchema),
  "status": Schema.lazy(() => Status4Schema),
});
export type PodProperties = Schema.From<typeof PodPropertiesSchema>;

export const PodSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Pod = Schema.From<typeof PodSchema>;

export const Properties165Schema = Schema.struct({
  "ip": Schema.lazy(() => DriverSchema),
});
export type Properties165 = Schema.From<typeof Properties165Schema>;

export const Items124Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties165Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items124 = Schema.From<typeof Items124Schema>;

export const PodIPsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items124Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type PodIPs = Schema.From<typeof PodIPsSchema>;

export const Properties164Schema = Schema.struct({
  "conditions": Schema.lazy(() => StickyConditionsSchema),
  "containerStatuses": Schema.lazy(() => ContainerStatusesSchema),
  "ephemeralContainerStatuses": Schema.lazy(() => ContainerStatusesSchema),
  "hostIP": Schema.lazy(() => DriverSchema),
  "initContainerStatuses": Schema.lazy(() => ContainerStatusesSchema),
  "message": Schema.lazy(() => DriverSchema),
  "nominatedNodeName": Schema.lazy(() => DriverSchema),
  "phase": Schema.lazy(() => DriverSchema),
  "podIP": Schema.lazy(() => DriverSchema),
  "podIPs": Schema.lazy(() => PodIPsSchema),
  "qosClass": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "startTime": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties164 = Schema.From<typeof Properties164Schema>;

export const Status4Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties164Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status4 = Schema.From<typeof Status4Schema>;

export const PodV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => PurpleSpecSchema),
  "status": Schema.lazy(() => Status4Schema),
});
export type PodV1Properties = Schema.From<typeof PodV1PropertiesSchema>;

export const PodV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type PodV1 = Schema.From<typeof PodV1Schema>;

export const PhotonpersistentdiskvolumesourceV1PropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "pdID": Schema.lazy(() => DriverSchema),
});
export type PhotonpersistentdiskvolumesourceV1Properties = Schema.From<typeof PhotonpersistentdiskvolumesourceV1PropertiesSchema>;

export const PhotonpersistentdiskvolumesourceSchema = Schema.struct({
  "description": Schema.lazy(() => PhotonPersistentDiskDescriptionSchema),
  "properties": Schema.lazy(() => PhotonpersistentdiskvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PhotonPersistentDiskRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Photonpersistentdiskvolumesource = Schema.From<typeof PhotonpersistentdiskvolumesourceSchema>;

export const Items123Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items123 = Schema.From<typeof Items123Schema>;

export const Items122Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items123Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items122 = Schema.From<typeof Items122Schema>;

export const PersistentvolumelistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items122Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type PersistentvolumelistProperties = Schema.From<typeof PersistentvolumelistPropertiesSchema>;

export const PersistentvolumelistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumelistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Persistentvolumelist = Schema.From<typeof PersistentvolumelistSchema>;

export const Items121Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumeV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items121 = Schema.From<typeof Items121Schema>;

export const Items120Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items121Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items120 = Schema.From<typeof Items120Schema>;

export const PersistentvolumelistV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items120Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type PersistentvolumelistV1Properties = Schema.From<typeof PersistentvolumelistV1PropertiesSchema>;

export const PersistentvolumelistV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumelistV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type PersistentvolumelistV1 = Schema.From<typeof PersistentvolumelistV1Schema>;

export const PersistentvolumeclaimvolumesourceV1PropertiesSchema = Schema.struct({
  "claimName": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
});
export type PersistentvolumeclaimvolumesourceV1Properties = Schema.From<typeof PersistentvolumeclaimvolumesourceV1PropertiesSchema>;

export const PersistentvolumeclaimvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumeclaimvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PersistentVolumeClaimRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Persistentvolumeclaimvolumesource = Schema.From<typeof PersistentvolumeclaimvolumesourceSchema>;

export const Items119Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumeclaimPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items119 = Schema.From<typeof Items119Schema>;

export const Items118Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items119Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items118 = Schema.From<typeof Items118Schema>;

export const PersistentvolumeclaimlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items118Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type PersistentvolumeclaimlistProperties = Schema.From<typeof PersistentvolumeclaimlistPropertiesSchema>;

export const PersistentvolumeclaimlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumeclaimlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Persistentvolumeclaimlist = Schema.From<typeof PersistentvolumeclaimlistSchema>;

export const Items117Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumeclaimV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items117 = Schema.From<typeof Items117Schema>;

export const Items116Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items117Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items116 = Schema.From<typeof Items116Schema>;

export const PersistentvolumeclaimlistV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items116Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type PersistentvolumeclaimlistV1Properties = Schema.From<typeof PersistentvolumeclaimlistV1PropertiesSchema>;

export const PersistentvolumeclaimlistV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumeclaimlistV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type PersistentvolumeclaimlistV1 = Schema.From<typeof PersistentvolumeclaimlistV1Schema>;

export const PersistentvolumeclaimconditionV1PropertiesSchema = Schema.struct({
  "lastProbeTime": Schema.lazy(() => LastTransitionTimeSchema),
  "lastTransitionTime": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "status": Schema.lazy(() => BuildDateSchema),
  "type": Schema.lazy(() => BuildDateSchema),
});
export type PersistentvolumeclaimconditionV1Properties = Schema.From<typeof PersistentvolumeclaimconditionV1PropertiesSchema>;

export const PersistentvolumeclaimconditionSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumeclaimconditionV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Persistentvolumeclaimcondition = Schema.From<typeof PersistentvolumeclaimconditionSchema>;

export const PersistentvolumeclaimPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec5Schema),
  "status": Schema.lazy(() => Status3Schema),
});
export type PersistentvolumeclaimProperties = Schema.From<typeof PersistentvolumeclaimPropertiesSchema>;

export const PersistentvolumeclaimSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumeclaimPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Persistentvolumeclaim = Schema.From<typeof PersistentvolumeclaimSchema>;

export const Properties163Schema = Schema.struct({
  "accessModes": Schema.lazy(() => ValuesClassSchema),
  "capacity": Schema.lazy(() => DefaultSchema),
  "conditions": Schema.lazy(() => TentacledConditionsSchema),
  "phase": Schema.lazy(() => DriverSchema),
});
export type Properties163 = Schema.From<typeof Properties163Schema>;

export const Status3Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties163Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status3 = Schema.From<typeof Status3Schema>;

export const Properties162Schema = Schema.struct({
  "accessModes": Schema.lazy(() => ValuesClassSchema),
  "dataSource": Schema.lazy(() => ParametersClassSchema),
  "resources": Schema.lazy(() => PurpleResourcesSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
  "storageClassName": Schema.lazy(() => DriverSchema),
  "volumeMode": Schema.lazy(() => DriverSchema),
  "volumeName": Schema.lazy(() => DriverSchema),
});
export type Properties162 = Schema.From<typeof Properties162Schema>;

export const Spec5Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties162Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec5 = Schema.From<typeof Spec5Schema>;

export const PersistentvolumeclaimV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec5Schema),
  "status": Schema.lazy(() => Status3Schema),
});
export type PersistentvolumeclaimV1Properties = Schema.From<typeof PersistentvolumeclaimV1PropertiesSchema>;

export const PersistentvolumeclaimV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumeclaimV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type PersistentvolumeclaimV1 = Schema.From<typeof PersistentvolumeclaimV1Schema>;

export const PersistentvolumePropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => InlineVolumeSpecClassSchema),
  "status": Schema.lazy(() => Status2Schema),
});
export type PersistentvolumeProperties = Schema.From<typeof PersistentvolumePropertiesSchema>;

export const PersistentvolumeSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumePropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Persistentvolume = Schema.From<typeof PersistentvolumeSchema>;

export const Properties161Schema = Schema.struct({
  "message": Schema.lazy(() => DriverSchema),
  "phase": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
});
export type Properties161 = Schema.From<typeof Properties161Schema>;

export const Status2Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties161Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status2 = Schema.From<typeof Status2Schema>;

export const InlineVolumeSpecPropertiesSchema = Schema.struct({
  "accessModes": Schema.lazy(() => ValuesClassSchema),
  "awsElasticBlockStore": Schema.lazy(() => AwsElasticBlockStoreSchema),
  "azureDisk": Schema.lazy(() => AzureDiskSchema),
  "azureFile": Schema.lazy(() => AzureFileSchema),
  "capacity": Schema.lazy(() => DefaultSchema),
  "cephfs": Schema.lazy(() => FluffyCephfsSchema),
  "cinder": Schema.lazy(() => FluffyCinderSchema),
  "claimRef": Schema.lazy(() => TargetRefSchema),
  "csi": Schema.lazy(() => FluffyCsiSchema),
  "fc": Schema.lazy(() => FcSchema),
  "flexVolume": Schema.lazy(() => FluffyFlexVolumeSchema),
  "flocker": Schema.lazy(() => FlockerSchema),
  "gcePersistentDisk": Schema.lazy(() => GcePersistentDiskSchema),
  "glusterfs": Schema.lazy(() => GlusterfsSchema),
  "hostPath": Schema.lazy(() => HostPathSchema),
  "iscsi": Schema.lazy(() => FluffyIscsiSchema),
  "local": Schema.lazy(() => LocalSchema),
  "mountOptions": Schema.lazy(() => ValuesClassSchema),
  "nfs": Schema.lazy(() => NfsSchema),
  "nodeAffinity": Schema.lazy(() => FluffyNodeAffinitySchema),
  "persistentVolumeReclaimPolicy": Schema.lazy(() => DriverSchema),
  "photonPersistentDisk": Schema.lazy(() => PhotonPersistentDiskSchema),
  "portworxVolume": Schema.lazy(() => PortworxVolumeSchema),
  "quobyte": Schema.lazy(() => QuobyteSchema),
  "rbd": Schema.lazy(() => FluffyRbdSchema),
  "scaleIO": Schema.lazy(() => FluffyScaleIoSchema),
  "storageClassName": Schema.lazy(() => DriverSchema),
  "storageos": Schema.lazy(() => FluffyStorageosSchema),
  "volumeMode": Schema.lazy(() => DriverSchema),
  "vsphereVolume": Schema.lazy(() => VsphereVolumeSchema),
});
export type InlineVolumeSpecProperties = Schema.From<typeof InlineVolumeSpecPropertiesSchema>;

export const InlineVolumeSpecClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => InlineVolumeSpecPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type InlineVolumeSpecClass = Schema.From<typeof InlineVolumeSpecClassSchema>;

export const PersistentvolumeV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => InlineVolumeSpecClassSchema),
  "status": Schema.lazy(() => Status2Schema),
});
export type PersistentvolumeV1Properties = Schema.From<typeof PersistentvolumeV1PropertiesSchema>;

export const PersistentvolumeV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentvolumeV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type PersistentvolumeV1 = Schema.From<typeof PersistentvolumeV1Schema>;

export const OwnerreferenceMetaV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "blockOwnerDeletion": Schema.lazy(() => DriverSchema),
  "controller": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "uid": Schema.lazy(() => DriverSchema),
});
export type OwnerreferenceMetaV1Properties = Schema.From<typeof OwnerreferenceMetaV1PropertiesSchema>;

export const OwnerreferenceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => OwnerreferenceMetaV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Ownerreference = Schema.From<typeof OwnerreferenceSchema>;

export const ObjectmetricstatusAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "current": Schema.lazy(() => PurpleCurrentSchema),
  "describedObject": Schema.lazy(() => ParametersClassSchema),
  "metric": Schema.lazy(() => PurpleMetricSchema),
});
export type ObjectmetricstatusAutoscalingV2Beta2Properties = Schema.From<typeof ObjectmetricstatusAutoscalingV2Beta2PropertiesSchema>;

export const ObjectmetricstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ObjectmetricstatusAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricstatusAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Objectmetricstatus = Schema.From<typeof ObjectmetricstatusSchema>;

export const ObjectmetricsourceAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "describedObject": Schema.lazy(() => ParametersClassSchema),
  "metric": Schema.lazy(() => PurpleMetricSchema),
  "target": Schema.lazy(() => PurpleTargetSchema),
});
export type ObjectmetricsourceAutoscalingV2Beta2Properties = Schema.From<typeof ObjectmetricsourceAutoscalingV2Beta2PropertiesSchema>;

export const ObjectmetricsourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ObjectmetricsourceAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricsourceAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Objectmetricsource = Schema.From<typeof ObjectmetricsourceSchema>;

export const ObjectmetricsourceAutoscalingV2Beta1PropertiesSchema = Schema.struct({
  "averageValue": Schema.lazy(() => TargetAverageValueSchema),
  "metricName": Schema.lazy(() => DriverSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
  "target": Schema.lazy(() => ParametersClassSchema),
  "targetValue": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "currentValue": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
});
export type ObjectmetricsourceAutoscalingV2Beta1Properties = Schema.From<typeof ObjectmetricsourceAutoscalingV2Beta1PropertiesSchema>;

export const ObjectmetricstatusAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ObjectmetricsourceAutoscalingV2Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricsourceAutoscalingV2Beta1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type ObjectmetricstatusAutoscalingV2Beta1 = Schema.From<typeof ObjectmetricstatusAutoscalingV2Beta1Schema>;

export const ObjectfieldselectorV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "fieldPath": Schema.lazy(() => DriverSchema),
});
export type ObjectfieldselectorV1Properties = Schema.From<typeof ObjectfieldselectorV1PropertiesSchema>;

export const ObjectfieldselectorSchema = Schema.struct({
  "description": Schema.lazy(() => FieldRefDescriptionSchema),
  "properties": Schema.lazy(() => ObjectfieldselectorV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => FieldRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Objectfieldselector = Schema.From<typeof ObjectfieldselectorSchema>;

export const NonresourceruleAuthorizationV1PropertiesSchema = Schema.struct({
  "nonResourceURLs": Schema.lazy(() => ValuesClassSchema),
  "verbs": Schema.lazy(() => ValuesClassSchema),
});
export type NonresourceruleAuthorizationV1Properties = Schema.From<typeof NonresourceruleAuthorizationV1PropertiesSchema>;

export const NonresourceruleSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NonresourceruleAuthorizationV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => NonresourcepolicyruleFlowcontrolV1Alpha1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Nonresourcerule = Schema.From<typeof NonresourceruleSchema>;

export const NonresourcepolicyruleFlowcontrolV1Alpha1PropertiesSchema = Schema.struct({
  "nonResourceURLs": Schema.lazy(() => NonResourceUrLsSchema),
  "verbs": Schema.lazy(() => NonResourceUrLsSchema),
});
export type NonresourcepolicyruleFlowcontrolV1Alpha1Properties = Schema.From<typeof NonresourcepolicyruleFlowcontrolV1Alpha1PropertiesSchema>;

export const NonresourcepolicyruleSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NonresourcepolicyruleFlowcontrolV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => NonresourcepolicyruleFlowcontrolV1Alpha1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Nonresourcepolicyrule = Schema.From<typeof NonresourcepolicyruleSchema>;

export const NodesysteminfoV1PropertiesSchema = Schema.struct({
  "architecture": Schema.lazy(() => DriverSchema),
  "bootID": Schema.lazy(() => DriverSchema),
  "containerRuntimeVersion": Schema.lazy(() => DriverSchema),
  "kernelVersion": Schema.lazy(() => DriverSchema),
  "kubeProxyVersion": Schema.lazy(() => DriverSchema),
  "kubeletVersion": Schema.lazy(() => DriverSchema),
  "machineID": Schema.lazy(() => DriverSchema),
  "operatingSystem": Schema.lazy(() => DriverSchema),
  "osImage": Schema.lazy(() => DriverSchema),
  "systemUUID": Schema.lazy(() => DriverSchema),
});
export type NodesysteminfoV1Properties = Schema.From<typeof NodesysteminfoV1PropertiesSchema>;

export const NodesysteminfoSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NodesysteminfoV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Nodesysteminfo = Schema.From<typeof NodesysteminfoSchema>;

export const NodeselectortermV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PreferencePropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
});
export type NodeselectortermV1 = Schema.From<typeof NodeselectortermV1Schema>;

export const NodeselectorrequirementV1PropertiesSchema = Schema.struct({
  "key": Schema.lazy(() => DriverSchema),
  "operator": Schema.lazy(() => DriverSchema),
  "values": Schema.lazy(() => ValuesClassSchema),
});
export type NodeselectorrequirementV1Properties = Schema.From<typeof NodeselectorrequirementV1PropertiesSchema>;

export const NodeselectorrequirementSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NodeselectorrequirementV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => LabelselectorrequirementMetaV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Nodeselectorrequirement = Schema.From<typeof NodeselectorrequirementSchema>;

export const FluffyNodeSelectorTermsSchema = Schema.struct({
  "description": Schema.lazy(() => NodeSelectorTermsDescriptionSchema),
  "items": Schema.lazy(() => NodeSelectorTermsPreferenceSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyNodeSelectorTerms = Schema.From<typeof FluffyNodeSelectorTermsSchema>;

export const NodeselectorV1PropertiesSchema = Schema.struct({
  "nodeSelectorTerms": Schema.lazy(() => FluffyNodeSelectorTermsSchema),
});
export type NodeselectorV1Properties = Schema.From<typeof NodeselectorV1PropertiesSchema>;

export const NodeselectorSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NodeselectorV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => RequiredRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Nodeselector = Schema.From<typeof NodeselectorSchema>;

export const Items115Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NodePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items115 = Schema.From<typeof Items115Schema>;

export const Items114Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items115Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items114 = Schema.From<typeof Items114Schema>;

export const NodelistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items114Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type NodelistProperties = Schema.From<typeof NodelistPropertiesSchema>;

export const NodelistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NodelistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Nodelist = Schema.From<typeof NodelistSchema>;

export const Items113Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NodeV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items113 = Schema.From<typeof Items113Schema>;

export const Items112Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items113Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items112 = Schema.From<typeof Items112Schema>;

export const NodelistV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items112Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type NodelistV1Properties = Schema.From<typeof NodelistV1PropertiesSchema>;

export const NodelistV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NodelistV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type NodelistV1 = Schema.From<typeof NodelistV1Schema>;

export const NodeaddressV1PropertiesSchema = Schema.struct({
  "address": Schema.lazy(() => DriverSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type NodeaddressV1Properties = Schema.From<typeof NodeaddressV1PropertiesSchema>;

export const NodeaddressSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NodeaddressV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Nodeaddress = Schema.From<typeof NodeaddressSchema>;

export const NodePropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec4Schema),
  "status": Schema.lazy(() => Status1Schema),
});
export type NodeProperties = Schema.From<typeof NodePropertiesSchema>;

export const NodeSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NodePropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Node = Schema.From<typeof NodeSchema>;

export const VolumesAttachedSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => VolumeDevicesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type VolumesAttached = Schema.From<typeof VolumesAttachedSchema>;

export const NodeInfoPropertiesSchema = Schema.struct({
  "architecture": Schema.lazy(() => GroupVersionSchema),
  "bootID": Schema.lazy(() => GroupVersionSchema),
  "containerRuntimeVersion": Schema.lazy(() => GroupVersionSchema),
  "kernelVersion": Schema.lazy(() => GroupVersionSchema),
  "kubeProxyVersion": Schema.lazy(() => GroupVersionSchema),
  "kubeletVersion": Schema.lazy(() => GroupVersionSchema),
  "machineID": Schema.lazy(() => GroupVersionSchema),
  "operatingSystem": Schema.lazy(() => GroupVersionSchema),
  "osImage": Schema.lazy(() => GroupVersionSchema),
  "systemUUID": Schema.lazy(() => GroupVersionSchema),
});
export type NodeInfoProperties = Schema.From<typeof NodeInfoPropertiesSchema>;

export const NodeInfoSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NodeInfoPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type NodeInfo = Schema.From<typeof NodeInfoSchema>;

export const Properties63Schema = Schema.struct({
  "names": Schema.lazy(() => ConversionReviewVersionsSchema),
  "sizeBytes": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties63 = Schema.From<typeof Properties63Schema>;

export const ImagesItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties63Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ImagesItems = Schema.From<typeof ImagesItemsSchema>;

export const ImagesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => ImagesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Images = Schema.From<typeof ImagesSchema>;

export const DaemonEndpointsPropertiesSchema = Schema.struct({
  "kubeletEndpoint": Schema.lazy(() => KubeletEndpointSchema),
});
export type DaemonEndpointsProperties = Schema.From<typeof DaemonEndpointsPropertiesSchema>;

export const DaemonEndpointsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DaemonEndpointsPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type DaemonEndpoints = Schema.From<typeof DaemonEndpointsSchema>;

export const ConfigPropertiesSchema = Schema.struct({
  "active": Schema.lazy(() => AssignedSchema),
  "assigned": Schema.lazy(() => AssignedSchema),
  "error": Schema.lazy(() => DriverSchema),
  "lastKnownGood": Schema.lazy(() => AssignedSchema),
});
export type ConfigProperties = Schema.From<typeof ConfigPropertiesSchema>;

export const ConfigSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConfigPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Config = Schema.From<typeof ConfigSchema>;

export const Properties160Schema = Schema.struct({
  "address": Schema.lazy(() => GroupVersionSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
});
export type Properties160 = Schema.From<typeof Properties160Schema>;

export const Items111Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties160Schema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items111 = Schema.From<typeof Items111Schema>;

export const PurpleAddressesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items111Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type PurpleAddresses = Schema.From<typeof PurpleAddressesSchema>;

export const Properties159Schema = Schema.struct({
  "addresses": Schema.lazy(() => PurpleAddressesSchema),
  "allocatable": Schema.lazy(() => DefaultSchema),
  "capacity": Schema.lazy(() => DefaultSchema),
  "conditions": Schema.lazy(() => StickyConditionsSchema),
  "config": Schema.lazy(() => ConfigSchema),
  "daemonEndpoints": Schema.lazy(() => DaemonEndpointsSchema),
  "images": Schema.lazy(() => ImagesSchema),
  "nodeInfo": Schema.lazy(() => NodeInfoSchema),
  "phase": Schema.lazy(() => DriverSchema),
  "volumesAttached": Schema.lazy(() => VolumesAttachedSchema),
  "volumesInUse": Schema.lazy(() => ValuesClassSchema),
});
export type Properties159 = Schema.From<typeof Properties159Schema>;

export const Status1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties159Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Status1 = Schema.From<typeof Status1Schema>;

export const Properties64Schema = Schema.struct({
  "effect": Schema.lazy(() => GroupVersionSchema),
  "key": Schema.lazy(() => GroupVersionSchema),
  "timeAdded": Schema.lazy(() => LastTransitionTimeSchema),
  "value": Schema.lazy(() => DriverSchema),
});
export type Properties64 = Schema.From<typeof Properties64Schema>;

export const TaintsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties64Schema),
  "required": Schema.array(Schema.lazy(() => TaintV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TaintsItems = Schema.From<typeof TaintsItemsSchema>;

export const TaintsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => TaintsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Taints = Schema.From<typeof TaintsSchema>;

export const Properties158Schema = Schema.struct({
  "configSource": Schema.lazy(() => AssignedSchema),
  "externalID": Schema.lazy(() => DriverSchema),
  "podCIDR": Schema.lazy(() => DriverSchema),
  "podCIDRs": Schema.lazy(() => FinalizersSchema),
  "providerID": Schema.lazy(() => DriverSchema),
  "taints": Schema.lazy(() => TaintsSchema),
  "unschedulable": Schema.lazy(() => DriverSchema),
});
export type Properties158 = Schema.From<typeof Properties158Schema>;

export const Spec4Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties158Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec4 = Schema.From<typeof Spec4Schema>;

export const NodeV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec4Schema),
  "status": Schema.lazy(() => Status1Schema),
});
export type NodeV1Properties = Schema.From<typeof NodeV1PropertiesSchema>;

export const NodeV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NodeV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type NodeV1 = Schema.From<typeof NodeV1Schema>;

export const NfsvolumesourceV1PropertiesSchema = Schema.struct({
  "path": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "server": Schema.lazy(() => DriverSchema),
});
export type NfsvolumesourceV1Properties = Schema.From<typeof NfsvolumesourceV1PropertiesSchema>;

export const NfsvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NfsvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => NfsRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Nfsvolumesource = Schema.From<typeof NfsvolumesourceSchema>;

export const NetworkpolicyspecNetworkingV1PropertiesSchema = Schema.struct({
  "egress": Schema.lazy(() => EgressSchema),
  "ingress": Schema.lazy(() => FluffyIngressSchema),
  "podSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "policyTypes": Schema.lazy(() => StagesClassSchema),
});
export type NetworkpolicyspecNetworkingV1Properties = Schema.From<typeof NetworkpolicyspecNetworkingV1PropertiesSchema>;

export const NetworkpolicyspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NetworkpolicyspecNetworkingV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Networkpolicyspec = Schema.From<typeof NetworkpolicyspecSchema>;

export const Items110Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NamespacePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items110 = Schema.From<typeof Items110Schema>;

export const Items109Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items110Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items109 = Schema.From<typeof Items109Schema>;

export const NamespacelistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items109Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type NamespacelistProperties = Schema.From<typeof NamespacelistPropertiesSchema>;

export const NamespacelistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NamespacelistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Namespacelist = Schema.From<typeof NamespacelistSchema>;

export const Items108Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NamespaceV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items108 = Schema.From<typeof Items108Schema>;

export const Items107Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items108Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items107 = Schema.From<typeof Items107Schema>;

export const NamespacelistV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items107Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type NamespacelistV1Properties = Schema.From<typeof NamespacelistV1PropertiesSchema>;

export const NamespacelistV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NamespacelistV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type NamespacelistV1 = Schema.From<typeof NamespacelistV1Schema>;

export const NamespaceconditionV1PropertiesSchema = Schema.struct({
  "lastTransitionTime": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => BuildDateSchema),
  "reason": Schema.lazy(() => BuildDateSchema),
  "status": Schema.lazy(() => DriverSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type NamespaceconditionV1Properties = Schema.From<typeof NamespaceconditionV1PropertiesSchema>;

export const NamespaceconditionSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NamespaceconditionV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Namespacecondition = Schema.From<typeof NamespaceconditionSchema>;

export const NamespacePropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec3Schema),
  "status": Schema.lazy(() => BraggadociousStatusSchema),
});
export type NamespaceProperties = Schema.From<typeof NamespacePropertiesSchema>;

export const NamespaceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NamespacePropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Namespace = Schema.From<typeof NamespaceSchema>;

export const Properties157Schema = Schema.struct({
  "lastTransitionTime": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => BuildDateSchema),
  "reason": Schema.lazy(() => BuildDateSchema),
  "status": Schema.lazy(() => GroupVersionSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
});
export type Properties157 = Schema.From<typeof Properties157Schema>;

export const Items106Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties157Schema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items106 = Schema.From<typeof Items106Schema>;

export const FriskyConditionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items106Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type FriskyConditions = Schema.From<typeof FriskyConditionsSchema>;

export const Properties156Schema = Schema.struct({
  "conditions": Schema.lazy(() => FriskyConditionsSchema),
  "phase": Schema.lazy(() => DriverSchema),
});
export type Properties156 = Schema.From<typeof Properties156Schema>;

export const BraggadociousStatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties156Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type BraggadociousStatus = Schema.From<typeof BraggadociousStatusSchema>;

export const Properties155Schema = Schema.struct({
  "finalizers": Schema.lazy(() => ValuesClassSchema),
});
export type Properties155 = Schema.From<typeof Properties155Schema>;

export const Spec3Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties155Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec3 = Schema.From<typeof Spec3Schema>;

export const NamespaceV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec3Schema),
  "status": Schema.lazy(() => BraggadociousStatusSchema),
});
export type NamespaceV1Properties = Schema.From<typeof NamespaceV1PropertiesSchema>;

export const NamespaceV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NamespaceV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type NamespaceV1 = Schema.From<typeof NamespaceV1Schema>;

export const MutatingwebhookAdmissionregistrationV1PropertiesSchema = Schema.struct({
  "admissionReviewVersions": Schema.lazy(() => ValuesClassSchema),
  "clientConfig": Schema.lazy(() => ClientConfigSchema),
  "failurePolicy": Schema.lazy(() => DriverSchema),
  "matchPolicy": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "namespaceSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "objectSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "reinvocationPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "rules": Schema.lazy(() => PurpleRulesSchema),
  "sideEffects": Schema.lazy(() => DriverSchema),
  "timeoutSeconds": Schema.lazy(() => LastTransitionTimeSchema),
});
export type MutatingwebhookAdmissionregistrationV1Properties = Schema.From<typeof MutatingwebhookAdmissionregistrationV1PropertiesSchema>;

export const ValidatingwebhookSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => MutatingwebhookAdmissionregistrationV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Validatingwebhook = Schema.From<typeof ValidatingwebhookSchema>;

export const MetrictargetSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CurrentPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Metrictarget = Schema.From<typeof MetrictargetSchema>;

export const MetricstatusAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "external": Schema.lazy(() => StickyExternalSchema),
  "object": Schema.lazy(() => TentacledObjectSchema),
  "pods": Schema.lazy(() => StickyExternalSchema),
  "resource": Schema.lazy(() => StickyResourceSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type MetricstatusAutoscalingV2Beta2Properties = Schema.From<typeof MetricstatusAutoscalingV2Beta2PropertiesSchema>;

export const MetricstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => MetricstatusAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Metricstatus = Schema.From<typeof MetricstatusSchema>;

export const MetricstatusAutoscalingV2Beta1PropertiesSchema = Schema.struct({
  "external": Schema.lazy(() => FluffyExternalSchema),
  "object": Schema.lazy(() => PurpleObjectSchema),
  "pods": Schema.lazy(() => FluffyPodsSchema),
  "resource": Schema.lazy(() => FluffyResourceSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type MetricstatusAutoscalingV2Beta1Properties = Schema.From<typeof MetricstatusAutoscalingV2Beta1PropertiesSchema>;

export const MetricstatusAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => MetricstatusAutoscalingV2Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type MetricstatusAutoscalingV2Beta1 = Schema.From<typeof MetricstatusAutoscalingV2Beta1Schema>;

export const MetricspecAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "external": Schema.lazy(() => TentacledExternalSchema),
  "object": Schema.lazy(() => FluffyObjectSchema),
  "pods": Schema.lazy(() => TentacledExternalSchema),
  "resource": Schema.lazy(() => TentacledResourceSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type MetricspecAutoscalingV2Beta2Properties = Schema.From<typeof MetricspecAutoscalingV2Beta2PropertiesSchema>;

export const MetricspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => MetricspecAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Metricspec = Schema.From<typeof MetricspecSchema>;

export const MetricspecAutoscalingV2Beta1PropertiesSchema = Schema.struct({
  "external": Schema.lazy(() => PurpleExternalSchema),
  "object": Schema.lazy(() => PurpleObjectSchema),
  "pods": Schema.lazy(() => PurplePodsSchema),
  "resource": Schema.lazy(() => PurpleResourceSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type MetricspecAutoscalingV2Beta1Properties = Schema.From<typeof MetricspecAutoscalingV2Beta1PropertiesSchema>;

export const MetricspecAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => MetricspecAutoscalingV2Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type MetricspecAutoscalingV2Beta1 = Schema.From<typeof MetricspecAutoscalingV2Beta1Schema>;

export const MetricidentifierAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => DriverSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
});
export type MetricidentifierAutoscalingV2Beta2Properties = Schema.From<typeof MetricidentifierAutoscalingV2Beta2PropertiesSchema>;

export const MetricidentifierSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => MetricidentifierAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Metricidentifier = Schema.From<typeof MetricidentifierSchema>;

export const LocalvolumesourceV1PropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "path": Schema.lazy(() => DriverSchema),
});
export type LocalvolumesourceV1Properties = Schema.From<typeof LocalvolumesourceV1PropertiesSchema>;

export const LocalvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LocalvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HostPathRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Localvolumesource = Schema.From<typeof LocalvolumesourceSchema>;

export const LocalsubjectaccessreviewPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec2Schema),
  "status": Schema.lazy(() => MischievousStatusSchema),
});
export type LocalsubjectaccessreviewProperties = Schema.From<typeof LocalsubjectaccessreviewPropertiesSchema>;

export const SubjectaccessreviewSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LocalsubjectaccessreviewPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Subjectaccessreview = Schema.From<typeof SubjectaccessreviewSchema>;

export const Properties154Schema = Schema.struct({
  "allowed": Schema.lazy(() => GroupVersionSchema),
  "denied": Schema.lazy(() => DriverSchema),
  "evaluationError": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
});
export type Properties154 = Schema.From<typeof Properties154Schema>;

export const MischievousStatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties154Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type MischievousStatus = Schema.From<typeof MischievousStatusSchema>;

export const Properties153Schema = Schema.struct({
  "extra": Schema.lazy(() => ExtraSchema),
  "groups": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "nonResourceAttributes": Schema.lazy(() => NonResourceAttributesSchema),
  "resourceAttributes": Schema.lazy(() => ResourceAttributesSchema),
  "uid": Schema.lazy(() => DriverSchema),
  "user": Schema.lazy(() => DriverSchema),
  "group": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
});
export type Properties153 = Schema.From<typeof Properties153Schema>;

export const Spec2Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties153Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec2 = Schema.From<typeof Spec2Schema>;

export const LocalsubjectaccessreviewAuthorizationV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec2Schema),
  "status": Schema.lazy(() => MischievousStatusSchema),
});
export type LocalsubjectaccessreviewAuthorizationV1Properties = Schema.From<typeof LocalsubjectaccessreviewAuthorizationV1PropertiesSchema>;

export const SubjectaccessreviewAuthorizationV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LocalsubjectaccessreviewAuthorizationV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type SubjectaccessreviewAuthorizationV1Beta1 = Schema.From<typeof SubjectaccessreviewAuthorizationV1Beta1Schema>;

export const LimitresponseFlowcontrolV1Alpha1PropertiesSchema = Schema.struct({
  "queuing": Schema.lazy(() => QueuingClassSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type LimitresponseFlowcontrolV1Alpha1Properties = Schema.From<typeof LimitresponseFlowcontrolV1Alpha1PropertiesSchema>;

export const LimitresponseSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LimitresponseFlowcontrolV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-unions": Schema.array(Schema.lazy(() => LimitResponseXKubernetesUnionSchema)),
  "$schema": Schema.string,
});
export type Limitresponse = Schema.From<typeof LimitresponseSchema>;

export const FluffyLimitsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => LimitsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyLimits = Schema.From<typeof FluffyLimitsSchema>;

export const LimitrangespecV1PropertiesSchema = Schema.struct({
  "limits": Schema.lazy(() => FluffyLimitsSchema),
});
export type LimitrangespecV1Properties = Schema.From<typeof LimitrangespecV1PropertiesSchema>;

export const LimitrangespecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LimitrangespecV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Limitrangespec = Schema.From<typeof LimitrangespecSchema>;

export const LimitrangeitemV1PropertiesSchema = Schema.struct({
  "default": Schema.lazy(() => DefaultSchema),
  "defaultRequest": Schema.lazy(() => DefaultSchema),
  "max": Schema.lazy(() => DefaultSchema),
  "maxLimitRequestRatio": Schema.lazy(() => DefaultSchema),
  "min": Schema.lazy(() => DefaultSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type LimitrangeitemV1Properties = Schema.From<typeof LimitrangeitemV1PropertiesSchema>;

export const LimitrangeitemSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LimitrangeitemV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Limitrangeitem = Schema.From<typeof LimitrangeitemSchema>;

export const KeySchema = Schema.struct({
  "description": Schema.string,
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type Key = Schema.From<typeof KeySchema>;

export const LabelselectorrequirementMetaV1PropertiesSchema = Schema.struct({
  "key": Schema.lazy(() => KeySchema),
  "operator": Schema.lazy(() => DriverSchema),
  "values": Schema.lazy(() => CategoriesSchema),
});
export type LabelselectorrequirementMetaV1Properties = Schema.From<typeof LabelselectorrequirementMetaV1PropertiesSchema>;

export const LabelselectorrequirementSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LabelselectorrequirementMetaV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => LabelselectorrequirementMetaV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Labelselectorrequirement = Schema.From<typeof LabelselectorrequirementSchema>;

export const KeytopathV1PropertiesSchema = Schema.struct({
  "key": Schema.lazy(() => DriverSchema),
  "mode": Schema.lazy(() => LastTransitionTimeSchema),
  "path": Schema.lazy(() => DriverSchema),
});
export type KeytopathV1Properties = Schema.From<typeof KeytopathV1PropertiesSchema>;

export const KeytopathSchema = Schema.struct({
  "description": Schema.lazy(() => KeytopathV1DescriptionSchema),
  "properties": Schema.lazy(() => KeytopathV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HostPathRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Keytopath = Schema.From<typeof KeytopathSchema>;

export const JobspecBatchV1PropertiesSchema = Schema.struct({
  "activeDeadlineSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "backoffLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "completions": Schema.lazy(() => LastTransitionTimeSchema),
  "manualSelector": Schema.lazy(() => DriverSchema),
  "parallelism": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
  "template": Schema.lazy(() => PurpleTemplateSchema),
  "ttlSecondsAfterFinished": Schema.lazy(() => LastTransitionTimeSchema),
});
export type JobspecBatchV1Properties = Schema.From<typeof JobspecBatchV1PropertiesSchema>;

export const JobspecSchema = Schema.struct({
  "description": Schema.lazy(() => JobspecBatchV1DescriptionSchema),
  "properties": Schema.lazy(() => JobspecBatchV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => JobspecBatchV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Jobspec = Schema.From<typeof JobspecSchema>;

export const Items105Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => JobPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items105 = Schema.From<typeof Items105Schema>;

export const Items104Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items105Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items104 = Schema.From<typeof Items104Schema>;

export const JoblistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items104Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type JoblistProperties = Schema.From<typeof JoblistPropertiesSchema>;

export const JoblistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => JoblistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Joblist = Schema.From<typeof JoblistSchema>;

export const Items103Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => JobBatchV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items103 = Schema.From<typeof Items103Schema>;

export const Items102Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items103Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items102 = Schema.From<typeof Items102Schema>;

export const JoblistBatchV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items102Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type JoblistBatchV1Properties = Schema.From<typeof JoblistBatchV1PropertiesSchema>;

export const JoblistBatchV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => JoblistBatchV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type JoblistBatchV1 = Schema.From<typeof JoblistBatchV1Schema>;

export const JobPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => AmbitiousSpecSchema),
  "status": Schema.lazy(() => FriskyStatusSchema),
});
export type JobProperties = Schema.From<typeof JobPropertiesSchema>;

export const JobSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => JobPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Job = Schema.From<typeof JobSchema>;

export const Properties152Schema = Schema.struct({
  "active": Schema.lazy(() => LastTransitionTimeSchema),
  "completionTime": Schema.lazy(() => LastTransitionTimeSchema),
  "conditions": Schema.lazy(() => StickyConditionsSchema),
  "failed": Schema.lazy(() => LastTransitionTimeSchema),
  "startTime": Schema.lazy(() => LastTransitionTimeSchema),
  "succeeded": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties152 = Schema.From<typeof Properties152Schema>;

export const FriskyStatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties152Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FriskyStatus = Schema.From<typeof FriskyStatusSchema>;

export const JobBatchV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => AmbitiousSpecSchema),
  "status": Schema.lazy(() => FriskyStatusSchema),
});
export type JobBatchV1Properties = Schema.From<typeof JobBatchV1PropertiesSchema>;

export const JobBatchV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => JobBatchV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type JobBatchV1 = Schema.From<typeof JobBatchV1Schema>;

export const IscsivolumesourceV1PropertiesSchema = Schema.struct({
  "chapAuthDiscovery": Schema.lazy(() => DriverSchema),
  "chapAuthSession": Schema.lazy(() => DriverSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "initiatorName": Schema.lazy(() => DriverSchema),
  "iqn": Schema.lazy(() => DriverSchema),
  "iscsiInterface": Schema.lazy(() => DriverSchema),
  "lun": Schema.lazy(() => LastTransitionTimeSchema),
  "portals": Schema.lazy(() => CategoriesSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ItemsClassSchema),
  "targetPortal": Schema.lazy(() => DriverSchema),
});
export type IscsivolumesourceV1Properties = Schema.From<typeof IscsivolumesourceV1PropertiesSchema>;

export const IscsivolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IscsivolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => IscsiRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Iscsivolumesource = Schema.From<typeof IscsivolumesourceSchema>;

export const IscsipersistentvolumesourceV1PropertiesSchema = Schema.struct({
  "chapAuthDiscovery": Schema.lazy(() => DriverSchema),
  "chapAuthSession": Schema.lazy(() => DriverSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "initiatorName": Schema.lazy(() => DriverSchema),
  "iqn": Schema.lazy(() => DriverSchema),
  "iscsiInterface": Schema.lazy(() => DriverSchema),
  "lun": Schema.lazy(() => LastTransitionTimeSchema),
  "portals": Schema.lazy(() => CategoriesSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "targetPortal": Schema.lazy(() => DriverSchema),
});
export type IscsipersistentvolumesourceV1Properties = Schema.From<typeof IscsipersistentvolumesourceV1PropertiesSchema>;

export const IscsipersistentvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IscsipersistentvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => IscsiRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Iscsipersistentvolumesource = Schema.From<typeof IscsipersistentvolumesourceSchema>;

export const IpblockNetworkingV1PropertiesSchema = Schema.struct({
  "cidr": Schema.lazy(() => DriverSchema),
  "except": Schema.lazy(() => CategoriesSchema),
});
export type IpblockNetworkingV1Properties = Schema.From<typeof IpblockNetworkingV1PropertiesSchema>;

export const IpblockSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IpblockNetworkingV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => IpBlockRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Ipblock = Schema.From<typeof IpblockSchema>;

export const QuantitySchema = Schema.struct({
  "oneOf": Schema.array(Schema.lazy(() => OneOfSchema)),
  "$schema": Schema.string,
  "type": Schema.lazy(() => TypeElementSchema),
});
export type Quantity = Schema.From<typeof QuantitySchema>;

export const Items101Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IngressPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items101 = Schema.From<typeof Items101Schema>;

export const Items100Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items101Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items100 = Schema.From<typeof Items100Schema>;

export const IngresslistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items100Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type IngresslistProperties = Schema.From<typeof IngresslistPropertiesSchema>;

export const IngresslistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IngresslistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Ingresslist = Schema.From<typeof IngresslistSchema>;

export const Items99Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IngressExtensionsV1Beta1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items99 = Schema.From<typeof Items99Schema>;

export const Items98Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items99Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items98 = Schema.From<typeof Items98Schema>;

export const IngresslistExtensionsV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items98Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type IngresslistExtensionsV1Beta1Properties = Schema.From<typeof IngresslistExtensionsV1Beta1PropertiesSchema>;

export const IngresslistNetworkingV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IngresslistExtensionsV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type IngresslistNetworkingV1Beta1 = Schema.From<typeof IngresslistNetworkingV1Beta1Schema>;

export const Items97Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items25Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type Items97 = Schema.From<typeof Items97Schema>;

export const IngressclasslistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items97Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type IngressclasslistProperties = Schema.From<typeof IngressclasslistPropertiesSchema>;

export const IngressclasslistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IngressclasslistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Ingressclasslist = Schema.From<typeof IngressclasslistSchema>;

export const Items96Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items23Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type Items96 = Schema.From<typeof Items96Schema>;

export const IngressclasslistNetworkingV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items96Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type IngressclasslistNetworkingV1Beta1Properties = Schema.From<typeof IngressclasslistNetworkingV1Beta1PropertiesSchema>;

export const IngressclasslistNetworkingV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IngressclasslistNetworkingV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type IngressclasslistNetworkingV1Beta1 = Schema.From<typeof IngressclasslistNetworkingV1Beta1Schema>;

export const IngressPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec1Schema),
  "status": Schema.lazy(() => MagentaStatusSchema),
});
export type IngressProperties = Schema.From<typeof IngressPropertiesSchema>;

export const IngressSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IngressPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Ingress = Schema.From<typeof IngressSchema>;

export const Properties151Schema = Schema.struct({
  "loadBalancer": Schema.lazy(() => LoadBalancerSchema),
});
export type Properties151 = Schema.From<typeof Properties151Schema>;

export const MagentaStatusSchema = Schema.struct({
  "description": Schema.lazy(() => StatusDescriptionSchema),
  "properties": Schema.lazy(() => Properties151Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type MagentaStatus = Schema.From<typeof MagentaStatusSchema>;

export const Properties150Schema = Schema.struct({
  "backend": Schema.lazy(() => PurpleBackendSchema),
  "ingressClassName": Schema.lazy(() => DriverSchema),
  "rules": Schema.lazy(() => FluffyRulesSchema),
  "tls": Schema.lazy(() => TlsSchema),
});
export type Properties150 = Schema.From<typeof Properties150Schema>;

export const Spec1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties150Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Spec1 = Schema.From<typeof Spec1Schema>;

export const IngressExtensionsV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => Spec1Schema),
  "status": Schema.lazy(() => MagentaStatusSchema),
});
export type IngressExtensionsV1Beta1Properties = Schema.From<typeof IngressExtensionsV1Beta1PropertiesSchema>;

export const IngressNetworkingV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IngressExtensionsV1Beta1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type IngressNetworkingV1Beta1 = Schema.From<typeof IngressNetworkingV1Beta1Schema>;

export const InfoPkgVersionPropertiesSchema = Schema.struct({
  "buildDate": Schema.lazy(() => BuildDateSchema),
  "compiler": Schema.lazy(() => BuildDateSchema),
  "gitCommit": Schema.lazy(() => BuildDateSchema),
  "gitTreeState": Schema.lazy(() => BuildDateSchema),
  "gitVersion": Schema.lazy(() => BuildDateSchema),
  "goVersion": Schema.lazy(() => BuildDateSchema),
  "major": Schema.lazy(() => BuildDateSchema),
  "minor": Schema.lazy(() => BuildDateSchema),
  "platform": Schema.lazy(() => BuildDateSchema),
});
export type InfoPkgVersionProperties = Schema.From<typeof InfoPkgVersionPropertiesSchema>;

export const InfoSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => InfoPkgVersionPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Info = Schema.From<typeof InfoSchema>;

export const FluffyPathsSchema = Schema.struct({
  "description": Schema.lazy(() => PathsDescriptionSchema),
  "items": Schema.lazy(() => PathsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyPaths = Schema.From<typeof FluffyPathsSchema>;

export const HttpingressrulevalueExtensionsV1Beta1PropertiesSchema = Schema.struct({
  "paths": Schema.lazy(() => FluffyPathsSchema),
});
export type HttpingressrulevalueExtensionsV1Beta1Properties = Schema.From<typeof HttpingressrulevalueExtensionsV1Beta1PropertiesSchema>;

export const HttpingressrulevalueSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HttpingressrulevalueExtensionsV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HttpRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Httpingressrulevalue = Schema.From<typeof HttpingressrulevalueSchema>;

export const HttpingresspathExtensionsV1Beta1PropertiesSchema = Schema.struct({
  "backend": Schema.lazy(() => PurpleBackendSchema),
  "path": Schema.lazy(() => DriverSchema),
  "pathType": Schema.lazy(() => DriverSchema),
});
export type HttpingresspathExtensionsV1Beta1Properties = Schema.From<typeof HttpingresspathExtensionsV1Beta1PropertiesSchema>;

export const HttpingresspathSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HttpingresspathExtensionsV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HttpingresspathExtensionsV1Beta1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Httpingresspath = Schema.From<typeof HttpingresspathSchema>;

export const HttpheaderV1PropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => DriverSchema),
  "value": Schema.lazy(() => DriverSchema),
});
export type HttpheaderV1Properties = Schema.From<typeof HttpheaderV1PropertiesSchema>;

export const SysctlSchema = Schema.struct({
  "description": Schema.lazy(() => HttpheaderV1DescriptionSchema),
  "properties": Schema.lazy(() => HttpheaderV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HttpheaderV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Sysctl = Schema.From<typeof SysctlSchema>;

export const HttpgetactionSchema = Schema.struct({
  "description": Schema.lazy(() => HttpGetDescriptionSchema),
  "properties": Schema.lazy(() => HttpGetPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HttpGetRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Httpgetaction = Schema.From<typeof HttpgetactionSchema>;

export const HpascalingpolicyAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "periodSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "type": Schema.lazy(() => DriverSchema),
  "value": Schema.lazy(() => LastTransitionTimeSchema),
});
export type HpascalingpolicyAutoscalingV2Beta2Properties = Schema.From<typeof HpascalingpolicyAutoscalingV2Beta2PropertiesSchema>;

export const HpascalingpolicySchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HpascalingpolicyAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HpascalingpolicyAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Hpascalingpolicy = Schema.From<typeof HpascalingpolicySchema>;

export const HostportrangePolicyV1Beta1PropertiesSchema = Schema.struct({
  "max": Schema.lazy(() => LastTransitionTimeSchema),
  "min": Schema.lazy(() => LastTransitionTimeSchema),
});
export type HostportrangePolicyV1Beta1Properties = Schema.From<typeof HostportrangePolicyV1Beta1PropertiesSchema>;

export const IdrangeSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HostportrangePolicyV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HostportrangePolicyV1Beta1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Idrange = Schema.From<typeof IdrangeSchema>;

export const HostpathvolumesourceV1PropertiesSchema = Schema.struct({
  "path": Schema.lazy(() => DriverSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type HostpathvolumesourceV1Properties = Schema.From<typeof HostpathvolumesourceV1PropertiesSchema>;

export const HostpathvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HostpathvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HostPathRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Hostpathvolumesource = Schema.From<typeof HostpathvolumesourceSchema>;

export const HorizontalpodautoscalerstatusAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "conditions": Schema.lazy(() => HilariousConditionsSchema),
  "currentMetrics": Schema.lazy(() => FluffyCurrentMetricsSchema),
  "currentReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "desiredReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "lastScaleTime": Schema.lazy(() => LastTransitionTimeSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
});
export type HorizontalpodautoscalerstatusAutoscalingV2Beta2Properties = Schema.From<typeof HorizontalpodautoscalerstatusAutoscalingV2Beta2PropertiesSchema>;

export const HorizontalpodautoscalerstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerstatusAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => StatusRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Horizontalpodautoscalerstatus = Schema.From<typeof HorizontalpodautoscalerstatusSchema>;

export const HorizontalpodautoscalerstatusAutoscalingV2Beta1PropertiesSchema = Schema.struct({
  "conditions": Schema.lazy(() => HilariousConditionsSchema),
  "currentMetrics": Schema.lazy(() => PurpleCurrentMetricsSchema),
  "currentReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "desiredReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "lastScaleTime": Schema.lazy(() => LastTransitionTimeSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
});
export type HorizontalpodautoscalerstatusAutoscalingV2Beta1Properties = Schema.From<typeof HorizontalpodautoscalerstatusAutoscalingV2Beta1PropertiesSchema>;

export const HorizontalpodautoscalerstatusAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerstatusAutoscalingV2Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => StatusRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type HorizontalpodautoscalerstatusAutoscalingV2Beta1 = Schema.From<typeof HorizontalpodautoscalerstatusAutoscalingV2Beta1Schema>;

export const HorizontalpodautoscalerstatusAutoscalingV1PropertiesSchema = Schema.struct({
  "currentCPUUtilizationPercentage": Schema.lazy(() => LastTransitionTimeSchema),
  "currentReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "desiredReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "lastScaleTime": Schema.lazy(() => LastTransitionTimeSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
});
export type HorizontalpodautoscalerstatusAutoscalingV1Properties = Schema.From<typeof HorizontalpodautoscalerstatusAutoscalingV1PropertiesSchema>;

export const HorizontalpodautoscalerstatusAutoscalingV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerstatusAutoscalingV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => StatusRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type HorizontalpodautoscalerstatusAutoscalingV1 = Schema.From<typeof HorizontalpodautoscalerstatusAutoscalingV1Schema>;

export const HorizontalpodautoscalerspecAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "behavior": Schema.lazy(() => BehaviorSchema),
  "maxReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "metrics": Schema.lazy(() => FluffyMetricsSchema),
  "minReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "scaleTargetRef": Schema.lazy(() => ParametersClassSchema),
});
export type HorizontalpodautoscalerspecAutoscalingV2Beta2Properties = Schema.From<typeof HorizontalpodautoscalerspecAutoscalingV2Beta2PropertiesSchema>;

export const HorizontalpodautoscalerspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerspecAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Horizontalpodautoscalerspec = Schema.From<typeof HorizontalpodautoscalerspecSchema>;

export const HorizontalpodautoscalerspecAutoscalingV1PropertiesSchema = Schema.struct({
  "maxReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "minReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "scaleTargetRef": Schema.lazy(() => ParametersClassSchema),
  "targetCPUUtilizationPercentage": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "metrics": Schema.optional(Schema.union(Schema.lazy(() => PurpleMetricsSchema), Schema.null)),
});
export type HorizontalpodautoscalerspecAutoscalingV1Properties = Schema.From<typeof HorizontalpodautoscalerspecAutoscalingV1PropertiesSchema>;

export const HorizontalpodautoscalerspecAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerspecAutoscalingV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type HorizontalpodautoscalerspecAutoscalingV2Beta1 = Schema.From<typeof HorizontalpodautoscalerspecAutoscalingV2Beta1Schema>;

export const Items95Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items95 = Schema.From<typeof Items95Schema>;

export const Items94Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items95Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items94 = Schema.From<typeof Items94Schema>;

export const HorizontalpodautoscalerlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items94Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type HorizontalpodautoscalerlistProperties = Schema.From<typeof HorizontalpodautoscalerlistPropertiesSchema>;

export const HorizontalpodautoscalerlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Horizontalpodautoscalerlist = Schema.From<typeof HorizontalpodautoscalerlistSchema>;

export const Items93Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerAutoscalingV2Beta2PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items93 = Schema.From<typeof Items93Schema>;

export const Items92Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items93Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items92 = Schema.From<typeof Items92Schema>;

export const HorizontalpodautoscalerlistAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items92Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type HorizontalpodautoscalerlistAutoscalingV2Beta2Properties = Schema.From<typeof HorizontalpodautoscalerlistAutoscalingV2Beta2PropertiesSchema>;

export const HorizontalpodautoscalerlistAutoscalingV2Beta2Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerlistAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type HorizontalpodautoscalerlistAutoscalingV2Beta2 = Schema.From<typeof HorizontalpodautoscalerlistAutoscalingV2Beta2Schema>;

export const Items91Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerAutoscalingV2Beta1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items91 = Schema.From<typeof Items91Schema>;

export const Items90Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items91Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items90 = Schema.From<typeof Items90Schema>;

export const HorizontalpodautoscalerlistAutoscalingV2Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items90Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type HorizontalpodautoscalerlistAutoscalingV2Beta1Properties = Schema.From<typeof HorizontalpodautoscalerlistAutoscalingV2Beta1PropertiesSchema>;

export const HorizontalpodautoscalerlistAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerlistAutoscalingV2Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type HorizontalpodautoscalerlistAutoscalingV2Beta1 = Schema.From<typeof HorizontalpodautoscalerlistAutoscalingV2Beta1Schema>;

export const Items89Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerAutoscalingV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items89 = Schema.From<typeof Items89Schema>;

export const Items88Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items89Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items88 = Schema.From<typeof Items88Schema>;

export const HorizontalpodautoscalerlistAutoscalingV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items88Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type HorizontalpodautoscalerlistAutoscalingV1Properties = Schema.From<typeof HorizontalpodautoscalerlistAutoscalingV1PropertiesSchema>;

export const HorizontalpodautoscalerlistAutoscalingV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerlistAutoscalingV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type HorizontalpodautoscalerlistAutoscalingV1 = Schema.From<typeof HorizontalpodautoscalerlistAutoscalingV1Schema>;

export const HorizontalpodautoscalerPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => BraggadociousSpecSchema),
  "status": Schema.lazy(() => CunningStatusSchema),
});
export type HorizontalpodautoscalerProperties = Schema.From<typeof HorizontalpodautoscalerPropertiesSchema>;

export const HorizontalpodautoscalerSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Horizontalpodautoscaler = Schema.From<typeof HorizontalpodautoscalerSchema>;

export const Properties149Schema = Schema.struct({
  "current": Schema.lazy(() => FluffyCurrentSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
});
export type Properties149 = Schema.From<typeof Properties149Schema>;

export const StickyResourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties149Schema),
  "required": Schema.array(Schema.lazy(() => ResourcemetricstatusAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type StickyResource = Schema.From<typeof StickyResourceSchema>;

export const Properties148Schema = Schema.struct({
  "current": Schema.lazy(() => FluffyCurrentSchema),
  "describedObject": Schema.lazy(() => PurpleScaleTargetRefSchema),
  "metric": Schema.lazy(() => FluffyMetricSchema),
});
export type Properties148 = Schema.From<typeof Properties148Schema>;

export const TentacledObjectSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties148Schema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricstatusAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TentacledObject = Schema.From<typeof TentacledObjectSchema>;

export const FluffyCurrentSchema = Schema.struct({
  "description": Schema.lazy(() => CurrentDescriptionSchema),
  "properties": Schema.lazy(() => CurrentPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type FluffyCurrent = Schema.From<typeof FluffyCurrentSchema>;

export const Properties147Schema = Schema.struct({
  "current": Schema.lazy(() => FluffyCurrentSchema),
  "metric": Schema.lazy(() => FluffyMetricSchema),
});
export type Properties147 = Schema.From<typeof Properties147Schema>;

export const StickyExternalSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties147Schema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricstatusAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type StickyExternal = Schema.From<typeof StickyExternalSchema>;

export const Properties146Schema = Schema.struct({
  "external": Schema.lazy(() => StickyExternalSchema),
  "object": Schema.lazy(() => TentacledObjectSchema),
  "pods": Schema.lazy(() => StickyExternalSchema),
  "resource": Schema.lazy(() => StickyResourceSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
});
export type Properties146 = Schema.From<typeof Properties146Schema>;

export const Items87Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties146Schema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items87 = Schema.From<typeof Items87Schema>;

export const FluffyCurrentMetricsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items87Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyCurrentMetrics = Schema.From<typeof FluffyCurrentMetricsSchema>;

export const Properties145Schema = Schema.struct({
  "conditions": Schema.lazy(() => MagentaConditionsSchema),
  "currentMetrics": Schema.lazy(() => FluffyCurrentMetricsSchema),
  "currentReplicas": Schema.lazy(() => GroupPriorityMinimumSchema),
  "desiredReplicas": Schema.lazy(() => GroupPriorityMinimumSchema),
  "lastScaleTime": Schema.lazy(() => LastTransitionTimeSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties145 = Schema.From<typeof Properties145Schema>;

export const CunningStatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties145Schema),
  "required": Schema.array(Schema.lazy(() => StatusRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type CunningStatus = Schema.From<typeof CunningStatusSchema>;

export const Properties144Schema = Schema.struct({
  "name": Schema.lazy(() => GroupVersionSchema),
  "target": Schema.lazy(() => FluffyTargetSchema),
});
export type Properties144 = Schema.From<typeof Properties144Schema>;

export const TentacledResourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties144Schema),
  "required": Schema.array(Schema.lazy(() => ResourcemetricsourceAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TentacledResource = Schema.From<typeof TentacledResourceSchema>;

export const Properties143Schema = Schema.struct({
  "describedObject": Schema.lazy(() => PurpleScaleTargetRefSchema),
  "metric": Schema.lazy(() => FluffyMetricSchema),
  "target": Schema.lazy(() => FluffyTargetSchema),
});
export type Properties143 = Schema.From<typeof Properties143Schema>;

export const FluffyObjectSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties143Schema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricsourceAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyObject = Schema.From<typeof FluffyObjectSchema>;

export const FluffyTargetSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CurrentPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type FluffyTarget = Schema.From<typeof FluffyTargetSchema>;

export const FluffyMetricSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => MetricPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type FluffyMetric = Schema.From<typeof FluffyMetricSchema>;

export const Properties142Schema = Schema.struct({
  "metric": Schema.lazy(() => FluffyMetricSchema),
  "target": Schema.lazy(() => FluffyTargetSchema),
});
export type Properties142 = Schema.From<typeof Properties142Schema>;

export const TentacledExternalSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties142Schema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricsourceAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TentacledExternal = Schema.From<typeof TentacledExternalSchema>;

export const Properties141Schema = Schema.struct({
  "external": Schema.lazy(() => TentacledExternalSchema),
  "object": Schema.lazy(() => FluffyObjectSchema),
  "pods": Schema.lazy(() => TentacledExternalSchema),
  "resource": Schema.lazy(() => TentacledResourceSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
});
export type Properties141 = Schema.From<typeof Properties141Schema>;

export const Items86Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties141Schema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items86 = Schema.From<typeof Items86Schema>;

export const FluffyMetricsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items86Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyMetrics = Schema.From<typeof FluffyMetricsSchema>;

export const BehaviorPropertiesSchema = Schema.struct({
  "scaleDown": Schema.lazy(() => ScaleDownClassSchema),
  "scaleUp": Schema.lazy(() => ScaleDownClassSchema),
});
export type BehaviorProperties = Schema.From<typeof BehaviorPropertiesSchema>;

export const BehaviorSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => BehaviorPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Behavior = Schema.From<typeof BehaviorSchema>;

export const Properties140Schema = Schema.struct({
  "behavior": Schema.lazy(() => BehaviorSchema),
  "maxReplicas": Schema.lazy(() => GroupPriorityMinimumSchema),
  "metrics": Schema.lazy(() => FluffyMetricsSchema),
  "minReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "scaleTargetRef": Schema.lazy(() => PurpleScaleTargetRefSchema),
});
export type Properties140 = Schema.From<typeof Properties140Schema>;

export const BraggadociousSpecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties140Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type BraggadociousSpec = Schema.From<typeof BraggadociousSpecSchema>;

export const HorizontalpodautoscalerAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => BraggadociousSpecSchema),
  "status": Schema.lazy(() => CunningStatusSchema),
});
export type HorizontalpodautoscalerAutoscalingV2Beta2Properties = Schema.From<typeof HorizontalpodautoscalerAutoscalingV2Beta2PropertiesSchema>;

export const HorizontalpodautoscalerAutoscalingV2Beta2Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerAutoscalingV2Beta2PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type HorizontalpodautoscalerAutoscalingV2Beta2 = Schema.From<typeof HorizontalpodautoscalerAutoscalingV2Beta2Schema>;

export const Properties139Schema = Schema.struct({
  "currentAverageUtilization": Schema.lazy(() => LastTransitionTimeSchema),
  "currentAverageValue": Schema.lazy(() => TargetAverageValueSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
});
export type Properties139 = Schema.From<typeof Properties139Schema>;

export const FluffyResourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties139Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyResource = Schema.From<typeof FluffyResourceSchema>;

export const Properties138Schema = Schema.struct({
  "currentAverageValue": Schema.lazy(() => TargetAverageValueSchema),
  "metricName": Schema.lazy(() => GroupVersionSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
});
export type Properties138 = Schema.From<typeof Properties138Schema>;

export const FluffyPodsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties138Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyPods = Schema.From<typeof FluffyPodsSchema>;

export const Properties137Schema = Schema.struct({
  "currentAverageValue": Schema.lazy(() => TargetAverageValueSchema),
  "currentValue": Schema.lazy(() => TargetAverageValueSchema),
  "metricName": Schema.lazy(() => GroupVersionSchema),
  "metricSelector": Schema.lazy(() => MetricSelectorClassSchema),
});
export type Properties137 = Schema.From<typeof Properties137Schema>;

export const FluffyExternalSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties137Schema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricsourceAutoscalingV2Beta1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyExternal = Schema.From<typeof FluffyExternalSchema>;

export const Properties136Schema = Schema.struct({
  "external": Schema.lazy(() => FluffyExternalSchema),
  "object": Schema.lazy(() => PurpleObjectSchema),
  "pods": Schema.lazy(() => FluffyPodsSchema),
  "resource": Schema.lazy(() => FluffyResourceSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
});
export type Properties136 = Schema.From<typeof Properties136Schema>;

export const Items85Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties136Schema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items85 = Schema.From<typeof Items85Schema>;

export const PurpleCurrentMetricsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items85Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleCurrentMetrics = Schema.From<typeof PurpleCurrentMetricsSchema>;

export const MagentaConditionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items15Schema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type MagentaConditions = Schema.From<typeof MagentaConditionsSchema>;

export const Properties135Schema = Schema.struct({
  "conditions": Schema.lazy(() => MagentaConditionsSchema),
  "currentMetrics": Schema.lazy(() => PurpleCurrentMetricsSchema),
  "currentReplicas": Schema.lazy(() => GroupPriorityMinimumSchema),
  "desiredReplicas": Schema.lazy(() => GroupPriorityMinimumSchema),
  "lastScaleTime": Schema.lazy(() => LastTransitionTimeSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties135 = Schema.From<typeof Properties135Schema>;

export const AmbitiousStatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties135Schema),
  "required": Schema.array(Schema.lazy(() => StatusRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AmbitiousStatus = Schema.From<typeof AmbitiousStatusSchema>;

export const HorizontalpodautoscalerAutoscalingV2Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => MischievousSpecSchema),
  "status": Schema.lazy(() => AmbitiousStatusSchema),
});
export type HorizontalpodautoscalerAutoscalingV2Beta1Properties = Schema.From<typeof HorizontalpodautoscalerAutoscalingV2Beta1PropertiesSchema>;

export const HorizontalpodautoscalerAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerAutoscalingV2Beta1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type HorizontalpodautoscalerAutoscalingV2Beta1 = Schema.From<typeof HorizontalpodautoscalerAutoscalingV2Beta1Schema>;

export const Properties134Schema = Schema.struct({
  "currentCPUUtilizationPercentage": Schema.lazy(() => LastTransitionTimeSchema),
  "currentReplicas": Schema.lazy(() => GroupPriorityMinimumSchema),
  "desiredReplicas": Schema.lazy(() => GroupPriorityMinimumSchema),
  "lastScaleTime": Schema.lazy(() => LastTransitionTimeSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties134 = Schema.From<typeof Properties134Schema>;

export const HilariousStatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties134Schema),
  "required": Schema.array(Schema.lazy(() => StatusRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type HilariousStatus = Schema.From<typeof HilariousStatusSchema>;

export const Properties133Schema = Schema.struct({
  "name": Schema.lazy(() => GroupVersionSchema),
  "targetAverageUtilization": Schema.lazy(() => LastTransitionTimeSchema),
  "targetAverageValue": Schema.lazy(() => TargetAverageValueSchema),
});
export type Properties133 = Schema.From<typeof Properties133Schema>;

export const PurpleResourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties133Schema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleResource = Schema.From<typeof PurpleResourceSchema>;

export const Properties132Schema = Schema.struct({
  "metricName": Schema.lazy(() => GroupVersionSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
  "targetAverageValue": Schema.lazy(() => TargetAverageValueSchema),
});
export type Properties132 = Schema.From<typeof Properties132Schema>;

export const PurplePodsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties132Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurplePods = Schema.From<typeof PurplePodsSchema>;

export const PurpleScaleTargetRefSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ScaleTargetRefPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type PurpleScaleTargetRef = Schema.From<typeof PurpleScaleTargetRefSchema>;

export const Properties131Schema = Schema.struct({
  "averageValue": Schema.lazy(() => TargetAverageValueSchema),
  "metricName": Schema.lazy(() => GroupVersionSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
  "target": Schema.lazy(() => PurpleScaleTargetRefSchema),
  "targetValue": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "currentValue": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
});
export type Properties131 = Schema.From<typeof Properties131Schema>;

export const PurpleObjectSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties131Schema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricsourceAutoscalingV2Beta1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleObject = Schema.From<typeof PurpleObjectSchema>;

export const Properties130Schema = Schema.struct({
  "metricName": Schema.lazy(() => GroupVersionSchema),
  "metricSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "targetAverageValue": Schema.lazy(() => TargetAverageValueSchema),
  "targetValue": Schema.lazy(() => TargetAverageValueSchema),
});
export type Properties130 = Schema.From<typeof Properties130Schema>;

export const PurpleExternalSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties130Schema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricsourceAutoscalingV2Beta1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleExternal = Schema.From<typeof PurpleExternalSchema>;

export const Properties129Schema = Schema.struct({
  "external": Schema.lazy(() => PurpleExternalSchema),
  "object": Schema.lazy(() => PurpleObjectSchema),
  "pods": Schema.lazy(() => PurplePodsSchema),
  "resource": Schema.lazy(() => PurpleResourceSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
});
export type Properties129 = Schema.From<typeof Properties129Schema>;

export const Items84Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties129Schema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items84 = Schema.From<typeof Items84Schema>;

export const PurpleMetricsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items84Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleMetrics = Schema.From<typeof PurpleMetricsSchema>;

export const Properties128Schema = Schema.struct({
  "maxReplicas": Schema.lazy(() => GroupPriorityMinimumSchema),
  "minReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "scaleTargetRef": Schema.lazy(() => PurpleScaleTargetRefSchema),
  "targetCPUUtilizationPercentage": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "metrics": Schema.optional(Schema.union(Schema.lazy(() => PurpleMetricsSchema), Schema.null)),
});
export type Properties128 = Schema.From<typeof Properties128Schema>;

export const MischievousSpecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties128Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type MischievousSpec = Schema.From<typeof MischievousSpecSchema>;

export const HorizontalpodautoscalerAutoscalingV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => MischievousSpecSchema),
  "status": Schema.lazy(() => HilariousStatusSchema),
});
export type HorizontalpodautoscalerAutoscalingV1Properties = Schema.From<typeof HorizontalpodautoscalerAutoscalingV1PropertiesSchema>;

export const HorizontalpodautoscalerAutoscalingV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HorizontalpodautoscalerAutoscalingV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type HorizontalpodautoscalerAutoscalingV1 = Schema.From<typeof HorizontalpodautoscalerAutoscalingV1Schema>;

export const GroupversionfordiscoveryMetaV1PropertiesSchema = Schema.struct({
  "groupVersion": Schema.lazy(() => DriverSchema),
  "version": Schema.lazy(() => DriverSchema),
});
export type GroupversionfordiscoveryMetaV1Properties = Schema.From<typeof GroupversionfordiscoveryMetaV1PropertiesSchema>;

export const GroupversionfordiscoverySchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => GroupversionfordiscoveryMetaV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PreferredVersionRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Groupversionfordiscovery = Schema.From<typeof GroupversionfordiscoverySchema>;

export const GlusterfspersistentvolumesourceV1PropertiesSchema = Schema.struct({
  "endpoints": Schema.lazy(() => DriverSchema),
  "endpointsNamespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "path": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
});
export type GlusterfspersistentvolumesourceV1Properties = Schema.From<typeof GlusterfspersistentvolumesourceV1PropertiesSchema>;

export const GlusterfsvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => GlusterfspersistentvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => GlusterfsRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Glusterfsvolumesource = Schema.From<typeof GlusterfsvolumesourceSchema>;

export const GitrepovolumesourceV1PropertiesSchema = Schema.struct({
  "directory": Schema.lazy(() => DriverSchema),
  "repository": Schema.lazy(() => DriverSchema),
  "revision": Schema.lazy(() => DriverSchema),
});
export type GitrepovolumesourceV1Properties = Schema.From<typeof GitrepovolumesourceV1PropertiesSchema>;

export const GitrepovolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => GitrepovolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => GitRepoRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Gitrepovolumesource = Schema.From<typeof GitrepovolumesourceSchema>;

export const GcepersistentdiskvolumesourceV1PropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "partition": Schema.lazy(() => LastTransitionTimeSchema),
  "pdName": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
});
export type GcepersistentdiskvolumesourceV1Properties = Schema.From<typeof GcepersistentdiskvolumesourceV1PropertiesSchema>;

export const GcepersistentdiskvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => GcepersistentdiskvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => GcePersistentDiskRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Gcepersistentdiskvolumesource = Schema.From<typeof GcepersistentdiskvolumesourceSchema>;

export const FlowschemaspecFlowcontrolV1Alpha1PropertiesSchema = Schema.struct({
  "distinguisherMethod": Schema.lazy(() => DistinguisherMethodSchema),
  "matchingPrecedence": Schema.lazy(() => LastTransitionTimeSchema),
  "priorityLevelConfiguration": Schema.lazy(() => PriorityLevelConfigurationSchema),
  "rules": Schema.lazy(() => TentacledRulesSchema),
});
export type FlowschemaspecFlowcontrolV1Alpha1Properties = Schema.From<typeof FlowschemaspecFlowcontrolV1Alpha1PropertiesSchema>;

export const FlowschemaspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FlowschemaspecFlowcontrolV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Flowschemaspec = Schema.From<typeof FlowschemaspecSchema>;

export const Items83Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FlowschemaPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items83 = Schema.From<typeof Items83Schema>;

export const Items82Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items83Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type Items82 = Schema.From<typeof Items82Schema>;

export const FlowschemalistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items82Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type FlowschemalistProperties = Schema.From<typeof FlowschemalistPropertiesSchema>;

export const FlowschemalistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FlowschemalistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Flowschemalist = Schema.From<typeof FlowschemalistSchema>;

export const Items81Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FlowschemaFlowcontrolV1Alpha1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items81 = Schema.From<typeof Items81Schema>;

export const Items80Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items81Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type Items80 = Schema.From<typeof Items80Schema>;

export const FlowschemalistFlowcontrolV1Alpha1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items80Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type FlowschemalistFlowcontrolV1Alpha1Properties = Schema.From<typeof FlowschemalistFlowcontrolV1Alpha1PropertiesSchema>;

export const FlowschemalistFlowcontrolV1Alpha1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FlowschemalistFlowcontrolV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type FlowschemalistFlowcontrolV1Alpha1 = Schema.From<typeof FlowschemalistFlowcontrolV1Alpha1Schema>;

export const FlowschemaPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => FriskySpecSchema),
  "status": Schema.lazy(() => IndecentStatusSchema),
});
export type FlowschemaProperties = Schema.From<typeof FlowschemaPropertiesSchema>;

export const FlowschemaSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FlowschemaPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Flowschema = Schema.From<typeof FlowschemaSchema>;

export const Items79Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiserviceconditionApiregistrationV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items79 = Schema.From<typeof Items79Schema>;

export const CunningConditionsSchema = Schema.struct({
  "description": Schema.lazy(() => ConditionsDescriptionSchema),
  "items": Schema.lazy(() => Items79Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-map-keys": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type CunningConditions = Schema.From<typeof CunningConditionsSchema>;

export const Properties127Schema = Schema.struct({
  "conditions": Schema.lazy(() => CunningConditionsSchema),
});
export type Properties127 = Schema.From<typeof Properties127Schema>;

export const IndecentStatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties127Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type IndecentStatus = Schema.From<typeof IndecentStatusSchema>;

export const TentacledFieldsToDiscriminateBySchema = Schema.struct({
  "group": Schema.string,
  "serviceAccount": Schema.string,
  "user": Schema.string,
});
export type TentacledFieldsToDiscriminateBy = Schema.From<typeof TentacledFieldsToDiscriminateBySchema>;

export const ItemsXKubernetesUnionSchema = Schema.struct({
  "discriminator": Schema.lazy(() => ScaleTargetRefRequiredSchema),
  "fields-to-discriminateBy": Schema.lazy(() => TentacledFieldsToDiscriminateBySchema),
});
export type ItemsXKubernetesUnion = Schema.From<typeof ItemsXKubernetesUnionSchema>;

export const ServiceAccountPropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => GroupVersionSchema),
  "namespace": Schema.lazy(() => GroupVersionSchema),
});
export type ServiceAccountProperties = Schema.From<typeof ServiceAccountPropertiesSchema>;

export const ServiceAccountSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServiceAccountPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ServiceAccount = Schema.From<typeof ServiceAccountSchema>;

export const Properties126Schema = Schema.struct({
  "group": Schema.lazy(() => PriorityLevelConfigurationSchema),
  "kind": Schema.lazy(() => GroupVersionSchema),
  "serviceAccount": Schema.lazy(() => ServiceAccountSchema),
  "user": Schema.lazy(() => PriorityLevelConfigurationSchema),
});
export type Properties126 = Schema.From<typeof Properties126Schema>;

export const SubjectsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties126Schema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-unions": Schema.array(Schema.lazy(() => ItemsXKubernetesUnionSchema)),
});
export type SubjectsItems = Schema.From<typeof SubjectsItemsSchema>;

export const FluffySubjectsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => SubjectsItemsSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type FluffySubjects = Schema.From<typeof FluffySubjectsSchema>;

export const NonResourceUrLsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => BuildDateSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type NonResourceUrLs = Schema.From<typeof NonResourceUrLsSchema>;

export const Properties125Schema = Schema.struct({
  "apiGroups": Schema.lazy(() => ConversionReviewVersionsSchema),
  "clusterScope": Schema.lazy(() => DriverSchema),
  "namespaces": Schema.lazy(() => NonResourceUrLsSchema),
  "resources": Schema.lazy(() => ConversionReviewVersionsSchema),
  "verbs": Schema.lazy(() => ConversionReviewVersionsSchema),
});
export type Properties125 = Schema.From<typeof Properties125Schema>;

export const Items78Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties125Schema),
  "required": Schema.array(Schema.lazy(() => ResourcepolicyruleFlowcontrolV1Alpha1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items78 = Schema.From<typeof Items78Schema>;

export const PurpleResourceRulesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items78Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type PurpleResourceRules = Schema.From<typeof PurpleResourceRulesSchema>;

export const Properties124Schema = Schema.struct({
  "nonResourceURLs": Schema.lazy(() => ConversionReviewVersionsSchema),
  "verbs": Schema.lazy(() => ConversionReviewVersionsSchema),
});
export type Properties124 = Schema.From<typeof Properties124Schema>;

export const Items77Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties124Schema),
  "required": Schema.array(Schema.lazy(() => NonresourcepolicyruleFlowcontrolV1Alpha1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items77 = Schema.From<typeof Items77Schema>;

export const PurpleNonResourceRulesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items77Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type PurpleNonResourceRules = Schema.From<typeof PurpleNonResourceRulesSchema>;

export const Properties123Schema = Schema.struct({
  "nonResourceRules": Schema.lazy(() => PurpleNonResourceRulesSchema),
  "resourceRules": Schema.lazy(() => PurpleResourceRulesSchema),
  "subjects": Schema.lazy(() => FluffySubjectsSchema),
});
export type Properties123 = Schema.From<typeof Properties123Schema>;

export const Items76Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties123Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items76 = Schema.From<typeof Items76Schema>;

export const TentacledRulesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items76Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type TentacledRules = Schema.From<typeof TentacledRulesSchema>;

export const PurplePriorityLevelConfigurationSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PriorityLevelConfigurationPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type PurplePriorityLevelConfiguration = Schema.From<typeof PurplePriorityLevelConfigurationSchema>;

export const DistinguisherMethodPropertiesSchema = Schema.struct({
  "type": Schema.lazy(() => GroupVersionSchema),
});
export type DistinguisherMethodProperties = Schema.From<typeof DistinguisherMethodPropertiesSchema>;

export const DistinguisherMethodSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DistinguisherMethodPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type DistinguisherMethod = Schema.From<typeof DistinguisherMethodSchema>;

export const Properties122Schema = Schema.struct({
  "distinguisherMethod": Schema.lazy(() => DistinguisherMethodSchema),
  "matchingPrecedence": Schema.lazy(() => LastTransitionTimeSchema),
  "priorityLevelConfiguration": Schema.lazy(() => PurplePriorityLevelConfigurationSchema),
  "rules": Schema.lazy(() => TentacledRulesSchema),
});
export type Properties122 = Schema.From<typeof Properties122Schema>;

export const FriskySpecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties122Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FriskySpec = Schema.From<typeof FriskySpecSchema>;

export const FlowschemaFlowcontrolV1Alpha1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => FriskySpecSchema),
  "status": Schema.lazy(() => IndecentStatusSchema),
});
export type FlowschemaFlowcontrolV1Alpha1Properties = Schema.From<typeof FlowschemaFlowcontrolV1Alpha1PropertiesSchema>;

export const FlowschemaFlowcontrolV1Alpha1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FlowschemaFlowcontrolV1Alpha1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type FlowschemaFlowcontrolV1Alpha1 = Schema.From<typeof FlowschemaFlowcontrolV1Alpha1Schema>;

export const FlowdistinguishermethodFlowcontrolV1Alpha1PropertiesSchema = Schema.struct({
  "type": Schema.lazy(() => DriverSchema),
});
export type FlowdistinguishermethodFlowcontrolV1Alpha1Properties = Schema.From<typeof FlowdistinguishermethodFlowcontrolV1Alpha1PropertiesSchema>;

export const FlowdistinguishermethodSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FlowdistinguishermethodFlowcontrolV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Flowdistinguishermethod = Schema.From<typeof FlowdistinguishermethodSchema>;

export const FlexvolumesourceV1PropertiesSchema = Schema.struct({
  "driver": Schema.lazy(() => DriverSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "options": Schema.lazy(() => VolumeAttributesClassSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ItemsClassSchema),
});
export type FlexvolumesourceV1Properties = Schema.From<typeof FlexvolumesourceV1PropertiesSchema>;

export const FlexvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FlexvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CsiRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Flexvolumesource = Schema.From<typeof FlexvolumesourceSchema>;

export const FlexpersistentvolumesourceV1PropertiesSchema = Schema.struct({
  "driver": Schema.lazy(() => DriverSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "options": Schema.lazy(() => VolumeAttributesClassSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
});
export type FlexpersistentvolumesourceV1Properties = Schema.From<typeof FlexpersistentvolumesourceV1PropertiesSchema>;

export const FlexpersistentvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FlexpersistentvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CsiRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Flexpersistentvolumesource = Schema.From<typeof FlexpersistentvolumesourceSchema>;

export const PurpleCurrentSchema = Schema.struct({
  "description": Schema.lazy(() => CurrentDescriptionSchema),
  "properties": Schema.lazy(() => CurrentPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleCurrent = Schema.From<typeof PurpleCurrentSchema>;

export const ExternalmetricstatusAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "current": Schema.lazy(() => PurpleCurrentSchema),
  "metric": Schema.lazy(() => PurpleMetricSchema),
});
export type ExternalmetricstatusAutoscalingV2Beta2Properties = Schema.From<typeof ExternalmetricstatusAutoscalingV2Beta2PropertiesSchema>;

export const PodsmetricstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ExternalmetricstatusAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricstatusAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Podsmetricstatus = Schema.From<typeof PodsmetricstatusSchema>;

export const ExternalmetricstatusAutoscalingV2Beta1PropertiesSchema = Schema.struct({
  "currentAverageValue": Schema.lazy(() => TargetAverageValueSchema),
  "currentValue": Schema.lazy(() => TargetAverageValueSchema),
  "metricName": Schema.lazy(() => DriverSchema),
  "metricSelector": Schema.lazy(() => MetricSelectorClassSchema),
});
export type ExternalmetricstatusAutoscalingV2Beta1Properties = Schema.From<typeof ExternalmetricstatusAutoscalingV2Beta1PropertiesSchema>;

export const ExternalmetricstatusAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ExternalmetricstatusAutoscalingV2Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricsourceAutoscalingV2Beta1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type ExternalmetricstatusAutoscalingV2Beta1 = Schema.From<typeof ExternalmetricstatusAutoscalingV2Beta1Schema>;

export const CurrentPropertiesSchema = Schema.struct({
  "averageUtilization": Schema.lazy(() => LastTransitionTimeSchema),
  "averageValue": Schema.lazy(() => TargetAverageValueSchema),
  "type": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
  "value": Schema.lazy(() => TargetAverageValueSchema),
});
export type CurrentProperties = Schema.From<typeof CurrentPropertiesSchema>;

export const PurpleTargetSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CurrentPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleTarget = Schema.From<typeof PurpleTargetSchema>;

export const MetricPropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => GroupVersionSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
});
export type MetricProperties = Schema.From<typeof MetricPropertiesSchema>;

export const PurpleMetricSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => MetricPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleMetric = Schema.From<typeof PurpleMetricSchema>;

export const ExternalmetricsourceAutoscalingV2Beta2PropertiesSchema = Schema.struct({
  "metric": Schema.lazy(() => PurpleMetricSchema),
  "target": Schema.lazy(() => PurpleTargetSchema),
});
export type ExternalmetricsourceAutoscalingV2Beta2Properties = Schema.From<typeof ExternalmetricsourceAutoscalingV2Beta2PropertiesSchema>;

export const PodsmetricsourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ExternalmetricsourceAutoscalingV2Beta2PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricsourceAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Podsmetricsource = Schema.From<typeof PodsmetricsourceSchema>;

export const ExternalmetricsourceAutoscalingV2Beta1PropertiesSchema = Schema.struct({
  "metricName": Schema.lazy(() => DriverSchema),
  "metricSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "targetAverageValue": Schema.lazy(() => TargetAverageValueSchema),
  "targetValue": Schema.lazy(() => TargetAverageValueSchema),
});
export type ExternalmetricsourceAutoscalingV2Beta1Properties = Schema.From<typeof ExternalmetricsourceAutoscalingV2Beta1PropertiesSchema>;

export const ExternalmetricsourceAutoscalingV2Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ExternalmetricsourceAutoscalingV2Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ExternalmetricsourceAutoscalingV2Beta1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type ExternalmetricsourceAutoscalingV2Beta1 = Schema.From<typeof ExternalmetricsourceAutoscalingV2Beta1Schema>;

export const EventseriesSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EventseriesEventsV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => SeriesRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Eventseries = Schema.From<typeof EventseriesSchema>;

export const Properties121Schema = Schema.struct({
  "action": Schema.lazy(() => DriverSchema),
  "apiVersion": Schema.lazy(() => DriverSchema),
  "deprecatedCount": Schema.lazy(() => LastTransitionTimeSchema),
  "deprecatedFirstTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "deprecatedLastTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "deprecatedSource": Schema.lazy(() => DeprecatedSourceClassSchema),
  "eventTime": Schema.lazy(() => GroupPriorityMinimumSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "note": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "regarding": Schema.lazy(() => TargetRefSchema),
  "related": Schema.lazy(() => TargetRefSchema),
  "reportingController": Schema.lazy(() => DriverSchema),
  "reportingInstance": Schema.lazy(() => DriverSchema),
  "series": Schema.lazy(() => PurpleSeriesSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type Properties121 = Schema.From<typeof Properties121Schema>;

export const Items75Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties121Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items75 = Schema.From<typeof Items75Schema>;

export const Items74Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items75Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items74 = Schema.From<typeof Items74Schema>;

export const EventlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items74Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type EventlistProperties = Schema.From<typeof EventlistPropertiesSchema>;

export const EventlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EventlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Eventlist = Schema.From<typeof EventlistSchema>;

export const TentacledMetadataSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties26Schema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type TentacledMetadata = Schema.From<typeof TentacledMetadataSchema>;

export const ObjectreferenceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TargetRefPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
});
export type Objectreference = Schema.From<typeof ObjectreferenceSchema>;

export const Properties120Schema = Schema.struct({
  "action": Schema.lazy(() => DriverSchema),
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "count": Schema.lazy(() => LastTransitionTimeSchema),
  "eventTime": Schema.lazy(() => LastTransitionTimeSchema),
  "firstTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "involvedObject": Schema.lazy(() => ObjectreferenceSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "lastTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => DriverSchema),
  "metadata": Schema.lazy(() => TentacledMetadataSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "related": Schema.lazy(() => TargetRefSchema),
  "reportingComponent": Schema.lazy(() => DriverSchema),
  "reportingInstance": Schema.lazy(() => DriverSchema),
  "series": Schema.lazy(() => FluffySeriesSchema),
  "source": Schema.lazy(() => DeprecatedSourceClassSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type Properties120 = Schema.From<typeof Properties120Schema>;

export const Items73Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties120Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items73 = Schema.From<typeof Items73Schema>;

export const Items72Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items73Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items72 = Schema.From<typeof Items72Schema>;

export const EventlistV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items72Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type EventlistV1Properties = Schema.From<typeof EventlistV1PropertiesSchema>;

export const EventlistV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EventlistV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type EventlistV1 = Schema.From<typeof EventlistV1Schema>;

export const Properties119Schema = Schema.struct({
  "action": Schema.lazy(() => DriverSchema),
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "deprecatedCount": Schema.lazy(() => LastTransitionTimeSchema),
  "deprecatedFirstTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "deprecatedLastTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "deprecatedSource": Schema.lazy(() => DeprecatedSourceClassSchema),
  "eventTime": Schema.lazy(() => GroupPriorityMinimumSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "note": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "regarding": Schema.lazy(() => TargetRefSchema),
  "related": Schema.lazy(() => TargetRefSchema),
  "reportingController": Schema.lazy(() => DriverSchema),
  "reportingInstance": Schema.lazy(() => DriverSchema),
  "series": Schema.lazy(() => PurpleSeriesSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type Properties119 = Schema.From<typeof Properties119Schema>;

export const Items71Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties119Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items71 = Schema.From<typeof Items71Schema>;

export const Items70Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items71Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items70 = Schema.From<typeof Items70Schema>;

export const EventlistEventsV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items70Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type EventlistEventsV1Beta1Properties = Schema.From<typeof EventlistEventsV1Beta1PropertiesSchema>;

export const EventlistEventsV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EventlistEventsV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type EventlistEventsV1Beta1 = Schema.From<typeof EventlistEventsV1Beta1Schema>;

export const EventPropertiesSchema = Schema.struct({
  "action": Schema.lazy(() => DriverSchema),
  "apiVersion": Schema.lazy(() => DriverSchema),
  "deprecatedCount": Schema.lazy(() => LastTransitionTimeSchema),
  "deprecatedFirstTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "deprecatedLastTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "deprecatedSource": Schema.lazy(() => DeprecatedSourceClassSchema),
  "eventTime": Schema.lazy(() => LastTransitionTimeSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "note": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "regarding": Schema.lazy(() => TargetRefSchema),
  "related": Schema.lazy(() => TargetRefSchema),
  "reportingController": Schema.lazy(() => DriverSchema),
  "reportingInstance": Schema.lazy(() => DriverSchema),
  "series": Schema.lazy(() => PurpleSeriesSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type EventProperties = Schema.From<typeof EventPropertiesSchema>;

export const EventSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EventPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Event = Schema.From<typeof EventSchema>;

export const EventseriesEventsV1Beta1PropertiesSchema = Schema.struct({
  "count": Schema.lazy(() => LastTransitionTimeSchema),
  "lastObservedTime": Schema.lazy(() => LastTransitionTimeSchema),
  "state": Schema.lazy(() => DriverSchema),
});
export type EventseriesEventsV1Beta1Properties = Schema.From<typeof EventseriesEventsV1Beta1PropertiesSchema>;

export const FluffySeriesSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EventseriesEventsV1Beta1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffySeries = Schema.From<typeof FluffySeriesSchema>;

export const EventV1PropertiesSchema = Schema.struct({
  "action": Schema.lazy(() => DriverSchema),
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "count": Schema.lazy(() => LastTransitionTimeSchema),
  "eventTime": Schema.lazy(() => LastTransitionTimeSchema),
  "firstTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "involvedObject": Schema.lazy(() => TargetRefSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "lastTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => DriverSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "related": Schema.lazy(() => TargetRefSchema),
  "reportingComponent": Schema.lazy(() => DriverSchema),
  "reportingInstance": Schema.lazy(() => DriverSchema),
  "series": Schema.lazy(() => FluffySeriesSchema),
  "source": Schema.lazy(() => DeprecatedSourceClassSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type EventV1Properties = Schema.From<typeof EventV1PropertiesSchema>;

export const EventV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EventV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type EventV1 = Schema.From<typeof EventV1Schema>;

export const Properties118Schema = Schema.struct({
  "count": Schema.lazy(() => GroupPriorityMinimumSchema),
  "lastObservedTime": Schema.lazy(() => GroupPriorityMinimumSchema),
  "state": Schema.lazy(() => GroupVersionSchema),
});
export type Properties118 = Schema.From<typeof Properties118Schema>;

export const PurpleSeriesSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties118Schema),
  "required": Schema.array(Schema.lazy(() => SeriesRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleSeries = Schema.From<typeof PurpleSeriesSchema>;

export const DeprecatedSourcePropertiesSchema = Schema.struct({
  "component": Schema.lazy(() => DriverSchema),
  "host": Schema.lazy(() => DriverSchema),
});
export type DeprecatedSourceProperties = Schema.From<typeof DeprecatedSourcePropertiesSchema>;

export const DeprecatedSourceClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DeprecatedSourcePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type DeprecatedSourceClass = Schema.From<typeof DeprecatedSourceClassSchema>;

export const EventEventsV1Beta1PropertiesSchema = Schema.struct({
  "action": Schema.lazy(() => DriverSchema),
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "deprecatedCount": Schema.lazy(() => LastTransitionTimeSchema),
  "deprecatedFirstTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "deprecatedLastTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "deprecatedSource": Schema.lazy(() => DeprecatedSourceClassSchema),
  "eventTime": Schema.lazy(() => LastTransitionTimeSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "note": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "regarding": Schema.lazy(() => TargetRefSchema),
  "related": Schema.lazy(() => TargetRefSchema),
  "reportingController": Schema.lazy(() => DriverSchema),
  "reportingInstance": Schema.lazy(() => DriverSchema),
  "series": Schema.lazy(() => PurpleSeriesSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type EventEventsV1Beta1Properties = Schema.From<typeof EventEventsV1Beta1PropertiesSchema>;

export const EventEventsV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EventEventsV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type EventEventsV1Beta1 = Schema.From<typeof EventEventsV1Beta1Schema>;

export const EphemeralcontainerV1PropertiesSchema = Schema.struct({
  "args": Schema.lazy(() => CategoriesSchema),
  "command": Schema.lazy(() => CategoriesSchema),
  "env": Schema.lazy(() => PurpleEnvSchema),
  "envFrom": Schema.lazy(() => EnvFromSchema),
  "image": Schema.lazy(() => DriverSchema),
  "imagePullPolicy": Schema.lazy(() => DriverSchema),
  "lifecycle": Schema.lazy(() => LifecycleClassSchema),
  "livenessProbe": Schema.lazy(() => LivenessProbeClassSchema),
  "name": Schema.lazy(() => DriverSchema),
  "ports": Schema.lazy(() => TentacledPortsSchema),
  "readinessProbe": Schema.lazy(() => LivenessProbeClassSchema),
  "resources": Schema.lazy(() => PurpleResourcesSchema),
  "securityContext": Schema.lazy(() => PurpleSecurityContextSchema),
  "startupProbe": Schema.lazy(() => LivenessProbeClassSchema),
  "stdin": Schema.lazy(() => DriverSchema),
  "stdinOnce": Schema.lazy(() => DriverSchema),
  "targetContainerName": Schema.lazy(() => DriverSchema),
  "terminationMessagePath": Schema.lazy(() => DriverSchema),
  "terminationMessagePolicy": Schema.lazy(() => DriverSchema),
  "tty": Schema.lazy(() => DriverSchema),
  "volumeDevices": Schema.lazy(() => VolumeDevicesSchema),
  "volumeMounts": Schema.lazy(() => PurpleVolumeMountsSchema),
  "workingDir": Schema.lazy(() => DriverSchema),
});
export type EphemeralcontainerV1Properties = Schema.From<typeof EphemeralcontainerV1PropertiesSchema>;

export const EphemeralcontainerSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EphemeralcontainerV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Ephemeralcontainer = Schema.From<typeof EphemeralcontainerSchema>;

export const EnvvarV1PropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => DriverSchema),
  "value": Schema.lazy(() => DriverSchema),
  "valueFrom": Schema.lazy(() => ValueFromSchema),
});
export type EnvvarV1Properties = Schema.From<typeof EnvvarV1PropertiesSchema>;

export const EnvvarSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EnvvarV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Envvar = Schema.From<typeof EnvvarSchema>;

export const Properties117Schema = Schema.struct({
  "addressType": Schema.lazy(() => GroupVersionSchema),
  "apiVersion": Schema.lazy(() => DriverSchema),
  "endpoints": Schema.lazy(() => FluffyEndpointsSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "ports": Schema.lazy(() => HilariousPortsSchema),
});
export type Properties117 = Schema.From<typeof Properties117Schema>;

export const Items69Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties117Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items69 = Schema.From<typeof Items69Schema>;

export const Items68Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items69Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type Items68 = Schema.From<typeof Items68Schema>;

export const EndpointslicelistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items68Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type EndpointslicelistProperties = Schema.From<typeof EndpointslicelistPropertiesSchema>;

export const EndpointslicelistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EndpointslicelistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Endpointslicelist = Schema.From<typeof EndpointslicelistSchema>;

export const FluffyEndpointsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => EndpointsItemsSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type FluffyEndpoints = Schema.From<typeof FluffyEndpointsSchema>;

export const Properties116Schema = Schema.struct({
  "addressType": Schema.lazy(() => GroupVersionSchema),
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "endpoints": Schema.lazy(() => FluffyEndpointsSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "ports": Schema.lazy(() => HilariousPortsSchema),
});
export type Properties116 = Schema.From<typeof Properties116Schema>;

export const Items67Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties116Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items67 = Schema.From<typeof Items67Schema>;

export const Items66Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items67Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type Items66 = Schema.From<typeof Items66Schema>;

export const EndpointslicelistDiscoveryV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items66Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type EndpointslicelistDiscoveryV1Beta1Properties = Schema.From<typeof EndpointslicelistDiscoveryV1Beta1PropertiesSchema>;

export const EndpointslicelistDiscoveryV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EndpointslicelistDiscoveryV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type EndpointslicelistDiscoveryV1Beta1 = Schema.From<typeof EndpointslicelistDiscoveryV1Beta1Schema>;

export const EndpointslicePropertiesSchema = Schema.struct({
  "addressType": Schema.lazy(() => DriverSchema),
  "apiVersion": Schema.lazy(() => DriverSchema),
  "endpoints": Schema.lazy(() => PurpleEndpointsSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "ports": Schema.lazy(() => HilariousPortsSchema),
});
export type EndpointsliceProperties = Schema.From<typeof EndpointslicePropertiesSchema>;

export const EndpointsliceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EndpointslicePropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Endpointslice = Schema.From<typeof EndpointsliceSchema>;

export const Properties115Schema = Schema.struct({
  "appProtocol": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "port": Schema.lazy(() => LastTransitionTimeSchema),
  "protocol": Schema.lazy(() => DriverSchema),
});
export type Properties115 = Schema.From<typeof Properties115Schema>;

export const Items65Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties115Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items65 = Schema.From<typeof Items65Schema>;

export const HilariousPortsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items65Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type HilariousPorts = Schema.From<typeof HilariousPortsSchema>;

export const Properties114Schema = Schema.struct({
  "addresses": Schema.lazy(() => ConversionReviewVersionsSchema),
  "conditions": Schema.lazy(() => AmbitiousConditionsSchema),
  "hostname": Schema.lazy(() => DriverSchema),
  "targetRef": Schema.lazy(() => TargetRefSchema),
  "topology": Schema.lazy(() => VolumeAttributesClassSchema),
});
export type Properties114 = Schema.From<typeof Properties114Schema>;

export const EndpointsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties114Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type EndpointsItems = Schema.From<typeof EndpointsItemsSchema>;

export const PurpleEndpointsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => EndpointsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
});
export type PurpleEndpoints = Schema.From<typeof PurpleEndpointsSchema>;

export const EndpointsliceDiscoveryV1Beta1PropertiesSchema = Schema.struct({
  "addressType": Schema.lazy(() => DriverSchema),
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "endpoints": Schema.lazy(() => PurpleEndpointsSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "ports": Schema.lazy(() => HilariousPortsSchema),
});
export type EndpointsliceDiscoveryV1Beta1Properties = Schema.From<typeof EndpointsliceDiscoveryV1Beta1PropertiesSchema>;

export const EndpointsliceDiscoveryV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EndpointsliceDiscoveryV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type EndpointsliceDiscoveryV1Beta1 = Schema.From<typeof EndpointsliceDiscoveryV1Beta1Schema>;

export const EndpointaddressV1PropertiesSchema = Schema.struct({
  "hostname": Schema.lazy(() => DriverSchema),
  "ip": Schema.lazy(() => DriverSchema),
  "nodeName": Schema.lazy(() => DriverSchema),
  "targetRef": Schema.lazy(() => TargetRefSchema),
});
export type EndpointaddressV1Properties = Schema.From<typeof EndpointaddressV1PropertiesSchema>;

export const EndpointaddressSchema = Schema.struct({
  "description": Schema.lazy(() => EndpointaddressV1DescriptionSchema),
  "properties": Schema.lazy(() => EndpointaddressV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Endpointaddress = Schema.From<typeof EndpointaddressSchema>;

export const ConditionsPropertiesSchema = Schema.struct({
  "ready": Schema.lazy(() => DriverSchema),
});
export type ConditionsProperties = Schema.From<typeof ConditionsPropertiesSchema>;

export const AmbitiousConditionsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConditionsPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AmbitiousConditions = Schema.From<typeof AmbitiousConditionsSchema>;

export const EndpointDiscoveryV1Beta1PropertiesSchema = Schema.struct({
  "addresses": Schema.lazy(() => CategoriesSchema),
  "conditions": Schema.lazy(() => AmbitiousConditionsSchema),
  "hostname": Schema.lazy(() => DriverSchema),
  "targetRef": Schema.lazy(() => TargetRefSchema),
  "topology": Schema.lazy(() => VolumeAttributesClassSchema),
});
export type EndpointDiscoveryV1Beta1Properties = Schema.From<typeof EndpointDiscoveryV1Beta1PropertiesSchema>;

export const EndpointSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EndpointDiscoveryV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Endpoint = Schema.From<typeof EndpointSchema>;

export const DownwardapivolumefileV1PropertiesSchema = Schema.struct({
  "fieldRef": Schema.lazy(() => FieldRefSchema),
  "mode": Schema.lazy(() => LastTransitionTimeSchema),
  "path": Schema.lazy(() => DriverSchema),
  "resourceFieldRef": Schema.lazy(() => ResourceFieldRefSchema),
});
export type DownwardapivolumefileV1Properties = Schema.From<typeof DownwardapivolumefileV1PropertiesSchema>;

export const DownwardapivolumefileSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DownwardapivolumefileV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HostPathRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Downwardapivolumefile = Schema.From<typeof DownwardapivolumefileSchema>;

export const DeploymentspecAppsV1PropertiesSchema = Schema.struct({
  "minReadySeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "paused": Schema.lazy(() => DriverSchema),
  "progressDeadlineSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
  "revisionHistoryLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
  "strategy": Schema.lazy(() => StrategySchema),
  "template": Schema.lazy(() => PurpleTemplateSchema),
});
export type DeploymentspecAppsV1Properties = Schema.From<typeof DeploymentspecAppsV1PropertiesSchema>;

export const DeploymentspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DeploymentspecAppsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Deploymentspec = Schema.From<typeof DeploymentspecSchema>;

export const Items64Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DeploymentPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items64 = Schema.From<typeof Items64Schema>;

export const Items63Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items64Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items63 = Schema.From<typeof Items63Schema>;

export const DeploymentlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items63Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type DeploymentlistProperties = Schema.From<typeof DeploymentlistPropertiesSchema>;

export const DeploymentlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DeploymentlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Deploymentlist = Schema.From<typeof DeploymentlistSchema>;

export const Items62Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DeploymentAppsV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items62 = Schema.From<typeof Items62Schema>;

export const Items61Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items62Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items61 = Schema.From<typeof Items61Schema>;

export const DeploymentlistAppsV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items61Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type DeploymentlistAppsV1Properties = Schema.From<typeof DeploymentlistAppsV1PropertiesSchema>;

export const DeploymentlistAppsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DeploymentlistAppsV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type DeploymentlistAppsV1 = Schema.From<typeof DeploymentlistAppsV1Schema>;

export const DeploymentPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => MagentaSpecSchema),
  "status": Schema.lazy(() => IndigoStatusSchema),
});
export type DeploymentProperties = Schema.From<typeof DeploymentPropertiesSchema>;

export const DeploymentSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DeploymentPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Deployment = Schema.From<typeof DeploymentSchema>;

export const Properties113Schema = Schema.struct({
  "availableReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "collisionCount": Schema.lazy(() => LastTransitionTimeSchema),
  "conditions": Schema.lazy(() => StickyConditionsSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
  "readyReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
  "unavailableReplicas": Schema.lazy(() => LastTransitionTimeSchema),
  "updatedReplicas": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties113 = Schema.From<typeof Properties113Schema>;

export const IndigoStatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties113Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type IndigoStatus = Schema.From<typeof IndigoStatusSchema>;

export const StrategyPropertiesSchema = Schema.struct({
  "rollingUpdate": Schema.lazy(() => PurpleRollingUpdateSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type StrategyProperties = Schema.From<typeof StrategyPropertiesSchema>;

export const StrategySchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StrategyPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Strategy = Schema.From<typeof StrategySchema>;

export const Properties112Schema = Schema.struct({
  "minReadySeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "paused": Schema.lazy(() => DriverSchema),
  "progressDeadlineSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "replicas": Schema.lazy(() => LastTransitionTimeSchema),
  "revisionHistoryLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => LabelselectorSchema),
  "strategy": Schema.lazy(() => StrategySchema),
  "template": Schema.lazy(() => PodtemplatespecV1Schema),
});
export type Properties112 = Schema.From<typeof Properties112Schema>;

export const MagentaSpecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties112Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type MagentaSpec = Schema.From<typeof MagentaSpecSchema>;

export const DeploymentAppsV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => MagentaSpecSchema),
  "status": Schema.lazy(() => IndigoStatusSchema),
});
export type DeploymentAppsV1Properties = Schema.From<typeof DeploymentAppsV1PropertiesSchema>;

export const DeploymentAppsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DeploymentAppsV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type DeploymentAppsV1 = Schema.From<typeof DeploymentAppsV1Schema>;

export const DeleteoptionsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DeleteoptionsPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Deleteoptions = Schema.From<typeof DeleteoptionsSchema>;

export const DeleteoptionsMetaV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DeleteoptionsMetaV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type DeleteoptionsMetaV1 = Schema.From<typeof DeleteoptionsMetaV1Schema>;

export const DaemonsetstatusAppsV1PropertiesSchema = Schema.struct({
  "collisionCount": Schema.lazy(() => LastTransitionTimeSchema),
  "conditions": Schema.lazy(() => StagesClassSchema),
  "currentNumberScheduled": Schema.lazy(() => LastTransitionTimeSchema),
  "desiredNumberScheduled": Schema.lazy(() => LastTransitionTimeSchema),
  "numberAvailable": Schema.lazy(() => LastTransitionTimeSchema),
  "numberMisscheduled": Schema.lazy(() => LastTransitionTimeSchema),
  "numberReady": Schema.lazy(() => LastTransitionTimeSchema),
  "numberUnavailable": Schema.lazy(() => LastTransitionTimeSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
  "updatedNumberScheduled": Schema.lazy(() => LastTransitionTimeSchema),
});
export type DaemonsetstatusAppsV1Properties = Schema.From<typeof DaemonsetstatusAppsV1PropertiesSchema>;

export const DaemonsetstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DaemonsetstatusAppsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Daemonsetstatus = Schema.From<typeof DaemonsetstatusSchema>;

export const DaemonsetspecAppsV1PropertiesSchema = Schema.struct({
  "minReadySeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "revisionHistoryLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
  "template": Schema.lazy(() => PurpleTemplateSchema),
  "updateStrategy": Schema.lazy(() => PurpleUpdateStrategySchema),
});
export type DaemonsetspecAppsV1Properties = Schema.From<typeof DaemonsetspecAppsV1PropertiesSchema>;

export const DaemonsetspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DaemonsetspecAppsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Daemonsetspec = Schema.From<typeof DaemonsetspecSchema>;

export const Items60Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DaemonsetPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items60 = Schema.From<typeof Items60Schema>;

export const Items59Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items60Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items59 = Schema.From<typeof Items59Schema>;

export const DaemonsetlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items59Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type DaemonsetlistProperties = Schema.From<typeof DaemonsetlistPropertiesSchema>;

export const DaemonsetlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DaemonsetlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Daemonsetlist = Schema.From<typeof DaemonsetlistSchema>;

export const Items58Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DaemonsetAppsV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items58 = Schema.From<typeof Items58Schema>;

export const Items57Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items58Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items57 = Schema.From<typeof Items57Schema>;

export const DaemonsetlistAppsV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items57Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type DaemonsetlistAppsV1Properties = Schema.From<typeof DaemonsetlistAppsV1PropertiesSchema>;

export const DaemonsetlistAppsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DaemonsetlistAppsV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type DaemonsetlistAppsV1 = Schema.From<typeof DaemonsetlistAppsV1Schema>;

export const DaemonsetPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => CunningSpecSchema),
  "status": Schema.lazy(() => StickyStatusSchema),
});
export type DaemonsetProperties = Schema.From<typeof DaemonsetPropertiesSchema>;

export const DaemonsetSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DaemonsetPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Daemonset = Schema.From<typeof DaemonsetSchema>;

export const Properties111Schema = Schema.struct({
  "collisionCount": Schema.lazy(() => LastTransitionTimeSchema),
  "conditions": Schema.lazy(() => StagesClassSchema),
  "currentNumberScheduled": Schema.lazy(() => GroupPriorityMinimumSchema),
  "desiredNumberScheduled": Schema.lazy(() => GroupPriorityMinimumSchema),
  "numberAvailable": Schema.lazy(() => LastTransitionTimeSchema),
  "numberMisscheduled": Schema.lazy(() => GroupPriorityMinimumSchema),
  "numberReady": Schema.lazy(() => GroupPriorityMinimumSchema),
  "numberUnavailable": Schema.lazy(() => LastTransitionTimeSchema),
  "observedGeneration": Schema.lazy(() => LastTransitionTimeSchema),
  "updatedNumberScheduled": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties111 = Schema.From<typeof Properties111Schema>;

export const StickyStatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties111Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type StickyStatus = Schema.From<typeof StickyStatusSchema>;

export const Properties110Schema = Schema.struct({
  "maxUnavailable": Schema.lazy(() => TargetAverageValueSchema),
});
export type Properties110 = Schema.From<typeof Properties110Schema>;

export const TentacledRollingUpdateSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties110Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TentacledRollingUpdate = Schema.From<typeof TentacledRollingUpdateSchema>;

export const Properties109Schema = Schema.struct({
  "rollingUpdate": Schema.lazy(() => TentacledRollingUpdateSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type Properties109 = Schema.From<typeof Properties109Schema>;

export const PurpleUpdateStrategySchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties109Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleUpdateStrategy = Schema.From<typeof PurpleUpdateStrategySchema>;

export const Properties108Schema = Schema.struct({
  "minReadySeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "revisionHistoryLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => LabelselectorSchema),
  "template": Schema.lazy(() => PodtemplatespecV1Schema),
  "updateStrategy": Schema.lazy(() => PurpleUpdateStrategySchema),
});
export type Properties108 = Schema.From<typeof Properties108Schema>;

export const CunningSpecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties108Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type CunningSpec = Schema.From<typeof CunningSpecSchema>;

export const DaemonsetAppsV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => CunningSpecSchema),
  "status": Schema.lazy(() => StickyStatusSchema),
});
export type DaemonsetAppsV1Properties = Schema.From<typeof DaemonsetAppsV1PropertiesSchema>;

export const DaemonsetAppsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DaemonsetAppsV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type DaemonsetAppsV1 = Schema.From<typeof DaemonsetAppsV1Schema>;

export const DaemonendpointV1PropertiesSchema = Schema.struct({
  "Port": Schema.lazy(() => LastTransitionTimeSchema),
});
export type DaemonendpointV1Properties = Schema.From<typeof DaemonendpointV1PropertiesSchema>;

export const DaemonendpointSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DaemonendpointV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Daemonendpoint = Schema.From<typeof DaemonendpointSchema>;

export const CustomresourcesubresourcescaleApiextensionsV1PropertiesSchema = Schema.struct({
  "labelSelectorPath": Schema.lazy(() => DriverSchema),
  "specReplicasPath": Schema.lazy(() => DriverSchema),
  "statusReplicasPath": Schema.lazy(() => DriverSchema),
});
export type CustomresourcesubresourcescaleApiextensionsV1Properties = Schema.From<typeof CustomresourcesubresourcescaleApiextensionsV1PropertiesSchema>;

export const CustomresourcesubresourcescaleSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CustomresourcesubresourcescaleApiextensionsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Customresourcesubresourcescale = Schema.From<typeof CustomresourcesubresourcescaleSchema>;

export const Properties107Schema = Schema.struct({
  "labelSelectorPath": Schema.lazy(() => DriverSchema),
  "specReplicasPath": Schema.lazy(() => GroupVersionSchema),
  "statusReplicasPath": Schema.lazy(() => GroupVersionSchema),
});
export type Properties107 = Schema.From<typeof Properties107Schema>;

export const ScaleClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties107Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ScaleClass = Schema.From<typeof ScaleClassSchema>;

export const CustomresourcesubresourcesApiextensionsV1PropertiesSchema = Schema.struct({
  "scale": Schema.lazy(() => ScaleClassSchema),
  "status": Schema.lazy(() => DriverSchema),
});
export type CustomresourcesubresourcesApiextensionsV1Properties = Schema.From<typeof CustomresourcesubresourcesApiextensionsV1PropertiesSchema>;

export const CustomresourcesubresourcesSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CustomresourcesubresourcesApiextensionsV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Customresourcesubresources = Schema.From<typeof CustomresourcesubresourcesSchema>;

export const HilariousConditionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items15Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type HilariousConditions = Schema.From<typeof HilariousConditionsSchema>;

export const AcceptedNamesPropertiesSchema = Schema.struct({
  "categories": Schema.lazy(() => CategoriesSchema),
  "kind": Schema.lazy(() => GroupVersionSchema),
  "listKind": Schema.lazy(() => DriverSchema),
  "plural": Schema.lazy(() => GroupVersionSchema),
  "shortNames": Schema.lazy(() => CategoriesSchema),
  "singular": Schema.lazy(() => DriverSchema),
});
export type AcceptedNamesProperties = Schema.From<typeof AcceptedNamesPropertiesSchema>;

export const AcceptedNamesSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AcceptedNamesPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AcceptedNames = Schema.From<typeof AcceptedNamesSchema>;

export const CustomresourcedefinitionstatusApiextensionsV1PropertiesSchema = Schema.struct({
  "acceptedNames": Schema.lazy(() => AcceptedNamesSchema),
  "conditions": Schema.lazy(() => HilariousConditionsSchema),
  "storedVersions": Schema.lazy(() => CategoriesSchema),
});
export type CustomresourcedefinitionstatusApiextensionsV1Properties = Schema.From<typeof CustomresourcedefinitionstatusApiextensionsV1PropertiesSchema>;

export const CustomresourcedefinitionstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CustomresourcedefinitionstatusApiextensionsV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Customresourcedefinitionstatus = Schema.From<typeof CustomresourcedefinitionstatusSchema>;

export const CustomresourcedefinitionnamesApiextensionsV1PropertiesSchema = Schema.struct({
  "categories": Schema.lazy(() => CategoriesSchema),
  "kind": Schema.lazy(() => DriverSchema),
  "listKind": Schema.lazy(() => DriverSchema),
  "plural": Schema.lazy(() => DriverSchema),
  "shortNames": Schema.lazy(() => CategoriesSchema),
  "singular": Schema.lazy(() => DriverSchema),
});
export type CustomresourcedefinitionnamesApiextensionsV1Properties = Schema.From<typeof CustomresourcedefinitionnamesApiextensionsV1PropertiesSchema>;

export const CustomresourcedefinitionnamesSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CustomresourcedefinitionnamesApiextensionsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Customresourcedefinitionnames = Schema.From<typeof CustomresourcedefinitionnamesSchema>;

export const CustomresourceconversionApiextensionsV1Beta1PropertiesSchema = Schema.struct({
  "conversionReviewVersions": Schema.lazy(() => CategoriesSchema),
  "strategy": Schema.lazy(() => DriverSchema),
  "webhookClientConfig": Schema.lazy(() => ClientConfigSchema),
});
export type CustomresourceconversionApiextensionsV1Beta1Properties = Schema.From<typeof CustomresourceconversionApiextensionsV1Beta1PropertiesSchema>;

export const CustomresourceconversionSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CustomresourceconversionApiextensionsV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Customresourceconversion = Schema.From<typeof CustomresourceconversionSchema>;

export const ClientConfigSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => WebhookclientconfigAdmissionregistrationV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ClientConfig = Schema.From<typeof ClientConfigSchema>;

export const Properties106Schema = Schema.struct({
  "clientConfig": Schema.lazy(() => ClientConfigSchema),
  "conversionReviewVersions": Schema.lazy(() => ConversionReviewVersionsSchema),
});
export type Properties106 = Schema.From<typeof Properties106Schema>;

export const TentacledWebhookSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties106Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TentacledWebhook = Schema.From<typeof TentacledWebhookSchema>;

export const CustomresourceconversionApiextensionsV1PropertiesSchema = Schema.struct({
  "strategy": Schema.lazy(() => DriverSchema),
  "webhook": Schema.lazy(() => TentacledWebhookSchema),
});
export type CustomresourceconversionApiextensionsV1Properties = Schema.From<typeof CustomresourceconversionApiextensionsV1PropertiesSchema>;

export const CustomresourceconversionApiextensionsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CustomresourceconversionApiextensionsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type CustomresourceconversionApiextensionsV1 = Schema.From<typeof CustomresourceconversionApiextensionsV1Schema>;

export const CustomresourcecolumndefinitionApiextensionsV1PropertiesSchema = Schema.struct({
  "description": Schema.lazy(() => DriverSchema),
  "format": Schema.lazy(() => DriverSchema),
  "jsonPath": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "name": Schema.lazy(() => DriverSchema),
  "priority": Schema.lazy(() => LastTransitionTimeSchema),
  "type": Schema.lazy(() => DriverSchema),
  "JSONPath": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type CustomresourcecolumndefinitionApiextensionsV1Properties = Schema.From<typeof CustomresourcecolumndefinitionApiextensionsV1PropertiesSchema>;

export const CustomresourcecolumndefinitionSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CustomresourcecolumndefinitionApiextensionsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Customresourcecolumndefinition = Schema.From<typeof CustomresourcecolumndefinitionSchema>;

export const CsivolumesourceV1PropertiesSchema = Schema.struct({
  "driver": Schema.lazy(() => DriverSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "nodePublishSecretRef": Schema.lazy(() => ItemsClassSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "volumeAttributes": Schema.lazy(() => VolumeAttributesClassSchema),
});
export type CsivolumesourceV1Properties = Schema.From<typeof CsivolumesourceV1PropertiesSchema>;

export const CsivolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CsivolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CsiRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Csivolumesource = Schema.From<typeof CsivolumesourceSchema>;

export const CsipersistentvolumesourceV1PropertiesSchema = Schema.struct({
  "controllerExpandSecretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "controllerPublishSecretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "driver": Schema.lazy(() => DriverSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "nodePublishSecretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "nodeStageSecretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "volumeAttributes": Schema.lazy(() => VolumeAttributesClassSchema),
  "volumeHandle": Schema.lazy(() => DriverSchema),
});
export type CsipersistentvolumesourceV1Properties = Schema.From<typeof CsipersistentvolumesourceV1PropertiesSchema>;

export const CsipersistentvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CsipersistentvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CsiRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Csipersistentvolumesource = Schema.From<typeof CsipersistentvolumesourceSchema>;

export const Properties105Schema = Schema.struct({
  "allocatable": Schema.lazy(() => AllocatableSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "nodeID": Schema.lazy(() => GroupVersionSchema),
  "topologyKeys": Schema.lazy(() => CategoriesSchema),
});
export type Properties105 = Schema.From<typeof Properties105Schema>;

export const Items56Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties105Schema),
  "required": Schema.array(Schema.lazy(() => CsinodedriverStorageV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items56 = Schema.From<typeof Items56Schema>;

export const DriversSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items56Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type Drivers = Schema.From<typeof DriversSchema>;

export const CsinodespecStorageV1PropertiesSchema = Schema.struct({
  "drivers": Schema.lazy(() => DriversSchema),
});
export type CsinodespecStorageV1Properties = Schema.From<typeof CsinodespecStorageV1PropertiesSchema>;

export const CsinodespecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CsinodespecStorageV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Csinodespec = Schema.From<typeof CsinodespecSchema>;

export const CsinodedriverStorageV1PropertiesSchema = Schema.struct({
  "allocatable": Schema.lazy(() => AllocatableSchema),
  "name": Schema.lazy(() => DriverSchema),
  "nodeID": Schema.lazy(() => DriverSchema),
  "topologyKeys": Schema.lazy(() => CategoriesSchema),
});
export type CsinodedriverStorageV1Properties = Schema.From<typeof CsinodedriverStorageV1PropertiesSchema>;

export const CsinodedriverSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CsinodedriverStorageV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CsinodedriverStorageV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Csinodedriver = Schema.From<typeof CsinodedriverSchema>;

export const CsidriverspecStorageV1PropertiesSchema = Schema.struct({
  "attachRequired": Schema.lazy(() => DriverSchema),
  "podInfoOnMount": Schema.lazy(() => DriverSchema),
  "volumeLifecycleModes": Schema.lazy(() => CategoriesSchema),
});
export type CsidriverspecStorageV1Properties = Schema.From<typeof CsidriverspecStorageV1PropertiesSchema>;

export const CsidriverspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CsidriverspecStorageV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
});
export type Csidriverspec = Schema.From<typeof CsidriverspecSchema>;

export const Items55Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AuditsinkPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items55 = Schema.From<typeof Items55Schema>;

export const Items54Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items55Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items54 = Schema.From<typeof Items54Schema>;

export const CsidriverlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items54Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type CsidriverlistProperties = Schema.From<typeof CsidriverlistPropertiesSchema>;

export const CsinodelistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CsidriverlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Csinodelist = Schema.From<typeof CsinodelistSchema>;

export const Items53Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AuditsinkAuditregistrationV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items53 = Schema.From<typeof Items53Schema>;

export const Items52Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items53Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items52 = Schema.From<typeof Items52Schema>;

export const CsidriverlistStorageV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items52Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type CsidriverlistStorageV1Properties = Schema.From<typeof CsidriverlistStorageV1PropertiesSchema>;

export const CsinodelistStorageV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CsidriverlistStorageV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type CsinodelistStorageV1Beta1 = Schema.From<typeof CsinodelistStorageV1Beta1Schema>;

export const SubjectRbacV1Alpha1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => BoundobjectreferenceAuthenticationV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type SubjectRbacV1Alpha1 = Schema.From<typeof SubjectRbacV1Alpha1Schema>;

export const TimeSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.optional(Schema.union(Schema.lazy(() => CronjobstatusBatchV1Beta1PropertiesSchema), Schema.null)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "format": Schema.optional(Schema.union(Schema.lazy(() => FormatSchema), Schema.null)),
});
export type Time = Schema.From<typeof TimeSchema>;

export const JobTemplateSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => JobtemplatespecBatchV1Beta1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type JobTemplate = Schema.From<typeof JobTemplateSchema>;

export const CronjobspecBatchV1Beta1PropertiesSchema = Schema.struct({
  "concurrencyPolicy": Schema.lazy(() => DriverSchema),
  "failedJobsHistoryLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "jobTemplate": Schema.lazy(() => JobTemplateSchema),
  "schedule": Schema.lazy(() => DriverSchema),
  "startingDeadlineSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "successfulJobsHistoryLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "suspend": Schema.lazy(() => DriverSchema),
});
export type CronjobspecBatchV1Beta1Properties = Schema.From<typeof CronjobspecBatchV1Beta1PropertiesSchema>;

export const CronjobspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CronjobspecBatchV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CronjobspecBatchV1Beta1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Cronjobspec = Schema.From<typeof CronjobspecSchema>;

export const Items51Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CronjobPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items51 = Schema.From<typeof Items51Schema>;

export const Items50Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items51Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items50 = Schema.From<typeof Items50Schema>;

export const CronjoblistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items50Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type CronjoblistProperties = Schema.From<typeof CronjoblistPropertiesSchema>;

export const CronjoblistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CronjoblistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Cronjoblist = Schema.From<typeof CronjoblistSchema>;

export const Items49Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CronjobBatchV1Beta1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items49 = Schema.From<typeof Items49Schema>;

export const Items48Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items49Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items48 = Schema.From<typeof Items48Schema>;

export const CronjoblistBatchV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items48Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type CronjoblistBatchV1Beta1Properties = Schema.From<typeof CronjoblistBatchV1Beta1PropertiesSchema>;

export const CronjoblistBatchV2Alpha1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CronjoblistBatchV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type CronjoblistBatchV2Alpha1 = Schema.From<typeof CronjoblistBatchV2Alpha1Schema>;

export const CronjobPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => HilariousSpecSchema),
  "status": Schema.lazy(() => TentacledStatusSchema),
});
export type CronjobProperties = Schema.From<typeof CronjobPropertiesSchema>;

export const CronjobSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CronjobPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Cronjob = Schema.From<typeof CronjobSchema>;

export const FluffyActiveSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => TargetRefSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyActive = Schema.From<typeof FluffyActiveSchema>;

export const CronjobstatusBatchV1Beta1PropertiesSchema = Schema.struct({
  "active": Schema.lazy(() => FluffyActiveSchema),
  "lastScheduleTime": Schema.lazy(() => LastTransitionTimeSchema),
});
export type CronjobstatusBatchV1Beta1Properties = Schema.From<typeof CronjobstatusBatchV1Beta1PropertiesSchema>;

export const TentacledStatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CronjobstatusBatchV1Beta1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TentacledStatus = Schema.From<typeof TentacledStatusSchema>;

export const PodtemplatespecV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TemplatePropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
});
export type PodtemplatespecV1 = Schema.From<typeof PodtemplatespecV1Schema>;

export const Properties104Schema = Schema.struct({
  "activeDeadlineSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "backoffLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "completions": Schema.lazy(() => LastTransitionTimeSchema),
  "manualSelector": Schema.lazy(() => DriverSchema),
  "parallelism": Schema.lazy(() => LastTransitionTimeSchema),
  "selector": Schema.lazy(() => MetricSelectorClassSchema),
  "template": Schema.lazy(() => PodtemplatespecV1Schema),
  "ttlSecondsAfterFinished": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties104 = Schema.From<typeof Properties104Schema>;

export const AmbitiousSpecSchema = Schema.struct({
  "description": Schema.lazy(() => JobspecBatchV1DescriptionSchema),
  "properties": Schema.lazy(() => Properties104Schema),
  "required": Schema.array(Schema.lazy(() => JobspecBatchV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AmbitiousSpec = Schema.From<typeof AmbitiousSpecSchema>;

export const JobtemplatespecBatchV1Beta1PropertiesSchema = Schema.struct({
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => AmbitiousSpecSchema),
});
export type JobtemplatespecBatchV1Beta1Properties = Schema.From<typeof JobtemplatespecBatchV1Beta1PropertiesSchema>;

export const JobtemplatespecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => JobtemplatespecBatchV1Beta1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
});
export type Jobtemplatespec = Schema.From<typeof JobtemplatespecSchema>;

export const Properties103Schema = Schema.struct({
  "concurrencyPolicy": Schema.lazy(() => DriverSchema),
  "failedJobsHistoryLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "jobTemplate": Schema.lazy(() => JobtemplatespecSchema),
  "schedule": Schema.lazy(() => GroupVersionSchema),
  "startingDeadlineSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "successfulJobsHistoryLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "suspend": Schema.lazy(() => DriverSchema),
});
export type Properties103 = Schema.From<typeof Properties103Schema>;

export const HilariousSpecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties103Schema),
  "required": Schema.array(Schema.lazy(() => CronjobspecBatchV1Beta1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type HilariousSpec = Schema.From<typeof HilariousSpecSchema>;

export const CronjobBatchV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => HilariousSpecSchema),
  "status": Schema.lazy(() => TentacledStatusSchema),
});
export type CronjobBatchV1Beta1Properties = Schema.From<typeof CronjobBatchV1Beta1PropertiesSchema>;

export const CronjobBatchV2Alpha1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CronjobBatchV1Beta1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type CronjobBatchV2Alpha1 = Schema.From<typeof CronjobBatchV2Alpha1Schema>;

export const Properties102Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "data": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "revision": Schema.lazy(() => GroupPriorityMinimumSchema),
});
export type Properties102 = Schema.From<typeof Properties102Schema>;

export const Items47Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties102Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items47 = Schema.From<typeof Items47Schema>;

export const Items46Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items47Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items46 = Schema.From<typeof Items46Schema>;

export const ControllerrevisionlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items46Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ControllerrevisionlistProperties = Schema.From<typeof ControllerrevisionlistPropertiesSchema>;

export const ControllerrevisionlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ControllerrevisionlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Controllerrevisionlist = Schema.From<typeof ControllerrevisionlistSchema>;

export const Properties101Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "data": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "revision": Schema.lazy(() => GroupPriorityMinimumSchema),
});
export type Properties101 = Schema.From<typeof Properties101Schema>;

export const Items45Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties101Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items45 = Schema.From<typeof Items45Schema>;

export const Items44Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items45Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items44 = Schema.From<typeof Items44Schema>;

export const ControllerrevisionlistAppsV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items44Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ControllerrevisionlistAppsV1Properties = Schema.From<typeof ControllerrevisionlistAppsV1PropertiesSchema>;

export const ControllerrevisionlistAppsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ControllerrevisionlistAppsV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ControllerrevisionlistAppsV1 = Schema.From<typeof ControllerrevisionlistAppsV1Schema>;

export const ControllerrevisionPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "data": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "revision": Schema.lazy(() => LastTransitionTimeSchema),
});
export type ControllerrevisionProperties = Schema.From<typeof ControllerrevisionPropertiesSchema>;

export const ControllerrevisionSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ControllerrevisionPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Controllerrevision = Schema.From<typeof ControllerrevisionSchema>;

export const ControllerrevisionAppsV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "data": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "revision": Schema.lazy(() => LastTransitionTimeSchema),
});
export type ControllerrevisionAppsV1Properties = Schema.From<typeof ControllerrevisionAppsV1PropertiesSchema>;

export const ControllerrevisionAppsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ControllerrevisionAppsV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ControllerrevisionAppsV1 = Schema.From<typeof ControllerrevisionAppsV1Schema>;

export const ContainerstatusV1PropertiesSchema = Schema.struct({
  "containerID": Schema.lazy(() => DriverSchema),
  "image": Schema.lazy(() => DriverSchema),
  "imageID": Schema.lazy(() => DriverSchema),
  "lastState": Schema.lazy(() => StateSchema),
  "name": Schema.lazy(() => DriverSchema),
  "ready": Schema.lazy(() => DriverSchema),
  "restartCount": Schema.lazy(() => LastTransitionTimeSchema),
  "started": Schema.lazy(() => DriverSchema),
  "state": Schema.lazy(() => StateSchema),
});
export type ContainerstatusV1Properties = Schema.From<typeof ContainerstatusV1PropertiesSchema>;

export const ContainerstatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ContainerstatusV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ContainerstatusV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Containerstatus = Schema.From<typeof ContainerstatusSchema>;

export const ContainerstatewaitingSchema = Schema.struct({
  "description": Schema.lazy(() => WaitingDescriptionSchema),
  "properties": Schema.lazy(() => WaitingPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Containerstatewaiting = Schema.From<typeof ContainerstatewaitingSchema>;

export const ContainerstateterminatedV1PropertiesSchema = Schema.struct({
  "containerID": Schema.lazy(() => DriverSchema),
  "exitCode": Schema.lazy(() => LastTransitionTimeSchema),
  "finishedAt": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "signal": Schema.lazy(() => LastTransitionTimeSchema),
  "startedAt": Schema.lazy(() => LastTransitionTimeSchema),
});
export type ContainerstateterminatedV1Properties = Schema.From<typeof ContainerstateterminatedV1PropertiesSchema>;

export const ContainerstateterminatedSchema = Schema.struct({
  "description": Schema.lazy(() => TerminatedDescriptionSchema),
  "properties": Schema.lazy(() => ContainerstateterminatedV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => TerminatedRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Containerstateterminated = Schema.From<typeof ContainerstateterminatedSchema>;

export const ContainerstaterunningSchema = Schema.struct({
  "description": Schema.lazy(() => RunningDescriptionSchema),
  "properties": Schema.lazy(() => RunningPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Containerstaterunning = Schema.From<typeof ContainerstaterunningSchema>;

export const ContainerstateSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LastStatePropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Containerstate = Schema.From<typeof ContainerstateSchema>;

export const ContainerportV1PropertiesSchema = Schema.struct({
  "containerPort": Schema.lazy(() => LastTransitionTimeSchema),
  "hostIP": Schema.lazy(() => DriverSchema),
  "hostPort": Schema.lazy(() => LastTransitionTimeSchema),
  "name": Schema.lazy(() => DriverSchema),
  "protocol": Schema.lazy(() => DriverSchema),
});
export type ContainerportV1Properties = Schema.From<typeof ContainerportV1PropertiesSchema>;

export const ContainerportSchema = Schema.struct({
  "description": Schema.lazy(() => ContainerportV1DescriptionSchema),
  "properties": Schema.lazy(() => ContainerportV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ContainerportV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Containerport = Schema.From<typeof ContainerportSchema>;

export const ContainerimageV1PropertiesSchema = Schema.struct({
  "names": Schema.lazy(() => CategoriesSchema),
  "sizeBytes": Schema.lazy(() => LastTransitionTimeSchema),
});
export type ContainerimageV1Properties = Schema.From<typeof ContainerimageV1PropertiesSchema>;

export const ContainerimageSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ContainerimageV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Containerimage = Schema.From<typeof ContainerimageSchema>;

export const ContainerV1PropertiesSchema = Schema.struct({
  "args": Schema.lazy(() => CategoriesSchema),
  "command": Schema.lazy(() => CategoriesSchema),
  "env": Schema.lazy(() => PurpleEnvSchema),
  "envFrom": Schema.lazy(() => EnvFromSchema),
  "image": Schema.lazy(() => DriverSchema),
  "imagePullPolicy": Schema.lazy(() => DriverSchema),
  "lifecycle": Schema.lazy(() => LifecycleClassSchema),
  "livenessProbe": Schema.lazy(() => LivenessProbeClassSchema),
  "name": Schema.lazy(() => DriverSchema),
  "ports": Schema.lazy(() => PurplePortsSchema),
  "readinessProbe": Schema.lazy(() => LivenessProbeClassSchema),
  "resources": Schema.lazy(() => PurpleResourcesSchema),
  "securityContext": Schema.lazy(() => PurpleSecurityContextSchema),
  "startupProbe": Schema.lazy(() => LivenessProbeClassSchema),
  "stdin": Schema.lazy(() => DriverSchema),
  "stdinOnce": Schema.lazy(() => DriverSchema),
  "terminationMessagePath": Schema.lazy(() => DriverSchema),
  "terminationMessagePolicy": Schema.lazy(() => DriverSchema),
  "tty": Schema.lazy(() => DriverSchema),
  "volumeDevices": Schema.lazy(() => VolumeDevicesSchema),
  "volumeMounts": Schema.lazy(() => PurpleVolumeMountsSchema),
  "workingDir": Schema.lazy(() => DriverSchema),
});
export type ContainerV1Properties = Schema.From<typeof ContainerV1PropertiesSchema>;

export const ContainerSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ContainerV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Container = Schema.From<typeof ContainerSchema>;

export const SecretprojectionV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConfigmapprojectionV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type SecretprojectionV1 = Schema.From<typeof SecretprojectionV1Schema>;

export const ConfigmapnodeconfigsourceV1PropertiesSchema = Schema.struct({
  "kubeletConfigKey": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "namespace": Schema.lazy(() => DriverSchema),
  "resourceVersion": Schema.lazy(() => DriverSchema),
  "uid": Schema.lazy(() => DriverSchema),
});
export type ConfigmapnodeconfigsourceV1Properties = Schema.From<typeof ConfigmapnodeconfigsourceV1PropertiesSchema>;

export const ConfigmapnodeconfigsourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConfigmapnodeconfigsourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Configmapnodeconfigsource = Schema.From<typeof ConfigmapnodeconfigsourceSchema>;

export const Items43Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConfigmapPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items43 = Schema.From<typeof Items43Schema>;

export const Items42Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items43Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items42 = Schema.From<typeof Items42Schema>;

export const ConfigmaplistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items42Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ConfigmaplistProperties = Schema.From<typeof ConfigmaplistPropertiesSchema>;

export const ConfigmaplistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConfigmaplistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Configmaplist = Schema.From<typeof ConfigmaplistSchema>;

export const Items41Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConfigmapV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items41 = Schema.From<typeof Items41Schema>;

export const Items40Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items41Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items40 = Schema.From<typeof Items40Schema>;

export const ConfigmaplistV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items40Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ConfigmaplistV1Properties = Schema.From<typeof ConfigmaplistV1PropertiesSchema>;

export const ConfigmaplistV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConfigmaplistV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ConfigmaplistV1 = Schema.From<typeof ConfigmaplistV1Schema>;

export const ConfigmapkeyselectorV1PropertiesSchema = Schema.struct({
  "key": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "optional": Schema.lazy(() => DriverSchema),
});
export type ConfigmapkeyselectorV1Properties = Schema.From<typeof ConfigmapkeyselectorV1PropertiesSchema>;

export const SecretkeyselectorSchema = Schema.struct({
  "description": Schema.lazy(() => ConfigMapKeyRefDescriptionSchema),
  "properties": Schema.lazy(() => ConfigmapkeyselectorV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Secretkeyselector = Schema.From<typeof SecretkeyselectorSchema>;

export const SecretenvsourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConfigMapRefPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Secretenvsource = Schema.From<typeof SecretenvsourceSchema>;

export const ConfigmapPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "binaryData": Schema.lazy(() => BinaryDataClassSchema),
  "data": Schema.lazy(() => VolumeAttributesClassSchema),
  "immutable": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
});
export type ConfigmapProperties = Schema.From<typeof ConfigmapPropertiesSchema>;

export const ConfigmapSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConfigmapPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Configmap = Schema.From<typeof ConfigmapSchema>;

export const BinaryDataClassSchema = Schema.struct({
  "additionalProperties": Schema.lazy(() => SupplementalGroupsAdditionalPropertiesSchema),
  "description": Schema.string,
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type BinaryDataClass = Schema.From<typeof BinaryDataClassSchema>;

export const ConfigmapV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "binaryData": Schema.lazy(() => BinaryDataClassSchema),
  "data": Schema.lazy(() => VolumeAttributesClassSchema),
  "immutable": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
});
export type ConfigmapV1Properties = Schema.From<typeof ConfigmapV1PropertiesSchema>;

export const ConfigmapV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConfigmapV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ConfigmapV1 = Schema.From<typeof ConfigmapV1Schema>;

export const ComponentconditionV1PropertiesSchema = Schema.struct({
  "error": Schema.lazy(() => DriverSchema),
  "message": Schema.lazy(() => DriverSchema),
  "status": Schema.lazy(() => DriverSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type ComponentconditionV1Properties = Schema.From<typeof ComponentconditionV1PropertiesSchema>;

export const ComponentconditionSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ComponentconditionV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Componentcondition = Schema.From<typeof ComponentconditionSchema>;

export const Items39Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClusterrolePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items39 = Schema.From<typeof Items39Schema>;

export const Items38Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items39Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items38 = Schema.From<typeof Items38Schema>;

export const ClusterrolelistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items38Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ClusterrolelistProperties = Schema.From<typeof ClusterrolelistPropertiesSchema>;

export const RolelistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClusterrolelistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Rolelist = Schema.From<typeof RolelistSchema>;

export const Items37Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClusterroleRbacV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items37 = Schema.From<typeof Items37Schema>;

export const Items36Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items37Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items36 = Schema.From<typeof Items36Schema>;

export const ClusterrolelistRbacV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items36Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ClusterrolelistRbacV1Properties = Schema.From<typeof ClusterrolelistRbacV1PropertiesSchema>;

export const ValidatingwebhookconfigurationlistAdmissionregistrationV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClusterrolelistRbacV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ValidatingwebhookconfigurationlistAdmissionregistrationV1Beta1 = Schema.From<typeof ValidatingwebhookconfigurationlistAdmissionregistrationV1Beta1Schema>;

export const Properties100Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "roleRef": Schema.lazy(() => FluffyRoleRefSchema),
  "subjects": Schema.lazy(() => PurpleSubjectsSchema),
});
export type Properties100 = Schema.From<typeof Properties100Schema>;

export const Items35Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties100Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items35 = Schema.From<typeof Items35Schema>;

export const Items34Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items35Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items34 = Schema.From<typeof Items34Schema>;

export const ClusterrolebindinglistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items34Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ClusterrolebindinglistProperties = Schema.From<typeof ClusterrolebindinglistPropertiesSchema>;

export const RolebindinglistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClusterrolebindinglistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Rolebindinglist = Schema.From<typeof RolebindinglistSchema>;

export const FluffyRoleRefSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RoleRefPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => RoleRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type FluffyRoleRef = Schema.From<typeof FluffyRoleRefSchema>;

export const Properties99Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "roleRef": Schema.lazy(() => FluffyRoleRefSchema),
  "subjects": Schema.lazy(() => PurpleSubjectsSchema),
});
export type Properties99 = Schema.From<typeof Properties99Schema>;

export const Items33Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties99Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items33 = Schema.From<typeof Items33Schema>;

export const Items32Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items33Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items32 = Schema.From<typeof Items32Schema>;

export const ClusterrolebindinglistRbacV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items32Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ClusterrolebindinglistRbacV1Properties = Schema.From<typeof ClusterrolebindinglistRbacV1PropertiesSchema>;

export const RolebindinglistRbacV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClusterrolebindinglistRbacV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type RolebindinglistRbacV1Beta1 = Schema.From<typeof RolebindinglistRbacV1Beta1Schema>;

export const ClusterrolebindingPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "roleRef": Schema.lazy(() => PurpleRoleRefSchema),
  "subjects": Schema.lazy(() => PurpleSubjectsSchema),
});
export type ClusterrolebindingProperties = Schema.From<typeof ClusterrolebindingPropertiesSchema>;

export const RolebindingSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClusterrolebindingPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Rolebinding = Schema.From<typeof RolebindingSchema>;

export const PurpleSubjectsSchema = Schema.struct({
  "description": Schema.lazy(() => SubjectsDescriptionSchema),
  "items": Schema.lazy(() => ParametersClassSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleSubjects = Schema.From<typeof PurpleSubjectsSchema>;

export const RoleRefPropertiesSchema = Schema.struct({
  "apiGroup": Schema.lazy(() => GroupVersionSchema),
  "kind": Schema.lazy(() => GroupVersionSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
});
export type RoleRefProperties = Schema.From<typeof RoleRefPropertiesSchema>;

export const PurpleRoleRefSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RoleRefPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => RoleRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleRoleRef = Schema.From<typeof PurpleRoleRefSchema>;

export const ClusterrolebindingRbacV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "roleRef": Schema.lazy(() => PurpleRoleRefSchema),
  "subjects": Schema.lazy(() => PurpleSubjectsSchema),
});
export type ClusterrolebindingRbacV1Properties = Schema.From<typeof ClusterrolebindingRbacV1PropertiesSchema>;

export const RolebindingRbacV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClusterrolebindingRbacV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type RolebindingRbacV1Beta1 = Schema.From<typeof RolebindingRbacV1Beta1Schema>;

export const ClusterrolePropertiesSchema = Schema.struct({
  "aggregationRule": Schema.optional(Schema.union(Schema.lazy(() => AggregationRuleSchema), Schema.null)),
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "rules": Schema.lazy(() => ResourceRulesClassSchema),
});
export type ClusterroleProperties = Schema.From<typeof ClusterrolePropertiesSchema>;

export const RoleSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClusterrolePropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Role = Schema.From<typeof RoleSchema>;

export const Properties98Schema = Schema.struct({
  "nodeSelector": Schema.lazy(() => VolumeAttributesClassSchema),
  "tolerations": Schema.lazy(() => TolerationsSchema),
});
export type Properties98 = Schema.From<typeof Properties98Schema>;

export const SchedulingClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties98Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type SchedulingClass = Schema.From<typeof SchedulingClassSchema>;

export const Properties97Schema = Schema.struct({
  "podFixed": Schema.lazy(() => DefaultSchema),
});
export type Properties97 = Schema.From<typeof Properties97Schema>;

export const OverheadClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties97Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type OverheadClass = Schema.From<typeof OverheadClassSchema>;

export const Properties96Schema = Schema.struct({
  "overhead": Schema.lazy(() => OverheadClassSchema),
  "runtimeHandler": Schema.lazy(() => GroupVersionSchema),
  "scheduling": Schema.lazy(() => SchedulingClassSchema),
});
export type Properties96 = Schema.From<typeof Properties96Schema>;

export const IndecentSpecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties96Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.union(Schema.array(Schema.lazy(() => TypeElementSchema)), Schema.lazy(() => TypeElementSchema)),
});
export type IndecentSpec = Schema.From<typeof IndecentSpecSchema>;

export const AggregationRulePropertiesSchema = Schema.struct({
  "clusterRoleSelectors": Schema.lazy(() => ClusterRoleSelectorsSchema),
});
export type AggregationRuleProperties = Schema.From<typeof AggregationRulePropertiesSchema>;

export const AggregationRuleSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AggregationRulePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AggregationRule = Schema.From<typeof AggregationRuleSchema>;

export const ClusterroleRbacV1PropertiesSchema = Schema.struct({
  "aggregationRule": Schema.optional(Schema.union(Schema.lazy(() => AggregationRuleSchema), Schema.null)),
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "rules": Schema.optional(Schema.union(Schema.lazy(() => ResourceRulesClassSchema), Schema.null)),
  "spec": Schema.optional(Schema.union(Schema.lazy(() => IndecentSpecSchema), Schema.null)),
  "webhooks": Schema.optional(Schema.union(Schema.lazy(() => FluffyWebhooksSchema), Schema.null)),
});
export type ClusterroleRbacV1Properties = Schema.From<typeof ClusterroleRbacV1PropertiesSchema>;

export const ValidatingwebhookconfigurationAdmissionregistrationV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClusterroleRbacV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ValidatingwebhookconfigurationAdmissionregistrationV1Beta1 = Schema.From<typeof ValidatingwebhookconfigurationAdmissionregistrationV1Beta1Schema>;

export const ClientipconfigSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClientIpPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Clientipconfig = Schema.From<typeof ClientipconfigSchema>;

export const CertificatesigningrequeststatusSchema = Schema.struct({
  "properties": Schema.lazy(() => CertificatesigningrequeststatusCertificatesV1Beta1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Certificatesigningrequeststatus = Schema.From<typeof CertificatesigningrequeststatusSchema>;

export const CertificatesigningrequestspecCertificatesV1Beta1PropertiesSchema = Schema.struct({
  "extra": Schema.lazy(() => ExtraSchema),
  "groups": Schema.lazy(() => CategoriesSchema),
  "request": Schema.lazy(() => LastTransitionTimeSchema),
  "signerName": Schema.lazy(() => DriverSchema),
  "uid": Schema.lazy(() => DriverSchema),
  "usages": Schema.lazy(() => CategoriesSchema),
  "username": Schema.lazy(() => DriverSchema),
});
export type CertificatesigningrequestspecCertificatesV1Beta1Properties = Schema.From<typeof CertificatesigningrequestspecCertificatesV1Beta1PropertiesSchema>;

export const CertificatesigningrequestspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CertificatesigningrequestspecCertificatesV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Certificatesigningrequestspec = Schema.From<typeof CertificatesigningrequestspecSchema>;

export const Items31Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CertificatesigningrequestPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items31 = Schema.From<typeof Items31Schema>;

export const Items30Schema = Schema.struct({
  "items": Schema.lazy(() => Items31Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items30 = Schema.From<typeof Items30Schema>;

export const CertificatesigningrequestlistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items30Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type CertificatesigningrequestlistProperties = Schema.From<typeof CertificatesigningrequestlistPropertiesSchema>;

export const CertificatesigningrequestlistSchema = Schema.struct({
  "properties": Schema.lazy(() => CertificatesigningrequestlistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Certificatesigningrequestlist = Schema.From<typeof CertificatesigningrequestlistSchema>;

export const Items29Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CertificatesigningrequestCertificatesV1Beta1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items29 = Schema.From<typeof Items29Schema>;

export const Items28Schema = Schema.struct({
  "items": Schema.lazy(() => Items29Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items28 = Schema.From<typeof Items28Schema>;

export const CertificatesigningrequestlistCertificatesV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items28Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type CertificatesigningrequestlistCertificatesV1Beta1Properties = Schema.From<typeof CertificatesigningrequestlistCertificatesV1Beta1PropertiesSchema>;

export const CertificatesigningrequestlistCertificatesV1Beta1Schema = Schema.struct({
  "properties": Schema.lazy(() => CertificatesigningrequestlistCertificatesV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type CertificatesigningrequestlistCertificatesV1Beta1 = Schema.From<typeof CertificatesigningrequestlistCertificatesV1Beta1Schema>;

export const CertificatesigningrequestconditionCertificatesV1Beta1PropertiesSchema = Schema.struct({
  "lastUpdateTime": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type CertificatesigningrequestconditionCertificatesV1Beta1Properties = Schema.From<typeof CertificatesigningrequestconditionCertificatesV1Beta1PropertiesSchema>;

export const CertificatesigningrequestconditionSchema = Schema.struct({
  "properties": Schema.lazy(() => CertificatesigningrequestconditionCertificatesV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Certificatesigningrequestcondition = Schema.From<typeof CertificatesigningrequestconditionSchema>;

export const CertificatesigningrequestPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => IndigoSpecSchema),
  "status": Schema.lazy(() => FluffyStatusSchema),
});
export type CertificatesigningrequestProperties = Schema.From<typeof CertificatesigningrequestPropertiesSchema>;

export const CertificatesigningrequestSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CertificatesigningrequestPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Certificatesigningrequest = Schema.From<typeof CertificatesigningrequestSchema>;

export const Properties95Schema = Schema.struct({
  "lastUpdateTime": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
});
export type Properties95 = Schema.From<typeof Properties95Schema>;

export const Items27Schema = Schema.struct({
  "properties": Schema.lazy(() => Properties95Schema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items27 = Schema.From<typeof Items27Schema>;

export const IndecentConditionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items27Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type IndecentConditions = Schema.From<typeof IndecentConditionsSchema>;

export const CertificatesigningrequeststatusCertificatesV1Beta1PropertiesSchema = Schema.struct({
  "certificate": Schema.lazy(() => LastTransitionTimeSchema),
  "conditions": Schema.lazy(() => IndecentConditionsSchema),
});
export type CertificatesigningrequeststatusCertificatesV1Beta1Properties = Schema.From<typeof CertificatesigningrequeststatusCertificatesV1Beta1PropertiesSchema>;

export const FluffyStatusSchema = Schema.struct({
  "properties": Schema.lazy(() => CertificatesigningrequeststatusCertificatesV1Beta1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyStatus = Schema.From<typeof FluffyStatusSchema>;

export const Properties94Schema = Schema.struct({
  "extra": Schema.lazy(() => ExtraSchema),
  "groups": Schema.lazy(() => CategoriesSchema),
  "request": Schema.lazy(() => GroupPriorityMinimumSchema),
  "signerName": Schema.lazy(() => DriverSchema),
  "uid": Schema.lazy(() => DriverSchema),
  "usages": Schema.lazy(() => CategoriesSchema),
  "username": Schema.lazy(() => DriverSchema),
});
export type Properties94 = Schema.From<typeof Properties94Schema>;

export const IndigoSpecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties94Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type IndigoSpec = Schema.From<typeof IndigoSpecSchema>;

export const CertificatesigningrequestCertificatesV1Beta1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => IndigoSpecSchema),
  "status": Schema.lazy(() => FluffyStatusSchema),
});
export type CertificatesigningrequestCertificatesV1Beta1Properties = Schema.From<typeof CertificatesigningrequestCertificatesV1Beta1PropertiesSchema>;

export const CertificatesigningrequestCertificatesV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CertificatesigningrequestCertificatesV1Beta1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type CertificatesigningrequestCertificatesV1Beta1 = Schema.From<typeof CertificatesigningrequestCertificatesV1Beta1Schema>;

export const CephfsvolumesourceV1PropertiesSchema = Schema.struct({
  "monitors": Schema.lazy(() => CategoriesSchema),
  "path": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretFile": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ItemsClassSchema),
  "user": Schema.lazy(() => DriverSchema),
});
export type CephfsvolumesourceV1Properties = Schema.From<typeof CephfsvolumesourceV1PropertiesSchema>;

export const CephfsvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CephfsvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CephfsRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Cephfsvolumesource = Schema.From<typeof CephfsvolumesourceSchema>;

export const CephfspersistentvolumesourceV1PropertiesSchema = Schema.struct({
  "monitors": Schema.lazy(() => CategoriesSchema),
  "path": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretFile": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "user": Schema.lazy(() => DriverSchema),
});
export type CephfspersistentvolumesourceV1Properties = Schema.From<typeof CephfspersistentvolumesourceV1PropertiesSchema>;

export const CephfspersistentvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CephfspersistentvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CephfsRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Cephfspersistentvolumesource = Schema.From<typeof CephfspersistentvolumesourceSchema>;

export const Properties93Schema = Schema.struct({
  "appProtocol": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "nodePort": Schema.lazy(() => LastTransitionTimeSchema),
  "port": Schema.lazy(() => GroupPriorityMinimumSchema),
  "protocol": Schema.lazy(() => DriverSchema),
  "targetPort": Schema.lazy(() => TargetAverageValueSchema),
});
export type Properties93 = Schema.From<typeof Properties93Schema>;

export const Items26Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties93Schema),
  "required": Schema.array(Schema.lazy(() => HttpGetRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items26 = Schema.From<typeof Items26Schema>;

export const IndecentPortsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items26Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-map-keys": Schema.array(Schema.lazy(() => HttpGetRequiredSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => HttpGetRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type IndecentPorts = Schema.From<typeof IndecentPortsSchema>;

export const CapabilitiesV1PropertiesSchema = Schema.struct({
  "add": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "drop": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "replicas": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "name": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "namespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "port": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "clusterIP": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "externalIPs": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "externalName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "externalTrafficPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "healthCheckNodePort": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "ipFamily": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "loadBalancerIP": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "loadBalancerSourceRanges": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "ports": Schema.optional(Schema.union(Schema.lazy(() => IndecentPortsSchema), Schema.null)),
  "publishNotReadyAddresses": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "selector": Schema.optional(Schema.union(Schema.lazy(() => VolumeAttributesClassSchema), Schema.null)),
  "sessionAffinity": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "sessionAffinityConfig": Schema.optional(Schema.union(Schema.lazy(() => SessionAffinityConfigSchema), Schema.null)),
  "topologyKeys": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "type": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "field": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "message": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "reason": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "count": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "configMap": Schema.optional(Schema.union(Schema.lazy(() => SecretClassSchema), Schema.null)),
  "downwardAPI": Schema.optional(Schema.union(Schema.lazy(() => FluffyDownwardApiSchema), Schema.null)),
  "secret": Schema.optional(Schema.union(Schema.lazy(() => SecretClassSchema), Schema.null)),
  "serviceAccountToken": Schema.optional(Schema.union(Schema.lazy(() => ServiceAccountTokenSchema), Schema.null)),
});
export type CapabilitiesV1Properties = Schema.From<typeof CapabilitiesV1PropertiesSchema>;

export const VolumeprojectionSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.optional(Schema.union(Schema.lazy(() => CapabilitiesV1PropertiesSchema), Schema.null)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Volumeprojection = Schema.From<typeof VolumeprojectionSchema>;

export const BoundobjectreferenceAuthenticationV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "uid": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "namespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type BoundobjectreferenceAuthenticationV1Properties = Schema.From<typeof BoundobjectreferenceAuthenticationV1PropertiesSchema>;

export const BoundobjectreferenceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => BoundobjectreferenceAuthenticationV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Boundobjectreference = Schema.From<typeof BoundobjectreferenceSchema>;

export const CsinodeSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AuditsinkPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Csinode = Schema.From<typeof CsinodeSchema>;

export const CsinodeStorageV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AuditsinkAuditregistrationV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type CsinodeStorageV1Beta1 = Schema.From<typeof CsinodeStorageV1Beta1Schema>;

export const AzurefilepersistentvolumesourceV1PropertiesSchema = Schema.struct({
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretName": Schema.lazy(() => DriverSchema),
  "secretNamespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "shareName": Schema.lazy(() => DriverSchema),
});
export type AzurefilepersistentvolumesourceV1Properties = Schema.From<typeof AzurefilepersistentvolumesourceV1PropertiesSchema>;

export const AzurefilevolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AzurefilepersistentvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => AzureFileRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Azurefilevolumesource = Schema.From<typeof AzurefilevolumesourceSchema>;

export const AzurediskvolumesourceV1PropertiesSchema = Schema.struct({
  "cachingMode": Schema.lazy(() => DriverSchema),
  "diskName": Schema.lazy(() => DriverSchema),
  "diskURI": Schema.lazy(() => DriverSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
});
export type AzurediskvolumesourceV1Properties = Schema.From<typeof AzurediskvolumesourceV1PropertiesSchema>;

export const AzurediskvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AzurediskvolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => AzureDiskRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Azurediskvolumesource = Schema.From<typeof AzurediskvolumesourceSchema>;

export const AwselasticblockstorevolumesourceV1PropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "partition": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "readOnly": Schema.lazy(() => DriverSchema),
  "volumeID": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
  "secretRef": Schema.optional(Schema.union(Schema.lazy(() => ControllerExpandSecretRefClassSchema), Schema.null)),
  "pdName": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
});
export type AwselasticblockstorevolumesourceV1Properties = Schema.From<typeof AwselasticblockstorevolumesourceV1PropertiesSchema>;

export const PortworxvolumesourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AwselasticblockstorevolumesourceV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => AwsElasticBlockStoreRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Portworxvolumesource = Schema.From<typeof PortworxvolumesourceSchema>;

export const FluffyWebhookSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties87Schema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyWebhook = Schema.From<typeof FluffyWebhookSchema>;

export const FluffyPolicySchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties86Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyPolicy = Schema.From<typeof FluffyPolicySchema>;

export const AuditsinkspecAuditregistrationV1Alpha1PropertiesSchema = Schema.struct({
  "policy": Schema.lazy(() => FluffyPolicySchema),
  "webhook": Schema.lazy(() => FluffyWebhookSchema),
});
export type AuditsinkspecAuditregistrationV1Alpha1Properties = Schema.From<typeof AuditsinkspecAuditregistrationV1Alpha1PropertiesSchema>;

export const AuditsinkspecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AuditsinkspecAuditregistrationV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Auditsinkspec = Schema.From<typeof AuditsinkspecSchema>;

export const Items25Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AuditsinkPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items25 = Schema.From<typeof Items25Schema>;

export const Items24Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items25Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items24 = Schema.From<typeof Items24Schema>;

export const AuditsinklistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items24Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type AuditsinklistProperties = Schema.From<typeof AuditsinklistPropertiesSchema>;

export const ValidatingwebhookconfigurationlistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AuditsinklistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Validatingwebhookconfigurationlist = Schema.From<typeof ValidatingwebhookconfigurationlistSchema>;

export const Items23Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AuditsinkAuditregistrationV1Alpha1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items23 = Schema.From<typeof Items23Schema>;

export const Items22Schema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items23Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items22 = Schema.From<typeof Items22Schema>;

export const AuditsinklistAuditregistrationV1Alpha1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items22Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type AuditsinklistAuditregistrationV1Alpha1Properties = Schema.From<typeof AuditsinklistAuditregistrationV1Alpha1PropertiesSchema>;

export const ValidatingwebhookconfigurationlistAdmissionregistrationV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AuditsinklistAuditregistrationV1Alpha1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ValidatingwebhookconfigurationlistAdmissionregistrationV1 = Schema.From<typeof ValidatingwebhookconfigurationlistAdmissionregistrationV1Schema>;

export const Properties92Schema = Schema.struct({
  "admissionReviewVersions": Schema.lazy(() => ValuesClassSchema),
  "clientConfig": Schema.lazy(() => WebhookclientconfigAdmissionregistrationV1Schema),
  "failurePolicy": Schema.lazy(() => DriverSchema),
  "matchPolicy": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "namespaceSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "objectSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "reinvocationPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "rules": Schema.lazy(() => PurpleRulesSchema),
  "sideEffects": Schema.lazy(() => DriverSchema),
  "timeoutSeconds": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties92 = Schema.From<typeof Properties92Schema>;

export const Items21Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties92Schema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items21 = Schema.From<typeof Items21Schema>;

export const FluffyWebhooksSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items21Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type FluffyWebhooks = Schema.From<typeof FluffyWebhooksSchema>;

export const Properties51Schema = Schema.struct({
  "lastTransitionTime": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "status": Schema.lazy(() => PdNameSchema),
  "type": Schema.lazy(() => PdNameSchema),
  "lastProbeTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
});
export type Properties51 = Schema.From<typeof Properties51Schema>;

export const Items4Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties51Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "required": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)), Schema.null)),
});
export type Items4 = Schema.From<typeof Items4Schema>;

export const FluffyConditionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items4Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-map-keys": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)), Schema.null)),
  "x-kubernetes-list-type": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesListTypeSchema), Schema.null)),
  "x-kubernetes-patch-merge-key": Schema.optional(Schema.union(Schema.lazy(() => ConfigMapKeyRefRequiredSchema), Schema.null)),
  "x-kubernetes-patch-strategy": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesPatchStrategySchema), Schema.null)),
});
export type FluffyConditions = Schema.From<typeof FluffyConditionsSchema>;

export const ClusterRoleSelectorsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => MetricSelectorClassSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ClusterRoleSelectors = Schema.From<typeof ClusterRoleSelectorsSchema>;

export const Properties48Schema = Schema.struct({
  "field": Schema.lazy(() => DriverSchema),
  "message": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
});
export type Properties48 = Schema.From<typeof Properties48Schema>;

export const CausesItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties48Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type CausesItems = Schema.From<typeof CausesItemsSchema>;

export const CausesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => CausesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Causes = Schema.From<typeof CausesSchema>;

export const AggregationruleRbacV1PropertiesSchema = Schema.struct({
  "clusterRoleSelectors": Schema.optional(Schema.union(Schema.lazy(() => ClusterRoleSelectorsSchema), Schema.null)),
  "conditions": Schema.optional(Schema.union(Schema.lazy(() => FluffyConditionsSchema), Schema.null)),
  "ranges": Schema.optional(Schema.union(Schema.lazy(() => HostPortsSchema), Schema.null)),
  "rule": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "scaleDown": Schema.optional(Schema.union(Schema.lazy(() => ScaleDownClassSchema), Schema.null)),
  "scaleUp": Schema.optional(Schema.union(Schema.lazy(() => ScaleDownClassSchema), Schema.null)),
  "policies": Schema.optional(Schema.union(Schema.lazy(() => PoliciesSchema), Schema.null)),
  "selectPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "stabilizationWindowSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "resource": Schema.optional(Schema.union(Schema.lazy(() => ParametersClassSchema), Schema.null)),
  "serviceName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "servicePort": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "controller": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "parameters": Schema.optional(Schema.union(Schema.lazy(() => ParametersClassSchema), Schema.null)),
  "active": Schema.optional(Schema.union(Schema.lazy(() => PurpleActiveSchema), Schema.null)),
  "completionTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "failed": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "startTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "succeeded": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "acquireTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "holderIdentity": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "leaseDurationSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "leaseTransitions": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "renewTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "continue": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "remainingItemCount": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "resourceVersion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "selfLink": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "apiVersion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "fieldsType": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "fieldsV1": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "manager": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "operation": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "time": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "averageUtilization": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "averageValue": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "value": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "phase": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "ports": Schema.optional(Schema.union(Schema.lazy(() => StickyPortsSchema), Schema.null)),
  "to": Schema.optional(Schema.union(Schema.lazy(() => FromSchema), Schema.null)),
  "configMap": Schema.optional(Schema.union(Schema.lazy(() => ConfigMapSchema), Schema.null)),
  "assigned": Schema.optional(Schema.union(Schema.lazy(() => AssignedSchema), Schema.null)),
  "error": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "lastKnownGood": Schema.optional(Schema.union(Schema.lazy(() => AssignedSchema), Schema.null)),
  "kubeletEndpoint": Schema.optional(Schema.union(Schema.lazy(() => KubeletEndpointSchema), Schema.null)),
  "accessModes": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "awsElasticBlockStore": Schema.optional(Schema.union(Schema.lazy(() => AwsElasticBlockStoreSchema), Schema.null)),
  "azureDisk": Schema.optional(Schema.union(Schema.lazy(() => AzureDiskSchema), Schema.null)),
  "azureFile": Schema.optional(Schema.union(Schema.lazy(() => AzureFileSchema), Schema.null)),
  "capacity": Schema.optional(Schema.union(Schema.lazy(() => DefaultSchema), Schema.null)),
  "cephfs": Schema.optional(Schema.union(Schema.lazy(() => FluffyCephfsSchema), Schema.null)),
  "cinder": Schema.optional(Schema.union(Schema.lazy(() => FluffyCinderSchema), Schema.null)),
  "claimRef": Schema.optional(Schema.union(Schema.lazy(() => TargetRefSchema), Schema.null)),
  "csi": Schema.optional(Schema.union(Schema.lazy(() => FluffyCsiSchema), Schema.null)),
  "fc": Schema.optional(Schema.union(Schema.lazy(() => FcSchema), Schema.null)),
  "flexVolume": Schema.optional(Schema.union(Schema.lazy(() => FluffyFlexVolumeSchema), Schema.null)),
  "flocker": Schema.optional(Schema.union(Schema.lazy(() => FlockerSchema), Schema.null)),
  "gcePersistentDisk": Schema.optional(Schema.union(Schema.lazy(() => GcePersistentDiskSchema), Schema.null)),
  "glusterfs": Schema.optional(Schema.union(Schema.lazy(() => GlusterfsSchema), Schema.null)),
  "hostPath": Schema.optional(Schema.union(Schema.lazy(() => HostPathSchema), Schema.null)),
  "iscsi": Schema.optional(Schema.union(Schema.lazy(() => FluffyIscsiSchema), Schema.null)),
  "local": Schema.optional(Schema.union(Schema.lazy(() => LocalSchema), Schema.null)),
  "mountOptions": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "nfs": Schema.optional(Schema.union(Schema.lazy(() => NfsSchema), Schema.null)),
  "nodeAffinity": Schema.optional(Schema.union(Schema.lazy(() => FluffyNodeAffinitySchema), Schema.null)),
  "persistentVolumeReclaimPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "photonPersistentDisk": Schema.optional(Schema.union(Schema.lazy(() => PhotonPersistentDiskSchema), Schema.null)),
  "portworxVolume": Schema.optional(Schema.union(Schema.lazy(() => PortworxVolumeSchema), Schema.null)),
  "quobyte": Schema.optional(Schema.union(Schema.lazy(() => QuobyteSchema), Schema.null)),
  "rbd": Schema.optional(Schema.union(Schema.lazy(() => FluffyRbdSchema), Schema.null)),
  "scaleIO": Schema.optional(Schema.union(Schema.lazy(() => FluffyScaleIoSchema), Schema.null)),
  "storageClassName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "storageos": Schema.optional(Schema.union(Schema.lazy(() => FluffyStorageosSchema), Schema.null)),
  "volumeMode": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "vsphereVolume": Schema.optional(Schema.union(Schema.lazy(() => VsphereVolumeSchema), Schema.null)),
  "message": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "reason": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "preferredDuringSchedulingIgnoredDuringExecution": Schema.optional(Schema.union(Schema.lazy(() => FluffyPreferredDuringSchedulingIgnoredDuringExecutionSchema), Schema.null)),
  "requiredDuringSchedulingIgnoredDuringExecution": Schema.optional(Schema.union(Schema.lazy(() => RequiredDuringSchedulingIgnoredDuringExecutionSchema), Schema.null)),
  "maxUnavailable": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "minAvailable": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "selector": Schema.optional(Schema.union(Schema.lazy(() => MetricSelectorClassSchema), Schema.null)),
  "hard": Schema.optional(Schema.union(Schema.lazy(() => DefaultSchema), Schema.null)),
  "scopeSelector": Schema.optional(Schema.union(Schema.lazy(() => ScopeSelectorSchema), Schema.null)),
  "scopes": Schema.optional(Schema.union(Schema.lazy(() => StagesClassSchema), Schema.null)),
  "used": Schema.optional(Schema.union(Schema.lazy(() => DefaultSchema), Schema.null)),
  "nodeSelector": Schema.optional(Schema.union(Schema.lazy(() => VolumeAttributesClassSchema), Schema.null)),
  "tolerations": Schema.optional(Schema.union(Schema.lazy(() => TolerationsSchema), Schema.null)),
  "allowPrivilegeEscalation": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "capabilities": Schema.optional(Schema.union(Schema.lazy(() => CapabilitiesClassSchema), Schema.null)),
  "privileged": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "procMount": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "readOnlyRootFilesystem": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "runAsGroup": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "runAsNonRoot": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "runAsUser": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "seLinuxOptions": Schema.optional(Schema.union(Schema.lazy(() => SeLinuxOptionsSchema), Schema.null)),
  "windowsOptions": Schema.optional(Schema.union(Schema.lazy(() => WindowsOptionsSchema), Schema.null)),
  "nonResourceAttributes": Schema.optional(Schema.union(Schema.lazy(() => NonResourceAttributesSchema), Schema.null)),
  "resourceAttributes": Schema.optional(Schema.union(Schema.lazy(() => ResourceAttributesSchema), Schema.null)),
  "clientIP": Schema.optional(Schema.union(Schema.lazy(() => ClientIpSchema), Schema.null)),
  "causes": Schema.optional(Schema.union(Schema.lazy(() => CausesSchema), Schema.null)),
  "group": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "kind": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "name": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "retryAfterSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "uid": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "required": Schema.optional(Schema.union(Schema.lazy(() => RequiredClassSchema), Schema.null)),
  "caBundle": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "service": Schema.optional(Schema.union(Schema.lazy(() => PurpleServiceSchema), Schema.null)),
  "url": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type AggregationruleRbacV1Properties = Schema.From<typeof AggregationruleRbacV1PropertiesSchema>;

export const WebhookclientconfigApiextensionsV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.optional(Schema.union(Schema.lazy(() => AggregationruleRbacV1PropertiesSchema), Schema.null)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
});
export type WebhookclientconfigApiextensionsV1 = Schema.From<typeof WebhookclientconfigApiextensionsV1Schema>;

export const Properties91Schema = Schema.struct({
  "policy": Schema.optional(Schema.union(Schema.lazy(() => PurplePolicySchema), Schema.null)),
  "webhook": Schema.optional(Schema.union(Schema.lazy(() => PurpleWebhookSchema), Schema.null)),
  "attachRequired": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "podInfoOnMount": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "volumeLifecycleModes": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "drivers": Schema.optional(Schema.union(Schema.lazy(() => KeyClassSchema), Schema.null)),
  "controller": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "parameters": Schema.optional(Schema.union(Schema.lazy(() => ParametersClassSchema), Schema.null)),
  "acquireTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "holderIdentity": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "leaseDurationSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "leaseTransitions": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "renewTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "limits": Schema.optional(Schema.union(Schema.lazy(() => PurpleLimitsSchema), Schema.null)),
  "egress": Schema.optional(Schema.union(Schema.lazy(() => EgressSchema), Schema.null)),
  "ingress": Schema.optional(Schema.union(Schema.lazy(() => FluffyIngressSchema), Schema.null)),
  "podSelector": Schema.optional(Schema.union(Schema.lazy(() => LabelselectorSchema), Schema.null)),
  "policyTypes": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "env": Schema.optional(Schema.union(Schema.lazy(() => FluffyEnvSchema), Schema.null)),
  "envFrom": Schema.optional(Schema.union(Schema.lazy(() => EnvFromSchema), Schema.null)),
  "selector": Schema.optional(Schema.union(Schema.lazy(() => MetricSelectorClassSchema), Schema.null)),
  "volumeMounts": Schema.optional(Schema.union(Schema.lazy(() => FluffyVolumeMountsSchema), Schema.null)),
  "volumes": Schema.optional(Schema.union(Schema.lazy(() => FluffyVolumesSchema), Schema.null)),
  "allowPrivilegeEscalation": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "allowedCSIDrivers": Schema.optional(Schema.union(Schema.lazy(() => AllowedCsiDriversSchema), Schema.null)),
  "allowedCapabilities": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "allowedFlexVolumes": Schema.optional(Schema.union(Schema.lazy(() => AllowedFlexVolumesSchema), Schema.null)),
  "allowedHostPaths": Schema.optional(Schema.union(Schema.lazy(() => AllowedHostPathsSchema), Schema.null)),
  "allowedProcMountTypes": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "allowedUnsafeSysctls": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "defaultAddCapabilities": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "defaultAllowPrivilegeEscalation": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "forbiddenSysctls": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "fsGroup": Schema.optional(Schema.union(Schema.lazy(() => VolumenoderesourcesStorageV1Beta1Schema), Schema.null)),
  "hostIPC": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "hostNetwork": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "hostPID": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "hostPorts": Schema.optional(Schema.union(Schema.lazy(() => HostPortsSchema), Schema.null)),
  "privileged": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "readOnlyRootFilesystem": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "requiredDropCapabilities": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "runAsGroup": Schema.optional(Schema.union(Schema.lazy(() => RunAsSchema), Schema.null)),
  "runAsUser": Schema.optional(Schema.union(Schema.lazy(() => RunAsUserSchema), Schema.null)),
  "runtimeClass": Schema.optional(Schema.union(Schema.lazy(() => RuntimeClassSchema), Schema.null)),
  "seLinux": Schema.optional(Schema.union(Schema.lazy(() => PurpleSeLinuxSchema), Schema.null)),
  "supplementalGroups": Schema.optional(Schema.union(Schema.lazy(() => WebhookclientconfigApiextensionsV1Schema), Schema.null)),
});
export type Properties91 = Schema.From<typeof Properties91Schema>;

export const StickySpecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties91Schema),
  "required": Schema.optional(Schema.union(Schema.array(Schema.string), Schema.null)),
  "type": Schema.union(Schema.array(Schema.lazy(() => TypeElementSchema)), Schema.lazy(() => TypeElementSchema)),
});
export type StickySpec = Schema.From<typeof StickySpecSchema>;

export const DeleteoptionsPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "dryRun": Schema.lazy(() => CategoriesSchema),
  "gracePeriodSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "orphanDependents": Schema.lazy(() => DriverSchema),
  "preconditions": Schema.lazy(() => PreconditionsClassSchema),
  "propagationPolicy": Schema.lazy(() => DriverSchema),
});
export type DeleteoptionsProperties = Schema.From<typeof DeleteoptionsPropertiesSchema>;

export const FluffyDeleteOptionsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DeleteoptionsPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type FluffyDeleteOptions = Schema.From<typeof FluffyDeleteOptionsSchema>;

export const AuditsinkPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.optional(Schema.union(Schema.lazy(() => StickySpecSchema), Schema.null)),
  "target": Schema.optional(Schema.union(Schema.lazy(() => TargetRefSchema), Schema.null)),
  "conditions": Schema.optional(Schema.union(Schema.lazy(() => IndigoConditionsSchema), Schema.null)),
  "subsets": Schema.optional(Schema.union(Schema.lazy(() => SubsetsSchema), Schema.null)),
  "deleteOptions": Schema.optional(Schema.union(Schema.lazy(() => FluffyDeleteOptionsSchema), Schema.null)),
  "webhooks": Schema.optional(Schema.union(Schema.lazy(() => FluffyWebhooksSchema), Schema.null)),
  "template": Schema.optional(Schema.union(Schema.lazy(() => PurpleTemplateSchema), Schema.null)),
});
export type AuditsinkProperties = Schema.From<typeof AuditsinkPropertiesSchema>;

export const ValidatingwebhookconfigurationSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AuditsinkPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Validatingwebhookconfiguration = Schema.From<typeof ValidatingwebhookconfigurationSchema>;

export const Properties90Schema = Schema.struct({
  "admissionReviewVersions": Schema.lazy(() => AdmissionReviewVersionsSchema),
  "clientConfig": Schema.lazy(() => WebhookclientconfigAdmissionregistrationV1Schema),
  "failurePolicy": Schema.lazy(() => DriverSchema),
  "matchPolicy": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "namespaceSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "objectSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "reinvocationPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "rules": Schema.lazy(() => PurpleRulesSchema),
  "sideEffects": Schema.lazy(() => PdNameSchema),
  "timeoutSeconds": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties90 = Schema.From<typeof Properties90Schema>;

export const Items20Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties90Schema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items20 = Schema.From<typeof Items20Schema>;

export const PurpleWebhooksSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items20Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type PurpleWebhooks = Schema.From<typeof PurpleWebhooksSchema>;

export const Properties89Schema = Schema.struct({
  "appProtocol": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "port": Schema.lazy(() => GroupPriorityMinimumSchema),
  "protocol": Schema.lazy(() => DriverSchema),
});
export type Properties89 = Schema.From<typeof Properties89Schema>;

export const Items19Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties89Schema),
  "required": Schema.array(Schema.lazy(() => HttpGetRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items19 = Schema.From<typeof Items19Schema>;

export const IndigoPortsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items19Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type IndigoPorts = Schema.From<typeof IndigoPortsSchema>;

export const Properties88Schema = Schema.struct({
  "addresses": Schema.lazy(() => NotReadyAddressesClassSchema),
  "notReadyAddresses": Schema.lazy(() => NotReadyAddressesClassSchema),
  "ports": Schema.lazy(() => IndigoPortsSchema),
});
export type Properties88 = Schema.From<typeof Properties88Schema>;

export const SubsetsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties88Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type SubsetsItems = Schema.From<typeof SubsetsItemsSchema>;

export const SubsetsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => SubsetsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Subsets = Schema.From<typeof SubsetsSchema>;

export const ThrottlePropertiesSchema = Schema.struct({
  "burst": Schema.lazy(() => LastTransitionTimeSchema),
  "qps": Schema.lazy(() => LastTransitionTimeSchema),
});
export type ThrottleProperties = Schema.From<typeof ThrottlePropertiesSchema>;

export const ThrottleSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ThrottlePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Throttle = Schema.From<typeof ThrottleSchema>;

export const Properties87Schema = Schema.struct({
  "clientConfig": Schema.lazy(() => WebhookclientconfigAdmissionregistrationV1Schema),
  "throttle": Schema.lazy(() => ThrottleSchema),
});
export type Properties87 = Schema.From<typeof Properties87Schema>;

export const PurpleWebhookSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties87Schema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type PurpleWebhook = Schema.From<typeof PurpleWebhookSchema>;

export const Properties47Schema = Schema.struct({
  "hosts": Schema.lazy(() => CategoriesSchema),
  "secretName": Schema.lazy(() => DriverSchema),
});
export type Properties47 = Schema.From<typeof Properties47Schema>;

export const TlsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties47Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TlsItems = Schema.From<typeof TlsItemsSchema>;

export const TlsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => TlsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Tls = Schema.From<typeof TlsSchema>;

export const SessionAffinityConfigPropertiesSchema = Schema.struct({
  "clientIP": Schema.lazy(() => ClientIpSchema),
});
export type SessionAffinityConfigProperties = Schema.From<typeof SessionAffinityConfigPropertiesSchema>;

export const SessionAffinityConfigSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SessionAffinityConfigPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type SessionAffinityConfig = Schema.From<typeof SessionAffinityConfigSchema>;

export const Properties36Schema = Schema.struct({
  "periodSeconds": Schema.lazy(() => GroupPriorityMinimumSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
  "value": Schema.lazy(() => GroupPriorityMinimumSchema),
});
export type Properties36 = Schema.From<typeof Properties36Schema>;

export const PoliciesItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties36Schema),
  "required": Schema.array(Schema.lazy(() => HpascalingpolicyAutoscalingV2Beta2RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PoliciesItems = Schema.From<typeof PoliciesItemsSchema>;

export const PoliciesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => PoliciesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Policies = Schema.From<typeof PoliciesSchema>;

export const ScaleDownPropertiesSchema = Schema.struct({
  "policies": Schema.lazy(() => PoliciesSchema),
  "selectPolicy": Schema.lazy(() => DriverSchema),
  "stabilizationWindowSeconds": Schema.lazy(() => LastTransitionTimeSchema),
});
export type ScaleDownProperties = Schema.From<typeof ScaleDownPropertiesSchema>;

export const ScaleDownClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ScaleDownPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ScaleDownClass = Schema.From<typeof ScaleDownClassSchema>;

export const Properties35Schema = Schema.struct({
  "host": Schema.lazy(() => DriverSchema),
  "http": Schema.lazy(() => HttpSchema),
});
export type Properties35 = Schema.From<typeof Properties35Schema>;

export const Items3Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties35Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items3 = Schema.From<typeof Items3Schema>;

export const FluffyRulesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items3Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyRules = Schema.From<typeof FluffyRulesSchema>;

export const Properties34Schema = Schema.struct({
  "maxUnavailable": Schema.lazy(() => TargetAverageValueSchema),
  "maxSurge": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
});
export type Properties34 = Schema.From<typeof Properties34Schema>;

export const PurpleRollingUpdateSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties34Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleRollingUpdate = Schema.From<typeof PurpleRollingUpdateSchema>;

export const PortSchema = Schema.struct({
  "description": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "format": Schema.optional(Schema.union(Schema.lazy(() => FormatSchema), Schema.null)),
  "type": Schema.optional(Schema.union(Schema.lazy(() => TypeElementSchema), Schema.null)),
  "oneOf": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => BuildDateSchema)), Schema.null)),
});
export type Port = Schema.From<typeof PortSchema>;

export const Properties32Schema = Schema.struct({
  "appProtocol": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "name": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "port": Schema.lazy(() => PortSchema),
  "protocol": Schema.lazy(() => DriverSchema),
  "nodePort": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "targetPort": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
});
export type Properties32 = Schema.From<typeof Properties32Schema>;

export const Items2Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties32Schema),
  "required": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => HttpGetRequiredSchema)), Schema.null)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items2 = Schema.From<typeof Items2Schema>;

export const FluffyPortsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items2Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-map-keys": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => HttpGetRequiredSchema)), Schema.null)),
  "x-kubernetes-list-type": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesListTypeSchema), Schema.null)),
  "x-kubernetes-patch-merge-key": Schema.optional(Schema.union(Schema.lazy(() => HttpGetRequiredSchema), Schema.null)),
  "x-kubernetes-patch-strategy": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesPatchStrategySchema), Schema.null)),
});
export type FluffyPorts = Schema.From<typeof FluffyPortsSchema>;

export const Properties24Schema = Schema.struct({
  "key": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
  "operator": Schema.lazy(() => GroupVersionSchema),
  "values": Schema.lazy(() => ValuesClassSchema),
  "scopeName": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
});
export type Properties24 = Schema.From<typeof Properties24Schema>;

export const MischievousItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties24Schema),
  "required": Schema.array(Schema.lazy(() => LabelselectorrequirementMetaV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type MischievousItems = Schema.From<typeof MischievousItemsSchema>;

export const FluffyMatchExpressionsSchema = Schema.struct({
  "description": Schema.lazy(() => TentacledDescriptionSchema),
  "items": Schema.lazy(() => MischievousItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyMatchExpressions = Schema.From<typeof FluffyMatchExpressionsSchema>;

export const LoadBalancerPropertiesSchema = Schema.struct({
  "ingress": Schema.lazy(() => PurpleIngressSchema),
});
export type LoadBalancerProperties = Schema.From<typeof LoadBalancerPropertiesSchema>;

export const LoadBalancerSchema = Schema.struct({
  "description": Schema.lazy(() => LoadBalancerDescriptionSchema),
  "properties": Schema.lazy(() => LoadBalancerPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type LoadBalancer = Schema.From<typeof LoadBalancerSchema>;

export const KubeletEndpointPropertiesSchema = Schema.struct({
  "Port": Schema.lazy(() => GroupPriorityMinimumSchema),
});
export type KubeletEndpointProperties = Schema.From<typeof KubeletEndpointPropertiesSchema>;

export const KubeletEndpointSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => KubeletEndpointPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type KubeletEndpoint = Schema.From<typeof KubeletEndpointSchema>;

export const Properties22Schema = Schema.struct({
  "fieldRef": Schema.optional(Schema.union(Schema.lazy(() => FieldRefSchema), Schema.null)),
  "mode": Schema.lazy(() => LastTransitionTimeSchema),
  "path": Schema.lazy(() => GroupVersionSchema),
  "resourceFieldRef": Schema.optional(Schema.union(Schema.lazy(() => ResourceFieldRefSchema), Schema.null)),
  "key": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
});
export type Properties22 = Schema.From<typeof Properties22Schema>;

export const FriskyItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties22Schema),
  "required": Schema.array(Schema.lazy(() => HostPathRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FriskyItems = Schema.From<typeof FriskyItemsSchema>;

export const MagentaItemsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => FriskyItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type MagentaItems = Schema.From<typeof MagentaItemsSchema>;

export const Properties21Schema = Schema.struct({
  "hostname": Schema.lazy(() => DriverSchema),
  "ip": Schema.lazy(() => DriverSchema),
});
export type Properties21 = Schema.From<typeof Properties21Schema>;

export const CunningItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties21Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type CunningItems = Schema.From<typeof CunningItemsSchema>;

export const PurpleIngressSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => CunningItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleIngress = Schema.From<typeof PurpleIngressSchema>;

export const FluffyBackendSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => BackendPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type FluffyBackend = Schema.From<typeof FluffyBackendSchema>;

export const Properties20Schema = Schema.struct({
  "backend": Schema.lazy(() => FluffyBackendSchema),
  "path": Schema.lazy(() => DriverSchema),
  "pathType": Schema.lazy(() => DriverSchema),
});
export type Properties20 = Schema.From<typeof Properties20Schema>;

export const PathsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties20Schema),
  "required": Schema.array(Schema.lazy(() => HttpingresspathExtensionsV1Beta1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PathsItems = Schema.From<typeof PathsItemsSchema>;

export const PurplePathsSchema = Schema.struct({
  "description": Schema.lazy(() => PathsDescriptionSchema),
  "items": Schema.lazy(() => PathsItemsSchema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type PurplePaths = Schema.From<typeof PurplePathsSchema>;

export const HttpPropertiesSchema = Schema.struct({
  "paths": Schema.lazy(() => PurplePathsSchema),
});
export type HttpProperties = Schema.From<typeof HttpPropertiesSchema>;

export const HttpSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HttpPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HttpRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Http = Schema.From<typeof HttpSchema>;

export const Properties18Schema = Schema.struct({
  "lastTransitionTime": Schema.lazy(() => LastTransitionTimeSchema),
  "lastUpdateTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "message": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "status": Schema.lazy(() => PdNameSchema),
  "type": Schema.lazy(() => PdNameSchema),
  "lastProbeTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
});
export type Properties18 = Schema.From<typeof Properties18Schema>;

export const AmbitiousItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties18Schema),
  "required": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)), Schema.null)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AmbitiousItems = Schema.From<typeof AmbitiousItemsSchema>;

export const PurpleConditionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => AmbitiousItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.optional(Schema.union(Schema.lazy(() => ConfigMapKeyRefRequiredSchema), Schema.null)),
  "x-kubernetes-patch-strategy": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesPatchStrategySchema), Schema.null)),
  "x-kubernetes-list-map-keys": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)), Schema.null)),
  "x-kubernetes-list-type": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesListTypeSchema), Schema.null)),
});
export type PurpleConditions = Schema.From<typeof PurpleConditionsSchema>;

export const ClientIpPropertiesSchema = Schema.struct({
  "timeoutSeconds": Schema.lazy(() => LastTransitionTimeSchema),
});
export type ClientIpProperties = Schema.From<typeof ClientIpPropertiesSchema>;

export const ClientIpSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ClientIpPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ClientIp = Schema.From<typeof ClientIpSchema>;

export const BackendPropertiesSchema = Schema.struct({
  "resource": Schema.lazy(() => ParametersClassSchema),
  "serviceName": Schema.lazy(() => DriverSchema),
  "servicePort": Schema.lazy(() => TargetAverageValueSchema),
});
export type BackendProperties = Schema.From<typeof BackendPropertiesSchema>;

export const PurpleBackendSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => BackendPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleBackend = Schema.From<typeof PurpleBackendSchema>;

export const AssignedSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ActivePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Assigned = Schema.From<typeof AssignedSchema>;

export const FluffyPropertiesSchema = Schema.struct({
  "hostname": Schema.lazy(() => DriverSchema),
  "ip": Schema.lazy(() => GroupVersionSchema),
  "nodeName": Schema.lazy(() => DriverSchema),
  "targetRef": Schema.lazy(() => TargetRefSchema),
});
export type FluffyProperties = Schema.From<typeof FluffyPropertiesSchema>;

export const NotReadyAddressesItemsSchema = Schema.struct({
  "description": Schema.lazy(() => EndpointaddressV1DescriptionSchema),
  "properties": Schema.lazy(() => FluffyPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type NotReadyAddressesItems = Schema.From<typeof NotReadyAddressesItemsSchema>;

export const NotReadyAddressesClassSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => NotReadyAddressesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type NotReadyAddressesClass = Schema.From<typeof NotReadyAddressesClassSchema>;

export const ActivePropertiesSchema = Schema.struct({
  "configMap": Schema.lazy(() => ConfigMapSchema),
});
export type ActiveProperties = Schema.From<typeof ActivePropertiesSchema>;

export const PurpleActiveSchema = Schema.struct({
  "description": Schema.string,
  "format": Schema.optional(Schema.union(Schema.lazy(() => FormatSchema), Schema.null)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "properties": Schema.optional(Schema.union(Schema.lazy(() => ActivePropertiesSchema), Schema.null)),
});
export type PurpleActive = Schema.From<typeof PurpleActiveSchema>;

export const AffinityV1PropertiesSchema = Schema.struct({
  "nodeAffinity": Schema.optional(Schema.union(Schema.lazy(() => PurpleNodeAffinitySchema), Schema.null)),
  "podAffinity": Schema.optional(Schema.union(Schema.lazy(() => PodAAffinitySchema), Schema.null)),
  "podAntiAffinity": Schema.optional(Schema.union(Schema.lazy(() => PodAAffinitySchema), Schema.null)),
  "rollingUpdate": Schema.optional(Schema.union(Schema.lazy(() => PurpleRollingUpdateSchema), Schema.null)),
  "type": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "availableReplicas": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "collisionCount": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "conditions": Schema.optional(Schema.union(Schema.lazy(() => PurpleConditionsSchema), Schema.null)),
  "observedGeneration": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "readyReplicas": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "replicas": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "unavailableReplicas": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "updatedReplicas": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "items": Schema.optional(Schema.union(Schema.lazy(() => MagentaItemsSchema), Schema.null)),
  "defaultMode": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "medium": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "sizeLimit": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "ready": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "appProtocol": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "name": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "port": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "protocol": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "addresses": Schema.optional(Schema.union(Schema.lazy(() => NotReadyAddressesClassSchema), Schema.null)),
  "notReadyAddresses": Schema.optional(Schema.union(Schema.lazy(() => NotReadyAddressesClassSchema), Schema.null)),
  "ports": Schema.optional(Schema.union(Schema.lazy(() => FluffyPortsSchema), Schema.null)),
  "configMapRef": Schema.optional(Schema.union(Schema.lazy(() => RefSchema), Schema.null)),
  "prefix": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "secretRef": Schema.optional(Schema.union(Schema.lazy(() => RefSchema), Schema.null)),
  "configMapKeyRef": Schema.optional(Schema.union(Schema.lazy(() => KeyRefSchema), Schema.null)),
  "fieldRef": Schema.optional(Schema.union(Schema.lazy(() => FieldRefSchema), Schema.null)),
  "resourceFieldRef": Schema.optional(Schema.union(Schema.lazy(() => ResourceFieldRefSchema), Schema.null)),
  "secretKeyRef": Schema.optional(Schema.union(Schema.lazy(() => KeyRefSchema), Schema.null)),
  "count": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "lastObservedTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "state": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "component": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "host": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "command": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "description": Schema.optional(Schema.union(Schema.lazy(() => BuildDateSchema), Schema.null)),
  "url": Schema.optional(Schema.union(Schema.lazy(() => BuildDateSchema), Schema.null)),
  "fsType": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "lun": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "readOnly": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "targetWWNs": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "wwids": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "datasetName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "datasetUUID": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "lastTransitionTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "message": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "reason": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "status": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "ranges": Schema.optional(Schema.union(Schema.lazy(() => HostPortsSchema), Schema.null)),
  "rule": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "exec": Schema.optional(Schema.union(Schema.lazy(() => ExecSchema), Schema.null)),
  "httpGet": Schema.optional(Schema.union(Schema.lazy(() => HttpGetSchema), Schema.null)),
  "tcpSocket": Schema.optional(Schema.union(Schema.lazy(() => TcpSocketSchema), Schema.null)),
  "scaleDown": Schema.optional(Schema.union(Schema.lazy(() => ScaleDownClassSchema), Schema.null)),
  "scaleUp": Schema.optional(Schema.union(Schema.lazy(() => ScaleDownClassSchema), Schema.null)),
  "hostnames": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "ip": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "resource": Schema.optional(Schema.union(Schema.lazy(() => ParametersClassSchema), Schema.null)),
  "serviceName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "servicePort": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "controller": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "parameters": Schema.optional(Schema.union(Schema.lazy(() => ParametersClassSchema), Schema.null)),
  "http": Schema.optional(Schema.union(Schema.lazy(() => HttpSchema), Schema.null)),
  "backend": Schema.optional(Schema.union(Schema.lazy(() => PurpleBackendSchema), Schema.null)),
  "ingressClassName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "rules": Schema.optional(Schema.union(Schema.lazy(() => FluffyRulesSchema), Schema.null)),
  "tls": Schema.optional(Schema.union(Schema.lazy(() => TlsSchema), Schema.null)),
  "loadBalancer": Schema.optional(Schema.union(Schema.lazy(() => LoadBalancerSchema), Schema.null)),
  "hosts": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "secretName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "active": Schema.optional(Schema.union(Schema.lazy(() => PurpleActiveSchema), Schema.null)),
  "completionTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "failed": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "startTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "succeeded": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "acquireTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "holderIdentity": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "leaseDurationSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "leaseTransitions": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "renewTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "postStart": Schema.optional(Schema.union(Schema.lazy(() => PostStartSchema), Schema.null)),
  "preStop": Schema.optional(Schema.union(Schema.lazy(() => PostStartSchema), Schema.null)),
  "assuredConcurrencyShares": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "limitResponse": Schema.optional(Schema.union(Schema.lazy(() => LimitResponseSchema), Schema.null)),
  "hostname": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "ingress": Schema.optional(Schema.union(Schema.lazy(() => PurpleIngressSchema), Schema.null)),
  "apiVersion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "fieldsType": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "fieldsV1": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "manager": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "operation": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "time": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "finalizers": Schema.optional(Schema.union(Schema.lazy(() => FinalizersSchema), Schema.null)),
  "from": Schema.optional(Schema.union(Schema.lazy(() => FromSchema), Schema.null)),
  "assigned": Schema.optional(Schema.union(Schema.lazy(() => AssignedSchema), Schema.null)),
  "error": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "lastKnownGood": Schema.optional(Schema.union(Schema.lazy(() => AssignedSchema), Schema.null)),
  "kubeletEndpoint": Schema.optional(Schema.union(Schema.lazy(() => KubeletEndpointSchema), Schema.null)),
  "matchExpressions": Schema.optional(Schema.union(Schema.lazy(() => FluffyMatchExpressionsSchema), Schema.null)),
  "matchFields": Schema.optional(Schema.union(Schema.lazy(() => MatchSchema), Schema.null)),
  "path": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "verb": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "annotations": Schema.optional(Schema.union(Schema.lazy(() => VolumeAttributesClassSchema), Schema.null)),
  "clusterName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "creationTimestamp": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "deletionGracePeriodSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "deletionTimestamp": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "generateName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "generation": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "labels": Schema.optional(Schema.union(Schema.lazy(() => VolumeAttributesClassSchema), Schema.null)),
  "managedFields": Schema.optional(Schema.union(Schema.lazy(() => ManagedFieldsSchema), Schema.null)),
  "namespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "ownerReferences": Schema.optional(Schema.union(Schema.lazy(() => OwnerReferencesSchema), Schema.null)),
  "resourceVersion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "selfLink": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "uid": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "podFixed": Schema.optional(Schema.union(Schema.lazy(() => DefaultSchema), Schema.null)),
  "maxUnavailable": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "minAvailable": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "selector": Schema.optional(Schema.union(Schema.lazy(() => PurpleSelectorSchema), Schema.null)),
  "nameservers": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "options": Schema.optional(Schema.union(Schema.lazy(() => OptionsSchema), Schema.null)),
  "searches": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "value": Schema.optional(Schema.union(Schema.lazy(() => BuildDateSchema), Schema.null)),
  "metadata": Schema.optional(Schema.union(Schema.lazy(() => PurpleMetadataSchema), Schema.null)),
  "spec": Schema.optional(Schema.union(Schema.lazy(() => PurpleSpecSchema), Schema.null)),
  "partition": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "apiGroups": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "apiVersions": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "operations": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "resources": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "scope": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "optional": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "clusterIP": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "externalIPs": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "externalName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "externalTrafficPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "healthCheckNodePort": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "ipFamily": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "loadBalancerIP": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "loadBalancerSourceRanges": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "publishNotReadyAddresses": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "sessionAffinity": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "sessionAffinityConfig": Schema.optional(Schema.union(Schema.lazy(() => SessionAffinityConfigSchema), Schema.null)),
  "topologyKeys": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "clientIP": Schema.optional(Schema.union(Schema.lazy(() => ClientIpSchema), Schema.null)),
  "field": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "required": Schema.optional(Schema.union(Schema.lazy(() => RequiredClassSchema), Schema.null)),
});
export type AffinityV1Properties = Schema.From<typeof AffinityV1PropertiesSchema>;

export const VolumenoderesourcesStorageV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.optional(Schema.union(Schema.lazy(() => AffinityV1PropertiesSchema), Schema.null)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "required": Schema.optional(Schema.union(Schema.array(Schema.string), Schema.null)),
});
export type VolumenoderesourcesStorageV1Beta1 = Schema.From<typeof VolumenoderesourcesStorageV1Beta1Schema>;

export const SeLinuxPropertiesSchema = Schema.struct({
  "rule": Schema.lazy(() => GroupVersionSchema),
  "seLinuxOptions": Schema.lazy(() => SeLinuxOptionsSchema),
});
export type SeLinuxProperties = Schema.From<typeof SeLinuxPropertiesSchema>;

export const PurpleSeLinuxSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SeLinuxPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type PurpleSeLinux = Schema.From<typeof PurpleSeLinuxSchema>;

export const RuntimeClassPropertiesSchema = Schema.struct({
  "allowedRuntimeClassNames": Schema.lazy(() => ConversionReviewVersionsSchema),
  "defaultRuntimeClassName": Schema.lazy(() => DriverSchema),
});
export type RuntimeClassProperties = Schema.From<typeof RuntimeClassPropertiesSchema>;

export const RuntimeClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RuntimeClassPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type RuntimeClass = Schema.From<typeof RuntimeClassSchema>;

export const RunAsUserSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RunAsGroupPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type RunAsUser = Schema.From<typeof RunAsUserSchema>;

export const RunAsGroupPropertiesSchema = Schema.struct({
  "ranges": Schema.lazy(() => HostPortsSchema),
  "rule": Schema.lazy(() => GroupVersionSchema),
});
export type RunAsGroupProperties = Schema.From<typeof RunAsGroupPropertiesSchema>;

export const RunAsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RunAsGroupPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type RunAs = Schema.From<typeof RunAsSchema>;

export const Properties86Schema = Schema.struct({
  "level": Schema.lazy(() => GroupVersionSchema),
  "stages": Schema.lazy(() => CategoriesSchema),
});
export type Properties86 = Schema.From<typeof Properties86Schema>;

export const PurplePolicySchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties86Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type PurplePolicy = Schema.From<typeof PurplePolicySchema>;

export const LabelselectorSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SelectorPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
});
export type Labelselector = Schema.From<typeof LabelselectorSchema>;

export const Properties85Schema = Schema.struct({
  "default": Schema.lazy(() => DefaultSchema),
  "defaultRequest": Schema.lazy(() => DefaultSchema),
  "max": Schema.lazy(() => DefaultSchema),
  "maxLimitRequestRatio": Schema.lazy(() => DefaultSchema),
  "min": Schema.lazy(() => DefaultSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
});
export type Properties85 = Schema.From<typeof Properties85Schema>;

export const LimitsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties85Schema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type LimitsItems = Schema.From<typeof LimitsItemsSchema>;

export const PurpleLimitsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => LimitsItemsSchema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type PurpleLimits = Schema.From<typeof PurpleLimitsSchema>;

export const Properties84Schema = Schema.struct({
  "from": Schema.lazy(() => FromSchema),
  "ports": Schema.lazy(() => StickyPortsSchema),
});
export type Properties84 = Schema.From<typeof Properties84Schema>;

export const Items18Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties84Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items18 = Schema.From<typeof Items18Schema>;

export const FluffyIngressSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items18Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyIngress = Schema.From<typeof FluffyIngressSchema>;

export const FsGroupPropertiesSchema = Schema.struct({
  "ranges": Schema.lazy(() => HostPortsSchema),
  "rule": Schema.lazy(() => DriverSchema),
});
export type FsGroupProperties = Schema.From<typeof FsGroupPropertiesSchema>;

export const FsGroupSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FsGroupPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type FsGroup = Schema.From<typeof FsGroupSchema>;

export const Properties19Schema = Schema.struct({
  "ipBlock": Schema.lazy(() => IpBlockSchema),
  "namespaceSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "podSelector": Schema.lazy(() => MetricSelectorClassSchema),
});
export type Properties19 = Schema.From<typeof Properties19Schema>;

export const FromItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties19Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FromItems = Schema.From<typeof FromItemsSchema>;

export const FromSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => FromItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type From = Schema.From<typeof FromSchema>;

export const Properties56Schema = Schema.struct({
  "port": Schema.lazy(() => TargetAverageValueSchema),
  "protocol": Schema.lazy(() => DriverSchema),
});
export type Properties56 = Schema.From<typeof Properties56Schema>;

export const Items5Schema = Schema.struct({
  "description": Schema.lazy(() => IndigoDescriptionSchema),
  "properties": Schema.lazy(() => Properties56Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items5 = Schema.From<typeof Items5Schema>;

export const StickyPortsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items5Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type StickyPorts = Schema.From<typeof StickyPortsSchema>;

export const Properties83Schema = Schema.struct({
  "ports": Schema.lazy(() => StickyPortsSchema),
  "to": Schema.lazy(() => FromSchema),
});
export type Properties83 = Schema.From<typeof Properties83Schema>;

export const EgressItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties83Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type EgressItems = Schema.From<typeof EgressItemsSchema>;

export const EgressSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => EgressItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Egress = Schema.From<typeof EgressSchema>;

export const Properties82Schema = Schema.struct({
  "pathPrefix": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
});
export type Properties82 = Schema.From<typeof Properties82Schema>;

export const AllowedHostPathsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties82Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AllowedHostPathsItems = Schema.From<typeof AllowedHostPathsItemsSchema>;

export const AllowedHostPathsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => AllowedHostPathsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AllowedHostPaths = Schema.From<typeof AllowedHostPathsSchema>;

export const Properties81Schema = Schema.struct({
  "driver": Schema.lazy(() => GroupVersionSchema),
});
export type Properties81 = Schema.From<typeof Properties81Schema>;

export const AllowedFlexVolumesItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties81Schema),
  "required": Schema.array(Schema.lazy(() => CsiRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AllowedFlexVolumesItems = Schema.From<typeof AllowedFlexVolumesItemsSchema>;

export const AllowedFlexVolumesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => AllowedFlexVolumesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AllowedFlexVolumes = Schema.From<typeof AllowedFlexVolumesSchema>;

export const PriorityLevelConfigurationPropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => GroupVersionSchema),
});
export type PriorityLevelConfigurationProperties = Schema.From<typeof PriorityLevelConfigurationPropertiesSchema>;

export const PriorityLevelConfigurationSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PriorityLevelConfigurationPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PriorityLevelConfiguration = Schema.From<typeof PriorityLevelConfigurationSchema>;

export const AllowedCsiDriversSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => PriorityLevelConfigurationSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AllowedCsiDrivers = Schema.From<typeof AllowedCsiDriversSchema>;

export const Properties80Schema = Schema.struct({
  "policy": Schema.optional(Schema.union(Schema.lazy(() => PurplePolicySchema), Schema.null)),
  "webhook": Schema.optional(Schema.union(Schema.lazy(() => PurpleWebhookSchema), Schema.null)),
  "attachRequired": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "podInfoOnMount": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "volumeLifecycleModes": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "drivers": Schema.optional(Schema.union(Schema.lazy(() => KeyClassSchema), Schema.null)),
  "controller": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "parameters": Schema.optional(Schema.union(Schema.lazy(() => ParametersClassSchema), Schema.null)),
  "acquireTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "holderIdentity": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "leaseDurationSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "leaseTransitions": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "renewTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "limits": Schema.optional(Schema.union(Schema.lazy(() => PurpleLimitsSchema), Schema.null)),
  "egress": Schema.optional(Schema.union(Schema.lazy(() => EgressSchema), Schema.null)),
  "ingress": Schema.optional(Schema.union(Schema.lazy(() => FluffyIngressSchema), Schema.null)),
  "podSelector": Schema.optional(Schema.union(Schema.lazy(() => LabelselectorSchema), Schema.null)),
  "policyTypes": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "env": Schema.optional(Schema.union(Schema.lazy(() => FluffyEnvSchema), Schema.null)),
  "envFrom": Schema.optional(Schema.union(Schema.lazy(() => EnvFromSchema), Schema.null)),
  "selector": Schema.optional(Schema.union(Schema.lazy(() => MetricSelectorClassSchema), Schema.null)),
  "volumeMounts": Schema.optional(Schema.union(Schema.lazy(() => FluffyVolumeMountsSchema), Schema.null)),
  "volumes": Schema.optional(Schema.union(Schema.lazy(() => FluffyVolumesSchema), Schema.null)),
  "allowPrivilegeEscalation": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "allowedCSIDrivers": Schema.optional(Schema.union(Schema.lazy(() => AllowedCsiDriversSchema), Schema.null)),
  "allowedCapabilities": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "allowedFlexVolumes": Schema.optional(Schema.union(Schema.lazy(() => AllowedFlexVolumesSchema), Schema.null)),
  "allowedHostPaths": Schema.optional(Schema.union(Schema.lazy(() => AllowedHostPathsSchema), Schema.null)),
  "allowedProcMountTypes": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "allowedUnsafeSysctls": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "defaultAddCapabilities": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "defaultAllowPrivilegeEscalation": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "forbiddenSysctls": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "fsGroup": Schema.optional(Schema.union(Schema.lazy(() => FsGroupSchema), Schema.null)),
  "hostIPC": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "hostNetwork": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "hostPID": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "hostPorts": Schema.optional(Schema.union(Schema.lazy(() => HostPortsSchema), Schema.null)),
  "privileged": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "readOnlyRootFilesystem": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "requiredDropCapabilities": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "runAsGroup": Schema.optional(Schema.union(Schema.lazy(() => RunAsSchema), Schema.null)),
  "runAsUser": Schema.optional(Schema.union(Schema.lazy(() => RunAsUserSchema), Schema.null)),
  "runtimeClass": Schema.optional(Schema.union(Schema.lazy(() => RuntimeClassSchema), Schema.null)),
  "seLinux": Schema.optional(Schema.union(Schema.lazy(() => PurpleSeLinuxSchema), Schema.null)),
  "supplementalGroups": Schema.optional(Schema.union(Schema.lazy(() => VolumenoderesourcesStorageV1Beta1Schema), Schema.null)),
});
export type Properties80 = Schema.From<typeof Properties80Schema>;

export const TentacledSpecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties80Schema),
  "required": Schema.optional(Schema.union(Schema.array(Schema.string), Schema.null)),
  "type": Schema.union(Schema.array(Schema.lazy(() => TypeElementSchema)), Schema.lazy(() => TypeElementSchema)),
});
export type TentacledSpec = Schema.From<typeof TentacledSpecSchema>;

export const Properties79Schema = Schema.struct({
  "apiGroups": Schema.lazy(() => ValuesClassSchema),
  "nonResourceURLs": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "resourceNames": Schema.lazy(() => ValuesClassSchema),
  "resources": Schema.lazy(() => ValuesClassSchema),
  "verbs": Schema.lazy(() => ConversionReviewVersionsSchema),
});
export type Properties79 = Schema.From<typeof Properties79Schema>;

export const Items17Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties79Schema),
  "required": Schema.array(Schema.lazy(() => NonresourcepolicyruleFlowcontrolV1Alpha1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items17 = Schema.From<typeof Items17Schema>;

export const ResourceRulesClassSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items17Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ResourceRulesClass = Schema.From<typeof ResourceRulesClassSchema>;

export const Properties78Schema = Schema.struct({
  "resourceVersion": Schema.lazy(() => DriverSchema),
  "uid": Schema.lazy(() => DriverSchema),
});
export type Properties78 = Schema.From<typeof Properties78Schema>;

export const PreconditionsClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties78Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PreconditionsClass = Schema.From<typeof PreconditionsClassSchema>;

export const DeleteoptionsMetaV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "dryRun": Schema.lazy(() => CategoriesSchema),
  "gracePeriodSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "orphanDependents": Schema.lazy(() => DriverSchema),
  "preconditions": Schema.lazy(() => PreconditionsClassSchema),
  "propagationPolicy": Schema.lazy(() => DriverSchema),
});
export type DeleteoptionsMetaV1Properties = Schema.From<typeof DeleteoptionsMetaV1PropertiesSchema>;

export const PurpleDeleteOptionsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DeleteoptionsMetaV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type PurpleDeleteOptions = Schema.From<typeof PurpleDeleteOptionsSchema>;

export const Properties77Schema = Schema.struct({
  "error": Schema.lazy(() => DriverSchema),
  "message": Schema.lazy(() => DriverSchema),
  "status": Schema.lazy(() => GroupVersionSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
});
export type Properties77 = Schema.From<typeof Properties77Schema>;

export const Items16Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties77Schema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items16 = Schema.From<typeof Items16Schema>;

export const IndigoConditionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items16Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type IndigoConditions = Schema.From<typeof IndigoConditionsSchema>;

export const AuditsinkAuditregistrationV1Alpha1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.optional(Schema.union(Schema.lazy(() => TentacledSpecSchema), Schema.null)),
  "target": Schema.optional(Schema.union(Schema.lazy(() => TargetRefSchema), Schema.null)),
  "conditions": Schema.optional(Schema.union(Schema.lazy(() => IndigoConditionsSchema), Schema.null)),
  "subsets": Schema.optional(Schema.union(Schema.lazy(() => SubsetsSchema), Schema.null)),
  "deleteOptions": Schema.optional(Schema.union(Schema.lazy(() => PurpleDeleteOptionsSchema), Schema.null)),
  "webhooks": Schema.optional(Schema.union(Schema.lazy(() => PurpleWebhooksSchema), Schema.null)),
  "template": Schema.optional(Schema.union(Schema.lazy(() => PurpleTemplateSchema), Schema.null)),
  "rules": Schema.optional(Schema.union(Schema.lazy(() => ResourceRulesClassSchema), Schema.null)),
});
export type AuditsinkAuditregistrationV1Alpha1Properties = Schema.From<typeof AuditsinkAuditregistrationV1Alpha1PropertiesSchema>;

export const ValidatingwebhookconfigurationAdmissionregistrationV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AuditsinkAuditregistrationV1Alpha1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ValidatingwebhookconfigurationAdmissionregistrationV1 = Schema.From<typeof ValidatingwebhookconfigurationAdmissionregistrationV1Schema>;

export const AttachedvolumeV1PropertiesSchema = Schema.struct({
  "devicePath": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
});
export type AttachedvolumeV1Properties = Schema.From<typeof AttachedvolumeV1PropertiesSchema>;

export const VolumedeviceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AttachedvolumeV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Volumedevice = Schema.From<typeof VolumedeviceSchema>;

export const ApiversionsPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "serverAddressByClientCIDRs": Schema.lazy(() => ServerAddressByClientCidRsSchema),
  "versions": Schema.lazy(() => CategoriesSchema),
});
export type ApiversionsProperties = Schema.From<typeof ApiversionsPropertiesSchema>;

export const ApiversionsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiversionsPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Apiversions = Schema.From<typeof ApiversionsSchema>;

export const ApiversionsMetaV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "serverAddressByClientCIDRs": Schema.lazy(() => ServerAddressByClientCidRsSchema),
  "versions": Schema.lazy(() => CategoriesSchema),
});
export type ApiversionsMetaV1Properties = Schema.From<typeof ApiversionsMetaV1PropertiesSchema>;

export const ApiversionsMetaV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiversionsMetaV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ApiversionsMetaV1 = Schema.From<typeof ApiversionsMetaV1Schema>;

export const FluffyVolumesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => VolumesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyVolumes = Schema.From<typeof FluffyVolumesSchema>;

export const FluffyVolumeMountsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => VolumeMountsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyVolumeMounts = Schema.From<typeof FluffyVolumeMountsSchema>;

export const Properties59Schema = Schema.struct({
  "operator": Schema.lazy(() => GroupVersionSchema),
  "scopeName": Schema.lazy(() => GroupVersionSchema),
  "values": Schema.lazy(() => ValuesClassSchema),
});
export type Properties59 = Schema.From<typeof Properties59Schema>;

export const Items6Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties59Schema),
  "required": Schema.array(Schema.lazy(() => LabelselectorrequirementMetaV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items6 = Schema.From<typeof Items6Schema>;

export const TentacledMatchExpressionsSchema = Schema.struct({
  "description": Schema.lazy(() => TentacledDescriptionSchema),
  "items": Schema.lazy(() => Items6Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TentacledMatchExpressions = Schema.From<typeof TentacledMatchExpressionsSchema>;

export const ScopeSelectorPropertiesSchema = Schema.struct({
  "matchExpressions": Schema.lazy(() => TentacledMatchExpressionsSchema),
});
export type ScopeSelectorProperties = Schema.From<typeof ScopeSelectorPropertiesSchema>;

export const ScopeSelectorSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ScopeSelectorPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ScopeSelector = Schema.From<typeof ScopeSelectorSchema>;

export const Properties33Schema = Schema.struct({
  "max": Schema.lazy(() => GroupPriorityMinimumSchema),
  "min": Schema.lazy(() => GroupPriorityMinimumSchema),
});
export type Properties33 = Schema.From<typeof Properties33Schema>;

export const HostPortsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties33Schema),
  "required": Schema.array(Schema.lazy(() => HostportrangePolicyV1Beta1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type HostPortsItems = Schema.From<typeof HostPortsItemsSchema>;

export const HostPortsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => HostPortsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type HostPorts = Schema.From<typeof HostPortsSchema>;

export const FluffyEnvSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => EnvItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyEnv = Schema.From<typeof FluffyEnvSchema>;

export const WaitingPropertiesSchema = Schema.struct({
  "message": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
});
export type WaitingProperties = Schema.From<typeof WaitingPropertiesSchema>;

export const WaitingSchema = Schema.struct({
  "description": Schema.lazy(() => WaitingDescriptionSchema),
  "properties": Schema.lazy(() => WaitingPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Waiting = Schema.From<typeof WaitingSchema>;

export const TerminatedPropertiesSchema = Schema.struct({
  "containerID": Schema.lazy(() => DriverSchema),
  "exitCode": Schema.lazy(() => GroupPriorityMinimumSchema),
  "finishedAt": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "signal": Schema.lazy(() => LastTransitionTimeSchema),
  "startedAt": Schema.lazy(() => LastTransitionTimeSchema),
});
export type TerminatedProperties = Schema.From<typeof TerminatedPropertiesSchema>;

export const TerminatedSchema = Schema.struct({
  "description": Schema.lazy(() => TerminatedDescriptionSchema),
  "properties": Schema.lazy(() => TerminatedPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => TerminatedRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Terminated = Schema.From<typeof TerminatedSchema>;

export const RunningPropertiesSchema = Schema.struct({
  "startedAt": Schema.lazy(() => LastTransitionTimeSchema),
});
export type RunningProperties = Schema.From<typeof RunningPropertiesSchema>;

export const RunningSchema = Schema.struct({
  "description": Schema.lazy(() => RunningDescriptionSchema),
  "properties": Schema.lazy(() => RunningPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Running = Schema.From<typeof RunningSchema>;

export const LastStatePropertiesSchema = Schema.struct({
  "running": Schema.lazy(() => RunningSchema),
  "terminated": Schema.lazy(() => TerminatedSchema),
  "waiting": Schema.lazy(() => WaitingSchema),
});
export type LastStateProperties = Schema.From<typeof LastStatePropertiesSchema>;

export const StateSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LastStatePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type State = Schema.From<typeof StateSchema>;

export const Properties62Schema = Schema.struct({
  "containerID": Schema.lazy(() => DriverSchema),
  "image": Schema.lazy(() => GroupVersionSchema),
  "imageID": Schema.lazy(() => GroupVersionSchema),
  "lastState": Schema.lazy(() => StateSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "ready": Schema.lazy(() => GroupVersionSchema),
  "restartCount": Schema.lazy(() => GroupPriorityMinimumSchema),
  "started": Schema.lazy(() => DriverSchema),
  "state": Schema.lazy(() => StateSchema),
});
export type Properties62 = Schema.From<typeof Properties62Schema>;

export const ContainerStatusesItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties62Schema),
  "required": Schema.array(Schema.lazy(() => ContainerstatusV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ContainerStatusesItems = Schema.From<typeof ContainerStatusesItemsSchema>;

export const ContainerStatusesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => ContainerStatusesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ContainerStatuses = Schema.From<typeof ContainerStatusesSchema>;

export const Properties76Schema = Schema.struct({
  "lastTransitionTime": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "status": Schema.lazy(() => GroupVersionSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
  "lastUpdateTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "lastProbeTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "lastHeartbeatTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
});
export type Properties76 = Schema.From<typeof Properties76Schema>;

export const Items15Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties76Schema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items15 = Schema.From<typeof Items15Schema>;

export const StickyConditionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items15Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type StickyConditions = Schema.From<typeof StickyConditionsSchema>;

export const ApiservicestatusApiregistrationV1PropertiesSchema = Schema.struct({
  "conditions": Schema.optional(Schema.union(Schema.lazy(() => StickyConditionsSchema), Schema.null)),
  "env": Schema.optional(Schema.union(Schema.lazy(() => FluffyEnvSchema), Schema.null)),
  "envFrom": Schema.optional(Schema.union(Schema.lazy(() => EnvFromSchema), Schema.null)),
  "selector": Schema.optional(Schema.union(Schema.lazy(() => MetricSelectorClassSchema), Schema.null)),
  "volumeMounts": Schema.optional(Schema.union(Schema.lazy(() => FluffyVolumeMountsSchema), Schema.null)),
  "volumes": Schema.optional(Schema.union(Schema.lazy(() => FluffyVolumesSchema), Schema.null)),
  "containerStatuses": Schema.optional(Schema.union(Schema.lazy(() => ContainerStatusesSchema), Schema.null)),
  "ephemeralContainerStatuses": Schema.optional(Schema.union(Schema.lazy(() => ContainerStatusesSchema), Schema.null)),
  "hostIP": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "initContainerStatuses": Schema.optional(Schema.union(Schema.lazy(() => ContainerStatusesSchema), Schema.null)),
  "message": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "nominatedNodeName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "phase": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "podIP": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "podIPs": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "qosClass": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "reason": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "startTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "resourceVersion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "uid": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "lastTransitionTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "status": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "type": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "group": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "name": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "namespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "resource": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "subresource": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "verb": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "version": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "hard": Schema.optional(Schema.union(Schema.lazy(() => DefaultSchema), Schema.null)),
  "scopeSelector": Schema.optional(Schema.union(Schema.lazy(() => ScopeSelectorSchema), Schema.null)),
  "scopes": Schema.optional(Schema.union(Schema.lazy(() => StagesClassSchema), Schema.null)),
  "nodeSelector": Schema.optional(Schema.union(Schema.lazy(() => VolumeAttributesClassSchema), Schema.null)),
  "tolerations": Schema.optional(Schema.union(Schema.lazy(() => TolerationsSchema), Schema.null)),
  "port": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "fsType": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "readOnly": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "secretRef": Schema.optional(Schema.union(Schema.lazy(() => TargetRefSchema), Schema.null)),
  "volumeName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "volumeNamespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "extra": Schema.optional(Schema.union(Schema.lazy(() => ExtraSchema), Schema.null)),
  "groups": Schema.optional(Schema.union(Schema.lazy(() => StagesClassSchema), Schema.null)),
  "nonResourceAttributes": Schema.optional(Schema.union(Schema.lazy(() => NonResourceAttributesSchema), Schema.null)),
  "resourceAttributes": Schema.optional(Schema.union(Schema.lazy(() => ResourceAttributesSchema), Schema.null)),
  "user": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "ranges": Schema.optional(Schema.union(Schema.lazy(() => HostPortsSchema), Schema.null)),
  "rule": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "audiences": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "token": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "caBundle": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "service": Schema.optional(Schema.union(Schema.lazy(() => PurpleServiceSchema), Schema.null)),
  "url": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "burst": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "qps": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "gmsaCredentialSpec": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "gmsaCredentialSpecName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "runAsUserName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type ApiservicestatusApiregistrationV1Properties = Schema.From<typeof ApiservicestatusApiregistrationV1PropertiesSchema>;

export const WindowssecuritycontextoptionsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.optional(Schema.union(Schema.lazy(() => ApiservicestatusApiregistrationV1PropertiesSchema), Schema.null)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
  "required": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)), Schema.null)),
});
export type Windowssecuritycontextoptions = Schema.From<typeof WindowssecuritycontextoptionsSchema>;

export const ApiservicespecApiregistrationV1PropertiesSchema = Schema.struct({
  "caBundle": Schema.lazy(() => LastTransitionTimeSchema),
  "group": Schema.lazy(() => DriverSchema),
  "groupPriorityMinimum": Schema.lazy(() => LastTransitionTimeSchema),
  "insecureSkipTLSVerify": Schema.lazy(() => DriverSchema),
  "service": Schema.lazy(() => FluffyServiceSchema),
  "version": Schema.lazy(() => DriverSchema),
  "versionPriority": Schema.lazy(() => LastTransitionTimeSchema),
});
export type ApiservicespecApiregistrationV1Properties = Schema.From<typeof ApiservicespecApiregistrationV1PropertiesSchema>;

export const ApiservicespecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiservicespecApiregistrationV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicespecApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Apiservicespec = Schema.From<typeof ApiservicespecSchema>;

export const Items14Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiservicePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items14 = Schema.From<typeof Items14Schema>;

export const Items13Schema = Schema.struct({
  "items": Schema.lazy(() => Items14Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items13 = Schema.From<typeof Items13Schema>;

export const ApiservicelistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "items": Schema.lazy(() => Items13Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ApiservicelistProperties = Schema.From<typeof ApiservicelistPropertiesSchema>;

export const ApiservicelistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiservicelistPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Apiservicelist = Schema.From<typeof ApiservicelistSchema>;

export const Properties75Schema = Schema.struct({
  "continue": Schema.lazy(() => DriverSchema),
  "remainingItemCount": Schema.lazy(() => LastTransitionTimeSchema),
  "resourceVersion": Schema.lazy(() => DriverSchema),
  "selfLink": Schema.lazy(() => DriverSchema),
});
export type Properties75 = Schema.From<typeof Properties75Schema>;

export const FluffyMetadataSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties75Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyMetadata = Schema.From<typeof FluffyMetadataSchema>;

export const Items12Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiserviceApiregistrationV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items12 = Schema.From<typeof Items12Schema>;

export const Items11Schema = Schema.struct({
  "items": Schema.lazy(() => Items12Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items11 = Schema.From<typeof Items11Schema>;

export const ApiservicelistApiregistrationV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "items": Schema.lazy(() => Items11Schema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => FluffyMetadataSchema),
});
export type ApiservicelistApiregistrationV1Properties = Schema.From<typeof ApiservicelistApiregistrationV1PropertiesSchema>;

export const ApiservicelistApiregistrationV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiservicelistApiregistrationV1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ApiservicelistApiregistrationV1RequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ApiservicelistApiregistrationV1Beta1 = Schema.From<typeof ApiservicelistApiregistrationV1Beta1Schema>;

export const ApiserviceconditionApiregistrationV1PropertiesSchema = Schema.struct({
  "lastTransitionTime": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "status": Schema.lazy(() => DriverSchema),
  "type": Schema.lazy(() => DriverSchema),
  "lastUpdateTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "lastProbeTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "lastHeartbeatTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
});
export type ApiserviceconditionApiregistrationV1Properties = Schema.From<typeof ApiserviceconditionApiregistrationV1PropertiesSchema>;

export const StatefulsetconditionSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiserviceconditionApiregistrationV1PropertiesSchema),
  "required": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)), Schema.null)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Statefulsetcondition = Schema.From<typeof StatefulsetconditionSchema>;

export const ApiservicePropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => FluffySpecSchema),
  "status": Schema.lazy(() => PurpleStatusSchema),
});
export type ApiserviceProperties = Schema.From<typeof ApiservicePropertiesSchema>;

export const ApiserviceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiservicePropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Apiservice = Schema.From<typeof ApiserviceSchema>;

export const Properties74Schema = Schema.struct({
  "conditions": Schema.lazy(() => StagesClassSchema),
});
export type Properties74 = Schema.From<typeof Properties74Schema>;

export const PurpleStatusSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties74Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleStatus = Schema.From<typeof PurpleStatusSchema>;

export const ServicereferenceAdmissionregistrationV1PropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => DriverSchema),
  "namespace": Schema.lazy(() => DriverSchema),
  "port": Schema.lazy(() => LastTransitionTimeSchema),
  "path": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type ServicereferenceAdmissionregistrationV1Properties = Schema.From<typeof ServicereferenceAdmissionregistrationV1PropertiesSchema>;

export const FluffyServiceSchema = Schema.struct({
  "description": Schema.lazy(() => ServiceDescriptionSchema),
  "properties": Schema.lazy(() => ServicereferenceAdmissionregistrationV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyService = Schema.From<typeof FluffyServiceSchema>;

export const Properties73Schema = Schema.struct({
  "caBundle": Schema.lazy(() => LastTransitionTimeSchema),
  "group": Schema.lazy(() => DriverSchema),
  "groupPriorityMinimum": Schema.lazy(() => GroupPriorityMinimumSchema),
  "insecureSkipTLSVerify": Schema.lazy(() => DriverSchema),
  "service": Schema.lazy(() => FluffyServiceSchema),
  "version": Schema.lazy(() => DriverSchema),
  "versionPriority": Schema.lazy(() => GroupPriorityMinimumSchema),
});
export type Properties73 = Schema.From<typeof Properties73Schema>;

export const FluffySpecSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties73Schema),
  "required": Schema.array(Schema.lazy(() => ApiservicespecApiregistrationV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffySpec = Schema.From<typeof FluffySpecSchema>;

export const ApiserviceApiregistrationV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => FluffySpecSchema),
  "status": Schema.lazy(() => PurpleStatusSchema),
});
export type ApiserviceApiregistrationV1Properties = Schema.From<typeof ApiserviceApiregistrationV1PropertiesSchema>;

export const ApiserviceApiregistrationV1Beta1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiserviceApiregistrationV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ApiserviceApiregistrationV1Beta1 = Schema.From<typeof ApiserviceApiregistrationV1Beta1Schema>;

export const ApiresourcelistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "groupVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "resources": Schema.lazy(() => FluffyResourcesSchema),
});
export type ApiresourcelistProperties = Schema.From<typeof ApiresourcelistPropertiesSchema>;

export const ApiresourcelistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiresourcelistPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Apiresourcelist = Schema.From<typeof ApiresourcelistSchema>;

export const Properties72Schema = Schema.struct({
  "categories": Schema.lazy(() => CategoriesSchema),
  "group": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => GroupVersionSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "namespaced": Schema.lazy(() => GroupVersionSchema),
  "shortNames": Schema.lazy(() => CategoriesSchema),
  "singularName": Schema.lazy(() => GroupVersionSchema),
  "storageVersionHash": Schema.lazy(() => DriverSchema),
  "verbs": Schema.lazy(() => ConversionReviewVersionsSchema),
  "version": Schema.lazy(() => DriverSchema),
});
export type Properties72 = Schema.From<typeof Properties72Schema>;

export const Items10Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties72Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items10 = Schema.From<typeof Items10Schema>;

export const FluffyResourcesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items10Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyResources = Schema.From<typeof FluffyResourcesSchema>;

export const ApiresourcelistMetaV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "groupVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "resources": Schema.lazy(() => FluffyResourcesSchema),
});
export type ApiresourcelistMetaV1Properties = Schema.From<typeof ApiresourcelistMetaV1PropertiesSchema>;

export const ApiresourcelistMetaV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiresourcelistMetaV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ApiresourcelistMetaV1 = Schema.From<typeof ApiresourcelistMetaV1Schema>;

export const ApiresourceMetaV1PropertiesSchema = Schema.struct({
  "categories": Schema.lazy(() => CategoriesSchema),
  "group": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "namespaced": Schema.lazy(() => DriverSchema),
  "shortNames": Schema.lazy(() => CategoriesSchema),
  "singularName": Schema.lazy(() => DriverSchema),
  "storageVersionHash": Schema.lazy(() => DriverSchema),
  "verbs": Schema.lazy(() => CategoriesSchema),
  "version": Schema.lazy(() => DriverSchema),
});
export type ApiresourceMetaV1Properties = Schema.From<typeof ApiresourceMetaV1PropertiesSchema>;

export const ApiresourceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApiresourceMetaV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Apiresource = Schema.From<typeof ApiresourceSchema>;

export const Properties71Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "preferredVersion": Schema.lazy(() => PreferredVersionSchema),
  "serverAddressByClientCIDRs": Schema.lazy(() => ServerAddressByClientCidRsSchema),
  "versions": Schema.lazy(() => FluffyVersionsSchema),
});
export type Properties71 = Schema.From<typeof Properties71Schema>;

export const Items9Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties71Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items9 = Schema.From<typeof Items9Schema>;

export const FluffyGroupsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items9Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyGroups = Schema.From<typeof FluffyGroupsSchema>;

export const ApigrouplistPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "groups": Schema.lazy(() => FluffyGroupsSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
});
export type ApigrouplistProperties = Schema.From<typeof ApigrouplistPropertiesSchema>;

export const ApigrouplistSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApigrouplistPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Apigrouplist = Schema.From<typeof ApigrouplistSchema>;

export const FluffyVersionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => PreferredVersionSchema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type FluffyVersions = Schema.From<typeof FluffyVersionsSchema>;

export const Properties70Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "preferredVersion": Schema.lazy(() => PreferredVersionSchema),
  "serverAddressByClientCIDRs": Schema.lazy(() => ServerAddressByClientCidRsSchema),
  "versions": Schema.lazy(() => FluffyVersionsSchema),
});
export type Properties70 = Schema.From<typeof Properties70Schema>;

export const Items8Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties70Schema),
  "required": Schema.array(Schema.string),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
});
export type Items8 = Schema.From<typeof Items8Schema>;

export const PurpleGroupsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items8Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleGroups = Schema.From<typeof PurpleGroupsSchema>;

export const ApigrouplistMetaV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "groups": Schema.lazy(() => PurpleGroupsSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
});
export type ApigrouplistMetaV1Properties = Schema.From<typeof ApigrouplistMetaV1PropertiesSchema>;

export const ApigrouplistMetaV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApigrouplistMetaV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ApigrouplistMetaV1 = Schema.From<typeof ApigrouplistMetaV1Schema>;

export const ApigroupPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "name": Schema.lazy(() => DriverSchema),
  "preferredVersion": Schema.lazy(() => PreferredVersionSchema),
  "serverAddressByClientCIDRs": Schema.lazy(() => ServerAddressByClientCidRsSchema),
  "versions": Schema.lazy(() => PurpleVersionsSchema),
});
export type ApigroupProperties = Schema.From<typeof ApigroupPropertiesSchema>;

export const ApigroupSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApigroupPropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type Apigroup = Schema.From<typeof ApigroupSchema>;

export const PurpleVersionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => PreferredVersionSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleVersions = Schema.From<typeof PurpleVersionsSchema>;

export const Properties69Schema = Schema.struct({
  "clientCIDR": Schema.lazy(() => GroupVersionSchema),
  "serverAddress": Schema.lazy(() => GroupVersionSchema),
});
export type Properties69 = Schema.From<typeof Properties69Schema>;

export const ServerAddressByClientCidRsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties69Schema),
  "required": Schema.array(Schema.lazy(() => ServeraddressbyclientcidrMetaV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ServerAddressByClientCidRsItems = Schema.From<typeof ServerAddressByClientCidRsItemsSchema>;

export const ServerAddressByClientCidRsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => ServerAddressByClientCidRsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ServerAddressByClientCidRs = Schema.From<typeof ServerAddressByClientCidRsSchema>;

export const PreferredVersionPropertiesSchema = Schema.struct({
  "groupVersion": Schema.lazy(() => GroupVersionSchema),
  "version": Schema.lazy(() => GroupVersionSchema),
});
export type PreferredVersionProperties = Schema.From<typeof PreferredVersionPropertiesSchema>;

export const PreferredVersionSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PreferredVersionPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PreferredVersionRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PreferredVersion = Schema.From<typeof PreferredVersionSchema>;

export const ApiVersionSchema = Schema.struct({
  "description": Schema.string,
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "enum": Schema.array(Schema.string),
});
export type ApiVersion = Schema.From<typeof ApiVersionSchema>;

export const ApigroupMetaV1PropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => ApiVersionSchema),
  "kind": Schema.lazy(() => ApiVersionSchema),
  "name": Schema.lazy(() => DriverSchema),
  "preferredVersion": Schema.lazy(() => PreferredVersionSchema),
  "serverAddressByClientCIDRs": Schema.lazy(() => ServerAddressByClientCidRsSchema),
  "versions": Schema.lazy(() => PurpleVersionsSchema),
});
export type ApigroupMetaV1Properties = Schema.From<typeof ApigroupMetaV1PropertiesSchema>;

export const ApigroupMetaV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ApigroupMetaV1PropertiesSchema),
  "required": Schema.array(Schema.string),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-group-version-kind": Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)),
  "$schema": Schema.string,
});
export type ApigroupMetaV1 = Schema.From<typeof ApigroupMetaV1Schema>;

export const Properties68Schema = Schema.struct({
  "extra": Schema.lazy(() => ExtraSchema),
  "groups": Schema.lazy(() => ValuesClassSchema),
  "uid": Schema.lazy(() => DriverSchema),
  "username": Schema.lazy(() => DriverSchema),
});
export type Properties68 = Schema.From<typeof Properties68Schema>;

export const UserSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties68Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type User = Schema.From<typeof UserSchema>;

export const Properties46Schema = Schema.struct({
  "awsElasticBlockStore": Schema.lazy(() => AwsElasticBlockStoreSchema),
  "azureDisk": Schema.lazy(() => AzureDiskSchema),
  "azureFile": Schema.lazy(() => AzureFileSchema),
  "cephfs": Schema.lazy(() => PurpleCephfsSchema),
  "cinder": Schema.lazy(() => PurpleCinderSchema),
  "configMap": Schema.lazy(() => SecretClassSchema),
  "csi": Schema.lazy(() => PurpleCsiSchema),
  "downwardAPI": Schema.lazy(() => PurpleDownwardApiSchema),
  "emptyDir": Schema.lazy(() => EmptyDirSchema),
  "fc": Schema.lazy(() => FcSchema),
  "flexVolume": Schema.lazy(() => PurpleFlexVolumeSchema),
  "flocker": Schema.lazy(() => FlockerSchema),
  "gcePersistentDisk": Schema.lazy(() => GcePersistentDiskSchema),
  "gitRepo": Schema.lazy(() => GitRepoSchema),
  "glusterfs": Schema.lazy(() => GlusterfsSchema),
  "hostPath": Schema.lazy(() => HostPathSchema),
  "iscsi": Schema.lazy(() => PurpleIscsiSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "nfs": Schema.lazy(() => NfsSchema),
  "persistentVolumeClaim": Schema.lazy(() => PersistentVolumeClaimSchema),
  "photonPersistentDisk": Schema.lazy(() => PhotonPersistentDiskSchema),
  "portworxVolume": Schema.lazy(() => PortworxVolumeSchema),
  "projected": Schema.lazy(() => ProjectedSchema),
  "quobyte": Schema.lazy(() => QuobyteSchema),
  "rbd": Schema.lazy(() => PurpleRbdSchema),
  "scaleIO": Schema.lazy(() => PurpleScaleIoSchema),
  "secret": Schema.lazy(() => SecretClassSchema),
  "storageos": Schema.lazy(() => PurpleStorageosSchema),
  "vsphereVolume": Schema.lazy(() => VsphereVolumeSchema),
});
export type Properties46 = Schema.From<typeof Properties46Schema>;

export const VolumesItemsSchema = Schema.struct({
  "description": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "properties": Schema.optional(Schema.union(Schema.lazy(() => Properties46Schema), Schema.null)),
  "required": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)), Schema.null)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type VolumesItems = Schema.From<typeof VolumesItemsSchema>;

export const PurpleVolumesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => VolumesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type PurpleVolumes = Schema.From<typeof PurpleVolumesSchema>;

export const Properties45Schema = Schema.struct({
  "labelSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "maxSkew": Schema.lazy(() => GroupPriorityMinimumSchema),
  "topologyKey": Schema.lazy(() => GroupVersionSchema),
  "whenUnsatisfiable": Schema.lazy(() => GroupVersionSchema),
});
export type Properties45 = Schema.From<typeof Properties45Schema>;

export const TopologySpreadConstraintsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties45Schema),
  "required": Schema.array(Schema.lazy(() => PodAffinityTermRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TopologySpreadConstraintsItems = Schema.From<typeof TopologySpreadConstraintsItemsSchema>;

export const TopologySpreadConstraintsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => TopologySpreadConstraintsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-map-keys": Schema.array(Schema.lazy(() => PodAffinityTermRequiredSchema)),
  "x-kubernetes-list-type": Schema.lazy(() => XKubernetesListTypeSchema),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => PodAffinityTermRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type TopologySpreadConstraints = Schema.From<typeof TopologySpreadConstraintsSchema>;

export const Properties44Schema = Schema.struct({
  "effect": Schema.lazy(() => DriverSchema),
  "key": Schema.lazy(() => DriverSchema),
  "operator": Schema.lazy(() => DriverSchema),
  "tolerationSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "value": Schema.lazy(() => DriverSchema),
});
export type Properties44 = Schema.From<typeof Properties44Schema>;

export const TolerationsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties44Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TolerationsItems = Schema.From<typeof TolerationsItemsSchema>;

export const TolerationsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => TolerationsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-type": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesListTypeSchema), Schema.null)),
});
export type Tolerations = Schema.From<typeof TolerationsSchema>;

export const SupplementalGroupsAdditionalPropertiesSchema = Schema.struct({
  "format": Schema.lazy(() => FormatSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type SupplementalGroupsAdditionalProperties = Schema.From<typeof SupplementalGroupsAdditionalPropertiesSchema>;

export const SupplementalGroupsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => SupplementalGroupsAdditionalPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type SupplementalGroups = Schema.From<typeof SupplementalGroupsSchema>;

export const Properties43Schema = Schema.struct({
  "fsGroup": Schema.lazy(() => LastTransitionTimeSchema),
  "fsGroupChangePolicy": Schema.lazy(() => DriverSchema),
  "runAsGroup": Schema.lazy(() => LastTransitionTimeSchema),
  "runAsNonRoot": Schema.lazy(() => DriverSchema),
  "runAsUser": Schema.lazy(() => LastTransitionTimeSchema),
  "seLinuxOptions": Schema.lazy(() => SeLinuxOptionsSchema),
  "supplementalGroups": Schema.lazy(() => SupplementalGroupsSchema),
  "sysctls": Schema.lazy(() => HttpHeadersSchema),
  "windowsOptions": Schema.lazy(() => WindowsOptionsSchema),
});
export type Properties43 = Schema.From<typeof Properties43Schema>;

export const FluffySecurityContextSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties43Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffySecurityContext = Schema.From<typeof FluffySecurityContextSchema>;

export const Properties42Schema = Schema.struct({
  "conditionType": Schema.lazy(() => GroupVersionSchema),
});
export type Properties42 = Schema.From<typeof Properties42Schema>;

export const ReadinessGatesItemsSchema = Schema.struct({
  "description": Schema.lazy(() => PodreadinessgateV1DescriptionSchema),
  "properties": Schema.lazy(() => Properties42Schema),
  "required": Schema.array(Schema.lazy(() => PodreadinessgateV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ReadinessGatesItems = Schema.From<typeof ReadinessGatesItemsSchema>;

export const ReadinessGatesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => ReadinessGatesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ReadinessGates = Schema.From<typeof ReadinessGatesSchema>;

export const Properties41Schema = Schema.struct({
  "args": Schema.lazy(() => ValuesClassSchema),
  "command": Schema.lazy(() => ValuesClassSchema),
  "env": Schema.lazy(() => PurpleEnvSchema),
  "envFrom": Schema.lazy(() => EnvFromSchema),
  "image": Schema.lazy(() => DriverSchema),
  "imagePullPolicy": Schema.lazy(() => DriverSchema),
  "lifecycle": Schema.lazy(() => LifecycleClassSchema),
  "livenessProbe": Schema.lazy(() => LivenessProbeClassSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "ports": Schema.lazy(() => PurplePortsSchema),
  "readinessProbe": Schema.lazy(() => LivenessProbeClassSchema),
  "resources": Schema.lazy(() => PurpleResourcesSchema),
  "securityContext": Schema.lazy(() => PurpleSecurityContextSchema),
  "startupProbe": Schema.lazy(() => LivenessProbeClassSchema),
  "stdin": Schema.lazy(() => DriverSchema),
  "stdinOnce": Schema.lazy(() => DriverSchema),
  "terminationMessagePath": Schema.lazy(() => DriverSchema),
  "terminationMessagePolicy": Schema.lazy(() => DriverSchema),
  "tty": Schema.lazy(() => DriverSchema),
  "volumeDevices": Schema.lazy(() => VolumeDevicesSchema),
  "volumeMounts": Schema.lazy(() => PurpleVolumeMountsSchema),
  "workingDir": Schema.lazy(() => DriverSchema),
});
export type Properties41 = Schema.From<typeof Properties41Schema>;

export const InitContainersItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties41Schema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type InitContainersItems = Schema.From<typeof InitContainersItemsSchema>;

export const InitContainersClassSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => InitContainersItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type InitContainersClass = Schema.From<typeof InitContainersClassSchema>;

export const PurpleImagePullSecretsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => ItemsClassSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type PurpleImagePullSecrets = Schema.From<typeof PurpleImagePullSecretsSchema>;

export const Properties40Schema = Schema.struct({
  "hostnames": Schema.lazy(() => ValuesClassSchema),
  "ip": Schema.lazy(() => DriverSchema),
});
export type Properties40 = Schema.From<typeof Properties40Schema>;

export const HostAliasesItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties40Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type HostAliasesItems = Schema.From<typeof HostAliasesItemsSchema>;

export const HostAliasesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => HostAliasesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type HostAliases = Schema.From<typeof HostAliasesSchema>;

export const TentacledPortsSchema = Schema.struct({
  "description": Schema.lazy(() => PortsDescriptionSchema),
  "items": Schema.lazy(() => IndecentItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TentacledPorts = Schema.From<typeof TentacledPortsSchema>;

export const Properties39Schema = Schema.struct({
  "args": Schema.lazy(() => ValuesClassSchema),
  "command": Schema.lazy(() => ValuesClassSchema),
  "env": Schema.lazy(() => PurpleEnvSchema),
  "envFrom": Schema.lazy(() => EnvFromSchema),
  "image": Schema.lazy(() => DriverSchema),
  "imagePullPolicy": Schema.lazy(() => DriverSchema),
  "lifecycle": Schema.lazy(() => LifecycleClassSchema),
  "livenessProbe": Schema.lazy(() => LivenessProbeClassSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "ports": Schema.lazy(() => TentacledPortsSchema),
  "readinessProbe": Schema.lazy(() => LivenessProbeClassSchema),
  "resources": Schema.lazy(() => PurpleResourcesSchema),
  "securityContext": Schema.lazy(() => PurpleSecurityContextSchema),
  "startupProbe": Schema.lazy(() => LivenessProbeClassSchema),
  "stdin": Schema.lazy(() => DriverSchema),
  "stdinOnce": Schema.lazy(() => DriverSchema),
  "targetContainerName": Schema.lazy(() => DriverSchema),
  "terminationMessagePath": Schema.lazy(() => DriverSchema),
  "terminationMessagePolicy": Schema.lazy(() => DriverSchema),
  "tty": Schema.lazy(() => DriverSchema),
  "volumeDevices": Schema.lazy(() => VolumeDevicesSchema),
  "volumeMounts": Schema.lazy(() => PurpleVolumeMountsSchema),
  "workingDir": Schema.lazy(() => DriverSchema),
});
export type Properties39 = Schema.From<typeof Properties39Schema>;

export const EphemeralContainersItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties39Schema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type EphemeralContainersItems = Schema.From<typeof EphemeralContainersItemsSchema>;

export const EphemeralContainersSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => EphemeralContainersItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type EphemeralContainers = Schema.From<typeof EphemeralContainersSchema>;

export const Properties30Schema = Schema.struct({
  "name": Schema.lazy(() => DriverSchema),
  "value": Schema.lazy(() => BuildDateSchema),
});
export type Properties30 = Schema.From<typeof Properties30Schema>;

export const OptionsItemsSchema = Schema.struct({
  "description": Schema.lazy(() => StickyDescriptionSchema),
  "properties": Schema.lazy(() => Properties30Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type OptionsItems = Schema.From<typeof OptionsItemsSchema>;

export const OptionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => OptionsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Options = Schema.From<typeof OptionsSchema>;

export const DnsConfigPropertiesSchema = Schema.struct({
  "nameservers": Schema.lazy(() => ValuesClassSchema),
  "options": Schema.lazy(() => OptionsSchema),
  "searches": Schema.lazy(() => ValuesClassSchema),
});
export type DnsConfigProperties = Schema.From<typeof DnsConfigPropertiesSchema>;

export const DnsConfigSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => DnsConfigPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type DnsConfig = Schema.From<typeof DnsConfigSchema>;

export const RequiredDuringSchedulingIgnoredDuringExecutionPodAffinityTermSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodAffinityTermPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PodAffinityTermRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type RequiredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm = Schema.From<typeof RequiredDuringSchedulingIgnoredDuringExecutionPodAffinityTermSchema>;

export const RequiredDuringSchedulingIgnoredDuringExecutionSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => RequiredDuringSchedulingIgnoredDuringExecutionPodAffinityTermSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type RequiredDuringSchedulingIgnoredDuringExecution = Schema.From<typeof RequiredDuringSchedulingIgnoredDuringExecutionSchema>;

export const PodAffinityTermPropertiesSchema = Schema.struct({
  "labelSelector": Schema.lazy(() => MetricSelectorClassSchema),
  "namespaces": Schema.lazy(() => ValuesClassSchema),
  "topologyKey": Schema.lazy(() => GroupVersionSchema),
});
export type PodAffinityTermProperties = Schema.From<typeof PodAffinityTermPropertiesSchema>;

export const PodAffinityTermSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodAffinityTermPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PodAffinityTermRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type PodAffinityTerm = Schema.From<typeof PodAffinityTermSchema>;

export const Properties31Schema = Schema.struct({
  "podAffinityTerm": Schema.lazy(() => PodAffinityTermSchema),
  "weight": Schema.lazy(() => GroupPriorityMinimumSchema),
});
export type Properties31 = Schema.From<typeof Properties31Schema>;

export const Items1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties31Schema),
  "required": Schema.array(Schema.lazy(() => WeightedpodaffinitytermV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items1 = Schema.From<typeof Items1Schema>;

export const FluffyPreferredDuringSchedulingIgnoredDuringExecutionSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items1Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyPreferredDuringSchedulingIgnoredDuringExecution = Schema.From<typeof FluffyPreferredDuringSchedulingIgnoredDuringExecutionSchema>;

export const PodAffinityPropertiesSchema = Schema.struct({
  "preferredDuringSchedulingIgnoredDuringExecution": Schema.lazy(() => FluffyPreferredDuringSchedulingIgnoredDuringExecutionSchema),
  "requiredDuringSchedulingIgnoredDuringExecution": Schema.lazy(() => RequiredDuringSchedulingIgnoredDuringExecutionSchema),
});
export type PodAffinityProperties = Schema.From<typeof PodAffinityPropertiesSchema>;

export const PodAAffinitySchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PodAffinityPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PodAAffinity = Schema.From<typeof PodAAffinitySchema>;

export const Properties28Schema = Schema.struct({
  "preferredDuringSchedulingIgnoredDuringExecution": Schema.lazy(() => PurplePreferredDuringSchedulingIgnoredDuringExecutionSchema),
  "requiredDuringSchedulingIgnoredDuringExecution": Schema.lazy(() => RequiredClassSchema),
});
export type Properties28 = Schema.From<typeof Properties28Schema>;

export const PurpleNodeAffinitySchema = Schema.struct({
  "description": Schema.lazy(() => NodeAffinityDescriptionSchema),
  "properties": Schema.lazy(() => Properties28Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleNodeAffinity = Schema.From<typeof PurpleNodeAffinitySchema>;

export const Properties38Schema = Schema.struct({
  "nodeAffinity": Schema.lazy(() => PurpleNodeAffinitySchema),
  "podAffinity": Schema.lazy(() => PodAAffinitySchema),
  "podAntiAffinity": Schema.lazy(() => PodAAffinitySchema),
});
export type Properties38 = Schema.From<typeof Properties38Schema>;

export const AffinityClassSchema = Schema.struct({
  "description": Schema.lazy(() => AffinityDescriptionSchema),
  "properties": Schema.lazy(() => Properties38Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AffinityClass = Schema.From<typeof AffinityClassSchema>;

export const Properties37Schema = Schema.struct({
  "activeDeadlineSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "affinity": Schema.lazy(() => AffinityClassSchema),
  "automountServiceAccountToken": Schema.lazy(() => DriverSchema),
  "containers": Schema.lazy(() => KeyClassSchema),
  "dnsConfig": Schema.lazy(() => DnsConfigSchema),
  "dnsPolicy": Schema.lazy(() => DriverSchema),
  "enableServiceLinks": Schema.lazy(() => DriverSchema),
  "ephemeralContainers": Schema.lazy(() => EphemeralContainersSchema),
  "hostAliases": Schema.lazy(() => HostAliasesSchema),
  "hostIPC": Schema.lazy(() => DriverSchema),
  "hostNetwork": Schema.lazy(() => DriverSchema),
  "hostPID": Schema.lazy(() => DriverSchema),
  "hostname": Schema.lazy(() => DriverSchema),
  "imagePullSecrets": Schema.lazy(() => PurpleImagePullSecretsSchema),
  "initContainers": Schema.lazy(() => InitContainersClassSchema),
  "nodeName": Schema.lazy(() => DriverSchema),
  "nodeSelector": Schema.lazy(() => VolumeAttributesClassSchema),
  "overhead": Schema.lazy(() => DefaultSchema),
  "preemptionPolicy": Schema.lazy(() => DriverSchema),
  "priority": Schema.lazy(() => LastTransitionTimeSchema),
  "priorityClassName": Schema.lazy(() => DriverSchema),
  "readinessGates": Schema.lazy(() => ReadinessGatesSchema),
  "restartPolicy": Schema.lazy(() => DriverSchema),
  "runtimeClassName": Schema.lazy(() => DriverSchema),
  "schedulerName": Schema.lazy(() => DriverSchema),
  "securityContext": Schema.lazy(() => FluffySecurityContextSchema),
  "serviceAccount": Schema.lazy(() => DriverSchema),
  "serviceAccountName": Schema.lazy(() => DriverSchema),
  "shareProcessNamespace": Schema.lazy(() => DriverSchema),
  "subdomain": Schema.lazy(() => DriverSchema),
  "terminationGracePeriodSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "tolerations": Schema.lazy(() => TolerationsSchema),
  "topologySpreadConstraints": Schema.lazy(() => TopologySpreadConstraintsSchema),
  "volumes": Schema.lazy(() => PurpleVolumesSchema),
});
export type Properties37 = Schema.From<typeof Properties37Schema>;

export const PurpleSpecSchema = Schema.struct({
  "description": Schema.lazy(() => PodspecV1DescriptionSchema),
  "properties": Schema.lazy(() => Properties37Schema),
  "required": Schema.array(Schema.lazy(() => PodspecV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleSpec = Schema.From<typeof PurpleSpecSchema>;

export const Properties27Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => GroupVersionSchema),
  "blockOwnerDeletion": Schema.lazy(() => DriverSchema),
  "controller": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => GroupVersionSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "uid": Schema.lazy(() => GroupVersionSchema),
});
export type Properties27 = Schema.From<typeof Properties27Schema>;

export const OwnerReferencesItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties27Schema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type OwnerReferencesItems = Schema.From<typeof OwnerReferencesItemsSchema>;

export const OwnerReferencesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => OwnerReferencesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type OwnerReferences = Schema.From<typeof OwnerReferencesSchema>;

export const Properties23Schema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "fieldsType": Schema.lazy(() => DriverSchema),
  "fieldsV1": Schema.lazy(() => DriverSchema),
  "manager": Schema.lazy(() => DriverSchema),
  "operation": Schema.lazy(() => DriverSchema),
  "time": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties23 = Schema.From<typeof Properties23Schema>;

export const ManagedFieldsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties23Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ManagedFieldsItems = Schema.From<typeof ManagedFieldsItemsSchema>;

export const ManagedFieldsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => ManagedFieldsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ManagedFields = Schema.From<typeof ManagedFieldsSchema>;

export const FinalizersSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => BuildDateSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-strategy": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesPatchStrategySchema), Schema.null)),
});
export type Finalizers = Schema.From<typeof FinalizersSchema>;

export const Properties26Schema = Schema.struct({
  "annotations": Schema.lazy(() => VolumeAttributesClassSchema),
  "clusterName": Schema.lazy(() => DriverSchema),
  "creationTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "deletionGracePeriodSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "deletionTimestamp": Schema.lazy(() => LastTransitionTimeSchema),
  "finalizers": Schema.lazy(() => FinalizersSchema),
  "generateName": Schema.lazy(() => DriverSchema),
  "generation": Schema.lazy(() => LastTransitionTimeSchema),
  "labels": Schema.lazy(() => VolumeAttributesClassSchema),
  "managedFields": Schema.lazy(() => ManagedFieldsSchema),
  "name": Schema.lazy(() => DriverSchema),
  "namespace": Schema.lazy(() => DriverSchema),
  "ownerReferences": Schema.lazy(() => OwnerReferencesSchema),
  "resourceVersion": Schema.lazy(() => DriverSchema),
  "selfLink": Schema.lazy(() => DriverSchema),
  "uid": Schema.lazy(() => DriverSchema),
});
export type Properties26 = Schema.From<typeof Properties26Schema>;

export const PurpleMetadataSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties26Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleMetadata = Schema.From<typeof PurpleMetadataSchema>;

export const TemplatePropertiesSchema = Schema.struct({
  "metadata": Schema.lazy(() => PurpleMetadataSchema),
  "spec": Schema.lazy(() => PurpleSpecSchema),
});
export type TemplateProperties = Schema.From<typeof TemplatePropertiesSchema>;

export const PurpleTemplateSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TemplatePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleTemplate = Schema.From<typeof PurpleTemplateSchema>;

export const Properties61Schema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => TargetRefSchema),
  "volumeName": Schema.lazy(() => DriverSchema),
  "volumeNamespace": Schema.lazy(() => DriverSchema),
});
export type Properties61 = Schema.From<typeof Properties61Schema>;

export const FluffyStorageosSchema = Schema.struct({
  "description": Schema.lazy(() => StorageosDescriptionSchema),
  "properties": Schema.lazy(() => Properties61Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyStorageos = Schema.From<typeof FluffyStorageosSchema>;

export const PurpleSelectorSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.optional(Schema.union(Schema.lazy(() => SelectorPropertiesSchema), Schema.null)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "additionalProperties": Schema.optional(Schema.union(Schema.lazy(() => BuildDateSchema), Schema.null)),
});
export type PurpleSelector = Schema.From<typeof PurpleSelectorSchema>;

export const ServiceaccountsubjectSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ControllerExpandSecretRefPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "required": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)), Schema.null)),
});
export type Serviceaccountsubject = Schema.From<typeof ServiceaccountsubjectSchema>;

export const Properties58Schema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "gateway": Schema.lazy(() => GroupVersionSchema),
  "protectionDomain": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ServiceaccountsubjectSchema),
  "sslEnabled": Schema.lazy(() => DriverSchema),
  "storageMode": Schema.lazy(() => DriverSchema),
  "storagePool": Schema.lazy(() => DriverSchema),
  "system": Schema.lazy(() => GroupVersionSchema),
  "volumeName": Schema.lazy(() => DriverSchema),
});
export type Properties58 = Schema.From<typeof Properties58Schema>;

export const FluffyScaleIoSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties58Schema),
  "required": Schema.array(Schema.lazy(() => ScaleIoRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyScaleIo = Schema.From<typeof FluffyScaleIoSchema>;

export const Properties67Schema = Schema.struct({
  "partition": Schema.lazy(() => LastTransitionTimeSchema),
});
export type Properties67 = Schema.From<typeof Properties67Schema>;

export const FluffyRollingUpdateSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties67Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyRollingUpdate = Schema.From<typeof FluffyRollingUpdateSchema>;

export const ResourceAttributesPropertiesSchema = Schema.struct({
  "group": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => DriverSchema),
  "namespace": Schema.lazy(() => DriverSchema),
  "resource": Schema.lazy(() => DriverSchema),
  "subresource": Schema.lazy(() => DriverSchema),
  "verb": Schema.lazy(() => DriverSchema),
  "version": Schema.lazy(() => DriverSchema),
});
export type ResourceAttributesProperties = Schema.From<typeof ResourceAttributesPropertiesSchema>;

export const ResourceAttributesSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourceAttributesPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ResourceAttributes = Schema.From<typeof ResourceAttributesSchema>;

export const Properties57Schema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "image": Schema.lazy(() => GroupVersionSchema),
  "keyring": Schema.lazy(() => DriverSchema),
  "monitors": Schema.lazy(() => ConversionReviewVersionsSchema),
  "pool": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "user": Schema.lazy(() => DriverSchema),
});
export type Properties57 = Schema.From<typeof Properties57Schema>;

export const FluffyRbdSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties57Schema),
  "required": Schema.array(Schema.lazy(() => CephfsRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyRbd = Schema.From<typeof FluffyRbdSchema>;

export const PurplePreferenceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PreferencePropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type PurplePreference = Schema.From<typeof PurplePreferenceSchema>;

export const Properties29Schema = Schema.struct({
  "preference": Schema.lazy(() => PurplePreferenceSchema),
  "weight": Schema.lazy(() => GroupPriorityMinimumSchema),
});
export type Properties29 = Schema.From<typeof Properties29Schema>;

export const BraggadociousItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties29Schema),
  "required": Schema.array(Schema.lazy(() => PreferredschedulingtermV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type BraggadociousItems = Schema.From<typeof BraggadociousItemsSchema>;

export const PurplePreferredDuringSchedulingIgnoredDuringExecutionSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => BraggadociousItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurplePreferredDuringSchedulingIgnoredDuringExecution = Schema.From<typeof PurplePreferredDuringSchedulingIgnoredDuringExecutionSchema>;

export const NonResourceAttributesPropertiesSchema = Schema.struct({
  "path": Schema.lazy(() => DriverSchema),
  "verb": Schema.lazy(() => DriverSchema),
});
export type NonResourceAttributesProperties = Schema.From<typeof NonResourceAttributesPropertiesSchema>;

export const NonResourceAttributesSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NonResourceAttributesPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type NonResourceAttributes = Schema.From<typeof NonResourceAttributesSchema>;

export const Properties25Schema = Schema.struct({
  "key": Schema.lazy(() => GroupVersionSchema),
  "operator": Schema.lazy(() => GroupVersionSchema),
  "values": Schema.lazy(() => ValuesClassSchema),
});
export type Properties25 = Schema.From<typeof Properties25Schema>;

export const MatchFieldsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties25Schema),
  "required": Schema.array(Schema.lazy(() => LabelselectorrequirementMetaV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type MatchFieldsItems = Schema.From<typeof MatchFieldsItemsSchema>;

export const MatchSchema = Schema.struct({
  "description": Schema.lazy(() => MatchFieldsDescriptionSchema),
  "items": Schema.lazy(() => MatchFieldsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Match = Schema.From<typeof MatchSchema>;

export const PreferencePropertiesSchema = Schema.struct({
  "matchExpressions": Schema.lazy(() => MatchSchema),
  "matchFields": Schema.lazy(() => MatchSchema),
});
export type PreferenceProperties = Schema.From<typeof PreferencePropertiesSchema>;

export const NodeSelectorTermsPreferenceSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PreferencePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type NodeSelectorTermsPreference = Schema.From<typeof NodeSelectorTermsPreferenceSchema>;

export const PurpleNodeSelectorTermsSchema = Schema.struct({
  "description": Schema.lazy(() => NodeSelectorTermsDescriptionSchema),
  "items": Schema.lazy(() => NodeSelectorTermsPreferenceSchema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type PurpleNodeSelectorTerms = Schema.From<typeof PurpleNodeSelectorTermsSchema>;

export const RequiredPropertiesSchema = Schema.struct({
  "nodeSelectorTerms": Schema.lazy(() => PurpleNodeSelectorTermsSchema),
});
export type RequiredProperties = Schema.From<typeof RequiredPropertiesSchema>;

export const RequiredClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => RequiredPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => RequiredRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type RequiredClass = Schema.From<typeof RequiredClassSchema>;

export const Properties55Schema = Schema.struct({
  "required": Schema.lazy(() => RequiredClassSchema),
});
export type Properties55 = Schema.From<typeof Properties55Schema>;

export const FluffyNodeAffinitySchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties55Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyNodeAffinity = Schema.From<typeof FluffyNodeAffinitySchema>;

export const Properties66Schema = Schema.struct({
  "key": Schema.lazy(() => GroupVersionSchema),
  "values": Schema.lazy(() => ConversionReviewVersionsSchema),
});
export type Properties66 = Schema.From<typeof Properties66Schema>;

export const MatchLabelExpressionsItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties66Schema),
  "required": Schema.array(Schema.lazy(() => TopologyselectorlabelrequirementV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type MatchLabelExpressionsItems = Schema.From<typeof MatchLabelExpressionsItemsSchema>;

export const MatchLabelExpressionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => MatchLabelExpressionsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type MatchLabelExpressions = Schema.From<typeof MatchLabelExpressionsSchema>;

export const LocalPropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "path": Schema.lazy(() => GroupVersionSchema),
});
export type LocalProperties = Schema.From<typeof LocalPropertiesSchema>;

export const LocalSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LocalPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HostPathRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Local = Schema.From<typeof LocalSchema>;

export const FluffyFieldsToDiscriminateBySchema = Schema.struct({
  "queuing": Schema.lazy(() => QueuingEnumSchema),
});
export type FluffyFieldsToDiscriminateBy = Schema.From<typeof FluffyFieldsToDiscriminateBySchema>;

export const LimitResponseXKubernetesUnionSchema = Schema.struct({
  "discriminator": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "fields-to-discriminateBy": Schema.lazy(() => FluffyFieldsToDiscriminateBySchema),
});
export type LimitResponseXKubernetesUnion = Schema.From<typeof LimitResponseXKubernetesUnionSchema>;

export const QueuingPropertiesSchema = Schema.struct({
  "handSize": Schema.lazy(() => LastTransitionTimeSchema),
  "queueLengthLimit": Schema.lazy(() => LastTransitionTimeSchema),
  "queues": Schema.lazy(() => LastTransitionTimeSchema),
});
export type QueuingProperties = Schema.From<typeof QueuingPropertiesSchema>;

export const QueuingClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => QueuingPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type QueuingClass = Schema.From<typeof QueuingClassSchema>;

export const LimitResponsePropertiesSchema = Schema.struct({
  "queuing": Schema.lazy(() => QueuingClassSchema),
  "type": Schema.lazy(() => GroupVersionSchema),
});
export type LimitResponseProperties = Schema.From<typeof LimitResponsePropertiesSchema>;

export const LimitResponseSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LimitResponsePropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-unions": Schema.array(Schema.lazy(() => LimitResponseXKubernetesUnionSchema)),
});
export type LimitResponse = Schema.From<typeof LimitResponseSchema>;

export const Properties54Schema = Schema.struct({
  "chapAuthDiscovery": Schema.lazy(() => DriverSchema),
  "chapAuthSession": Schema.lazy(() => DriverSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "initiatorName": Schema.lazy(() => DriverSchema),
  "iqn": Schema.lazy(() => GroupVersionSchema),
  "iscsiInterface": Schema.lazy(() => DriverSchema),
  "lun": Schema.lazy(() => GroupPriorityMinimumSchema),
  "portals": Schema.lazy(() => ValuesClassSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "targetPortal": Schema.lazy(() => GroupVersionSchema),
});
export type Properties54 = Schema.From<typeof Properties54Schema>;

export const FluffyIscsiSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties54Schema),
  "required": Schema.array(Schema.lazy(() => IscsiRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyIscsi = Schema.From<typeof FluffyIscsiSchema>;

export const IpBlockPropertiesSchema = Schema.struct({
  "cidr": Schema.lazy(() => GroupVersionSchema),
  "except": Schema.lazy(() => ValuesClassSchema),
});
export type IpBlockProperties = Schema.From<typeof IpBlockPropertiesSchema>;

export const IpBlockSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IpBlockPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => IpBlockRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type IpBlock = Schema.From<typeof IpBlockSchema>;

export const Properties53Schema = Schema.struct({
  "driver": Schema.lazy(() => GroupVersionSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "options": Schema.lazy(() => VolumeAttributesClassSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
});
export type Properties53 = Schema.From<typeof Properties53Schema>;

export const FluffyFlexVolumeSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties53Schema),
  "required": Schema.array(Schema.lazy(() => CsiRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyFlexVolume = Schema.From<typeof FluffyFlexVolumeSchema>;

export const ApiGroupsClassSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsItemsSchema), Schema.null)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.optional(Schema.union(Schema.lazy(() => ConfigMapKeyRefRequiredSchema), Schema.null)),
  "x-kubernetes-patch-strategy": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesPatchStrategySchema), Schema.null)),
  "x-kubernetes-list-type": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesListTypeSchema), Schema.null)),
});
export type ApiGroupsClass = Schema.From<typeof ApiGroupsClassSchema>;

export const ApiGroupsItemsSchema = Schema.struct({
  "description": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "properties": Schema.optional(Schema.union(Schema.lazy(() => TentacledPropertiesSchema), Schema.null)),
  "required": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)), Schema.null)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ApiGroupsItems = Schema.From<typeof ApiGroupsItemsSchema>;

export const TentacledPropertiesSchema = Schema.struct({
  "args": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "command": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "env": Schema.optional(Schema.union(Schema.lazy(() => PurpleEnvSchema), Schema.null)),
  "envFrom": Schema.optional(Schema.union(Schema.lazy(() => EnvFromSchema), Schema.null)),
  "image": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "imagePullPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "lifecycle": Schema.optional(Schema.union(Schema.lazy(() => LifecycleClassSchema), Schema.null)),
  "livenessProbe": Schema.optional(Schema.union(Schema.lazy(() => LivenessProbeClassSchema), Schema.null)),
  "name": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
  "ports": Schema.optional(Schema.union(Schema.lazy(() => PurplePortsSchema), Schema.null)),
  "readinessProbe": Schema.optional(Schema.union(Schema.lazy(() => LivenessProbeClassSchema), Schema.null)),
  "resources": Schema.optional(Schema.union(Schema.lazy(() => PurpleResourcesSchema), Schema.null)),
  "securityContext": Schema.optional(Schema.union(Schema.lazy(() => PurpleSecurityContextSchema), Schema.null)),
  "startupProbe": Schema.optional(Schema.union(Schema.lazy(() => LivenessProbeClassSchema), Schema.null)),
  "stdin": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "stdinOnce": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "targetContainerName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "terminationMessagePath": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "terminationMessagePolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "tty": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "volumeDevices": Schema.optional(Schema.union(Schema.lazy(() => VolumeDevicesSchema), Schema.null)),
  "volumeMounts": Schema.optional(Schema.union(Schema.lazy(() => PurpleVolumeMountsSchema), Schema.null)),
  "workingDir": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "apiVersion": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
  "blockOwnerDeletion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "controller": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "kind": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
  "uid": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
  "admissionReviewVersions": Schema.optional(Schema.union(Schema.lazy(() => AdmissionReviewVersionsSchema), Schema.null)),
  "clientConfig": Schema.optional(Schema.union(Schema.lazy(() => WebhookclientconfigAdmissionregistrationV1Schema), Schema.null)),
  "failurePolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "matchPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "namespaceSelector": Schema.optional(Schema.union(Schema.lazy(() => MetricSelectorClassSchema), Schema.null)),
  "objectSelector": Schema.optional(Schema.union(Schema.lazy(() => MetricSelectorClassSchema), Schema.null)),
  "reinvocationPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "rules": Schema.optional(Schema.union(Schema.lazy(() => PurpleRulesSchema), Schema.null)),
  "sideEffects": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
  "timeoutSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "lastTransitionTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "message": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "reason": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "status": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
  "type": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
  "address": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
  "lastHeartbeatTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "lastProbeTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "value": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "valueFrom": Schema.optional(Schema.union(Schema.lazy(() => ValueFromSchema), Schema.null)),
  "devicePath": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
  "ip": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "mountPath": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
  "mountPropagation": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "readOnly": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "subPath": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "subPathExpr": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "hostnames": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "awsElasticBlockStore": Schema.optional(Schema.union(Schema.lazy(() => AwsElasticBlockStoreSchema), Schema.null)),
  "azureDisk": Schema.optional(Schema.union(Schema.lazy(() => AzureDiskSchema), Schema.null)),
  "azureFile": Schema.optional(Schema.union(Schema.lazy(() => AzureFileSchema), Schema.null)),
  "cephfs": Schema.optional(Schema.union(Schema.lazy(() => PurpleCephfsSchema), Schema.null)),
  "cinder": Schema.optional(Schema.union(Schema.lazy(() => PurpleCinderSchema), Schema.null)),
  "configMap": Schema.optional(Schema.union(Schema.lazy(() => SecretClassSchema), Schema.null)),
  "csi": Schema.optional(Schema.union(Schema.lazy(() => PurpleCsiSchema), Schema.null)),
  "downwardAPI": Schema.optional(Schema.union(Schema.lazy(() => PurpleDownwardApiSchema), Schema.null)),
  "emptyDir": Schema.optional(Schema.union(Schema.lazy(() => EmptyDirSchema), Schema.null)),
  "fc": Schema.optional(Schema.union(Schema.lazy(() => FcSchema), Schema.null)),
  "flexVolume": Schema.optional(Schema.union(Schema.lazy(() => PurpleFlexVolumeSchema), Schema.null)),
  "flocker": Schema.optional(Schema.union(Schema.lazy(() => FlockerSchema), Schema.null)),
  "gcePersistentDisk": Schema.optional(Schema.union(Schema.lazy(() => GcePersistentDiskSchema), Schema.null)),
  "gitRepo": Schema.optional(Schema.union(Schema.lazy(() => GitRepoSchema), Schema.null)),
  "glusterfs": Schema.optional(Schema.union(Schema.lazy(() => GlusterfsSchema), Schema.null)),
  "hostPath": Schema.optional(Schema.union(Schema.lazy(() => HostPathSchema), Schema.null)),
  "iscsi": Schema.optional(Schema.union(Schema.lazy(() => PurpleIscsiSchema), Schema.null)),
  "nfs": Schema.optional(Schema.union(Schema.lazy(() => NfsSchema), Schema.null)),
  "persistentVolumeClaim": Schema.optional(Schema.union(Schema.lazy(() => PersistentVolumeClaimSchema), Schema.null)),
  "photonPersistentDisk": Schema.optional(Schema.union(Schema.lazy(() => PhotonPersistentDiskSchema), Schema.null)),
  "portworxVolume": Schema.optional(Schema.union(Schema.lazy(() => PortworxVolumeSchema), Schema.null)),
  "projected": Schema.optional(Schema.union(Schema.lazy(() => ProjectedSchema), Schema.null)),
  "quobyte": Schema.optional(Schema.union(Schema.lazy(() => QuobyteSchema), Schema.null)),
  "rbd": Schema.optional(Schema.union(Schema.lazy(() => PurpleRbdSchema), Schema.null)),
  "scaleIO": Schema.optional(Schema.union(Schema.lazy(() => PurpleScaleIoSchema), Schema.null)),
  "secret": Schema.optional(Schema.union(Schema.lazy(() => SecretClassSchema), Schema.null)),
  "storageos": Schema.optional(Schema.union(Schema.lazy(() => PurpleStorageosSchema), Schema.null)),
  "vsphereVolume": Schema.optional(Schema.union(Schema.lazy(() => VsphereVolumeSchema), Schema.null)),
  "fieldPath": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "namespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "resourceVersion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type TentacledProperties = Schema.From<typeof TentacledPropertiesSchema>;

export const AdditionalPropertiesSchema = Schema.struct({
  "items": Schema.lazy(() => BuildDateSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AdditionalProperties = Schema.From<typeof AdditionalPropertiesSchema>;

export const ExtraSchema = Schema.struct({
  "additionalProperties": Schema.lazy(() => AdditionalPropertiesSchema),
  "description": Schema.string,
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Extra = Schema.From<typeof ExtraSchema>;

export const ScaleTargetRefPropertiesSchema = Schema.struct({
  "apiGroup": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "kind": Schema.lazy(() => GroupVersionSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "namespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "apiVersion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type ScaleTargetRefProperties = Schema.From<typeof ScaleTargetRefPropertiesSchema>;

export const ParametersClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ScaleTargetRefPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ParametersClass = Schema.From<typeof ParametersClassSchema>;

export const Properties52Schema = Schema.struct({
  "controllerExpandSecretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "controllerPublishSecretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "driver": Schema.lazy(() => GroupVersionSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "nodePublishSecretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "nodeStageSecretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "volumeAttributes": Schema.lazy(() => VolumeAttributesClassSchema),
  "volumeHandle": Schema.lazy(() => GroupVersionSchema),
});
export type Properties52 = Schema.From<typeof Properties52Schema>;

export const FluffyCsiSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties52Schema),
  "required": Schema.array(Schema.lazy(() => CsiRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyCsi = Schema.From<typeof FluffyCsiSchema>;

export const PurplePropertiesSchema = Schema.struct({
  "kubeletConfigKey": Schema.lazy(() => GroupVersionSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "namespace": Schema.lazy(() => GroupVersionSchema),
  "resourceVersion": Schema.lazy(() => DriverSchema),
  "uid": Schema.lazy(() => DriverSchema),
});
export type PurpleProperties = Schema.From<typeof PurplePropertiesSchema>;

export const ConfigMapSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PurplePropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ConfigMap = Schema.From<typeof ConfigMapSchema>;

export const Properties65Schema = Schema.struct({
  "lastProbeTime": Schema.lazy(() => LastTransitionTimeSchema),
  "lastTransitionTime": Schema.lazy(() => LastTransitionTimeSchema),
  "message": Schema.lazy(() => DriverSchema),
  "reason": Schema.lazy(() => DriverSchema),
  "status": Schema.lazy(() => OneOfSchema),
  "type": Schema.lazy(() => OneOfSchema),
});
export type Properties65 = Schema.From<typeof Properties65Schema>;

export const Items7Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties65Schema),
  "required": Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Items7 = Schema.From<typeof Items7Schema>;

export const TentacledConditionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => Items7Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type TentacledConditions = Schema.From<typeof TentacledConditionsSchema>;

export const TargetRefPropertiesSchema = Schema.struct({
  "apiVersion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "fieldPath": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "kind": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "name": Schema.lazy(() => DriverSchema),
  "namespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "resourceVersion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "uid": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type TargetRefProperties = Schema.From<typeof TargetRefPropertiesSchema>;

export const TargetRefSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => TargetRefPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TargetRef = Schema.From<typeof TargetRefSchema>;

export const Properties50Schema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "volumeID": Schema.lazy(() => GroupVersionSchema),
});
export type Properties50 = Schema.From<typeof Properties50Schema>;

export const FluffyCinderSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties50Schema),
  "required": Schema.array(Schema.lazy(() => AwsElasticBlockStoreRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyCinder = Schema.From<typeof FluffyCinderSchema>;

export const ControllerExpandSecretRefPropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => DriverSchema),
  "namespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type ControllerExpandSecretRefProperties = Schema.From<typeof ControllerExpandSecretRefPropertiesSchema>;

export const ControllerExpandSecretRefClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ControllerExpandSecretRefPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ControllerExpandSecretRefClass = Schema.From<typeof ControllerExpandSecretRefClassSchema>;

export const Properties49Schema = Schema.struct({
  "monitors": Schema.lazy(() => ConversionReviewVersionsSchema),
  "path": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretFile": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ControllerExpandSecretRefClassSchema),
  "user": Schema.lazy(() => DriverSchema),
});
export type Properties49 = Schema.From<typeof Properties49Schema>;

export const FluffyCephfsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties49Schema),
  "required": Schema.array(Schema.lazy(() => CephfsRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyCephfs = Schema.From<typeof FluffyCephfsSchema>;

export const VsphereVolumePropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "storagePolicyID": Schema.lazy(() => DriverSchema),
  "storagePolicyName": Schema.lazy(() => DriverSchema),
  "volumePath": Schema.lazy(() => GroupVersionSchema),
});
export type VsphereVolumeProperties = Schema.From<typeof VsphereVolumePropertiesSchema>;

export const VsphereVolumeSchema = Schema.struct({
  "description": Schema.lazy(() => VsphereVolumeDescriptionSchema),
  "properties": Schema.lazy(() => VsphereVolumePropertiesSchema),
  "required": Schema.array(Schema.lazy(() => VsphereVolumeRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type VsphereVolume = Schema.From<typeof VsphereVolumeSchema>;

export const Properties17Schema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ItemsClassSchema),
  "volumeName": Schema.lazy(() => DriverSchema),
  "volumeNamespace": Schema.lazy(() => DriverSchema),
});
export type Properties17 = Schema.From<typeof Properties17Schema>;

export const PurpleStorageosSchema = Schema.struct({
  "description": Schema.lazy(() => StorageosDescriptionSchema),
  "properties": Schema.lazy(() => Properties17Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleStorageos = Schema.From<typeof PurpleStorageosSchema>;

export const SecretRefSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IndigoPropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type SecretRef = Schema.From<typeof SecretRefSchema>;

export const Properties16Schema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "gateway": Schema.lazy(() => GroupVersionSchema),
  "protectionDomain": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => SecretRefSchema),
  "sslEnabled": Schema.lazy(() => DriverSchema),
  "storageMode": Schema.lazy(() => DriverSchema),
  "storagePool": Schema.lazy(() => DriverSchema),
  "system": Schema.lazy(() => GroupVersionSchema),
  "volumeName": Schema.lazy(() => DriverSchema),
});
export type Properties16 = Schema.From<typeof Properties16Schema>;

export const PurpleScaleIoSchema = Schema.struct({
  "description": Schema.lazy(() => ScaleIoDescriptionSchema),
  "properties": Schema.lazy(() => Properties16Schema),
  "required": Schema.array(Schema.lazy(() => ScaleIoRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleScaleIo = Schema.From<typeof PurpleScaleIoSchema>;

export const Properties15Schema = Schema.struct({
  "apiGroups": Schema.lazy(() => ValuesClassSchema),
  "apiVersions": Schema.lazy(() => ValuesClassSchema),
  "operations": Schema.lazy(() => ValuesClassSchema),
  "resources": Schema.lazy(() => ValuesClassSchema),
  "scope": Schema.lazy(() => DriverSchema),
});
export type Properties15 = Schema.From<typeof Properties15Schema>;

export const HilariousItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties15Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type HilariousItems = Schema.From<typeof HilariousItemsSchema>;

export const PurpleRulesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => HilariousItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleRules = Schema.From<typeof PurpleRulesSchema>;

export const Properties14Schema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "image": Schema.lazy(() => GroupVersionSchema),
  "keyring": Schema.lazy(() => DriverSchema),
  "monitors": Schema.lazy(() => ConversionReviewVersionsSchema),
  "pool": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ItemsClassSchema),
  "user": Schema.lazy(() => DriverSchema),
});
export type Properties14 = Schema.From<typeof Properties14Schema>;

export const PurpleRbdSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties14Schema),
  "required": Schema.array(Schema.lazy(() => CephfsRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleRbd = Schema.From<typeof PurpleRbdSchema>;

export const QuobytePropertiesSchema = Schema.struct({
  "group": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "registry": Schema.lazy(() => GroupVersionSchema),
  "tenant": Schema.lazy(() => DriverSchema),
  "user": Schema.lazy(() => DriverSchema),
  "volume": Schema.lazy(() => GroupVersionSchema),
});
export type QuobyteProperties = Schema.From<typeof QuobytePropertiesSchema>;

export const QuobyteSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => QuobytePropertiesSchema),
  "required": Schema.array(Schema.lazy(() => QuobyteRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Quobyte = Schema.From<typeof QuobyteSchema>;

export const ServiceAccountTokenPropertiesSchema = Schema.struct({
  "audience": Schema.lazy(() => DriverSchema),
  "expirationSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "path": Schema.lazy(() => GroupVersionSchema),
});
export type ServiceAccountTokenProperties = Schema.From<typeof ServiceAccountTokenPropertiesSchema>;

export const ServiceAccountTokenSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ServiceAccountTokenPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HostPathRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ServiceAccountToken = Schema.From<typeof ServiceAccountTokenSchema>;

export const Properties13Schema = Schema.struct({
  "items": Schema.lazy(() => TentacledItemsSchema),
});
export type Properties13 = Schema.From<typeof Properties13Schema>;

export const FluffyDownwardApiSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties13Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyDownwardApi = Schema.From<typeof FluffyDownwardApiSchema>;

export const Properties12Schema = Schema.struct({
  "configMap": Schema.lazy(() => SecretClassSchema),
  "downwardAPI": Schema.lazy(() => FluffyDownwardApiSchema),
  "secret": Schema.lazy(() => SecretClassSchema),
  "serviceAccountToken": Schema.lazy(() => ServiceAccountTokenSchema),
});
export type Properties12 = Schema.From<typeof Properties12Schema>;

export const SourcesItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties12Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type SourcesItems = Schema.From<typeof SourcesItemsSchema>;

export const PurpleSourcesSchema = Schema.struct({
  "description": Schema.lazy(() => SourcesDescriptionSchema),
  "items": Schema.lazy(() => SourcesItemsSchema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type PurpleSources = Schema.From<typeof PurpleSourcesSchema>;

export const ProjectedPropertiesSchema = Schema.struct({
  "defaultMode": Schema.lazy(() => LastTransitionTimeSchema),
  "sources": Schema.lazy(() => PurpleSourcesSchema),
});
export type ProjectedProperties = Schema.From<typeof ProjectedPropertiesSchema>;

export const ProjectedSchema = Schema.struct({
  "description": Schema.lazy(() => ProjectedDescriptionSchema),
  "properties": Schema.lazy(() => ProjectedPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ProjectedRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Projected = Schema.From<typeof ProjectedSchema>;

export const PortworxVolumePropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "volumeID": Schema.lazy(() => GroupVersionSchema),
});
export type PortworxVolumeProperties = Schema.From<typeof PortworxVolumePropertiesSchema>;

export const PortworxVolumeSchema = Schema.struct({
  "description": Schema.lazy(() => PortworxVolumeDescriptionSchema),
  "properties": Schema.lazy(() => PortworxVolumePropertiesSchema),
  "required": Schema.array(Schema.lazy(() => AwsElasticBlockStoreRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PortworxVolume = Schema.From<typeof PortworxVolumeSchema>;

export const PhotonPersistentDiskPropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "pdID": Schema.lazy(() => GroupVersionSchema),
});
export type PhotonPersistentDiskProperties = Schema.From<typeof PhotonPersistentDiskPropertiesSchema>;

export const PhotonPersistentDiskSchema = Schema.struct({
  "description": Schema.lazy(() => PhotonPersistentDiskDescriptionSchema),
  "properties": Schema.lazy(() => PhotonPersistentDiskPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PhotonPersistentDiskRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PhotonPersistentDisk = Schema.From<typeof PhotonPersistentDiskSchema>;

export const PersistentVolumeClaimPropertiesSchema = Schema.struct({
  "claimName": Schema.lazy(() => GroupVersionSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
});
export type PersistentVolumeClaimProperties = Schema.From<typeof PersistentVolumeClaimPropertiesSchema>;

export const PersistentVolumeClaimSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => PersistentVolumeClaimPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => PersistentVolumeClaimRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PersistentVolumeClaim = Schema.From<typeof PersistentVolumeClaimSchema>;

export const NfsPropertiesSchema = Schema.struct({
  "path": Schema.lazy(() => GroupVersionSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "server": Schema.lazy(() => GroupVersionSchema),
});
export type NfsProperties = Schema.From<typeof NfsPropertiesSchema>;

export const NfsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => NfsPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => NfsRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Nfs = Schema.From<typeof NfsSchema>;

export const Properties11Schema = Schema.struct({
  "mountPath": Schema.lazy(() => GroupVersionSchema),
  "mountPropagation": Schema.lazy(() => DriverSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "subPath": Schema.lazy(() => DriverSchema),
  "subPathExpr": Schema.lazy(() => DriverSchema),
});
export type Properties11 = Schema.From<typeof Properties11Schema>;

export const VolumeMountsItemsSchema = Schema.struct({
  "description": Schema.lazy(() => VolumemountV1DescriptionSchema),
  "properties": Schema.lazy(() => Properties11Schema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type VolumeMountsItems = Schema.From<typeof VolumeMountsItemsSchema>;

export const PurpleVolumeMountsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => VolumeMountsItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type PurpleVolumeMounts = Schema.From<typeof PurpleVolumeMountsSchema>;

export const Properties10Schema = Schema.struct({
  "devicePath": Schema.lazy(() => GroupVersionSchema),
  "name": Schema.lazy(() => GroupVersionSchema),
});
export type Properties10 = Schema.From<typeof Properties10Schema>;

export const VolumeDevicesItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties10Schema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type VolumeDevicesItems = Schema.From<typeof VolumeDevicesItemsSchema>;

export const VolumeDevicesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => VolumeDevicesItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type VolumeDevices = Schema.From<typeof VolumeDevicesSchema>;

export const CategoriesSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => BuildDateSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-strategy": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesPatchStrategySchema), Schema.null)),
  "x-kubernetes-list-type": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesListTypeSchema), Schema.null)),
});
export type Categories = Schema.From<typeof CategoriesSchema>;

export const WindowsOptionsPropertiesSchema = Schema.struct({
  "gmsaCredentialSpec": Schema.lazy(() => DriverSchema),
  "gmsaCredentialSpecName": Schema.lazy(() => DriverSchema),
  "runAsUserName": Schema.lazy(() => DriverSchema),
});
export type WindowsOptionsProperties = Schema.From<typeof WindowsOptionsPropertiesSchema>;

export const WindowsOptionsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => WindowsOptionsPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type WindowsOptions = Schema.From<typeof WindowsOptionsSchema>;

export const SeLinuxOptionsPropertiesSchema = Schema.struct({
  "level": Schema.lazy(() => DriverSchema),
  "role": Schema.lazy(() => DriverSchema),
  "type": Schema.lazy(() => DriverSchema),
  "user": Schema.lazy(() => DriverSchema),
});
export type SeLinuxOptionsProperties = Schema.From<typeof SeLinuxOptionsPropertiesSchema>;

export const SeLinuxOptionsSchema = Schema.struct({
  "description": Schema.lazy(() => SeLinuxOptionsDescriptionSchema),
  "properties": Schema.lazy(() => SeLinuxOptionsPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type SeLinuxOptions = Schema.From<typeof SeLinuxOptionsSchema>;

export const Properties9Schema = Schema.struct({
  "add": Schema.lazy(() => ValuesClassSchema),
  "drop": Schema.lazy(() => ValuesClassSchema),
});
export type Properties9 = Schema.From<typeof Properties9Schema>;

export const CapabilitiesClassSchema = Schema.struct({
  "description": Schema.lazy(() => CapabilitiesDescriptionSchema),
  "properties": Schema.lazy(() => Properties9Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type CapabilitiesClass = Schema.From<typeof CapabilitiesClassSchema>;

export const Properties8Schema = Schema.struct({
  "allowPrivilegeEscalation": Schema.lazy(() => DriverSchema),
  "capabilities": Schema.lazy(() => CapabilitiesClassSchema),
  "privileged": Schema.lazy(() => DriverSchema),
  "procMount": Schema.lazy(() => DriverSchema),
  "readOnlyRootFilesystem": Schema.lazy(() => DriverSchema),
  "runAsGroup": Schema.lazy(() => LastTransitionTimeSchema),
  "runAsNonRoot": Schema.lazy(() => DriverSchema),
  "runAsUser": Schema.lazy(() => LastTransitionTimeSchema),
  "seLinuxOptions": Schema.lazy(() => SeLinuxOptionsSchema),
  "windowsOptions": Schema.lazy(() => WindowsOptionsSchema),
});
export type Properties8 = Schema.From<typeof Properties8Schema>;

export const PurpleSecurityContextSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties8Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleSecurityContext = Schema.From<typeof PurpleSecurityContextSchema>;

export const DefaultSchema = Schema.struct({
  "additionalProperties": Schema.lazy(() => TargetAverageValueSchema),
  "description": Schema.string,
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Default = Schema.From<typeof DefaultSchema>;

export const ResourcesPropertiesSchema = Schema.struct({
  "limits": Schema.lazy(() => DefaultSchema),
  "requests": Schema.lazy(() => DefaultSchema),
});
export type ResourcesProperties = Schema.From<typeof ResourcesPropertiesSchema>;

export const PurpleResourcesSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourcesPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleResources = Schema.From<typeof PurpleResourcesSchema>;

export const Properties7Schema = Schema.struct({
  "containerPort": Schema.lazy(() => GroupPriorityMinimumSchema),
  "hostIP": Schema.lazy(() => DriverSchema),
  "hostPort": Schema.lazy(() => LastTransitionTimeSchema),
  "name": Schema.lazy(() => DriverSchema),
  "protocol": Schema.lazy(() => DriverSchema),
});
export type Properties7 = Schema.From<typeof Properties7Schema>;

export const IndecentItemsSchema = Schema.struct({
  "description": Schema.lazy(() => ContainerportV1DescriptionSchema),
  "properties": Schema.lazy(() => Properties7Schema),
  "required": Schema.array(Schema.lazy(() => ContainerportV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type IndecentItems = Schema.From<typeof IndecentItemsSchema>;

export const PurplePortsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => IndecentItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-list-map-keys": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => ContainerportV1RequiredSchema)), Schema.null)),
  "x-kubernetes-list-type": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesListTypeSchema), Schema.null)),
  "x-kubernetes-patch-merge-key": Schema.optional(Schema.union(Schema.lazy(() => ContainerportV1RequiredSchema), Schema.null)),
  "x-kubernetes-patch-strategy": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesPatchStrategySchema), Schema.null)),
});
export type PurplePorts = Schema.From<typeof PurplePortsSchema>;

export const AllocatablePropertiesSchema = Schema.struct({
  "count": Schema.lazy(() => LastTransitionTimeSchema),
});
export type AllocatableProperties = Schema.From<typeof AllocatablePropertiesSchema>;

export const AllocatableSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AllocatablePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Allocatable = Schema.From<typeof AllocatableSchema>;

export const Properties6Schema = Schema.struct({
  "args": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "command": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "env": Schema.optional(Schema.union(Schema.lazy(() => PurpleEnvSchema), Schema.null)),
  "envFrom": Schema.optional(Schema.union(Schema.lazy(() => EnvFromSchema), Schema.null)),
  "image": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "imagePullPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "lifecycle": Schema.optional(Schema.union(Schema.lazy(() => LifecycleClassSchema), Schema.null)),
  "livenessProbe": Schema.optional(Schema.union(Schema.lazy(() => LivenessProbeClassSchema), Schema.null)),
  "name": Schema.lazy(() => GroupVersionSchema),
  "ports": Schema.optional(Schema.union(Schema.lazy(() => PurplePortsSchema), Schema.null)),
  "readinessProbe": Schema.optional(Schema.union(Schema.lazy(() => LivenessProbeClassSchema), Schema.null)),
  "resources": Schema.optional(Schema.union(Schema.lazy(() => PurpleResourcesSchema), Schema.null)),
  "securityContext": Schema.optional(Schema.union(Schema.lazy(() => PurpleSecurityContextSchema), Schema.null)),
  "startupProbe": Schema.optional(Schema.union(Schema.lazy(() => LivenessProbeClassSchema), Schema.null)),
  "stdin": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "stdinOnce": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "terminationMessagePath": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "terminationMessagePolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "tty": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "volumeDevices": Schema.optional(Schema.union(Schema.lazy(() => VolumeDevicesSchema), Schema.null)),
  "volumeMounts": Schema.optional(Schema.union(Schema.lazy(() => PurpleVolumeMountsSchema), Schema.null)),
  "workingDir": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "allocatable": Schema.optional(Schema.union(Schema.lazy(() => AllocatableSchema), Schema.null)),
  "nodeID": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
  "topologyKeys": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
});
export type Properties6 = Schema.From<typeof Properties6Schema>;

export const KeyItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties6Schema),
  "required": Schema.array(Schema.lazy(() => CsinodedriverStorageV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type KeyItems = Schema.From<typeof KeyItemsSchema>;

export const KeyClassSchema = Schema.struct({
  "description": Schema.string,
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapKeyRefRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
  "items": Schema.optional(Schema.union(Schema.lazy(() => KeyItemsSchema), Schema.null)),
});
export type KeyClass = Schema.From<typeof KeyClassSchema>;

export const Properties5Schema = Schema.struct({
  "key": Schema.lazy(() => KeyClassSchema),
  "operator": Schema.lazy(() => GroupVersionSchema),
  "values": Schema.lazy(() => ValuesClassSchema),
});
export type Properties5 = Schema.From<typeof Properties5Schema>;

export const IndigoItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties5Schema),
  "required": Schema.array(Schema.lazy(() => LabelselectorrequirementMetaV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type IndigoItems = Schema.From<typeof IndigoItemsSchema>;

export const PurpleMatchExpressionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => IndigoItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleMatchExpressions = Schema.From<typeof PurpleMatchExpressionsSchema>;

export const SelectorPropertiesSchema = Schema.struct({
  "matchExpressions": Schema.lazy(() => PurpleMatchExpressionsSchema),
  "matchLabels": Schema.lazy(() => VolumeAttributesClassSchema),
});
export type SelectorProperties = Schema.From<typeof SelectorPropertiesSchema>;

export const MetricSelectorClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => SelectorPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type MetricSelectorClass = Schema.From<typeof MetricSelectorClassSchema>;

export const LivenessProbePropertiesSchema = Schema.struct({
  "exec": Schema.lazy(() => ExecSchema),
  "failureThreshold": Schema.lazy(() => LastTransitionTimeSchema),
  "httpGet": Schema.lazy(() => HttpGetSchema),
  "initialDelaySeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "periodSeconds": Schema.lazy(() => LastTransitionTimeSchema),
  "successThreshold": Schema.lazy(() => LastTransitionTimeSchema),
  "tcpSocket": Schema.lazy(() => TcpSocketSchema),
  "timeoutSeconds": Schema.lazy(() => LastTransitionTimeSchema),
});
export type LivenessProbeProperties = Schema.From<typeof LivenessProbePropertiesSchema>;

export const LivenessProbeClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => LivenessProbePropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type LivenessProbeClass = Schema.From<typeof LivenessProbeClassSchema>;

export const TcpSocketPropertiesSchema = Schema.struct({
  "host": Schema.lazy(() => DriverSchema),
  "port": Schema.lazy(() => TargetAverageValueSchema),
});
export type TcpSocketProperties = Schema.From<typeof TcpSocketPropertiesSchema>;

export const TcpSocketSchema = Schema.struct({
  "description": Schema.lazy(() => TcpSocketDescriptionSchema),
  "properties": Schema.lazy(() => TcpSocketPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HttpGetRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TcpSocket = Schema.From<typeof TcpSocketSchema>;

export const Properties4Schema = Schema.struct({
  "name": Schema.lazy(() => GroupVersionSchema),
  "value": Schema.lazy(() => GroupVersionSchema),
});
export type Properties4 = Schema.From<typeof Properties4Schema>;

export const HttpHeadersItemsSchema = Schema.struct({
  "description": Schema.lazy(() => HttpheaderV1DescriptionSchema),
  "properties": Schema.lazy(() => Properties4Schema),
  "required": Schema.array(Schema.lazy(() => HttpheaderV1RequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type HttpHeadersItems = Schema.From<typeof HttpHeadersItemsSchema>;

export const HttpHeadersSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => HttpHeadersItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type HttpHeaders = Schema.From<typeof HttpHeadersSchema>;

export const HttpGetPropertiesSchema = Schema.struct({
  "host": Schema.lazy(() => DriverSchema),
  "httpHeaders": Schema.lazy(() => HttpHeadersSchema),
  "path": Schema.lazy(() => DriverSchema),
  "port": Schema.lazy(() => TargetAverageValueSchema),
  "scheme": Schema.lazy(() => DriverSchema),
});
export type HttpGetProperties = Schema.From<typeof HttpGetPropertiesSchema>;

export const HttpGetSchema = Schema.struct({
  "description": Schema.lazy(() => HttpGetDescriptionSchema),
  "properties": Schema.lazy(() => HttpGetPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HttpGetRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type HttpGet = Schema.From<typeof HttpGetSchema>;

export const ExecPropertiesSchema = Schema.struct({
  "command": Schema.lazy(() => ValuesClassSchema),
});
export type ExecProperties = Schema.From<typeof ExecPropertiesSchema>;

export const ExecSchema = Schema.struct({
  "description": Schema.lazy(() => ExecDescriptionSchema),
  "properties": Schema.lazy(() => ExecPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Exec = Schema.From<typeof ExecSchema>;

export const PostStartPropertiesSchema = Schema.struct({
  "exec": Schema.lazy(() => ExecSchema),
  "httpGet": Schema.lazy(() => HttpGetSchema),
  "tcpSocket": Schema.lazy(() => TcpSocketSchema),
});
export type PostStartProperties = Schema.From<typeof PostStartPropertiesSchema>;

export const PostStartSchema = Schema.struct({
  "description": Schema.lazy(() => PostStartDescriptionSchema),
  "properties": Schema.lazy(() => PostStartPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PostStart = Schema.From<typeof PostStartSchema>;

export const Properties3Schema = Schema.struct({
  "postStart": Schema.lazy(() => PostStartSchema),
  "preStop": Schema.lazy(() => PostStartSchema),
});
export type Properties3 = Schema.From<typeof Properties3Schema>;

export const LifecycleClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties3Schema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type LifecycleClass = Schema.From<typeof LifecycleClassSchema>;

export const GroupPriorityMinimumSchema = Schema.struct({
  "description": Schema.string,
  "format": Schema.lazy(() => FormatSchema),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type GroupPriorityMinimum = Schema.From<typeof GroupPriorityMinimumSchema>;

export const Properties2Schema = Schema.struct({
  "chapAuthDiscovery": Schema.lazy(() => DriverSchema),
  "chapAuthSession": Schema.lazy(() => DriverSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "initiatorName": Schema.lazy(() => DriverSchema),
  "iqn": Schema.lazy(() => GroupVersionSchema),
  "iscsiInterface": Schema.lazy(() => DriverSchema),
  "lun": Schema.lazy(() => GroupPriorityMinimumSchema),
  "portals": Schema.lazy(() => ValuesClassSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ItemsClassSchema),
  "targetPortal": Schema.lazy(() => GroupVersionSchema),
});
export type Properties2 = Schema.From<typeof Properties2Schema>;

export const PurpleIscsiSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties2Schema),
  "required": Schema.array(Schema.lazy(() => IscsiRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleIscsi = Schema.From<typeof PurpleIscsiSchema>;

export const HostPathPropertiesSchema = Schema.struct({
  "path": Schema.lazy(() => GroupVersionSchema),
  "type": Schema.lazy(() => DriverSchema),
});
export type HostPathProperties = Schema.From<typeof HostPathPropertiesSchema>;

export const HostPathSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => HostPathPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HostPathRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type HostPath = Schema.From<typeof HostPathSchema>;

export const GlusterfsPropertiesSchema = Schema.struct({
  "endpoints": Schema.lazy(() => GroupVersionSchema),
  "path": Schema.lazy(() => GroupVersionSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "endpointsNamespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type GlusterfsProperties = Schema.From<typeof GlusterfsPropertiesSchema>;

export const GlusterfsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => GlusterfsPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => GlusterfsRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Glusterfs = Schema.From<typeof GlusterfsSchema>;

export const GitRepoPropertiesSchema = Schema.struct({
  "directory": Schema.lazy(() => DriverSchema),
  "repository": Schema.lazy(() => GroupVersionSchema),
  "revision": Schema.lazy(() => DriverSchema),
});
export type GitRepoProperties = Schema.From<typeof GitRepoPropertiesSchema>;

export const GitRepoSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => GitRepoPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => GitRepoRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type GitRepo = Schema.From<typeof GitRepoSchema>;

export const GcePersistentDiskPropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "partition": Schema.lazy(() => LastTransitionTimeSchema),
  "pdName": Schema.lazy(() => GroupVersionSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
});
export type GcePersistentDiskProperties = Schema.From<typeof GcePersistentDiskPropertiesSchema>;

export const GcePersistentDiskSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => GcePersistentDiskPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => GcePersistentDiskRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type GcePersistentDisk = Schema.From<typeof GcePersistentDiskSchema>;

export const FlockerPropertiesSchema = Schema.struct({
  "datasetName": Schema.lazy(() => DriverSchema),
  "datasetUUID": Schema.lazy(() => DriverSchema),
});
export type FlockerProperties = Schema.From<typeof FlockerPropertiesSchema>;

export const FlockerSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FlockerPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Flocker = Schema.From<typeof FlockerSchema>;

export const Properties1Schema = Schema.struct({
  "driver": Schema.lazy(() => GroupVersionSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "options": Schema.lazy(() => VolumeAttributesClassSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ItemsClassSchema),
});
export type Properties1 = Schema.From<typeof Properties1Schema>;

export const PurpleFlexVolumeSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => Properties1Schema),
  "required": Schema.array(Schema.lazy(() => CsiRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleFlexVolume = Schema.From<typeof PurpleFlexVolumeSchema>;

export const FcPropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "lun": Schema.lazy(() => LastTransitionTimeSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "targetWWNs": Schema.lazy(() => ValuesClassSchema),
  "wwids": Schema.lazy(() => ValuesClassSchema),
});
export type FcProperties = Schema.From<typeof FcPropertiesSchema>;

export const FcSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FcPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Fc = Schema.From<typeof FcSchema>;

export const ConfigMapRefPropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => DriverSchema),
  "optional": Schema.lazy(() => DriverSchema),
});
export type ConfigMapRefProperties = Schema.From<typeof ConfigMapRefPropertiesSchema>;

export const RefSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConfigMapRefPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Ref = Schema.From<typeof RefSchema>;

export const BraggadociousPropertiesSchema = Schema.struct({
  "configMapRef": Schema.lazy(() => RefSchema),
  "prefix": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => RefSchema),
});
export type BraggadociousProperties = Schema.From<typeof BraggadociousPropertiesSchema>;

export const EnvFromItemsSchema = Schema.struct({
  "description": Schema.lazy(() => FluffyDescriptionSchema),
  "properties": Schema.lazy(() => BraggadociousPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type EnvFromItems = Schema.From<typeof EnvFromItemsSchema>;

export const EnvFromSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => EnvFromItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type EnvFrom = Schema.From<typeof EnvFromSchema>;

export const ConfigMapKeyRefPropertiesSchema = Schema.struct({
  "key": Schema.lazy(() => GroupVersionSchema),
  "name": Schema.lazy(() => DriverSchema),
  "optional": Schema.lazy(() => DriverSchema),
});
export type ConfigMapKeyRefProperties = Schema.From<typeof ConfigMapKeyRefPropertiesSchema>;

export const KeyRefSchema = Schema.struct({
  "description": Schema.lazy(() => ConfigMapKeyRefDescriptionSchema),
  "properties": Schema.lazy(() => ConfigMapKeyRefPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapKeyRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type KeyRef = Schema.From<typeof KeyRefSchema>;

export const ValueFromPropertiesSchema = Schema.struct({
  "configMapKeyRef": Schema.lazy(() => KeyRefSchema),
  "fieldRef": Schema.lazy(() => FieldRefSchema),
  "resourceFieldRef": Schema.lazy(() => ResourceFieldRefSchema),
  "secretKeyRef": Schema.lazy(() => KeyRefSchema),
});
export type ValueFromProperties = Schema.From<typeof ValueFromPropertiesSchema>;

export const ValueFromSchema = Schema.struct({
  "description": Schema.lazy(() => ValueFromDescriptionSchema),
  "properties": Schema.lazy(() => ValueFromPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ValueFrom = Schema.From<typeof ValueFromSchema>;

export const MischievousPropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => GroupVersionSchema),
  "value": Schema.lazy(() => DriverSchema),
  "valueFrom": Schema.lazy(() => ValueFromSchema),
});
export type MischievousProperties = Schema.From<typeof MischievousPropertiesSchema>;

export const EnvItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => MischievousPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type EnvItems = Schema.From<typeof EnvItemsSchema>;

export const PurpleEnvSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => EnvItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.lazy(() => ConfigMapRequiredSchema),
  "x-kubernetes-patch-strategy": Schema.lazy(() => XKubernetesPatchStrategySchema),
});
export type PurpleEnv = Schema.From<typeof PurpleEnvSchema>;

export const EmptyDirPropertiesSchema = Schema.struct({
  "medium": Schema.lazy(() => DriverSchema),
  "sizeLimit": Schema.lazy(() => TargetAverageValueSchema),
});
export type EmptyDirProperties = Schema.From<typeof EmptyDirPropertiesSchema>;

export const EmptyDirSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => EmptyDirPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type EmptyDir = Schema.From<typeof EmptyDirSchema>;

export const TargetAverageValueSchema = Schema.struct({
  "oneOf": Schema.array(Schema.lazy(() => BuildDateSchema)),
});
export type TargetAverageValue = Schema.From<typeof TargetAverageValueSchema>;

export const ResourceFieldRefPropertiesSchema = Schema.struct({
  "containerName": Schema.lazy(() => DriverSchema),
  "divisor": Schema.lazy(() => TargetAverageValueSchema),
  "resource": Schema.lazy(() => GroupVersionSchema),
});
export type ResourceFieldRefProperties = Schema.From<typeof ResourceFieldRefPropertiesSchema>;

export const ResourceFieldRefSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ResourceFieldRefPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ResourceFieldRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ResourceFieldRef = Schema.From<typeof ResourceFieldRefSchema>;

export const FieldRefPropertiesSchema = Schema.struct({
  "apiVersion": Schema.lazy(() => DriverSchema),
  "fieldPath": Schema.lazy(() => GroupVersionSchema),
});
export type FieldRefProperties = Schema.From<typeof FieldRefPropertiesSchema>;

export const FieldRefSchema = Schema.struct({
  "description": Schema.lazy(() => FieldRefDescriptionSchema),
  "properties": Schema.lazy(() => FieldRefPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => FieldRefRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FieldRef = Schema.From<typeof FieldRefSchema>;

export const FriskyPropertiesSchema = Schema.struct({
  "fieldRef": Schema.lazy(() => FieldRefSchema),
  "mode": Schema.lazy(() => LastTransitionTimeSchema),
  "path": Schema.lazy(() => GroupVersionSchema),
  "resourceFieldRef": Schema.lazy(() => ResourceFieldRefSchema),
});
export type FriskyProperties = Schema.From<typeof FriskyPropertiesSchema>;

export const StickyItemsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => FriskyPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HostPathRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type StickyItems = Schema.From<typeof StickyItemsSchema>;

export const TentacledItemsSchema = Schema.struct({
  "description": Schema.lazy(() => PurpleDescriptionSchema),
  "items": Schema.lazy(() => StickyItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type TentacledItems = Schema.From<typeof TentacledItemsSchema>;

export const MagentaPropertiesSchema = Schema.struct({
  "defaultMode": Schema.lazy(() => LastTransitionTimeSchema),
  "items": Schema.lazy(() => TentacledItemsSchema),
});
export type MagentaProperties = Schema.From<typeof MagentaPropertiesSchema>;

export const PurpleDownwardApiSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => MagentaPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleDownwardApi = Schema.From<typeof PurpleDownwardApiSchema>;

export const VolumeAttributesClassSchema = Schema.struct({
  "additionalProperties": Schema.lazy(() => BuildDateSchema),
  "description": Schema.string,
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type VolumeAttributesClass = Schema.From<typeof VolumeAttributesClassSchema>;

export const CunningPropertiesSchema = Schema.struct({
  "driver": Schema.lazy(() => GroupVersionSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "nodePublishSecretRef": Schema.lazy(() => ItemsClassSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "volumeAttributes": Schema.lazy(() => VolumeAttributesClassSchema),
});
export type CunningProperties = Schema.From<typeof CunningPropertiesSchema>;

export const PurpleCsiSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => CunningPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CsiRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleCsi = Schema.From<typeof PurpleCsiSchema>;

export const AmbitiousPropertiesSchema = Schema.struct({
  "key": Schema.lazy(() => GroupVersionSchema),
  "mode": Schema.lazy(() => LastTransitionTimeSchema),
  "path": Schema.lazy(() => GroupVersionSchema),
});
export type AmbitiousProperties = Schema.From<typeof AmbitiousPropertiesSchema>;

export const FluffyItemsSchema = Schema.struct({
  "description": Schema.lazy(() => KeytopathV1DescriptionSchema),
  "properties": Schema.lazy(() => AmbitiousPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => HostPathRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type FluffyItems = Schema.From<typeof FluffyItemsSchema>;

export const PurpleItemsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => FluffyItemsSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleItems = Schema.From<typeof PurpleItemsSchema>;

export const ConfigmapprojectionV1PropertiesSchema = Schema.struct({
  "items": Schema.lazy(() => PurpleItemsSchema),
  "name": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "optional": Schema.lazy(() => DriverSchema),
  "defaultMode": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "secretName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type ConfigmapprojectionV1Properties = Schema.From<typeof ConfigmapprojectionV1PropertiesSchema>;

export const SecretClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => ConfigmapprojectionV1PropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type SecretClass = Schema.From<typeof SecretClassSchema>;

export const HilariousPropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => GroupVersionSchema),
  "namespace": Schema.lazy(() => GroupVersionSchema),
  "path": Schema.lazy(() => DriverSchema),
  "port": Schema.lazy(() => LastTransitionTimeSchema),
});
export type HilariousProperties = Schema.From<typeof HilariousPropertiesSchema>;

export const PurpleServiceSchema = Schema.struct({
  "description": Schema.lazy(() => ServiceDescriptionSchema),
  "properties": Schema.lazy(() => HilariousPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => ConfigMapRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleService = Schema.From<typeof PurpleServiceSchema>;

export const WebhookclientconfigAdmissionregistrationV1PropertiesSchema = Schema.struct({
  "caBundle": Schema.lazy(() => LastTransitionTimeSchema),
  "service": Schema.lazy(() => PurpleServiceSchema),
  "url": Schema.lazy(() => DriverSchema),
});
export type WebhookclientconfigAdmissionregistrationV1Properties = Schema.From<typeof WebhookclientconfigAdmissionregistrationV1PropertiesSchema>;

export const WebhookclientconfigAdmissionregistrationV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => WebhookclientconfigAdmissionregistrationV1PropertiesSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.optional(Schema.union(Schema.null, Schema.string)),
});
export type WebhookclientconfigAdmissionregistrationV1 = Schema.From<typeof WebhookclientconfigAdmissionregistrationV1Schema>;

export const IndecentPropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ItemsClassSchema),
  "volumeID": Schema.lazy(() => GroupVersionSchema),
});
export type IndecentProperties = Schema.From<typeof IndecentPropertiesSchema>;

export const PurpleCinderSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IndecentPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => AwsElasticBlockStoreRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleCinder = Schema.From<typeof PurpleCinderSchema>;

export const IndigoPropertiesSchema = Schema.struct({
  "name": Schema.lazy(() => DriverSchema),
});
export type IndigoProperties = Schema.From<typeof IndigoPropertiesSchema>;

export const ItemsClassSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => IndigoPropertiesSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ItemsClass = Schema.From<typeof ItemsClassSchema>;

export const ConversionReviewVersionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => BuildDateSchema),
  "type": Schema.lazy(() => TypeElementSchema),
  "x-kubernetes-list-type": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesListTypeSchema), Schema.null)),
});
export type ConversionReviewVersions = Schema.From<typeof ConversionReviewVersionsSchema>;

export const StickyPropertiesSchema = Schema.struct({
  "monitors": Schema.lazy(() => ConversionReviewVersionsSchema),
  "path": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretFile": Schema.lazy(() => DriverSchema),
  "secretRef": Schema.lazy(() => ItemsClassSchema),
  "user": Schema.lazy(() => DriverSchema),
});
export type StickyProperties = Schema.From<typeof StickyPropertiesSchema>;

export const PurpleCephfsSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => StickyPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CephfsRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type PurpleCephfs = Schema.From<typeof PurpleCephfsSchema>;

export const AzureFilePropertiesSchema = Schema.struct({
  "readOnly": Schema.lazy(() => DriverSchema),
  "secretName": Schema.lazy(() => GroupVersionSchema),
  "shareName": Schema.lazy(() => GroupVersionSchema),
  "secretNamespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type AzureFileProperties = Schema.From<typeof AzureFilePropertiesSchema>;

export const AzureFileSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AzureFilePropertiesSchema),
  "required": Schema.array(Schema.lazy(() => AzureFileRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AzureFile = Schema.From<typeof AzureFileSchema>;

export const AzureDiskPropertiesSchema = Schema.struct({
  "cachingMode": Schema.lazy(() => DriverSchema),
  "diskName": Schema.lazy(() => GroupVersionSchema),
  "diskURI": Schema.lazy(() => GroupVersionSchema),
  "fsType": Schema.lazy(() => DriverSchema),
  "kind": Schema.lazy(() => DriverSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
});
export type AzureDiskProperties = Schema.From<typeof AzureDiskPropertiesSchema>;

export const AzureDiskSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AzureDiskPropertiesSchema),
  "required": Schema.array(Schema.lazy(() => AzureDiskRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AzureDisk = Schema.From<typeof AzureDiskSchema>;

export const AwsElasticBlockStorePropertiesSchema = Schema.struct({
  "fsType": Schema.lazy(() => DriverSchema),
  "partition": Schema.lazy(() => LastTransitionTimeSchema),
  "readOnly": Schema.lazy(() => DriverSchema),
  "volumeID": Schema.lazy(() => GroupVersionSchema),
});
export type AwsElasticBlockStoreProperties = Schema.From<typeof AwsElasticBlockStorePropertiesSchema>;

export const AwsElasticBlockStoreSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AwsElasticBlockStorePropertiesSchema),
  "required": Schema.array(Schema.lazy(() => AwsElasticBlockStoreRequiredSchema)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type AwsElasticBlockStore = Schema.From<typeof AwsElasticBlockStoreSchema>;

export const PdNameSchema = Schema.struct({
  "description": Schema.string,
  "type": Schema.union(Schema.array(Schema.lazy(() => TypeElementSchema)), Schema.lazy(() => TypeElementSchema)),
});
export type PdName = Schema.From<typeof PdNameSchema>;

export const AdmissionReviewVersionsSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.lazy(() => BuildDateSchema),
  "type": Schema.union(Schema.array(Schema.lazy(() => TypeElementSchema)), Schema.lazy(() => TypeElementSchema)),
});
export type AdmissionReviewVersions = Schema.From<typeof AdmissionReviewVersionsSchema>;

export const GroupVersionSchema = Schema.struct({
  "description": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "type": Schema.lazy(() => TypeElementSchema),
});
export type GroupVersion = Schema.From<typeof GroupVersionSchema>;

export const StagesClassSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.optional(Schema.union(Schema.lazy(() => StagesItemsSchema), Schema.null)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
  "x-kubernetes-patch-merge-key": Schema.optional(Schema.union(Schema.lazy(() => ConfigMapKeyRefRequiredSchema), Schema.null)),
  "x-kubernetes-patch-strategy": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesPatchStrategySchema), Schema.null)),
  "x-kubernetes-list-type": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesListTypeSchema), Schema.null)),
});
export type StagesClass = Schema.From<typeof StagesClassSchema>;

export const StagesItemsSchema = Schema.struct({
  "description": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "properties": Schema.optional(Schema.union(Schema.lazy(() => Properties60Schema), Schema.null)),
  "required": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => ScaleTargetRefRequiredSchema)), Schema.null)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type StagesItems = Schema.From<typeof StagesItemsSchema>;

export const Properties60Schema = Schema.struct({
  "lastTransitionTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "message": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "reason": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "status": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
  "type": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
  "apiVersion": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
  "blockOwnerDeletion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "controller": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "kind": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
  "name": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
  "uid": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
  "admissionReviewVersions": Schema.optional(Schema.union(Schema.lazy(() => AdmissionReviewVersionsSchema), Schema.null)),
  "clientConfig": Schema.optional(Schema.union(Schema.lazy(() => WebhookclientconfigAdmissionregistrationV1Schema), Schema.null)),
  "failurePolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "matchPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "namespaceSelector": Schema.optional(Schema.union(Schema.lazy(() => MetricSelectorClassSchema), Schema.null)),
  "objectSelector": Schema.optional(Schema.union(Schema.lazy(() => MetricSelectorClassSchema), Schema.null)),
  "reinvocationPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "rules": Schema.optional(Schema.union(Schema.lazy(() => PurpleRulesSchema), Schema.null)),
  "sideEffects": Schema.optional(Schema.union(Schema.lazy(() => PdNameSchema), Schema.null)),
  "timeoutSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "lastHeartbeatTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "address": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
  "lastProbeTime": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "args": Schema.optional(Schema.union(Schema.lazy(() => StagesClassSchema), Schema.null)),
  "command": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "env": Schema.optional(Schema.union(Schema.lazy(() => PurpleEnvSchema), Schema.null)),
  "envFrom": Schema.optional(Schema.union(Schema.lazy(() => EnvFromSchema), Schema.null)),
  "image": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "imagePullPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "lifecycle": Schema.optional(Schema.union(Schema.lazy(() => LifecycleClassSchema), Schema.null)),
  "livenessProbe": Schema.optional(Schema.union(Schema.lazy(() => LivenessProbeClassSchema), Schema.null)),
  "ports": Schema.optional(Schema.union(Schema.lazy(() => PurplePortsSchema), Schema.null)),
  "readinessProbe": Schema.optional(Schema.union(Schema.lazy(() => LivenessProbeClassSchema), Schema.null)),
  "resources": Schema.optional(Schema.union(Schema.lazy(() => PurpleResourcesSchema), Schema.null)),
  "securityContext": Schema.optional(Schema.union(Schema.lazy(() => PurpleSecurityContextSchema), Schema.null)),
  "startupProbe": Schema.optional(Schema.union(Schema.lazy(() => LivenessProbeClassSchema), Schema.null)),
  "stdin": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "stdinOnce": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "targetContainerName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "terminationMessagePath": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "terminationMessagePolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "tty": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "volumeDevices": Schema.optional(Schema.union(Schema.lazy(() => VolumeDevicesSchema), Schema.null)),
  "volumeMounts": Schema.optional(Schema.union(Schema.lazy(() => PurpleVolumeMountsSchema), Schema.null)),
  "workingDir": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "value": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "valueFrom": Schema.optional(Schema.union(Schema.lazy(() => ValueFromSchema), Schema.null)),
  "ip": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "devicePath": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
  "hostnames": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "awsElasticBlockStore": Schema.optional(Schema.union(Schema.lazy(() => AwsElasticBlockStoreSchema), Schema.null)),
  "azureDisk": Schema.optional(Schema.union(Schema.lazy(() => AzureDiskSchema), Schema.null)),
  "azureFile": Schema.optional(Schema.union(Schema.lazy(() => AzureFileSchema), Schema.null)),
  "cephfs": Schema.optional(Schema.union(Schema.lazy(() => PurpleCephfsSchema), Schema.null)),
  "cinder": Schema.optional(Schema.union(Schema.lazy(() => PurpleCinderSchema), Schema.null)),
  "configMap": Schema.optional(Schema.union(Schema.lazy(() => SecretClassSchema), Schema.null)),
  "csi": Schema.optional(Schema.union(Schema.lazy(() => PurpleCsiSchema), Schema.null)),
  "downwardAPI": Schema.optional(Schema.union(Schema.lazy(() => PurpleDownwardApiSchema), Schema.null)),
  "emptyDir": Schema.optional(Schema.union(Schema.lazy(() => EmptyDirSchema), Schema.null)),
  "fc": Schema.optional(Schema.union(Schema.lazy(() => FcSchema), Schema.null)),
  "flexVolume": Schema.optional(Schema.union(Schema.lazy(() => PurpleFlexVolumeSchema), Schema.null)),
  "flocker": Schema.optional(Schema.union(Schema.lazy(() => FlockerSchema), Schema.null)),
  "gcePersistentDisk": Schema.optional(Schema.union(Schema.lazy(() => GcePersistentDiskSchema), Schema.null)),
  "gitRepo": Schema.optional(Schema.union(Schema.lazy(() => GitRepoSchema), Schema.null)),
  "glusterfs": Schema.optional(Schema.union(Schema.lazy(() => GlusterfsSchema), Schema.null)),
  "hostPath": Schema.optional(Schema.union(Schema.lazy(() => HostPathSchema), Schema.null)),
  "iscsi": Schema.optional(Schema.union(Schema.lazy(() => PurpleIscsiSchema), Schema.null)),
  "nfs": Schema.optional(Schema.union(Schema.lazy(() => NfsSchema), Schema.null)),
  "persistentVolumeClaim": Schema.optional(Schema.union(Schema.lazy(() => PersistentVolumeClaimSchema), Schema.null)),
  "photonPersistentDisk": Schema.optional(Schema.union(Schema.lazy(() => PhotonPersistentDiskSchema), Schema.null)),
  "portworxVolume": Schema.optional(Schema.union(Schema.lazy(() => PortworxVolumeSchema), Schema.null)),
  "projected": Schema.optional(Schema.union(Schema.lazy(() => ProjectedSchema), Schema.null)),
  "quobyte": Schema.optional(Schema.union(Schema.lazy(() => QuobyteSchema), Schema.null)),
  "rbd": Schema.optional(Schema.union(Schema.lazy(() => PurpleRbdSchema), Schema.null)),
  "scaleIO": Schema.optional(Schema.union(Schema.lazy(() => PurpleScaleIoSchema), Schema.null)),
  "secret": Schema.optional(Schema.union(Schema.lazy(() => SecretClassSchema), Schema.null)),
  "storageos": Schema.optional(Schema.union(Schema.lazy(() => PurpleStorageosSchema), Schema.null)),
  "vsphereVolume": Schema.optional(Schema.union(Schema.lazy(() => VsphereVolumeSchema), Schema.null)),
  "mountPath": Schema.optional(Schema.union(Schema.lazy(() => GroupVersionSchema), Schema.null)),
  "mountPropagation": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "readOnly": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "subPath": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "subPathExpr": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "fieldPath": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "namespace": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "resourceVersion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
});
export type Properties60 = Schema.From<typeof Properties60Schema>;

export const LastTransitionTimeSchema = Schema.struct({
  "description": Schema.string,
  "format": Schema.lazy(() => FormatSchema),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type LastTransitionTime = Schema.From<typeof LastTransitionTimeSchema>;

export const BuildDateSchema = Schema.struct({
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type BuildDate = Schema.From<typeof BuildDateSchema>;

export const ValuesClassSchema = Schema.struct({
  "description": Schema.string,
  "items": Schema.optional(Schema.union(Schema.lazy(() => BuildDateSchema), Schema.null)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type ValuesClass = Schema.From<typeof ValuesClassSchema>;

export const AllowedhostpathPolicyV1Beta1PropertiesSchema = Schema.struct({
  "pathPrefix": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "readOnly": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "assuredConcurrencyShares": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "limitResponse": Schema.optional(Schema.union(Schema.lazy(() => LimitResponseSchema), Schema.null)),
  "continue": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "remainingItemCount": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "resourceVersion": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "selfLink": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "finalizers": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "ipBlock": Schema.optional(Schema.union(Schema.lazy(() => IpBlockSchema), Schema.null)),
  "namespaceSelector": Schema.optional(Schema.union(Schema.lazy(() => MetricSelectorClassSchema), Schema.null)),
  "podSelector": Schema.optional(Schema.union(Schema.lazy(() => MetricSelectorClassSchema), Schema.null)),
  "port": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "protocol": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "preferredDuringSchedulingIgnoredDuringExecution": Schema.optional(Schema.union(Schema.lazy(() => PurplePreferredDuringSchedulingIgnoredDuringExecutionSchema), Schema.null)),
  "requiredDuringSchedulingIgnoredDuringExecution": Schema.optional(Schema.union(Schema.lazy(() => RequiredClassSchema), Schema.null)),
  "configMap": Schema.optional(Schema.union(Schema.lazy(() => ConfigMapSchema), Schema.null)),
  "accessModes": Schema.optional(Schema.union(Schema.lazy(() => ValuesClassSchema), Schema.null)),
  "dataSource": Schema.optional(Schema.union(Schema.lazy(() => ParametersClassSchema), Schema.null)),
  "resources": Schema.optional(Schema.union(Schema.lazy(() => PurpleResourcesSchema), Schema.null)),
  "selector": Schema.optional(Schema.union(Schema.lazy(() => PurpleSelectorSchema), Schema.null)),
  "storageClassName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "volumeMode": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "volumeName": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "capacity": Schema.optional(Schema.union(Schema.lazy(() => DefaultSchema), Schema.null)),
  "conditions": Schema.optional(Schema.union(Schema.lazy(() => TentacledConditionsSchema), Schema.null)),
  "phase": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "awsElasticBlockStore": Schema.optional(Schema.union(Schema.lazy(() => AwsElasticBlockStoreSchema), Schema.null)),
  "azureDisk": Schema.optional(Schema.union(Schema.lazy(() => AzureDiskSchema), Schema.null)),
  "azureFile": Schema.optional(Schema.union(Schema.lazy(() => AzureFileSchema), Schema.null)),
  "cephfs": Schema.optional(Schema.union(Schema.lazy(() => FluffyCephfsSchema), Schema.null)),
  "cinder": Schema.optional(Schema.union(Schema.lazy(() => FluffyCinderSchema), Schema.null)),
  "claimRef": Schema.optional(Schema.union(Schema.lazy(() => TargetRefSchema), Schema.null)),
  "csi": Schema.optional(Schema.union(Schema.lazy(() => FluffyCsiSchema), Schema.null)),
  "fc": Schema.optional(Schema.union(Schema.lazy(() => FcSchema), Schema.null)),
  "flexVolume": Schema.optional(Schema.union(Schema.lazy(() => FluffyFlexVolumeSchema), Schema.null)),
  "flocker": Schema.optional(Schema.union(Schema.lazy(() => FlockerSchema), Schema.null)),
  "gcePersistentDisk": Schema.optional(Schema.union(Schema.lazy(() => GcePersistentDiskSchema), Schema.null)),
  "glusterfs": Schema.optional(Schema.union(Schema.lazy(() => GlusterfsSchema), Schema.null)),
  "hostPath": Schema.optional(Schema.union(Schema.lazy(() => HostPathSchema), Schema.null)),
  "iscsi": Schema.optional(Schema.union(Schema.lazy(() => FluffyIscsiSchema), Schema.null)),
  "local": Schema.optional(Schema.union(Schema.lazy(() => LocalSchema), Schema.null)),
  "mountOptions": Schema.optional(Schema.union(Schema.lazy(() => CategoriesSchema), Schema.null)),
  "nfs": Schema.optional(Schema.union(Schema.lazy(() => NfsSchema), Schema.null)),
  "nodeAffinity": Schema.optional(Schema.union(Schema.lazy(() => FluffyNodeAffinitySchema), Schema.null)),
  "persistentVolumeReclaimPolicy": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "photonPersistentDisk": Schema.optional(Schema.union(Schema.lazy(() => PhotonPersistentDiskSchema), Schema.null)),
  "portworxVolume": Schema.optional(Schema.union(Schema.lazy(() => PortworxVolumeSchema), Schema.null)),
  "quobyte": Schema.optional(Schema.union(Schema.lazy(() => QuobyteSchema), Schema.null)),
  "rbd": Schema.optional(Schema.union(Schema.lazy(() => FluffyRbdSchema), Schema.null)),
  "scaleIO": Schema.optional(Schema.union(Schema.lazy(() => FluffyScaleIoSchema), Schema.null)),
  "storageos": Schema.optional(Schema.union(Schema.lazy(() => FluffyStorageosSchema), Schema.null)),
  "vsphereVolume": Schema.optional(Schema.union(Schema.lazy(() => VsphereVolumeSchema), Schema.null)),
  "exec": Schema.optional(Schema.union(Schema.lazy(() => ExecSchema), Schema.null)),
  "failureThreshold": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "httpGet": Schema.optional(Schema.union(Schema.lazy(() => HttpGetSchema), Schema.null)),
  "initialDelaySeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "periodSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "successThreshold": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "tcpSocket": Schema.optional(Schema.union(Schema.lazy(() => TcpSocketSchema), Schema.null)),
  "timeoutSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "handSize": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "queueLengthLimit": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "queues": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "minReadySeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "replicas": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "template": Schema.optional(Schema.union(Schema.lazy(() => PurpleTemplateSchema), Schema.null)),
  "limits": Schema.optional(Schema.union(Schema.lazy(() => DefaultSchema), Schema.null)),
  "requests": Schema.optional(Schema.union(Schema.lazy(() => DefaultSchema), Schema.null)),
  "maxUnavailable": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "maxSurge": Schema.optional(Schema.union(Schema.lazy(() => TargetAverageValueSchema), Schema.null)),
  "partition": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "nonResourceAttributes": Schema.optional(Schema.union(Schema.lazy(() => NonResourceAttributesSchema), Schema.null)),
  "resourceAttributes": Schema.optional(Schema.union(Schema.lazy(() => ResourceAttributesSchema), Schema.null)),
  "rollingUpdate": Schema.optional(Schema.union(Schema.lazy(() => FluffyRollingUpdateSchema), Schema.null)),
  "type": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "audiences": Schema.optional(Schema.union(Schema.lazy(() => StagesClassSchema), Schema.null)),
  "token": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "authenticated": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "error": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "user": Schema.optional(Schema.union(Schema.lazy(() => UserSchema), Schema.null)),
  "effect": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "key": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "operator": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "tolerationSeconds": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
  "value": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "matchLabelExpressions": Schema.optional(Schema.union(Schema.lazy(() => MatchLabelExpressionsSchema), Schema.null)),
  "extra": Schema.optional(Schema.union(Schema.lazy(() => ExtraSchema), Schema.null)),
  "groups": Schema.optional(Schema.union(Schema.lazy(() => ApiGroupsClassSchema), Schema.null)),
  "uid": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "username": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "message": Schema.optional(Schema.union(Schema.lazy(() => DriverSchema), Schema.null)),
  "time": Schema.optional(Schema.union(Schema.lazy(() => LastTransitionTimeSchema), Schema.null)),
});
export type AllowedhostpathPolicyV1Beta1Properties = Schema.From<typeof AllowedhostpathPolicyV1Beta1PropertiesSchema>;

export const VolumeerrorStorageV1Schema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.optional(Schema.union(Schema.lazy(() => AllowedhostpathPolicyV1Beta1PropertiesSchema), Schema.null)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type VolumeerrorStorageV1 = Schema.From<typeof VolumeerrorStorageV1Schema>;

export const DriverSchema = Schema.struct({
  "description": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "type": Schema.array(Schema.lazy(() => TypeElementSchema)),
});
export type Driver = Schema.From<typeof DriverSchema>;

export const AllowedflexvolumePolicyV1Beta1PropertiesSchema = Schema.struct({
  "driver": Schema.lazy(() => DriverSchema),
});
export type AllowedflexvolumePolicyV1Beta1Properties = Schema.From<typeof AllowedflexvolumePolicyV1Beta1PropertiesSchema>;

export const AllowedflexvolumeSchema = Schema.struct({
  "description": Schema.string,
  "properties": Schema.lazy(() => AllowedflexvolumePolicyV1Beta1PropertiesSchema),
  "required": Schema.array(Schema.lazy(() => CsiRequiredSchema)),
  "type": Schema.lazy(() => TypeElementSchema),
  "$schema": Schema.string,
});
export type Allowedflexvolume = Schema.From<typeof AllowedflexvolumeSchema>;

export const AllOneOfSchema = Schema.struct({
  "$ref": Schema.string,
});
export type AllOneOf = Schema.From<typeof AllOneOfSchema>;

export const AllSchema = Schema.struct({
  "oneOf": Schema.array(Schema.lazy(() => AllOneOfSchema)),
});
export type All = Schema.From<typeof AllSchema>;

export const PurpleFieldsToDiscriminateBySchema = Schema.struct({
  "queuing": Schema.optional(Schema.union(Schema.lazy(() => QueuingEnumSchema), Schema.null)),
  "limited": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "group": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "serviceAccount": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "user": Schema.optional(Schema.union(Schema.null, Schema.string)),
});
export type PurpleFieldsToDiscriminateBy = Schema.From<typeof PurpleFieldsToDiscriminateBySchema>;

export const DefinitionXKubernetesUnionSchema = Schema.struct({
  "discriminator": Schema.lazy(() => ScaleTargetRefRequiredSchema),
  "fields-to-discriminateBy": Schema.lazy(() => PurpleFieldsToDiscriminateBySchema),
});
export type DefinitionXKubernetesUnion = Schema.From<typeof DefinitionXKubernetesUnionSchema>;

export const XKubernetesGroupVersionKindSchema = Schema.struct({
  "group": Schema.lazy(() => GroupSchema),
  "kind": Schema.string,
  "version": Schema.lazy(() => VersionSchema),
});
export type XKubernetesGroupVersionKind = Schema.From<typeof XKubernetesGroupVersionKindSchema>;

export const PropertyAdditionalPropertiesSchema = Schema.struct({
  "type": Schema.optional(Schema.union(Schema.lazy(() => TypeElementSchema), Schema.null)),
  "format": Schema.optional(Schema.union(Schema.lazy(() => FormatSchema), Schema.null)),
  "items": Schema.optional(Schema.union(Schema.lazy(() => OneOfSchema), Schema.null)),
  "$ref": Schema.optional(Schema.union(Schema.null, Schema.string)),
});
export type PropertyAdditionalProperties = Schema.From<typeof PropertyAdditionalPropertiesSchema>;

export const PropertySchema = Schema.struct({
  "description": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "items": Schema.optional(Schema.union(Schema.lazy(() => PropertyAdditionalPropertiesSchema), Schema.null)),
  "type": Schema.optional(Schema.union(Schema.lazy(() => TypeElementSchema), Schema.null)),
  "$ref": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "x-kubernetes-list-type": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesListTypeSchema), Schema.null)),
  "format": Schema.optional(Schema.union(Schema.lazy(() => FormatSchema), Schema.null)),
  "enum": Schema.optional(Schema.union(Schema.array(Schema.string), Schema.null)),
  "x-kubernetes-patch-merge-key": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "x-kubernetes-patch-strategy": Schema.optional(Schema.union(Schema.lazy(() => XKubernetesPatchStrategySchema), Schema.null)),
  "additionalProperties": Schema.optional(Schema.union(Schema.lazy(() => PropertyAdditionalPropertiesSchema), Schema.null)),
  "x-kubernetes-list-map-keys": Schema.optional(Schema.union(Schema.array(Schema.string), Schema.null)),
});
export type Property = Schema.From<typeof PropertySchema>;

export const OneOfSchema = Schema.struct({
  "type": Schema.lazy(() => TypeElementSchema),
});
export type OneOf = Schema.From<typeof OneOfSchema>;

export const DefinitionSchema = Schema.struct({
  "description": Schema.optional(Schema.union(Schema.null, Schema.string)),
  "properties": Schema.optional(Schema.union(Schema.record(Schema.string, Schema.lazy(() => PropertySchema)), Schema.null)),
  "required": Schema.optional(Schema.union(Schema.array(Schema.string), Schema.null)),
  "type": Schema.optional(Schema.union(Schema.lazy(() => TypeElementSchema), Schema.null)),
  "x-kubernetes-group-version-kind": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => XKubernetesGroupVersionKindSchema)), Schema.null)),
  "x-kubernetes-unions": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => DefinitionXKubernetesUnionSchema)), Schema.null)),
  "oneOf": Schema.optional(Schema.union(Schema.array(Schema.lazy(() => OneOfSchema)), Schema.null)),
  "format": Schema.optional(Schema.union(Schema.lazy(() => FormatSchema), Schema.null)),
});
export type Definition = Schema.From<typeof DefinitionSchema>;

export const DefinitionsSchema = Schema.struct({
  "definitions": Schema.record(Schema.string, Schema.lazy(() => DefinitionSchema)),
});
export type Definitions = Schema.From<typeof DefinitionsSchema>;
