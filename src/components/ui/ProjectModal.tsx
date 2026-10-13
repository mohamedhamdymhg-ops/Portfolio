"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  Target,
  Wrench,
  Layers,
  ArrowRight,
  Info,
} from "lucide-react";
import { ProjectItem } from "@/types/portfolio";
import { Badge } from "./Badge";
import { Button } from "./Button";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNextProject?: () => void;
  onPrevProject?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNextProject,
  onPrevProject,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    // Reset slide index when opening a new project
    setCurrentSlideIndex(0);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowRight") {
        if (project?.slides && project.slides.length > 1) {
          setCurrentSlideIndex((prev) => (prev + 1) % (project.slides?.length || 1));
        }
      } else if (e.key === "ArrowLeft") {
        if (project?.slides && project.slides.length > 1) {
          setCurrentSlideIndex((prev) =>
            prev === 0 ? (project.slides?.length || 1) - 1 : prev - 1
          );
        }
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, isLightboxOpen]);

  if (!project) return null;

  const slides = project.slides || [
    { title: project.title, src: project.featuredImage, caption: project.description },
  ];
  const activeSlide = slides[currentSlideIndex] || slides[0];

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden text-neutral-900 dark:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="flex items-center gap-3">
              <Badge variant="yellow" size="sm">
                {project.category}
              </Badge>
              <span className="text-xs text-neutral-500 hidden sm:inline">
                Case Study & Asset Showcase
              </span>
            </div>

            <div className="flex items-center gap-2">
              {onPrevProject && (
                <button
                  onClick={onPrevProject}
                  aria-label="Previous project"
                  className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              {onNextProject && (
                <button
                  onClick={onNextProject}
                  aria-label="Next project"
                  className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
              <div className="w-px h-5 bg-neutral-300 dark:bg-neutral-700 mx-1" />
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 md:p-8 space-y-8">
            {/* Project Title & Summary */}
            <div>
              <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight">
                {project.title}
              </h2>
              <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Slide / Image Showcase Carousel */}
            <div className="space-y-3">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800 group">
                <Image
                  src={activeSlide.src}
                  alt={activeSlide.title || project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 960px"
                  priority
                />

                {/* Slides navigation buttons if multiple slides */}
                {slides.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevSlide}
                      aria-label="Previous slide"
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-sm transition-all focus:outline-none"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      aria-label="Next slide"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-sm transition-all focus:outline-none"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Fullscreen zoom button */}
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  aria-label="Open fullscreen image"
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/70 text-white hover:bg-black/90 backdrop-blur-sm transition-colors flex items-center gap-1.5 text-xs font-medium"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Zoom</span>
                </button>

                {/* Slide indicator pill */}
                {slides.length > 1 && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-medium backdrop-blur-sm">
                    Slide {currentSlideIndex + 1} of {slides.length}
                  </div>
                )}
              </div>

              {/* Slide Caption */}
              {activeSlide.caption && (
                <div className="flex items-start justify-between gap-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/40 p-3 rounded-lg">
                  <div>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                      {activeSlide.title}:
                    </span>{" "}
                    {activeSlide.caption}
                  </div>
                  {slides.length > 1 && (
                    <span className="text-amber-500 flex-shrink-0 font-medium">
                      {currentSlideIndex + 1}/{slides.length}
                    </span>
                  )}
                </div>
              )}

              {/* Thumbnails strip if multiple slides */}
              {slides.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 pt-1">
                  {slides.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`relative w-16 h-12 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                        idx === currentSlideIndex
                          ? "border-amber-500 ring-2 ring-amber-500/30 scale-105"
                          : "border-neutral-700/60 opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`View slide ${idx + 1}`}
                    >
                      <Image
                        src={s.src}
                        alt={s.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Goals & Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Goals */}
              <div className="bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3 text-neutral-900 dark:text-white font-semibold">
                  <Target className="w-5 h-5 text-amber-500" />
                  <h3>Project Goals</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {project.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Work Delivered */}
              <div className="bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3 text-neutral-900 dark:text-white font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <h3>Work Delivered</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {project.workDelivered.map((w, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Strategic / Creative Process Steps */}
            {project.process && project.process.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4 text-neutral-900 dark:text-white font-semibold text-lg">
                  <Layers className="w-5 h-5 text-amber-500" />
                  <h3>Process & Methodology</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-850"
                    >
                      <span className="text-xs font-mono font-bold text-amber-500">
                        {step.step}
                      </span>
                      <h4 className="mt-1 font-semibold text-sm text-neutral-900 dark:text-white">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools Used */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-neutral-900 dark:text-white">
                <Wrench className="w-4 h-4 text-amber-500" />
                <span>Tools & Platforms Utilized</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t, idx) => (
                  <Badge key={idx} variant="neutral" size="md">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Source of truth note / Transparency banner */}
            {project.notes && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-300 text-xs sm:text-sm">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
                <div>
                  <span className="font-semibold">Transparency & Project Scope: </span>
                  {project.notes}
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
            <span className="text-xs text-neutral-500">
              Project #{project.id === "nutrition-content-strategy" ? "1" : project.id === "dental-clinic-designs" ? "2" : "3"} of 3
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={onClose}>
                Close
              </Button>
              <Button
                asLink
                href="#contact"
                variant="primary"
                size="sm"
                onClick={onClose}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discuss a Project
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <button
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close fullscreen view"
              className="p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            className="relative w-full max-w-6xl max-h-[85vh] h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="mt-4 text-center text-white/90 text-sm max-w-2xl px-4">
            <p className="font-semibold">{activeSlide.title}</p>
            {activeSlide.caption && (
              <p className="text-xs text-white/70 mt-1">{activeSlide.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
