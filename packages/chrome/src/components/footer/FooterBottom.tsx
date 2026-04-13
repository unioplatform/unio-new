import React from "react";
import { Text } from "@unio/ui";
<<<<<<< HEAD
import { FooterSocials } from "./FooterSocials";

const YEAR = new Date().getFullYear();

export const FooterBottom = ({ socialLinks }: { socialLinks: any }) => (
  <div className="mt-12">
    {/* SCOOTED DIVIDER: Using w-[92%] or a slight margin 
        so it doesn't feel like it's touching the edges of the universe.
    */}
    <div className="flex justify-center mb-6">
      <div className="h-px w-[94%] bg-accent" />
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      {/* LEFT: COPYRIGHT */}
      <div className="flex-1">
        <Text size="tiny" className="text-text-tertiary font-medium opacity-80">
          © {YEAR} Unio Technologies Inc. All rights reserved.
        </Text>
      </div>

      {/* CENTER: LANGUAGE */}
      <div className="flex-1 flex justify-center">
        <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-tertiary hover:text-accent transition-colors">
          English (UK)
        </button>
      </div>

      {/* RIGHT: SOCIALS */}
      <div className="flex-1 flex justify-end">
        <FooterSocials links={socialLinks} />
      </div>
    </div>
  </div>
);
=======

const YEAR = new Date().getFullYear();

export const FooterBottom = () => (
  <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
    {/* ✅ Pure Text (Span) wrapping a Time element */}
    <Text size="tiny" className="text-text-tertiary font-medium">
      © <time dateTime={YEAR.toString()}>{YEAR}</time> Unio Technologies Inc. All rights reserved.
    </Text>

    <div className="flex items-center gap-6">
      <button 
        type="button"
        className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary hover:text-accent transition outline-none focus-visible:text-accent"
      >
        English (UK)
      </button>

      {/* ✅ Pure Text (Span) with custom tabular classes */}
      <Text size="tiny" className="text-text-tertiary opacity-40 tabular-nums">
        v2.0.26
      </Text>
    </div>
  </div>
);
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
