"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface TreatmentsSectionProps {
  onOpenBooking: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onOpenBooking }) => {
  const treatments = [
    {
      title: "Chiropractic Care",
      image: "/images/disc_injury.webp",
      alt: "Chiropractic spinal assessment and disc care",
      description:
        "Assessment of spinal alignment, vertebral mobility, and joint mechanics to help address stiffness and posture-related physical strain.",
    },
    {
      title: "Osteopathic Care",
      image: "/images/joint_pain.webp",
      alt: "Osteopathic musculoskeletal care and joint mobility",
      description:
        "Manual evaluation and gentle musculoskeletal techniques aimed at supporting joint ease, soft-tissue mobility, and whole-body balance.",
    },
    {
      title: "Physiotherapy",
      image: "/images/sports_injury.webp",
      alt: "Physiotherapy exercise and sports movement rehabilitation",
      description:
        "Guided therapeutic movement, active exercise rehabilitation, and functional retraining tailored to individual recovery goals.",
    },
  ];

  return (
    <section id="treatments" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="clinic-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800">
            Clinical Services
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e2742] tracking-tight mt-1">
            Professional Care
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Back to Nature (Spinal Clinic) provides care through three core disciplines practiced by Dr Shahvez Iqbal according to individual patient assessment.
          </p>
        </div>

        {/* 3 Service Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {treatments.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-slate-200 rounded overflow-hidden bg-white shadow-2xs hover:border-slate-300 transition-colors"
            >
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col justify-between flex-1 text-left space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
