import React from "react";
import { Phone, MapPin, Navigation } from "lucide-react";

interface ContactSectionProps {
  onOpenBookingModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="clinic-container">
        
        {/* Top CTA Header */}
        <div className="max-w-2xl mb-10 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800">
            Appointments & Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e2742] tracking-tight mt-1">
            Ready to Book an Appointment?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Contact Back to Nature (Spinal Clinic) directly via WhatsApp or phone call with Dr Shahvez Iqbal.
          </p>
        </div>

        <div className="max-w-3xl text-left">
          <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Back to Nature (Spinal Clinic)
              </h3>
              <p className="text-xs sm:text-sm text-teal-800 font-semibold mt-0.5">
                Dr Shahvez Iqbal • Chiropractor • Osteopath • Physiotherapist
              </p>
            </div>

            {/* Contact Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              

              {/* Call Card */}
              <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col justify-between space-y-3 shadow-2xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 text-teal-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Direct Phone Call
                    </div>
                    <a
                      href="tel:03142779877"
                      className="text-base font-bold text-slate-900 hover:text-teal-800 transition-colors block mt-0.5"
                    >
                      03142779877
                    </a>
                  </div>
                </div>

                <a
                  href="tel:03142779877"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0e2742] hover:bg-[#16385d] text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-300" />
                  <span>Call 03142779877</span>
                </a>
              </div>

            </div>

            {/* Address & Directions */}
            <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Clinic Location
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    New Care Medical Center 5C4
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=New+Care+Medical+Center+5C4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5 text-teal-700" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


