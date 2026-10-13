"use client";

import React, { useState } from "react";
import {
  User,
  Briefcase,
  MapPin,
  Clock,
  Mail,
  Phone,
  Languages,
  Activity,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { Badge } from "../ui/Badge";

export const PersonalInfoSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const infoItems = [
    {
      icon: <User className="w-4 h-4 text-amber-500" />,
      label: "Full Name",
      value: personalInfo.name,
      copyable: false,
    },
    {
      icon: <Briefcase className="w-4 h-4 text-amber-500" />,
      label: "Role",
      value: personalInfo.title,
      copyable: false,
    },
    {
      icon: <MapPin className="w-4 h-4 text-amber-500" />,
      label: "Location",
      value: personalInfo.location,
      copyable: false,
    },
    {
      icon: <Clock className="w-4 h-4 text-amber-500" />,
      label: "Availability",
      value: personalInfo.availability,
      badge: "Open to Work",
      copyable: false,
    },
    {
      icon: <Mail className="w-4 h-4 text-amber-500" />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      copyable: true,
      copyValue: personalInfo.email,
    },
    {
      icon: <Phone className="w-4 h-4 text-amber-500" />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      copyable: true,
      copyValue: personalInfo.phone,
    },
    {
      icon: <Languages className="w-4 h-4 text-amber-500" />,
      label: "Languages",
      value: personalInfo.languages
        .map((l) => `${l.language} (${l.proficiency})`)
        .join(", "),
      copyable: false,
    },
    {
      icon: <Activity className="w-4 h-4 text-amber-500" />,
      label: "Key Interest",
      value: personalInfo.interests,
      copyable: false,
    },
  ];

  return (
    <section
      id="profile-info"
      aria-label="Personal Information"
      className="py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-soft">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-200 dark:border-neutral-800 gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-amber-500">
                Quick Profile Overview
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                Personal & Professional Snapshot
              </h3>
            </div>
            <Badge variant="emerald" size="md">
              {personalInfo.availability}
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-850/60 border border-neutral-200/80 dark:border-neutral-800/80 space-y-1.5 transition-all hover:border-amber-500/30"
              >
                <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.copyable && (
                    <button
                      onClick={() =>
                        copyToClipboard(item.copyValue!, item.label)
                      }
                      title={`Copy ${item.label}`}
                      aria-label={`Copy ${item.label}`}
                      className="p-1 rounded text-neutral-400 hover:text-amber-500 transition-colors"
                    >
                      {copiedField === item.label ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  )}
                </div>

                <div className="pt-0.5">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-amber-500 transition-colors break-words flex items-center gap-1"
                    >
                      <span>{item.value}</span>
                      <ExternalLink className="w-3 h-3 opacity-60 flex-shrink-0" />
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white break-words">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
