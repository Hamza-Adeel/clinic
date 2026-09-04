"use client";

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { TreatmentsSection } from "./components/TreatmentsSection";
import { ConditionsSection } from "./components/ConditionsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { LegalModals } from "./components/LegalModals";
import { StickyMobileBar } from "./components/StickyMobileBar";

export default function Home() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  const handleScrollToBooking = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCloseModals = () => {
    setPrivacyOpen(false);
    setDisclaimerOpen(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-900 pb-14 sm:pb-0">
      {/* Header */}
      <Navbar onOpenBooking={handleScrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleScrollToBooking} />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Treatments Section */}
        <TreatmentsSection onOpenBooking={handleScrollToBooking} />

        {/* 4. Conditions Section */}
        <ConditionsSection onOpenBooking={handleScrollToBooking} />

        {/* 5. Appointment CTA & Contact Information */}
        <ContactSection onOpenBookingModal={handleScrollToBooking} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenDisclaimer={() => setDisclaimerOpen(true)}
      />

      {/* Sticky Mobile Call & Book Bar */}
      <StickyMobileBar onOpenBooking={handleScrollToBooking} />

      {/* Modals for Privacy & Disclaimer */}
      <LegalModals
        privacyOpen={privacyOpen}
        disclaimerOpen={disclaimerOpen}
        onClose={handleCloseModals}
      />
    </div>
  );
}

