import Link from "next/link";
import { BookOpen, Home, Sprout } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 paper-pattern">
      <div className="max-w-md w-full text-center rounded-4xl bg-[#FFF8F0] p-8 md:p-12 border-3 border-amber-200 shadow-tactile">
        <div className="w-20 h-20 rounded-3xl bg-amber-100 text-amber-800 flex items-center justify-center text-4xl mx-auto mb-6 shadow-sm">
          🌱
        </div>

        <span className="text-xs font-black uppercase tracking-wider text-[#E63946] bg-red-50 px-3 py-1 rounded-full border border-red-200">
          Page Not Found (404)
        </span>

        <h1 className="mt-4 text-3xl font-heading font-black text-[#264653]">
          This Garden Patch Hasn't Sprouted Yet!
        </h1>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          The page you are looking for might have been moved or hasn't been planted. Let's head back to Farmer Cindy's sunny farm!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#E63946] hover:bg-[#B82835] shadow-md transition"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/books"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-[#264653] bg-white hover:bg-amber-100 border border-amber-300 transition"
          >
            <BookOpen className="w-4 h-4" />
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
}
