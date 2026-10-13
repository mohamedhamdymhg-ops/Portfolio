"use client";

import React, { useEffect, useState } from "react";
import { X, FileText, Mail, Phone, Check, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { Badge } from "./Badge";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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

  const copyEmail = () => {
    navigator.clipboard.writeText("mohamed.hamdy.mhg@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
          <Badge variant="yellow" size="sm">
            Status: In Preparation
          </Badge>
        </div>

        <h3 id="cv-modal-title" className="text-2xl font-bold tracking-tight">
          Curriculum Vitae
        </h3>

        <div className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 space-y-3">
          <p>
            Mohamed Hamdy’s updated Curriculum Vitae is currently being finalized to incorporate recent client deliverables and coursework from the Digital Egypt Pioneers Initiative (DEPI).
          </p>
          <p className="text-xs bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 p-3 rounded-lg">
            <strong>Placeholder Notice:</strong> A downloadable PDF file will be linked here once finalized. In the meantime, you can request an advance copy or reach out directly.
          </p>
        </div>

        {/* Contact Quick Actions */}
        <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-neutral-800/80 space-y-3">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Button
              variant="primary"
              size="md"
              className="flex-1"
              icon={copied ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
              onClick={copyEmail}
            >
              {copied ? "Email Copied!" : "Copy Email"}
            </Button>
            <Button
              asLink
              href="mailto:mohamed.hamdy.mhg@gmail.com?subject=CV%20Request%20-%20Mohamed%20Hamdy"
              variant="outline"
              size="md"
              className="flex-1"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request via Email
            </Button>
          </div>

          <div className="text-center">
            <a
              href="tel:+201080929267"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-amber-500 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Or call directly: +20 108 092 9267</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
