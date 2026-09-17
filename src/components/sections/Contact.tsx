"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Copy, Check, ArrowUpRight, BookOpen, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tightest text-fg mb-6 leading-[1.08]">
            Let&apos;s build something technically rigorous together.
          </h2>
          <p className="text-base sm:text-lg text-fg-muted leading-relaxed font-normal">
            I am currently open to software engineering internships, AI/ML research collaborations, and technical engineering opportunities. Whether you want to discuss foundation model adaptation, medical segmentation, or scalable data engineering, feel free to reach out.
          </p>
        </div>

        {/* Contact Action Card */}
        <div className="p-8 sm:p-10 md:p-12 rounded border border-hair-strong bg-bg-card/60 mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-hair">
            <div>
              <span className="font-mono text-xs uppercase tracking-mono text-fg-subtle block mb-2">
                Direct Email
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="text-xl sm:text-2xl md:text-3xl font-mono text-fg hover:text-accent transition-colors break-all"
              >
                {personal.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2.5 rounded border border-hair-strong bg-bg-subtle text-fg hover:border-fg-muted transition-all"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span>Copied to clipboard</span>
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
                className="cta-button text-xs py-2.5 px-4"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Mailer</span>
              </a>
            </div>
          </div>

          {/* Additional Coordinates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            <div>
              <span className="font-mono uppercase tracking-mono text-fg-subtle block mb-1">
                Current Location
              </span>
              <span className="text-fg font-mono">Singapore · India</span>
            </div>

            <div>
              <span className="font-mono uppercase tracking-mono text-fg-subtle block mb-1">
                Academic Affiliation
              </span>
              <span className="text-fg">National Univ. of Singapore</span>
            </div>

            <div>
              <span className="font-mono uppercase tracking-mono text-fg-subtle block mb-1">
                Response Turnaround
              </span>
              <span className="text-fg">Usually within 24 hours</span>
            </div>

            <div>
              <span className="font-mono uppercase tracking-mono text-fg-subtle block mb-1">
                Resume PDF
              </span>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link text-accent font-mono"
              >
                <FileText className="w-3 h-3" />
                <span>Download (PDF)</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
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

