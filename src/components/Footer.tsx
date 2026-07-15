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
            <a href="#" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#6035D0] shadow-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 4H16.5C17.0523 4 17.5 4.44772 17.5 5V9C17.5 12.0376 15.0376 14.5 12 14.5C8.96243 14.5 6.5 12.0376 6.5 9V5C6.5 4.44772 6.94772 4 7.5 4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11 16.5H13V19H15.5C16.0523 19 16.5 19.4477 16.5 20C16.5 20.5523 16.0523 21 15.5 21H8.5C7.94772 21 7.5 20.5523 7.5 20C7.5 19.4477 7.94772 19 8.5 19H11V16.5Z"
                    fill="currentColor"
                  />
                  <path d="M12 1.5L14.5 4H10L12 1.5Z" fill="currentColor" />
                  <circle cx="12" cy="9" r="1.5" fill="white" />
                </svg>
              </div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight lowercase">
                creative milkshake
              </span>
            </a>

            {/* Tagline */}
            <p className="text-white/70 text-xs sm:text-sm mt-3.5 max-w-[330px] leading-relaxed">
              We create data-driven ads that convert, and that&apos;s just the
              start.
            </p>

            {/* Divider Line */}
            <div className="border-b border-white/15 my-6 max-w-[330px]" />

            {/* Newsletter Heading */}
            <h4 className="font-extrabold text-base sm:text-lg text-white mb-4">
              Stay up to date with industry insights and trends.
            </h4>

            {/* Newsletter Subscription Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 max-w-[330px]"
            >
              <input
                type="text"
                placeholder="NAME*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-[#FAF8F3] text-[#111827] placeholder:text-gray-400 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold outline-none focus:ring-2 focus:ring-[#6035D0]"
              />
              <input
                type="email"
                placeholder="EMAIL ADDRESS*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#FAF8F3] text-[#111827] placeholder:text-gray-400 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold outline-none focus:ring-2 focus:ring-[#6035D0]"
              />
              <button
                type="submit"
                className="bg-[#EBE7FC] hover:bg-white text-[#6035D0] font-black text-xs sm:text-sm uppercase tracking-wider rounded-full px-5 py-3 transition-colors shadow-md active:scale-[0.98]"
              >
                {subscribed ? "SUBSCRIBED ✓" : "SUBSCRIBE"}
              </button>
            </form>
          </div>

          {/* MIDDLE COLUMN: ABOUT US & SERVICES + Social Icons */}
          <div className="lg:col-span-4 flex flex-col">
            {/* ABOUT US */}
            <div className="mb-8">
              <h5 className="text-[#D4F252] font-extrabold text-xs uppercase tracking-wider mb-3">
                ABOUT US
              </h5>
              <ul className="flex flex-col gap-2.5 text-white/80 text-xs sm:text-sm">
                <li>
                  <a
                    href="#process"
                    className="hover:text-white transition-colors"
                  >
                    Our Process
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="hover:text-white transition-colors"
                  >
                    Creative Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#case-studies"
                    className="hover:text-white transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div className="mb-8">
              <h5 className="text-[#D4F252] font-extrabold text-xs uppercase tracking-wider mb-3">
                SERVICES
              </h5>
              <ul className="flex flex-col gap-2.5 text-white/80 text-xs sm:text-sm">
                <li>
                  <a href="#meta" className="hover:text-white transition-colors">
                    META Ads
                  </a>
                </li>
                <li>
                  <a
                    href="#tiktok"
                    className="hover:text-white transition-colors"
                  >
                    TikTok Ads
                  </a>
                </li>
                <li>
                  <a
                    href="#youtube"
                    className="hover:text-white transition-colors"
                  >
                    YouTube Ads &amp; CTV
                  </a>
                </li>
                <li>
                  <a
                    href="#measurement"
                    className="hover:text-white transition-colors"
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
                className="w-7 h-7 rounded-md bg-white text-[#181818] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69A4.83 4.83 0 0 1 15.47 4.17V15.11A5.11 5.11 0 1 1 10.36 10a5.08 5.08 0 0 1 1.13.13V12.8A2.56 2.56 0 1 0 13 15.34V2.17h2.47A4.84 4.84 0 0 0 18 5.34v2.5a7.31 7.31 0 0 1 1.59-.15z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-7 h-7 rounded-md bg-white text-[#181818] flex items-center justify-center hover:scale-110 transition-transform"
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
                className="w-7 h-7 rounded-md bg-white text-[#181818] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: INDUSTRIES */}
          <div className="lg:col-span-3 flex flex-col">
            <h5 className="text-[#D4F252] font-extrabold text-xs uppercase tracking-wider mb-3">
              INDUSTRIES
            </h5>
            <ul className="flex flex-col gap-2.5 text-white/80 text-xs sm:text-sm">
              <li>
                <a
                  href="#gaming"
                  className="hover:text-white transition-colors"
                >
                  Gaming Lab
                </a>
              </li>
              <li>
                <a
                  href="#finance"
                  className="hover:text-white transition-colors"
                >
                  Finance
                </a>
              </li>
              <li>
                <a
                  href="#ecommerce"
                  className="hover:text-white transition-colors"
                >
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#saas" className="hover:text-white transition-colors">
                  Saas &amp; Apps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-white/50 text-[11px] sm:text-xs gap-4">
          <span>
            9490-4943 Québec inc DBA Creative Milkshake • © All Rights Reserved
          </span>
          <div className="flex items-center gap-6">
            <a href="#cookies" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
            <a
              href="#terms"
              className="text-[#9D83F7] hover:text-[#BAA6F9] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#privacy"
              className="text-[#9D83F7] hover:text-[#BAA6F9] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
