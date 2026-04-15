/* packages/api/src/service/auth.ts */
import { postJSON, getJSON } from "../core/client";
import { endpoints } from "../core/endpoints";
import type { AuthUser, LoginPayload, SignupPayload, AuthReturn } from "@unio/types";

// 1. Individual Named Exports (Good for direct use/testing)
export const login = (payload: LoginPayload): Promise<AuthReturn> => 
  postJSON<AuthReturn>(endpoints.auth.login(), payload);
  
export const signup = (payload: SignupPayload): Promise<AuthReturn> => 
  postJSON<AuthReturn>(endpoints.auth.signup(), payload);

export const refresh = (): Promise<AuthReturn> => 
  postJSON<AuthReturn>(endpoints.auth.refresh());

export const logout = (): Promise<void> => 
  postJSON(endpoints.auth.logout());

export const getMe = (): Promise<{ user: AuthUser }> => 
  getJSON<{ user: AuthUser }>(endpoints.auth.me());

/**
 * ✅ checkUsername
 * Checks availability and returns potential suggestions if taken.
 */
export const checkUsername = (
  username: string,
  firstName?: string,
  lastName?: string
): Promise<{ available: boolean; suggestions?: string[] }> => 
  getJSON<{ available: boolean; suggestions?: string[] }>(
    endpoints.auth.checkUsername(username, firstName, lastName)
  );

// 2. 🔥 THE FIX: Group them into the authApi object for your providers
export const authApi = {
  login,
  signup,
  refresh,
  logout,
  getMe,
  checkUsername,
};