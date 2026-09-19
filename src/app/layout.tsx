import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} — ${portfolioData.personal.tagline}`,
  description: `${portfolioData.personal.name} is an AI/ML Engineer & Researcher at the National University of Singapore (NUS) specializing in Computer Vision, Medical Image Segmentation, and Parameter-Efficient Fine-Tuning (PEFT). First-author ICCIS 2025 (Springer).`,
  keywords: [
    "Amitej Singh Datta",
    "AI/ML Engineer",
    "Computer Vision Researcher",
    "Medical Image Segmentation",
    "LoRA",
    "PEFT",
    "MedSAM",
    "National University of Singapore",
    "NUS Data Science",
    "Deep Learning",
    "PyTorch",
  ],
  authors: [{ name: portfolioData.personal.name, url: portfolioData.personal.githubUrl }],
  creator: portfolioData.personal.name,
  metadataBase: new URL("https://amitejsingh.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amitejsingh.dev",
    title: `${portfolioData.personal.name} — ${portfolioData.personal.tagline}`,
    description: "AI/ML Engineer & Researcher at NUS specializing in Computer Vision, Medical Image Segmentation, and Foundation Model Adaptation.",
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} — ${portfolioData.personal.tagline}`,
    description: "AI/ML Engineer & Researcher at NUS. Computer vision, medical image segmentation, and parameter-efficient fine-tuning.",
    creator: "@AmitejSingh1",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.tagline,
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: portfolioData.personal.affiliation,
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "National University of Singapore",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Vellore Institute of Technology, Chennai",
      },
    ],
    email: `mailto:${portfolioData.personal.email}`,
    sameAs: [
      portfolioData.personal.githubUrl,
      portfolioData.personal.linkedinUrl,
      portfolioData.personal.substackUrl,
    ],
    knowsAbout: [
      "Computer Vision",
      "Medical Image Segmentation",
      "Parameter-Efficient Fine-Tuning (LoRA)",
      "Deep Learning",
      "Foundation Models",
      "PyTorch",
      "Data Engineering",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-fg font-sans selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
