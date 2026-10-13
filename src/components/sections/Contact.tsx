"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Facebook,
  Instagram,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setServerError(
          data.error || "Failed to submit message. Please try sending an email directly."
        );
      }
    } catch (err) {
      setServerError(
        "Network connection error. Please email directly to mohamed.hamdy.mhg@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information and Inquiries"
      className="py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let’s Work Together"
          subtitle="Looking for a structured content strategy, social media design, or strategic marketing assistance? Send a message or reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-soft space-y-6">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Direct Contact Info
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  Prompt communication guaranteed. Open to remote and regional roles.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-850 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-500 font-medium">Email</p>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-850 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Phone / WhatsApp</p>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-850">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Location</p>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Professional Networks
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-amber-500 hover:border-amber-500/40 border border-neutral-200 dark:border-neutral-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-amber-500 hover:border-amber-500/40 border border-neutral-200 dark:border-neutral-700 transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-amber-500 hover:border-amber-500/40 border border-neutral-200 dark:border-neutral-700 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-500" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>
                Standard response time is within 24 hours. Feel free to contact via WhatsApp or direct phone for urgent inquiries.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-soft">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                Fill out the form below to start a discussion regarding full-time opportunities, freelance projects, or strategic consultations.
              </p>

              {submitSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-neutral-900 dark:text-white space-y-4 animate-fade-in text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto sm:mx-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                      Thank you for reaching out. Mohamed Hamdy will review your inquiry and reply as soon as possible.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {serverError && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-400 text-sm flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Your Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border text-sm text-neutral-900 dark:text-white transition-colors focus:bg-white dark:focus:bg-neutral-850 ${
                          errors.name
                            ? "border-rose-500 focus:border-rose-500"
                            : "border-neutral-200 dark:border-neutral-700 focus:border-amber-500"
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-rose-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Your Email <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border text-sm text-neutral-900 dark:text-white transition-colors focus:bg-white dark:focus:bg-neutral-850 ${
                          errors.email
                            ? "border-rose-500 focus:border-rose-500"
                            : "border-neutral-200 dark:border-neutral-700 focus:border-amber-500"
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-rose-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
                    >
                      Subject <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Marketing Role Inquiry / Content Strategy Consultation"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border text-sm text-neutral-900 dark:text-white transition-colors focus:bg-white dark:focus:bg-neutral-850 ${
                        errors.subject
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-neutral-200 dark:border-neutral-700 focus:border-amber-500"
                      }`}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1.5 text-xs text-rose-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                      >
                        Message <span className="text-amber-500">*</span>
                      </label>
                      <span className="text-[11px] text-neutral-400">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, team requirements, or collaboration idea in detail..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border text-sm text-neutral-900 dark:text-white transition-colors focus:bg-white dark:focus:bg-neutral-850 resize-y ${
                        errors.message
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-neutral-200 dark:border-neutral-700 focus:border-amber-500"
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-rose-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-xs text-neutral-500 text-center sm:text-right">
                      No spam. Your email will only be used to reply.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
