#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
// https://github.com/tauri-apps/tauri/blob/dev/examples/commands/main.rs

use std::collections::HashMap;
mod resources;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_pods_command,
            get_services_command,
            get_jobs_command,
            get_cronjobs_command,
            get_secrets_command,
            ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn get_pods_command() -> Vec<HashMap<String, String>> {
    println!("fetching pods...");
    let result_pods = resources::get_pods();
    match result_pods {
        Ok(pods) => pods,
        Err(_) => vec![]
    }
}

#[tauri::command]
fn get_services_command() -> Vec<HashMap<String, String>> {
    println!("fetching services...");
    let result_services = resources::get_services();
    match result_services {
        Ok(services) => services,
        Err(_) => vec![]
    }
}

#[tauri::command]
fn get_jobs_command() -> Vec<HashMap<String, String>> {
    println!("fetching jobs...");
    let result_jobs = resources::get_jobs();
    match result_jobs {
        Ok(jobs) => jobs,
        Err(_) => vec![]
    }
}

#[tauri::command]
fn get_cronjobs_command() -> Vec<HashMap<String, String>> {
    println!("fetching cronjobs");
    let result_cronjobs = resources::get_cronjobs();
    match result_cronjobs {
        Ok(cronjobs) => cronjobs,
        Err(_) => vec![]
    }
}
#[tauri::command]
fn get_secrets_command() -> Vec<HashMap<String, String>> {
    println!("fetching secrets");
    let result_secrets = resources::get_secrets();
    match result_secrets {
        Ok(secrets) => secrets,
        Err(_) => vec![]
    }
}