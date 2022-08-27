#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
// https://github.com/tauri-apps/tauri/blob/dev/examples/commands/main.rs

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![get_pods])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command(async)]
async fn get_pods() -> Vec<String>{
  vec!["Pod 1".to_string(), "Pod 2".to_string(), "Pod 3".to_string(), ]
}