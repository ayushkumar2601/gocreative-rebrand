import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-grid-pattern relative overflow-x-hidden">
      <TopBanner />
      <Navbar />

      {/* Page Header */}
      <section className="w-full bg-[#060B18] pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-[#FF1493]/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FF1493] mb-4 border border-[#FF1493]/40">
            <span>REELS &amp; CAMPAIGN SHOWCASE</span>
          </div>
          <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
            OUR <span className="gocreative-gradient-text">WORK</span> &amp; CREATIVE REELS
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mt-4 max-w-2xl mx-auto font-normal">
            Explore high-velocity reels, UGC concepts, and performance creative produced for the world&apos;s fastest-growing DTC and mobile app brands.
          </p>
        </div>
      </section>

      {/* Showcase Components */}
      <PortfolioShowcase />
      <CaseStudiesSection />
      <LeadCaptureSection />
      <Footer />
    </div>
  );
}
