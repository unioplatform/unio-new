// 📁 signup.schema.ts
import { z } from "zod";

const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
const usernameRegex = /^[a-z0-9_]+$/;

const isAtLeast16 = (birthday: string) => {
  const dob = new Date(birthday);
  if (isNaN(dob.getTime())) return false;
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
    age--;
  }
  return age >= 16;
};

// Extracted for UI check usage
export const PASSWORD_RULES = {
  length: (v: string) => v.length >= 8 && v.length <= 64,
  upper: (v: string) => /[A-Z]/.test(v),
  lower: (v: string) => /[a-z]/.test(v),
  number: (v: string) => /[0-9]/.test(v),
  special: (v: string) => /[^A-Za-z0-9]/.test(v),
};

const passwordSchema = z
  .string()
  .min(8, "Invalid password")
  .max(64, "Invalid password")
  .refine(PASSWORD_RULES.upper, { message: "Invalid password" })
  .refine(PASSWORD_RULES.lower, { message: "Invalid password" })
  .refine(PASSWORD_RULES.number, { message: "Invalid password" })
  .refine(PASSWORD_RULES.special, { message: "Invalid password" });

export const signupSchema = z
  .object({
    firstName: z.string().min(1, "Required").regex(nameRegex, "Letters only"),
    lastName: z.string().min(1, "Required").regex(nameRegex, "Letters only"),
    username: z
      .string()
      .min(3, "At least 3 characters")
      .max(16, "Must be 16 characters or fewer")
      .regex(usernameRegex, "Lowercase letters, numbers, and underscores only")
      .transform((v) => v.toLowerCase()),
    email: z.string().email("Invalid email"),
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Required"),
    birthday: z.string().min(1, "Required").refine(isAtLeast16, "You must be at least 16"),
    gender: z.string().min(1, "Required"),
    careerId: z.string().min(1, "Required"),
    termsAccepted: z.boolean().refine((v) => v === true, {
      message: "You must accept the terms",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match",
      });
    }
  });

export type SignupFormData = z.infer<typeof signupSchema>;