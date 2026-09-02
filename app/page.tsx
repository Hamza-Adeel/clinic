"use client";

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { AboutSection } from "./components/AboutSection";
import { DoctorProfile } from "./components/DoctorProfile";
import { ConditionsSection, ConditionItem } from "./components/ConditionsSection";
import { TreatmentsSection } from "./components/TreatmentsSection";
import { SpinalAnatomySection } from "./components/SpinalAnatomySection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { PatientJourney } from "./components/PatientJourney";
import { AppointmentBooking } from "./components/AppointmentBooking";
import { ContactSection } from "./components/ContactSection";
import { ContactCTA } from "./components/ContactCTA";
import { FaqSection } from "./components/FaqSection";
import { MedicalDisclaimer } from "./components/MedicalDisclaimer";
import { Footer } from "./components/Footer";
import { LegalModals } from "./components/LegalModals";
import { StickyMobileBar } from "./components/StickyMobileBar";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingReason, setSelectedBookingReason] = useState("");
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState<ConditionItem | null>(null);

  const handleOpenBooking = (reason?: string) => {
    if (reason) {
      setSelectedBookingReason(reason);
    }
    // Smooth scroll to the main booking section on desktop or open modal
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    } else {
      setBookingModalOpen(true);
    }
  };

  const handleSelectCondition = (cond: ConditionItem) => {
    setSelectedCondition(cond);
  };

  const handleCloseModals = () => {
    setPrivacyOpen(false);
    setTermsOpen(false);
    setDisclaimerOpen(false);
    setSelectedCondition(null);
    setBookingModalOpen(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50/40 text-slate-900 pb-16 sm:pb-0">
      
      {/* Primary Sticky Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenDisclaimer={() => setDisclaimerOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Doctor Section */}
        <DoctorProfile onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Conditions Section */}
        <ConditionsSection
          onSelectCondition={handleSelectCondition}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 6. Treatments & Services */}
        <TreatmentsSection onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Featured Spinal Health / Anatomy Showcase */}
        <SpinalAnatomySection onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Why Choose Us */}
        <WhyChooseUs />

        {/* 9. Patient Journey */}
        <PatientJourney onOpenBooking={() => handleOpenBooking()} />

        {/* 10. Appointment Booking Section */}
        <AppointmentBooking initialReason={selectedBookingReason} />

        {/* 11. Contact Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />

        {/* 12. FAQ Section */}
        <FaqSection onOpenBooking={() => handleOpenBooking()} />

        {/* 13. Pre-footer Contact CTA */}
        <ContactCTA onOpenBooking={() => handleOpenBooking()} />

        {/* 14. Medical Disclaimer Banner */}
        <MedicalDisclaimer onOpenDetails={() => setDisclaimerOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenDisclaimer={() => setDisclaimerOpen(true)}
      />

      {/* Floating Sticky Mobile Bar */}
      <StickyMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* Modals for Legal, Disclaimer, Condition details, and Booking fallback */}
      <LegalModals
        privacyOpen={privacyOpen}
        termsOpen={termsOpen}
        disclaimerOpen={disclaimerOpen}
        selectedCondition={selectedCondition}
        onClose={handleCloseModals}
        onOpenBooking={() => {
          handleCloseModals();
          handleOpenBooking(selectedCondition?.name);
        }}
      />
    </div>
  );
}
