import React from "react";
import { Text } from "@unio/ui";

const LandingPage = () => {
  return (
    <div className="flex flex-col flex-1 min-h-0">

      {/* HERO */}
      <section className="unio-layout unio-section-lg">
        <div className="unio-container-marketing flex flex-col items-center text-center gap-12">

          <div className="flex flex-col gap-6 max-w-4xl">

            <Text
              size="6xl"
              weight="black"
              tracking="tight"
              className="leading-[1.05] text-text-primary"
            >
              Professional networking,{" "}
              <span className="text-accent">reimagined</span>.
            </Text>

            <Text
              size="xl"
              tone="secondary"
              className="max-w-2xl mx-auto leading-relaxed"
            >
              The next generation of professional connection. Built for speed,
              privacy, and meaningful interaction. No noise, just growth.
            </Text>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <button className="bg-text-primary text-background px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all active:scale-95 shadow-xl shadow-accent/20">
              Get Started
            </button>

            <button className="border border-border-subtle px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-text-primary/5 transition-all active:scale-95">
              View Roadmap
            </button>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="unio-layout unio-section">
        <div className="unio-container-marketing">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Signal Over Noise",
                desc: "No spam, no distractions. Just meaningful professional interactions.",
              },
              {
                title: "Privacy First",
                desc: "Your data stays yours. Built with modern privacy principles.",
              },
              {
                title: "Built for Speed",
                desc: "Instant connections, real-time updates, zero friction.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-10 rounded-[2.5rem] border border-border-subtle bg-text-primary/[0.02] hover:bg-text-primary/[0.04] transition-all duration-300 flex flex-col gap-8"
              >
                {/* Icon / Number */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Text weight="black" size="large" className="text-accent">
                    0{i + 1}
                  </Text>
                </div>

                <div className="flex flex-col gap-3">

                  <Text
                    weight="bold"
                    size="large"
                    className="text-text-primary"
                  >
                    {item.title}
                  </Text>

                  <Text
                    tone="muted"
                    size="small"
                    className="leading-relaxed"
                  >
                    {item.desc}
                  </Text>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="unio-layout unio-section-lg">
        <div className="unio-container-marketing text-center flex flex-col items-center gap-10">

          <Text
            size="4xl"
            weight="bold"
            className="text-text-primary max-w-2xl leading-tight"
          >
            Ready to upgrade your network?
          </Text>

          <button className="bg-accent text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-accent-hover transition-all active:scale-95 shadow-xl shadow-accent/30">
            Join Now
          </button>

        </div>
      </section>

    </div>
  );
};

export default LandingPage;
