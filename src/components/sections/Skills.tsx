import { portfolioData, SkillCategory } from "@/data/portfolio";
import { Cpu } from "lucide-react";

export function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="stack" className="py-20 md:py-28 border-b border-hair">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-mono text-fg-subtle">
            06 / Stack
          </span>
          <span className="font-mono text-xs uppercase tracking-mono text-accent">
            Core Competencies
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-fg">
            Tools & Technical Repertoire
          </h2>
          <p className="text-sm text-fg-muted max-w-md">
            Grounded in rigorous model benchmarking, deep learning pipelines, and production systems programming.
          </p>
        </div>

        {/* 6 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat: SkillCategory, idx) => (
            <div
              key={idx}
              className="p-6 rounded border border-hair bg-bg-card/30 hover:bg-bg-card/60 transition-colors"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-mono text-accent pb-3 mb-4 border-b border-hair">
                <Cpu className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-bg-subtle text-fg-muted border border-hair hover:text-fg hover:border-hair-strong transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

