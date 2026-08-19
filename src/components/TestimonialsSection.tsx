"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BorderGlow from "./BorderGlow";

interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  company: string;
  avatarText: string;
  avatarBg: string;
  quoteBefore: string;
  quoteHighlight: string;
  quoteAfter: string;
  highlightColor: string;
  borderGlowHsl: string;
  borderGlowColors: string[];
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: "Pooja Dhingra",
      title: "Founder",
      company: "Le15 & MasterChef Judge",
      avatarText: "PD",
      avatarBg: "bg-gradient-to-tr from-[#FF1493] to-[#D91499] text-white",
      quoteBefore: "GoCreative didn't just run ads, they built a system that ",
      quoteHighlight: "scaled our D2C brand profitably",
      quoteAfter: " month after month.",
      highlightColor: "text-[#FF1493]",
      borderGlowHsl: "330 100 54",
      borderGlowColors: ["#FF1493", "#D91499", "#4B00B5"],
    },
    {
      id: 2,
      name: "Anshita Mehrotra",
      title: "Founder",
      company: "Fix My Curls",
      avatarText: "AM",
      avatarBg: "bg-gradient-to-tr from-[#D91499] to-[#9D14C4] text-white",
      quoteBefore: "Their creative plus performance approach is next level. Our ROAS improved, but more importantly our ",
      quoteHighlight: "MER went up.",
      quoteAfter: "",
      highlightColor: "text-[#A5B4FC]",
      borderGlowHsl: "315 100 48",
      borderGlowColors: ["#D91499", "#9D14C4", "#4B00B5"],
    },
    {
      id: 3,
      name: "Shaily Mehrotra",
      title: "Founder",
      company: "Fixderma",
      avatarText: "SM",
      avatarBg: "bg-gradient-to-tr from-[#FF1493] to-[#4B00B5] text-white",
      quoteBefore: "From strategy to execution, everything is sharp, data-driven and fast. They ",
      quoteHighlight: "truly care about our growth",
      quoteAfter: ", not just ad spend.",
      highlightColor: "text-[#FF1493]",
      borderGlowHsl: "330 100 54",
      borderGlowColors: ["#FF1493", "#9D14C4", "#00B4FF"],
    },
    {
      id: 4,
      name: "Karishma Kewalramani",
      title: "Founder",
      company: "Fae Beauty",
      avatarText: "KK",
      avatarBg: "bg-gradient-to-tr from-[#4B00B5] to-[#0073E6] text-white",
      quoteBefore: "The content they create connects so well with our audience. We've built a ",
      quoteHighlight: "strong brand presence",
      quoteAfter: " together.",
      highlightColor: "text-[#A5B4FC]",
      borderGlowHsl: "286 100 42",
      borderGlowColors: ["#9D14C4", "#4B00B5", "#00B4FF"],
    },
    {
      id: 5,
      name: "Promote Education",
      title: "Team",
      company: "Promote Education",
      avatarText: "PE",
      avatarBg: "bg-gradient-to-tr from-[#0073E6] to-[#00B4FF] text-white",
      quoteBefore: "Professional, proactive and performance obsessed. They're an ",
      quoteHighlight: "extension of our team.",
      quoteAfter: "",
      highlightColor: "text-[#FF1493]",
      borderGlowHsl: "197 100 50",
      borderGlowColors: ["#00B4FF", "#0073E6", "#4B00B5"],
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const brandLogos = [
    { name: "Le15", style: "font-serif italic font-bold text-2xl sm:text-3xl tracking-tight" },
    { name: "Fixderma", style: "font-sans font-black text-xl sm:text-2xl tracking-wider uppercase" },
    { name: "Juhst", style: "font-mono font-black text-2xl sm:text-3xl tracking-tight" },
    { name: "NABHI SUTRA", style: "font-serif font-bold text-lg sm:text-xl tracking-widest uppercase" },
    { name: "JAGGERCANE", style: "font-sans font-extrabold text-lg sm:text-xl tracking-widest uppercase" },
    { name: "FAE BEAUTY", style: "font-sans font-light text-xl sm:text-2xl tracking-[0.2em] uppercase" },
    { name: "EDUCATION", style: "font-sans font-black text-xl sm:text-2xl tracking-tight uppercase" },
    { name: "& more", style: "font-sans font-bold text-lg sm:text-xl text-[#FF1493]" },
  ];

  const statsList = [
    { value: "50+", label: "Brands Served", icon: "📈", iconBg: "from-[#FF1493] to-[#D91499]" },
    { value: "6+", label: "Countries", icon: "🌐", iconBg: "from-[#4B00B5] to-[#0073E6]" },
    { value: "₹1Cr+", label: "Ad Spend Managed Per Month", icon: "📢", iconBg: "from-[#FF1493] to-[#9D14C4]" },
    { value: "$10M+", label: "Revenue Generated For Clients", icon: "💰", iconBg: "from-[#9D14C4] to-[#4B00B5]" },
    { value: "3.5X", label: "Average MER Improvement", icon: "📈", iconBg: "from-[#FF1493] to-[#00B4FF]" },
    { value: "98%", label: "Client Retention Rate", icon: "⭐", iconBg: "from-[#4B00B5] to-[#FF1493]" },
  ];

  return (
    <section id="testimonials" className="w-full gocreative-gradient-bg py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none border-t border-white/20">
      {/* Retaining the exact older background gradient (gocreative-gradient-bg) with subtle ambient light */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Heading matching exact layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-14 sm:mb-16"
        >
          <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#FF1493] inline-block mb-3 bg-[#0A1226]/80 px-4 py-1.5 rounded-full border border-[#FF1493]/30 shadow-md">
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[54px] leading-tight tracking-tight mb-4">
            Results They Love. <span className="gocreative-gradient-text">Partnerships We Value.</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg font-medium">
            Honest words from founders and marketers who&apos;ve <span className="underline decoration-[#FF1493] decoration-2 underline-offset-4 font-bold text-white">scaled with us.</span>
          </p>
        </motion.div>

        {/* 5 Testimonial Carousel Grid with Left & Right Nav Arrows */}
        <div className="relative mb-20 flex items-center justify-between gap-4">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0A1226]/90 hover:bg-[#FF1493] border border-white/20 hover:border-[#FF1493] text-white flex items-center justify-center shrink-0 shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer z-20"
            aria-label="Previous Testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 5 Cards Display Grid (Show all 5 responsive, middle highlighted) */}
          <div
            ref={carouselRef}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 w-full items-stretch"
          >
            {testimonials.map((item, idx) => {
              // Highlight the center card (Shaily Mehrotra, or currently active card on mobile)
              const isHighlight = idx === 2;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="w-full h-full flex"
                >
                  <BorderGlow
                    edgeSensitivity={35}
                    glowColor={item.borderGlowHsl}
                    backgroundColor="#080F22"
                    borderRadius={28}
                    glowRadius={36}
                    glowIntensity={isHighlight ? 1.5 : 1.1}
                    coneSpread={30}
                    colors={item.borderGlowColors}
                    className={`w-full h-full group transition-all duration-500 shadow-2xl ${
                      isHighlight ? "scale-[1.03] sm:scale-105 z-10" : "hover:scale-[1.02]"
                    }`}
                  >
                    <div
                      className={`w-full h-full flex flex-col justify-between p-6 sm:p-7 rounded-[inherit] overflow-hidden backdrop-blur-xl relative transition-all ${
                        isHighlight
                          ? "bg-[#0A1226]/95 border border-[#FF1493]/60 shadow-[0_0_35px_rgba(255,20,147,0.35)]"
                          : "bg-[#060B18]/90 border border-white/15 hover:border-white/30"
                      }`}
                    >
                      {/* Top Quote Icon */}
                      <div className="text-[#FF1493] text-3xl font-serif font-black leading-none mb-3 opacity-90">
                        &ldquo;
                      </div>

                      {/* Quote Copy with Highlighted Segment */}
                      <p className="text-white/85 text-[13.5px] sm:text-[14px] leading-[1.65] mb-6 flex-grow font-normal">
                        {item.quoteBefore}
                        <span className={`${item.highlightColor} font-bold`}>{item.quoteHighlight}</span>
                        {item.quoteAfter}
                      </p>

                      {/* Footer Profile Details */}
                      <div className="flex items-center gap-3.5 pt-4 border-t border-white/10 mt-auto">
                        <div
                          className={`w-11 h-11 rounded-full ${item.avatarBg} flex items-center justify-center font-black text-sm shrink-0 shadow-md border border-white/20`}
                        >
                          {item.avatarText}
                        </div>
                        <div className="flex flex-col leading-tight overflow-hidden">
                          <span className="text-white font-extrabold text-[15px] truncate group-hover:text-[#00B4FF] transition-colors">
                            {item.name}
                          </span>
                          <span className="text-white/60 text-xs font-semibold mt-0.5 truncate">
                            {item.title}
                          </span>
                          <span className="text-white/45 text-[11px] font-medium truncate">
                            {item.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0A1226]/90 hover:bg-[#FF1493] border border-white/20 hover:border-[#FF1493] text-white flex items-center justify-center shrink-0 shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer z-20"
            aria-label="Next Testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* TRUSTED BY GROWING BRANDS ACROSS THE GLOBE Divider Strip */}
        <div className="flex items-center gap-4 sm:gap-6 max-w-5xl mx-auto mb-10 sm:mb-12">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-white/40 flex-grow" />
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.25em] text-white/70 whitespace-nowrap">
            TRUSTED BY GROWING BRANDS ACROSS THE GLOBE
          </span>
          <div className="h-[1px] bg-gradient-to-l from-transparent via-white/20 to-white/40 flex-grow" />
        </div>

        {/* 8 Logos Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 items-center justify-items-center mb-16 px-4">
          {brandLogos.map((brand, bIdx) => (
            <div
              key={bIdx}
              className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-default select-none text-center"
            >
              <span className={brand.style}>{brand.name}</span>
            </div>
          ))}
        </div>

        {/* Bottom 6 Stats Strip in Rounded Pill Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <BorderGlow
            edgeSensitivity={35}
            glowColor="330 100 54"
            backgroundColor="#080F22"
            borderRadius={32}
            glowRadius={40}
            glowIntensity={1.2}
            coneSpread={30}
            colors={["#FF1493", "#4B00B5", "#00B4FF"]}
            className="w-full shadow-2xl"
          >
            <div className="w-full bg-[#0A1226]/85 backdrop-blur-xl border border-white/20 rounded-[inherit] p-6 sm:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {statsList.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className={`flex flex-col items-center text-center ${
                    sIdx > 0 ? "pt-5 lg:pt-0 lg:pl-6" : ""
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${stat.iconBg} flex items-center justify-center text-white text-xl shadow-lg mb-3 transform hover:scale-110 transition-transform`}
                  >
                    {stat.icon}
                  </div>
                  <span className="font-black text-2xl sm:text-3xl text-white tracking-tight leading-none mb-1.5">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-white/65 uppercase tracking-wide leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
}
