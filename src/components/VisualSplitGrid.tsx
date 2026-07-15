"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VisualSplitGrid() {
  return (
    <section className="w-full select-none overflow-hidden border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT PANEL: Tech Ambient Workspace & Notes App UI */}
        <div className="relative h-[420px] sm:h-[520px] bg-gradient-to-br from-[#1E1B4B] via-[#0F172A] to-[#060B18] p-6 sm:p-12 flex items-center justify-center overflow-hidden">
          {/* Simulated Workspace Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF1493]/20 via-transparent to-black/60 pointer-events-none" />

          {/* AI Notes UI Mockup Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-[380px] bg-[#0A1F44]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#00B4FF]/40 cursor-pointer group"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[#00B4FF] font-semibold text-xs mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF1493]" />
                <span className="font-bold tracking-wide">AI CREATIVE STRATEGY</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#00B4FF]/20 px-2 py-0.5 rounded text-[10px] font-black text-[#00B4FF] border border-[#00B4FF]/40">
                  LIVE
                </div>
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs text-white">
                  •••
                </div>
              </div>
            </div>

            {/* Timestamp */}
            <div className="text-left text-[11px] font-mono text-white/50 mb-3">
              ALGORITHM UPDATE: AUTO-DEPLOYED
            </div>

            {/* Note Headline */}
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3 group-hover:text-[#00B4FF] transition-colors">
              One concept ≠ one ad
            </h3>

            {/* Highlighted Callout Band */}
            <div className="bg-[#1E293B] border-l-4 border-[#FF1493] rounded-r-xl px-4 py-3 mb-6 shadow-md">
              <p className="text-xs sm:text-sm font-bold text-white/90">
                Here&apos;s how our AI stretches winning hooks into <span className="text-[#00B4FF]">250+ localized variants</span> instantly.
              </p>
            </div>

            {/* Bottom Toolbar Icons */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10 text-white/60">
              <span className="text-[11px] font-bold text-[#FF1493] uppercase tracking-wider">
                ⚡ HIGH VELOCITY TESTING
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-4 h-4 text-[#00B4FF]"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* RIGHT PANEL: Dark Tech Scene & Floating Speech Bubble */}
        <div className="relative h-[420px] sm:h-[520px] bg-gradient-to-br from-[#060B18] via-[#0A1F44] to-[#141E38] p-6 sm:p-12 flex items-center justify-center overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#00B4FF]/20 via-transparent to-black/60 pointer-events-none" />

          {/* Floating Speech Bubble Pill Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative z-10 gocreative-gradient-bg text-white rounded-full px-6 sm:px-8 py-5 shadow-[0_0_40px_rgba(255,20,147,0.5)] border border-white/30 flex items-center gap-3.5 cursor-pointer max-w-[420px]"
          >
            {/* Left Icon */}
            <div className="w-10 h-10 rounded-full bg-white text-[#060B18] flex items-center justify-center shadow-lg shrink-0 text-lg">
              🔥
            </div>

            {/* Speech Text */}
            <span className="font-extrabold text-base sm:text-lg tracking-tight uppercase">
              ad accounts we&apos;re obsessed with scaling
            </span>

            {/* Speech Bubble Pointer Tail */}
            <div className="absolute -bottom-3 left-14 w-6 h-6 gocreative-gradient-bg transform rotate-45 -z-10 border-r border-b border-white/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
