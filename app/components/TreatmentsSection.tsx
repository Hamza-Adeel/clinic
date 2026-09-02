"use client";

import React from "react";
import { Disc, HeartHandshake, Activity, Calendar, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

interface TreatmentsSectionProps {
  onOpenBooking: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onOpenBooking }) => {
  const treatments = [
    {
      title: "Chiropractic Care",
      subtitle: "Spinal Alignment & Joint Function",
      icon: Disc,
      accentColor: "from-teal-600 to-teal-800",
      description:
        "Chiropractic care focuses on the relationship between spinal alignment, joint mechanics, and neuromuscular function. Assessment seeks to identify biomechanical restrictions that may contribute to stiffness, discomfort, or posture imbalance.",
      suitableFor: [
        "Individuals experiencing acute or persistent spinal discomfort",
        "Patients with postural stiffness from desk work or sedentary habits",
        "Those seeking non-invasive spinal joint assessment"
      ],
      practitionerRole: "Provided by Dr Shahvez Iqbal (Chiropractor)"
    },
    {
      title: "Osteopathic Care",
      subtitle: "Holistic Musculoskeletal & Tissue Mobility",
      icon: HeartHandshake,
      accentColor: "from-sky-700 to-slate-900",
      description:
        "Osteopathic approaches view the body as an integrated functional unit. Gentle manual assessment of joints, muscles, and fascial tissues helps support natural circulation, tissue ease, and overall biomechanical harmony.",
      suitableFor: [
        "Patients with generalized muscular tension and strain",
        "Individuals seeking gentle, whole-body biomechanical care",
        "People experiencing movement compensations from past injuries"
      ],
      practitionerRole: "Provided by Dr Shahvez Iqbal (Osteopath)"
    },
    {
      title: "Physiotherapy",
      subtitle: "Rehabilitation, Mobility & Exercise Therapy",
      icon: Activity,
      accentColor: "from-emerald-700 to-teal-900",
      description:
        "Physiotherapy focuses on restoring movement capacity, muscular strength, and physical endurance. Care plans involve guided therapeutic exercises, movement retraining, and functional rehabilitation tailored to individual capability.",
      suitableFor: [
        "Active individuals recovering from sports or recreational injuries",
        "Patients needing muscle strengthening around vulnerable joints",
        "Anyone aiming to improve daily physical mobility and resilience"
      ],
      practitionerRole: "Provided by Dr Shahvez Iqbal (Physiotherapist)"
    }
  ];

  return (
    <section id="treatments" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/60">
            Professional Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Treatments & Clinical Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Back to Nature (Spinal Clinic) provides care through three core healthcare disciplines, practiced by Dr Shahvez Iqbal according to individual patient assessments.
          </p>
        </div>

        {/* 3 Premium Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {treatments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-teal-400 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-xl relative overflow-hidden"
              >
                {/* Header with Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-teal-800 text-teal-300 flex items-center justify-center shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                      Discipline {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-teal-700 mt-1 uppercase tracking-wide">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Who It May Be Suitable For */}
                  <div className="mt-6 pt-5 border-t border-slate-200/70">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                      May Be Suitable For:
                    </h4>
                    <ul className="space-y-2">
                      {item.suitableFor.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer & Booking Action */}
                <div className="mt-8 pt-5 border-t border-slate-200/70 flex flex-col gap-3">
                  <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>{item.practitionerRole}</span>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-semibold text-sm transition-all shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-teal-300" />
                    <span>Book an Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Responsible Care Philosophy Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-teal-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold text-teal-200">
              Personalized Assessment First
            </h4>
            <p className="text-xs sm:text-sm text-teal-100/90 mt-1 max-w-2xl leading-relaxed">
              Every patient begins with a physical consultation to evaluate symptoms and determine whether chiropractic care, osteopathy, physiotherapy, or a combined approach is most appropriate.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="flex-shrink-0 px-5 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm shadow-md transition-all"
          >
            Schedule Assessment
          </button>
        </div>

      </div>
    </section>
  );
};
