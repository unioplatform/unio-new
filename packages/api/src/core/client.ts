import axios from "axios";

export const client = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helpers
export const getJSON = <T>(url: string, params?: any) => client.get<T>(url, { params }).then(res => res.data);
export const postJSON = <T>(url: string, body?: any) => client.post<T>(url, body).then(res => res.data);
export const patchJSON = <T>(url: string, body?: any) => client.patch<T>(url, body).then(res => res.data);

export function setGlobalAuthToken(token: string | null) {
  if (token) {
    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete client.defaults.headers.common["Authorization"];
  }
}