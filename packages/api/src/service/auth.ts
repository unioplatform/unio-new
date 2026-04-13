import { postJSON, getJSON } from "../core/client";
import { endpoints } from "../core/endpoints";
import type { AuthUser, LoginPayload, SignupPayload, AuthReturn } from "@unio/types";

export const authApi = {
  login: (payload: LoginPayload) => 
    postJSON<AuthReturn>(endpoints.auth.login(), payload),
    
  signup: (payload: SignupPayload) => 
    postJSON<AuthReturn>(endpoints.auth.signup(), payload),

  // 🚀 Added Refresh
  refresh: () => 
    postJSON<AuthReturn>(endpoints.auth.refresh()),

  logout: () => postJSON(endpoints.auth.logout()),

  getMe: () => getJSON<{ user: AuthUser }>(endpoints.auth.me()),

  checkUsername: (username: string) => 
    getJSON<{ available: boolean }>(endpoints.auth.checkUsername(username))
};