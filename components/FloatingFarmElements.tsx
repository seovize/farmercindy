"use client";

import React from "react";
import { motion } from "framer-motion";

export function FloatingFarmElements() {
  const elements = [
    { emoji: "🍓", top: "15%", left: "5%", size: "text-3xl", delay: 0, duration: 4.5, xRange: 15, yRange: 20 },
    { emoji: "🍒", top: "25%", right: "8%", size: "text-4xl", delay: 1, duration: 5, xRange: -20, yRange: 18 },
    { emoji: "🌻", top: "60%", left: "8%", size: "text-3xl", delay: 2, duration: 4.2, xRange: 12, yRange: -16 },
    { emoji: "🐝", top: "70%", right: "6%", size: "text-2xl", delay: 0.5, duration: 3.8, xRange: -18, yRange: 22 },
    { emoji: "🌱", top: "45%", left: "3%", size: "text-3xl", delay: 1.5, duration: 4.8, xRange: 10, yRange: 15 },
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
          className={`${el.size} opacity-40 hover:opacity-100 transition-opacity drop-shadow-sm`}
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  );
}
