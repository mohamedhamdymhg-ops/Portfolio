import React from "react";
import { Award, CheckCircle, Calendar, ShieldCheck, Sparkles } from "lucide-react";
import { certificationsData } from "@/data/portfolioData";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      aria-label="Certifications and Professional Credentials"
      className="py-16 sm:py-24 bg-neutral-50/50 dark:bg-neutral-900/30 border-y border-neutral-200/60 dark:border-neutral-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials & Verified Learning"
          title="Certifications"
          subtitle="Continuous technical upskilling in modern artificial intelligence and digital workflows."
        />

        <div className="max-w-2xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-soft hover:border-amber-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-amber-500">
                      {cert.provider}
                    </span>
                    <Badge variant="emerald" size="sm">
                      Verified
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mt-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>Issued: {cert.date}</span>
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 self-stretch sm:self-center">
                <div className="px-3.5 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5 justify-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Credential Active</span>
                </div>
              </div>
            </div>
          ))}

          {/* Educational Note clarification */}
          <div className="mt-6 text-center text-xs text-neutral-500">
            Note: Digital Egypt Pioneers Initiative (DEPI) is currently in progress through December 2026 and cataloged under Education.
          </div>
        </div>
      </div>
    </section>
  );
};
