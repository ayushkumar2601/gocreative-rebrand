"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MetricsGrid() {
  const metrics = [
    {
      value: "2,000+",
      label: "AI ADS DELIVERED MONTHLY",
      bg: "bg-[#060B18]",
      border: "border-b sm:border-b-0 sm:border-r border-white/10",
    },
    {
      value: "30%",
      label: "AVERAGE DROP IN CPAS",
      bg: "bg-[#0A1F44]",
      border: "border-b border-white/10",
    },
    {
      value: "20%",
      label: "AVERAGE CVR BOOST AT SCALE",
      bg: "bg-[#0A1F44]",
      border: "border-b sm:border-b-0 sm:border-r border-white/10",
    },
    {
      value: "$700M",
      label: "PROFITABLE SPENT ON OUR ADS",
      bg: "bg-[#060B18]",
      border: "",
    },
  ];

  return (
    <section className="w-full border-t border-b border-white/15">
      <div className="grid grid-cols-1 sm:grid-cols-2 text-center select-none">
        {metrics.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className={`${item.bg} ${item.border} py-16 sm:py-20 px-6 flex flex-col items-center justify-center relative overflow-hidden group`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00B4FF]/0 via-[#FF1493]/0 to-[#FF1493]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <span className="gocreative-gradient-text font-black text-4xl sm:text-5xl lg:text-[60px] tracking-tight leading-none drop-shadow-md">
              {item.value}
            </span>
            <span className="text-white/80 font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.18em] mt-3 group-hover:text-white transition-colors">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
