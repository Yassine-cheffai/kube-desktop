#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
// https://github.com/tauri-apps/tauri/blob/dev/examples/commands/main.rs

use k8s_openapi::api::core::v1::Pod;
use kube::{
    api::{Api, ListParams, ResourceExt},
    Client,
};
use std::collections::HashMap;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_pods_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn get_pods_command() -> Vec<HashMap<String, String>> {
    println!("fetching pods...");
    let result_pods = get_pods();
    match result_pods {
        Ok(pods) => pods,
        Err(_) => {
            vec![]
        }
    }
}

#[tokio::main]
async fn get_pods() -> Result<Vec<HashMap<String, String>>, Box<dyn std::error::Error>> {
    // Infer the runtime environment and try to create a Kubernetes Client
    let client = Client::try_default().await?;
    let mut pods_list: Vec<HashMap<String, String>> = vec![];

    // Read pods in the configured namespace into the typed interface from k8s-openapi
    let pods: Api<Pod> = Api::default_namespaced(client);
    for p in pods.list(&ListParams::default()).await? {
        // println!("found pod {}", p.name());
        let mut pod_data:HashMap<String, String> = HashMap::new();
        pod_data.insert("name".to_string(), p.name());
        let pod_status = p.status.unwrap();
        pod_data.insert("ip".to_string(), pod_status.pod_ip.unwrap());
        pod_data.insert("status".to_string(), pod_status.phase.unwrap());
        pods_list.push(pod_data);
    }
    Ok(pods_list)
}