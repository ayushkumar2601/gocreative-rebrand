import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-grid-pattern relative overflow-x-hidden">
      <TopBanner />
      <Navbar />

      {/* Page Header */}
      <section className="w-full bg-[#060B18] pt-20 pb-8 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00B4FF]/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00B4FF] mb-4 border border-[#00B4FF]/40">
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
            BOOK A <span className="gocreative-gradient-text">STRATEGY AUDIT</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mt-4 max-w-2xl mx-auto font-normal">
            Direct access to our growth directors. Fill out the confidential audit form below to receive your custom 90-day scaling blueprint.
          </p>
        </div>
      </section>

      {/* Lead Capture Form & FAQ */}
      <LeadCaptureSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
