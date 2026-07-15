import React from "react";

export default function ClientTicker() {
  return (
    <section className="w-full bg-[#181818] py-8 sm:py-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col gap-6 sm:gap-8">
        {/* Row 1 Logos */}
        <div className="flex flex-wrap items-center justify-around gap-x-8 gap-y-6 sm:gap-x-12 opacity-80 hover:opacity-100 transition-opacity">
          {/* nectar */}
          <div className="flex items-center gap-1.5 text-white/80 font-bold text-lg sm:text-xl tracking-tight lowercase">
            <span>nectar</span>
            <div className="w-2.5 h-2.5 bg-white/80 rounded-xs transform rotate-45" />
          </div>

          {/* UBISOFT */}
          <div className="flex items-center gap-1.5 text-white/80 font-black text-lg sm:text-xl tracking-wider uppercase">
            <span>UBISOFT</span>
          </div>

          {/* BEN & JERRY'S */}
          <div className="font-extrabold text-base sm:text-lg tracking-normal text-white/80 uppercase font-serif">
            BEN&JERRY&apos;S
          </div>

          {/* COACH & ELEGANT emblem */}
          <div className="w-9 h-9 rounded-full border border-white/70 flex items-center justify-center text-[8px] font-bold text-white/80 uppercase text-center leading-tight">
            COACH
          </div>

          {/* SkinnyFit */}
          <div className="flex items-center gap-1 font-bold text-lg sm:text-xl text-white/80 tracking-tight">
            <span>SkinnyFit</span>
            <span className="text-sm">♡</span>
          </div>

          {/* Deutsche Bank */}
          <div className="flex items-center gap-2 font-semibold text-base sm:text-lg text-white/80">
            <span>Deutsche Bank</span>
            <div className="w-4 h-4 border border-white/80 flex items-center justify-center">
              <div className="w-2.5 h-0.5 bg-white/80 transform -rotate-45" />
            </div>
          </div>

          {/* fiverr. */}
          <div className="font-black text-xl sm:text-2xl text-white/80 tracking-tighter lowercase">
            fiverr<span className="text-green-500">.</span>
          </div>

          {/* elementor */}
          <div className="flex items-center gap-1.5 font-bold text-lg sm:text-xl text-white/80 lowercase">
            <div className="w-4 h-4 rounded-full border-2 border-white/80 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
            </div>
            <span>elementor</span>
          </div>

          {/* VSHRED */}
          <div className="font-black text-lg sm:text-xl text-white/80 italic tracking-wider uppercase">
            VSHRED
          </div>

          {/* IL MAKIAGE */}
          <div className="flex flex-col items-center leading-none text-white/80">
            <span className="font-serif font-bold text-base sm:text-lg tracking-[0.18em] uppercase">
              IL MAKIAGE
            </span>
            <span className="text-[7px] tracking-[0.3em] uppercase opacity-70">
              NEW YORK
            </span>
          </div>
        </div>

        {/* Row 2 Logos */}
        <div className="flex flex-wrap items-center justify-around gap-x-8 gap-y-6 sm:gap-x-12 opacity-75 hover:opacity-100 transition-opacity">
          {/* loop */}
          <div className="font-bold text-xl sm:text-2xl text-white/80 tracking-tight lowercase">
            loop
          </div>

          {/* PLEO */}
          <div className="font-extrabold text-lg sm:text-xl text-white/80 tracking-widest uppercase">
            PLEO
          </div>

          {/* FUTURE PLAY */}
          <div className="w-8 h-8 rounded-full border border-white/70 flex items-center justify-center text-[7px] font-extrabold text-white/80 uppercase text-center leading-none">
            FUTURE
            <br />
            PLAY
          </div>

          {/* NAVAN */}
          <div className="font-extrabold text-lg sm:text-xl text-white/80 tracking-[0.2em] uppercase">
            nAvAn
          </div>

          {/* MIXTILES */}
          <div className="flex items-center gap-1.5 font-extrabold text-lg sm:text-xl text-white/80 tracking-wider uppercase">
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 bg-white/80" />
              <div className="w-1.5 h-1.5 bg-white/80" />
            </div>
            <span>MIXTILES</span>
          </div>

          {/* Flying Tiger */}
          <div className="flex flex-col items-center leading-none text-white/80">
            <span className="font-bold text-base sm:text-lg lowercase">
              Flying Tiger
            </span>
            <span className="text-[8px] opacity-70 lowercase">
              copenhagen
            </span>
          </div>

          {/* Allianz */}
          <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-white/80">
            <span>Allianz</span>
            <div className="w-5 h-5 rounded-full border border-white/80 flex items-center justify-center text-[9px]">
              |||
            </div>
          </div>

          {/* amazon */}
          <div className="font-bold text-xl sm:text-2xl text-white/80 tracking-tighter lowercase relative">
            amazon
          </div>

          {/* Johnson & Johnson */}
          <div className="font-serif italic font-bold text-lg sm:text-xl text-white/80 tracking-tight">
            Johnson&Johnson
          </div>

          {/* TRUE CLASSIC */}
          <div className="font-black text-base sm:text-lg text-white/80 tracking-widest uppercase">
            TRUE CLASSIC
          </div>
        </div>
      </div>
    </section>
  );
}
