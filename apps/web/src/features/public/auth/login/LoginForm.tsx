/* apps/web/src/features/public/auth/login/LoginForm.tsx */
import React from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { Controller } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { FloatingInput, PasswordInput, Button, Text } from "@unio/ui";
import { OAuthButton } from "../components/OAuthButton";

export const LoginForm: React.FC = () => { 
  const navigate = useNavigate();
  const { form, submit, loginError } = useLogin();
  const { control, handleSubmit, formState: { errors, isSubmitting } } = form;

  const onSubmit = async (data: any) => {
    const res = await submit(data);
    if (res.ok) navigate("/app/dashboard");
  };

  return (
    /* max-w-[340px] is the 'sweet spot' for a truly compact mobile-first card */
    <div className="w-full max-w-[340px] mx-auto">
      {/* Reduced p-6 to px-5 py-6 for a slimmer profile */}
      <div className="bg-background border border-accent rounded-unio-lg px-5 py-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Tightened space-y-5 to space-y-4 */}
        <div className="space-y-4">
          
          <div className="text-center">
            <Text weight="normal" size="large" className="brand-font block">
              Sign In
            </Text>
            <Text size="tiny" tone="tertiary">
              Access your professional network.
            </Text>
          </div>

          <OAuthButton disabled={isSubmitting} />

          <div className="relative flex items-center justify-center py-1">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-text-tertiary opacity-20" />
            </div>
            <Text size="tiny" tone="tertiary" uppercase tracking="widest" className="relative bg-background px-2">
              OR
            </Text>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <Controller
              name="emailOrUsername"
              control={control}
              render={({ field }) => (
                <FloatingInput label="Email or Username" error={errors.emailOrUsername?.message} {...field} />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <PasswordInput label="Password" error={errors.password?.message} {...field} />
              )}
            />

            <div className="h-3">
              {loginError && (
                <Text size="tiny" tone="danger" className="text-center block">{loginError}</Text>
              )}
            </div>

            {/* Changed size from 'lg' to 'md' to fit the smaller card scale */}
            <Button type="submit" size="md" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Syncing..." : "Sign In"}
            </Button>

            <div className="text-center">
              <Text size="tiny" tone="tertiary">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-accent font-semibold hover:underline">
                  Create an account
                </Link>
              </Text>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};