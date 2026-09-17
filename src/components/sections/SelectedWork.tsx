import { portfolioData, FeaturedProject } from "@/data/portfolio";
import { ArrowUpRight, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export function SelectedWork() {
  const { featuredProjects } = portfolioData;

  return (
    <section id="work" className="py-20 md:py-28 border-b border-hair">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-mono text-fg-subtle">
            02 / Work
          </span>
          <span className="font-mono text-xs uppercase tracking-mono text-accent">
            Flagship Engineering
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-fg">
            Selected Work & Research
          </h2>
          <p className="text-sm text-fg-muted max-w-md">
            Methodical systems built around foundation model adaptation, computer vision forensics, medical image segmentation, and empirical data benchmarking.
          </p>
        </div>

        {/* Project Case Studies */}
        <div className="flex flex-col gap-16 md:gap-24">
          {featuredProjects.map((project: FeaturedProject) => (
            <article
              key={project.id}
              id={project.id}
              className="p-6 sm:p-8 md:p-10 rounded border border-hair bg-bg-card/40 hover:bg-bg-card/70 hover:border-hair-strong transition-all"
            >
              {/* Top metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-hair">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-accent font-medium">
                    {project.number}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-mono px-2.5 py-0.5 rounded bg-bg-hover text-fg border border-hair">
                    {project.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {project.articleUrl && (
                    <a
                      href={project.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link text-xs font-mono text-fg-muted hover:text-accent"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Writeup</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link text-xs font-mono text-fg hover:text-accent"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-fg mb-2">
                  {project.title}
                </h3>
                <p className="text-base text-fg-muted font-normal">
                  {project.subtitle}
                </p>
              </div>

              {/* Grid: Problem & Architecture */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded bg-bg-subtle/70 border border-hair">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-mono text-accent mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      The Problem
                    </h4>
                    <p className="text-sm text-fg-muted leading-relaxed mb-6">
                      {project.problem}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-hair">
                    <h4 className="font-mono text-[11px] uppercase tracking-mono text-fg mb-1">
                      Key Technical Innovation
                    </h4>
                    <p className="text-xs text-fg-muted leading-relaxed">
                      {project.keyInnovation}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded bg-bg-subtle/70 border border-hair">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-mono text-fg mb-3 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-accent" />
                      Architecture & Implementation Decisions
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {project.architecture.map((arch, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-fg-muted leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.featuredNote && (
                    <div className="mt-6 pt-4 border-t border-hair font-mono text-[11px] text-fg-subtle">
                      {project.featuredNote}
                    </div>
                  )}
                </div>
              </div>

              {/* Benchmarks & Empirical Validation Grid */}
              <div className="mb-8">
                <div className="font-mono text-[11px] uppercase tracking-mono text-fg-muted mb-3">
                  Verified Empirical Results & Benchmarks
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {project.benchmarks.map((bench, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded border border-hair bg-bg/80 flex flex-col"
                    >
                      <span className="font-mono text-lg sm:text-xl font-medium text-fg tracking-tight mb-0.5">
                        {bench.value}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-mono text-accent mb-1.5">
                        {bench.metric}
                      </span>
                      {bench.comparison && (
                        <span className="text-[11px] text-fg-muted leading-tight">
                          {bench.comparison}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack tags */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-hair">
                <span className="font-mono text-[11px] text-fg-subtle mr-2">
                  Technologies:
                </span>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-bg text-fg-muted border border-hair"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

