import React from "react";
import { Activity, Disc, Dumbbell, UserCheck } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const trustCards = [
    {
      icon: Disc,
      title: "Spinal Care",
      description: "Support for common spinal and back-related concerns.",
      badge: "Targeted Alignment",
    },
    {
      icon: Activity,
      title: "Musculoskeletal Care",
      description: "Focused attention to joints, muscles and movement-related concerns.",
      badge: "Joint & Soft Tissue",
    },
    {
      icon: Dumbbell,
      title: "Sports Injury Care",
      description: "Support for sports and activity-related injuries.",
      badge: "Active Recovery",
    },
    {
      icon: UserCheck,
      title: "Personalized Approach",
      description: "Care centered around each patient's individual condition and needs.",
      badge: "Tailored Care",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
            Dedicated Clinical Attention
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Specialized Care for Your Spine & Movement
          </h2>
          <p className="text-sm text-slate-600 mt-1.5">
            Conservative and professional healthcare support focused on physical function, posture, and musculoskeletal comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-teal-300 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-600/10 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-teal-800 bg-teal-100/70 px-2.5 py-0.5 rounded-full">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-teal-800 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                  <span>Professional Assessment</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
