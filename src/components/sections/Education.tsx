import React from "react";
import { GraduationCap, Award, Calendar, MapPin, Building, CheckCircle2 } from "lucide-react";
import { educationData } from "@/data/portfolioData";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Education and Professional Development"
      className="py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic & Professional Training"
          title="Education"
          subtitle="A solid foundation combining analytical legal studies with specialized ministerial digital marketing training."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-soft hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with status badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <Badge
                    variant={edu.status === "Graduated" ? "emerald" : "yellow"}
                    size="md"
                  >
                    {edu.status}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-base font-semibold text-amber-600 dark:text-amber-400 mt-1">
                  {edu.institution}
                </p>

                {edu.organization && (
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-amber-500" />
                    <span>{edu.organization}</span>
                  </p>
                )}

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 my-4 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    {edu.dates}
                  </span>
                  {edu.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      {edu.location}
                    </span>
                  )}
                </div>

                {edu.details && (
                  <ul className="space-y-2 mt-4 text-sm text-neutral-600 dark:text-neutral-300">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {edu.status === "In Progress" && (
                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs text-amber-800 dark:text-amber-300 bg-amber-500/10 p-2.5 rounded-lg">
                  Notice: Currently enrolled and attending training; certificate pending scheduled program conclusion.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
