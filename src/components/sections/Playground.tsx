import { portfolioData, LabProject } from "@/data/portfolio";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export function Playground() {
  const { labProjects } = portfolioData;

  return (
    <section id="lab" className="py-20 md:py-28 border-b border-hair">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-mono text-fg-subtle">
            05 / Lab
          </span>
          <span className="font-mono text-xs uppercase tracking-mono text-accent">
            Prototypes & Hackathons
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-fg">
              The Playground & Lab
            </h2>
            <p className="text-sm text-fg-muted mt-2 max-w-xl">
              Smaller technical explorations, hackathon builds, from-scratch PyTorch algorithms, and systems experiments.
            </p>
          </div>

          <a
            href={portfolioData.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link font-mono text-xs"
          >
            <span>All repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 5 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labProjects.map((item: LabProject, idx) => (
            <article
              key={idx}
              className="p-6 rounded border border-hair bg-bg-card/40 hover:bg-bg-card hover:border-hair-strong transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-mono text-accent">
                    <FlaskConical className="w-3.5 h-3.5" />
                    <span>{item.category}</span>
                  </div>
                  {item.badge && (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-bg-hover text-fg-muted border border-hair">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-medium text-fg mb-2.5 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-fg-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="mb-6 pt-3 border-t border-hair flex flex-col gap-1.5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-fg-muted flex items-start gap-1.5">
                      <span className="text-accent shrink-0">›</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-bg text-fg-subtle border border-hair"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-hair flex justify-end">
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link font-mono text-xs"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

