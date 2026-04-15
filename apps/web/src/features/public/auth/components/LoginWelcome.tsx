/* apps/web/src/features/public/auth/login/LoginWelcome.tsx */
import React, { useMemo } from "react";
import { motion, Variants } from "framer-motion"; // 👈 Import Variants type
import { Text, Logo } from "@unio/ui";
import { getDailyLoginMessage } from "@unio/lib";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, 
      delayChildren: 0.1 
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export const LoginWelcome: React.FC = () => {
  const message = useMemo(() => getDailyLoginMessage(), []);

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hidden lg:flex flex-col space-y-8 select-none"
    >
      <motion.div variants={itemVariants}>
        <Text size="5xl" weight="bold" className="block leading-tight">
          Welcome back to
        </Text>
        <Logo
          variant="wordmark"
          size="lg"
          className="mt-2"
          wordmarkClassName="text-accent text-[3.25rem] leading-none"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Text tone="tertiary" size="medium" className="max-w-prose leading-relaxed">
          {message}
        </Text>
      </motion.div>
    </motion.div>
  );
};