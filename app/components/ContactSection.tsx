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
            Contact Back to Nature (Spinal Clinic) to discuss your appointment with Dr Shahvez Iqbal.
          </p>
        </div>

        <div className="max-w-2xl text-left">
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Back to Nature (Spinal Clinic)
              </h3>
              <p className="text-xs text-teal-800 font-semibold mt-0.5">
                Dr Shahvez Iqbal • Chiropractor • Osteopath • Physiotherapist
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 pt-3 border-t border-slate-200 text-sm">
              <MapPin className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-900">Address:</div>
                <div className="text-slate-600">New Care Medical Center 5C4</div>
              </div>
            </div>

            {/* Phone Lines */}
            <div className="flex items-start gap-3 pt-3 border-t border-slate-200 text-sm">
              <Phone className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-900">Contact Numbers:</div>
                <div className="space-y-1 mt-1">
                  <div>
                    <a
                      href="tel:03183130220"
                      className="text-teal-800 hover:text-teal-950 font-bold block"
                    >
                      03183130220
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:03142779877"
                      className="text-teal-800 hover:text-teal-950 font-bold block"
                    >
                      03142779877
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-3">
              <a
                href="tel:03183130220"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#0e2742] hover:bg-[#16385d] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-300" />
                <span>Call Primary Line (03183130220)</span>
              </a>
              <a
                href="tel:03142779877"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                <span>Call Alternate Line (03142779877)</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=New+Care+Medical+Center+5C4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-semibold rounded-lg transition-colors"
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

