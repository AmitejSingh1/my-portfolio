import { portfolioData, ExperienceItem, EducationItem } from "@/data/portfolio";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-hair">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-mono text-fg-subtle">
            04 / Trajectory
          </span>
          <span className="font-mono text-xs uppercase tracking-mono text-accent">
            Experience & Education
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-fg">
            Engineering & Academic History
          </h2>
          <span className="font-mono text-xs text-fg-muted">
            Casamed · DRDO CAIR · NUS · VIT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Work Experience */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-mono text-fg pb-4 border-b border-hair">
              <Briefcase className="w-4 h-4 text-accent" />
              <span>Work & Research Internships</span>
            </div>

            <div className="flex flex-col gap-10">
              {experience.map((item: ExperienceItem, idx) => (
                <article key={idx} className="relative pl-6 border-l border-hair-strong">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent"></span>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-lg font-medium text-fg">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-fg-subtle">
                      {item.period}
                    </span>
                  </div>

                  <div className="font-mono text-xs text-accent mb-4">
                    {item.company} · <span className="text-fg-muted">{item.location}</span>
                  </div>

                  <ul className="flex flex-col gap-2.5 mb-5 text-sm text-fg-muted leading-relaxed">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent shrink-0">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-bg-card border border-hair text-fg-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-mono text-fg pb-4 border-b border-hair">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span>Degrees & Institutions</span>
            </div>

            <div className="flex flex-col gap-6">
              {education.map((edu: EducationItem, idx) => (
                <div key={idx} className="p-6 rounded border border-hair bg-bg-card/40 hover:bg-bg-card/70 transition-colors">
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <h3 className="text-lg font-medium text-fg">
                      {edu.degree}
                    </h3>
                    {edu.gpa && (
                      <span className="font-mono text-xs font-medium px-2 py-0.5 rounded bg-accent-subtle text-accent border border-accent/20">
                        GPA {edu.gpa}
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-xs text-accent mb-2">
                    {edu.institution} · <span className="text-fg-muted">{edu.location}</span>
                  </div>
                  <div className="font-mono text-[11px] text-fg-subtle mb-4">
                    {edu.period}
                  </div>
                  <ul className="flex flex-col gap-2 text-xs sm:text-sm text-fg-muted leading-relaxed">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent shrink-0">›</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
