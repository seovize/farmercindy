import React from "react";
import { Sprout } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#FAF7F2]">
      <div className="relative w-20 h-20 rounded-full bg-[#0D3829] border-2 border-[#DDA15E]/40 flex items-center justify-center p-4 animate-pulse shadow-md">
        <Sprout className="w-10 h-10 text-[#DDA15E]" />
      </div>
      <p className="mt-4 font-heading font-black text-sm text-[#0D3829] uppercase tracking-wider animate-pulse">
        Nourishing the Seeds...
      </p>
    </div>
  );
}
