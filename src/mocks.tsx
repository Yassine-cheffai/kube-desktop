import { Pod, Service, NameSpace, Job, CronJob, ConfigMap, Secret } from "./types";

export const getPods = () => {
    return [
        {id: "1", name: "pod 1", createdAt: "11-09-2022"} as Pod,
        {id: "3", name: "pod 3", createdAt: "13-09-2022"} as Pod,
        {id: "2", name: "pod 2", createdAt: "12-09-2022"} as Pod,
    ];
}

export const getServices = () => {
    return [
        {id: "1", name: "Service 1", createdAt: "11-09-2022"} as Service,
        {id: "3", name: "Service 3", createdAt: "13-09-2022"} as Service,
        {id: "2", name: "Service 2", createdAt: "12-09-2022"} as Service,
    ]
}

export const getNameSpaces = () => {
    return [
        {id: "1", name: "NameSpace 1", createdAt: "11-09-2022"} as NameSpace,
        {id: "3", name: "NameSpace 3", createdAt: "13-09-2022"} as NameSpace,
        {id: "2", name: "NameSpace 2", createdAt: "12-09-2022"} as NameSpace,
    ]
}

export const getJobs = () => {
    return [
        {id: "1", name: "Job 1", createdAt: "11-09-2022"} as Job,
        {id: "3", name: "Job 3", createdAt: "13-09-2022"} as Job,
        {id: "2", name: "Job 2", createdAt: "12-09-2022"} as Job,
    ]
}

export const getCronJobs = () => {
    return [
        {id: "1", name: "CronJob 1", createdAt: "11-09-2022"} as CronJob,
        {id: "3", name: "CronJob 3", createdAt: "13-09-2022"} as CronJob,
        {id: "2", name: "CronJob 2", createdAt: "12-09-2022"} as CronJob,
    ]
}

export const getConfigsMap = () => {
    return [
        {id: "1", name: "ConfigMap 1", createdAt: "11-09-2022"} as ConfigMap,
        {id: "3", name: "ConfigMap 3", createdAt: "13-09-2022"} as ConfigMap,
        {id: "2", name: "ConfigMap 2", createdAt: "12-09-2022"} as ConfigMap,
    ]
}

export const getSecret = () => {
    return [
        {id: "1", name: "Secret 1", createdAt: "11-09-2022"} as Secret,
        {id: "3", name: "Secret 3", createdAt: "13-09-2022"} as Secret,
        {id: "2", name: "Secret 2", createdAt: "12-09-2022"} as Secret,
    ]
}

export const getPodDetails = (podId: String) => {
    return {
        id: podId,
        name: "Pod 1",
        createdAt: "",
    }
}

export const getServiceDetails = (serviceId: String) => {
    return {
        id: serviceId,
        name: "Service 1",
        createdAt: "",
    }
}

export const getNameSpaceDetails = (nameSpaceId: String) => {
    return {
        id: nameSpaceId,
        name: "NameSpace 1",
        createdAt: "",
    }
}

export const getJobDetails = (jobId: String) => {
    return {
        id: jobId,
        name: "Job 1",
        createdAt: "",
    }
}

export const getCronJob = (cronJobId: String) => {
    return {
        id: cronJobId,
        name: "Job 1",
        createdAt: "",
    }
}