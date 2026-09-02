"use client";

import React, { useState } from "react";
import { Phone, Calendar, ArrowRight, ShieldCheck, Activity, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeSpineRegion, setActiveSpineRegion] = useState<"cervical" | "thoracic" | "lumbar" | "sacral">("lumbar");

  const spineDetails = {
    cervical: {
      name: "Cervical Spine (Neck)",
      description: "Supports head movement, posture balance, and neck mobility.",
      commonIssues: "Neck pain, tension headaches, shoulder discomfort",
    },
    thoracic: {
      name: "Thoracic Spine (Mid Back)",
      description: "Provides ribcage stability and thoracic mobility.",
      commonIssues: "Postural strain, stiffness, mid-back discomfort",
    },
    lumbar: {
      name: "Lumbar Spine (Lower Back)",
      description: "Bears body weight and supports bending, twisting, and lifting.",
      commonIssues: "Lower back pain, disc concerns, nerve pinch sensations",
    },
    sacral: {
      name: "Sacroiliac & Pelvis",
      description: "Connects the spine to the pelvis for stable locomotion.",
      commonIssues: "Pelvic joint strain, gait imbalance, deep ache",
    },
  };

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden medical-gradient-hero">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-sky-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Clinic Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-medium w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Back to Nature (Spinal Clinic)</span>
              <span className="text-teal-400">•</span>
              <span className="text-slate-600 font-normal">New Care Medical Center 5C4</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Move Better. <br />
              <span className="bg-gradient-to-r from-teal-700 via-teal-600 to-sky-600 bg-clip-text text-transparent">
                Live Better.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Professional spinal and musculoskeletal care focused on helping you move with greater comfort and confidence.
            </p>

            {/* Doctor Attribution Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm backdrop-blur-sm max-w-xl">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-teal-300 flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-inner">
                  DS
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-slate-900 text-base sm:text-lg">
                      Dr Shahvez Iqbal
                    </h2>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      Practitioner
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs sm:text-sm text-slate-600">
                    <span className="font-medium text-teal-700">Chiropractor</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium text-teal-700">Osteopath</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium text-teal-700">Physiotherapist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base shadow-lg shadow-teal-700/25 hover:shadow-xl hover:shadow-teal-700/30 transition-all transform active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
              >
                <span>Explore Our Treatments</span>
              </a>

              <a
                href="tel:03183130220"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all sm:w-auto"
                title="Direct Phone Call"
              >
                <Phone className="w-4 h-4 text-teal-300" />
                <span>Call 03183130220</span>
              </a>
            </div>

            {/* Reassuring Notes */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Non-invasive physical assessment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Individualized consultation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>New Care Medical Center 5C4</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Modern Spine & Health Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 p-6 sm:p-8 text-white shadow-2xl border border-slate-700/60 overflow-hidden">
              
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-teal-400" />
                  <span className="font-semibold text-sm text-slate-200">Spinal Alignment Focus</span>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-teal-300/90 bg-teal-950/80 px-2.5 py-1 rounded-full border border-teal-800/60">
                  Interactive Diagram
                </span>
              </div>

              {/* Spine Graphic Visualization with interactive segment selectors */}
              <div className="py-6 flex flex-col items-center">
                <div className="w-full grid grid-cols-12 gap-4 items-center">
                  
                  {/* Spine SVG Graphic */}
                  <div className="col-span-5 flex justify-center">
                    <div className="relative py-2">
                      <svg
                        className="w-28 h-64 sm:h-72 drop-shadow-md transition-all duration-300"
                        viewBox="0 0 100 260"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Spinal Column Canal Axis */}
                        <path
                          d="M50 15 Q46 65 52 120 Q56 180 50 245"
                          stroke="#334155"
                          strokeWidth="3"
                          strokeDasharray="4 4"
                        />

                        {/* Cervical Vertebrae (C1-C7) */}
                        <g
                          className={`cursor-pointer transition-all ${
                            activeSpineRegion === "cervical" ? "scale-105" : "opacity-75 hover:opacity-100"
                          }`}
                          onClick={() => setActiveSpineRegion("cervical")}
                        >
                          <rect x="36" y="20" width="28" height="8" rx="4" fill={activeSpineRegion === "cervical" ? "#0EA5E9" : "#38BDF8"} />
                          <rect x="34" y="31" width="32" height="8" rx="4" fill={activeSpineRegion === "cervical" ? "#0EA5E9" : "#38BDF8"} />
                          <rect x="32" y="42" width="36" height="8" rx="4" fill={activeSpineRegion === "cervical" ? "#0EA5E9" : "#38BDF8"} />
                          <circle cx="50" cy="35" r="2.5" fill="#FFFFFF" />
                        </g>

                        {/* Thoracic Vertebrae (T1-T12) */}
                        <g
                          className={`cursor-pointer transition-all ${
                            activeSpineRegion === "thoracic" ? "scale-105" : "opacity-75 hover:opacity-100"
                          }`}
                          onClick={() => setActiveSpineRegion("thoracic")}
                        >
                          <rect x="29" y="58" width="42" height="9" rx="4.5" fill={activeSpineRegion === "thoracic" ? "#14B8A6" : "#0D9488"} />
                          <rect x="27" y="70" width="46" height="9" rx="4.5" fill={activeSpineRegion === "thoracic" ? "#14B8A6" : "#0D9488"} />
                          <rect x="26" y="82" width="48" height="9" rx="4.5" fill={activeSpineRegion === "thoracic" ? "#14B8A6" : "#0D9488"} />
                          <rect x="25" y="94" width="50" height="9" rx="4.5" fill={activeSpineRegion === "thoracic" ? "#14B8A6" : "#0D9488"} />
                          <rect x="26" y="106" width="48" height="9" rx="4.5" fill={activeSpineRegion === "thoracic" ? "#14B8A6" : "#0D9488"} />
                          <rect x="27" y="118" width="46" height="9" rx="4.5" fill={activeSpineRegion === "thoracic" ? "#14B8A6" : "#0D9488"} />
                          <circle cx="50" cy="90" r="2.5" fill="#FFFFFF" />
                        </g>

                        {/* Lumbar Vertebrae (L1-L5) */}
                        <g
                          className={`cursor-pointer transition-all ${
                            activeSpineRegion === "lumbar" ? "scale-105" : "opacity-75 hover:opacity-100"
                          }`}
                          onClick={() => setActiveSpineRegion("lumbar")}
                        >
                          <rect x="23" y="136" width="54" height="11" rx="5.5" fill={activeSpineRegion === "lumbar" ? "#10B981" : "#059669"} />
                          <rect x="21" y="150" width="58" height="11" rx="5.5" fill={activeSpineRegion === "lumbar" ? "#10B981" : "#059669"} />
                          <rect x="20" y="164" width="60" height="11" rx="5.5" fill={activeSpineRegion === "lumbar" ? "#10B981" : "#059669"} />
                          <rect x="20" y="178" width="60" height="11" rx="5.5" fill={activeSpineRegion === "lumbar" ? "#10B981" : "#059669"} />
                          <rect x="22" y="192" width="56" height="11" rx="5.5" fill={activeSpineRegion === "lumbar" ? "#10B981" : "#059669"} />
                          <circle cx="50" cy="165" r="3" fill="#FDE047" className="animate-ping" />
                          <circle cx="50" cy="165" r="3" fill="#FDE047" />
                        </g>

                        {/* Sacrum & Coccyx */}
                        <g
                          className={`cursor-pointer transition-all ${
                            activeSpineRegion === "sacral" ? "scale-105" : "opacity-75 hover:opacity-100"
                          }`}
                          onClick={() => setActiveSpineRegion("sacral")}
                        >
                          <polygon points="26,210 74,210 60,238 40,238" fill={activeSpineRegion === "sacral" ? "#F59E0B" : "#D97706"} />
                          <polygon points="42,240 58,240 50,254" fill={activeSpineRegion === "sacral" ? "#F59E0B" : "#D97706"} />
                        </g>
                      </svg>
                    </div>
                  </div>

                  {/* Region Selectors & Info */}
                  <div className="col-span-7 flex flex-col space-y-2">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Select Spinal Segment:
                    </span>
                    
                    <div className="grid grid-cols-2 gap-1.5">
                      {(["cervical", "thoracic", "lumbar", "sacral"] as const).map((region) => (
                        <button
                          key={region}
                          onClick={() => setActiveSpineRegion(region)}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-medium capitalize text-left transition-all ${
                            activeSpineRegion === region
                              ? "bg-teal-500/20 text-teal-200 border border-teal-400/50 shadow-xs"
                              : "bg-slate-800/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-700/50"
                          }`}
                        >
                          {region}
                        </button>
                      ))}
                    </div>

                    {/* Active Region Info Box */}
                    <div className="mt-2 p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 text-left">
                      <div className="text-xs font-bold text-teal-300">
                        {spineDetails[activeSpineRegion].name}
                      </div>
                      <p className="text-[12px] text-slate-300 mt-1 leading-snug">
                        {spineDetails[activeSpineRegion].description}
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-700/60 text-[11px] text-slate-400">
                        <span className="text-slate-300 font-semibold">Common concerns: </span>
                        {spineDetails[activeSpineRegion].commonIssues}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Clinical Area: Musculoskeletal & Spine</span>
                <a
                  href="#conditions"
                  className="text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1"
                >
                  View 10 Conditions <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
