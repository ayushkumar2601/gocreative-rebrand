"use client";

import React from "react";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[660px] lg:max-w-[700px] h-[600px] sm:h-[700px] lg:h-[740px] flex items-center justify-center select-none mx-auto lg:mx-0">
      {/* ========================================================= */}
      {/* BACKGROUND CIRCUIT & CONNECTION LINES */}
      {/* ========================================================= */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 700 740"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Purple connection lines connecting badges to elements */}
        <path
          d="M 210 270 L 170 270 L 170 240"
          stroke="#9F8AE6"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M 270 230 L 270 170 L 450 170"
          stroke="#9F8AE6"
          strokeWidth="1.2"
        />
        <path
          d="M 200 250 L 200 490 L 250 490"
          stroke="#BDB0F2"
          strokeWidth="1"
        />
        <path
          d="M 470 270 L 520 270 L 520 390 L 430 390"
          stroke="#BDB0F2"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      </svg>

      {/* ========================================================= */}
      {/* FLOATING DECORATIVE DOTS & PLATFORM CIRCLES */}
      {/* ========================================================= */}

      {/* Top Meta Icon inside electric blue circle */}
      <div className="absolute top-[8%] left-[45%] sm:left-[48%] z-20 flex items-center gap-2 animate-float-slow">
        <div className="w-4 h-4 rounded-full bg-[#00B4FF] shadow-[0_0_12px_#00B4FF]" />
        <div className="w-11 h-11 rounded-full bg-[#0A1F44] border-2 border-[#00B4FF] flex items-center justify-center text-white shadow-xl shadow-[#00B4FF]/30">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.8 8C17.3 8 16 8.7 14.8 10.1C13.5 11.8 12.4 13.8 11.1 13.8C9.8 13.8 8.7 11.8 7.4 10.1C6.2 8.7 4.9 8 3.4 8C1.1 8 -0.7 9.8 -0.7 12.2C-0.7 14.6 1.1 16.4 3.4 16.4C4.9 16.4 6.2 15.7 7.4 14.3C8.7 12.6 9.8 10.6 11.1 10.6C12.4 10.6 13.5 12.6 14.8 14.3C16 15.7 17.3 16.4 18.8 16.4C21.1 16.4 22.9 14.6 22.9 12.2C22.9 9.8 21.1 8 18.8 8Z"
              fill="#00B4FF"
            />
          </svg>
        </div>
      </div>

      {/* Left YouTube Icon inside glowing purple circle */}
      <div className="absolute left-[1%] sm:left-[3%] bottom-[31%] z-20 animate-float-medium">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0A1F44] border-2 border-[#FF1493] flex items-center justify-center text-[#FF1493] shadow-xl shadow-[#FF1493]/25">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.53 16.83C21.31 17.65 20.73 18.23 19.91 18.44C19.04 18.69 17.06 18.81 14.03 18.81H9.97C6.94 18.81 4.96 18.69 4.09 18.44C3.27 18.23 2.69 17.65 2.47 16.83C2.16 15.8 2 14.19 2 12C2 9.81 2.16 8.2 2.47 7.17C2.69 6.35 3.28 5.77 4.09 5.56C4.96 5.31 6.94 5.19 9.97 5.19H14.03C17.06 5.19 19.04 5.31 19.91 5.56C20.72 5.77 21.31 6.35 21.56 7.17Z" />
          </svg>
        </div>
      </div>

      {/* Bottom-right TikTok Icon inside glowing gradient circle */}
      <div className="absolute right-[5%] sm:right-[8%] bottom-[11%] z-20 animate-float-slow">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0A1F44] border-2 border-[#00B4FF] flex items-center justify-center text-[#00B4FF] shadow-xl shadow-[#00B4FF]/25">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M19.59 6.69A4.83 4.83 0 0 1 15.47 4.17V15.11A5.11 5.11 0 1 1 10.36 10a5.08 5.08 0 0 1 1.13.13V12.8A2.56 2.56 0 1 0 13 15.34V2.17h2.47A4.84 4.84 0 0 0 18 5.34v2.5a7.31 7.31 0 0 1 1.59-.15z" />
          </svg>
        </div>
      </div>

      {/* Decorative Vibrant Pink & Electric Blue Circles */}
      <div className="absolute bottom-[18%] left-[45%] w-5 h-5 rounded-full bg-[#FF1493] shadow-[0_0_15px_#FF1493] z-10" />
      <div className="absolute right-[2%] bottom-[28%] w-4 h-4 rounded-full bg-[#00B4FF] shadow-[0_0_15px_#00B4FF] z-10" />

      {/* ========================================================= */}
      {/* FLOATING CARD 1: LEFT REELS/CREATOR MOCKUP */}
      {/* ========================================================= */}
      <div className="absolute left-[1%] sm:left-[3%] top-[31%] w-[165px] sm:w-[195px] lg:w-[210px] h-[255px] sm:h-[300px] lg:h-[325px] bg-[#1E1C1F] rounded-2xl shadow-2xl overflow-hidden border-2 border-white/80 z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300 group">
        {/* Live Video Background in Mockup */}
        <video
          src="/hero-reel.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-1 pointer-events-none" />

        {/* Overlays */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-3.5 text-white pointer-events-none">
          {/* Top Badge */}
          <div className="flex justify-between items-center">
            <span className="gocreative-gradient-bg backdrop-blur-md text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded text-white shadow-md border border-white/20">
              GO CREATIVE AD
            </span>
          </div>

          {/* Bottom Caption & ROAS Chip */}
          <div className="flex flex-col items-center gap-2 pb-1">
            <div className="bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg text-center shadow border border-white/15">
              <p className="text-[11px] sm:text-[12px] font-bold leading-tight text-white">
                Data-backed creative scaling
              </p>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#00B4FF] border border-white flex items-center justify-center text-[7px] font-black uppercase shadow-lg text-[#0A1F44]">
              ROAS
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FLOATING PILL BADGE 1: 30% DROP IN CPAs */}
      {/* ========================================================= */}
      <div className="absolute left-[6%] sm:left-[8%] top-[23%] z-30 bg-white/95 backdrop-blur-md border border-[#FF1493]/30 shadow-xl shadow-black/10 rounded-full px-4.5 py-2 flex items-center gap-1.5 text-xs sm:text-[14px] font-black tracking-tight transform hover:scale-105 transition-transform">
        <span className="gocreative-gradient-text font-black">30%</span>
        <span className="text-[#0A1F44] font-extrabold">DROP IN CPAs</span>
      </div>

      {/* ========================================================= */}
      {/* CENTER SMARTPHONE MOCKUP (MAIN CREATIVE SHOWCASE) */}
      {/* ========================================================= */}
      <div className="relative z-20 w-[260px] sm:w-[305px] lg:w-[320px] h-[540px] sm:h-[630px] lg:h-[660px] bg-white rounded-[42px] sm:rounded-[48px] p-2 sm:p-3 shadow-[0_25px_60px_-15px_rgba(75,0,181,0.3)] border border-[#4B00B5]/20 flex flex-col justify-between">
        {/* Phone Screen Container */}
        <div className="relative w-full h-full bg-[#0A1F44] rounded-[34px] sm:rounded-[40px] overflow-hidden flex flex-col justify-between">
          {/* Top Notch / Status Bar */}
          <div className="relative z-30 w-full pt-3.5 px-6 flex items-center justify-between text-white text-[11px] font-semibold pointer-events-none">
            <span>9:41</span>
            <div className="w-22 h-4.5 bg-black rounded-full mx-auto" />
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
            </div>
          </div>

          {/* Main Instagram Reel Video (Edge-to-Edge Autoplay Loop) */}
          <div className="absolute inset-0 z-10 bg-black overflow-hidden rounded-[34px] sm:rounded-[40px]">
            <video
              src="/hero-reel.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>

          {/* Floating Purple Crosshair Target Stamp (Top Left Inside Screen, subtle overlay) */}
          <div className="absolute top-12 left-3 z-30 transform -rotate-12 scale-85 sm:scale-95 pointer-events-none opacity-90">
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#0A1F44]/90 border-2 border-[#FF1493] flex items-center justify-center relative shadow-xl">
              {/* Rotating outer circle text */}
              <div className="absolute inset-1 rounded-full border border-dashed border-[#00B4FF]/40 animate-spin-slow" />
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full animate-spin-slow"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text
                  fontSize="8.5"
                  fontWeight="800"
                  fill="#00B4FF"
                  letterSpacing="1.2"
                >
                  <textPath href="#circlePath">
                    DATA BACKED CREATIVE PRODUCTION •
                  </textPath>
                </text>
              </svg>
              {/* Center Crosshair Icon */}
              <div className="w-8 h-8 rounded-full gocreative-gradient-bg text-white flex items-center justify-center shadow">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="8" />
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                </svg>
              </div>
            </div>
          </div>

          {/* Phone Bottom Navigation Bar */}
          <div className="relative z-30 w-full pb-3.5 pt-2.5 px-6 bg-black/70 backdrop-blur-md flex items-center justify-between text-white pointer-events-none">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5">
              <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5.5 h-5.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21L16.65 16.65" />
            </svg>
            <div className="w-9 h-6 rounded-md gocreative-gradient-bg flex items-center justify-center shadow">
              <div className="w-7 h-5 bg-white text-black rounded-[4px] flex items-center justify-center font-bold text-xs">
                +
              </div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5.5 h-5.5">
              <path d="M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V15Z" />
            </svg>
            <div className="w-6 h-6 rounded-full bg-white/30 border border-white" />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FLOATING PILL BADGE 2: 20% CVR BOOST */}
      {/* ========================================================= */}
      <div className="absolute right-[9%] sm:right-[12%] top-[16%] z-30 bg-white/95 backdrop-blur-md border border-[#00B4FF]/30 shadow-xl shadow-black/10 rounded-full px-4.5 py-2 flex items-center gap-1.5 text-xs sm:text-[14px] font-black tracking-tight transform hover:scale-105 transition-transform">
        <span className="gocreative-gradient-text font-black">20%</span>
        <span className="text-[#0A1F44] font-extrabold">CVR BOOST</span>
      </div>

      {/* ========================================================= */}
      {/* FLOATING CARD 2: TOP-RIGHT PRODUCTION STUDIO MOCKUP */}
      {/* ========================================================= */}
      <div className="absolute right-[1%] sm:right-[3%] top-[10%] w-[145px] sm:w-[175px] lg:w-[190px] h-[215px] sm:h-[260px] lg:h-[280px] bg-[#0A1F44] rounded-2xl shadow-2xl overflow-hidden border-2 border-[#00B4FF]/60 z-10 transform rotate-2 hover:rotate-0 transition-transform duration-300 group">
        {/* Live Video Background in Mockup */}
        <video
          src="/hero-reel.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/75 z-1 pointer-events-none" />

        {/* Overlays */}
        <div className="relative z-10 w-full h-full p-3 flex flex-col justify-between text-white pointer-events-none">
          <div className="flex justify-end">
            <span className="bg-black/75 backdrop-blur-md text-[8.5px] font-extrabold px-2.5 py-1 rounded text-[#00B4FF] uppercase border border-[#00B4FF]/40 shadow">
              SHOOT DAY
            </span>
          </div>
          <div>
            <div className="text-[10.5px] font-bold text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded shadow border border-white/15 inline-block">
              Studio Production
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FLOATING PILL BADGE 3: 3X AVERAGE ROI */}
      {/* ========================================================= */}
      <div className="absolute right-[8%] sm:right-[11%] top-[48%] z-30 bg-white/95 backdrop-blur-md border border-[#4B00B5]/30 shadow-xl shadow-black/10 rounded-full px-4.5 py-2 flex items-center gap-1.5 text-xs sm:text-[14px] font-black tracking-tight transform hover:scale-105 transition-transform">
        <span className="gocreative-gradient-text font-black">3X</span>
        <span className="text-[#0A1F44] font-extrabold">AVERAGE ROI</span>
      </div>

      {/* ========================================================= */}
      {/* FLOATING CARD 3: BOTTOM-RIGHT BRAND MOCKUP */}
      {/* ========================================================= */}
      <div className="absolute right-[2%] sm:right-[5%] bottom-[10%] w-[150px] sm:w-[180px] lg:w-[195px] h-[210px] sm:h-[255px] lg:h-[275px] bg-[#0A1F44] rounded-2xl shadow-2xl overflow-hidden border-2 border-white/90 z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300 group">
        {/* Live Video Background in Mockup */}
        <video
          src="/hero-reel.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/80 z-1 pointer-events-none" />

        {/* Overlays */}
        <div className="relative z-10 w-full h-full p-3 flex flex-col justify-between text-white pointer-events-none">
          <div className="flex justify-between items-center text-[8px] font-extrabold uppercase tracking-tight bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-[#FF1493] border border-white/20 shadow">
            <span>BRAND STYLED</span>
            <span>AD 01</span>
          </div>
          <div className="flex justify-between items-center gap-1">
            <span className="text-[9.5px] font-bold text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded border border-white/15 w-full text-center">
              Day / Night Scaling
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
