"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-hair py-12 bg-bg-subtle/50 text-xs font-mono text-fg-subtle">
      <div className="editorial-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="text-fg-muted font-medium">
            © {new Date().getFullYear()} {portfolioData.personal.name}
          </span>
          <span className="hidden sm:inline text-hair-strong">/</span>
          <span>NUS Data Science & Machine Learning</span>
        </div>

        <div className="flex items-center gap-6">
          <span>Built with Next.js 15 & Tailwind CSS</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-fg-muted hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

