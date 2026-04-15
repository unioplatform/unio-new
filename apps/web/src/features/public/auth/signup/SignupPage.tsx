import React from "react";
import { motion } from "framer-motion";
import SignupForm from "./SignupForm";
import { SignupWelcome } from "../components";

const SignupPage: React.FC = () => {
  return (
    // ✨ Width kept at 5xl, but padding-y chopped down
    <div className="w-full max-w-5xl mx-auto px-6 py-4 lg:py-8">
      {/* ✨ Gap-y reduced significantly */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <SignupWelcome />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex justify-center lg:justify-end"
        >
          <SignupForm />
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;