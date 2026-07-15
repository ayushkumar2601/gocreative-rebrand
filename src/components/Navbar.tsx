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
      <nav className="w-full max-w-[1280px] bg-[#0A1F44]/90 backdrop-blur-xl text-white rounded-full px-5 sm:px-7 py-3 flex items-center justify-between shadow-[0_15px_40px_-10px_rgba(75,0,181,0.45)] border border-white/20 transition-all">
        {/* Left Logo */}
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="#"
          className="flex items-center gap-3 group"
        >
          <div className="flex items-center justify-center bg-white/90 p-1 rounded-full shadow-md group-hover:rotate-6 transition-transform">
            <img
              src="/logo.png"
              alt="GoCreative Logo"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-1 font-black text-xl sm:text-2xl tracking-[-0.03em] uppercase">
            <span className="text-white">GO</span>
            <span className="bg-gradient-to-r from-[#FF1493] via-[#00B4FF] to-[#F3F0FF] bg-clip-text text-transparent">CREATIVE</span>
          </div>
        </motion.a>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9 text-xs font-extrabold uppercase tracking-[0.14em] text-white/90">
          <motion.a
            whileHover={{ y: -1.5, color: "#00B4FF" }}
            href="#services"
            className="hover:opacity-100 transition-colors"
          >
            SERVICES
          </motion.a>
          <motion.a
            whileHover={{ y: -1.5, color: "#FF1493" }}
            href="#industries"
            className="hover:opacity-100 transition-colors"
          >
            INDUSTRIES
          </motion.a>
          <motion.a
            whileHover={{ y: -1.5, color: "#00B4FF" }}
            href="#our-work"
            className="hover:opacity-100 transition-colors"
          >
            OUR WORK
          </motion.a>
          <motion.a
            whileHover={{ y: -1.5, color: "#FF1493" }}
            href="#apply"
            className="hover:opacity-100 transition-colors"
          >
            CREATOR SYSTEM
          </motion.a>
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,20,147,0.6)" }}
            whileTap={{ scale: 0.97 }}
            href="#book"
            className="gocreative-gradient-bg text-white font-extrabold text-xs uppercase tracking-wider px-6 sm:px-7 py-3 rounded-full shadow-lg border border-white/25 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">BOOK A STRATEGY CALL</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
