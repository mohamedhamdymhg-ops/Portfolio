import React from "react";
import {
  TrendingUp,
  Target,
  Palette,
  Cpu,
  Info,
  CheckCircle2,
} from "lucide-react";
import { skillCategories } from "@/data/portfolioData";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "paid-advertising":
        return <TrendingUp className="w-5 h-5 text-amber-500" />;
      case "marketing":
        return <Target className="w-5 h-5 text-amber-500" />;
      case "creative":
        return <Palette className="w-5 h-5 text-amber-500" />;
      case "platforms-tools":
        return <Cpu className="w-5 h-5 text-amber-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section
      id="skills"
      aria-label="Professional Skills and Platforms"
      className="py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Skills & Tools"
          subtitle="A disciplined blend of analytical advertising, audience-focused marketing, creative asset design, and modern AI platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-soft hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-neutral-900 dark:text-white">
                        {category.title}
                      </h3>
                      {category.id === "paid-advertising" && (
                        <span className="text-xs font-semibold text-amber-500">
                          Primary Area of Strength
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges / Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/60 hover:border-amber-500/40 hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Special Transparency Note for Paid Advertising */}
              {category.note && (
                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
                  <div className="flex items-start gap-2 text-xs text-amber-800 dark:text-amber-300 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" />
                    <span>{category.note}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
