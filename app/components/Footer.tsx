"use client";

import React from "react";
import { Activity, Phone, MapPin, Calendar, ArrowUp, ShieldCheck } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenPrivacy,
  onOpenTerms,
  onOpenDisclaimer,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Doctor", href: "#doctor" },
    { name: "Conditions", href: "#conditions" },
    { name: "Treatments", href: "#treatments" },
    { name: "Spine Health", href: "#spine-health" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Doctor Attribution Column */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight block leading-tight text-white">
                  BACK TO NATURE
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                  SPINAL CLINIC
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1.5 max-w-md">
              <div className="font-bold text-white text-sm">
                Dr Shahvez Iqbal
              </div>
              <div className="text-teal-300 font-medium">
                Chiropractor • Osteopath • Physiotherapist
              </div>
              <p className="text-slate-400 pt-1 leading-relaxed">
                Dedicated clinical practice focused on conservative spinal, joint, neck, and musculoskeletal health.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">
              Clinic Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">
              Contact & Location
            </h4>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Clinic Address:</div>
                  <div className="text-slate-400">New Care Medical Center 5C4</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Telephone Numbers:</div>
                  <div className="flex flex-col space-y-0.5 mt-0.5">
                    <a
                      href="tel:03183130220"
                      className="text-teal-300 hover:text-teal-200 font-semibold"
                    >
                      03183130220
                    </a>
                    <a
                      href="tel:03142779877"
                      className="text-teal-300 hover:text-teal-200 font-semibold"
                    >
                      03142779877
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span>Direct Phone & In-Person Appointments</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Back to Nature (Spinal Clinic). All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors underline underline-offset-4"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={onOpenDisclaimer}
              className="hover:text-slate-300 transition-colors underline underline-offset-4"
            >
              Medical Disclaimer
            </button>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
