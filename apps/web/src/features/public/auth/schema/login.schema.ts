/* apps/web/src/features/public/auth/schema/login.schema.ts */
import { z } from "zod";

export const loginSchema = z.object({
  emailOrUsername: z
    .string()
    .min(1, "Required")
    .refine((v) => v.trim().length >= 3, "Enter a valid email or username"),
  password: z.string().min(1, "Required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;