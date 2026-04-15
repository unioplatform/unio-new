import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Controller } from "react-hook-form";
import { Check } from "lucide-react";
import { cn } from "@unio/ui";

import {
  FloatingInput,
  PasswordInput,
  AutocompleteSelect,
  Button,
  Text,
  Select,
  Checkbox,
  CalendarInput,
  UsernameInput,
} from "@unio/ui";

import { genders } from "@unio/data";
import { ROUTES } from "@unio/lib";

import { OAuthButton } from "../components/OAuthButton";
import { useSignup } from "../hooks/useSignup";
import { PASSWORD_RULES } from "../schema/signup.schema";

const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  const {
    form,
    submit,
    usernameStatus,
    usernameSuggestions,
    setIsUsernameFocused,
    careerOptions,
    careersError,
    setCareerSearch,
  } = useSignup();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isSubmitted },
  } = form;

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const password = watch("password") || "";
  const username = watch("username") || "";

  const onSubmit = async (data: any) => {
    const result = await submit(data);
    if (result.ok && result.user?.username) {
      navigate(ROUTES.PROFILE(result.user.username), {
        replace: true,
      });
    }
  };

  const Requirement = ({ met, label }: { met: boolean; label: string }) => (
    <div
      className={`flex items-center gap-1 transition-colors ${
        met ? "text-accent" : "text-text-tertiary"
      }`}
    >
      {met ? (
        <Check size={10} strokeWidth={3} />
      ) : (
        <div className="w-1 h-1 rounded-full bg-current ml-1" />
      )}
      <Text size="tiny" weight="bold" uppercase tracking="widest" className="text-[9px]">
        {label}
      </Text>
    </div>
  );

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <div className="bg-background border border-accent rounded-unio-lg px-6 py-5 animate-in fade-in slide-in-from-bottom-2 duration-700 shadow-sm">
        <div className="space-y-4">
          
          {/* 🧾 Header */}
          <div className="text-center">
            <Text weight="normal" size="large" className="brand-font block leading-none">
              Create Account
            </Text>
            <Text size="tiny" tone="tertiary" className="mt-1 block">
              Join the professional network of the future.
            </Text>
          </div>

          {/* 🔐 OAuth & Divider */}
          <div className="space-y-3">
            <OAuthButton disabled={isSubmitting} />
            
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-text-tertiary opacity-20" />
              </div>
              <Text 
                size="tiny" 
                tone="tertiary" 
                uppercase 
                tracking="widest" 
                className="relative bg-background px-3 text-[10px]"
              >
                OR
              </Text>
            </div>
          </div>

          {/* 🧠 Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
            
            {/* 👤 Name Grid */}
            <div className="grid grid-cols-2 gap-3">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <FloatingInput label="First Name" error={errors.firstName?.message} {...field} />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <FloatingInput label="Last Name" error={errors.lastName?.message} {...field} />
                )}
              />
            </div>

            {/* 📧 Email */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <FloatingInput label="Email" error={errors.email?.message} {...field} />
              )}
            />

            {/* 👤 Username */}
            <div className={cn(
              "transition-all duration-200",
              !(username.length > 0 && usernameStatus !== "idle") && !errors.username && "-mb-3.5"
            )}>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <UsernameInput
                    {...field}
                    label="Username"
                    status={usernameStatus}
                    suggestions={usernameSuggestions}
                    error={errors.username?.message}
                    isSubmitted={isSubmitted}
                    onFocus={() => setIsUsernameFocused(true)}
                    onBlur={() => setIsUsernameFocused(false)}
                    onSelectSuggestion={(val) =>
                      setValue("username", val, { shouldValidate: true })
                    }
                  />
                )}
              />
            </div>

            {/* 🔒 Password */}
            <div className="space-y-1">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <PasswordInput
                    {...field}
                    label="Password"
                    error={errors.password?.message}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                  />
                )}
              />

              <AnimatePresence>
                {(isPasswordFocused || password.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-2 gap-y-0.5 px-1 pt-1 overflow-hidden"
                  >
                    <Requirement met={PASSWORD_RULES.length(password)} label="8+ Chars" />
                    <Requirement met={PASSWORD_RULES.upper(password)} label="Uppercase" />
                    <Requirement met={PASSWORD_RULES.lower(password)} label="Lowercase" />
                    <Requirement met={PASSWORD_RULES.number(password)} label="Number" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 🎂 Birthday + Gender Grid */}
            <div className="grid grid-cols-2 gap-3 items-end">
              <Controller
                name="birthday"
                control={control}
                render={({ field }) => (
                  <CalendarInput
                    label="Birthday"
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.birthday?.message}
                  />
                )}
              />
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    label="Gender"
                    options={genders}
                    value={field.value}
                    onValueChange={field.onChange}
                    error={errors.gender?.message}
                  />
                )}
              />
            </div>

            {/* 💼 Career */}
            <Controller
              name="careerId"
              control={control}
              render={({ field }) => (
                <AutocompleteSelect
                  label="Career"
                  options={careerOptions}
                  value={field.value}
                  onSearchChange={setCareerSearch}
                  onValueChange={field.onChange}
                  error={errors.careerId?.message || careersError}
                />
              )}
            />

            {/* ✅ Terms - ✨ Added a bit more space here */}
            <div className="pt-1.5">
              <Controller
                name="termsAccepted"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    label="I agree to the Terms & Privacy"
                    checked={field.value}
                    onChange={field.onChange}
                    error={errors.termsAccepted?.message}
                  />
                )}
              />
            </div>

            {/* 🚀 Submit */}
            <Button
              type="submit"
              size="sm"
              className="w-full mt-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Syncing..." : "Create Account"}
            </Button>

            {/* 🔁 Login Link */}
            <div className="text-center">
              <Text size="tiny" tone="tertiary">
                 Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-accent font-semibold hover:underline"
                >
                  Sign in
                </Link>
              </Text>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;