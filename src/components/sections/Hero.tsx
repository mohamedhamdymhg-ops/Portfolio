"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
  CheckCircle,
  Briefcase,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { CvModal } from "../ui/CvModal";

export const Hero: React.FC = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        aria-label="Introduction"
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden"
      >
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Availability & Location Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>{personalInfo.availability}</span>
                <span className="text-neutral-400 dark:text-neutral-600">•</span>
                <span className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  {personalInfo.location}
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-amber-500">
                  Professional Portfolio
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
                  {personalInfo.name}
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-neutral-700 dark:text-neutral-300">
                  {personalInfo.title}
                </p>
              </div>

              {/* Bio summary */}
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {personalInfo.shortDescription}
              </p>

              {/* Primary & Secondary Call to Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Button
                  asLink
                  href="#projects"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  View My Projects
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setCvModalOpen(true)}
                  icon={<Download className="w-4 h-4" />}
                >
                  Download CV
                </Button>

                <Button
                  asLink
                  href="#contact"
                  variant="ghost"
                  size="lg"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Let’s Talk
                </Button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
                    Core Focus
                  </p>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white mt-0.5">
                    Paid Ads & Strategy
                  </p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
                    Initiative
                  </p>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white mt-0.5">
                    DEPI (MCIT)
                  </p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
                    Working Style
                  </p>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white mt-0.5">
                    Detail-Focused
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual / Avatar Column (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-neutral-500/10 to-amber-500/20 blur-lg opacity-80" />

                <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-2xl">
                  {/* Photo container */}
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/mohamed-hamdy.jpeg"
                      alt="Mohamed Hamdy Sayed Gouda - Digital Marketer"
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 400px, 450px"
                    />

                    {/* Subtle gradient vignette at the bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Floating badge inside photo */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-amber-500 text-black flex items-center justify-center font-bold text-xs">
                          MH
                        </div>
                        <div>
                          <p className="font-semibold text-xs leading-tight">
                            Mohamed Hamdy
                          </p>
                          <p className="text-[10px] text-amber-400">
                            Digital Marketing Specialist
                          </p>
                        </div>
                      </div>
                      <Badge variant="yellow" size="sm">
                        Verified
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Floating highlight badge top-left */}
                <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  <Briefcase className="w-4 h-4 text-amber-500" />
                  <span>Client-Tested Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
};
