import { portfolioData, ExperienceItem, EducationItem } from "@/data/portfolio";
import { Briefcase, GraduationCap, Users } from "lucide-react";

export function Experience() {
  const { experience, education, extracurricular } = portfolioData;

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-7 flex flex-col gap-8">
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

          {/* Right Column: Education & Leadership */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Education Block */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-mono text-fg pb-4 border-b border-hair mb-6">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span>Degrees & Institutions</span>
              </div>

              <div className="flex flex-col gap-8">
                {education.map((edu: EducationItem, idx) => (
                  <div key={idx} className="p-5 rounded border border-hair bg-bg-card/40">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-base font-medium text-fg">
                        {edu.degree}
                      </h4>
                      {edu.gpa && (
                        <span className="font-mono text-xs font-medium px-2 py-0.5 rounded bg-accent-subtle text-accent border border-accent/20">
                          GPA {edu.gpa}
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-xs text-fg-muted mb-3">
                      {edu.institution} · <span className="text-fg-subtle">{edu.location}</span>
                    </div>
                    <div className="font-mono text-[11px] text-fg-subtle mb-3">
                      {edu.period}
                    </div>
                    <ul className="flex flex-col gap-1.5 text-xs text-fg-muted leading-relaxed">
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

            {/* Extracurricular / Community */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-mono text-fg pb-4 border-b border-hair mb-6">
                <Users className="w-4 h-4 text-accent" />
                <span>Leadership & Volunteering</span>
              </div>

              <div className="flex flex-col gap-4">
                {extracurricular.map((item, idx) => (
                  <div key={idx} className="p-4 rounded border border-hair bg-bg-subtle/50 text-xs">
                    <div className="font-medium text-fg mb-0.5">
                      {item.role}
                    </div>
                    <div className="font-mono text-[11px] text-accent mb-1.5">
                      {item.organization}
                    </div>
                    <p className="text-fg-muted leading-relaxed m-0">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

