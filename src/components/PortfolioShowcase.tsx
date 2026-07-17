"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import BorderGlow from "./BorderGlow";

interface WorkCard {
  id: number;
  category: string;
  type: string;
  views: string;
  roas: string;
  brand: string;
  videoUrl: string;
  borderGlowHsl: string;
  borderGlowColors: string[];
}

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isCenterMuted, setIsCenterMuted] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25 });
  const centerVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = centerVideoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(() => {});
      video.muted = isCenterMuted;
    } else {
      video.pause();
    }
  }, [isInView, isCenterMuted]);

  const categories = [
    { name: "All Work", icon: ":::" },
    { name: "Video Ads", icon: "►" },
    { name: "Image Ads", icon: "🖼" },
    { name: "Beauty", icon: "" },
    { name: "Fashion", icon: "" },
    { name: "Health & Wellness", icon: "" },
    { name: "Food & Drink", icon: "" },
    { name: "Home & Living", icon: "" },
    { name: "Apps & Services", icon: "" },
  ];

  const allCards: WorkCard[] = [
    {
      id: 1,
      category: "Beauty",
      type: "Video Ad",
      views: "2.1M+",
      roas: "ROAS 6.3x",
      brand: "Skincare Brand",
      videoUrl: "/hero-reel.mp4",
      borderGlowHsl: "330 100 54",
      borderGlowColors: ["#FF1493", "#D91499", "#4B00B5"],
    },
    {
      id: 2,
      category: "Fashion",
      type: "Video Ad",
      views: "1.8M+",
      roas: "ROAS 4.7x",
      brand: "Sneaker Brand",
      videoUrl: "/hero-reel.mp4",
      borderGlowHsl: "315 100 48",
      borderGlowColors: ["#D91499", "#9D14C4", "#4B00B5"],
    },
    {
      id: 3,
      category: "Beauty",
      type: "Video Ad",
      views: "3.2M+",
      roas: "ROAS 7.8x",
      brand: "Beauty Brand",
      videoUrl: "/hero-reel.mp4",
      borderGlowHsl: "286 100 42",
      borderGlowColors: ["#9D14C4", "#FF1493", "#00B4FF"],
    },
    {
      id: 4,
      category: "Food & Drink",
      type: "Video Ad",
      views: "1.2M+",
      roas: "ROAS 5.1x",
      brand: "Food Brand",
      videoUrl: "/hero-reel.mp4",
      borderGlowHsl: "210 100 45",
      borderGlowColors: ["#0073E6", "#4B00B5", "#00B4FF"],
    },
    {
      id: 5,
      category: "Health & Wellness",
      type: "Video Ad",
      views: "2.6M+",
      roas: "ROAS 6.9x",
      brand: "Wellness Brand",
      videoUrl: "/hero-reel.mp4",
      borderGlowHsl: "197 100 50",
      borderGlowColors: ["#00B4FF", "#0073E6", "#4B00B5"],
    },
  ];

  const filteredCards =
    activeCategory === "All Work" || activeCategory === "Video Ads" || activeCategory === "Image Ads"
      ? allCards
      : allCards.filter((card) => card.category === activeCategory);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="w-full bg-[#030611] text-white py-24 sm:py-32 relative overflow-hidden border-t border-white/10 select-none"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] bg-gradient-to-tr from-[#4B00B5]/25 via-[#FF1493]/15 to-[#00B4FF]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#FF1493]/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[650px] h-[650px] bg-[#00B4FF]/12 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#0A1226]/90 px-4.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-[#FF1493] mb-5 border border-[#FF1493]/40 shadow-lg">
            <span>OUR WORK</span>
          </div>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[54px] leading-[1.08] tracking-tight mb-4">
            Don&apos;t Take Our Word For It.
            <br />
            Our Work <span className="text-[#FF1493]">Speaks</span> <span className="gocreative-gradient-text">Louder.</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-medium">
            Real brands. Real results. Real growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-6 pt-2 mb-12 no-scrollbar justify-start xl:justify-center scroll-smooth"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-4.5 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 border ${
                  isActive
                    ? "bg-gradient-to-r from-[#FF1493]/25 to-[#FF1493]/10 text-[#FF1493] border-[#FF1493] shadow-[0_0_22px_rgba(255,20,147,0.4)] scale-105"
                    : "bg-[#0C152E]/80 hover:bg-[#121E42] text-white/80 hover:text-white border-white/15 hover:border-[#00B4FF]/60"
                }`}
              >
                {cat.icon && (
                  <span className={isActive ? "text-[#FF1493] font-black" : "text-white/60 font-black"}>
                    {cat.icon}
                  </span>
                )}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-7 mb-16 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredCards.map((card, idx) => {
              const isCenter = idx === 2 && filteredCards.length >= 5;

              return (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 24 }}
                  animate={{
                    opacity: 1,
                    scale: isCenter ? 1.05 : 1,
                    y: isCenter ? -8 : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredId(card.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="w-full h-[490px] sm:h-[530px] lg:h-[560px] flex"
                >
                  <BorderGlow
                    edgeSensitivity={35}
                    glowColor={card.borderGlowHsl}
                    backgroundColor="#0A1024"
                    borderRadius={32}
                    glowRadius={38}
                    glowIntensity={isCenter ? 1.4 : 1.1}
                    coneSpread={30}
                    colors={card.borderGlowColors}
                    className="w-full h-full group transition-all duration-500 shadow-2xl"
                  >
                    <div className="w-full h-full flex flex-col justify-between rounded-[inherit] overflow-hidden">
                      <div className="absolute inset-0 bg-black overflow-hidden rounded-[inherit] z-0">
                        <video
                          ref={isCenter ? centerVideoRef : undefined}
                          src={card.videoUrl}
                          loop
                          muted={isCenter ? isCenterMuted : hoveredId !== card.id}
                          playsInline
                          autoPlay={isCenter || isInView}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/95 z-1 pointer-events-none" />
                      </div>

                      <div className="relative z-20 flex justify-between items-center p-4 sm:p-5">
                        {isCenter ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsCenterMuted(!isCenterMuted);
                            }}
                            className="bg-black/85 backdrop-blur-md hover:bg-black text-white px-3.5 py-1.5 rounded-full border border-white/25 shadow-xl flex items-center gap-2 text-xs font-bold transition-all transform hover:scale-105 cursor-pointer"
                          >
                            <span>{isCenterMuted ? "🔇" : "🔊"}</span>
                            <span>{isCenterMuted ? "Unmute Reel" : "Mute Reel"}</span>
                          </button>
                        ) : (
                          <div className="w-fit ml-auto" />
                        )}

                        <div
                          className={`w-9 h-9 rounded-full bg-black/65 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
                            isCenter
                              ? "bg-[#FF1493] border-[#FF1493] scale-110 shadow-[0_0_15px_rgba(255,20,147,0.6)]"
                              : "group-hover:bg-[#FF1493] group-hover:border-[#FF1493] group-hover:scale-110"
                          }`}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      <div className="relative z-20 flex flex-col items-center justify-end p-5 pb-6 mt-auto text-center">
                        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md mb-2 group-hover:border-[#00B4FF] transition-all">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#FF1493]">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                          </svg>
                          <span className="font-extrabold text-sm sm:text-base text-white">{card.views}</span>
                        </div>
                        <span className="text-[11px] uppercase font-bold text-[#A5B4FC] tracking-wider mb-4">
                          Views
                        </span>

                        <div
                          className={`w-full py-2.5 px-4 rounded-2xl border transition-all shadow-xl mb-4.5 ${
                            isCenter
                              ? "bg-gradient-to-r from-[#FF1493]/25 to-[#4B00B5]/30 border-[#FF1493]/70"
                              : "bg-[#111A36]/90 backdrop-blur-xl border-white/20 group-hover:bg-[#FF1493]/20 group-hover:border-[#FF1493]/60"
                          }`}
                        >
                          <span className="font-black text-base sm:text-[17px] text-white tracking-wide">
                            {card.roas}
                          </span>
                        </div>

                        <div className="w-full flex items-center justify-between text-left pt-2 border-t border-white/10">
                          <span className="text-xs sm:text-sm font-extrabold text-white/90 truncate">
                            {card.brand}
                          </span>
                          <span className="text-xs font-bold text-white/50 shrink-0 ml-2">
                            {card.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/15"
        >
          <a
            href="/work"
            className="inline-flex items-center gap-3 bg-[#0C152E]/90 hover:bg-[#101E42] text-white font-extrabold text-sm px-8 py-4.5 rounded-full border border-[#FF1493]/40 hover:border-[#00B4FF] shadow-[0_0_25px_rgba(255,20,147,0.25)] transition-all transform hover:scale-105 group cursor-pointer"
          >
            <span className="gocreative-gradient-text font-black">View More Work</span>
            <svg
              className="w-4.5 h-4.5 text-[#00B4FF] transform group-hover:translate-x-1.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <div className="text-center sm:text-right">
            <p className="text-white/80 font-bold text-sm sm:text-base">
              Want similar results for your brand?
            </p>
            <a href="#book" className="text-sm sm:text-base font-black hover:underline inline-block mt-0.5">
              Let&apos;s build your <span className="gocreative-gradient-text">growth engine.</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
