import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6 text-center">
      <div className="font-mono text-xs uppercase tracking-mono text-accent mb-4">
        404 / Error
      </div>
      <h1 className="text-4xl sm:text-5xl font-medium tracking-tightest text-fg mb-4">
        Page Not Found
      </h1>
      <p className="text-sm text-fg-muted max-w-md mb-8 leading-relaxed">
        The requested trajectory or document does not exist in this index. Return to the main portfolio overview.
      </p>
      <Link
        href="/"
        className="cta-button inline-flex items-center gap-2 text-xs font-mono"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}

