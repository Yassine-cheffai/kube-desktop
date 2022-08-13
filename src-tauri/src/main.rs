#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet, get_names])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
  format!("Hello, {}", name)
}

#[tauri::command]
fn get_names<'a>() -> [&'a str;3] {
  ["yassine", "yasmine", "mohammed"]
}
