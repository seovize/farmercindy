import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 paper-pattern">
      <div className="relative w-20 h-20 rounded-full bg-amber-100/80 border-2 border-amber-300 flex items-center justify-center p-4 animate-bounce shadow-md">
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-[#E63946]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8 2 4 6 4 11C4 16.5 12 22 12 22C12 22 20 16.5 20 11C20 6 16 2 12 2Z" fill="#E63946" />
          <path d="M12 2C10 5 7 5 6 6" stroke="#84CC16" strokeWidth="2.5" />
          <path d="M12 2C14 5 17 5 18 6" stroke="#84CC16" strokeWidth="2.5" />
          <circle cx="8" cy="10" r="1.2" fill="#FFF" />
          <circle cx="12" cy="11" r="1.2" fill="#FFF" />
          <circle cx="16" cy="10" r="1.2" fill="#FFF" />
          <circle cx="10" cy="15" r="1.2" fill="#FFF" />
          <circle cx="14" cy="15" r="1.2" fill="#FFF" />
        </svg>
      </div>
      <p className="mt-4 font-heading font-black text-sm text-[#264653] uppercase tracking-wider animate-pulse">
        Watering the Garden...
      </p>
    </div>
  );
}
