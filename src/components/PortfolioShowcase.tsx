"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface MockupCardProps {
  card: {
    category: string;
    title: string;
    subText: string;
    cardTitle: string;
  };
  isCenter: boolean;
  isInView: boolean;
  isUserMuted: boolean;
  setIsUserMuted: (val: boolean) => void;
}

function MockupPhone({
  card,
  isCenter,
  isInView,
  isUserMuted,
  setIsUserMuted,
}: MockupCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      // Section is in view: play the video
      video.play().catch(() => {
        // Autoplay policy or interaction required
      });

      if (isCenter && !isUserMuted) {
        video.muted = false;
      } else {
        video.muted = true;
      }
    } else {
      // Scrolled out of view: switch audio off and pause
      video.muted = true;
      video.pause();
    }
  }, [isInView, isCenter, isUserMuted]);

  return (
    <div
      className={`w-full ${
        isCenter
          ? "max-w-[335px] sm:max-w-[365px] h-[550px] sm:h-[620px] lg:h-[650px] border-[7px] border-[#FF1493] shadow-[0_0_45px_rgba(255,20,147,0.45)]"
          : "max-w-[310px] sm:max-w-[335px] h-[510px] sm:h-[570px] lg:h-[600px] border-[6px] border-[#1E293B] group-hover:border-[#00B4FF]/80 shadow-2xl"
      } rounded-[42px] sm:rounded-[48px] bg-[#060B18] transition-all duration-500 overflow-hidden relative flex flex-col justify-between p-3`}
    >
      {/* Speaker Notch */}
      <div className="relative z-30 w-full pt-3 px-6 flex items-center justify-between text-white text-[11px] font-semibold pointer-events-none">
        <span>9:41</span>
        <div className="w-22 h-4.5 bg-black rounded-full mx-auto" />
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
        </div>
      </div>

      {/* Main Instagram Reel Video inside Mockup */}
      <div className="absolute inset-0 z-10 bg-black overflow-hidden rounded-[34px] sm:rounded-[40px]">
        <video
          ref={videoRef}
          src="/hero-reel.mp4"
          loop
          playsInline
          muted={!isCenter || isUserMuted || !isInView}
          className="w-full h-full object-cover absolute inset-0"
        />
      </div>

      {/* Simple Mute/Unmute Button at the Top of the Video (Center Video Only) */}
      {isCenter && (
        <div className="absolute top-12 right-4 z-40">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsUserMuted(!isUserMuted);
            }}
            className="bg-black/85 backdrop-blur-md hover:bg-black text-white px-3.5 py-1.5 rounded-full border border-white/25 shadow-xl flex items-center gap-2 text-xs font-bold transition-all transform hover:scale-105 cursor-pointer"
          >
            <span className="text-sm">
              {isUserMuted || !isInView ? "🔇" : "🔊"}
            </span>
            <span>{isUserMuted || !isInView ? "Unmute" : "Mute"}</span>
          </button>
        </div>
      )}

      {/* Bottom Performance Card Overlay inside Video Screen */}
      <div className="relative z-30 px-3 pb-3 pointer-events-none">
        <div className="bg-black/85 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="gocreative-gradient-bg px-2.5 py-0.5 rounded text-[9px] font-extrabold uppercase text-white tracking-wider">
              {card.cardTitle}
            </span>
            <span className="text-xs font-black text-[#00B4FF]">
              {card.subText}
            </span>
          </div>
          <p className="text-sm font-black text-white leading-tight">
            {card.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioShowcase() {
  const [startIndex, setStartIndex] = useState(0);
  const [isUserMuted, setIsUserMuted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.35 });

  const cards = [
    {
      category: "FINANCE",
      title: "Instant Global Transfers",
      subText: "+ 82% Conversion Rate",
      cardTitle: "GOCREATIVE PAY",
    },
    {
      category: "SAAS & B2B",
      title: "ROAS Performance",
      subText: "+340% Scale Boost",
      cardTitle: "AUTOGROWTH AI",
    },
    {
      category: "GAMING & APPS",
      title: "Top 10 App Store",
      subText: "Viral Creator Campaign",
      cardTitle: "HEROES CLASH",
    },
    {
      category: "E-COMMERCE",
      title: "Glow AI Serum",
      subText: "3.8x ROAS Average",
      cardTitle: "STYLEST SERUM",
    },
  ];

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % cards.length);
  };

  // Select 3 cards to show on medium/large screens
  const displayedCards = [
    cards[startIndex % cards.length],
    cards[(startIndex + 1) % cards.length],
    cards[(startIndex + 2) % cards.length],
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="w-full bg-[#080D1A] text-white py-24 sm:py-32 relative overflow-hidden border-t border-white/10 select-none"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-14 sm:mb-18"
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
        </motion.div>

        {/* Carousel / Showcase Container with Navigation Arrows */}
        <div className="relative flex items-center justify-between gap-2 sm:gap-6">
          {/* Left Navigation Arrow Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#00B4FF] hover:bg-[#00B4FF]/80 text-[#060B18] flex items-center justify-center shadow-[0_0_25px_rgba(0,180,255,0.6)] z-30 shrink-0 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              className="w-6 h-6 ml-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* 3 Industry Smartphone Mockups Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center py-6">
            <AnimatePresence mode="popLayout">
              {displayedCards.map((card, idx) => {
                // Index 1 is the central phone on desktop (and active highlight)
                const isCenter = idx === 1;

                return (
                  <motion.div
                    key={`${card.category}-${idx}-${startIndex}`}
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{
                      opacity: 1,
                      scale: isCenter ? 1.05 : 0.96,
                      y: isCenter ? -10 : 0,
                    }}
                    exit={{ opacity: 0, scale: 0.92, y: 20 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full flex flex-col items-center group ${
                      !isCenter ? "hidden md:flex opacity-85" : "flex"
                    }`}
                  >
                    {/* Category Header Badge */}
                    <div
                      className={`${
                        isCenter
                          ? "gocreative-gradient-bg shadow-[0_0_20px_rgba(255,20,147,0.5)] scale-110"
                          : "bg-[#1E293B] border border-white/20"
                      } text-white font-black text-xs sm:text-[13px] uppercase tracking-wider px-5 py-2 rounded-full shadow-xl mb-6 transition-all duration-300`}
                    >
                      {card.category}
                    </div>

                    {/* Smartphone Mockup with Scroll Triggered Playback */}
                    <MockupPhone
                      card={card}
                      isCenter={isCenter}
                      isInView={isInView}
                      isUserMuted={isUserMuted}
                      setIsUserMuted={setIsUserMuted}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right Navigation Arrow Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            aria-label="Next slide"
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#00B4FF] hover:bg-[#00B4FF]/80 text-[#060B18] flex items-center justify-center shadow-[0_0_25px_rgba(0,180,255,0.6)] z-30 shrink-0 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              className="w-6 h-6 mr-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
