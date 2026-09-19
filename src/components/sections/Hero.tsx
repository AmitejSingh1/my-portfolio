import { portfolioData } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight, FileText, BookOpen } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-hair">
      <div className="editorial-container">
        {/* Live Status Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-hair-strong bg-bg-card/70 text-xs font-mono text-fg-muted mb-8 md:mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="tracking-wide">
            {personal.currentRole} @ {personal.affiliation}
          </span>
          <span className="text-fg-subtle hidden sm:inline">|</span>
          <span className="text-fg-subtle hidden sm:inline">Open to SWE & ML Roles</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tightest leading-[1.08] text-fg mb-6">
            Engineering parameter-efficient vision models, forensic detectors, and clinical segmentation pipelines.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-fg-muted leading-relaxed font-normal max-w-2xl mb-10">
            {personal.heroIntro || "Computer Science researcher and builder exploring AI, machine learning, and the systems around them. I like turning ideas into things that can be tested, measured, and used."}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="#work" className="cta-button">
              <span>Featured Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-ghost"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Read Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-fg-subtle" />
            </a>

            <div className="flex items-center gap-2 sm:border-l sm:border-hair sm:pl-4">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-hair-strong rounded text-fg-muted hover:text-fg hover:border-fg-muted transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-hair-strong rounded text-fg-muted hover:text-fg hover:border-fg-muted transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-hair-strong rounded text-fg-muted hover:text-fg hover:border-fg-muted transition-colors"
                aria-label="Substack Technical Blog"
              >
                <BookOpen className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
