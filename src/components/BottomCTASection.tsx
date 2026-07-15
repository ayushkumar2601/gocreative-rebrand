"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BottomCTASection() {
  return (
    <section className="w-full bg-[#060B18] py-28 sm:py-36 px-4 sm:px-6 relative overflow-hidden select-none border-t border-white/15">
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF1493]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00B4FF]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[900px] mx-auto text-center relative z-10">
        {/* Decorative Top-Left Sparkle */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 left-[8%] sm:left-[12%] text-[#FF1493] hidden sm:block"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#FF1493]/20 border border-[#FF1493]/40 flex items-center justify-center shadow-[0_0_25px_rgba(255,20,147,0.5)] text-xl">
            🚀
          </div>
        </motion.div>

        {/* Decorative Top-Right Sparkles */}
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 right-[10%] sm:right-[15%] text-[#00B4FF]"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#00B4FF]/20 border border-[#00B4FF]/40 flex items-center justify-center shadow-[0_0_25px_rgba(0,180,255,0.5)] text-lg">
            ⚡
          </div>
        </motion.div>

        {/* Decorative Bottom-Left Sparkle */}
        <motion.div
          animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-[12%] sm:left-[18%] text-[#00B4FF]"
        >
          <div className="w-9 h-9 rounded-full bg-[#4B00B5]/40 border border-white/30 flex items-center justify-center text-sm shadow">
            ✨
          </div>
        </motion.div>

        {/* Decorative Bottom-Right Icon */}
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [12, 22, 12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 right-[12%] sm:right-[16%] hidden sm:block"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#FF1493]/20 border border-[#FF1493]/40 flex items-center justify-center shadow-[0_0_25px_rgba(255,20,147,0.5)] text-xl">
            📈
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative inline-block"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FF1493] mb-5 border border-[#FF1493]/30">
            <span>SCALE PROFITABLY WITH AI</span>
          </div>
          <h2 className="text-white font-black text-3xl sm:text-5xl lg:text-[60px] leading-[1.08] tracking-tight uppercase">
            LOWER YOUR CAC WITH <br />
            <span className="gocreative-gradient-text">AI PERFORMANCE ADS</span>
          </h2>
          {/* Glowing underline graphic */}
          <div className="flex justify-center mt-3">
            <div className="w-48 sm:w-72 h-1.5 gocreative-gradient-bg rounded-full shadow-[0_0_20px_rgba(255,20,147,0.8)]" />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/80 font-bold text-base sm:text-lg lg:text-xl mt-6 tracking-tight max-w-xl mx-auto"
        >
          Build a high-velocity AI creative system that scales your revenue and outperforms competitors on Meta & TikTok.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="inline-flex items-center gap-3.5 gocreative-gradient-bg text-white rounded-full px-10 py-5 text-base sm:text-lg font-black shadow-[0_0_40px_rgba(255,20,147,0.6)] transition-all duration-200 group border border-white/20 cursor-pointer"
          >
            <span>START YOUR GROWTH SYSTEM</span>
            <svg
              className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
