/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AWSElasticBlockStoreVolumeSource } from './AWSElasticBlockStoreVolumeSource';
import type { AzureDiskVolumeSource } from './AzureDiskVolumeSource';
import type { AzureFileVolumeSource } from './AzureFileVolumeSource';
import type { CephFSVolumeSource } from './CephFSVolumeSource';
import type { CinderVolumeSource } from './CinderVolumeSource';
import type { ConfigMapVolumeSource } from './ConfigMapVolumeSource';
import type { CSIVolumeSource } from './CSIVolumeSource';
import type { DownwardAPIVolumeSource } from './DownwardAPIVolumeSource';
import type { EmptyDirVolumeSource } from './EmptyDirVolumeSource';
import type { EphemeralVolumeSource } from './EphemeralVolumeSource';
import type { FCVolumeSource } from './FCVolumeSource';
import type { FlexVolumeSource } from './FlexVolumeSource';
import type { FlockerVolumeSource } from './FlockerVolumeSource';
import type { GCEPersistentDiskVolumeSource } from './GCEPersistentDiskVolumeSource';
import type { GitRepoVolumeSource } from './GitRepoVolumeSource';
import type { GlusterfsVolumeSource } from './GlusterfsVolumeSource';
import type { HostPathVolumeSource } from './HostPathVolumeSource';
import type { ISCSIVolumeSource } from './ISCSIVolumeSource';
import type { NFSVolumeSource } from './NFSVolumeSource';
import type { PersistentVolumeClaimVolumeSource } from './PersistentVolumeClaimVolumeSource';
import type { PhotonPersistentDiskVolumeSource } from './PhotonPersistentDiskVolumeSource';
import type { PortworxVolumeSource } from './PortworxVolumeSource';
import type { ProjectedVolumeSource } from './ProjectedVolumeSource';
import type { QuobyteVolumeSource } from './QuobyteVolumeSource';
import type { RBDVolumeSource } from './RBDVolumeSource';
import type { ScaleIOVolumeSource } from './ScaleIOVolumeSource';
import type { SecretVolumeSource } from './SecretVolumeSource';
import type { StorageOSVolumeSource } from './StorageOSVolumeSource';
import type { VsphereVirtualDiskVolumeSource } from './VsphereVirtualDiskVolumeSource';

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export type Volume = {
  /**
   * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   */
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSource;
  /**
   * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
   */
  azureDisk?: AzureDiskVolumeSource;
  /**
   * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
   */
  azureFile?: AzureFileVolumeSource;
  /**
   * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
   */
  cephfs?: CephFSVolumeSource;
  /**
   * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
   */
  cinder?: CinderVolumeSource;
  /**
   * configMap represents a configMap that should populate this volume
   */
  configMap?: ConfigMapVolumeSource;
  /**
   * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
   */
  csi?: CSIVolumeSource;
  /**
   * downwardAPI represents downward API about the pod that should populate this volume
   */
  downwardAPI?: DownwardAPIVolumeSource;
  /**
   * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
   */
  emptyDir?: EmptyDirVolumeSource;
  /**
   * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.
   *
   * Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity
   * tracking are needed,
   * c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through
   * a PersistentVolumeClaim (see EphemeralVolumeSource for more
   * information on the connection between this volume type
   * and PersistentVolumeClaim).
   *
   * Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.
   *
   * Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.
   *
   * A pod can use both types of ephemeral volumes and persistent volumes at the same time.
   */
  ephemeral?: EphemeralVolumeSource;
  /**
   * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
   */
  fc?: FCVolumeSource;
  /**
   * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
   */
  flexVolume?: FlexVolumeSource;
  /**
   * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
   */
  flocker?: FlockerVolumeSource;
  /**
   * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  gcePersistentDisk?: GCEPersistentDiskVolumeSource;
  /**
   * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
   */
  gitRepo?: GitRepoVolumeSource;
  /**
   * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
   */
  glusterfs?: GlusterfsVolumeSource;
  /**
   * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  hostPath?: HostPathVolumeSource;
  /**
   * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
   */
  iscsi?: ISCSIVolumeSource;
  /**
   * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name: string;
  /**
   * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  nfs?: NFSVolumeSource;
  /**
   * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   */
  persistentVolumeClaim?: PersistentVolumeClaimVolumeSource;
  /**
   * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
   */
  photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
  /**
   * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
   */
  portworxVolume?: PortworxVolumeSource;
  /**
   * projected items for all in one resources secrets, configmaps, and downward API
   */
  projected?: ProjectedVolumeSource;
  /**
   * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
   */
  quobyte?: QuobyteVolumeSource;
  /**
   * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
   */
  rbd?: RBDVolumeSource;
  /**
   * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
   */
  scaleIO?: ScaleIOVolumeSource;
  /**
   * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
   */
  secret?: SecretVolumeSource;
  /**
   * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
   */
  storageos?: StorageOSVolumeSource;
  /**
   * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
   */
  vsphereVolume?: VsphereVirtualDiskVolumeSource;
};
