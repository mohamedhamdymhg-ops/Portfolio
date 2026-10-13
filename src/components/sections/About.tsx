import React from "react";
import {
  Brain,
  Search,
  LineChart,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { aboutContent } from "@/data/portfolioData";
import { SectionHeading } from "../ui/SectionHeading";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Mohamed Hamdy"
      className="py-20 sm:py-28 bg-neutral-50/50 dark:bg-neutral-900/30 border-y border-neutral-200/60 dark:border-neutral-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Background & Philosophy"
          title="About Me"
          subtitle="Understanding audiences deeply to build purposeful marketing frameworks."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Editorial Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {aboutContent.paragraphs.map((p, idx) => (
              <p key={idx} className="relative">
                {p}
              </p>
            ))}

            {/* Core Working Style Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="font-bold text-neutral-900 dark:text-white block text-base">
                  Organized
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 block">
                  Methodical roadmaps, structured calendars, and clear file management.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="font-bold text-neutral-900 dark:text-white block text-base">
                  Hardworking
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 block">
                  Committed to thorough audience research before drawing strategic conclusions.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="font-bold text-neutral-900 dark:text-white block text-base">
                  Detail-Focused
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 block">
                  Rigorous alignment between messaging tone, design hierarchy, and goals.
                </span>
              </div>
            </div>
          </div>

          {/* Strategic Approach Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-amber-500 mb-2">
              My Core Methodology
            </h3>

            {aboutContent.corePrinciples.map((principle, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-soft hover:border-amber-500/40 transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    {index === 0 && <Search className="w-4 h-4" />}
                    {index === 1 && <LineChart className="w-4 h-4" />}
                    {index === 2 && <Layers className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-neutral-900 dark:text-white">
                      {principle.title}
                    </h4>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
