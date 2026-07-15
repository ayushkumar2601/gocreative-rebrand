"use client";

import React, { useState } from "react";

export default function PortfolioShowcase() {
  const [activeOffset, setActiveOffset] = useState(0);

  const handlePrev = () => {
    setActiveOffset((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setActiveOffset((prev) => (prev < 1 ? prev + 1 : 1));
  };

  return (
    <section className="w-full bg-[#181818] text-white py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-white font-black text-2xl sm:text-3xl lg:text-[38px] leading-tight tracking-tight">
            Move fast, test smarter, with data-backed creative and media execution
          </h2>
          <p className="text-white/75 text-sm sm:text-base mt-3 font-normal">
            We combine creative strategy with cutting-edge paid media tactics to
            deliver results.
          </p>

          <div className="mt-7">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-[#6035D0] hover:bg-[#6C3CEB] text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-lg shadow-purple-900/40 transition-all transform hover:scale-105"
            >
              <span>View Portfolio</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-4 h-4"
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

        {/* Carousel / Showcase Container with Lime Navigation Arrows */}
        <div className="relative flex items-center justify-between gap-3 sm:gap-6">
          {/* Left Navigation Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4F252] hover:bg-[#DDF669] text-[#111827] flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 z-20 shrink-0"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 4 Industry Smartphone Mockups Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-end">
            {/* CARD 1: FINANCE */}
            <div className="flex flex-col items-center">
              {/* White Pill Badge Header */}
              <div className="bg-white text-[#111827] font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md mb-4">
                FINANCE
              </div>

              {/* Smartphone Mockup */}
              <div className="w-full max-w-[245px] h-[390px] sm:h-[430px] rounded-[36px] bg-black border-[6px] border-white/95 shadow-2xl overflow-hidden relative flex flex-col justify-between p-2.5">
                {/* Speaker Notch */}
                <div className="w-16 h-3 bg-black rounded-full mx-auto mt-1 z-20" />

                {/* Simulated Visual Content: Finance UGC Ad */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#A28A77] via-[#867160] to-[#514339] flex flex-col justify-between p-4 text-white">
                  {/* Top Coffee & Table scene elements */}
                  <div className="flex justify-between items-start pt-6">
                    <div className="w-10 h-10 rounded-full bg-amber-900/80 border border-white/30 flex items-center justify-center text-xs">
                      ☕
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] font-bold">
                      REELS
                    </div>
                  </div>

                  {/* Credit Card & German Banking Receipt overlay */}
                  <div className="relative z-10 flex flex-col items-center gap-2 mb-8">
                    {/* Floating Card */}
                    <div className="w-24 h-14 rounded-lg bg-gradient-to-tr from-blue-900 to-indigo-700 border border-white/30 shadow-lg flex flex-col justify-between p-1.5 transform -rotate-6">
                      <span className="text-[7px] font-bold tracking-widest text-white/90">
                        FINANCE CARD
                      </span>
                      <div className="w-4 h-3 bg-amber-400 rounded-xs" />
                    </div>

                    {/* Bottom White Subtitle Banner */}
                    <div className="bg-white/95 text-[#111827] px-3 py-1 rounded-lg shadow-md text-center">
                      <p className="text-[10px] font-black leading-tight">
                        Kostenlose
                        <br />
                        SEPA-Echtzeitüberweisungen
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: SAAS & B2B */}
            <div className="flex flex-col items-center">
              {/* White Pill Badge Header */}
              <div className="bg-white text-[#111827] font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md mb-4">
                SAAS & B2B
              </div>

              {/* Smartphone Mockup */}
              <div className="w-full max-w-[245px] h-[390px] sm:h-[430px] rounded-[36px] bg-black border-[6px] border-white/95 shadow-2xl overflow-hidden relative flex flex-col justify-between p-2.5">
                <div className="w-16 h-3 bg-black rounded-full mx-auto mt-1 z-20" />

                {/* Simulated Visual Content: B2B Creator & Analytics */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#3B424C] via-[#242A33] to-[#14171C] flex flex-col justify-between p-3">
                  {/* Top Creator speaking */}
                  <div className="relative w-full h-[55%] rounded-2xl bg-[#523F3A] overflow-hidden flex flex-col items-center justify-end p-2">
                    <div className="w-20 h-20 rounded-full bg-[#E5C2A5] border-2 border-white/20 mb-2 relative flex items-center justify-center">
                      <div className="w-10 h-4 bg-gray-800 rounded-full" />
                    </div>
                    {/* Neon Blue BUDGETS Sticker */}
                    <div className="bg-[#121A3B] border border-cyan-400 px-3 py-0.5 rounded-md shadow-lg">
                      <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">
                        BUDGETS
                      </span>
                    </div>
                  </div>

                  {/* Bottom SaaS Bar Chart Mockup */}
                  <div className="w-full bg-white rounded-xl p-2.5 shadow-lg text-[#111827]">
                    <div className="flex justify-between items-center text-[8px] font-bold text-gray-500 mb-2">
                      <span>Performance vs. Target</span>
                      <span>Q3</span>
                    </div>
                    <div className="flex items-end justify-around h-16 gap-2">
                      <div className="w-4 h-10 bg-pink-300 rounded-t-sm" />
                      <div className="w-4 h-14 bg-purple-500 rounded-t-sm" />
                      <div className="w-4 h-8 bg-blue-300 rounded-t-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: GAMING */}
            <div className="flex flex-col items-center">
              {/* White Pill Badge Header */}
              <div className="bg-white text-[#111827] font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md mb-4">
                GAMING
              </div>

              {/* Smartphone Mockup */}
              <div className="w-full max-w-[245px] h-[390px] sm:h-[430px] rounded-[36px] bg-black border-[6px] border-white/95 shadow-2xl overflow-hidden relative flex flex-col justify-between p-2.5">
                <div className="w-16 h-3 bg-black rounded-full mx-auto mt-1 z-20" />

                {/* Simulated Visual Content: Mobile Poker Gaming App */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A103D] via-[#0F1B63] to-[#070A26] flex flex-col justify-between items-center p-4">
                  {/* Glowing Stage Lights */}
                  <div className="w-full flex justify-around pt-6">
                    <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60A5FA]" />
                    <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#C084FC]" />
                    <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60A5FA]" />
                  </div>

                  {/* Poker Table Graphic */}
                  <div className="w-full my-auto">
                    <div className="w-full h-24 rounded-full bg-[#185933] border-4 border-[#3D8C5B] shadow-2xl flex items-center justify-center relative">
                      <div className="w-12 h-6 rounded-full border border-white/20 flex items-center justify-center">
                        <span className="text-[7px] font-bold text-white/80 uppercase">
                          TABLE
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Yellow 3D Title text */}
                  <div className="mb-6">
                    <span className="text-[#FDE047] font-black text-base uppercase tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      free-to-play app
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4: E-COMMERCE */}
            <div className="flex flex-col items-center">
              {/* White Pill Badge Header */}
              <div className="bg-white text-[#111827] font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md mb-4">
                E-COMMERCE
              </div>

              {/* Smartphone Mockup */}
              <div className="w-full max-w-[245px] h-[390px] sm:h-[430px] rounded-[36px] bg-black border-[6px] border-white/95 shadow-2xl overflow-hidden relative flex flex-col justify-between p-2.5">
                <div className="w-16 h-3 bg-black rounded-full mx-auto mt-1 z-20" />

                {/* Simulated Visual Content: Skincare & Lifestyle Ad */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#EBE7E1] via-[#DED8D0] to-[#8C7A6B] flex flex-col justify-between p-3 text-[#111827]">
                  {/* Top White Tagline */}
                  <div className="bg-white/95 rounded-lg py-1.5 px-3 text-center shadow-sm mt-5">
                    <p className="text-[10px] font-black leading-tight">
                      Together, these can save you time
                    </p>
                  </div>

                  {/* Product & Website Mockup */}
                  <div className="w-full bg-[#F3EFEA] rounded-xl p-2.5 shadow border border-white/60 my-auto flex items-center justify-between">
                    <div className="w-7 h-16 bg-white rounded-full shadow-md border border-gray-200" />
                    <div className="flex flex-col">
                      <span className="font-serif text-sm font-bold">
                        Timeless
                      </span>
                      <span className="text-[9px] text-gray-600">
                        Lifestyle Routine
                      </span>
                    </div>
                  </div>

                  {/* Creator Face at bottom */}
                  <div className="w-12 h-12 rounded-full bg-[#D4C4B5] border-2 border-white shadow-lg mx-auto mb-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4F252] hover:bg-[#DDF669] text-[#111827] flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 z-20 shrink-0"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
