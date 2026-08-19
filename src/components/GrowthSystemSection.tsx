"use client";

import React from "react";

export default function GrowthSystemSection() {
  return (
    <section id="profit-loop" className="w-full bg-[#080D1A] text-white py-12 sm:py-16 relative overflow-hidden select-none">
      {/* Futuristic Grid & Ambient Orbs Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 180, 255, 0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#4B00B5]/20 blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#00B4FF]/15 blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#FF1493]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00B4FF] mb-4 border border-[#00B4FF]/30 shadow-lg shadow-[#00B4FF]/10">
            <span className="w-2 h-2 rounded-full bg-[#00B4FF] animate-ping" />
            <span>TECH-POWERED ECOSYSTEM</span>
          </div>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[46px] uppercase tracking-tight leading-tight">
            THE COMPLETE <span className="gocreative-gradient-text">GROWTH CREATIVE</span> SYSTEM
          </h2>
          <p className="text-white/70 text-base sm:text-lg mt-3 font-normal">
            We combine creative strategy with cutting-edge AI tools and platform integration to deliver:
          </p>
        </div>

        {/* ============================================================= */}
        {/* DESKTOP 3-COLUMN PIPELINE ARCHITECTURE DIAGRAM (LG+) */}
        {/* ============================================================= */}
        <div className="hidden lg:block relative w-full max-w-[1320px] mx-auto h-[700px] select-none">
          {/* SVG Connection Circuit Lines, Laser Tracks & Glowing Animated Streams */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1320 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gocreative-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF1493" />
                <stop offset="50%" stopColor="#4B00B5" />
                <stop offset="100%" stopColor="#00B4FF" />
              </linearGradient>
              <linearGradient id="gocreative-glow-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00B4FF" />
                <stop offset="100%" stopColor="#38EF7D" />
              </linearGradient>
              <linearGradient id="gocreative-glow-pink" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF1493" />
                <stop offset="100%" stopColor="#FF6B00" />
              </linearGradient>
              <filter id="neon-stick-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur1" />
                <feGaussianBlur stdDeviation="8" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ========================================================= */}
            {/* --- BASE STATIC CIRCUIT TRACKS (Subtle Background Wires) --- */}
            {/* ========================================================= */}

            {/* Top Horizontal Bridge: Amplification (Left to Right) */}
            <line x1="410" y1="110" x2="910" y2="110" stroke="#00B4FF" strokeWidth="3" strokeOpacity="0.2" />
            
            {/* Bottom Horizontal Bridge: Performance Insight (Right to Left) */}
            <line x1="910" y1="590" x2="410" y2="590" stroke="#FF1493" strokeWidth="3" strokeOpacity="0.2" />

            {/* Left Vertical Track 1: Concept Input (UP) */}
            <line x1="185" y1="505" x2="185" y2="195" stroke="#FF1493" strokeWidth="2.5" strokeOpacity="0.2" />

            {/* Left Vertical Track 2: Asset Support (DOWN) */}
            <line x1="245" y1="195" x2="245" y2="505" stroke="#00B4FF" strokeWidth="2.5" strokeDasharray="6 6" strokeOpacity="0.2" />

            {/* Right Vertical Track 1: Attribution (UP) */}
            <line x1="1075" y1="505" x2="1075" y2="195" stroke="#FF1493" strokeWidth="2.5" strokeDasharray="6 6" strokeOpacity="0.2" />

            {/* Right Vertical Track 2: Data Feed (DOWN) */}
            <line x1="1135" y1="195" x2="1135" y2="505" stroke="#00B4FF" strokeWidth="2.5" strokeOpacity="0.2" />

            {/* Diagonal AI Integration Tracks into Center Hub (660, 350) */}
            <line x1="410" y1="150" x2="540" y2="265" stroke="#4B00B5" strokeWidth="2.5" strokeOpacity="0.25" />
            <line x1="410" y1="550" x2="540" y2="435" stroke="#FF1493" strokeWidth="2.5" strokeOpacity="0.25" />
            <line x1="910" y1="150" x2="780" y2="265" stroke="#00B4FF" strokeWidth="2.5" strokeOpacity="0.25" />
            <line x1="910" y1="550" x2="780" y2="435" stroke="#4B00B5" strokeWidth="2.5" strokeOpacity="0.25" />

            {/* ========================================================= */}
            {/* --- MULTI-LAYERED GLOWING LASER STICKS & DATA STREAMS --- */}
            {/* ========================================================= */}

            {/* Top Horizontal Bridge: Amplification (Dual flow streams) */}
            <line
              x1="410"
              y1="110"
              x2="910"
              y2="110"
              stroke="url(#gocreative-glow-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#neon-stick-glow)"
              className="animate-circuit-stick-fast"
            />
            <line
              x1="410"
              y1="110"
              x2="910"
              y2="110"
              stroke="url(#gocreative-glow-cyan)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#neon-stick-glow)"
              className="animate-circuit-stream"
            />

            {/* Bottom Horizontal Bridge: Performance Insight (Dual flow streams) */}
            <line
              x1="910"
              y1="590"
              x2="410"
              y2="590"
              stroke="url(#gocreative-glow-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#neon-stick-glow)"
              className="animate-circuit-stick-fast"
            />
            <line
              x1="910"
              y1="590"
              x2="410"
              y2="590"
              stroke="url(#gocreative-glow-pink)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#neon-stick-glow)"
              className="animate-circuit-stream"
            />

            {/* Left Vertical UP Flowing Stick (Concept Input) */}
            <line
              x1="185"
              y1="505"
              x2="185"
              y2="195"
              stroke="url(#gocreative-glow-pink)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#neon-stick-glow)"
              className="animate-circuit-stick"
            />
            <line
              x1="185"
              y1="505"
              x2="185"
              y2="195"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-circuit-stream"
            />

            {/* Left Vertical DOWN Flowing Stick (Asset Support) */}
            <line
              x1="245"
              y1="195"
              x2="245"
              y2="505"
              stroke="url(#gocreative-glow-cyan)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#neon-stick-glow)"
              className="animate-circuit-stick-slow"
            />
            <line
              x1="245"
              y1="195"
              x2="245"
              y2="505"
              stroke="#00B4FF"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-circuit-stream"
            />

            {/* Right Vertical UP Flowing Stick (Attribution) */}
            <line
              x1="1075"
              y1="505"
              x2="1075"
              y2="195"
              stroke="url(#gocreative-glow-pink)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#neon-stick-glow)"
              className="animate-circuit-stick-slow"
            />
            <line
              x1="1075"
              y1="505"
              x2="1075"
              y2="195"
              stroke="#FF1493"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-circuit-stream"
            />

            {/* Right Vertical DOWN Flowing Stick (Data Feed) */}
            <line
              x1="1135"
              y1="195"
              x2="1135"
              y2="505"
              stroke="url(#gocreative-glow-cyan)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#neon-stick-glow)"
              className="animate-circuit-stick"
            />
            <line
              x1="1135"
              y1="195"
              x2="1135"
              y2="505"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-circuit-stream"
            />

            {/* Diagonal Flowing Conduits Into & Out of Center Integration Engine */}
            {/* Top-Left to Hub */}
            <line
              x1="410"
              y1="150"
              x2="540"
              y2="265"
              stroke="url(#gocreative-glow-grad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              filter="url(#neon-stick-glow)"
              className="animate-circuit-stick"
            />
            <line
              x1="410"
              y1="150"
              x2="540"
              y2="265"
              stroke="#00B4FF"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-circuit-stream-reverse"
            />

            {/* Bottom-Left to Hub */}
            <line
              x1="410"
              y1="550"
              x2="540"
              y2="435"
              stroke="url(#gocreative-glow-grad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              filter="url(#neon-stick-glow)"
              className="animate-circuit-stick-slow"
            />
            <line
              x1="410"
              y1="550"
              x2="540"
              y2="435"
              stroke="#FF1493"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-circuit-stream"
            />

            {/* Top-Right to Hub */}
            <line
              x1="910"
              y1="150"
              x2="780"
              y2="265"
              stroke="url(#gocreative-glow-grad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              filter="url(#neon-stick-glow)"
              className="animate-circuit-stick-reverse"
            />
            <line
              x1="910"
              y1="150"
              x2="780"
              y2="265"
              stroke="#00B4FF"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-circuit-stream"
            />

            {/* Bottom-Right to Hub */}
            <line
              x1="910"
              y1="550"
              x2="780"
              y2="435"
              stroke="url(#gocreative-glow-grad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              filter="url(#neon-stick-glow)"
              className="animate-circuit-stick-fast"
            />
            <line
              x1="910"
              y1="550"
              x2="780"
              y2="435"
              stroke="#FF1493"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-circuit-stream-reverse"
            />

            {/* ========================================================= */}
            {/* --- GLOWING JUNCTION NODES ON ALL PATH INTERSECTIONS --- */}
            {/* ========================================================= */}
            {/* Card Junction Dots */}
            <circle cx="410" cy="110" r="6" fill="#00B4FF" className="animate-node-pulse" />
            <circle cx="910" cy="110" r="6" fill="#00B4FF" className="animate-node-pulse" />
            <circle cx="410" cy="590" r="6" fill="#FF1493" className="animate-node-pulse" />
            <circle cx="910" cy="590" r="6" fill="#FF1493" className="animate-node-pulse" />
            <circle cx="185" cy="195" r="5" fill="#FF1493" className="animate-node-pulse" />
            <circle cx="245" cy="195" r="5" fill="#00B4FF" className="animate-node-pulse" />
            <circle cx="185" cy="505" r="5" fill="#FF1493" className="animate-node-pulse" />
            <circle cx="245" cy="505" r="5" fill="#00B4FF" className="animate-node-pulse" />
            <circle cx="1075" cy="195" r="5" fill="#FF1493" className="animate-node-pulse" />
            <circle cx="1135" cy="195" r="5" fill="#00B4FF" className="animate-node-pulse" />
            <circle cx="1075" cy="505" r="5" fill="#FF1493" className="animate-node-pulse" />
            <circle cx="1135" cy="505" r="5" fill="#00B4FF" className="animate-node-pulse" />

            {/* Center Engine Boundary Nodes */}
            <circle cx="540" cy="265" r="7" fill="#00B4FF" className="animate-node-pulse" />
            <circle cx="540" cy="435" r="7" fill="#FF1493" className="animate-node-pulse" />
            <circle cx="780" cy="265" r="7" fill="#00B4FF" className="animate-node-pulse" />
            <circle cx="780" cy="435" r="7" fill="#FF1493" className="animate-node-pulse" />
          </svg>

          {/* ========================================================= */}
          {/* CENTER HUB: GROWTH CREATIVE INTEGRATION ENGINE */}
          {/* ========================================================= */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="relative flex items-center justify-center">
              {/* Rotating Outer Tech Ring 1 */}
              <div className="absolute w-[284px] h-[284px] rounded-full border-2 border-dashed border-[#00B4FF]/40 animate-core-spin pointer-events-none" />
              {/* Rotating Outer Tech Ring 2 */}
              <div className="absolute w-[304px] h-[304px] rounded-full border border-dotted border-[#FF1493]/35 animate-core-spin-reverse pointer-events-none" />
              {/* Glowing Ambient Halo */}
              <div className="absolute w-[240px] h-[240px] rounded-full gocreative-gradient-bg opacity-50 blur-2xl group-hover:opacity-80 transition-opacity pointer-events-none" />

              {/* Main Core Orb */}
              <div className="w-[244px] h-[244px] rounded-full gocreative-gradient-bg text-white flex flex-col items-center justify-center text-center shadow-[0_0_70px_rgba(255,20,147,0.7)] border-[6px] border-white/40 transform hover:scale-105 transition-all duration-500 relative group cursor-pointer z-10">
                <div className="relative z-10 flex flex-col items-center px-4">
                  <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/25 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38EF7D] animate-ping" />
                    <span className="text-[10px] font-extrabold tracking-widest text-[#38EF7D] uppercase">
                      ACTIVE CORE
                    </span>
                  </div>
                  <span className="font-black text-2xl xl:text-[26px] leading-tight drop-shadow tracking-tight">
                    GoCreative
                  </span>
                  <span className="font-extrabold text-xl xl:text-2xl leading-tight text-white/95">
                    AI Growth
                  </span>
                  <span className="text-xs font-bold text-white mt-2.5 uppercase tracking-wider bg-black/60 px-4 py-1.5 rounded-full border border-white/30 shadow-inner">
                    Integration Engine
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* HORIZONTAL & VERTICAL PILL BADGES ON TRACKS */}
          {/* ========================================================= */}

          {/* Amplification Pill Badge (Top Horizontal Bridge) */}
          <div className="absolute top-[94px] left-1/2 -translate-x-1/2 z-20">
            <div className="bg-[#0A1F44]/95 text-[#00B4FF] text-xs font-extrabold px-6 py-2 rounded-full shadow-2xl border border-[#00B4FF]/60 tracking-wider flex items-center gap-2 backdrop-blur-md transform hover:scale-105 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
              Amplification
            </div>
          </div>

          {/* Performance Insight Pill Badge (Bottom Horizontal Bridge) */}
          <div className="absolute top-[574px] left-1/2 -translate-x-1/2 z-20">
            <div className="bg-[#0A1F44]/95 text-[#FF1493] text-xs font-extrabold px-6 py-2 rounded-full shadow-2xl border border-[#FF1493]/60 tracking-wider flex items-center gap-2 backdrop-blur-md transform hover:scale-105 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1493] animate-pulse" />
              Performance Insight
            </div>
          </div>

          {/* Concept Input Pill Badge (Left Vertical Track UP) */}
          <div className="absolute top-[338px] left-[130px] z-20">
            <div className="bg-[#0A1F44]/95 text-[#FF1493] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-2xl border border-[#FF1493]/60 backdrop-blur-md flex items-center gap-1.5">
              <span className="text-[10px]">↑</span> Concept Input
            </div>
          </div>

          {/* Asset Support Pill Badge (Left Vertical Track DOWN) */}
          <div className="absolute top-[338px] left-[210px] z-20">
            <div className="bg-[#0A1F44]/95 text-[#00B4FF] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-2xl border border-[#00B4FF]/60 backdrop-blur-md flex items-center gap-1.5">
              <span className="text-[10px]">↓</span> Asset Support
            </div>
          </div>

          {/* Attribution Pill Badge (Right Vertical Track UP) */}
          <div className="absolute top-[338px] right-[210px] z-20">
            <div className="bg-[#0A1F44]/95 text-[#FF1493] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-2xl border border-[#FF1493]/60 backdrop-blur-md flex items-center gap-1.5">
              <span className="text-[10px]">↑</span> Attribution
            </div>
          </div>

          {/* Data Feed Pill Badge (Right Vertical Track DOWN) */}
          <div className="absolute top-[338px] right-[130px] z-20">
            <div className="bg-[#0A1F44]/95 text-[#00B4FF] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-2xl border border-[#00B4FF]/60 backdrop-blur-md flex items-center gap-1.5">
              <span className="text-[10px]">↓</span> Data Feed
            </div>
          </div>

          {/* ========================================================= */}
          {/* FOUR QUADRANT / PIPELINE CARDS (BALANCED WIDE BOX SIZES) */}
          {/* ========================================================= */}

          {/* 1. TOP-LEFT: Creators & Influencers */}
          <div className="absolute top-6 left-6 w-[360px] xl:w-[390px] bg-[#141E38]/95 backdrop-blur-2xl rounded-[28px] p-7 shadow-2xl border border-white/15 z-20 hover:border-[#FF1493] hover:shadow-[0_0_35px_rgba(255,20,147,0.35)] transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF1493]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FF1493]/20 text-[#FF1493] flex items-center justify-center border border-[#FF1493]/40 group-hover:scale-110 transition-transform shadow-lg shadow-[#FF1493]/10">
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
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF1493] bg-[#FF1493]/10 px-2.5 py-1 rounded-full border border-[#FF1493]/30">
                Synergy
              </span>
            </div>
            <p className="text-white/85 text-sm leading-relaxed relative z-10 font-normal">
              We have developed industry-leading best practices to ensure
              creative and paid social optimization work in synergy to scale ad
              spend profitably.
            </p>
          </div>

          {/* 2. TOP-RIGHT: Paid Media */}
          <div className="absolute top-6 right-6 w-[360px] xl:w-[390px] bg-[#141E38]/95 backdrop-blur-2xl rounded-[28px] p-7 shadow-2xl border border-white/15 z-20 hover:border-[#00B4FF] hover:shadow-[0_0_35px_rgba(0,180,255,0.35)] transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#00B4FF]/20 text-[#00B4FF] flex items-center justify-center border border-[#00B4FF]/40 group-hover:scale-110 transition-transform shadow-lg shadow-[#00B4FF]/10">
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
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00B4FF] bg-[#00B4FF]/10 px-2.5 py-1 rounded-full border border-[#00B4FF]/30">
                Scale
              </span>
            </div>
            <p className="text-white/85 text-sm leading-relaxed relative z-10 font-normal">
              Strategic media buying across Meta, TikTok, YouTube, and beyond.
              Optimized budget allocation and continuous performance monitoring.
            </p>
          </div>

          {/* 3. BOTTOM-LEFT: Creative Strategy */}
          <div className="absolute bottom-6 left-6 w-[360px] xl:w-[390px] bg-[#141E38]/95 backdrop-blur-2xl rounded-[28px] p-7 shadow-2xl border border-white/15 z-20 hover:border-[#FF1493] hover:shadow-[0_0_35px_rgba(255,20,147,0.35)] transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF1493]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FF1493]/20 text-[#FF1493] flex items-center justify-center border border-[#FF1493]/40 group-hover:scale-110 transition-transform shadow-lg shadow-[#FF1493]/10">
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
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF1493] bg-[#FF1493]/10 px-2.5 py-1 rounded-full border border-[#FF1493]/30">
                Volume
              </span>
            </div>
            <p className="text-white/85 text-sm leading-relaxed relative z-10 font-normal">
              Research-driven concepts produced at scale. Hybrid studio and
              creator production delivers volume, variety, and platform-native
              formats.
            </p>
          </div>

          {/* 4. BOTTOM-RIGHT: Measurement */}
          <div className="absolute bottom-6 right-6 w-[360px] xl:w-[390px] bg-[#141E38]/95 backdrop-blur-2xl rounded-[28px] p-7 shadow-2xl border border-white/15 z-20 hover:border-[#00B4FF] hover:shadow-[0_0_35px_rgba(0,180,255,0.35)] transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#00B4FF]/20 text-[#00B4FF] flex items-center justify-center border border-[#00B4FF]/40 group-hover:scale-110 transition-transform shadow-lg shadow-[#00B4FF]/10">
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
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00B4FF] bg-[#00B4FF]/10 px-2.5 py-1 rounded-full border border-[#00B4FF]/30">
                Loop
              </span>
            </div>
            <p className="text-white/85 text-sm leading-relaxed relative z-10 font-normal">
              Performance analysis that closes the loop. Real-time data informs
              creative strategy and media optimization for continuous
              improvement.
            </p>
          </div>
        </div>

        {/* ============================================================= */}
        {/* MOBILE & TABLET LAYOUT (< LG) - FULLY ANIMATED PIPELINE */}
        {/* ============================================================= */}
        <div className="lg:hidden flex flex-col gap-8 items-center w-full">
          {/* Center Hub Banner on Mobile/Tablet */}
          <div className="w-full max-w-[420px] gocreative-gradient-bg text-white rounded-3xl py-8 px-6 text-center shadow-[0_0_50px_rgba(255,20,147,0.6)] border-2 border-white/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="inline-flex items-center gap-2 bg-black/40 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#38EF7D] mb-2 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38EF7D] animate-ping" />
              <span>ACTIVE CORE</span>
            </div>
            <h3 className="font-black text-3xl">GoCreative AI Growth</h3>
            <p className="text-xs text-white/95 mt-1.5 uppercase tracking-widest font-black bg-black/30 py-1.5 px-4 rounded-full w-fit mx-auto border border-white/20">
              Integration Engine
            </p>
          </div>

          {/* Animated Flowing Conduit Bar for Mobile */}
          <div className="w-full max-w-[420px] h-14 flex justify-between items-center relative overflow-hidden my-[-16px]">
            <svg className="w-full h-14" viewBox="0 0 380 56" fill="none">
              <defs>
                <linearGradient id="mob-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF1493" />
                  <stop offset="50%" stopColor="#4B00B5" />
                  <stop offset="100%" stopColor="#00B4FF" />
                </linearGradient>
              </defs>
              {/* Vertical Animated Lines connecting down */}
              <line x1="90" y1="0" x2="90" y2="56" stroke="url(#mob-flow-grad)" strokeWidth="4" className="animate-circuit-stick" strokeLinecap="round" />
              <line x1="190" y1="0" x2="190" y2="56" stroke="url(#mob-flow-grad)" strokeWidth="4" className="animate-circuit-stick-fast" strokeLinecap="round" />
              <line x1="290" y1="0" x2="290" y2="56" stroke="url(#mob-flow-grad)" strokeWidth="4" className="animate-circuit-stick-slow" strokeLinecap="round" />
            </svg>
            {/* Connection Badges across the pipeline */}
            <div className="absolute inset-0 flex items-center justify-around px-2 pointer-events-none">
              <span className="bg-[#0A1F44] text-[#00B4FF] text-[10px] font-extrabold px-3 py-1 rounded-full border border-[#00B4FF]/50 shadow-md">
                Amplification
              </span>
              <span className="bg-[#0A1F44] text-[#FF1493] text-[10px] font-extrabold px-3 py-1 rounded-full border border-[#FF1493]/50 shadow-md">
                Performance Insight
              </span>
            </div>
          </div>

          {/* Grid of Cards for Mobile/Tablet */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#141E38]/95 rounded-[28px] p-7 shadow-xl border border-white/20 hover:border-[#FF1493] transition-all relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FF1493]/20 text-[#FF1493] flex items-center justify-center border border-[#FF1493]/40">
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
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF1493] bg-[#FF1493]/10 px-2.5 py-1 rounded-full border border-[#FF1493]/30">
                  Concept Input
                </span>
              </div>
              <p className="text-white/85 text-sm leading-relaxed font-normal">
                We have developed industry-leading best practices to ensure
                creative and paid social optimization work in synergy to scale ad
                spend profitably.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#141E38]/95 rounded-[28px] p-7 shadow-xl border border-white/20 hover:border-[#00B4FF] transition-all relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#00B4FF]/20 text-[#00B4FF] flex items-center justify-center border border-[#00B4FF]/40">
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
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00B4FF] bg-[#00B4FF]/10 px-2.5 py-1 rounded-full border border-[#00B4FF]/30">
                  Data Feed
                </span>
              </div>
              <p className="text-white/85 text-sm leading-relaxed font-normal">
                Strategic media buying across Meta, TikTok, YouTube, and beyond.
                Optimized budget allocation and continuous performance
                monitoring.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#141E38]/95 rounded-[28px] p-7 shadow-xl border border-white/20 hover:border-[#FF1493] transition-all relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FF1493]/20 text-[#FF1493] flex items-center justify-center border border-[#FF1493]/40">
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
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF1493] bg-[#FF1493]/10 px-2.5 py-1 rounded-full border border-[#FF1493]/30">
                  Asset Support
                </span>
              </div>
              <p className="text-white/85 text-sm leading-relaxed font-normal">
                Research-driven concepts produced at scale. Hybrid studio and
                creator production delivers volume, variety, and platform-native
                formats.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#141E38]/95 rounded-[28px] p-7 shadow-xl border border-white/20 hover:border-[#00B4FF] transition-all relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#00B4FF]/20 text-[#00B4FF] flex items-center justify-center border border-[#00B4FF]/40">
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
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00B4FF] bg-[#00B4FF]/10 px-2.5 py-1 rounded-full border border-[#00B4FF]/30">
                  Attribution
                </span>
              </div>
              <p className="text-white/85 text-sm leading-relaxed font-normal">
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

