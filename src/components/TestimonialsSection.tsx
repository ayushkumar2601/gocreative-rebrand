"use client";

import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Farah Al-Eryani",
      handle: "@drsmile.nl",
      logoText: "drsmile",
      logoBg: "bg-black text-white font-extrabold text-[10px]",
      quote:
        "The ad performance was outstanding, ranking among the top performers. They delivered exceptional results, they were fast, professional, and delivered on time.",
    },
    {
      name: "Annelise Falzer",
      handle: "@miracle.brand",
      logoText: "M*",
      logoBg: "bg-[#1E3A8A] text-white font-extrabold text-xs",
      quote:
        "They've been incredibly communicative and consistently stick to timelines. Truly a pleasure to work with, I wish all agencies operated with this level of reliability and collaboration.",
    },
    {
      name: "Tiana Westwood",
      handle: "@sittingprettyhalohair",
      logoText: "sitting pretty",
      logoBg: "bg-[#EAE4FB] text-[#4B5563] font-bold text-[8px]",
      quote:
        "They just get it! Always hit the mark and are ahead of the social trends. Taking risks and pushing boundaries is what makes the team strategic trailblazers.",
    },
    {
      name: "Alex Georgiades",
      handle: "@wiseaccount",
      logoText: "wise",
      logoBg: "bg-[#74D948] text-[#111827] font-extrabold text-xs",
      quote:
        "They truly understand paid strategy and get creative, often you seem to find one or the other.",
    },
    {
      name: "Laurence Dochy",
      handle: "@loopearplugs",
      logoText: "loop",
      logoBg: "bg-black text-white font-bold text-xs lowercase",
      quote:
        "They understood our product quickly and were able to get into the minds of our customers.",
    },
    {
      name: "Donna Ledwidg",
      handle: "@keyforher",
      logoText: "key",
      logoBg: "bg-[#FBEAF0] text-[#D946EF] font-extrabold text-xs lowercase",
      quote:
        "They absolutely nailed it, with everything from creative strategy, to finding the perfect talent and ad structure.",
    },
  ];

  return (
    <section className="w-full bg-[#6035D0] py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[42px] tracking-tight text-center mb-12 sm:mb-16">
          Trusted by the Experts
        </h2>

        {/* 6 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] p-7 shadow-xl flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Top Profile Header */}
              <div className="flex items-center gap-3.5 mb-6">
                {/* Brand Avatar Icon */}
                <div
                  className={`w-11 h-11 rounded-full ${item.logoBg} flex items-center justify-center shrink-0 shadow-sm border border-black/5`}
                >
                  <span>{item.logoText}</span>
                </div>

                {/* Name & Handle */}
                <div className="flex flex-col leading-tight">
                  <span className="text-[#111827] font-extrabold text-[15px] tracking-tight">
                    {item.name}
                  </span>
                  <span className="text-[#6B7280] text-xs font-medium mt-0.5">
                    {item.handle}
                  </span>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-[#374151] text-[13.5px] sm:text-sm leading-[1.65] border-t border-gray-100 pt-5 mt-auto">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
