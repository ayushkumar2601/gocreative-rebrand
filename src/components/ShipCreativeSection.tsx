"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ShipCreativeSection() {
  const cards = [
    {
      bg: "bg-[#FF1493]",
      textColor: "text-white",
      descColor: "text-white/95",
      iconBg: "bg-[#060B18]",
      iconColor: "text-[#00B4FF]",
      title: "AI & Research\nDriven Strategy",
      description:
        "We turn performance data and audience psychology into creative hypotheses that scale exponentially with AI insights.",
    },
    {
      bg: "bg-[#00B4FF]",
      textColor: "text-[#060B18]",
      descColor: "text-[#060B18]/90",
      iconBg: "bg-white",
      iconColor: "text-[#00B4FF]",
      title: "Hybrid\nProduction\nModel",
      description:
        "High-polish studio content for brand authority combined with authentic creator-led videos for platform-native virality.",
    },
    {
      bg: "bg-[#4B00B5]",
      textColor: "text-white",
      descColor: "text-white/95",
      iconBg: "bg-[#FF1493]",
      iconColor: "text-white",
      title: "Omnichannel\nPaid Media",
      description:
        "Strategic campaign management and continuous algorithmic optimization across Meta, TikTok, YouTube, and connected TV.",
    },
    {
      bg: "gocreative-gradient-bg",
      textColor: "text-white",
      descColor: "text-white/95",
      iconBg: "bg-[#060B18]",
      iconColor: "text-[#00B4FF]",
      title: "AI-Powered\nPost-Production",
      description:
        "Proprietary AI workflows for rapid iteration, smart captioning, dynamic localizations, and high-converting ad hooks.",
    },
  ];

  return (
    <section className="w-full bg-[#060B18] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative border-t border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4B00B5]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FF1493] mb-4 border border-[#FF1493]/30">
            <span>PERFORMANCE CREATIVE</span>
          </div>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-tight uppercase">
            SHIP CREATIVE THAT DRIVES <span className="gocreative-gradient-text">REAL GROWTH</span>
          </h2>
          <p className="text-white/75 text-base sm:text-lg mt-3 font-normal">
            We combine creative strategy with cutting-edge AI tools and hyper-tested formats to deliver:
          </p>
        </motion.div>

        {/* 4 Colorful Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -12,
                scale: 1.025,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`${card.bg} ${card.textColor} rounded-[32px] p-8 sm:p-9 min-h-[410px] sm:min-h-[440px] flex flex-col justify-between shadow-2xl border border-white/20 cursor-pointer relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              {/* Top Section: Play Button & Title */}
              <div className="relative z-10">
                {/* Circle Play Button Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className={`w-12 h-12 rounded-2xl ${card.iconBg} ${card.iconColor} flex items-center justify-center shadow-lg mb-7 border border-white/20`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 ml-0.5"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </motion.div>

                {/* Card Title with line breaks */}
                <h3 className="text-2xl sm:text-3xl lg:text-[30px] font-black leading-[1.08] tracking-tight whitespace-pre-line">
                  {card.title}
                </h3>
              </div>

              {/* Bottom Description */}
              <p
                className={`${card.descColor} text-[15px] sm:text-base leading-[1.6] font-medium pt-8 relative z-10`}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

