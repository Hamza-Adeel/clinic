"use client";

import React from "react";
import { Phone, MapPin } from "lucide-react";

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenDisclaimer }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Conditions", href: "#conditions" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0e2742] text-slate-300 py-12 border-t border-[#1b3a5c]">
      <div className="clinic-container">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#1b3a5c] text-left">
          
          {/* Clinic & Doctor Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="text-lg font-bold text-white tracking-tight">
              Back to Nature
            </div>
            <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
              Spinal Clinic
            </div>
            <div className="pt-2 text-sm text-slate-300">
              <span className="font-semibold text-white">Dr Shahvez Iqbal</span>
              <div className="text-xs text-slate-400 mt-0.5">
                Chiropractor • Osteopath • Physiotherapist
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Navigation
            </div>
            <ul className="space-y-1.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-teal-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-2 text-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Contact
            </div>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <span>New Care Medical Center 5C4</span>
            </div>
            <div className="flex items-start gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <a href="tel:03183130220" className="hover:text-teal-300 block">
                  03183130220
                </a>
                <a href="tel:03142779877" className="hover:text-teal-300 block text-xs text-slate-400 mt-0.5">
                  03142779877
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} Back to Nature (Spinal Clinic). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-200 transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenDisclaimer}
              className="hover:text-slate-200 transition-colors underline underline-offset-4"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
