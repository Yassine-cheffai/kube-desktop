use k8s_openapi::api::core::v1::{Service, Pod, Secret};
use k8s_openapi::{api::batch::v1::{Job, CronJob}};
use kube::{
    api::{Api, ListParams, ResourceExt},
    Client,
};
use std::collections::BTreeMap;
use std::collections::HashMap;
// NAME       TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE

#[tokio::main]
pub async fn get_services() -> Result<Vec<HashMap<String, String>>, Box<dyn std::error::Error>> {
    // Infer the runtime environment and try to create a Kubernetes Client
    let client = Client::try_default().await?;
    let mut result: Vec<HashMap<String, String>> = vec![];

    // Read pods in the configured namespace into the typed interface from k8s-openapi
    let services: Api<Service> = Api::default_namespaced(client);
    for s in services.list(&ListParams::default()).await? {
        let mut service_data: HashMap<String, String> = HashMap::new();
        service_data.insert("name".to_string(), s.name_any());

        let spec = s.spec.unwrap();
        service_data.insert(
            "type".to_string(),
            spec.type_.unwrap_or("<none>".to_string()),
        );
        service_data.insert(
            "cluster_ip".to_string(),
            spec.cluster_ip.unwrap_or("<none>".to_string()),
        );
        let selector = list_selector(&spec.selector);
        service_data.insert("selector".to_string(), selector);

        result.push(service_data);
    }
    println!("{:?}", result);
    Ok(result)
}

fn list_selector(selector: &Option<BTreeMap<String, String>>) -> String {
    let mut result: Vec<String> = vec![];
    match selector {
        Some(s) => {
            for (key, value) in s {
                let mut entry: String = String::new();
                entry.push_str(key);
                entry.push_str("=");
                entry.push_str(value);
                result.push(entry);
            }
        }
        None => {
            println!("empty selector");
        }
    }
    result.join("%")
}

#[tokio::main]
pub async fn get_pods() -> Result<Vec<HashMap<String, String>>, Box<dyn std::error::Error>> {
    // NAME                        READY   STATUS      RESTARTS   AGE   IP            NODE                              NOMINATED NODE   READINESS GATES
    // api-ccdc58cb8-4w4l4         1/1     Running     0          84s   10.8.20.214   gke-cloud-dev-b-0-9399c698-64w9   <none>           <none>
    // Infer the runtime environment and try to create a Kubernetes Client
    let client = Client::try_default().await?;
    let mut pods_list: Vec<HashMap<String, String>> = vec![];

    // Read pods in the configured namespace into the typed interface from k8s-openapi
    let pods: Api<Pod> = Api::default_namespaced(client);
    for p in pods.list(&ListParams::default()).await? {
        // println!("found pod {}", p.name());
        let mut pod_data:HashMap<String, String> = HashMap::new();
        pod_data.insert("name".to_string(), p.name_any());
        let pod_status = p.status.unwrap();
        let conditions = pod_status.conditions.unwrap();
        println!("pod conditions ->");
        println!("{:?}", conditions);
        pod_data.insert("ip".to_string(), pod_status.pod_ip.unwrap());
        pod_data.insert("status".to_string(), pod_status.phase.unwrap());
        pod_data.insert("nominated_node".to_string(), pod_status.nominated_node_name.unwrap_or("<none>".to_string()));
        let start_time = pod_status.start_time.unwrap();
        pod_data.insert("start_time".to_string(), start_time.0.timestamp().to_string());

        pods_list.push(pod_data);
    }
    Ok(pods_list)
}

#[tokio::main]
pub async fn get_jobs() -> Result<Vec<HashMap<String, String>>, Box<(dyn std::error::Error)>> {
    let client = Client::try_default().await?;
    let mut jobs_list: Vec<HashMap<String, String>> = vec![];

    let jobs: Api<Job> = Api::default_namespaced(client);
    for job in jobs.list(&ListParams::default()).await? {
        let mut job_data: HashMap<String, String> = HashMap::new();
        job_data.insert("name".to_string(), job.name_any());

        let job_status = job.status.unwrap();
        let completions = format!("{}/{}", job_status.succeeded.unwrap_or(0), job_status.failed.unwrap_or(0)+job_status.succeeded.unwrap_or(0));
        job_data.insert("completions".to_string(), completions);

        jobs_list.push(job_data);
    }
    Ok(jobs_list)
}

#[tokio::main]
pub async fn get_cronjobs() -> Result<Vec<HashMap<String, String>>, Box<(dyn std::error::Error)>> {
    let client = Client::try_default().await?;
    let mut cronjobs_list: Vec<HashMap<String, String>> = vec![];

    let cronjobs: Api<CronJob> = Api::default_namespaced(client);

    for cronjob in cronjobs.list(&ListParams::default()).await? {
        let mut cronjob_data: HashMap<String, String> = HashMap::new();
        cronjob_data.insert("name".to_string(), cronjob.name_any());

        let cronjob_status = cronjob.status.unwrap();
        let last_successful_time = match cronjob_status.last_successful_time {
            Some(time) => time.0.format("%d/%m/%Y %H:%M").to_string(),
            None => "-".to_string()
        };
        cronjob_data.insert("last_successful_time".to_string(), last_successful_time);

        let last_schedule_time = match cronjob_status.last_schedule_time {
            Some(time) => time.0.format("%d/%m/%Y %H:%M").to_string(),
            None => "-".to_string()
        };
        cronjob_data.insert("last_schedule_time".to_string(), last_schedule_time);

        cronjobs_list.push(cronjob_data);
    }
    Ok(cronjobs_list)
}
#[tokio::main]
pub async fn get_secrets() -> Result<Vec<HashMap<String, String>>, Box<(dyn std::error::Error)>> {
    let client = Client::try_default().await?;
    let mut secrets_list: Vec<HashMap<String, String>> = vec![];

    let secrets: Api<Secret> = Api::default_namespaced(client);

    for secret in secrets.list(&ListParams::default()).await? {
        let mut secret_data: HashMap<String, String> = HashMap::new();
        secret_data.insert("name".to_string(), secret.name_any());
        secret_data.insert("type".to_string(), secret.type_.unwrap_or("UNKNOWN".to_string()));

        secrets_list.push(secret_data);
    }
    Ok(secrets_list)
}