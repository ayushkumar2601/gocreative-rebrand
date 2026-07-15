import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import PartnerLogos from "@/components/PartnerLogos";
import HeroVisual from "@/components/HeroVisual";
import ClientTicker from "@/components/ClientTicker";
import GrowthSystemSection from "@/components/GrowthSystemSection";
import ShipCreativeSection from "@/components/ShipCreativeSection";
import ProgressWorkflowSection from "@/components/ProgressWorkflowSection";
import MetricsGrid from "@/components/MetricsGrid";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocalizationSection from "@/components/LocalizationSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQSection from "@/components/FAQSection";
import BottomCTASection from "@/components/BottomCTASection";
import VisualSplitGrid from "@/components/VisualSplitGrid";
import GlobalTeamMarquee from "@/components/GlobalTeamMarquee";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-grid-pattern relative overflow-x-hidden">
      {/* Top Black Banner */}
      <TopBanner />

      {/* Floating Purple Capsule Navbar */}
      <Navbar />

      {/* Main Hero Section Content */}
      <main className="flex-1 w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-10 lg:pt-14 pb-16 lg:pb-24 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description, CTA & Badges */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left z-10">
            {/* Subhead Badge */}
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-[0.12em] uppercase mb-4">
              <span className="text-[#4B5563]">LOWER YOUR CPA WITH</span>
              <span className="text-[#6236D4]">DIRECT RESPONSE ADS</span>
            </div>

            {/* Main Headline <h1> */}
            <h1 className="text-[#111827] font-black text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] leading-[1.02] tracking-[-0.03em] uppercase mb-6">
              WE BUILD CREATIVE
              <br />
              SYSTEMS THAT DRIVE
              <br />
              PROFITABLE GROWTH
            </h1>

            {/* Description Paragraph */}
            <p className="text-[#4B5563] text-base sm:text-[17px] leading-[1.65] max-w-[480px] mb-8 font-normal">
              From research to production, media buying to optimization, we
              build complete systems that scale ad spend profitably.
            </p>

            {/* CTA Button */}
            <div className="mb-4">
              <a
                href="#partner"
                className="inline-flex items-center gap-2.5 bg-[#1D1D1B] hover:bg-[#2B2B28] rounded-full px-7 py-3.5 text-base font-semibold shadow-lg shadow-black/15 transition-all duration-200 group"
              >
                <span className="text-[#D4F252] font-bold">
                  Partner with us
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

            {/* TikTok & Meta Partner Badges */}
            <PartnerLogos />
          </div>

          {/* Right Column: Interactive Smartphone Mockup & Creative Cards Cluster */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </main>

      {/* Bottom Client Logo Ticker Strip */}
      <ClientTicker />

      {/* Section 2a: The Complete Growth Creative System (Lavender Circuit Architecture Diagram) */}
      <GrowthSystemSection />

      {/* Section 2b: Ship creative that drives real growth (Dark Section with 4 Colorful Pillar Cards) */}
      <ShipCreativeSection />

      {/* Section 2c: We Run The Whole Show - Here's How (Vibrant Stepped 3-Card Workflow Staircase) */}
      <ProgressWorkflowSection />

      {/* Section 3a: 2x2 Checkerboard Metrics Banner Grid */}
      <MetricsGrid />

      {/* Section 3b: Move fast, test smarter (Dark Portfolio Showcase with 4 Industry iPhones) */}
      <PortfolioShowcase />

      {/* Section 3c: Trusted by the Experts (Electric Purple Testimonials Grid) */}
      <TestimonialsSection />

      {/* Section 4a: Leverage the power of localization (Lavender Dotted Globe with 7 Language Avatars) */}
      <LocalizationSection />

      {/* Section 4b: Case Studies (Dark 3-Card Interactive Carousel) */}
      <CaseStudiesSection />

      {/* Section 4c: Frequently Asked Questions (Electric Purple Interactive Accordion) */}
      <FAQSection />

      {/* Section 5a: Lower your CAC with data-driven ads (Warm Cream CTA Banner with Clapper & Camera Icons) */}
      <BottomCTASection />

      {/* Section 5b: One concept ≠ one ad & Ad accounts we're obsessed with (2-Column Visual Split Grid) */}
      <VisualSplitGrid />

      {/* Section 5c: YOUR GLOBAL CREATIVE TEAM Infinite Scrolling Marquee */}
      <GlobalTeamMarquee />

      {/* Section 5d: Creative Milkshake Complete Footer */}
      <Footer />
    </div>
  );
}




