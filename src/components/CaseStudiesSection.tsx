"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CaseStudiesSection() {
  const [activeSlide, setActiveSlide] = useState(2);

  return (
    <section id="case-studies" className="w-full bg-[#060B18] text-white py-24 sm:py-32 overflow-hidden select-none border-t border-white/10 relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00B4FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00B4FF] mb-4 border border-[#00B4FF]/30">
            <span>CLIENT SUCCESS</span>
          </div>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[46px] tracking-tight uppercase">
            CASE STUDIES & <span className="gocreative-gradient-text">RESULTS</span>
          </h2>
          <p className="text-white/75 text-sm sm:text-base mt-2.5 font-normal">
            See how our AI & performance creative transforms acquisition metrics across industries
          </p>
        </motion.div>

        {/* 3-Card Carousel Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center justify-center">
          {/* LEFT SIDE CARD: N26 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex justify-end"
          >
            <div className="w-full max-w-[390px] h-[430px] sm:h-[470px] rounded-[28px] border border-white/20 bg-[#141E38]/90 backdrop-blur-xl shadow-2xl overflow-hidden relative flex flex-col justify-end p-6 sm:p-7 transition-all hover:border-[#00B4FF] group">
              {/* Background Mockup: Fintech N26 */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#060B18] -z-10 flex flex-col justify-between p-4">
                <div className="opacity-20 text-5xl font-black text-[#00B4FF] tracking-widest mt-8 group-hover:scale-110 transition-transform duration-500">
                  N26
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start">
                {/* Badge */}
                <div className="bg-[#00B4FF] text-[#060B18] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow-[0_0_15px_rgba(0,180,255,0.4)]">
                  65% LOWER COST PER MOBILE REGISTRATION
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2.5 group-hover:text-[#00B4FF] transition-colors">
                  N26 Cuts Acquisition Costs With Lo-Fi UGC Creative
                </h3>

                {/* Description */}
                <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed mb-5">
                  How N26 reduced acquisition costs by 65% through diversified
                  UGC on Meta platforms using GoCreative testing frameworks.
                </p>

                {/* Read More Button */}
                <a
                  href="#case-n26"
                  className="gocreative-gradient-bg hover:opacity-90 text-white font-bold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow-[0_4px_15px_rgba(255,20,147,0.4)] transform hover:scale-105"
                >
                  <span>Read More</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* CENTER HERO CARD: 8Sheep Organics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center z-20"
          >
            <div className="w-full max-w-[450px] h-[480px] sm:h-[530px] rounded-[32px] border-2 border-[#FF1493] bg-[#141E38] shadow-[0_0_50px_rgba(255,20,147,0.3)] overflow-hidden relative flex flex-col justify-end p-7 sm:p-8 transform scale-100 lg:scale-105 group hover:border-[#00B4FF] transition-all">
              {/* Background Mockup */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#311E43] via-[#1E1B4B] to-[#060B18] -z-10 flex flex-col justify-between p-6">
                <div className="opacity-25 text-4xl font-serif font-bold text-[#FF1493] tracking-widest mt-12 text-center group-hover:scale-110 transition-transform duration-500">
                  8 sheep organics
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start">
                {/* Pink Badge */}
                <div className="bg-[#FF1493] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full mb-3.5 shadow-[0_0_20px_rgba(255,20,147,0.6)]">
                  20% INCREASE IN ROAS AT SCALE
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-[27px] font-black text-white leading-[1.12] mb-3 group-hover:text-[#FF1493] transition-colors">
                  How 8Sheep Scaled E-Commerce Revenue Using AI Paid Social
                </h3>

                {/* Description */}
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6">
                  How the organic skincare brand found winning ads that scaled
                  profitably through high-velocity iteration and smart AI hooks.
                </p>

                {/* Read More Button */}
                <a
                  href="#case-8sheep"
                  className="gocreative-gradient-bg hover:opacity-95 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(255,20,147,0.5)] transform hover:scale-105"
                >
                  <span>Read Full Study</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE CARD: Wise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex justify-start"
          >
            <div className="w-full max-w-[390px] h-[430px] sm:h-[470px] rounded-[28px] border border-white/20 bg-[#141E38]/90 backdrop-blur-xl shadow-2xl overflow-hidden relative flex flex-col justify-end p-6 sm:p-7 transition-all hover:border-[#FF1493] group">
              {/* Background Mockup: Wise */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1E1B4B] via-[#0F172A] to-[#060B18] -z-10 flex flex-col justify-between p-4">
                <div className="opacity-20 text-5xl font-black text-[#FF1493] tracking-widest mt-8 text-right group-hover:scale-110 transition-transform duration-500">
                  wise
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start">
                {/* Badge */}
                <div className="bg-[#00B4FF] text-[#060B18] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow-[0_0_15px_rgba(0,180,255,0.4)]">
                  100% INCREASE IN CONVERSION RATE
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2.5 group-hover:text-[#00B4FF] transition-colors">
                  Wise Doubles TikTok Conversions Through Creative Strategy
                </h3>

                {/* Description */}
                <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed mb-5">
                  How Wise cut costs and doubled conversions on TikTok with
                  localization and a TikTok-first GoCreative strategy.
                </p>

                {/* Read More Button */}
                <a
                  href="#case-wise"
                  className="gocreative-gradient-bg hover:opacity-90 text-white font-bold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow-[0_4px_15px_rgba(255,20,147,0.4)] transform hover:scale-105"
                >
                  <span>Read More</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Carousel Dots Indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-14 sm:mt-16">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setActiveSlide(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`h-2.5 transition-all duration-300 rounded-full ${
                dotIndex === activeSlide
                  ? "w-8 gocreative-gradient-bg shadow-[0_0_10px_rgba(255,20,147,0.8)]"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
