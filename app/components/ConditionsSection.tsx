"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ConditionsSectionProps {
  onOpenBooking: () => void;
}

export const ConditionsSection: React.FC<ConditionsSectionProps> = ({ onOpenBooking }) => {
  const conditions = [
    {
      name: "Back Pain",
      image: "/images/back_pain.webp",
      desc: "Care and physical assessment for lower and mid-back discomfort, stiffness, or postural strain.",
    },
    {
      name: "Joint Pain",
      image: "/images/joint_pain.webp",
      desc: "Support for peripheral joint discomfort in knees, hips, and ankles to encourage movement ease.",
    },
    {
      name: "Sports Injury",
      image: "/images/sports_injury.webp",
      desc: "Rehabilitation and active physical support for sports and activity-related muscle or ligament strains.",
    },
    {
      name: "Neck Pain",
      image: "/images/neck_pain.webp",
      desc: "Assessment for cervical spine stiffness, posture fatigue, and restricted neck movement.",
    },
    {
      name: "Headache",
      image: "/images/headache.webp",
      desc: "Care for cervicogenic and tension-related head discomfort associated with neck and shoulder tightness.",
    },
    {
      name: "Scoliosis",
      image: "/images/scoliosis.webp",
      desc: "Supportive conservative care and posture management for spinal curvature and muscular balance.",
    },
    {
      name: "Disc Injury",
      image: "/images/disc_injury.webp",
      desc: "Conservative movement guidance and physical assessment for intervertebral disc irritation.",
    },
    {
      name: "Shoulder Pain",
      image: "/images/shoulder_pain.webp",
      desc: "Targeted evaluation for rotator cuff strain, shoulder stiffness, and overhead movement discomfort.",
    },
    {
      name: "Pinching Nerve",
      image: "/images/pinched_nerve.webp",
      desc: "Assessment for nerve pathway compression, tingling sensations, or radiating limb discomfort.",
    },
    {
      name: "Ankylosing Spondylitis",
      image: "/images/ankylosing_spondylitis.webp",
      desc: "Supportive physical therapy and gentle mobility routines to help maintain spinal flexibility.",
    },
  ];

  return (
    <section id="conditions" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="clinic-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800">
            Areas of Focus
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e2742] tracking-tight mt-1">
            What We Treat
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Assessment and conservative care may be available depending on each individual&apos;s condition after clinical evaluation.
          </p>
        </div>

        {/* Rich Condition Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {conditions.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden text-left flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div>
                {/* Image Preview */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} assessment and treatment at Back to Nature Spinal Clinic`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {item.name}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Discuss with clinic</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};
