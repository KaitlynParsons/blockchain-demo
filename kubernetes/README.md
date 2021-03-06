# Kubernetes
- Learn Kubernetes
  - Courses from pluralsight:
    - Getting started with Kubernetes
    - [TODO] Kubernetes for Developers: Integrating Volumes and Using Multi-container Pods 

## K8s Architecture
<details>
<summary>Masters</summary>

  - Also known as head nodes or the control plane
  - Multi-master control plane
  - H/A Design/Config (3 is the magic number in most cases).
  - Split brain (4 can cause this).
  - Need 1 or more linux machines to control masters.
  - Out of your control in hosted k8s control plane, only an api is exposed.
  - Best Practice: master should only control operations, nodes should control the user/business app.
  - What makes the master?
    - kube-apiserver
    - front-end to the control plane
    - exposes the api (REST)
    - consumes JSON/YAML
  - cluster store
    - persists cluster state and config
    - based on etcd 
    - performance is critical
    - have recovery plans in place
  - kube-controller-manager
    - controller of controllers
      - node controller
      - deployment controller
    - endpoints/endpointslice controller
    - watch loops
    - reconciles observed state with desired state
  - kube-scheduler
    - watches api server for new work tasks
    - assigns work to cluser nodes
      - affinity/anti-affinity
      - constraints
      - taints
      - resources
 </details>

<details><summary>Nodes - alternative virtual kubelet</summary>

  - kubelet
    - main kubernetes agent
    - registers node with cluster
    - watches api server for work tasks (pods)
    - executes pods
    - reports back to masters
  - container runtime
    - can be docker
    - pluggable: container runtime interface (CRI)
      - docker, containerd, cri-o, kata
      - low-level container intelligence
  - kube-proxy
    - networking component
    - pod ip addresses
    - basic load-balancing
</details>

<details><summary>Pods</summary>

  - Essentially a container wrapper
  - Scale pods, not containers!
  - Pod scheduled to single node
  - Pods are mortal
  - Annotations, labels, policies, resources, co-scheduling containers
</details>

<details><summary>Deployments</summary>

  - Deployment Controller/Reconciliation loop
    - Watches api server for new deployments
    - implements them
    - constantly compares observerd state with desired state
  - DEFCON 1: Rectifies failing pod
  - Replica Set Controller
  - Replica is a pod
  - Makes sure desired state matches observed state
</details>

<details><summary>Declarative model</summary>

  - Describe what you want (desired state) in a manifest file
</details>

<details><summary>Stable Networking with K8s Service</summary>

  - Only sends traffic to healthy pods
  - Can do session affinity
  - Can send traffic to endpoints outside the cluster
  - Can do TCP and UDP
</details>

<details><summary>K8s Api & Api Service</summary>

  - Catalog of features
    - core: pod, cm, ep, svc, vol, ns
    - workloads/apps: deploy, ds, rs, sts
    - storage: sc, pv, pvc
    - networking: ing, netpol
</details>

## Visual Overview
 ![1](https://github.com/KaitlynParsons/tutorials/blob/master/kubernetes/k8s.PNG)
 ![2](https://github.com/KaitlynParsons/tutorials/blob/master/kubernetes/k8s2.PNG)
 ![3](https://github.com/KaitlynParsons/tutorials/blob/master/kubernetes/K8s3.png)
