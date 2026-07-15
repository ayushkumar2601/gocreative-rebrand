"use client";

import React from "react";

export default function VisualSplitGrid() {
  return (
    <section className="w-full select-none overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT PANEL: Purple Ambient Workspace & Notes App UI */}
        <div className="relative h-[420px] sm:h-[520px] bg-gradient-to-br from-[#6D49D4] via-[#5C38C4] to-[#402294] p-6 sm:p-12 flex items-center justify-center overflow-hidden">
          {/* Simulated Workspace Shadow Details */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/30 pointer-events-none" />

          {/* Apple Notes UI Mockup Window */}
          <div className="relative z-10 w-full max-w-[380px] bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/80 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[#6035D0] font-semibold text-xs mb-4">
              <div className="flex items-center gap-1">
                <span>&lt;</span>
                <span>Notes</span>
              </div>
              <div className="flex items-center gap-3">
                {/* Share Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
                {/* More Dots */}
                <div className="w-5 h-5 rounded-full border border-[#6035D0] flex items-center justify-center text-[10px]">
                  •••
                </div>
              </div>
            </div>

            {/* Timestamp */}
            <div className="text-center text-[11px] font-medium text-gray-400 mb-4">
              March 11, 2025 at 18:23 PM
            </div>

            {/* Note Headline */}
            <h3 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight mb-3">
              One concept ≠ one ad
            </h3>

            {/* Highlighted Callout Band */}
            <div className="bg-[#EBE7FC] border-l-4 border-[#6035D0] rounded-r-lg px-3.5 py-2 mb-6">
              <p className="text-xs sm:text-sm font-bold text-[#374151]">
                Here&apos;s how to stretch it into hundreds of ads
              </p>
            </div>

            {/* Bottom Toolbar Icons */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-[#6035D0]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Dark Interior Scene & Floating Speech Bubble */}
        <div className="relative h-[420px] sm:h-[520px] bg-gradient-to-br from-[#292D30] via-[#1B1D1F] to-[#111213] p-6 sm:p-12 flex items-center justify-center overflow-hidden">
          {/* Simulated Dark Studio Table Scene */}
          <div className="absolute inset-0 opacity-40 flex items-end justify-start pointer-events-none">
            <div className="w-44 h-64 rounded-t-full bg-white/5 border border-white/10 blur-sm" />
          </div>

          {/* Floating Speech Bubble Pill Card */}
          <div className="relative z-10 bg-[#EBE7FC] text-[#111827] rounded-full px-6 sm:px-8 py-4 sm:py-5 shadow-2xl border border-white/90 flex items-center gap-3 transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-[400px]">
            {/* Left Heart Icon */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 text-sm">
              💜
            </div>

            {/* Speech Text */}
            <span className="font-extrabold text-base sm:text-lg tracking-tight">
              ad accounts we&apos;re obsessed with
            </span>

            {/* Speech Bubble Pointer Tail */}
            <div className="absolute -bottom-3 left-14 w-6 h-6 bg-[#EBE7FC] transform rotate-45 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
