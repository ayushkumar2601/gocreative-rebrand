"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BorderGlow from "./BorderGlow";

interface CaseStudyCard {
  id: number;
  tag: string;
  brand: string;
  category: string;
  challenge: string;
  metrics: {
    value: string;
    label: string;
    icon: string;
  }[];
  // Glow and Color Gradient configuration for the Left-to-Right progression
  glowColor: string;
  borderColor: string;
  borderHoverColor: string;
  headerGradient: string;
  tagGradient: string;
  waveColor: string;
  // React Bits BorderGlow dynamic cursor-tracking configuration
  borderGlowHsl: string;
  borderGlowColors: string[];
  domain: string | null;
}

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState("All Case Studies");

  const tabs = [
    { name: "All Case Studies", icon: ":::" },
    { name: "D2C Brands", icon: "🛍" },
    { name: "Performance Marketing", icon: "📈" },
    { name: "Creative & Content", icon: "✎" },
    { name: "Growth Strategy", icon: "⚡" },
  ];

  const caseStudies: CaseStudyCard[] = [
    {
      id: 1,
      tag: "Skincare",
      brand: "Juhst",
      category: "Performance Marketing",
      challenge: "Low ROAS and high CAC across paid campaigns",
      metrics: [
        { value: "5.6X", label: "ROAS Achieved", icon: "📈" },
        { value: "-62%", label: "CAC Reduced", icon: "👤" },
        { value: "+214%", label: "Revenue Growth", icon: "₹" },
      ],
      // Leftmost: Pinkish Glow (#FF1493)
      glowColor: "rgba(255, 20, 147, 0.28)",
      borderColor: "border-[#FF1493]/40",
      borderHoverColor: "group-hover:border-[#FF1493]",
      headerGradient: "from-[#FF1493]/35 via-[#1E1B4B] to-[#0A1024]",
      tagGradient: "from-[#FF1493] to-[#D91499]",
      waveColor: "#FF1493",
      borderGlowHsl: "330 100 54",
      borderGlowColors: ["#FF1493", "#D91499", "#4B00B5"],
      domain: "juhst.com",
    },
    {
      id: 2,
      tag: "Health & Wellness",
      brand: "Nabhi Sutra",
      category: "Meta Ads + Creative",
      challenge: "Low repeat rate and inconsistent ad performance",
      metrics: [
        { value: "3.8X", label: "ROAS Achieved", icon: "📈" },
        { value: "+47%", label: "Repeat Rate", icon: "🔄" },
        { value: "+158%", label: "Revenue Growth", icon: "₹" },
      ],
      // Mid-Left: Pink-Purple Glow (#D91499)
      glowColor: "rgba(217, 20, 153, 0.26)",
      borderColor: "border-[#D91499]/40",
      borderHoverColor: "group-hover:border-[#D91499]",
      headerGradient: "from-[#D91499]/35 via-[#1E1B4B] to-[#0A1024]",
      tagGradient: "from-[#D91499] to-[#9D14C4]",
      waveColor: "#D91499",
      borderGlowHsl: "315 100 48",
      borderGlowColors: ["#D91499", "#9D14C4", "#4B00B5"],
      domain: "nabhisutra.com",
    },
    {
      id: 3,
      tag: "Food & Beverage",
      brand: "Jaggercane",
      category: "Performance Marketing",
      challenge: "Scaling profitably while keeping MER above benchmark",
      metrics: [
        { value: "4.9X", label: "ROAS Achieved", icon: "📈" },
        { value: "+91%", label: "MER Improvement", icon: "📊" },
        { value: "+187%", label: "Revenue Growth", icon: "₹" },
      ],
      // Center: Deep Purple Gradient Glow (#9D14C4)
      glowColor: "rgba(157, 20, 196, 0.3)",
      borderColor: "border-[#9D14C4]/45",
      borderHoverColor: "group-hover:border-[#9D14C4]",
      headerGradient: "from-[#9D14C4]/35 via-[#1E1B4B] to-[#0A1024]",
      tagGradient: "from-[#9D14C4] to-[#4B00B5]",
      waveColor: "#9D14C4",
      borderGlowHsl: "286 100 42",
      borderGlowColors: ["#9D14C4", "#FF1493", "#00B4FF"],
      domain: "jaggercane.com",
    },
    {
      id: 4,
      tag: "Fashion",
      brand: "Fae Beauty",
      category: "Creative & Content",
      challenge: "Low engagement and weak creative strategy",
      metrics: [
        { value: "2.3X", label: "Engagement", icon: "💜" },
        { value: "-36%", label: "CPA Reduced", icon: "📞" },
        { value: "+121%", label: "Revenue Growth", icon: "₹" },
      ],
      // Mid-Right: Purple-Blue Glow (#0073E6)
      glowColor: "rgba(0, 115, 230, 0.26)",
      borderColor: "border-[#0073E6]/40",
      borderHoverColor: "group-hover:border-[#0073E6]",
      headerGradient: "from-[#0073E6]/35 via-[#0F172A] to-[#0A1024]",
      tagGradient: "from-[#4B00B5] to-[#0073E6]",
      waveColor: "#0073E6",
      borderGlowHsl: "210 100 45",
      borderGlowColors: ["#0073E6", "#4B00B5", "#00B4FF"],
      domain: "faebeauty.in",
    },
    {
      id: 5,
      tag: "Education",
      brand: "Promote Education",
      category: "Lead Generation",
      challenge: "High CPL and low quality counselling leads",
      metrics: [
        { value: "-55%", label: "CPL Reduced", icon: "📞" },
        { value: "+3.4X", label: "Qualified Leads", icon: "👤" },
        { value: "+162%", label: "Admissions Growth", icon: "₹" },
      ],
      // Rightmost: Electric Blue Glow (#00B4FF)
      glowColor: "rgba(0, 180, 255, 0.3)",
      borderColor: "border-[#00B4FF]/45",
      borderHoverColor: "group-hover:border-[#00B4FF]",
      headerGradient: "from-[#00B4FF]/38 via-[#0F172A] to-[#0A1024]",
      tagGradient: "from-[#0073E6] to-[#00B4FF]",
      waveColor: "#00B4FF",
      borderGlowHsl: "197 100 50",
      borderGlowColors: ["#00B4FF", "#0073E6", "#4B00B5"],
      domain: "promoteducation.com",
    },
  ];

  const filteredStudies =
    activeTab === "All Case Studies"
      ? caseStudies
      : caseStudies.filter((cs) => {
          if (activeTab === "D2C Brands") return cs.tag === "Skincare" || cs.tag === "Food & Beverage" || cs.tag === "Fashion";
          if (activeTab === "Performance Marketing") return cs.category.includes("Performance") || cs.category.includes("Meta");
          if (activeTab === "Creative & Content") return cs.category.includes("Creative");
          if (activeTab === "Growth Strategy") return cs.category.includes("Lead") || cs.category.includes("Performance");
          return true;
        });

  return (
    <section id="case-studies" className="w-full bg-[#030611] text-white py-12 sm:py-16 relative overflow-hidden select-none border-t border-white/10">
      {/* FULL DARK BACKGROUND with ONLY Gradient Ambient Glows (Pink on Leftmost -> Blue on Rightmost) */}
      <div className="absolute top-1/3 -left-20 w-[650px] h-[650px] bg-[#FF1493]/16 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[700px] bg-[#4B00B5]/18 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[650px] h-[650px] bg-[#00B4FF]/16 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#0A1226]/90 px-4.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-[#FF1493] mb-5 border border-[#FF1493]/40 shadow-lg">
            <span>OUR IMPACT</span>
          </div>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[54px] leading-[1.08] tracking-tight mb-4">
            Real Brands. <span className="gocreative-gradient-text">Real Results.</span>
          </h2>
          <p className="text-white/75 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Data-backed growth stories from brands that trusted our system and saw <span className="text-[#A5B4FC] font-bold">compounding results.</span>
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-6 pt-2 mb-12 no-scrollbar justify-start xl:justify-center scroll-smooth"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 border ${
                  isActive
                    ? "bg-gradient-to-r from-[#FF1493]/25 via-[#4B00B5]/30 to-[#00B4FF]/25 text-white border-[#FF1493] shadow-[0_0_25px_rgba(255,20,147,0.4)] scale-105"
                    : "bg-[#0C152E]/80 hover:bg-[#121E42] text-white/80 hover:text-white border-white/15 hover:border-[#00B4FF]/60"
                }`}
              >
                <span className={isActive ? "text-[#FF1493] font-black" : "text-white/60 font-black"}>
                  {tab.icon}
                </span>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* 5 Case Study Cards wrapped in React Bits BorderGlow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="w-full h-full flex"
              >
                <BorderGlow
                  edgeSensitivity={35}
                  glowColor={study.borderGlowHsl}
                  backgroundColor="#0A1024"
                  borderRadius={28}
                  glowRadius={35}
                  glowIntensity={1.2}
                  coneSpread={30}
                  colors={study.borderGlowColors}
                  className="w-full h-full group hover:scale-[1.02] transition-transform duration-500 shadow-2xl"
                >
                  <div className="w-full h-full flex flex-col justify-between rounded-[inherit] overflow-hidden">
                    {/* Internal Glow Blob right inside top of card */}
                    <div
                      className="absolute top-0 right-0 w-44 h-44 rounded-full blur-[55px] pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                      style={{ background: study.glowColor }}
                    />

                    {/* Top Half / Hero Gradient Header */}
                    <div className={`relative h-[180px] sm:h-[195px] w-full bg-gradient-to-br ${study.headerGradient} overflow-hidden flex items-center justify-center p-6 shrink-0`}>
                      {/* Category Badge on Top Left with Color Progression */}
                      <div className={`absolute top-3.5 left-3.5 z-20 bg-gradient-to-r ${study.tagGradient} text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-lg`}>
                        {study.tag}
                      </div>

                      {/* Brand Logo Graphic Overlay */}
                      <div className="absolute inset-0 bg-black/35 z-10" />
                      <div className="relative z-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 w-full h-full p-8">
                        {study.domain ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img 
                            src={`https://www.google.com/s2/favicons?domain=${study.domain}&sz=256`} 
                            alt={study.brand} 
                            onError={(e) => {
                              // Fallback to text if image fails to load
                              e.currentTarget.style.display = 'none';
                              const span = document.createElement('span');
                              span.className = 'text-3xl font-black tracking-wider text-white opacity-95 drop-shadow-md uppercase text-center';
                              span.innerText = study.brand;
                              e.currentTarget.parentElement?.appendChild(span);
                            }}
                            className="max-h-full max-w-[80%] object-contain drop-shadow-2xl" 
                          />
                        ) : (
                          <span className="text-3xl font-black tracking-wider text-white opacity-95 drop-shadow-md uppercase text-center">
                            {study.brand}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Middle Brand Details & Challenge Block */}
                    <div className="p-5 flex flex-col items-start text-left flex-grow relative z-10">
                      <h3 className="font-black text-xl sm:text-2xl text-white group-hover:text-white transition-colors leading-tight">
                        {study.brand}
                      </h3>
                      <span className="text-xs font-bold text-[#A5B4FC] mt-0.5 mb-3">
                        {study.category}
                      </span>

                      <span className="text-xs font-extrabold text-[#FF1493] uppercase tracking-wider">
                        Challenge:
                      </span>
                      <p className="text-xs text-white/75 leading-relaxed font-normal mt-1">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Bottom 3 Metrics Grid + Wave Chart */}
                    <div className="bg-[#060C1D] border-t border-white/10 p-4 pt-4 mt-auto flex flex-col justify-between relative z-10 shrink-0">
                      {/* 3 Circle Metrics */}
                      <div className="grid grid-cols-3 gap-2 text-center pb-3">
                        {study.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex flex-col items-center">
                            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 mb-1.5 text-xs shadow-inner">
                              {m.icon}
                            </div>
                            <span className="font-black text-base sm:text-lg text-white leading-tight">
                              {m.value}
                            </span>
                            <span className="text-[9px] font-bold text-white/60 uppercase mt-0.5 leading-none">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Advanced Animated Sparkline Chart */}
                      <div className="w-full pt-3 pb-1 border-t border-white/10 flex flex-col items-center justify-center relative group">
                        <svg
                          viewBox="0 0 200 50"
                          fill="none"
                          className="w-full h-10 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          {/* Grid Background */}
                          <path d="M0 10 L 200 10" stroke="white" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="3 3" />
                          <path d="M0 25 L 200 25" stroke="white" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="3 3" />
                          <path d="M0 40 L 200 40" stroke="white" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="3 3" />

                          {/* Gradient Area Fill (Animated Opacity) */}
                          <motion.path
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.3 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                            d="M0 42 C 15 42, 20 28, 35 34 C 50 40, 55 22, 70 28 C 85 34, 90 18, 105 24 C 120 30, 125 16, 140 22 C 155 28, 160 14, 175 20 C 190 26, 195 16, 200 16 L 200 50 L 0 50 Z"
                            fill={`url(#waveGradient-${study.id})`}
                          />

                          {/* Main Animated Neon Line */}
                          <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            d="M0 42 C 15 42, 20 28, 35 34 C 50 40, 55 22, 70 28 C 85 34, 90 18, 105 24 C 120 30, 125 16, 140 22 C 155 28, 160 14, 175 20 C 190 26, 195 16, 200 16"
                            stroke={study.waveColor}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ filter: `drop-shadow(0px 2px 4px ${study.waveColor}90)` }}
                          />

                          {/* Glowing Endpoint Dot */}
                          <motion.circle
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.3, type: "spring" }}
                            viewport={{ once: true }}
                            cx="200"
                            cy="16"
                            r="3.5"
                            fill="white"
                            stroke={study.waveColor}
                            strokeWidth="1.5"
                            style={{ filter: `drop-shadow(0px 0px 6px ${study.waveColor})` }}
                          />

                          <defs>
                            <linearGradient id={`waveGradient-${study.id}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={study.waveColor} />
                              <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Horizontal Strategy Call Banner Box wrapped in BorderGlow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[900px] mx-auto"
        >
          <BorderGlow
            edgeSensitivity={35}
            glowColor="330 100 54"
            backgroundColor="#0A1226"
            borderRadius={32}
            glowRadius={40}
            glowIntensity={1.2}
            coneSpread={30}
            colors={["#FF1493", "#4B00B5", "#00B4FF"]}
            className="w-full shadow-2xl transition-all duration-300 group"
          >
            <div className="w-full p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden rounded-[inherit]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF1493]/15 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#00B4FF]/15 via-transparent to-transparent pointer-events-none" />

              {/* Left Side: Icon + Text */}
              <div className="flex items-center gap-5 relative z-10 text-center sm:text-left">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#FF1493] to-[#4B00B5] flex items-center justify-center text-white text-2xl shadow-[0_0_25px_rgba(255,20,147,0.5)] shrink-0 group-hover:scale-110 transition-transform">
                  📈
                </div>
                <div>
                  <h3 className="font-black text-xl sm:text-2xl text-white leading-tight">
                    Your brand could be next.
                  </h3>
                  <p className="text-white/75 text-sm sm:text-base font-medium mt-0.5">
                    Let&apos;s build your growth story together.
                  </p>
                </div>
              </div>

              {/* Right Side: Book Strategy Call Button */}
              <a
                href="#book"
                className="relative z-10 bg-transparent hover:bg-white/10 text-white font-extrabold text-sm px-7 py-4 rounded-full border border-[#FF1493]/80 hover:border-[#00B4FF] flex items-center gap-3 transition-all shrink-0 shadow-[0_0_20px_rgba(255,20,147,0.25)] transform hover:scale-105 cursor-pointer"
              >
                <span>Book Strategy Call</span>
                <span className="text-[#FF1493] group-hover:text-[#00B4FF] text-base font-black transition-colors">→</span>
              </a>
            </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
}
