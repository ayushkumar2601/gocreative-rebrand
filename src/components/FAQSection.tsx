"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does your AI + Human hybrid creative process work?",
      answer:
        "We combine proprietary AI script writing and voice synthesis with seasoned native human creators. This allows us to produce high-converting ad variations 10x faster than traditional agencies while preserving genuine, authentic human connection.",
    },
    {
      question: "What direct response creative packages do you offer?",
      answer:
        "We offer comprehensive performance creative retainers, including UGC creator bundles, hybrid studio + creator shoots, AI localized global campaigns, and high-velocity testing packages engineered specifically for scaling brands.",
    },
    {
      question: "Can you re-engineer our existing content and raw footage?",
      answer:
        "Yes! Our growth editors audit your historical creative and raw assets to re-hook, re-edit, and re-frame them using data-backed psychological hooks, lowering your CPA without needing fresh shoots.",
    },
    {
      question: "How quickly do we get new creative test batches?",
      answer:
        "Our system operates at high velocity. Retainer clients receive fresh batches of modular ad concepts every single week, ensuring your media buyers always have winning creatives ready to deploy.",
    },
    {
      question: "Do you handle global localization across multiple languages?",
      answer:
        "Absolutely. We localize your top-performing concepts into English, Spanish, German, French, Italian, Dutch, and Portuguese using native talent and AI voice cloning so you can scale globally instantly.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#080D1A] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 select-none border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#4B00B5]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[940px] mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00B4FF] mb-3 border border-[#00B4FF]/30">
            <span>CLEAR ANSWERS</span>
          </div>
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[44px] tracking-tight uppercase">
            FREQUENTLY ASKED <span className="gocreative-gradient-text">QUESTIONS</span>
          </h2>
        </motion.div>

        {/* FAQ Stack */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.01 }}
                onClick={() => toggleFAQ(idx)}
                className={`rounded-3xl sm:rounded-[28px] px-6 sm:px-8 py-5 shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isOpen
                    ? "bg-[#141E38] border-[#00B4FF] shadow-[0_0_30px_rgba(0,180,255,0.2)]"
                    : "bg-[#0E172A]/90 border-white/15 hover:border-white/40"
                }`}
              >
                {/* Question Header */}
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`font-extrabold text-base sm:text-lg tracking-tight transition-colors ${
                      isOpen ? "text-[#00B4FF]" : "text-white group-hover:text-[#00B4FF]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-base shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 gocreative-gradient-bg text-white shadow-[0_0_15px_rgba(255,20,147,0.6)]"
                        : "bg-[#1E293B] text-[#00B4FF] border border-[#00B4FF]/30"
                    }`}
                  >
                    +
                  </div>
                </div>

                {/* Smooth Expandable Answer Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <div className="mt-4 pt-4 border-t border-white/10 text-white/80 text-sm sm:text-[15px] leading-relaxed font-medium">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

