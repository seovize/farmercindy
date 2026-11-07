"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sprout, Sun } from "lucide-react";

export function FloatingFarmElements() {
  const elements = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#E63946]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8 2 4 6 4 11C4 16.5 12 22 12 22C12 22 20 16.5 20 11C20 6 16 2 12 2Z" fill="#E63946" fillOpacity="0.85" />
          <path d="M12 2C10 5 7 5 6 6" stroke="#84CC16" strokeWidth="2.5" />
          <path d="M12 2C14 5 17 5 18 6" stroke="#84CC16" strokeWidth="2.5" />
          <circle cx="8" cy="10" r="1" fill="#FFF" />
          <circle cx="12" cy="11" r="1" fill="#FFF" />
          <circle cx="16" cy="10" r="1" fill="#FFF" />
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
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#991B1B]" stroke="currentColor" strokeWidth="2">
          <circle cx="8" cy="16" r="5" fill="#DC2626" />
          <circle cx="16" cy="16" r="5" fill="#DC2626" />
          <path d="M8 12C9 7 13 4 16 3" stroke="#84CC16" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M16 12C15 8 15 5 16 3" stroke="#84CC16" strokeWidth="2.5" strokeLinecap="round" />
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
      icon: <Sun className="w-9 h-9 text-amber-400" />,
      top: "60%",
      left: "8%",
      delay: 2,
      duration: 5.2,
      xRange: 12,
      yRange: -16,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-amber-500" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="13" rx="6" ry="7" fill="#FBBF24" />
          <line x1="6" y1="11" x2="18" y2="11" stroke="#451A03" strokeWidth="1.5" />
          <line x1="6" y1="14" x2="18" y2="14" stroke="#451A03" strokeWidth="1.5" />
          <line x1="8" y1="17" x2="16" y2="17" stroke="#451A03" strokeWidth="1.5" />
          <path d="M10 7C8 4 6 5 7 7" stroke="#60A5FA" strokeWidth="1.5" fill="#93C5FD" fillOpacity="0.5" />
          <path d="M14 7C16 4 18 5 17 7" stroke="#60A5FA" strokeWidth="1.5" fill="#93C5FD" fillOpacity="0.5" />
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
      icon: <Sprout className="w-8 h-8 text-emerald-500" />,
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
          className="opacity-35 hover:opacity-100 transition-opacity drop-shadow-sm"
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
}
