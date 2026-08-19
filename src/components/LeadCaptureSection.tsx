"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LeadCaptureSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    monthlySpend: "$20k - $50k",
    goal: "Scale ROAS & Lower CPA",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="book" className="w-full bg-[#060B18] py-12 sm:py-16 relative overflow-hidden text-white select-none">
      {/* Background Ambient Glow & Grid */}
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] rounded-full bg-[#4B00B5]/20 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00B4FF]/15 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Value Proposition & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 bg-[#0A1F44] text-white px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase mb-6 shadow-md border border-[#00B4FF]/40 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00B4FF] animate-pulse" />
              <span>FREE STRATEGY AUDIT</span>
            </div>

            <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] uppercase mb-6 tracking-tight">
              READY TO BUILD YOUR <span className="gocreative-gradient-text">PROFIT LOOP</span>?
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Claim your complimentary creative strategy audit. We analyze your current ad spend, uncover CPA leaks, and engineer a custom AI-driven creative pipeline tailored to scale your brand.
            </p>

            {/* What you get checklist */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#FF1493]/20 border border-[#FF1493]/50 flex items-center justify-center text-[#FF1493] shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Full Ad Account & Creative Audit</h4>
                  <p className="text-white/60 text-xs mt-0.5">We tear down your top 10 competitors and diagnose fatigue.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#00B4FF]/20 border border-[#00B4FF]/50 flex items-center justify-center text-[#00B4FF] shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Custom 90-Day Scaling Blueprint</h4>
                  <p className="text-white/60 text-xs mt-0.5">Exact UGC concepts, hook iterations, and budget allocation plan.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#4B00B5]/30 border border-white/30 flex items-center justify-center text-white shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Zero Obligation Proposal</h4>
                  <p className="text-white/60 text-xs mt-0.5">No pushy sales calls. Just actionable, data-backed strategy.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Info Card */}
            <div className="bg-[#0A1F44]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/15 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white/50 uppercase tracking-wider">Direct Email Inquiry</p>
                <p className="text-base font-extrabold text-white mt-0.5">partners@gocreative.ai</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-white/50 uppercase tracking-wider">Average Response</p>
                <p className="text-base font-extrabold text-[#00B4FF] mt-0.5">&lt; 2 Hours</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#141E38]/95 backdrop-blur-2xl rounded-[32px] p-8 sm:p-10 shadow-2xl border border-white/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF1493]/15 via-transparent to-transparent pointer-events-none" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#38EF7D] to-[#00B4FF] flex items-center justify-center text-white text-4xl font-black mb-6 shadow-[0_0_40px_rgba(56,239,125,0.4)]">
                    ✓
                  </div>
                  <h3 className="font-black text-3xl text-white uppercase mb-3">
                    STRATEGY AUDIT REQUESTED!
                  </h3>
                  <p className="text-white/80 max-w-md mx-auto text-base leading-relaxed mb-8">
                    Thank you, <span className="font-bold text-[#00B4FF]">{formState.name}</span>. Our growth directors are reviewing your brand right now. You will receive an exclusive calendar invitation within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full border border-white/30 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                  <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-2">
                    <h3 className="font-extrabold text-xl text-white tracking-tight">
                      Request Your Free Audit & Proposal
                    </h3>
                    <span className="text-xs font-bold text-[#00B4FF] uppercase tracking-wider">
                      100% Confidential
                    </span>
                  </div>

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                        Full Name <span className="text-[#FF1493]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Rivera"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="bg-[#0A1F44]/90 border border-white/20 focus:border-[#00B4FF] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                        Business Email <span className="text-[#FF1493]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@yourbrand.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="bg-[#0A1F44]/90 border border-white/20 focus:border-[#00B4FF] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                        Brand / Company Name <span className="text-[#FF1493]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aura Athletics"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="bg-[#0A1F44]/90 border border-white/20 focus:border-[#00B4FF] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                        Website / Social Handle <span className="text-[#FF1493]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. auraathletics.com"
                        value={formState.website}
                        onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                        className="bg-[#0A1F44]/90 border border-white/20 focus:border-[#00B4FF] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Monthly Ad Spend & Primary Goal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                        Monthly Ad Spend Budget
                      </label>
                      <select
                        value={formState.monthlySpend}
                        onChange={(e) => setFormState({ ...formState, monthlySpend: e.target.value })}
                        className="bg-[#0A1F44]/90 border border-white/20 focus:border-[#00B4FF] rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors cursor-pointer"
                      >
                        <option value="< $20k">&lt; $20,000 / month</option>
                        <option value="$20k - $50k">$20,000 - $50,000 / month</option>
                        <option value="$50k - $150k">$50,000 - $150,000 / month</option>
                        <option value="$150k+">$150,000+ / month</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                        Primary Scaling Objective
                      </label>
                      <select
                        value={formState.goal}
                        onChange={(e) => setFormState({ ...formState, goal: e.target.value })}
                        className="bg-[#0A1F44]/90 border border-white/20 focus:border-[#00B4FF] rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors cursor-pointer"
                      >
                        <option value="Scale ROAS & Lower CPA">Scale ROAS &amp; Lower CPA</option>
                        <option value="High-Volume UGC & Reels Production">High-Volume UGC &amp; Reels Production</option>
                        <option value="Full-Stack Creative + Media Buying">Full-Stack Creative + Media Buying</option>
                        <option value="Explore Custom AI Growth Integration">Explore Custom AI Growth Integration</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Brief / Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                      Tell Us About Your Brand &amp; Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What is currently working? Where are your biggest CPA bottlenecks?"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="bg-[#0A1F44]/90 border border-white/20 focus:border-[#00B4FF] rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-3 gocreative-gradient-bg hover:opacity-95 text-white font-extrabold text-base uppercase tracking-wider py-4 rounded-xl shadow-2xl shadow-[#FF1493]/30 border border-white/30 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        ANALYZING BRAND DATA...
                      </span>
                    ) : (
                      <>
                        <span>CLAIM FREE AUDIT &amp; 90-DAY PROPOSAL</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-white/50 mt-1 font-medium">
                    🔒 By submitting, you agree to receive strategic growth updates from GoCreative. No spam ever.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
