"use client";

import React from "react";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[580px] h-[540px] sm:h-[620px] flex items-center justify-center select-none mx-auto lg:mx-0">
      {/* ========================================================= */}
      {/* BACKGROUND CIRCUIT & CONNECTION LINES */}
      {/* ========================================================= */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 580 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Purple connection lines connecting badges to elements */}
        {/* Line from 30% DROP IN CPAs to left card */}
        <path
          d="M 180 230 L 150 230 L 150 210"
          stroke="#9F8AE6"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        {/* Line from top crosshair circle to 20% CRV BOOST */}
        <path
          d="M 230 190 L 230 145 L 380 145"
          stroke="#9F8AE6"
          strokeWidth="1.2"
        />
        {/* Vertical/Horizontal framing lines */}
        <path
          d="M 170 210 L 170 420 L 210 420"
          stroke="#BDB0F2"
          strokeWidth="1"
        />
        <path
          d="M 400 230 L 440 230 L 440 330 L 360 330"
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
        <div className="w-10 h-10 rounded-full bg-[#0A1F44] border-2 border-[#00B4FF] flex items-center justify-center text-white shadow-xl shadow-[#00B4FF]/30">
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
      <div className="absolute left-[1%] sm:left-[4%] bottom-[32%] z-20 animate-float-medium">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0A1F44] border-2 border-[#FF1493] flex items-center justify-center text-[#FF1493] shadow-xl shadow-[#FF1493]/25">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.53 16.83C21.31 17.65 20.73 18.23 19.91 18.44C19.04 18.69 17.06 18.81 14.03 18.81H9.97C6.94 18.81 4.96 18.69 4.09 18.44C3.27 18.23 2.69 17.65 2.47 16.83C2.16 15.8 2 14.19 2 12C2 9.81 2.16 8.2 2.47 7.17C2.69 6.35 3.28 5.77 4.09 5.56C4.96 5.31 6.94 5.19 9.97 5.19H14.03C17.06 5.19 19.04 5.31 19.91 5.56C20.72 5.77 21.31 6.35 21.56 7.17Z" />
          </svg>
        </div>
      </div>

      {/* Bottom-right TikTok Icon inside glowing gradient circle */}
      <div className="absolute right-[6%] sm:right-[10%] bottom-[12%] z-20 animate-float-slow">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0A1F44] border-2 border-[#00B4FF] flex items-center justify-center text-[#00B4FF] shadow-xl shadow-[#00B4FF]/25">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M19.59 6.69A4.83 4.83 0 0 1 15.47 4.17V15.11A5.11 5.11 0 1 1 10.36 10a5.08 5.08 0 0 1 1.13.13V12.8A2.56 2.56 0 1 0 13 15.34V2.17h2.47A4.84 4.84 0 0 0 18 5.34v2.5a7.31 7.31 0 0 1 1.59-.15z" />
          </svg>
        </div>
      </div>

      {/* Decorative Vibrant Pink & Electric Blue Circles */}
      <div className="absolute bottom-[18%] left-[45%] w-5 h-5 rounded-full bg-[#FF1493] shadow-[0_0_15px_#FF1493] z-10" />
      <div className="absolute right-[2%] bottom-[28%] w-4 h-4 rounded-full bg-[#00B4FF] shadow-[0_0_15px_#00B4FF] z-10" />

      {/* ========================================================= */}
      {/* FLOATING CARD 1: LEFT REELS/CREATOR CARD */}
      {/* ========================================================= */}
      <div className="absolute left-[3%] sm:left-[5%] top-[34%] w-[145px] sm:w-[165px] h-[220px] sm:h-[250px] bg-[#1E1C1F] rounded-2xl shadow-xl overflow-hidden border-2 border-white/80 z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
        {/* Video Creator Visual */}
        <div className="relative w-full h-full bg-gradient-to-b from-[#3B2940] via-[#2A1D30] to-[#141216] flex flex-col justify-between p-3 text-white">
          {/* Creator face mockup illustration */}
          <div className="absolute inset-0 opacity-90 flex items-center justify-center">
            <div className="w-full h-full relative flex flex-col items-center justify-center">
              {/* Stylized Creator Portrait */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#FF1493] via-[#4B00B5] to-[#00B4FF] border-2 border-white/30 shadow-md mb-2 relative overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-[#8D6B5A] relative">
                  <div className="absolute top-3 left-3 right-3 h-8 bg-[#4A3228] rounded-t-full" />
                  <div className="absolute bottom-4 left-5 w-2 h-2 rounded-full bg-white/80" />
                  <div className="absolute bottom-4 right-5 w-2 h-2 rounded-full bg-white/80" />
                </div>
              </div>
            </div>
          </div>

          {/* Top Live / Badge */}
          <div className="relative z-10 flex justify-between items-center">
            <span className="gocreative-gradient-bg backdrop-blur-sm text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white shadow">
              GO CREATIVE AD
            </span>
          </div>

          {/* Bottom Caption & Poker Badge */}
          <div className="relative z-10 flex flex-col items-center gap-1.5 pb-1">
            <div className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-center shadow border border-white/10">
              <p className="text-[10px] sm:text-[11px] font-semibold leading-tight text-white">
                Data-backed creative scaling
              </p>
            </div>
            {/* Poker chip emblem */}
            <div className="w-6 h-6 rounded-full bg-[#00B4FF] border border-white flex items-center justify-center text-[6.5px] font-bold uppercase shadow">
              ROAS
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FLOATING PILL BADGE 1: 30% DROP IN CPAs */}
      {/* ========================================================= */}
      <div className="absolute left-[10%] sm:left-[12%] top-[26%] z-30 bg-white/95 backdrop-blur-md border border-[#FF1493]/30 shadow-xl shadow-black/10 rounded-full px-4 py-1.5 flex items-center gap-1.5 text-xs sm:text-[13px] font-black tracking-tight transform hover:scale-105 transition-transform">
        <span className="gocreative-gradient-text font-black">30%</span>
        <span className="text-[#0A1F44] font-extrabold">DROP IN CPAs</span>
      </div>

      {/* ========================================================= */}
      {/* CENTER SMARTPHONE MOCKUP (MAIN CREATIVE SHOWCASE) */}
      {/* ========================================================= */}
      <div className="relative z-20 w-[235px] sm:w-[265px] h-[485px] sm:h-[545px] bg-white rounded-[38px] sm:rounded-[44px] p-2 sm:p-2.5 shadow-[0_25px_60px_-15px_rgba(75,0,181,0.3)] border border-[#4B00B5]/20 flex flex-col justify-between">
        {/* Phone Screen Container */}
        <div className="relative w-full h-full bg-[#0A1F44] rounded-[30px] sm:rounded-[36px] overflow-hidden flex flex-col justify-between">
          {/* Top Notch / Status Bar */}
          <div className="relative z-30 w-full pt-3 px-6 flex items-center justify-between text-white text-[10px] font-semibold pointer-events-none">
            <span>9:41</span>
            <div className="w-20 h-4 bg-black rounded-full mx-auto" />
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white/70" />
            </div>
          </div>

          {/* Main Instagram Reel Video (Edge-to-Edge Autoplay Loop) */}
          <div className="absolute inset-0 z-10 bg-black overflow-hidden rounded-[30px] sm:rounded-[36px]">
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
          <div className="absolute top-10 left-2 z-30 transform -rotate-12 scale-75 sm:scale-85 pointer-events-none opacity-85">
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#0A1F44]/90 border-2 border-[#FF1493] flex items-center justify-center relative shadow-xl">
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
                    GOCREATIVE AI GROWTH ENGINE •
                  </textPath>
                </text>
              </svg>
              {/* Center Crosshair Icon */}
              <div className="w-7 h-7 rounded-full gocreative-gradient-bg text-white flex items-center justify-center shadow">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-3.5 h-3.5"
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
          <div className="relative z-30 w-full pb-3 pt-2 px-6 bg-black/70 backdrop-blur-md flex items-center justify-between text-white pointer-events-none">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21L16.65 16.65" />
            </svg>
            <div className="w-8 h-5 rounded-md gocreative-gradient-bg flex items-center justify-center shadow">
              <div className="w-6 h-5 bg-white text-black rounded-[4px] flex items-center justify-center font-bold text-xs">
                +
              </div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V15Z" />
            </svg>
            <div className="w-5 h-5 rounded-full bg-white/30 border border-white" />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FLOATING PILL BADGE 2: 20% CVR BOOST */}
      {/* ========================================================= */}
      <div className="absolute right-[12%] sm:right-[15%] top-[19%] z-30 bg-white/95 backdrop-blur-md border border-[#00B4FF]/30 shadow-xl shadow-black/10 rounded-full px-4 py-1.5 flex items-center gap-1.5 text-xs sm:text-[13px] font-black tracking-tight transform hover:scale-105 transition-transform">
        <span className="gocreative-gradient-text font-black">20%</span>
        <span className="text-[#0A1F44] font-extrabold">CVR BOOST</span>
      </div>

      {/* ========================================================= */}
      {/* FLOATING CARD 2: TOP-RIGHT PRODUCTION STUDIO CARD */}
      {/* ========================================================= */}
      <div className="absolute right-[2%] sm:right-[4%] top-[14%] w-[125px] sm:w-[145px] h-[180px] sm:h-[210px] bg-[#0A1F44] rounded-2xl shadow-xl overflow-hidden border-2 border-[#00B4FF]/60 z-10 transform rotate-2 hover:rotate-0 transition-transform duration-300">
        <div className="relative w-full h-full bg-gradient-to-b from-[#1E2E5C] to-[#0A1F44] p-2 flex flex-col justify-between text-white">
          <div className="absolute inset-0 flex items-center justify-center opacity-85">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-14 h-14 rounded-full border-4 border-white/60 flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 rounded-full bg-[#00B4FF] shadow-[0_0_10px_#00B4FF]" />
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <span className="bg-black/60 text-[8px] font-bold px-1.5 py-0.5 rounded text-[#00B4FF] uppercase border border-[#00B4FF]/30">
              SHOOT DAY
            </span>
          </div>
          <div className="relative z-10 text-[9px] font-semibold text-white/90 bg-black/60 px-2 py-1 rounded">
            Studio Production
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FLOATING PILL BADGE 3: 3X AVERAGE ROI */}
      {/* ========================================================= */}
      <div className="absolute right-[10%] sm:right-[13%] top-[51%] z-30 bg-white/95 backdrop-blur-md border border-[#4B00B5]/30 shadow-xl shadow-black/10 rounded-full px-4 py-1.5 flex items-center gap-1.5 text-xs sm:text-[13px] font-black tracking-tight transform hover:scale-105 transition-transform">
        <span className="gocreative-gradient-text font-black">3X</span>
        <span className="text-[#0A1F44] font-extrabold">AVERAGE ROI</span>
      </div>

      {/* ========================================================= */}
      {/* FLOATING CARD 3: BOTTOM-RIGHT SWIMWEAR AD CARD */}
      {/* ========================================================= */}
      <div className="absolute right-[4%] sm:right-[6%] bottom-[14%] w-[130px] sm:w-[150px] h-[175px] sm:h-[200px] bg-[#F5EFE6] rounded-2xl shadow-xl overflow-hidden border-2 border-white/90 z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300 p-2 flex flex-col justify-between">
        <div className="flex justify-between items-center text-[7.5px] font-extrabold uppercase tracking-tight text-[#6B5A4B] border-b border-[#E3D9CC] pb-1">
          <span>OFFICE / SWIMWEAR BRAND</span>
          <span>STYLED</span>
        </div>
        {/* Two Model Comparison Panels */}
        <div className="grid grid-cols-2 gap-1.5 h-full pt-1.5 pb-1">
          <div className="bg-[#E4DACB] rounded-lg overflow-hidden relative flex flex-col items-center justify-end p-1">
            <div className="w-8 h-16 bg-[#3B424C] rounded-t-lg" />
            <span className="text-[7px] font-bold text-[#4E443B] mt-1">
              DAY
            </span>
          </div>
          <div className="bg-[#E4DACB] rounded-lg overflow-hidden relative flex flex-col items-center justify-end p-1">
            <div className="w-8 h-16 bg-[#1A1A1A] rounded-t-lg" />
            <span className="text-[7px] font-bold text-[#4E443B] mt-1">
              NIGHT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
