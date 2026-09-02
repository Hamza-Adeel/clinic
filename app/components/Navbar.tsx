"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, ShieldAlert, Sparkles, Activity } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenDisclaimer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenDisclaimer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <>
      {/* Non-emergency Medical Notice Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded text-[11px] font-medium">
              Medical Center
            </span>
            <span className="hidden sm:inline">New Care Medical Center 5C4</span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span>Spinal & Musculoskeletal Care</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button 
              onClick={onOpenDisclaimer} 
              className="text-slate-400 hover:text-teal-300 transition-colors flex items-center gap-1 underline underline-offset-2"
            >
              <ShieldAlert className="w-3 h-3 text-teal-400" />
              Medical Disclaimer
            </button>
            <a 
              href="tel:03183130220" 
              className="font-semibold text-teal-300 hover:text-teal-200 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              03183130220
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-sm py-3"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-slate-900 via-teal-900 to-teal-700 flex items-center justify-center text-white shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform duration-200">
                <Activity className="w-6 h-6 text-teal-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-lg sm:text-xl tracking-tight leading-none group-hover:text-teal-700 transition-colors">
                  BACK TO NATURE
                </span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-teal-600 mt-1">
                  Spinal Clinic
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50/70 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:03183130220"
                className="hidden md:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-teal-700 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors"
                title="Call Clinic"
              >
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <span>03183130220</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white text-sm font-semibold shadow-md shadow-teal-700/20 hover:shadow-lg hover:shadow-teal-700/30 transition-all transform active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded-lg bg-teal-600 text-white text-xs font-semibold"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-teal-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 transition-all animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span>Practitioner:</span>
                <span className="font-semibold text-slate-800">Dr Shahvez Iqbal</span>
              </div>
              <a
                href="tel:03183130220"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-slate-800 hover:bg-slate-100 text-sm"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call 03183130220</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
