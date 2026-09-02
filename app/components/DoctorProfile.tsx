"use client";

import React from "react";
import { User, Calendar, ShieldCheck, Stethoscope, Phone, CheckCircle, Award } from "lucide-react";

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onOpenBooking }) => {
  return (
    <section id="doctor" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/60">
            Practitioner In Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Meet Dr Shahvez Iqbal
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Providing professional care focused on spinal, musculoskeletal and movement-related concerns.
          </p>
        </div>

        {/* Doctor Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
          
          {/* Subtle Ambient Backing */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Professional Portrait Placeholder (No fake photo) */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="w-48 h-56 sm:w-52 sm:h-60 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 border-2 border-slate-700/80 flex flex-col items-center justify-center p-6 text-center shadow-lg relative group">
                <div className="w-20 h-20 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 mb-3 shadow-inner">
                  <User className="w-10 h-10" />
                </div>
                <span className="text-xs font-semibold text-slate-300">Dr Shahvez Iqbal</span>
                <span className="text-[11px] text-teal-400 mt-0.5">Clinical Practitioner</span>
                
                <div className="mt-3 px-2 py-0.5 rounded bg-slate-800/90 text-[10px] text-slate-400 border border-slate-700">
                  Doctor Profile
                </div>
              </div>
            </div>

            {/* Right: Verified Credentials & Clinical Role */}
            <div className="md:col-span-8 flex flex-col space-y-4 text-left">
              
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Dr Shahvez Iqbal
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-medium">
                    Back to Nature (Spinal Clinic)
                  </span>
                </div>

                {/* Professional Titles */}
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-teal-300 text-xs font-semibold">
                    Chiropractor
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-teal-300 text-xs font-semibold">
                    Osteopath
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-teal-300 text-xs font-semibold">
                    Physiotherapist
                  </span>
                </div>
              </div>

              {/* Factual Intro */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Dr Shahvez Iqbal provides professional care focused on spinal, musculoskeletal and movement-related concerns. He works with patients to assess posture, joint mobility, spinal biomechanics, and soft-tissue function.
              </p>

              {/* Verified Clinical Scope List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Spinal & Joint Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Musculoskeletal Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Sports Injury Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Personalized Consultation</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold shadow-md shadow-teal-500/20 transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
                </button>

                <a
                  href="tel:03183130220"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>Direct: 03183130220</span>
                </a>
              </div>

            </div>

          </div>

          {/* Admin Editable Qualifications Section Placeholder (clearly marked, not fabricated) */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 text-[11px] text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Practitioner Listed at: New Care Medical Center 5C4</span>
            </div>
            <div className="text-slate-500 italic">
              *Full academic records and clinical registrations available directly at clinic reception.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
