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

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_pods_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn get_pods_command() -> Vec<String> {
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
async fn get_pods() -> Result<Vec<String>, Box<dyn std::error::Error>> {
    // Infer the runtime environment and try to create a Kubernetes Client
    let client = Client::try_default().await?;
    let mut pods_list: Vec<String> = vec![];

    // Read pods in the configured namespace into the typed interface from k8s-openapi
    let pods: Api<Pod> = Api::default_namespaced(client);
    for p in pods.list(&ListParams::default()).await? {
        // println!("found pod {}", p.name());
        pods_list.push(p.name());
    }
    Ok(pods_list)
}