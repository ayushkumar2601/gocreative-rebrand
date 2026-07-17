"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Farah Al-Eryani",
      handle: "@drsmile.nl",
      logoText: "drsmile",
      logoBg: "bg-white text-[#060B18] font-extrabold text-[10px]",
      quote:
        "The AI-driven performance was outstanding, ranking among our top ad sets globally. They delivered exceptional ROAS, were lightning fast, and scaled reliably.",
    },
    {
      name: "Annelise Falzer",
      handle: "@miracle.brand",
      logoText: "M*",
      logoBg: "bg-[#00B4FF] text-[#060B18] font-black text-xs",
      quote:
        "They've been incredibly communicative and consistently stick to aggressive growth timelines. Truly a pleasure to work with, I wish all creative partners operated like GoCreative.",
    },
    {
      name: "Tiana Westwood",
      handle: "@sittingprettyhalohair",
      logoText: "sitting pretty",
      logoBg: "bg-[#FF1493] text-white font-bold text-[8px]",
      quote:
        "They just get it! Always hit the mark and are months ahead of social algorithms and AI hooks. Taking strategic risks is what makes this team true trailblazers.",
    },
    {
      name: "Alex Georgiades",
      handle: "@wiseaccount",
      logoText: "wise",
      logoBg: "bg-[#4B00B5] text-white font-extrabold text-xs border border-white/30",
      quote:
        "They truly understand algorithmic paid strategy and get creative right, often you seem to find only one or the other.",
    },
    {
      name: "Laurence Dochy",
      handle: "@loopearplugs",
      logoText: "loop",
      logoBg: "bg-white text-[#060B18] font-bold text-xs lowercase",
      quote:
        "They understood our product mechanics instantly and used data insights to tap directly into the minds and buying triggers of our customers.",
    },
    {
      name: "Donna Ledwidg",
      handle: "@keyforher",
      logoText: "key",
      logoBg: "bg-[#00B4FF] text-[#060B18] font-extrabold text-xs lowercase",
      quote:
        "They absolutely nailed it, with everything from AI creative strategy, to finding the perfect creator talent and modular ad structure.",
    },
  ];

  return (
    <section id="testimonials" className="w-full gocreative-gradient-bg py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none border-t border-white/20">
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-black/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-3 border border-white/20">
            <span>PROVEN TRACK RECORD</span>
          </div>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[44px] tracking-tight uppercase drop-shadow-md">
            TRUSTED BY TOP <span className="text-white underline decoration-[#00B4FF] decoration-4 underline-offset-8">GROWTH LEADERS</span>
          </h2>
        </motion.div>

        {/* 6 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="bg-[#060B18]/95 backdrop-blur-xl border border-white/20 rounded-[28px] p-7 shadow-2xl flex flex-col justify-between hover:border-[#00B4FF] transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#00B4FF]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              {/* Top Profile Header */}
              <div className="flex items-center gap-3.5 mb-6 relative z-10">
                {/* Brand Avatar Icon */}
                <div
                  className={`w-12 h-12 rounded-full ${item.logoBg} flex items-center justify-center shrink-0 shadow-lg`}
                >
                  <span>{item.logoText}</span>
                </div>

                {/* Name & Handle */}
                <div className="flex flex-col leading-tight">
                  <span className="text-white font-extrabold text-[15px] tracking-tight group-hover:text-[#00B4FF] transition-colors">
                    {item.name}
                  </span>
                  <span className="text-white/60 text-xs font-medium mt-0.5">
                    {item.handle}
                  </span>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-white/80 text-[13.5px] sm:text-sm leading-[1.65] border-t border-white/10 pt-5 mt-auto relative z-10">
                &ldquo;{item.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
