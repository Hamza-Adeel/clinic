"use client";

import React, { useState } from "react";
import { Phone, Calendar, ArrowRight, ShieldAlert, Sparkles, Check, Info } from "lucide-react";

interface SpinalAnatomySectionProps {
  onOpenBooking: () => void;
}

export const SpinalAnatomySection: React.FC<SpinalAnatomySectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const spineSegments = [
    {
      name: "Cervical Region (C1 - C7)",
      title: "Neck Mobility & Cranial Support",
      details:
        "The cervical spine accommodates extensive rotational and flexion movement while supporting the weight of the head. Imbalances here are often linked to postural tension, neck stiffness, and tension headaches.",
      indicators: [
        "Head-turning restriction",
        "Base-of-skull tension",
        "Shoulder girdle stiffness",
        "Desk-worker posture strain"
      ],
      color: "from-sky-500 to-blue-600"
    },
    {
      name: "Thoracic Region (T1 - T12)",
      title: "Mid-Back Stability & Ribcage Architecture",
      details:
        "The thoracic spine anchors the ribcage and protects vital thoracic structures. While less mobile than the neck or lower back, stiffness here frequently forces compensation onto the lumbar spine and neck.",
      indicators: [
        "Mid-back tightness between shoulder blades",
        "Restricted torso rotation",
        "Chest expansion discomfort during deep breaths",
        "Curvature asymmetries"
      ],
      color: "from-teal-500 to-emerald-600"
    },
    {
      name: "Lumbar Region (L1 - L5)",
      title: "Weight Bearing & Core Power",
      details:
        "The lumbar spine bears the majority of the body's mechanical load. Large intervertebral discs and robust musculature enable lifting, twisting, and bending. It is the most frequent region for mechanical strain.",
      indicators: [
        "Lower back ache following prolonged sitting or standing",
        "Sharp twinges during bending or lifting",
        "Restricted forward flexion",
        "Muscle guarding and spasm"
      ],
      color: "from-emerald-500 to-teal-700"
    },
    {
      name: "Sacroiliac & Pelvic Base",
      title: "Foundation & Locomotion Transfer",
      details:
        "The sacrum and sacroiliac joints transfer forces between the upper body and lower extremities during walking and running. Joint irritation here often mimics lower back or hip discomfort.",
      indicators: [
        "One-sided deep lower back/pelvic ache",
        "Discomfort when transitioning from sitting to standing",
        "Uneven stride mechanics",
        "Pelvic joint tenderness"
      ],
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="spine-health" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient medical glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-950/80 px-3.5 py-1 rounded-full border border-teal-800/80">
            Anatomical Health & Posture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
            Your Spine Deserves Specialized Attention
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            The human spine is a complex column of 33 vertebrae, intervertebral discs, ligaments, and nerves that coordinates every movement. Persistent or movement-related pain is a sign to seek a qualified professional assessment.
          </p>
        </div>

        {/* Interactive Spine Region Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Segment Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block mb-2">
              Explore Spinal Columns:
            </span>

            {spineSegments.map((seg, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border flex items-center justify-between ${
                  activeTab === idx
                    ? "bg-slate-800/90 border-teal-400/80 shadow-lg shadow-teal-950/50"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850"
                }`}
              >
                <div>
                  <div className={`text-xs font-bold ${activeTab === idx ? "text-teal-300" : "text-slate-400"}`}>
                    {seg.name}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mt-0.5">
                    {seg.title}
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${activeTab === idx ? "bg-teal-400 shadow-xs shadow-teal-400" : "bg-slate-700"}`} />
              </button>
            ))}
          </div>

          {/* Right Column: Active Segment Details & Visual Display */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-850 border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative">
              
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-700/80">
                <div>
                  <span className="text-[11px] font-mono text-teal-400 uppercase">
                    Clinical Overview
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {spineSegments[activeTab].title}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  {spineSegments[activeTab].name}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mt-4">
                {spineSegments[activeTab].details}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-700/80">
                <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Info className="w-4 h-4" />
                  Common Indicators for Clinical Assessment:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {spineSegments[activeTab].indicators.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200 bg-slate-900/70 p-2.5 rounded-xl border border-slate-800">
                      <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Strip */}
              <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Talk to the Clinic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:03183130220"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-sm font-semibold border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>Direct Call: 03183130220</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Small Medical Disclaimer Requirement */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-300">Medical Disclaimer: </span>
            Information on this website is for general informational purposes and does not replace professional medical assessment. Consult a qualified practitioner regarding specific health concerns.
          </p>
        </div>

      </div>
    </section>
  );
};
