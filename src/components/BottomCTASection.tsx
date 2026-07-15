"use client";

import React from "react";

export default function BottomCTASection() {
  return (
    <section className="w-full bg-[#FAF8F3] py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden select-none">
      <div className="max-w-[860px] mx-auto text-center relative z-10">
        {/* Decorative Top-Left Clapperboard Icon */}
        <div className="absolute -top-6 left-[10%] sm:left-[15%] text-[#8D6CEB] transform -rotate-12 animate-float-slow hidden sm:block">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            className="w-10 h-10"
          >
            <path d="M4 10h24v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10Z" />
            <path d="M4 10l5-6h6l-5 6" />
            <path d="M15 10l5-6h6l-5 6" />
          </svg>
        </div>

        {/* Decorative Top-Right Sparkles */}
        <div className="absolute -top-4 right-[12%] sm:right-[18%] text-[#6035D0] animate-float-medium">
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M16 2l3.5 9.5L29 15l-9.5 3.5L16 28l-3.5-9.5L3 15l9.5-3.5L16 2Z" />
          </svg>
        </div>

        {/* Decorative Bottom-Left Sparkle */}
        <div className="absolute bottom-4 left-[15%] sm:left-[22%] text-[#6035D0] animate-float-slow">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2Z" />
          </svg>
        </div>

        {/* Decorative Bottom-Right Camera Icon */}
        <div className="absolute bottom-2 right-[14%] sm:right-[18%] text-[#8D6CEB] transform rotate-12 animate-float-medium hidden sm:block">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            className="w-9 h-9"
          >
            <rect x="4" y="9" width="24" height="18" rx="3" />
            <circle cx="16" cy="18" r="5" />
            <path d="M10 9l2-4h8l2 4" />
          </svg>
        </div>

        {/* Main Headline */}
        <div className="relative inline-block">
          <h2 className="text-[#6035D0] font-black text-3xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight">
            Lower your CAC
            <br />
            with data-driven ads
          </h2>
          {/* Hand-drawn underline graphic */}
          <div className="flex justify-center mt-1">
            <svg
              width="260"
              height="12"
              viewBox="0 0 260 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 sm:w-64"
            >
              <path
                d="M3 8.5C64 3.5 186 1.5 257 6.5"
                stroke="#C3B2FA"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-[#111827] font-black text-base sm:text-lg lg:text-xl mt-5 tracking-tight">
          Build a growth creative system that scales your revenue
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-[#1D1D1B] hover:bg-[#2B2B28] text-white rounded-full px-8 py-4 text-sm sm:text-base font-semibold shadow-xl shadow-black/15 transition-all duration-200 group"
          >
            <span className="text-[#D4F252] font-bold">Let&apos;s Do This</span>
            <svg
              className="w-4 h-4 text-[#D4F252] transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
