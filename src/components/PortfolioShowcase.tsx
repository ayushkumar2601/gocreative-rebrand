"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioShowcase() {
  const [activeOffset, setActiveOffset] = useState(0);

  const handlePrev = () => {
    setActiveOffset((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setActiveOffset((prev) => (prev < 1 ? prev + 1 : 1));
  };

  return (
    <section className="w-full bg-[#080D1A] text-white py-24 sm:py-32 relative overflow-hidden border-t border-white/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FF1493] mb-4 border border-[#FF1493]/30">
            <span>DATA-BACKED CREATIVE</span>
          </div>
          <h2 className="text-white font-black text-2xl sm:text-3xl lg:text-[40px] leading-tight tracking-tight uppercase">
            MOVE FAST, TEST SMARTER, WITH <span className="gocreative-gradient-text">AI CREATIVE</span> AND MEDIA EXECUTION
          </h2>
          <p className="text-white/75 text-sm sm:text-base mt-3 font-normal">
            We combine creative strategy with cutting-edge algorithmic paid media tactics to deliver exponential ROI.
          </p>

          <div className="mt-8">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 gocreative-gradient-bg text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-[0_0_25px_rgba(255,20,147,0.5)] transition-all transform hover:scale-105"
            >
              <span>Explore Full Portfolio</span>
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
        </motion.div>

        {/* Carousel / Showcase Container with Navigation Arrows */}
        <div className="relative flex items-center justify-between gap-3 sm:gap-6">
          {/* Left Navigation Arrow Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00B4FF] hover:bg-[#00B4FF]/80 text-[#060B18] flex items-center justify-center shadow-[0_0_20px_rgba(0,180,255,0.5)] z-20 shrink-0 cursor-pointer"
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
          </motion.button>

          {/* 4 Industry Smartphone Mockups Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-end">
            {/* CARD 1: FINANCE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="flex flex-col items-center group"
            >
              {/* Badge Header */}
              <div className="gocreative-gradient-bg text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg mb-4 border border-white/20">
                FINANCE
              </div>

              {/* Smartphone Mockup */}
              <div className="w-full max-w-[245px] h-[390px] sm:h-[430px] rounded-[36px] bg-[#060B18] border-[6px] border-[#1E293B] group-hover:border-[#00B4FF] transition-all duration-300 shadow-2xl overflow-hidden relative flex flex-col justify-between p-2.5">
                {/* Speaker Notch */}
                <div className="w-16 h-3 bg-black rounded-full mx-auto mt-1 z-20" />

                {/* Simulated Visual Content: Finance UGC Ad */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#060B18] flex flex-col justify-between p-4 text-white">
                  <div className="flex justify-between items-start pt-6">
                    <div className="w-10 h-10 rounded-full bg-[#00B4FF]/20 border border-[#00B4FF]/50 flex items-center justify-center text-xs">
                      📈
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded text-[8px] font-bold text-[#00B4FF] border border-[#00B4FF]/30">
                      AI REELS
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center gap-2 mb-8">
                    <div className="w-26 h-15 rounded-xl bg-gradient-to-tr from-[#4B00B5] to-[#FF1493] border border-white/40 shadow-xl flex flex-col justify-between p-2 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                      <span className="text-[7px] font-black tracking-widest text-white">
                        GOCREATIVE PAY
                      </span>
                      <div className="w-5 h-3 bg-[#00B4FF] rounded-xs" />
                    </div>

                    <div className="bg-white/95 text-[#060B18] px-3.5 py-1.5 rounded-xl shadow-lg text-center">
                      <p className="text-[10px] font-black leading-tight">
                        Instant Global Transfers
                        <br />
                        <span className="text-[#FF1493]">+ 82% Conversion Rate</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: SAAS & B2B */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="flex flex-col items-center group"
            >
              {/* Badge Header */}
              <div className="gocreative-gradient-bg text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg mb-4 border border-white/20">
                SAAS & B2B
              </div>

              {/* Smartphone Mockup */}
              <div className="w-full max-w-[245px] h-[390px] sm:h-[430px] rounded-[36px] bg-[#060B18] border-[6px] border-[#1E293B] group-hover:border-[#FF1493] transition-all duration-300 shadow-2xl overflow-hidden relative flex flex-col justify-between p-2.5">
                <div className="w-16 h-3 bg-black rounded-full mx-auto mt-1 z-20" />

                {/* Simulated Visual Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#141E38] via-[#0A1F44] to-[#060B18] flex flex-col justify-between p-3">
                  <div className="relative w-full h-[55%] rounded-2xl bg-[#1E293B] overflow-hidden flex flex-col items-center justify-end p-2 border border-white/10">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00B4FF] to-[#4B00B5] border-2 border-white/30 mb-2 relative flex items-center justify-center shadow-lg">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div className="bg-[#0A1F44] border border-[#00B4FF] px-3.5 py-0.5 rounded-full shadow-lg">
                      <span className="text-[#00B4FF] font-black text-xs uppercase tracking-widest">
                        AI SCALE
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-[#1E293B]/90 backdrop-blur-md rounded-xl p-3 shadow-lg text-white border border-white/15">
                    <div className="flex justify-between items-center text-[8px] font-bold text-white/70 mb-2">
                      <span>ROAS Performance</span>
                      <span className="text-[#00B4FF] font-black">+340%</span>
                    </div>
                    <div className="flex items-end justify-around h-16 gap-2">
                      <div className="w-4 h-10 bg-[#FF1493] rounded-t-sm animate-pulse" />
                      <div className="w-4 h-14 bg-[#4B00B5] rounded-t-sm" />
                      <div className="w-4 h-12 bg-[#00B4FF] rounded-t-sm animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 3: GAMING */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="flex flex-col items-center group"
            >
              {/* Badge Header */}
              <div className="gocreative-gradient-bg text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg mb-4 border border-white/20">
                GAMING & APPS
              </div>

              {/* Smartphone Mockup */}
              <div className="w-full max-w-[245px] h-[390px] sm:h-[430px] rounded-[36px] bg-[#060B18] border-[6px] border-[#1E293B] group-hover:border-[#00B4FF] transition-all duration-300 shadow-2xl overflow-hidden relative flex flex-col justify-between p-2.5">
                <div className="w-16 h-3 bg-black rounded-full mx-auto mt-1 z-20" />

                {/* Simulated Visual Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A0A3A] via-[#0F172A] to-[#060B18] flex flex-col justify-between items-center p-4">
                  <div className="w-full flex justify-around pt-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00B4FF] shadow-[0_0_12px_#00B4FF]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF1493] shadow-[0_0_12px_#FF1493]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00B4FF] shadow-[0_0_12px_#00B4FF]" />
                  </div>

                  <div className="w-full my-auto flex flex-col items-center">
                    <div className="w-28 h-28 rounded-3xl bg-gradient-to-tr from-[#FF1493] via-[#4B00B5] to-[#00B4FF] border-2 border-white/40 shadow-[0_0_30px_rgba(255,20,147,0.5)] flex items-center justify-center relative transform group-hover:rotate-6 transition-transform duration-300">
                      <span className="text-4xl">🎮</span>
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <span className="text-white font-black text-sm uppercase tracking-wider block">
                      Top 10 App Store
                    </span>
                    <span className="text-[#00B4FF] text-xs font-bold">
                      Viral UGC Campaign
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 4: E-COMMERCE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="flex flex-col items-center group"
            >
              {/* Badge Header */}
              <div className="gocreative-gradient-bg text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg mb-4 border border-white/20">
                E-COMMERCE
              </div>

              {/* Smartphone Mockup */}
              <div className="w-full max-w-[245px] h-[390px] sm:h-[430px] rounded-[36px] bg-[#060B18] border-[6px] border-[#1E293B] group-hover:border-[#FF1493] transition-all duration-300 shadow-2xl overflow-hidden relative flex flex-col justify-between p-2.5">
                <div className="w-16 h-3 bg-black rounded-full mx-auto mt-1 z-20" />

                {/* Simulated Visual Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#141E38] via-[#1E293B] to-[#060B18] flex flex-col justify-between p-3 text-white">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl py-1.5 px-3 text-center shadow-sm mt-5 border border-white/20">
                    <p className="text-[10px] font-black leading-tight text-[#00B4FF]">
                      DTC SCALE BOOST
                    </p>
                  </div>

                  <div className="w-full bg-[#1E293B] rounded-2xl p-3 shadow-xl border border-white/20 my-auto flex items-center justify-between">
                    <div className="w-9 h-18 rounded-xl bg-gradient-to-br from-[#FF1493] to-[#4B00B5] shadow-md border border-white/40 flex items-center justify-center text-lg">
                      ✨
                    </div>
                    <div className="flex flex-col">
                      <span className="font-extrabold text-sm text-white">
                        Glow AI Serum
                      </span>
                      <span className="text-[10px] text-[#00B4FF] font-bold">
                        3.8x ROAS Average
                      </span>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-[#0A1F44] border-2 border-[#FF1493] shadow-lg mx-auto mb-3 flex items-center justify-center text-xl">
                    🛍️
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Navigation Arrow Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            aria-label="Next slide"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00B4FF] hover:bg-[#00B4FF]/80 text-[#060B18] flex items-center justify-center shadow-[0_0_20px_rgba(0,180,255,0.5)] z-20 shrink-0 cursor-pointer"
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
          </motion.button>
        </div>
      </div>
    </section>
  );
}
