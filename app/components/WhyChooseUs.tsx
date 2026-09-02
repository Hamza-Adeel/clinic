import React from "react";
import { UserCheck, Disc, HeartHandshake, PhoneCall, ShieldCheck } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: UserCheck,
      title: "Professional Care",
      description: "Care provided by a practitioner identified as a Chiropractor, Osteopath and Physiotherapist.",
      highlight: "Multidisciplinary Practitioner"
    },
    {
      icon: Disc,
      title: "Focused on Spinal Health",
      description: "A clinic identity centered around spinal and musculoskeletal concerns.",
      highlight: "Dedicated Clinical Scope"
    },
    {
      icon: HeartHandshake,
      title: "Patient-Centered Approach",
      description: "Clear communication and attention to individual concerns.",
      highlight: "Direct Consultations"
    },
    {
      icon: PhoneCall,
      title: "Convenient Contact",
      description: "Contact the clinic directly to discuss appointments and availability.",
      highlight: "Responsive Communication"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/60">
            Our Commitments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Why Choose Back to Nature?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Grounded in verified healthcare disciplines and direct, transparent patient communication.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-400 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-50/80 px-2 py-0.5 rounded">
                    {item.highlight}
                  </span>

                  <h3 className="font-bold text-slate-900 text-lg mt-3 group-hover:text-teal-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-teal-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
