import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="clinic-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Real Clinic Photography */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src="/images/back-pain-spine.webp"
                  alt="Dr Shahvez Iqbal - Back to Nature Spinal Clinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
                <div className="p-3.5 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-medium text-slate-900">Spinal Assessment & Physical Care</span>
                  <span className="text-teal-800 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60">New Care Medical Center 5C4</span>
                </div>
            </div>
          </div>

          {/* Right Column: Short, Factual About Text */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-800">
              Clinic Overview
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#0e2742] tracking-tight">
              About Back to Nature
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              Back to Nature (Spinal Clinic) provides professional care for spinal and musculoskeletal concerns. Dr Shahvez Iqbal is listed as a Chiropractor, Osteopath and Physiotherapist.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Located at New Care Medical Center 5C4, the clinic offers conservative physical assessments and personalized care plans focused on joint mobility, postural alignment, and movement rehabilitation.
            </p>

            <div className="pt-2 border-t border-slate-200 space-y-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                <span>Practitioner: Dr Shahvez Iqbal (Chiropractor • Osteopath • Physiotherapist)</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                <span>Primary Focus: Spinal, back, joint, neck and musculoskeletal conditions</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                <span>Facility: New Care Medical Center 5C4</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
