"use client";

import React, { useEffect } from "react";
import { X, FileText, Download, ExternalLink, Phone, FileCheck } from "lucide-react";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { personalInfo } from "@/data/portfolioData";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-neutral-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-4">
          <FileText className="w-6 h-6" />
        </div>

        <div className="mb-2">
          <Badge variant="emerald" size="sm" icon={<FileCheck className="w-3.5 h-3.5" />}>
            Verified Document (PDF)
          </Badge>
        </div>

        <h3 id="cv-modal-title" className="text-2xl font-bold tracking-tight">
          Curriculum Vitae
        </h3>

        <div className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 space-y-3">
          <p>
            Official resume for <strong className="text-neutral-900 dark:text-white">{personalInfo.name}</strong>, detailing client content strategies, social media post designs, DEPI digital marketing training, and educational background.
          </p>
        </div>

        {/* Direct Download & View Actions */}
        <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-neutral-800/80 space-y-3">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Button
              asLink
              href="/cv.pdf"
              download="Mohamed-Hamdy-CV.pdf"
              variant="primary"
              size="md"
              className="flex-1"
              icon={<Download className="w-4 h-4" />}
              aria-label="Download Mohamed Hamdy's CV as PDF"
            >
              Download CV
            </Button>
            <Button
              asLink
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              className="flex-1"
              icon={<ExternalLink className="w-4 h-4" />}
              aria-label="Open CV PDF in a new tab"
            >
              Open in Browser
            </Button>
          </div>

          <div className="text-center pt-1">
            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-amber-500 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Direct Phone / WhatsApp: {personalInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
