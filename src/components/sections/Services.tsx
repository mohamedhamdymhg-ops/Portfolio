import React from "react";
import {
  TrendingUp,
  Compass,
  FileSpreadsheet,
  Share2,
  Layout,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Info,
} from "lucide-react";
import { servicesData } from "@/data/portfolioData";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export const Services: React.FC = () => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-amber-500" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-amber-500" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-6 h-6 text-amber-500" />;
      case "Share2":
        return <Share2 className="w-6 h-6 text-amber-500" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-amber-500" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      default:
        return <TrendingUp className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section
      id="services"
      aria-label="Marketing and Creative Services"
      className="py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I Offer"
          title="Services & Capabilities"
          subtitle="Specialized marketing solutions designed to build authentic engagement, elevate brand aesthetics, and drive business growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-soft hover:border-amber-500/40 hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Title */}
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Capabilities list */}
                <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800/80 space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    What’s Included:
                  </p>
                  <ul className="space-y-2">
                    {service.capabilities.map((cap, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Footer / CTA */}
              <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800/80">
                {service.note && (
                  <div className="mb-4 flex items-start gap-1.5 text-[11px] text-amber-800 dark:text-amber-300 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                    <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-amber-500" />
                    <span>{service.note}</span>
                  </div>
                )}

                <a
                  href={`#contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-amber-500 transition-colors"
                >
                  <span>Inquire about this service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
