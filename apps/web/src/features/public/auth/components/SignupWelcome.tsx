/* apps/web/src/features/public/auth/signup/SignupWelcome.tsx */
import React from "react";
import { motion, Variants } from "framer-motion";
import { Text, Logo } from "@unio/ui";
import { FiUsers, FiTarget, FiLink2 } from "react-icons/fi";

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


const Row: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <motion.div variants={itemVariants} className="flex items-start gap-4">
    {/* ✨ Icon smaller, no top margin */}
    <span className="text-accent">{icon}</span>
    <div className="space-y-0">
      <Text weight="semibold" tone="default" className="block leading-none mb-1">
        {title}
      </Text>
      <Text size="small" tone="tertiary" className="leading-snug block">
        {children}
      </Text>
    </div>
  </motion.div>
);

export const SignupWelcome: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // ✨ Shrunk: space-y-10 -> space-y-6
      className="hidden lg:flex flex-col space-y-6 select-none"
    >
      <motion.div variants={itemVariants}>
        <Text size="5xl" weight="bold" className="block leading-[1.1]">
          Begin your journey
        </Text>
        <div className="flex items-baseline gap-3">
          <Text size="5xl" weight="bold">with</Text>
          <Logo
            variant="wordmark"
            size="lg"
            wordmarkClassName="text-accent text-[3.25rem] leading-none"
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Text tone="tertiary" size="medium" className="max-w-prose leading-snug">
          Connect, collaborate, and create with people who move like you.
        </Text>
      </motion.div>

      {/* ✨ Shrunk: space-y-6 -> space-y-4 | pt-2 removed */}
      <div className="space-y-4">
        <Row icon={<FiLink2 size={18} />} title="Forge Connections">
          Meet creators, builders, and professionals.
        </Row>
        <Row icon={<FiTarget size={18} />} title="Find Opportunities">
          Doors open when you show up.
        </Row>
        <Row icon={<FiUsers size={18} />} title="Build Community">
          Join people shaping the next wave.
        </Row>
      </div>
    </motion.div>
  );
};