import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 paper-pattern">
      <div className="relative w-20 h-20 rounded-full bg-amber-100/80 border-2 border-amber-300 flex items-center justify-center text-4xl animate-bounce shadow-md">
        🍓
      </div>
      <p className="mt-4 font-heading font-black text-sm text-[#264653] uppercase tracking-wider animate-pulse">
        Watering the Garden...
      </p>
    </div>
  );
}
