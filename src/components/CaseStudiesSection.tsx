"use client";

import React, { useState } from "react";

export default function CaseStudiesSection() {
  const [activeSlide, setActiveSlide] = useState(2);

  return (
    <section className="w-full bg-[#181818] text-white py-24 sm:py-32 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[44px] tracking-tight">
            Case Studies
          </h2>
          <p className="text-white/75 text-sm sm:text-base mt-2.5 font-normal">
            See how our ads help brands scale paid social
          </p>
        </div>

        {/* 3-Card Carousel Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center justify-center">
          {/* LEFT SIDE CARD: N26 */}
          <div className="lg:col-span-4 flex justify-end">
            <div className="w-full max-w-[390px] h-[430px] sm:h-[470px] rounded-[28px] border-2 border-white/40 shadow-xl overflow-hidden relative flex flex-col justify-end p-6 sm:p-7 transition-all hover:border-white/80">
              {/* Background Mockup: Fintech N26 */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#3C3D37] via-[#2A2B27] to-[#141513] -z-10 flex flex-col justify-between p-4">
                <div className="opacity-30 text-5xl font-black text-white/40 tracking-widest mt-8">
                  N26
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start">
                {/* Lime Pill Badge */}
                <div className="bg-[#D4F252] text-[#111827] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3">
                  65% LOWER COST PER MOBILE REGISTRATION
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2.5">
                  N26 Cuts Acquisition Costs With Lo-Fi UGC Creative
                </h3>

                {/* Description */}
                <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed mb-5">
                  How N26 reduced acquisition costs by 65% through diversified
                  UGC on Meta platforms.
                </p>

                {/* Read More Button */}
                <a
                  href="#case-n26"
                  className="bg-[#6035D0] hover:bg-[#6D42E2] text-white font-bold text-xs px-5 py-2 rounded-full inline-flex items-center gap-1.5 transition-all shadow"
                >
                  <span>Read More</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* CENTER HERO CARD: 8Sheep Organics */}
          <div className="lg:col-span-4 flex justify-center z-20">
            <div className="w-full max-w-[450px] h-[480px] sm:h-[530px] rounded-[32px] border-4 border-white shadow-2xl overflow-hidden relative flex flex-col justify-end p-7 sm:p-8 transform scale-100 lg:scale-105">
              {/* Background Mockup: Skincare / Beach Lifestyle */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#2A6E82] via-[#1D4A59] to-[#0E1A21] -z-10 flex flex-col justify-between p-6">
                <div className="opacity-25 text-4xl font-serif font-bold text-white tracking-widest mt-12 text-center">
                  8 sheep organics
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start">
                {/* Lime Pill Badge */}
                <div className="bg-[#D4F252] text-[#111827] text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3.5 shadow">
                  20% INCREASE IN AD SPEND
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-[27px] font-black text-white leading-[1.12] mb-3">
                  How 8Sheep Scaled Fashion Performance Using Paid Social
                  Creative
                </h3>

                {/* Description */}
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6">
                  How the organic skincare brand found winning ads that scaled
                  through meticulous testing and iteration.
                </p>

                {/* Read More Button */}
                <a
                  href="#case-8sheep"
                  className="bg-[#6035D0] hover:bg-[#6D42E2] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full inline-flex items-center gap-2 transition-all shadow-lg"
                >
                  <span>Read More</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARD: Wise */}
          <div className="lg:col-span-4 flex justify-start">
            <div className="w-full max-w-[390px] h-[430px] sm:h-[470px] rounded-[28px] border-2 border-white/40 shadow-xl overflow-hidden relative flex flex-col justify-end p-6 sm:p-7 transition-all hover:border-white/80">
              {/* Background Mockup: Wise */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#8C5D3D] via-[#593923] to-[#1F140D] -z-10 flex flex-col justify-between p-4">
                <div className="opacity-30 text-5xl font-black text-white/40 tracking-widest mt-8 text-right">
                  wise
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start">
                {/* Lime Pill Badge */}
                <div className="bg-[#D4F252] text-[#111827] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3">
                  100% INCREASE IN CONVERSION RATE
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2.5">
                  Wise Doubles TikTok Conversions Through Creative Strategy
                </h3>

                {/* Description */}
                <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed mb-5">
                  How Wise cut costs and doubled conversions on TikTok with
                  localization and a TikTok-first strategy.
                </p>

                {/* Read More Button */}
                <a
                  href="#case-wise"
                  className="bg-[#6035D0] hover:bg-[#6D42E2] text-white font-bold text-xs px-5 py-2 rounded-full inline-flex items-center gap-1.5 transition-all shadow"
                >
                  <span>Read More</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
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
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
