import { Pod, Service, NameSpace, Job, CronJob, ConfigMap, Secret } from "./types";

export const getPods = () => {
    // NAME                        READY   STATUS      RESTARTS   AGE   IP            NODE                              NOMINATED NODE   READINESS GATES
    // api-ccdc58cb8-4w4l4         1/1     Running     0          84s   10.8.20.214   gke-cloud-dev-b-0-9399c698-64w9   <none>           <none>
    return [
        { name: "api-ccdc58cb8-4w4l4", ready: "1/1", status: "running", restarts: 0, age: "84s", ip: "10.8.20.214", node: "gke-cloud-dev-b-0-9399c698-64w9", nominated_node: "none", readiness_gates: "none", start_time: "1662819661" } as Pod,
        { name: "api-ccdc58cb8-4w4l4", ready: "1/1", status: "running", restarts: 0, age: "84s", ip: "10.8.20.214", node: "gke-cloud-dev-b-0-9399c698-64w9", nominated_node: "none", readiness_gates: "none", start_time: "1662819661" } as Pod,
        { name: "api-ccdc58cb8-4w4l4", ready: "1/1", status: "running", restarts: 0, age: "84s", ip: "10.8.20.214", node: "gke-cloud-dev-b-0-9399c698-64w9", nominated_node: "none", readiness_gates: "none", start_time: "1662819661" } as Pod,
    ];
}

export const getServices = () => {
    return [
        {name: "api", type: "ClusterIP", cluster_ip: "10.155.103.234", external_ip: "<none>", age: "40d", selector: "stack.okteto.com/name"} as Service,
        {name: "api", type: "ClusterIP", cluster_ip: "10.155.103.234", external_ip: "<none>", age: "40d", selector: "stack.okteto.com/name"} as Service,
        {name: "api", type: "ClusterIP", cluster_ip: "10.155.103.234", external_ip: "<none>", age: "40d", selector: "stack.okteto.com/name"} as Service,
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
        {name: "Job 1", completions: "1/1", duration: "20s", age: "46h" } as Job,
        {name: "Job 1", completions: "1/1", duration: "20s", age: "46h" } as Job,
        {name: "Job 1", completions: "1/1", duration: "20s", age: "46h" } as Job,
    ]
}

export const getCronJobs = () => {
    return [
        {name: "CronJob 1", last_schedule_time: "11-09-2022", last_successful_time: "11-09-2022" } as CronJob,
        {name: "CronJob 1", last_schedule_time: "11-09-2022", last_successful_time: "11-09-2022" } as CronJob,
        {name: "CronJob 1", last_schedule_time: "11-09-2022", last_successful_time: "11-09-2022" } as CronJob,
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
        {name: "Secret 1",type: "Opaque", data: "3", age: "42d"} as Secret,
        {name: "Secret 1",type: "Opaque", data: "3", age: "42d"} as Secret,
        {name: "Secret 1",type: "Opaque", data: "3", age: "42d"} as Secret,
    ]
}