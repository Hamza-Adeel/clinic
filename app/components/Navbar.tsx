"use client";

import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
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

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-2.5">

              <a
                href="tel:03142779877"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                <span>Call: 03142779877</span>
              </a>
            </div>

            {/* Mobile Menu & Quick Actions Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="tel:03142779877"
                className="p-2 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center"
                aria-label="Call"
              >
                <Phone className="w-4 h-4 text-teal-700" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none"
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
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">

              <a
                href="tel:03142779877"
                className="flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-slate-800 border border-slate-200 text-sm font-semibold rounded-lg"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call: 03142779877</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

