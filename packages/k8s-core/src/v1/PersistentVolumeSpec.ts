/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AWSElasticBlockStoreVolumeSource } from './AWSElasticBlockStoreVolumeSource';
import type { AzureDiskVolumeSource } from './AzureDiskVolumeSource';
import type { AzureFilePersistentVolumeSource } from './AzureFilePersistentVolumeSource';
import type { CephFSPersistentVolumeSource } from './CephFSPersistentVolumeSource';
import type { CinderPersistentVolumeSource } from './CinderPersistentVolumeSource';
import type { CSIPersistentVolumeSource } from './CSIPersistentVolumeSource';
import type { FCVolumeSource } from './FCVolumeSource';
import type { FlexPersistentVolumeSource } from './FlexPersistentVolumeSource';
import type { FlockerVolumeSource } from './FlockerVolumeSource';
import type { GCEPersistentDiskVolumeSource } from './GCEPersistentDiskVolumeSource';
import type { GlusterfsPersistentVolumeSource } from './GlusterfsPersistentVolumeSource';
import type { HostPathVolumeSource } from './HostPathVolumeSource';
import type { ISCSIPersistentVolumeSource } from './ISCSIPersistentVolumeSource';
import type { LocalVolumeSource } from './LocalVolumeSource';
import type { NFSVolumeSource } from './NFSVolumeSource';
import type { ObjectReference } from './ObjectReference';
import type { PhotonPersistentDiskVolumeSource } from './PhotonPersistentDiskVolumeSource';
import type { PortworxVolumeSource } from './PortworxVolumeSource';
import type { QuobyteVolumeSource } from './QuobyteVolumeSource';
import type { RBDPersistentVolumeSource } from './RBDPersistentVolumeSource';
import type { ScaleIOPersistentVolumeSource } from './ScaleIOPersistentVolumeSource';
import type { StorageOSPersistentVolumeSource } from './StorageOSPersistentVolumeSource';
import type { VolumeNodeAffinity } from './VolumeNodeAffinity';
import type { VsphereVirtualDiskVolumeSource } from './VsphereVirtualDiskVolumeSource';
import type { Quantity } from '@ei-tech/k8s-apimachinery/v1/Quantity'

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export type PersistentVolumeSpec = {
  /**
   * accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
   */
  accessModes?: Array<string>;
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
  azureFile?: AzureFilePersistentVolumeSource;
  /**
   * capacity is the description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
   */
  capacity?: Record<string, Quantity>;
  /**
   * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
   */
  cephfs?: CephFSPersistentVolumeSource;
  /**
   * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
   */
  cinder?: CinderPersistentVolumeSource;
  /**
   * claimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding
   */
  claimRef?: ObjectReference;
  /**
   * csi represents storage that is handled by an external CSI driver (Beta feature).
   */
  csi?: CSIPersistentVolumeSource;
  /**
   * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
   */
  fc?: FCVolumeSource;
  /**
   * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
   */
  flexVolume?: FlexPersistentVolumeSource;
  /**
   * flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running
   */
  flocker?: FlockerVolumeSource;
  /**
   * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  gcePersistentDisk?: GCEPersistentDiskVolumeSource;
  /**
   * glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. More info: https://examples.k8s.io/volumes/glusterfs/README.md
   */
  glusterfs?: GlusterfsPersistentVolumeSource;
  /**
   * hostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  hostPath?: HostPathVolumeSource;
  /**
   * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin.
   */
  iscsi?: ISCSIPersistentVolumeSource;
  /**
   * local represents directly-attached storage with node affinity
   */
  local?: LocalVolumeSource;
  /**
   * mountOptions is the list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
   */
  mountOptions?: Array<string>;
  /**
   * nfs represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  nfs?: NFSVolumeSource;
  /**
   * nodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume.
   */
  nodeAffinity?: VolumeNodeAffinity;
  /**
   * persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
   *
   * Possible enum values:
   * - `"Delete"` means the volume will be deleted from Kubernetes on release from its claim. The volume plugin must support Deletion.
   * - `"Recycle"` means the volume will be recycled back into the pool of unbound persistent volumes on release from its claim. The volume plugin must support Recycling.
   * - `"Retain"` means the volume will be left in its current phase (Released) for manual reclamation by the administrator. The default policy is Retain.
   */
  persistentVolumeReclaimPolicy?: "Delete" | "Recycle" | "Retain";
  /**
   * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
   */
  photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
  /**
   * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
   */
  portworxVolume?: PortworxVolumeSource;
  /**
   * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
   */
  quobyte?: QuobyteVolumeSource;
  /**
   * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
   */
  rbd?: RBDPersistentVolumeSource;
  /**
   * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
   */
  scaleIO?: ScaleIOPersistentVolumeSource;
  /**
   * storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
   */
  storageClassName?: string;
  /**
   * storageOS represents a StorageOS volume that is attached to the kubelet's host machine and mounted into the pod More info: https://examples.k8s.io/volumes/storageos/README.md
   */
  storageos?: StorageOSPersistentVolumeSource;
  /**
   * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
   */
  volumeMode?: string;
  /**
   * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
   */
  vsphereVolume?: VsphereVirtualDiskVolumeSource;
};
