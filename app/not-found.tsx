import Link from "next/link";
import { BookOpen, Home, Sprout } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#FAF7F2]">
      <div className="max-w-md w-full text-center rounded-4xl bg-white p-8 md:p-12 border-2 border-stone-200 shadow-tactile">
        <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-[#0D3829] flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-300">
          <Sprout className="w-10 h-10 text-[#2B6E4F]" />
        </div>

        <span className="text-xs font-black uppercase tracking-wider text-[#0D3829] bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-300/60">
          Page Not Found (404)
        </span>

        <h1 className="mt-4 text-3xl font-heading font-black text-[#0D3829]">
          This Garden Patch Hasn't Sprouted Yet!
        </h1>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          The page you are looking for might have been moved or hasn't been planted. Let's head back to Farmer Cindy's sunny farm!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow-md transition"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/books"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0D3829] hover:bg-[#165B3F] transition border border-emerald-500/30"
          >
            <BookOpen className="w-4 h-4" />
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
}
