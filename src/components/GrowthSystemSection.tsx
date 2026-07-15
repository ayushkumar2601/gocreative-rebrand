"use client";

import React from "react";

export default function GrowthSystemSection() {
  return (
    <section className="w-full bg-[#080D1A] text-white py-24 sm:py-32 relative overflow-hidden select-none">
      {/* Futuristic Grid & Ambient Orbs Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 180, 255, 0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#4B00B5]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#00B4FF]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00B4FF] mb-4">
            <span>TECH-POWERED ECOSYSTEM</span>
          </div>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[44px] uppercase tracking-tight leading-tight">
            THE COMPLETE <span className="gocreative-gradient-text">GROWTH CREATIVE</span> SYSTEM
          </h2>
          <p className="text-white/70 text-base sm:text-lg mt-3 font-normal">
            We combine creative strategy with cutting-edge AI tools and platform integration to deliver:
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
              stroke="#00B4FF"
              strokeWidth="2.5"
            />
            {/* Right arrowhead for top line */}
            <circle
              cx="855"
              cy="135"
              r="12"
              fill="#00B4FF"
            />
            <path
              d="M851 130L857 135L851 140"
              stroke="#080D1A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Bottom Horizontal Arrow Line (Measurement to Creative Strategy) */}
            <line
              x1="870"
              y1="485"
              x2="325"
              y2="485"
              stroke="#FF1493"
              strokeWidth="2.5"
            />
            {/* Left arrowhead for bottom line */}
            <circle
              cx="325"
              cy="485"
              r="12"
              fill="#FF1493"
            />
            <path
              d="M329 480L323 485L329 490"
              stroke="#080D1A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Left Vertical Line 1: Concept Input (Solid arrow UP) */}
            <line
              x1="180"
              y1="375"
              x2="180"
              y2="195"
              stroke="#FF1493"
              strokeWidth="2.5"
            />
            <circle cx="180" cy="195" r="11" fill="#FF1493" />
            <path
              d="M176 198L180 193L184 198"
              stroke="#080D1A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Left Vertical Line 2: Asset Support (Dashed arrow DOWN) */}
            <line
              x1="265"
              y1="190"
              x2="265"
              y2="370"
              stroke="#00B4FF"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <circle cx="265" cy="370" r="11" fill="#00B4FF" />
            <path
              d="M261 367L265 372L269 367"
              stroke="#080D1A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Right Vertical Line 1: Attribution (Dashed arrow UP) */}
            <line
              x1="915"
              y1="375"
              x2="915"
              y2="195"
              stroke="#FF1493"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <circle cx="915" cy="195" r="11" fill="#FF1493" />
            <path
              d="M911 198L915 193L919 198"
              stroke="#080D1A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Right Vertical Line 2: Data Feed (Solid arrow DOWN) */}
            <line
              x1="1000"
              y1="190"
              x2="1000"
              y2="370"
              stroke="#00B4FF"
              strokeWidth="2.5"
            />
            <circle cx="1000" cy="370" r="11" fill="#00B4FF" />
            <path
              d="M996 367L1000 372L1004 367"
              stroke="#080D1A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Diagonal Lines to Center Hub */}
            <line
              x1="300"
              y1="150"
              x2="510"
              y2="250"
              stroke="#4B00B5"
              strokeWidth="2"
            />
            <line
              x1="880"
              y1="150"
              x2="670"
              y2="250"
              stroke="#00B4FF"
              strokeWidth="2"
            />
            <line
              x1="300"
              y1="470"
              x2="510"
              y2="370"
              stroke="#FF1493"
              strokeWidth="2"
            />
            <line
              x1="880"
              y1="470"
              x2="670"
              y2="370"
              stroke="#4B00B5"
              strokeWidth="2"
            />
          </svg>

          {/* ========================================================= */}
          {/* CENTER HUB: GROWTH CREATIVE INTEGRATION ENGINE */}
          {/* ========================================================= */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-48 h-48 rounded-full gocreative-gradient-bg text-white flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(255,20,147,0.5)] border-[6px] border-white/30 transform hover:scale-105 transition-transform duration-300">
              <span className="font-extrabold text-2xl leading-tight">
                GoCreative
              </span>
              <span className="font-extrabold text-xl leading-tight text-white/90">
                AI Growth
              </span>
              <span className="text-[11px] font-bold text-white/80 mt-1.5 uppercase tracking-wider bg-black/30 px-3 py-0.5 rounded-full">
                Integration Engine
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* HORIZONTAL & VERTICAL PILL BADGES ON LINES */}
          {/* ========================================================= */}

          {/* Amplification Pill Badge (Top Horizontal Line) */}
          <div className="absolute top-[117px] left-1/2 -translate-x-1/2 z-20">
            <div className="bg-[#0A1F44] text-[#00B4FF] text-xs font-extrabold px-5 py-1.5 rounded-full shadow-lg border border-[#00B4FF]/40 tracking-wide">
              Amplification
            </div>
          </div>

          {/* Performance Insight Pill Badge (Bottom Horizontal Line) */}
          <div className="absolute top-[467px] left-1/2 -translate-x-1/2 z-20">
            <div className="bg-[#0A1F44] text-[#FF1493] text-xs font-extrabold px-5 py-1.5 rounded-full shadow-lg border border-[#FF1493]/40 tracking-wide">
              Performance Insight
            </div>
          </div>

          {/* Concept Input Pill Badge (Left Vertical UP line) */}
          <div className="absolute top-[280px] left-[135px] z-20">
            <div className="bg-[#0A1F44] text-[#FF1493] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg border border-[#FF1493]/40">
              Concept Input
            </div>
          </div>

          {/* Asset Support Pill Badge (Left Vertical DOWN line) */}
          <div className="absolute top-[340px] left-[215px] z-20">
            <div className="bg-[#0A1F44] text-[#00B4FF] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg border border-[#00B4FF]/40">
              Asset Support
            </div>
          </div>

          {/* Attribution Pill Badge (Right Vertical UP line) */}
          <div className="absolute top-[340px] right-[215px] z-20">
            <div className="bg-[#0A1F44] text-[#FF1493] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg border border-[#FF1493]/40">
              Attribution
            </div>
          </div>

          {/* Data Feed Pill Badge (Right Vertical DOWN line) */}
          <div className="absolute top-[280px] right-[135px] z-20">
            <div className="bg-[#0A1F44] text-[#00B4FF] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg border border-[#00B4FF]/40">
              Data Feed
            </div>
          </div>

          {/* ========================================================= */}
          {/* FOUR QUADRANT CARDS */}
          {/* ========================================================= */}

          {/* 1. TOP-LEFT: Creators & Influencers */}
          <div className="absolute top-4 left-6 w-[310px] bg-[#141E38]/90 backdrop-blur-xl rounded-3xl p-7 shadow-2xl border border-white/15 z-10 hover:border-[#FF1493] transition-all">
            <div className="flex items-center gap-3 mb-3">
              {/* Icon */}
              <div className="w-9 h-9 rounded-xl bg-[#FF1493]/20 text-[#FF1493] flex items-center justify-center border border-[#FF1493]/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-5 h-5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M19 8l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-lg text-white">
                Creators & Influencers
              </h3>
            </div>
            <p className="text-white/75 text-[13.5px] leading-relaxed">
              We have developed industry-leading best practices to ensure
              creative and paid social optimization work in synergy to scale ad
              spend profitably.
            </p>
          </div>

          {/* 2. TOP-RIGHT: Paid Media */}
          <div className="absolute top-4 right-6 w-[310px] bg-[#141E38]/90 backdrop-blur-xl rounded-3xl p-7 shadow-2xl border border-white/15 z-10 hover:border-[#00B4FF] transition-all">
            <div className="flex items-center gap-3 mb-3">
              {/* Icon */}
              <div className="w-9 h-9 rounded-xl bg-[#00B4FF]/20 text-[#00B4FF] flex items-center justify-center border border-[#00B4FF]/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-5 h-5"
                >
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                  <polyline points="17 2 12 7 7 2" />
                  <polygon points="10 11 15 14.5 10 18 10 11" />
                </svg>
              </div>
              <h3 className="font-extrabold text-lg text-white">
                Paid Media
              </h3>
            </div>
            <p className="text-white/75 text-[13.5px] leading-relaxed">
              Strategic media buying across Meta, TikTok, YouTube, and beyond.
              Optimized budget allocation and continuous performance monitoring.
            </p>
          </div>

          {/* 3. BOTTOM-LEFT: Creative Strategy */}
          <div className="absolute bottom-4 left-6 w-[310px] bg-[#141E38]/90 backdrop-blur-xl rounded-3xl p-7 shadow-2xl border border-white/15 z-10 hover:border-[#FF1493] transition-all">
            <div className="flex items-center gap-3 mb-3">
              {/* Icon */}
              <div className="w-9 h-9 rounded-xl bg-[#FF1493]/20 text-[#FF1493] flex items-center justify-center border border-[#FF1493]/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-5 h-5"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                  <path d="M9 7h6" />
                  <path d="M9 11h4" />
                </svg>
              </div>
              <h3 className="font-extrabold text-lg text-white">
                Creative Strategy
              </h3>
            </div>
            <p className="text-white/75 text-[13.5px] leading-relaxed">
              Research-driven concepts produced at scale. Hybrid studio and
              creator production delivers volume, variety, and platform-native
              formats.
            </p>
          </div>

          {/* 4. BOTTOM-RIGHT: Measurement */}
          <div className="absolute bottom-4 right-6 w-[310px] bg-[#141E38]/90 backdrop-blur-xl rounded-3xl p-7 shadow-2xl border border-white/15 z-10 hover:border-[#00B4FF] transition-all">
            <div className="flex items-center gap-3 mb-3">
              {/* Icon */}
              <div className="w-9 h-9 rounded-xl bg-[#00B4FF]/20 text-[#00B4FF] flex items-center justify-center border border-[#00B4FF]/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-5 h-5"
                >
                  <path d="M18 20V10" />
                  <path d="M12 20V4" />
                  <path d="M6 20v-6" />
                </svg>
              </div>
              <h3 className="font-extrabold text-lg text-white">
                Measurement
              </h3>
            </div>
            <p className="text-white/75 text-[13.5px] leading-relaxed">
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
          <div className="w-full max-w-[340px] gocreative-gradient-bg text-white rounded-3xl py-6 px-4 text-center shadow-xl border border-white/20">
            <h3 className="font-extrabold text-2xl">GoCreative AI</h3>
            <p className="text-xs text-white/90 mt-1 uppercase tracking-wider font-semibold">
              Integration Engine
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#141E38]/90 rounded-3xl p-6 shadow-md border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#FF1493]">
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
                <h3 className="font-extrabold text-lg text-white">
                  Creators & Influencers
                </h3>
              </div>
              <p className="text-white/75 text-sm leading-relaxed">
                We have developed industry-leading best practices to ensure
                creative and paid social optimization work in synergy to scale ad
                spend profitably.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#141E38]/90 rounded-3xl p-6 shadow-md border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#00B4FF]">
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
                <h3 className="font-extrabold text-lg text-white">
                  Paid Media
                </h3>
              </div>
              <p className="text-white/75 text-sm leading-relaxed">
                Strategic media buying across Meta, TikTok, YouTube, and beyond.
                Optimized budget allocation and continuous performance
                monitoring.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#141E38]/90 rounded-3xl p-6 shadow-md border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#FF1493]">
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
                <h3 className="font-extrabold text-lg text-white">
                  Creative Strategy
                </h3>
              </div>
              <p className="text-white/75 text-sm leading-relaxed">
                Research-driven concepts produced at scale. Hybrid studio and
                creator production delivers volume, variety, and platform-native
                formats.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#141E38]/90 rounded-3xl p-6 shadow-md border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#00B4FF]">
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
                <h3 className="font-extrabold text-lg text-white">
                  Measurement
                </h3>
              </div>
              <p className="text-white/75 text-sm leading-relaxed">
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
