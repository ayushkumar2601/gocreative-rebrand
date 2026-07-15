"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LocalizationSection() {
  const avatars = [
    {
      flag: "🇩🇪",
      greeting: "Guten Tag!",
      position: "top-[10%] left-[38%] sm:left-[42%]",
      color: "from-[#FF1493] to-[#4B00B5]",
      delay: 0,
    },
    {
      flag: "🇺🇸",
      greeting: "Hello AI!",
      position: "top-[6%] right-[18%] sm:right-[22%]",
      color: "from-[#00B4FF] to-[#4B00B5]",
      delay: 0.5,
    },
    {
      flag: "🇮🇹",
      greeting: "Ciao!",
      position: "bottom-[22%] left-[32%] sm:left-[35%]",
      color: "from-[#00B4FF] to-[#0A1F44]",
      delay: 1.0,
    },
    {
      flag: "🇬🇧",
      greeting: "Welcome!",
      position: "top-[38%] left-[45%] sm:left-[48%]",
      color: "from-[#4B00B5] to-[#FF1493]",
      delay: 1.5,
    },
    {
      flag: "🇫🇷",
      greeting: "Bonjour!",
      position: "top-[25%] right-[10%] sm:right-[14%]",
      color: "from-[#FF1493] to-[#00B4FF]",
      delay: 2.0,
    },
    {
      flag: "🇪🇸",
      greeting: "Hola!",
      position: "bottom-[14%] right-[32%] sm:right-[36%]",
      color: "from-[#00B4FF] to-[#FF1493]",
      delay: 2.5,
    },
    {
      flag: "🇵🇹",
      greeting: "Olá!",
      position: "bottom-[36%] right-[16%] sm:right-[20%]",
      color: "from-[#4B00B5] to-[#00B4FF]",
      delay: 3.0,
    },
  ];

  return (
    <section className="w-full bg-[#0A1F44] text-white py-20 sm:py-28 relative overflow-hidden select-none border-t border-white/15">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00B4FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Description, CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center z-20"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00B4FF] mb-4 border border-[#00B4FF]/30 w-fit">
              <span>GLOBAL SCALE & AI LOCALIZATION</span>
            </div>
            <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] tracking-tight uppercase">
              LEVERAGE THE POWER OF <span className="gocreative-gradient-text">AI LOCALIZATION</span>
            </h2>
            <p className="text-white/75 text-sm sm:text-base leading-[1.65] mt-5 max-w-[420px]">
              We generate high-converting ads and voiceovers in English, Spanish, German, French, Dutch, Italian, and Portuguese using native creators and proprietary AI cloning.
            </p>

            <div className="mt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#localize"
                className="inline-flex items-center gap-3 gocreative-gradient-bg text-white rounded-full px-8 py-4 text-sm sm:text-base font-bold shadow-[0_0_25px_rgba(255,20,147,0.5)] transition-all duration-200 group w-fit"
              >
                <span>Localize Your Campaigns</span>
                <svg
                  className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Dotted World Globe with Floating Creator Avatars & Language Badges */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[500px] flex items-center justify-center">
            {/* Dotted World Map Graphic Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
              <svg
                viewBox="0 0 600 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full scale-110"
              >
                {/* Dotted hemisphere grid lines */}
                {Array.from({ length: 18 }).map((_, row) =>
                  Array.from({ length: 26 }).map((_, col) => {
                    const cx = 80 + col * 18;
                    const cy = 60 + row * 18;
                    const distFromCenter = Math.sqrt(
                      Math.pow(cx - 300, 2) + Math.pow(cy - 225, 2)
                    );
                    if (distFromCenter > 200) return null;
                    return (
                      <circle
                        key={`${row}-${col}`}
                        cx={cx}
                        cy={cy}
                        r="3"
                        fill="#00B4FF"
                      />
                    );
                  })
                )}
                {/* Curved latitude arcs */}
                <ellipse
                  cx="300"
                  cy="225"
                  rx="180"
                  ry="80"
                  stroke="#FF1493"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />
                <ellipse
                  cx="300"
                  cy="225"
                  rx="120"
                  ry="180"
                  stroke="#00B4FF"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />
              </svg>
            </div>

            {/* 7 Floating Creator Avatar Circles with Language Speech Bubble Badges */}
            {avatars.map((avatar, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: avatar.delay,
                  ease: "easeInOut",
                }}
                className={`absolute ${avatar.position} z-10 flex flex-col items-center transition-transform duration-300 hover:scale-115 cursor-pointer`}
              >
                {/* Circular Creator Avatar Container */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/60 shadow-[0_0_20px_rgba(0,180,255,0.4)] overflow-hidden flex items-center justify-center">
                  <div
                    className={`w-full h-full bg-gradient-to-tr ${avatar.color} flex items-center justify-center text-white font-extrabold text-sm`}
                  >
                    <div className="w-8 h-8 rounded-full bg-black/30 border border-white/40 flex items-center justify-center text-base shadow">
                      🎙️
                    </div>
                  </div>
                </div>

                {/* Speech Bubble Badge */}
                <div className="mt-[-10px] z-20 bg-[#FF1493] text-white border border-white/40 px-3 py-0.5 rounded-full shadow-[0_0_15px_rgba(255,20,147,0.6)] flex items-center gap-1.5 text-[11px] sm:text-xs font-black whitespace-nowrap">
                  <span>{avatar.flag}</span>
                  <span>{avatar.greeting}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
