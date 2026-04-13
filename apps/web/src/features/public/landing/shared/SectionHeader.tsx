import React from "react";
import { motion } from "framer-motion";
import { Text } from "@unio/ui";
import { clsx } from "clsx";

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
};

export const SectionHeader: React.FC<Props> = ({
  title,
  subtitle,
  center = true,
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className={clsx(
      "relative z-10 w-full max-w-4xl mx-auto px-6",
      center ? "text-center" : "text-left",
      className
    )}
  >
    <h2 className="header-font tracking-[-0.025em] leading-[1.2]">
      <span className="inline-block bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
        <Text size="4xl" weight="normal">
          {title}
        </Text>
      </span>
    </h2>

    <div className={clsx("mt-4 flex", center ? "justify-center" : "justify-start")}>
      <div
        className="w-12 h-1 rounded-full bg-accent"
        style={{
          boxShadow: `
            0 0 12px hsl(var(--accent-1) / 0.6),
            0 0 30px hsl(var(--accent-1) / 0.25)
          `,
        }}
      />
    </div>

    {subtitle && (
      <div className={clsx("mt-5 max-w-xl text-balance", center && "mx-auto")}>
        <Text size="medium" className="text-text-primary leading-relaxed font-medium">
          {subtitle}
        </Text>
      </div>
    )}
  </motion.div>
);