"use client";

import React from "react";

export default function GlobalTeamMarquee() {
  const repeatItems = Array.from({ length: 8 });

  return (
    <section className="w-full bg-[#181818] py-5 sm:py-6 border-t border-white/10 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
        {repeatItems.map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-6 text-white/95 font-extrabold text-lg sm:text-xl lg:text-2xl tracking-[0.08em] uppercase"
          >
            <span>YOUR GLOBAL CREATIVE TEAM</span>
            {/* Globe Icon / Emblem */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-teal-400 flex items-center justify-center shadow-md border border-white/30 text-xs sm:text-sm">
              🌍
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
