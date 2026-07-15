"use client";

import React from "react";

export default function MetricsGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 text-center select-none">
        {/* Top Left: Cream */}
        <div className="bg-[#FAF8F3] py-16 sm:py-20 px-6 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-[#EBE6DD]">
          <span className="text-[#111827] font-black text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-none">
            2,000+
          </span>
          <span className="text-[#374151] font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.16em] mt-3">
            ADS DELIVERED MONTHLY
          </span>
        </div>

        {/* Top Right: Lavender */}
        <div className="bg-[#E8E2FB] py-16 sm:py-20 px-6 flex flex-col items-center justify-center border-b border-[#DCD3F8]">
          <span className="text-[#111827] font-black text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-none">
            30%
          </span>
          <span className="text-[#374151] font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.16em] mt-3">
            AVERAGE DROP IN CPAS
          </span>
        </div>

        {/* Bottom Left: Lavender */}
        <div className="bg-[#E8E2FB] py-16 sm:py-20 px-6 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-[#DCD3F8]">
          <span className="text-[#111827] font-black text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-none">
            20%
          </span>
          <span className="text-[#374151] font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.16em] mt-3">
            AVERAGE CVR BOOST
          </span>
        </div>

        {/* Bottom Right: Cream */}
        <div className="bg-[#FAF8F3] py-16 sm:py-20 px-6 flex flex-col items-center justify-center">
          <span className="text-[#111827] font-black text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-none">
            $700M
          </span>
          <span className="text-[#374151] font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.16em] mt-3">
            SPENT ON OUR ADS
          </span>
        </div>
      </div>
    </section>
  );
}
