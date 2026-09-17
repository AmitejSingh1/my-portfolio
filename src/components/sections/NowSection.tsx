import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, Terminal } from "lucide-react";

export function NowSection() {
  const { now } = portfolioData;

  return (
    <section id="now" className="py-20 md:py-28 border-b border-hair">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-mono text-fg-subtle">
            {now.sectionEyebrow}
          </span>
          <span className="font-mono text-xs uppercase tracking-mono text-accent">
            Current Focus
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-fg">
            {now.sectionTitle}
          </h2>
          <p className="text-sm text-fg-muted max-w-md">
            {now.sectionSubtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {now.items.map((item, idx) => (
            <article
              key={idx}
              className="p-6 md:p-8 rounded border border-hair bg-bg-card/50 hover:bg-bg-card hover:border-hair-strong transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-mono text-accent">
                    {item.category}
                  </span>
                  <span className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded bg-bg-hover text-fg-muted border border-hair">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-medium text-fg mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-fg-muted leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="pt-4 border-t border-hair">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link text-xs font-mono"
                  >
                    <span>{item.linkText || "Learn more"}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Terminal Ticker Tape */}
        <div className="border border-hair rounded bg-bg-card/30 overflow-hidden py-3 px-4 flex items-center gap-3">
          <div className="flex items-center gap-2 shrink-0 font-mono text-xs text-accent font-medium pr-3 border-r border-hair">
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">LIVE LOGS</span>
          </div>

          <div className="overflow-hidden whitespace-nowrap flex-1">
            <div className="inline-block animate-ticker text-xs font-mono text-fg-muted">
              {now.tickerLogs.concat(now.tickerLogs).map((log, i) => (
                <span key={i} className="inline-flex items-center mx-4">
                  <span className="text-accent mr-2">&gt;</span>
                  <span>{log}</span>
                  <span className="text-hair-strong ml-4">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

