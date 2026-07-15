"use client";

import React from "react";

export default function GrowthSystemSection() {
  return (
    <section className="w-full bg-[#EFEAFB] py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle Purple Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #CFC4EE 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-[#6035D0] font-black text-3xl sm:text-4xl lg:text-[42px] uppercase tracking-tight leading-tight">
            THE COMPLETE GROWTH CREATIVE SYSTEM
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg mt-3 font-normal">
            We combine creative strategy with cutting-edge AI tools to deliver:
          </p>
        </div>

        {/* ============================================================= */}
        {/* DESKTOP CIRCUIT BOARD ARCHITECTURE DIAGRAM (LG+) */}
        {/* ============================================================= */}
        <div className="hidden lg:block relative w-full h-[620px] select-none">
          {/* SVG Connection Circuit Lines & Arrows */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1180 620"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top Horizontal Arrow Line (Creators to Paid Media) */}
            <line
              x1="310"
              y1="135"
              x2="855"
              y2="135"
              stroke="#6035D0"
              strokeWidth="2.2"
            />
            {/* Right arrowhead for top line */}
            <circle
              cx="855"
              cy="135"
              r="12"
              fill="#6035D0"
            />
            <path
              d="M851 130L857 135L851 140"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Bottom Horizontal Arrow Line (Measurement to Creative Strategy) */}
            <line
              x1="870"
              y1="485"
              x2="325"
              y2="485"
              stroke="#6035D0"
              strokeWidth="2.2"
            />
            {/* Left arrowhead for bottom line */}
            <circle
              cx="325"
              cy="485"
              r="12"
              fill="#6035D0"
            />
            <path
              d="M329 480L323 485L329 490"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Left Vertical Line 1: Concept Input (Solid arrow UP) */}
            <line
              x1="180"
              y1="375"
              x2="180"
              y2="195"
              stroke="#6035D0"
              strokeWidth="2.2"
            />
            <circle cx="180" cy="195" r="11" fill="#6035D0" />
            <path
              d="M176 198L180 193L184 198"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Left Vertical Line 2: Asset Support (Dashed arrow DOWN) */}
            <line
              x1="265"
              y1="190"
              x2="265"
              y2="370"
              stroke="#8D73E6"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <circle cx="265" cy="370" r="11" fill="#8D73E6" />
            <path
              d="M261 367L265 372L269 367"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Right Vertical Line 1: Attribution (Dashed arrow UP) */}
            <line
              x1="915"
              y1="375"
              x2="915"
              y2="195"
              stroke="#8D73E6"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <circle cx="915" cy="195" r="11" fill="#8D73E6" />
            <path
              d="M911 198L915 193L919 198"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Right Vertical Line 2: Data Feed (Solid arrow DOWN) */}
            <line
              x1="1000"
              y1="190"
              x2="1000"
              y2="370"
              stroke="#6035D0"
              strokeWidth="2.2"
            />
            <circle cx="1000" cy="370" r="11" fill="#6035D0" />
            <path
              d="M996 367L1000 372L1004 367"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Diagonal Lines to Center Hub */}
            <line
              x1="300"
              y1="150"
              x2="510"
              y2="250"
              stroke="#9F8AE6"
              strokeWidth="1.5"
            />
            <line
              x1="880"
              y1="150"
              x2="670"
              y2="250"
              stroke="#9F8AE6"
              strokeWidth="1.5"
            />
            <line
              x1="300"
              y1="470"
              x2="510"
              y2="370"
              stroke="#9F8AE6"
              strokeWidth="1.5"
            />
            <line
              x1="880"
              y1="470"
              x2="670"
              y2="370"
              stroke="#9F8AE6"
              strokeWidth="1.5"
            />
          </svg>

          {/* ========================================================= */}
          {/* CENTER HUB: GROWTH CREATIVE INTEGRATION ENGINE */}
          {/* ========================================================= */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-44 h-44 rounded-full bg-[#5C32CF] text-white flex flex-col items-center justify-center text-center shadow-2xl shadow-[#5C32CF]/30 border-[7px] border-white/20">
              <span className="font-extrabold text-2xl leading-tight">
                Growth
              </span>
              <span className="font-extrabold text-2xl leading-tight">
                Creative
              </span>
              <span className="text-[11px] font-medium text-white/80 mt-1">
                Integration Engine
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* HORIZONTAL & VERTICAL PILL BADGES ON LINES */}
          {/* ========================================================= */}

          {/* Amplification Pill Badge (Top Horizontal Line) */}
          <div className="absolute top-[117px] left-1/2 -translate-x-1/2 z-20">
            <div className="bg-[#181818] text-[#D4F252] text-xs font-extrabold px-5 py-1.5 rounded-full shadow-md tracking-wide">
              Amplification
            </div>
          </div>

          {/* Performance Insight Pill Badge (Bottom Horizontal Line) */}
          <div className="absolute top-[467px] left-1/2 -translate-x-1/2 z-20">
            <div className="bg-[#181818] text-[#D4F252] text-xs font-extrabold px-5 py-1.5 rounded-full shadow-md tracking-wide">
              Performance Insight
            </div>
          </div>

          {/* Concept Input Pill Badge (Left Vertical UP line) */}
          <div className="absolute top-[280px] left-[135px] z-20">
            <div className="bg-[#181818] text-[#D4F252] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md">
              Concept Input
            </div>
          </div>

          {/* Asset Support Pill Badge (Left Vertical DOWN line) */}
          <div className="absolute top-[340px] left-[215px] z-20">
            <div className="bg-[#EDE6DB] text-[#6E6356] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-sm border border-[#E3DCd0]">
              Asset Support
            </div>
          </div>

          {/* Attribution Pill Badge (Right Vertical UP line) */}
          <div className="absolute top-[340px] right-[215px] z-20">
            <div className="bg-[#EDE6DB] text-[#6E6356] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-sm border border-[#E3DCd0]">
              Attribution
            </div>
          </div>

          {/* Data Feed Pill Badge (Right Vertical DOWN line) */}
          <div className="absolute top-[280px] right-[135px] z-20">
            <div className="bg-[#181818] text-[#D4F252] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md">
              Data Feed
            </div>
          </div>

          {/* ========================================================= */}
          {/* FOUR QUADRANT CARDS */}
          {/* ========================================================= */}

          {/* 1. TOP-LEFT: Creators & Influencers */}
          <div className="absolute top-4 left-6 w-[310px] bg-[#FAF8F3] rounded-3xl p-7 shadow-lg border border-white/80 z-10">
            <div className="flex items-center gap-3 mb-3">
              {/* Icon */}
              <div className="w-8 h-8 rounded-lg text-[#6035D0] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-6 h-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M19 8l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-lg text-[#6035D0]">
                Creators & Influencers
              </h3>
            </div>
            <p className="text-[#374151] text-[13.5px] leading-relaxed">
              We have developed industry-leading best practices to ensure
              creative and paid social optimization work in synergy to scale ad
              spend profitably.
            </p>
          </div>

          {/* 2. TOP-RIGHT: Paid Media */}
          <div className="absolute top-4 right-6 w-[310px] bg-[#FAF8F3] rounded-3xl p-7 shadow-lg border border-white/80 z-10">
            <div className="flex items-center gap-3 mb-3">
              {/* Icon */}
              <div className="w-8 h-8 rounded-lg text-[#6035D0] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-6 h-6"
                >
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                  <polyline points="17 2 12 7 7 2" />
                  <polygon points="10 11 15 14.5 10 18 10 11" />
                </svg>
              </div>
              <h3 className="font-extrabold text-lg text-[#6035D0]">
                Paid Media
              </h3>
            </div>
            <p className="text-[#374151] text-[13.5px] leading-relaxed">
              Strategic media buying across Meta, TikTok, YouTube, and beyond.
              Optimized budget allocation and continuous performance monitoring.
            </p>
          </div>

          {/* 3. BOTTOM-LEFT: Creative Strategy */}
          <div className="absolute bottom-4 left-6 w-[310px] bg-[#FAF8F3] rounded-3xl p-7 shadow-lg border border-white/80 z-10">
            <div className="flex items-center gap-3 mb-3">
              {/* Icon */}
              <div className="w-8 h-8 rounded-lg text-[#6035D0] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-6 h-6"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                  <path d="M9 7h6" />
                  <path d="M9 11h4" />
                </svg>
              </div>
              <h3 className="font-extrabold text-lg text-[#6035D0]">
                Creative Strategy
              </h3>
            </div>
            <p className="text-[#374151] text-[13.5px] leading-relaxed">
              Research-driven concepts produced at scale. Hybrid studio and
              creator production delivers volume, variety, and platform-native
              formats.
            </p>
          </div>

          {/* 4. BOTTOM-RIGHT: Measurement */}
          <div className="absolute bottom-4 right-6 w-[310px] bg-[#FAF8F3] rounded-3xl p-7 shadow-lg border border-white/80 z-10">
            <div className="flex items-center gap-3 mb-3">
              {/* Icon */}
              <div className="w-8 h-8 rounded-lg text-[#6035D0] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-6 h-6"
                >
                  <path d="M18 20V10" />
                  <path d="M12 20V4" />
                  <path d="M6 20v-6" />
                </svg>
              </div>
              <h3 className="font-extrabold text-lg text-[#6035D0]">
                Measurement
              </h3>
            </div>
            <p className="text-[#374151] text-[13.5px] leading-relaxed">
              Performance analysis that closes the loop. Real-time data informs
              creative strategy and media optimization for continuous
              improvement.
            </p>
          </div>
        </div>

        {/* ============================================================= */}
        {/* MOBILE & TABLET LAYOUT (< LG) */}
        {/* ============================================================= */}
        <div className="lg:hidden flex flex-col gap-6 items-center">
          {/* Center Hub Banner on Mobile */}
          <div className="w-full max-w-[340px] bg-[#5C32CF] text-white rounded-3xl py-6 px-4 text-center shadow-xl">
            <h3 className="font-extrabold text-2xl">Growth Creative</h3>
            <p className="text-xs text-white/80 mt-1 uppercase tracking-wider font-semibold">
              Integration Engine
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#FAF8F3] rounded-3xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#6035D0]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    className="w-6 h-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-lg text-[#6035D0]">
                  Creators & Influencers
                </h3>
              </div>
              <p className="text-[#374151] text-sm leading-relaxed">
                We have developed industry-leading best practices to ensure
                creative and paid social optimization work in synergy to scale ad
                spend profitably.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF8F3] rounded-3xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#6035D0]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    className="w-6 h-6"
                  >
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                    <polyline points="17 2 12 7 7 2" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-lg text-[#6035D0]">
                  Paid Media
                </h3>
              </div>
              <p className="text-[#374151] text-sm leading-relaxed">
                Strategic media buying across Meta, TikTok, YouTube, and beyond.
                Optimized budget allocation and continuous performance
                monitoring.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAF8F3] rounded-3xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#6035D0]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    className="w-6 h-6"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-lg text-[#6035D0]">
                  Creative Strategy
                </h3>
              </div>
              <p className="text-[#374151] text-sm leading-relaxed">
                Research-driven concepts produced at scale. Hybrid studio and
                creator production delivers volume, variety, and platform-native
                formats.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FAF8F3] rounded-3xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#6035D0]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    className="w-6 h-6"
                  >
                    <path d="M18 20V10" />
                    <path d="M12 20V4" />
                    <path d="M6 20v-6" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-lg text-[#6035D0]">
                  Measurement
                </h3>
              </div>
              <p className="text-[#374151] text-sm leading-relaxed">
                Performance analysis that closes the loop. Real-time data informs
                creative strategy and media optimization for continuous
                improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
