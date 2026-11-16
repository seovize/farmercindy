import React from "react";

interface FarmerCindyBrandProps {
  className?: string;
  iconSize?: "sm" | "md" | "lg" | "xl";
}

export function FarmerCindyBrand({
  className = "",
  iconSize = "md",
}: FarmerCindyBrandProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5 sm:w-6 sm:h-6",
    lg: "w-6 h-6 sm:w-7 sm:h-7",
    xl: "w-7 h-7 sm:w-9 sm:h-9",
  }[iconSize];

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap align-baseline ${className}`}
    >
      <span
        style={{ fontFamily: "'Dancing Script', 'Brush Script MT', 'Segoe Script', cursive" }}
        className="font-bold tracking-normal text-white drop-shadow-sm"
      >
        FarmerCindy
      </span>

      {/* Inline Full-Color Cherries & Strawberry (Never Monochrome, Never Wraps Below) */}
      <span
        className="inline-flex items-center gap-1 shrink-0 select-none"
        aria-label="cherries and strawberry"
      >
        {/* Full-Color Glossy Red Cherries SVG */}
        <svg
          viewBox="0 0 36 36"
          className={`${sizeClasses} inline-block shrink-0 drop-shadow`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Green Stems */}
          <path
            d="M11 21C12 13 18 7 25 4M25 22C24 14 23 8 25 4"
            stroke="#22C55E"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          {/* Green Leaf */}
          <path
            d="M24 4C28 3 33 5 33 9C29 11 25 9 24 4Z"
            fill="#22C55E"
            stroke="#15803D"
            strokeWidth="1"
          />
          {/* Left Cherry */}
          <circle cx="11" cy="25" r="7.5" fill="#E11D48" stroke="#9F1239" strokeWidth="1.2" />
          <circle cx="8.8" cy="22.5" r="2" fill="#FFE4E6" fillOpacity="0.85" />
          {/* Right Cherry */}
          <circle cx="25" cy="26" r="7.5" fill="#F43F5E" stroke="#9F1239" strokeWidth="1.2" />
          <circle cx="22.8" cy="23.5" r="2" fill="#FFE4E6" fillOpacity="0.85" />
        </svg>

        {/* Full-Color Ripe Red Strawberry SVG */}
        <svg
          viewBox="0 0 36 36"
          className={`${sizeClasses} inline-block shrink-0 drop-shadow`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Strawberry Body */}
          <path
            d="M18 33C11 33 6 24 7 16C7.8 10.5 12.5 8 18 8C23.5 8 28.2 10.5 29 16C30 24 25 33 18 33Z"
            fill="#E11D48"
            stroke="#9F1239"
            strokeWidth="1.2"
          />
          {/* Highlight */}
          <path
            d="M11 15C10.5 18 11.5 22 13 25"
            stroke="#FDA4AF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Golden Seeds */}
          <circle cx="14" cy="16" r="1.1" fill="#FACC15" />
          <circle cx="18" cy="15" r="1.1" fill="#FACC15" />
          <circle cx="22" cy="16" r="1.1" fill="#FACC15" />
          <circle cx="12.5" cy="21" r="1.1" fill="#FACC15" />
          <circle cx="16.5" cy="20.5" r="1.1" fill="#FACC15" />
          <circle cx="20.5" cy="20.5" r="1.1" fill="#FACC15" />
          <circle cx="24" cy="21" r="1.1" fill="#FACC15" />
          <circle cx="15" cy="25.5" r="1.1" fill="#FACC15" />
          <circle cx="19" cy="25.5" r="1.1" fill="#FACC15" />
          <circle cx="22" cy="25" r="1.1" fill="#FACC15" />
          <circle cx="18" cy="29.5" r="1.1" fill="#FACC15" />
          {/* Green Leafy Calyx & Stem */}
          <path
            d="M18 3V8M18 8L11 5.5L14 10L9 10.5L15.5 12L18 9.5L20.5 12L27 10.5L22 10L25 5.5L18 8Z"
            fill="#22C55E"
            stroke="#15803D"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
}
