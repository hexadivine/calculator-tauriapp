// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeteed from Rust!", name)
}

#[tauri::command]
fn add(num1: i32, num2: i32) -> String {
    format!("the sum is {}", num2+num1)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, add])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
