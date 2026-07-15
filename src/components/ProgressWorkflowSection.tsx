"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProgressWorkflowSection() {
  return (
    <section className="w-full bg-[#FAF8F3] py-28 sm:py-40 px-4 sm:px-8 lg:px-12 relative overflow-hidden select-none">
      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 sm:mb-28"
        >
          <span className="text-[#4B5563] font-bold text-lg sm:text-2xl lg:text-3xl tracking-wide uppercase block">
            We Run The Whole Show
          </span>
          <h2 className="font-black text-4xl sm:text-6xl lg:text-[64px] tracking-tight text-[#111827] mt-2">
            Here&apos;s <span className="text-[#6035D0]">How:</span>
          </h2>
        </motion.div>

        {/* Stepped Staircase Cards Grid with Hand-Drawn Connecting Arrows */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 pb-12 sm:pb-20">
          {/* CARD 01: Vivid Orchid Pink/Purple */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start z-10"
          >
            <motion.div
              whileHover={{
                y: -10,
                rotate: -1,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="w-full max-w-[340px] h-[340px] sm:h-[370px] rounded-[32px] bg-[#EA76FC] p-8 sm:p-10 flex flex-col justify-between shadow-lg cursor-pointer relative group"
            >
              {/* Step Number */}
              <div>
                <span className="font-black text-5xl sm:text-6xl lg:text-[68px] text-[#111827] tracking-tighter">
                  01
                </span>
              </div>

              {/* Step Description */}
              <p className="text-[#111827] font-extrabold text-lg sm:text-xl leading-relaxed">
                Bounce script ideas with you in weekly 1:1s
              </p>
            </motion.div>
          </motion.div>

          {/* ARROW 1: Connecting Card 01 to Card 02 (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-[10%] left-[30%] w-36 h-20 pointer-events-none z-20">
            <svg
              viewBox="0 0 140 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-[#111827]"
            >
              <path
                d="M10 65C35 15 90 10 125 55"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M112 56L125 55L120 42"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* CARD 02: Vibrant Canary Yellow (Staircase step down on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start lg:translate-y-16 z-10"
          >
            <motion.div
              whileHover={{
                y: -10,
                rotate: 1,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="w-full max-w-[340px] h-[340px] sm:h-[370px] rounded-[32px] bg-[#FCE116] p-8 sm:p-10 flex flex-col justify-between shadow-lg cursor-pointer relative group"
            >
              <div>
                <span className="font-black text-5xl sm:text-6xl lg:text-[68px] text-[#111827] tracking-tighter">
                  02
                </span>
              </div>

              <p className="text-[#111827] font-extrabold text-lg sm:text-xl leading-relaxed">
                Take over filming, direction, and editing of every video.
              </p>
            </motion.div>
          </motion.div>

          {/* ARROW 2: Connecting Card 02 to Card 03 (Visible on Desktop) */}
          <div className="hidden lg:block absolute bottom-[8%] left-[61%] w-36 h-20 pointer-events-none z-20">
            <svg
              viewBox="0 0 140 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-[#111827]"
            >
              <path
                d="M15 15C35 65 95 65 125 45"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M113 41L125 45L118 57"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* CARD 03: Vivid Tangy Orange (Staircase step further down on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start lg:translate-y-32 z-10"
          >
            <motion.div
              whileHover={{
                y: -10,
                rotate: -1,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="w-full max-w-[340px] h-[340px] sm:h-[370px] rounded-[32px] bg-[#FF8800] p-8 sm:p-10 flex flex-col justify-between shadow-lg cursor-pointer relative group"
            >
              <div>
                <span className="font-black text-5xl sm:text-6xl lg:text-[68px] text-[#111827] tracking-tighter">
                  03
                </span>
              </div>

              <p className="text-[#111827] font-extrabold text-lg sm:text-xl leading-relaxed">
                Post for you — with captions, timing, and replies done.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
