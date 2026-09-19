"use client";

import { useState, FormEvent } from "react";
import { portfolioData } from "@/data/portfolio";
import { submitContact } from "@/app/actions/contact";
import { Mail, Copy, Check, ArrowUpRight, BookOpen, FileText, Send, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _gotcha: "", // Honeypot field
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address (e.g., name@domain.com).";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot bot protection: if filled, silently succeed
    if (formData._gotcha) {
      setStatus("success");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const result = await submitContact(formData);

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", _gotcha: "" });
        setErrors({});
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to deliver message. Please reach out via email directly.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Network error. Please try emailing directly at " + personal.email);
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-mono text-xs uppercase tracking-mono text-fg-subtle">
            07 / Contact
          </span>
          <span className="font-mono text-xs uppercase tracking-mono text-accent">
            Initiate Collaboration
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tightest text-fg mb-6 leading-[1.08]">
            Let&apos;s build something technically rigorous together.
          </h2>
          <p className="text-base sm:text-lg text-fg-muted leading-relaxed font-normal">
            I am currently open to software engineering internships, AI/ML research collaborations, and technical engineering opportunities. Whether you want to discuss foundation model adaptation, medical segmentation, or scalable data engineering, feel free to send a message below.
          </p>
        </div>

        {/* Dual-Column Grid: Coordinates & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left Column: Direct Coordinates Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded border border-hair-strong bg-bg-card/60 flex flex-col justify-between h-full">
            <div>
              <div className="pb-6 mb-6 border-b border-hair">
                <span className="font-mono text-xs uppercase tracking-mono text-fg-subtle block mb-2">
                  Direct Email
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-lg sm:text-xl font-mono text-fg hover:text-accent transition-colors break-all block mb-4"
                >
                  {personal.email}
                </a>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded border border-hair-strong bg-bg-subtle text-fg hover:border-fg-muted transition-all"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-accent" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-fg-muted" />
                        <span>Copy email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personal.email}`}
                    className="cta-button text-xs py-2 px-3.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Mailer</span>
                  </a>
                </div>
              </div>

              {/* Coordinates list */}
              <div className="flex flex-col gap-4 text-xs font-mono">
                <div>
                  <span className="uppercase tracking-mono text-fg-subtle block mb-1">
                    Current Location
                  </span>
                  <span className="text-fg">{personal.location}</span>
                </div>

                <div>
                  <span className="uppercase tracking-mono text-fg-subtle block mb-1">
                    Academic Affiliation
                  </span>
                  <span className="text-fg">{personal.affiliation}</span>
                </div>

                <div>
                  <span className="uppercase tracking-mono text-fg-subtle block mb-1">
                    Response Turnaround
                  </span>
                  <span className="text-fg">Usually within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-hair flex items-center justify-between">
              <span className="font-mono text-xs text-fg-subtle">Curriculum Vitae</span>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link text-xs font-mono text-accent"
              >
                <FileText className="w-3 h-3" />
                <span>Resume PDF</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded border border-hair-strong bg-bg-card/60">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-hair">
              <h3 className="text-base font-medium text-fg tracking-tight">
                Send a Message Directly
              </h3>
              <span className="font-mono text-[11px] text-fg-subtle">
                Secure &middot; Direct Dispatch
              </span>
            </div>

            {status === "success" ? (
              <div
                className="py-12 px-6 rounded border border-accent/30 bg-accent-subtle/20 text-center flex flex-col items-center justify-center animate-in fade-in duration-300"
                role="status"
              >
                <div className="w-10 h-10 rounded-full border border-accent/40 bg-bg flex items-center justify-center text-accent mb-4">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-medium text-fg mb-2">
                  Message sent. I’ll get back to you soon.
                </h4>
                <p className="text-xs text-fg-muted max-w-sm mb-6 leading-relaxed">
                  Thank you for reaching out. A confirmation has been registered and I will respond to your provided email address shortly.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="cta-button-ghost text-xs py-2 px-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Honeypot Spam Protection (Hidden from human visitors, traps automated bots) */}
                <div aria-hidden="true" style={{ display: "none" }}>
                  <label htmlFor="_gotcha">Do not fill this field</label>
                  <input
                    type="text"
                    id="_gotcha"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData._gotcha}
                    onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div
                    className="p-3.5 rounded border border-red-500/30 bg-red-500/10 text-red-300 text-xs flex items-start gap-2.5"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                    <div className="leading-relaxed">{errorMessage}</div>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase tracking-mono text-fg-muted mb-1.5"
                  >
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="Jane Doe"
                    className={`w-full px-3.5 py-2.5 rounded bg-bg-subtle text-sm text-fg border transition-all placeholder:text-fg-subtle/60 focus:outline-none focus:ring-1 focus:ring-accent ${
                      errors.name ? "border-red-400/80 focus:border-red-400" : "border-hair hover:border-hair-strong focus:border-accent"
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    disabled={status === "loading"}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-400 font-mono">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase tracking-mono text-fg-muted mb-1.5"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="jane@organization.com"
                    className={`w-full px-3.5 py-2.5 rounded bg-bg-subtle text-sm text-fg border transition-all placeholder:text-fg-subtle/60 focus:outline-none focus:ring-1 focus:ring-accent ${
                      errors.email ? "border-red-400/80 focus:border-red-400" : "border-hair hover:border-hair-strong focus:border-accent"
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    disabled={status === "loading"}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-400 font-mono">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-mono text-fg-muted mb-1.5"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Share the project, role, research question, or collaboration idea..."
                    className={`w-full px-3.5 py-2.5 rounded bg-bg-subtle text-sm text-fg border transition-all placeholder:text-fg-subtle/60 resize-y focus:outline-none focus:ring-1 focus:ring-accent ${
                      errors.message ? "border-red-400/80 focus:border-red-400" : "border-hair hover:border-hair-strong focus:border-accent"
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    disabled={status === "loading"}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-400 font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="cta-button w-full sm:w-auto text-xs py-2.5 px-5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <span className="font-mono text-[11px] text-fg-subtle">
                    Direct delivery to {personal.email.split("@")[0]}@...
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Social Links Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-hair">
          <div className="flex items-center gap-6">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link text-xs font-mono text-fg-muted hover:text-fg"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link text-xs font-mono text-fg-muted hover:text-fg"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={personal.substackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link text-xs font-mono text-fg-muted hover:text-fg"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Substack</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="font-mono text-xs text-fg-subtle">
            {personal.availability}
          </div>
        </div>
      </div>
    </section>
  );
}
