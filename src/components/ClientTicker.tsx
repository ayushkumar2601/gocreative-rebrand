import React from "react";

export default function ClientTicker() {
  const row1Logos = [
    { name: "nectar", type: "nectar" },
    { name: "UBISOFT", type: "ubisoft" },
    { name: "BEN&JERRY'S", type: "benjerry" },
    { name: "COACH", type: "coach" },
    { name: "SkinnyFit", type: "skinnyfit" },
    { name: "Deutsche Bank", type: "deutsche" },
    { name: "fiverr.", type: "fiverr" },
    { name: "elementor", type: "elementor" },
    { name: "VSHRED", type: "vshred" },
    { name: "IL MAKIAGE", type: "ilmakiage" },
  ];

  const row2Logos = [
    { name: "loop", type: "loop" },
    { name: "PLEO", type: "pleo" },
    { name: "FUTURE PLAY", type: "futureplay" },
    { name: "NAVAN", type: "navan" },
    { name: "MIXTILES", type: "mixtiles" },
    { name: "Flying Tiger", type: "flyingtiger" },
    { name: "Allianz", type: "allianz" },
    { name: "amazon", type: "amazon" },
    { name: "Johnson&Johnson", type: "johnson" },
    { name: "TRUE CLASSIC", type: "trueclassic" },
  ];

  // Duplicate arrays for seamless 100% infinite marquee loops
  const duplicatedRow1 = [...row1Logos, ...row1Logos, ...row1Logos];
  const duplicatedRow2 = [...row2Logos, ...row2Logos, ...row2Logos];

  const renderLogo = (item: { name: string; type: string }, idx: number) => {
    switch (item.type) {
      case "nectar":
        return (
          <div key={idx} className="flex items-center gap-1.5 text-white/85 font-bold text-xl sm:text-2xl tracking-tight lowercase shrink-0">
            <span>nectar</span>
            <div className="w-2.5 h-2.5 bg-[#00B4FF] rounded-xs transform rotate-45 shadow-[0_0_8px_rgba(0,180,255,0.6)]" />
          </div>
        );
      case "ubisoft":
        return (
          <div key={idx} className="flex items-center gap-1.5 text-white/85 font-black text-xl sm:text-2xl tracking-wider uppercase shrink-0">
            <span>UBISOFT</span>
          </div>
        );
      case "benjerry":
        return (
          <div key={idx} className="font-extrabold text-lg sm:text-xl tracking-normal text-white/85 uppercase font-serif shrink-0">
            BEN&JERRY&apos;S
          </div>
        );
      case "coach":
        return (
          <div key={idx} className="w-10 h-10 rounded-full border border-white/70 flex items-center justify-center text-[9px] font-bold text-white/85 uppercase text-center leading-tight shrink-0">
            COACH
          </div>
        );
      case "skinnyfit":
        return (
          <div key={idx} className="flex items-center gap-1 font-bold text-xl sm:text-2xl text-white/85 tracking-tight shrink-0">
            <span>SkinnyFit</span>
            <span className="text-base text-[#FF1493]">♡</span>
          </div>
        );
      case "deutsche":
        return (
          <div key={idx} className="flex items-center gap-2 font-semibold text-lg sm:text-xl text-white/85 shrink-0">
            <span>Deutsche Bank</span>
            <div className="w-4 h-4 border border-[#00B4FF] flex items-center justify-center">
              <div className="w-2.5 h-0.5 bg-[#00B4FF] transform -rotate-45" />
            </div>
          </div>
        );
      case "fiverr":
        return (
          <div key={idx} className="font-black text-2xl sm:text-3xl text-white/85 tracking-tighter lowercase shrink-0">
            fiverr<span className="text-[#00B4FF]">.</span>
          </div>
        );
      case "elementor":
        return (
          <div key={idx} className="flex items-center gap-1.5 font-bold text-xl sm:text-2xl text-white/85 lowercase shrink-0">
            <div className="w-4 h-4 rounded-full border-2 border-[#FF1493] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#FF1493] rounded-full" />
            </div>
            <span>elementor</span>
          </div>
        );
      case "vshred":
        return (
          <div key={idx} className="font-black text-xl sm:text-2xl text-white/85 italic tracking-wider uppercase shrink-0">
            VSHRED
          </div>
        );
      case "ilmakiage":
        return (
          <div key={idx} className="flex flex-col items-center leading-none text-white/85 shrink-0">
            <span className="font-serif font-bold text-lg sm:text-xl tracking-[0.18em] uppercase">
              IL MAKIAGE
            </span>
            <span className="text-[8px] tracking-[0.3em] uppercase opacity-70">
              NEW YORK
            </span>
          </div>
        );
      case "loop":
        return (
          <div key={idx} className="font-bold text-2xl sm:text-3xl text-white/85 tracking-tight lowercase shrink-0">
            loop
          </div>
        );
      case "pleo":
        return (
          <div key={idx} className="font-extrabold text-xl sm:text-2xl text-white/85 tracking-widest uppercase shrink-0">
            PLEO
          </div>
        );
      case "futureplay":
        return (
          <div key={idx} className="w-9 h-9 rounded-full border border-white/70 flex items-center justify-center text-[7px] font-extrabold text-white/85 uppercase text-center leading-none shrink-0">
            FUTURE
            <br />
            PLAY
          </div>
        );
      case "navan":
        return (
          <div key={idx} className="font-extrabold text-xl sm:text-2xl text-white/85 tracking-[0.2em] uppercase shrink-0">
            nAvAn
          </div>
        );
      case "mixtiles":
        return (
          <div key={idx} className="flex items-center gap-1.5 font-extrabold text-xl sm:text-2xl text-white/85 tracking-wider uppercase shrink-0">
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 bg-[#00B4FF]" />
              <div className="w-1.5 h-1.5 bg-[#FF1493]" />
            </div>
            <span>MIXTILES</span>
          </div>
        );
      case "flyingtiger":
        return (
          <div key={idx} className="flex flex-col items-center leading-none text-white/85 shrink-0">
            <span className="font-bold text-lg sm:text-xl lowercase">
              Flying Tiger
            </span>
            <span className="text-[9px] opacity-70 lowercase">
              copenhagen
            </span>
          </div>
        );
      case "allianz":
        return (
          <div key={idx} className="flex items-center gap-2 font-bold text-xl sm:text-2xl text-white/85 shrink-0">
            <span>Allianz</span>
            <div className="w-5 h-5 rounded-full border border-[#00B4FF] flex items-center justify-center text-[9px] text-[#00B4FF]">
              |||
            </div>
          </div>
        );
      case "amazon":
        return (
          <div key={idx} className="font-bold text-2xl sm:text-3xl text-white/85 tracking-tighter lowercase shrink-0">
            amazon
          </div>
        );
      case "johnson":
        return (
          <div key={idx} className="font-serif italic font-bold text-xl sm:text-2xl text-white/85 tracking-tight shrink-0">
            Johnson&Johnson
          </div>
        );
      case "trueclassic":
        return (
          <div key={idx} className="font-black text-lg sm:text-xl text-white/85 tracking-widest uppercase shrink-0">
            TRUE CLASSIC
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#060B18] py-12 sm:py-16 border-y border-white/10 overflow-hidden select-none relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-10">
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-white/50">
          Trusted by <span className="text-[#00B4FF] font-black">100+ High-Growth Brands</span> &amp; Scale-Ups Worldwide
        </p>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10">
        {/* Row 1: Flowing Right to Left (Line 1) */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee flex items-center gap-14 sm:gap-20 pr-14 sm:pr-20">
            {duplicatedRow1.map((logo, idx) => renderLogo(logo, idx))}
          </div>
        </div>

        {/* Row 2: Flowing Left to Right (Line 2 - Reverse) */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-reverse flex items-center gap-14 sm:gap-20 pr-14 sm:pr-20">
            {duplicatedRow2.map((logo, idx) => renderLogo(logo, idx))}
          </div>
        </div>
      </div>
    </section>
  );
}
