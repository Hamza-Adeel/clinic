"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Calendar,
  Navigation,
  ExternalLink,
  Building2,
  PhoneCall,
  Clock,
  ShieldCheck,
  Edit3
} from "lucide-react";

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [showEditInfo, setShowEditInfo] = useState(false);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/60">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Contact Back to Nature (Spinal Clinic)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Reach out directly for consultation inquiries, appointments, and clinic directions at New Care Medical Center 5C4.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Details & Action Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Primary Phone Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-teal-400 transition-all flex flex-col justify-between text-left shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center mb-3 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wide">
                    Primary Line
                  </span>
                  <div className="text-lg font-bold text-slate-900 mt-1">
                    03183130220
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct practitioner & clinic reception line.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <a
                    href="tel:03183130220"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800"
                  >
                    <span>Call 03183130220</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Alternative Phone Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-teal-400 transition-all flex flex-col justify-between text-left shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-teal-300 flex items-center justify-center mb-3 shadow-sm">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide">
                    Alternative Line
                  </span>
                  <div className="text-lg font-bold text-slate-900 mt-1">
                    03142779877
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Secondary contact for appointments.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <a
                    href="tel:03142779877"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-teal-700"
                  >
                    <span>Call 03142779877</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Address & Facility Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl text-left">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                      Clinic Location
                    </span>
                    <span className="text-[11px] text-slate-400">In-Person Care</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    New Care Medical Center 5C4
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
                    Back to Nature (Spinal Clinic) is located inside New Care Medical Center 5C4.
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                    <a
                      href="tel:03183130220"
                      className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-colors"
                    >
                      Call Now
                    </a>
                    <button
                      onClick={onOpenBooking}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
                    >
                      Book Appointment
                    </button>
                    <button
                      onClick={() => setShowEditInfo(!showEditInfo)}
                      className="text-xs text-slate-400 hover:text-teal-300 flex items-center gap-1 ml-auto"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>{showEditInfo ? "Hide Notes" : "Location Notes"}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Editable Location Notice for Clinic Administrator */}
              {showEditInfo && (
                <div className="mt-4 p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 animate-in fade-in duration-200">
                  <div className="font-semibold text-teal-300 mb-1">
                    Clinic Administration & Map Details:
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Official address is specified as <strong>New Care Medical Center 5C4</strong>. To embed custom GPS coordinates or city map overlays, update the map module settings.
                  </p>
                </div>
              )}
            </div>

            {/* Operating Hours & Policy Information Notice */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
              <Clock className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Appointment Scheduling:</strong> Please contact the clinic directly via phone at <a href="tel:03183130220" className="text-teal-700 font-semibold underline">03183130220</a> or <a href="tel:03142779877" className="text-teal-700 font-semibold underline">03142779877</a> to confirm consultation timings and available doctor slots.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Placeholder (Configurable & Honest) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex-1 rounded-3xl bg-slate-100 border border-slate-200/90 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-sm">
              
              {/* Top Map Toolbar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Clinic Map & Navigator
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                  New Care Medical Center 5C4
                </span>
              </div>

              {/* Styled Interactive Map Canvas */}
              <div className="my-4 flex-1 min-h-[260px] sm:min-h-[300px] rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-teal-50 border border-slate-200 relative flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                
                {/* Visual grid lines to simulate clean medical architectural map */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

                {/* Road / Route Simulation Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 100 Q 150 120 300 80 T 600 140" stroke="#0D9488" strokeWidth="6" fill="none" />
                  <path d="M 120 0 Q 140 180 180 350" stroke="#94A3B8" strokeWidth="8" fill="none" />
                </svg>

                {/* Center Pin & Pulse */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-teal-500/20 animate-ping absolute -inset-0" />
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-700 to-slate-900 text-white flex items-center justify-center shadow-xl border-2 border-white relative z-10">
                      <Building2 className="w-7 h-7 text-teal-300" />
                    </div>
                  </div>

                  <div className="mt-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200 max-w-xs">
                    <div className="text-xs font-bold text-slate-900">
                      Back to Nature (Spinal Clinic)
                    </div>
                    <div className="text-[11px] text-teal-700 font-medium mt-0.5">
                      New Care Medical Center 5C4
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Dr Shahvez Iqbal
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Actions Bar */}
              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  Direct navigation assistance via phone
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:03183130220"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Get Directions / Call</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
