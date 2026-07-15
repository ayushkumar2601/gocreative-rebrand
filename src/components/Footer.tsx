"use client";

import React, { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setName("");
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#181818] text-white pt-16 sm:pt-20 pb-12 px-4 sm:px-8 lg:px-12 border-t border-white/10 select-none">
      <div className="max-w-[1360px] mx-auto">
        {/* Main Footer Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* LEFT COLUMN: Brand & Newsletter Form */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center bg-white p-1 rounded-full shadow-md group-hover:rotate-6 transition-transform">
                <img
                  src="/logo.png"
                  alt="GoCreative Logo"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div className="flex items-center gap-1 font-black text-xl sm:text-2xl tracking-[-0.03em] uppercase">
                <span className="text-white">GO</span>
                <span className="bg-gradient-to-r from-[#FF1493] via-[#00B4FF] to-[#F3F0FF] bg-clip-text text-transparent">CREATIVE</span>
              </div>
            </a>

            {/* Tagline */}
            <p className="text-white/75 text-xs sm:text-sm mt-4 max-w-[340px] leading-relaxed">
              GoCreative main colors are vibrant, modern, and tech-inspired, reflecting creativity, innovation, and trust. We create data-driven ads that scale.
            </p>

            {/* Divider Line */}
            <div className="border-b border-white/15 my-6 max-w-[340px]" />

            {/* Newsletter Heading */}
            <h4 className="font-extrabold text-base sm:text-lg text-white mb-4">
              Stay up to date with industry insights and trends.
            </h4>

            {/* Newsletter Subscription Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 max-w-[340px]"
            >
              <input
                type="text"
                placeholder="NAME*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-[#0A1F44] text-white placeholder:text-gray-400 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold border border-white/20 outline-none focus:ring-2 focus:ring-[#00B4FF]"
              />
              <input
                type="email"
                placeholder="EMAIL ADDRESS*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#0A1F44] text-white placeholder:text-gray-400 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold border border-white/20 outline-none focus:ring-2 focus:ring-[#00B4FF]"
              />
              <button
                type="submit"
                className="gocreative-gradient-bg hover:opacity-90 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-full px-5 py-3 transition-all shadow-lg active:scale-[0.98]"
              >
                {subscribed ? "SUBSCRIBED ✓" : "SUBSCRIBE"}
              </button>
            </form>
          </div>

          {/* MIDDLE COLUMN: ABOUT US & SERVICES + Social Icons */}
          <div className="lg:col-span-4 flex flex-col">
            {/* ABOUT US */}
            <div className="mb-8">
              <h5 className="text-[#00B4FF] font-extrabold text-xs uppercase tracking-wider mb-3">
                ABOUT US
              </h5>
              <ul className="flex flex-col gap-2.5 text-white/80 text-xs sm:text-sm">
                <li>
                  <a
                    href="#process"
                    className="hover:text-[#FF1493] transition-colors"
                  >
                    Our Process
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="hover:text-[#FF1493] transition-colors"
                  >
                    Creative Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#case-studies"
                    className="hover:text-[#FF1493] transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div className="mb-8">
              <h5 className="text-[#00B4FF] font-extrabold text-xs uppercase tracking-wider mb-3">
                SERVICES
              </h5>
              <ul className="flex flex-col gap-2.5 text-white/80 text-xs sm:text-sm">
                <li>
                  <a href="#meta" className="hover:text-[#FF1493] transition-colors">
                    META Ads
                  </a>
                </li>
                <li>
                  <a
                    href="#tiktok"
                    className="hover:text-[#FF1493] transition-colors"
                  >
                    TikTok Ads
                  </a>
                </li>
                <li>
                  <a
                    href="#youtube"
                    className="hover:text-[#FF1493] transition-colors"
                  >
                    YouTube Ads &amp; CTV
                  </a>
                </li>
                <li>
                  <a
                    href="#measurement"
                    className="hover:text-[#FF1493] transition-colors"
                  >
                    Paid Media &amp; Measurement
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full bg-[#0A1F44] border border-white/20 text-white flex items-center justify-center hover:scale-110 hover:border-[#FF1493] transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69A4.83 4.83 0 0 1 15.47 4.17V15.11A5.11 5.11 0 1 1 10.36 10a5.08 5.08 0 0 1 1.13.13V12.8A2.56 2.56 0 1 0 13 15.34V2.17h2.47A4.84 4.84 0 0 0 18 5.34v2.5a7.31 7.31 0 0 1 1.59-.15z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#0A1F44] border border-white/20 text-white flex items-center justify-center hover:scale-110 hover:border-[#FF1493] transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#0A1F44] border border-white/20 text-white flex items-center justify-center hover:scale-110 hover:border-[#FF1493] transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: INDUSTRIES */}
          <div className="lg:col-span-3 flex flex-col">
            <h5 className="text-[#00B4FF] font-extrabold text-xs uppercase tracking-wider mb-3">
              INDUSTRIES
            </h5>
            <ul className="flex flex-col gap-2.5 text-white/80 text-xs sm:text-sm">
              <li>
                <a
                  href="#gaming"
                  className="hover:text-[#FF1493] transition-colors"
                >
                  Gaming Lab
                </a>
              </li>
              <li>
                <a
                  href="#finance"
                  className="hover:text-[#FF1493] transition-colors"
                >
                  Finance
                </a>
              </li>
              <li>
                <a
                  href="#ecommerce"
                  className="hover:text-[#FF1493] transition-colors"
                >
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#saas" className="hover:text-[#FF1493] transition-colors">
                  Saas &amp; Apps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-white/60 text-[11px] sm:text-xs gap-4">
          <span>
            GoCreative Inc. • © 2026 All Rights Reserved • Vibrant, Tech-Inspired Growth Systems
          </span>
          <div className="flex items-center gap-6">
            <a href="#cookies" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
            <a
              href="#terms"
              className="text-[#00B4FF] hover:text-[#FF1493] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#privacy"
              className="text-[#00B4FF] hover:text-[#FF1493] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
