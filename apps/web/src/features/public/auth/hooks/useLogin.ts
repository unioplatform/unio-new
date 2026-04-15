/* apps/web/src/features/public/auth/hooks/useLogin.ts */

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginFormData } from "../schema/login.schema";
import { authApi } from "@unio/api";
import { useAuth } from "@/system/providers/AuthProvider";

import type { AuthUser } from "@unio/types";

type LoginResult =
  | { ok: true; user: AuthUser }
  | { ok: false; user: null };

export function useLogin() {
  const { login } = useAuth();
  const [loginError, setLoginError] = useState<string | null>(null);

  // 🔥 Keep form fully encapsulated
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const submit = useCallback(
    async (data: LoginFormData): Promise<LoginResult> => {
      setLoginError(null);

      try {
        const { user, accessToken } = await authApi.login({
          emailOrUsername: data.emailOrUsername.trim(),
          password: data.password,
        });

        // 🔐 Defensive guard (protect against bad API responses)
        if (!user || !accessToken) {
          setLoginError("Invalid server response. Please try again.");
          return { ok: false, user: null };
        }

        // ✅ Top-company pattern: only pass user into React state
        login(user);

        return { ok: true, user };
      } catch (err: unknown) {
        let message = "Invalid credentials. Please try again.";

        if (typeof err === "object" && err !== null && "message" in err) {
          message = String((err as any).message);
        }

        setLoginError(message);

        return { ok: false, user: null };
      }
    },
    [login]
  );

  return {
    form,        // ✅ matches your LoginForm usage
    submit,
    loginError,
  };
}