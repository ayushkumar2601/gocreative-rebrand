"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full pt-4 pb-2 px-4 sm:px-6 lg:px-8 flex justify-center sticky top-2 z-40"
    >
      <nav className="w-full max-w-[1260px] bg-[#6035D0] text-white rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-xl shadow-[#6035D0]/20 border border-white/10 transition-all">
        {/* Left Logo */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#"
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#6035D0] shadow-sm group-hover:rotate-6 transition-transform">
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
              {/* Straw or bubbles */}
              <path
                d="M12 1.5L14.5 4H10L12 1.5Z"
                fill="currentColor"
              />
              <circle cx="12" cy="9" r="1.5" fill="white" />
            </svg>
          </div>
          <span className="font-extrabold text-lg sm:text-xl tracking-[-0.03em] lowercase">
            creative milkshake
          </span>
        </motion.a>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-bold uppercase tracking-[0.12em] text-white/95">
          <motion.a
            whileHover={{ y: -1 }}
            href="#services"
            className="hover:text-white hover:opacity-100 opacity-90 transition-opacity"
          >
            SERVICES
          </motion.a>
          <motion.a
            whileHover={{ y: -1 }}
            href="#industries"
            className="hover:text-white hover:opacity-100 opacity-90 transition-opacity"
          >
            INDUSTRIES
          </motion.a>
          <motion.a
            whileHover={{ y: -1 }}
            href="#our-work"
            className="hover:text-white hover:opacity-100 opacity-90 transition-opacity"
          >
            OUR WORK
          </motion.a>
          <motion.a
            whileHover={{ y: -1 }}
            href="#apply"
            className="hover:text-white hover:opacity-100 opacity-90 transition-opacity"
          >
            APPLY AS A CREATOR
          </motion.a>
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#book"
            className="bg-white text-[#6035D0] hover:bg-[#F3F0FF] font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-5 sm:px-6 py-2.5 rounded-full shadow-sm transition-all duration-200"
          >
            BOOK A CALL
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
