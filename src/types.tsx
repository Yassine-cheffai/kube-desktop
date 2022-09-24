export type Pod = {
  name: string,
  ready: string,
  status: string,
  restarts: number,
  age: string,
  ip: string,
  node: string,
  nominated_node: string,
  readiness_gates: string,
  start_time: string,
}
export type Service = {
  name: string,
  type: string,
  cluster_ip: string,
  external_ip: string,
  port: string,
  age: string,
  selector: string,
}
export type NameSpace = {
  id: string,
  name: string,
  createdAt: string,
}
export type Job = {
  id: string,
  name: string,
  createdAt: string,
}
export type CronJob = {
  id: string,
  name: string,
  createdAt: string,
}
export type ConfigMap = {
  id: string,
  name: string,
  createdAt: string,
}
export type Secret = {
  id: string,
  name: string,
  createdAt: string,
}
export const RESOURCES_TYPES = [
  "Services",
  "Pods",
  "Jobs",
  "CronJobs",
  "NameSpaces",
  "Configs",
  "SecretMaps",
]