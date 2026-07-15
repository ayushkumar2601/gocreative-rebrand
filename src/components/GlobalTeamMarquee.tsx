"use client";

import React from "react";

export default function GlobalTeamMarquee() {
  const repeatItems = Array.from({ length: 8 });

  return (
    <section className="w-full bg-[#060B18] py-5 sm:py-6 border-t border-b border-white/15 overflow-hidden select-none shadow-[0_0_30px_rgba(0,180,255,0.1)]">
      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
        {repeatItems.map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-6 font-extrabold text-lg sm:text-xl lg:text-2xl tracking-[0.08em] uppercase"
          >
            <span className="text-white/90">AI + HUMAN CREATIVE POWERHOUSE</span>
            <span className="text-[#FF1493]">•</span>
            <span className="gocreative-gradient-text">YOUR GLOBAL PERFORMANCE TEAM</span>
            <div className="w-8 h-8 rounded-full gocreative-gradient-bg flex items-center justify-center shadow-[0_0_15px_rgba(0,180,255,0.6)] border border-white/40 text-sm">
              ⚡
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
