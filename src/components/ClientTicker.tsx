"use client";

import React, { useState } from "react";

const allBrands = [
  { name: "Nabhi Sutra", domain: "nabhisutra.com" },
  { name: "Curryit", domain: "curryit.in" },
  { name: "Jaggercane", domain: "jaggercane.com" },
  { name: "Whimsy India", domain: null },
  { name: "Menoveda", domain: "menoveda.com" },
  { name: "Daughter Earth", domain: null },
  { name: "The Wellness Shop", domain: "thewellnessshop.in" },
  { name: "Bumberry", domain: null },
  { name: "Analogy Design", domain: "analogydesign.co" },
  { name: "Terrafit", domain: "terrafit.in" },
  { name: "Juhst", domain: null },
  { name: "Promote Education", domain: "promoteducation.com" },
  { name: "Your Wishlist", domain: "yourwishlist.co.in" },
  { name: "DP Supariwala", domain: "dpsupariwala.com" },
  { name: "Mango People Kids", domain: null },
  { name: "Kaari Katha", domain: "kaarikatha.com" },
  { name: "Poptagg", domain: null },
  { name: "Givo", domain: "givo.com" },
  { name: "Hue And Shades", domain: "hueandshades.com" },
  { name: "Pakhi India", domain: null },
  { name: "Islands of Loom", domain: "islandsofloom.com" },
  { name: "The Glow Company", domain: "theglowcompany.co" },
  { name: "Lively Living", domain: "livelyliving.com.au" },
  { name: "Project Montessori", domain: "au.projectmontessori.com" },
  { name: "Gingiber", domain: "gingiber.com" },
  { name: "Chris Riley Medium", domain: "chrisrileymedium.com" },
  { name: "Seedful", domain: null },
  { name: "Lureaux", domain: "lureaux.com" },
  { name: "Exalt", domain: null },
  { name: "Hormone Health Advantage", domain: "hormonehealthadvantage.com" },
  { name: "Grill Your Ass Off", domain: "grillyourassoff.com" },
  { name: "Fly A Flag", domain: "flyaflag.com" },
  { name: "AM Fishing", domain: "amfishingtx.com" },
  { name: "Buff Clucks", domain: "buffclucks.com" },
  { name: "Carplounge", domain: "carplounge.co.uk" },
  { name: "Review Boost Card", domain: null },
];

const row1Logos = allBrands.slice(0, 18);
const row2Logos = allBrands.slice(18);

const LogoItem = ({ item, idx }: { item: { name: string; domain: string | null }, idx: number }) => {
  const [imgError, setImgError] = useState(false);
  const showImg = item.domain && !imgError;

  return (
    <div key={`${item.name}-${idx}`} className="flex flex-col items-center justify-center shrink-0 min-w-[140px] h-24 transition-all duration-300 gap-3 group">
      {showImg ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=256`}
            alt={item.name}
            onError={() => setImgError(true)}
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-[12px] bg-white/5 p-1.5 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-[10px] sm:text-[11px] text-white/75 font-bold uppercase tracking-widest text-center group-hover:text-white transition-colors">
            {item.name}
          </span>
        </>
      ) : (
        <span className="font-extrabold text-sm sm:text-base text-white/90 tracking-wider uppercase text-center">
          {item.name}
        </span>
      )}
    </div>
  );
};

export default function ClientTicker() {
  // Duplicate arrays for seamless 100% infinite marquee loops
  const duplicatedRow1 = [...row1Logos, ...row1Logos, ...row1Logos];
  const duplicatedRow2 = [...row2Logos, ...row2Logos, ...row2Logos];

  return (
    <section className="w-full bg-[#060B18] py-6 sm:py-8 border-y border-white/10 overflow-hidden select-none relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-10">
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-white/50">
          Trusted by <span className="text-[#00B4FF] font-black">100+ High-Growth Brands</span> &amp; Scale-Ups Worldwide
        </p>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10">
        {/* Row 1: Flowing Right to Left (Line 1) */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee flex items-center gap-14 sm:gap-20 pr-14 sm:pr-20">
            {duplicatedRow1.map((item, idx) => (
              <LogoItem key={`r1-${idx}`} item={item} idx={idx} />
            ))}
          </div>
        </div>

        {/* Row 2: Flowing Left to Right (Line 2 - Reverse) */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-reverse flex items-center gap-14 sm:gap-20 pr-14 sm:pr-20">
            {duplicatedRow2.map((item, idx) => (
              <LogoItem key={`r2-${idx}`} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
