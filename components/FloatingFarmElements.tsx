"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sprout, Sun } from "lucide-react";

export function FloatingFarmElements() {
  const elements = [
    {
      icon: (
        // Golden Sunflower
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#DDA15E]" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" fill="#3B2314" stroke="#DDA15E" />
          <path d="M12 2V5M12 19V22M2 12H5M19 12H22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M4.93 19.07L7.05 16.95M16.95 7.05L19.07 4.93" stroke="#DDA15E" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      top: "15%",
      left: "5%",
      delay: 0,
      duration: 5.5,
      xRange: 15,
      yRange: 20,
    },
    {
      icon: (
        // Fresh Leaf Sprout in Forest Green
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#2B6E4F]" stroke="currentColor" strokeWidth="2">
          <path d="M7 20h10M12 20v-8M12 12a5 5 0 0 1 5-5h1v1a5 5 0 0 1-5 5M12 12a5 5 0 0 0-5-5H6v1a5 5 0 0 0 5 5" fill="#2B6E4F" fillOpacity="0.25" stroke="#2B6E4F" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      top: "25%",
      right: "8%",
      delay: 1,
      duration: 6,
      xRange: -20,
      yRange: 18,
    },
    {
      icon: <Sun className="w-9 h-9 text-[#DDA15E]" />,
      top: "60%",
      left: "8%",
      delay: 2,
      duration: 5.2,
      xRange: 12,
      yRange: -16,
    },
    {
      icon: (
        // Pollinator Honeybee
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-[#DDA15E]" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="13" rx="6" ry="7" fill="#DDA15E" />
          <line x1="6" y1="11" x2="18" y2="11" stroke="#3B2314" strokeWidth="1.5" />
          <line x1="6" y1="14" x2="18" y2="14" stroke="#3B2314" strokeWidth="1.5" />
          <line x1="8" y1="17" x2="16" y2="17" stroke="#3B2314" strokeWidth="1.5" />
          <path d="M10 7C8 4 6 5 7 7" stroke="#2B6E4F" strokeWidth="1.5" fill="#2B6E4F" fillOpacity="0.3" />
          <path d="M14 7C16 4 18 5 17 7" stroke="#2B6E4F" strokeWidth="1.5" fill="#2B6E4F" fillOpacity="0.3" />
        </svg>
      ),
      top: "70%",
      right: "6%",
      delay: 0.5,
      duration: 4.8,
      xRange: -18,
      yRange: 22,
    },
    {
      icon: <Sprout className="w-8 h-8 text-[#2B6E4F]" />,
      top: "45%",
      left: "3%",
      delay: 1.5,
      duration: 5.8,
      xRange: 10,
      yRange: 15,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {elements.map((el, idx) => (
        <motion.div
          key={idx}
          style={{
            position: "absolute",
            top: el.top,
            left: (el as any).left,
            right: (el as any).right,
          }}
          animate={{
            y: [0, -el.yRange, 0],
            x: [0, el.xRange, 0],
            rotate: [0, 8, -6, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: el.delay,
            ease: "easeInOut",
          }}
          className="opacity-30 hover:opacity-100 transition-opacity drop-shadow-sm"
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
}
