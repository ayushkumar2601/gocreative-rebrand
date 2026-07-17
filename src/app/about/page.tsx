import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import GrowthSystemSection from "@/components/GrowthSystemSection";
import GlobalTeamMarquee from "@/components/GlobalTeamMarquee";
import LocalizationSection from "@/components/LocalizationSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-grid-pattern relative overflow-x-hidden">
      <TopBanner />
      <Navbar />

      {/* Page Header */}
      <section className="w-full bg-[#060B18] pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#4B00B5]/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FF1493] mb-4 border border-[#FF1493]/40">
            <span>OUR MISSION &amp; PHILOSOPHY</span>
          </div>
          <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
            THE TEAM BEHIND THE <span className="gocreative-gradient-text">SYSTEM</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mt-4 max-w-2xl mx-auto font-normal">
            We are a global collective of data scientists, creative strategists, media buyers, and creators obsessed with one goal: profitable unit economics.
          </p>
        </div>
      </section>

      {/* About System & Global Team */}
      <GrowthSystemSection />
      <LocalizationSection />
      <GlobalTeamMarquee />
      <LeadCaptureSection />
      <Footer />
    </div>
  );
}
