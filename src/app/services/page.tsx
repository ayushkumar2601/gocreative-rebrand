import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import ShipCreativeSection from "@/components/ShipCreativeSection";
import ProgressWorkflowSection from "@/components/ProgressWorkflowSection";
import VisualSplitGrid from "@/components/VisualSplitGrid";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-grid-pattern relative overflow-x-hidden">
      <TopBanner />
      <Navbar />

      {/* Page Header */}
      <section className="w-full bg-[#060B18] pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4B00B5]/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00B4FF] mb-4 border border-[#00B4FF]/40">
            <span>FULL-STACK CREATIVE &amp; MEDIA</span>
          </div>
          <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
            OUR <span className="gocreative-gradient-text">SERVICES</span> &amp; CAPABILITIES
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mt-4 max-w-2xl mx-auto font-normal">
            Everything your brand needs to scale from 6 to 8 figures profitably. We combine world-class creative production with algorithmic media buying.
          </p>
        </div>
      </section>

      {/* Core Components */}
      <ShipCreativeSection />
      <ProgressWorkflowSection />
      <VisualSplitGrid />
      <LeadCaptureSection />
      <Footer />
    </div>
  );
}
