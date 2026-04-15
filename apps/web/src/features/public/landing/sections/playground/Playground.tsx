/* 📁 apps/web/src/features/landing/sections/playground/Playground.tsx */

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Button } from "@unio/ui";
import { usePlaygroundAnimation } from "./hooks/usePlaygroundAnimation";
import EditorWindow from "./components/EditorWindow";

import "./Playground.styles.css";

export const Playground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  usePlaygroundAnimation(containerRef);

  return (
    <section
      ref={containerRef}
      className="
        relative w-full 
        min-h-[850px] md:min-h-[900px] xl:min-h-[1000px]
        unio-section-lg 
        flex items-center 
        overflow-hidden
      "
    >
      <div className="unio-container-marketing relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 items-center">

          {/* LEFT — Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <h1 className="tracking-tighter leading-[1.1]">
              <Text size="6xl">
                The workspace where <br />
                <span className="text-accent">
                  everyone builds together.
                </span>
              </Text>
            </h1>

            <p className="max-w-lg">
              <Text size="large" tone="secondary" className="leading-relaxed">
                A unified workspace for writing, planning, and creating. Designed for
                seamless solo work and real-time collaboration.
              </Text>
            </p>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                className="px-12 h-14 rounded-full text-lg shadow-xl shadow-accent/20"
                onClick={() => navigate("/signup")}
              >
                Try Unio Now
              </Button>
            </div>
          </div>

          {/* RIGHT — Editor */}
          <div className="lg:col-span-7 flex justify-end items-center">
            {/* 🔥 THIS is the height anchor */}
            <div className="w-full relative h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px]">
              <EditorWindow />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(Playground);