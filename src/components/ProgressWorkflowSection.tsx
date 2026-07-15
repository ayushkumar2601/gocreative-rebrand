"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProgressWorkflowSection() {
  return (
    <section className="w-full bg-[#F3F0FF] py-28 sm:py-40 px-4 sm:px-8 lg:px-12 relative overflow-hidden select-none border-t border-[#0A1F44]/10">
      {/* Background Decorative Tech Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(75, 0, 181, 0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#FF1493]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#00B4FF]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 sm:mb-28"
        >
          <div className="inline-flex items-center gap-2 bg-[#0A1F44] text-[#00B4FF] px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase mb-3 shadow-md border border-[#00B4FF]/30">
            <span>FULL-SERVICE AUTOPILOT</span>
          </div>
          <span className="text-[#0A1F44] font-bold text-lg sm:text-2xl lg:text-3xl tracking-wide uppercase block mt-2">
            We Run The Whole Growth Show
          </span>
          <h2 className="font-black text-4xl sm:text-6xl lg:text-[64px] tracking-tight text-[#0A1F44] mt-2 uppercase">
            Here&apos;s <span className="gocreative-gradient-text">How We Scale:</span>
          </h2>
        </motion.div>

        {/* Stepped Staircase Cards Grid with Hand-Drawn Connecting Arrows */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 pb-12 sm:pb-20">
          {/* CARD 01: Vibrant Pink */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start z-10"
          >
            <motion.div
              whileHover={{
                y: -12,
                rotate: -1,
                scale: 1.025,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="w-full max-w-[340px] h-[340px] sm:h-[370px] rounded-[32px] bg-[#FF1493] text-white p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-[#FF1493]/30 border border-white/30 cursor-pointer relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
              {/* Step Number */}
              <div className="relative z-10">
                <span className="font-black text-5xl sm:text-6xl lg:text-[68px] text-white tracking-tighter drop-shadow-md">
                  01
                </span>
              </div>

              {/* Step Description */}
              <p className="text-white font-extrabold text-lg sm:text-xl leading-relaxed relative z-10">
                AI-guided creative briefs & strategy alignment in weekly 1:1 sprints.
              </p>
            </motion.div>
          </motion.div>

          {/* ARROW 1: Connecting Card 01 to Card 02 (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-[10%] left-[30%] w-36 h-20 pointer-events-none z-20">
            <svg
              viewBox="0 0 140 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-[#00B4FF] drop-shadow-md"
            >
              <path
                d="M10 65C35 15 90 10 125 55"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M112 56L125 55L120 42"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* CARD 02: Deep Navy & Electric Blue (Staircase step down on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start lg:translate-y-16 z-10"
          >
            <motion.div
              whileHover={{
                y: -12,
                rotate: 1,
                scale: 1.025,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="w-full max-w-[340px] h-[340px] sm:h-[370px] rounded-[32px] bg-[#0A1F44] text-white p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-[#0A1F44]/40 border-2 border-[#00B4FF] cursor-pointer relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B4FF]/15 rounded-full blur-xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <span className="font-black text-5xl sm:text-6xl lg:text-[68px] text-[#00B4FF] tracking-tighter drop-shadow-md">
                  02
                </span>
              </div>

              <p className="text-white font-extrabold text-lg sm:text-xl leading-relaxed relative z-10">
                End-to-end filming, creator matching, direction, & rapid AI editing.
              </p>
            </motion.div>
          </motion.div>

          {/* ARROW 2: Connecting Card 02 to Card 03 (Visible on Desktop) */}
          <div className="hidden lg:block absolute bottom-[8%] left-[61%] w-36 h-20 pointer-events-none z-20">
            <svg
              viewBox="0 0 140 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-[#FF1493] drop-shadow-md"
            >
              <path
                d="M15 15C35 65 95 65 125 45"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M113 41L125 45L118 57"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* CARD 03: Deep Purple (Staircase step further down on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start lg:translate-y-32 z-10"
          >
            <motion.div
              whileHover={{
                y: -12,
                rotate: -1,
                scale: 1.025,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="w-full max-w-[340px] h-[340px] sm:h-[370px] rounded-[32px] bg-[#4B00B5] text-white p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-[#4B00B5]/30 border-2 border-[#FF1493] cursor-pointer relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF1493]/15 rounded-full blur-xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <span className="font-black text-5xl sm:text-6xl lg:text-[68px] text-[#FF1493] tracking-tighter drop-shadow-md">
                  03
                </span>
              </div>

              <p className="text-white font-extrabold text-lg sm:text-xl leading-relaxed relative z-10">
                Automated publishing, algorithmic A/B testing, & revenue scaling.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
