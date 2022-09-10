import { Pod, Service, NameSpace, Job, CronJob, ConfigMap, Secret } from "./types";

export const getPods = () => {
    // NAME                        READY   STATUS      RESTARTS   AGE   IP            NODE                              NOMINATED NODE   READINESS GATES
    // api-ccdc58cb8-4w4l4         1/1     Running     0          84s   10.8.20.214   gke-cloud-dev-b-0-9399c698-64w9   <none>           <none>
    return [
        { name: "api-ccdc58cb8-4w4l4", ready: "1/1", status: "running", restarts: 0, age: "84s", ip: "10.8.20.214", node: "gke-cloud-dev-b-0-9399c698-64w9", nominated_node: "none", readiness_gates: "none" } as Pod,
        { name: "api-ccdc58cb8-4w4l4", ready: "1/1", status: "running", restarts: 0, age: "84s", ip: "10.8.20.214", node: "gke-cloud-dev-b-0-9399c698-64w9", nominated_node: "none", readiness_gates: "none" } as Pod,
        { name: "api-ccdc58cb8-4w4l4", ready: "1/1", status: "running", restarts: 0, age: "84s", ip: "10.8.20.214", node: "gke-cloud-dev-b-0-9399c698-64w9", nominated_node: "none", readiness_gates: "none" } as Pod,
    ];
}

export const getServices = () => {
    return [
        { id: "1", name: "Service 1", createdAt: "11-09-2022" } as Service,
        { id: "3", name: "Service 3", createdAt: "13-09-2022" } as Service,
        { id: "2", name: "Service 2", createdAt: "12-09-2022" } as Service,
    ]
}

export const getNameSpaces = () => {
    return [
        { id: "1", name: "NameSpace 1", createdAt: "11-09-2022" } as NameSpace,
        { id: "3", name: "NameSpace 3", createdAt: "13-09-2022" } as NameSpace,
        { id: "2", name: "NameSpace 2", createdAt: "12-09-2022" } as NameSpace,
    ]
}

export const getJobs = () => {
    return [
        { id: "1", name: "Job 1", createdAt: "11-09-2022" } as Job,
        { id: "3", name: "Job 3", createdAt: "13-09-2022" } as Job,
        { id: "2", name: "Job 2", createdAt: "12-09-2022" } as Job,
    ]
}

export const getCronJobs = () => {
    return [
        { id: "1", name: "CronJob 1", createdAt: "11-09-2022" } as CronJob,
        { id: "3", name: "CronJob 3", createdAt: "13-09-2022" } as CronJob,
        { id: "2", name: "CronJob 2", createdAt: "12-09-2022" } as CronJob,
    ]
}

export const getConfigMaps = () => {
    return [
        { id: "1", name: "ConfigMap 1", createdAt: "11-09-2022" } as ConfigMap,
        { id: "3", name: "ConfigMap 3", createdAt: "13-09-2022" } as ConfigMap,
        { id: "2", name: "ConfigMap 2", createdAt: "12-09-2022" } as ConfigMap,
    ]
}

export const getSecrets = () => {
    return [
        { id: "1", name: "Secret 1", createdAt: "11-09-2022" } as Secret,
        { id: "3", name: "Secret 3", createdAt: "13-09-2022" } as Secret,
        { id: "2", name: "Secret 2", createdAt: "12-09-2022" } as Secret,
    ]
}