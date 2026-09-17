"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Now", href: "#now", num: "01" },
    { label: "Work", href: "#work", num: "02" },
    { label: "About", href: "#about", num: "03" },
    { label: "Experience", href: "#experience", num: "04" },
    { label: "Lab", href: "#lab", num: "05" },
    { label: "Stack", href: "#stack", num: "06" },
    { label: "Contact", href: "#contact", num: "07" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-hair"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="editorial-container flex items-center justify-between h-16 md:h-18">
        {/* Brand identity */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-fg no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={`${portfolioData.personal.name} - Home`}
        >
          <div className="w-8 h-8 rounded-full border border-hair-strong bg-bg-card flex items-center justify-center text-xs font-mono font-medium text-accent">
            AS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-tight group-hover:text-accent transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="font-mono text-[10px] tracking-mono uppercase text-fg-muted">
              NUS · AI/ML Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group px-3 py-1.5 text-xs font-mono tracking-wide text-fg-muted hover:text-fg transition-colors no-underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="text-fg-subtle text-[10px] mr-1 group-hover:text-accent transition-colors">
                {item.num}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wide px-3 py-1.5 border border-hair-strong rounded text-fg-muted hover:text-fg hover:border-fg-muted transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <FileText className="w-3.5 h-3.5 text-accent" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-fg-subtle" />
          </a>

          <a
            href="#contact"
            className="cta-button text-xs py-1.5 px-3.5"
          >
            <span>Get in touch</span>
            <span>→</span>
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-fg-muted hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-hair bg-bg-card/95 backdrop-blur-xl px-6 py-6 transition-all">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between py-2 text-sm font-mono border-b border-hair/50 text-fg-muted hover:text-fg transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs text-fg-subtle">{item.num}</span>
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-mono border border-hair-strong rounded text-fg"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>View Full Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-fg-subtle" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="cta-button w-full justify-center py-2.5"
              >
                Get in touch →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

