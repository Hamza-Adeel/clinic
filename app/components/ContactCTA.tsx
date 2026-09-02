"use client";

import React from "react";
import { Phone, Calendar, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface ContactCTAProps {
  onOpenBooking: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>Consultation & Physical Assessment</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Ready to Take the Next Step?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Speak with Back to Nature (Spinal Clinic) about your spinal or musculoskeletal concerns.
        </p>

        {/* Doctor Attribution Pill */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-700 text-xs text-slate-300">
          <span className="font-bold text-white">Dr Shahvez Iqbal</span>
          <span className="text-teal-400">•</span>
          <span>Chiropractor</span>
          <span className="text-teal-400">•</span>
          <span>Osteopath</span>
          <span className="text-teal-400">•</span>
          <span>Physiotherapist</span>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-base shadow-xl shadow-teal-950/40 transition-all active:scale-95"
          >
            <Calendar className="w-5 h-5" />
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <a
            href="tel:03183130220"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-semibold text-base border border-slate-700 transition-all"
          >
            <Phone className="w-5 h-5 text-teal-400" />
            <span>Call 03183130220</span>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>New Care Medical Center 5C4</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Direct Clinic Line</span>
          </div>
        </div>

      </div>
    </section>
  );
};
