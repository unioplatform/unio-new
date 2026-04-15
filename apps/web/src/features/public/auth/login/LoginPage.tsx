/* apps/web/src/features/public/auth/login/LoginPage.tsx */
import React from "react";
import { LoginForm } from "./LoginForm";
import { LoginWelcome } from "../components";

const LoginPage: React.FC = () => {
  return (
    /* We use the utility class defined in the CSS layer */
    <div className="unio-auth-grid pb-16 lg:pb-20">
      
      {/* Column 1: Branding/Welcome */}
      <div className="hidden lg:block">
        <LoginWelcome />
      </div>

      {/* Column 2: The Form */}
      <div className="w-full max-w-[400px] mx-auto lg:mx-0">
        <LoginForm />
      </div>
      
    </div>
  );
};

export default LoginPage;