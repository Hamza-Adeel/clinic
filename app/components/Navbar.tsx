"use client";

import React, { useState } from "react";
import { Phone, Calendar, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Conditions", href: "#conditions" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="clinic-container">
          <div className="flex items-center justify-between h-18 sm:h-20">
            
            {/* Logo */}
            <a href="#home" className="flex flex-col text-left focus:outline-none">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0e2742] leading-tight">
                Back to Nature
              </span>
              <span className="text-xs font-semibold text-teal-700 tracking-wider uppercase">
                Spinal Clinic
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Right Action */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:03183130220"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-sm font-medium transition-colors">
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call 03183130220</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded bg-[#0e2742] text-white text-xs font-medium"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700 rounded"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:03183130220"
                className="flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-slate-800 text-sm font-medium rounded"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call 03183130220</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 py-2.5 bg-[#0e2742] text-white text-sm font-medium rounded"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
