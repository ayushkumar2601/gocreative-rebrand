"use client";

import React from "react";

export default function LocalizationSection() {
  const avatars = [
    {
      flag: "🇩🇪",
      greeting: "Guten Tag!",
      position: "top-[10%] left-[38%] sm:left-[42%]",
      color: "from-amber-600 to-yellow-500",
    },
    {
      flag: "🇺🇸",
      greeting: "Hello!",
      position: "top-[6%] right-[18%] sm:right-[22%]",
      color: "from-blue-600 to-indigo-500",
    },
    {
      flag: "🇮🇹",
      greeting: "Ciao!",
      position: "bottom-[22%] left-[32%] sm:left-[35%]",
      color: "from-green-600 to-emerald-500",
    },
    {
      flag: "🇬🇧",
      greeting: "Hello!",
      position: "top-[38%] left-[45%] sm:left-[48%]",
      color: "from-purple-600 to-indigo-600",
    },
    {
      flag: "🇫🇷",
      greeting: "Bonjour!",
      position: "top-[25%] right-[10%] sm:right-[14%]",
      color: "from-pink-600 to-rose-500",
    },
    {
      flag: "🇪🇸",
      greeting: "Hola!",
      position: "bottom-[14%] right-[32%] sm:right-[36%]",
      color: "from-red-600 to-orange-500",
    },
    {
      flag: "🇵🇹",
      greeting: "Olá!",
      position: "bottom-[36%] right-[16%] sm:right-[20%]",
      color: "from-teal-600 to-cyan-500",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#EFEBF9] via-[#EAE4FB] to-[#E5DEFA] py-20 sm:py-28 relative overflow-hidden select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Description, CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center z-20">
            <h2 className="text-[#111827] font-black text-3xl sm:text-4xl lg:text-[44px] leading-[1.08] tracking-tight">
              Leverage the power
              <br />
              of localization
            </h2>
            <p className="text-[#4B5563] text-sm sm:text-base leading-[1.65] mt-5 max-w-[400px]">
              We offer ads in English, Spanish, German, French, Dutch, Italian,
              and Portuguese to help you scale to new markets.
            </p>

            <div className="mt-8">
              <a
                href="#localize"
                className="inline-flex items-center gap-2.5 bg-[#1D1D1B] hover:bg-[#2B2B28] text-white rounded-full px-7 py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-black/15 transition-all duration-200 group w-fit"
              >
                <span className="text-[#D4F252] font-bold">
                  Localize Your Ads
                </span>
                <svg
                  className="w-4 h-4 text-[#D4F252] transform group-hover:translate-x-1 transition-transform"
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
              </a>
            </div>
          </div>

          {/* Right Column: Dotted World Globe with Floating Creator Avatars & Language Badges */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[500px] flex items-center justify-center">
            {/* Dotted World Map Graphic Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-45">
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
                        fill="#A594E8"
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
                  stroke="#C3B4F5"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />
                <ellipse
                  cx="300"
                  cy="225"
                  rx="120"
                  ry="180"
                  stroke="#C3B4F5"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />
              </svg>
            </div>

            {/* 7 Floating Creator Avatar Circles with Language Speech Bubble Badges */}
            {avatars.map((avatar, idx) => (
              <div
                key={idx}
                className={`absolute ${avatar.position} z-10 flex flex-col items-center transition-transform duration-300 hover:scale-110`}
              >
                {/* Circular Creator Avatar Container */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#8D6CEB] bg-white shadow-xl overflow-hidden flex items-center justify-center">
                  <div
                    className={`w-full h-full bg-gradient-to-tr ${avatar.color} flex items-center justify-center text-white font-extrabold text-sm`}
                  >
                    {/* Stylized Creator Silhouettes/Portraits */}
                    <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-base">
                      👤
                    </div>
                  </div>
                </div>

                {/* Lime Yellow Speech Bubble Badge */}
                <div className="mt-[-10px] z-20 bg-[#D4F252] text-[#111827] border border-black/10 px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1 text-[11px] sm:text-xs font-black whitespace-nowrap">
                  <span>{avatar.flag}</span>
                  <span>{avatar.greeting}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
