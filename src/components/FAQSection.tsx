"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What packages do you offer?",
      answer:
        "We offer comprehensive direct response creative packages tailored to your growth goals, including UGC creator bundles, hybrid studio + creator shoots, full-service paid social media management, and localization packages for global scaling.",
    },
    {
      question: "Do you offer an ongoing subscription?",
      answer:
        "Yes! We offer monthly creative testing retainers that consistently deliver a steady pipeline of high-converting ad variations, fresh creator concepts, and iterative data-backed variations to combat ad fatigue.",
    },
    {
      question: "Can you work with my existing content?",
      answer:
        "Absolutely. Our team excels at auditing your existing raw footage, brand assets, and historical creative to re-hook, re-edit, and re-engineer them into winning performance ad formats.",
    },
    {
      question: "Can I customize the content packages?",
      answer:
        "Yes, every brand operates at a different scale. We can customize the volume of UGC concepts, studio shoots, language localizations, and ad formats to align precisely with your monthly ad spend.",
    },
    {
      question: "Can I send you the scripts for the video ads?",
      answer:
        "Of course! You can provide your own scripts or collaborate with our seasoned direct-response copywriters who craft data-backed hooks and psychological angles designed specifically to lower CPA.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#6035D0] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[940px] mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-black text-3xl sm:text-4xl lg:text-[42px] tracking-tight text-center mb-14 sm:mb-18"
        >
          Frequently Asked Questions
        </motion.h2>

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
                className="bg-[#EBE7FC] hover:bg-white text-[#111827] rounded-3xl sm:rounded-[28px] px-6 sm:px-8 py-4 sm:py-5 shadow-lg transition-colors duration-200 cursor-pointer overflow-hidden"
              >
                {/* Question Header */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-extrabold text-base sm:text-lg tracking-tight">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-base shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-[#6035D0]" : ""
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
                      <div className="mt-3 pt-3 border-t border-[#D9D1F7] text-[#374151] text-sm sm:text-[15px] leading-relaxed font-medium">
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

