// 📁 src/features/public/pages/LandingPage.tsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
 
import {  
  // Hero,
  Playground,
  GlobalNetwork,
  SubscriptionSection, 
} from "./sections";

export const LandingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <motion.div
      id="main"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    > 
      {/* 📌 HERO */}
      {/* <Hero /> */}

      {/* 🧠 PLAYGROUND */}
      <Playground />

      {/* 🌍 GLOBAL MAP */}
      <GlobalNetwork />

      {/* 💎 SUBSCRIPTIONS */}
      <SubscriptionSection />
    </motion.div>
  );
};

export default LandingPage;