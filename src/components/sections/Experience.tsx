import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";
import { experienceData } from "@/data/portfolioData";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-20 sm:py-28 bg-neutral-50/50 dark:bg-neutral-900/30 border-y border-neutral-200/60 dark:border-neutral-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work History"
          title="Experience"
          subtitle="Hands-on client engagements across content strategy, clinical social media post design, and brand systems."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-soft"
            >
              {/* Timeline marker */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-6 mb-6 border-b border-neutral-200 dark:border-neutral-800 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="yellow" size="sm">
                      {exp.type}
                    </Badge>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-base font-medium text-amber-600 dark:text-amber-400">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500">
                  Key Deliverables & Responsibilities
                </p>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note */}
              {exp.note && (
                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>{exp.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
