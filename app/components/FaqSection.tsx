"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, Calendar, ArrowRight } from "lucide-react";

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What conditions does Back to Nature (Spinal Clinic) focus on?",
      answer:
        "The clinic focuses on spinal, back, joint, neck and musculoskeletal concerns. Specifically mentioned conditions include Back Pain, Joint Pain, Sports Injury, Neck Pain, Headache, Scoliosis, Disc Injury, Shoulder Pain, Pinching Nerve, and Ankylosing Spondylitis. Individual assessments are conducted to evaluate each patient's condition."
    },
    {
      question: "Who is Dr Shahvez Iqbal?",
      answer:
        "Dr Shahvez Iqbal is the healthcare practitioner at Back to Nature (Spinal Clinic). He is listed as a Chiropractor, Osteopath, and Physiotherapist, providing conservative musculoskeletal and spinal care."
    },
    {
      question: "What professional services are offered?",
      answer:
        "The clinic provides professional services across three core disciplines indicated in the reference material: Chiropractic Care, Osteopathic Care, and Physiotherapy."
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can request an appointment through the online appointment booking form on this website or by calling the clinic directly at 03183130220 or 03142779877. The clinic staff will get in touch with you to confirm availability."
    },
    {
      question: "How can I contact the clinic?",
      answer:
        "You can contact Back to Nature (Spinal Clinic) by phone at 03183130220 or 03142779877. You can also visit in person at New Care Medical Center 5C4."
    },
    {
      question: "Where is the clinic located?",
      answer:
        "The clinic is located at New Care Medical Center 5C4. Please contact the clinic directly at 03183130220 for any specific directions or arrival inquiries."
    },
    {
      question: "Do I need an appointment?",
      answer:
        "Appointments are recommended to ensure dedicated time for your clinical assessment. Please contact the clinic directly at 03183130220 or 03142779877 for the latest scheduling information, consultation availability, and walk-in guidance."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/60">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Common Inquiries
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Factual answers regarding Back to Nature (Spinal Clinic), Dr Shahvez Iqbal, services, and appointment scheduling.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-teal-300 shadow-sm"
                    : "bg-white/80 border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-teal-600 text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">
                Have a question not answered here?
              </div>
              <div className="text-xs text-slate-500">
                Contact the clinic directly at 03183130220.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="tel:03183130220"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Clinic</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Visit</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
