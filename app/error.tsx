"use client";

import React, { useEffect } from "react";
import { RotateCcw, Home, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Farmer Cindy Platform Error Boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 paper-pattern">
      <div className="max-w-md w-full text-center rounded-4xl bg-[#FFF8F0] p-8 md:p-12 border-3 border-red-200 shadow-tactile">
        <div className="w-16 h-16 rounded-2xl bg-red-100 text-[#E63946] flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h2 className="text-2xl font-heading font-black text-[#264653]">
          Something Went Off on the Farm
        </h2>

        <p className="mt-2 text-xs text-slate-600 leading-relaxed">
          Don't worry, our team has been notified. You can try refreshing the page or head back to safety.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#E63946] hover:bg-[#B82835] shadow-md transition"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-[#264653] bg-white hover:bg-amber-100 border border-amber-300 transition"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
