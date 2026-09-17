import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, Compass, ArrowUpRight } from "lucide-react";

export function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 border-b border-hair">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-mono text-fg-subtle">
            03 / About
          </span>
          <span className="font-mono text-xs uppercase tracking-mono text-accent">
            Background & Philosophy
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-fg">
            Engineering from First Principles
          </h2>
          <span className="font-mono text-xs text-fg-muted">
            Singapore · National University of Singapore
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg text-fg-muted font-normal leading-relaxed">
            {personal.bioParagraphs.map((para, idx) => (
              <p key={idx} className="m-0">
                {para}
              </p>
            ))}

            <div className="pt-6 border-t border-hair flex flex-wrap gap-6 items-center">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                <span>Download Resume (PDF)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={personal.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link font-mono text-xs"
              >
                <span>Read technical essays on Substack</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Highlights & Principles Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded border border-hair bg-bg-card/50">
              <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-mono text-accent mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>
              <p className="text-sm text-fg-muted leading-relaxed mb-3">
                Graduated with a 9.09 GPA in Computer Science & Engineering (AI & ML) from VIT Chennai, now advancing research in statistical machine learning and vision architectures at NUS.
              </p>
              <div className="font-mono text-xs text-fg-subtle">
                VIT Chennai (2022–2026) → NUS Singapore (2026–Present)
              </div>
            </div>

            <div className="p-6 rounded border border-hair bg-bg-card/50">
              <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-mono text-accent mb-4">
                <Award className="w-4 h-4" />
                <span>Peer-Reviewed Research</span>
              </div>
              <p className="text-sm text-fg-muted leading-relaxed mb-3">
                First-author paper on micro-ultrasound prostate boundary segmentation presented at ICCIS 2025 (BITS Goa) and accepted for publication in the Springer Book Series.
              </p>
              <div className="font-mono text-xs text-fg-subtle">
                First-Author · Springer Nature
              </div>
            </div>

            <div className="p-6 rounded border border-hair bg-bg-card/50">
              <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-mono text-accent mb-4">
                <Compass className="w-4 h-4" />
                <span>Engineering Philosophy</span>
              </div>
              <p className="text-sm text-fg-muted leading-relaxed">
                Prefer empirical benchmark tables over hand-waving claims. Prioritize parameter and compute efficiency so state-of-the-art vision models can run without industrial superclusters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

