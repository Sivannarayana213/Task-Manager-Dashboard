import axios from "axios";

axios.defaults.withCredentials = true;

const BASE = "http://localhost:8090/api";

const auth = {
  username: "admin",
  password: "password123"
};

// ---- TASKS ----
export function getTasks(page, q) {
  return axios.get(`${BASE}/tasks?page=${page}&q=${q || ""}`, { auth });
}

export function createTask(data) {
  return axios.post(`${BASE}/tasks`, data, { auth });
}

export function updateTask(id, data) {
  return axios.put(`${BASE}/tasks/${id}`, data, { auth });
}

export function deleteTask(id) {
  return axios.delete(`${BASE}/tasks/${id}`, { auth });
}

// ---- LOGS ----
export function getLogs() {
  return axios.get(`${BASE}/logs`, { auth });
}
