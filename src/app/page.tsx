import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import PartnerLogos from "@/components/PartnerLogos";
import HeroVisual from "@/components/HeroVisual";
import ClientTicker from "@/components/ClientTicker";
import GrowthSystemSection from "@/components/GrowthSystemSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ShipCreativeSection from "@/components/ShipCreativeSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BottomCTASection from "@/components/BottomCTASection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import GlobalTeamMarquee from "@/components/GlobalTeamMarquee";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-grid-pattern relative overflow-x-hidden">
      {/* Top Black Banner */}
      <TopBanner />

      {/* Floating Purple Capsule Navbar */}
      <Navbar />

      {/* 1. HERO MAIN FIRST SECTION - Intro video playing on right & major headlines on left */}
      <main className="flex-1 w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 pt-3 sm:pt-5 lg:pt-7 pb-8 lg:pb-12 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description, CTA & Badges */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left z-10">
            {/* Subhead Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0A1F44] text-white px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase mb-6 shadow-md border border-white/20 w-fit">
              <span className="text-[#00B4FF]">TECH-INSPIRED</span>
              <span className="text-white/40">•</span>
              <span className="bg-gradient-to-r from-[#FF1493] to-[#00B4FF] bg-clip-text text-transparent font-black">DATA-DRIVEN ADS</span>
            </div>

            {/* Main Headline <h1> */}
            <h1 className="text-[#0A1F44] font-black text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] leading-[1.04] tracking-[-0.03em] uppercase mb-6">
              WE BUILD <span className="gocreative-gradient-text">CREATIVE SYSTEMS</span>
              <br />
              THAT DRIVE
              <br />
              PROFITABLE GROWTH
            </h1>

            {/* Description Paragraph */}
            <p className="text-[#374151] text-base sm:text-[18px] leading-[1.65] max-w-[500px] mb-8 font-medium">
              From research to production, media buying to real-time measurement, GoCreative builds complete, tech-powered systems that scale your ad spend profitably.
            </p>

            {/* CTA Button */}
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="inline-flex items-center gap-3 gocreative-gradient-bg hover:opacity-95 rounded-full px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-[#4B00B5]/25 transition-all duration-300 transform hover:scale-105 group border border-white/30"
              >
                <span>Partner with GoCreative</span>
                <svg
                  className="w-4 h-4 text-white transform group-hover:translate-x-1.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="#profit-loop"
                className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-[#0A1F44] font-bold px-6 py-4 rounded-full border border-gray-200 shadow-sm transition-all text-sm hover:border-[#00B4FF]"
              >
                <span>Explore The System</span>
              </a>
            </div>

            {/* TikTok & Meta Partner Badges */}
            <PartnerLogos />
          </div>

          {/* Right Column: Interactive Smartphone Mockup & Creative Cards Cluster */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </main>

      {/* 2. CLIENTS BANNERS (Trusted by us or something) in 2 lines running continuously */}
      <ClientTicker />

      {/* 3. THE PROFIT LOOP (AI Growth Integration Engine Diagram) */}
      <GrowthSystemSection />

      {/* 4. OUR WORK (Reels section of our existing work) */}
      <PortfolioShowcase />

      {/* 5. OUR IMPACT & CASE STUDIES (Real Brands. Real Results.) */}
      <CaseStudiesSection />

      {/* 6. WORKFLOW & SERVICES */}

      {/* 7. TESTIMONIALS & LOCALIZATION */}
      <TestimonialsSection />

      {/* 8. FINAL CTA AND FORM SECTION TO COLLECT LEADS */}
      <BottomCTASection />
      <FAQSection />
      <LeadCaptureSection />

      {/* 9. FOOTER SECTION */}
      <GlobalTeamMarquee />
      <Footer />
    </div>
  );
}




