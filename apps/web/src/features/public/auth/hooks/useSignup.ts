/* apps/web/src/features/public/auth/hooks/useSignup.ts */
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  signupSchema,
  type SignupFormData,
} from "../schema";

// 📦 Unified API imports
import { authApi, getCareers, AppError } from "@unio/api";

import { useAuth } from "@/system/providers/AuthProvider";
import { useUsername, useDebounce} from "@unio/lib";
import type { AuthUser } from "@unio/types";

type SignupResult =
  | { ok: true; user: AuthUser }
  | { ok: false; user: null };

export function useSignup() {
  const { login } = useAuth();

  // --- Form Setup ---
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      termsAccepted: false,
    }
  });

  const { setError, watch, setValue } = form;

  // --- Careers Logic ---
  const [careerOptions, setCareerOptions] = useState<{ label: string; value: string }[]>([]);
  const [careersError, setCareersError] = useState<string | null>(null);
  const [careerSearch, setCareerSearch] = useState("");
  const debouncedCareerSearch = useDebounce(careerSearch, 250);

  useEffect(() => {
    getCareers(debouncedCareerSearch)
      .then((list) => {
        setCareerOptions(list.map((c) => ({ label: c.name, value: c.id })));
        setCareersError(null);
      })
      .catch(() => setCareersError("Failed to load career options."));
  }, [debouncedCareerSearch]);

  // --- Username Logic ---
  const username = useUsername();
  const watchedUsername = watch("username") || "";
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const debouncedUsername = useDebounce(watchedUsername, 500);

  useEffect(() => {
    if (debouncedUsername) {
      username.onChange(debouncedUsername);
    }
  }, [debouncedUsername]);

  // --- Helpers ---
  const getDefaultPronouns = (gender: string) => {
    const map: Record<string, string> = {
      MALE: "He/Him",
      FEMALE: "She/Her",
      NON_BINARY: "They/Them",
    };
    return map[gender] || null;
  };

  // --- Submit Logic ---
  const submit = useCallback(
    async (data: SignupFormData): Promise<SignupResult> => {
      try {
        const payload = {
          ...data,
          pronouns: getDefaultPronouns(data.gender),
        };

        const { user, accessToken } = await authApi.signup(payload);

        if (!user || !accessToken) return { ok: false, user: null };

        login(user);

        return { ok: true, user };
      } catch (err: unknown) {
        if (err instanceof AppError) {
          if (err.errorCode === "ERR_EMAIL_DUPLICATE") {
            setError("email", { message: "This email is already in use." });
          }
          if (err.errorCode === "ERR_USERNAME_TAKEN") {
            setError("username", { message: "Username is already taken." });
          }
        }
        return { ok: false, user: null };
      }
    },
    [login, setError]
  );

  return {
    form,
    submit,
    usernameStatus: username.status,
    usernameSuggestions: username.suggestions,
    setIsUsernameFocused,
    careerOptions,
    careersError,
    setCareerSearch,
  };
}