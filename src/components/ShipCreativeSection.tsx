"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ShipCreativeSection() {
  const cards = [
    {
      bg: "bg-[#D4F252]",
      textColor: "text-[#111827]",
      descColor: "text-[#111827]/95",
      iconBg: "bg-[#181818]",
      iconColor: "text-white",
      title: "Research-\nDriven\nStrategy",
      description:
        "We turn performance data and audience psychology into creative hypotheses that actually scale.",
    },
    {
      bg: "bg-[#5B3DE8]",
      textColor: "text-white",
      descColor: "text-white/95",
      iconBg: "bg-white",
      iconColor: "text-[#5B3DE8]",
      title: "Hybrid\nProduction\nModel",
      description:
        "High-polish studio content for brand control. Authentic creator-led content for platform-native performance.",
    },
    {
      bg: "bg-[#F07641]",
      textColor: "text-white",
      descColor: "text-white/95",
      iconBg: "bg-white",
      iconColor: "text-[#F07641]",
      title: "Paid Media\nManagement",
      description:
        "Strategic campaign management across Meta, TikTok, YouTube, and beyond.",
    },
    {
      bg: "bg-[#EAE4FC]",
      textColor: "text-[#111827]",
      descColor: "text-[#111827]/90",
      iconBg: "bg-[#5B3DE8]",
      iconColor: "text-white",
      title: "AI-Powered\nWorkflow",
      description:
        "AI-assisted research, scripting, and post-production to deliver more ad variants, faster.",
    },
  ];

  return (
    <section className="w-full bg-[#181818] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1340px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-tight">
            Ship creative that drives real growth
          </h2>
          <p className="text-white/75 text-base sm:text-lg mt-3 font-normal">
            We combine creative strategy with cutting-edge AI tools to deliver:
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
                y: -10,
                scale: 1.015,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`${card.bg} ${card.textColor} rounded-[32px] p-8 sm:p-9 min-h-[410px] sm:min-h-[440px] flex flex-col justify-between shadow-xl cursor-pointer`}
            >
              {/* Top Section: Play Button & Title */}
              <div>
                {/* Circle Play Button Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className={`w-10 h-10 rounded-full ${card.iconBg} ${card.iconColor} flex items-center justify-center shadow-sm mb-7`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-0.5"
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
                className={`${card.descColor} text-[15px] sm:text-base leading-[1.6] font-medium pt-8`}
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

