import React from "react";
import { CheckCircle2, Shield, HeartPulse, Building2, Stethoscope, Compass, Sparkles } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Clinic Focus */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-teal-600" />
              Clinical Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              About Back to Nature <br />
              <span className="text-teal-700">(Spinal Clinic)</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              <strong>Back to Nature (Spinal Clinic)</strong> is dedicated to the assessment and conservative care of spinal and musculoskeletal conditions. Located at <strong>New Care Medical Center 5C4</strong>, our clinic environment is tailored to help patients understand and address movement difficulties, postural strains, and physical discomfort.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-teal-100 shadow-xs">
              <div className="flex items-start gap-3">
                <Stethoscope className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Practitioner Qualification & Roles
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-normal">
                    Dr Shahvez Iqbal is listed as a <strong>Chiropractor</strong>, <strong>Osteopath</strong>, and <strong>Physiotherapist</strong>, providing multidimensional conservative care tailored to individual patient assessments.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong>Non-Invasive Care Focus:</strong> Emphasizing natural biomechanical alignment, joint mobilization, and therapeutic exercise.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong>Comprehensive Musculoskeletal Scope:</strong> Caring for spinal, back, joint, neck, and sports-related issues.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong>Transparent Communication:</strong> Factual discussions regarding your examination findings and suggested conservative care pathways.
                </p>
              </div>
            </div>

            {/* Editable Clinic Statistics / Administration Notice */}
            <div className="mt-4 p-3.5 rounded-xl bg-slate-100/80 border border-slate-200/90 text-xs text-slate-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-slate-500" />
                <span>Primary Facility: New Care Medical Center 5C4</span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                In-Person Consultations
              </span>
            </div>
          </div>

          {/* Right Column: 4 Visual Core Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Spine Anatomy */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-teal-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">
                Spinal Anatomy Focus
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detailed evaluation of vertebral movement, disc mechanics, postural curves, and neural pathway pressure.
              </p>
            </div>

            {/* Card 2: Physiotherapy & Movement */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-teal-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">
                Movement & Rehab
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Guided physical rehabilitation strategies designed to encourage joint mobility, tissue strength, and posture balance.
              </p>
            </div>

            {/* Card 3: Professional Consultation */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-teal-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">
                Clinical Consultation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focused face-to-face evaluations to review symptom history, movement limitations, and daily physical demands.
              </p>
            </div>

            {/* Card 4: Clinic Environment */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-teal-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">
                Calming Environment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A clean, professional, and tranquil healthcare setting situated inside New Care Medical Center 5C4.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
