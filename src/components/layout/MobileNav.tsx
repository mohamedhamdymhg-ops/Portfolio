"use client";

import React, { useEffect } from "react";
import { X, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { Button } from "../ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string }>;
  activeSection: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navLinks,
  activeSection,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-500 text-black font-black flex items-center justify-center text-sm">
                MH
              </span>
              <div>
                <p className="font-bold text-sm text-neutral-900 dark:text-white leading-tight">
                  Mohamed Hamdy
                </p>
                <p className="text-xs text-amber-500 font-medium">Digital Marketer</p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="py-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-500/10 text-amber-500 font-semibold"
                      : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Contact Details & CTA */}
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
          <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span className="truncate">{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{personalInfo.phone}</span>
            </div>
          </div>

          <Button
            asLink
            href="#contact"
            variant="primary"
            size="md"
            className="w-full"
            onClick={onClose}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Let’s Work Together
          </Button>
        </div>
      </div>
    </div>
  );
};
