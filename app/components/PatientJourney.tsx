"use client";

import React from "react";
import { Calendar, UserCheck, ClipboardList, Activity, ArrowRight } from "lucide-react";

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: "01",
      title: "Book an Appointment",
      description: "Submit an appointment request online or call the clinic directly to schedule your visit at New Care Medical Center 5C4.",
      icon: Calendar,
    },
    {
      step: "02",
      title: "Initial Consultation",
      description: "Discuss your symptom history, movement limitations, physical activities, and specific spinal or musculoskeletal goals.",
      icon: UserCheck,
    },
    {
      step: "03",
      title: "Assessment & Care Planning",
      description: "Undergo physical and biomechanical evaluation to help formulate a personalized conservative care plan.",
      icon: ClipboardList,
    },
    {
      step: "04",
      title: "Ongoing Care",
      description: "Follow your tailored sessions, home exercise recommendations, and posture habits as indicated by your clinical progress.",
      icon: Activity,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/60">
            Care Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            How Your Patient Journey Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            A structured, professional process from first contact through individualized physical assessment and ongoing care.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:bg-white hover:border-teal-400 transition-all duration-300 shadow-xs hover:shadow-md text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-teal-600">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 text-[11px] font-medium text-slate-500">
                  Step {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Notice & CTA */}
        <div className="mt-12 text-center max-w-2xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm text-slate-500 italic">
            *Please note: The exact care plan and frequency of sessions depend on the individual&apos;s condition and professional assessment.
          </p>
          <div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md shadow-teal-700/20 transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Start Your Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
