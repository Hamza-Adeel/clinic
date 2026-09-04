import React from "react";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="py-10 sm:py-16 bg-white border-b border-slate-200">
      <div className="clinic-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Real Clinic Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-lg group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/doctor-shahvez.webp"
                  alt="Clinical spinal examination and anatomy at Back to Nature Spinal Clinic"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
                <div className="p-3 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Dr Shahvez Iqbal</span>
                  <span className="text-teal-800 font-medium">New Care Medical Center 5C4</span>
                </div>
            </div>
          </div>

          {/* Right Column: Text & Clear Actions */}
          <div className="lg:col-span-6 space-y-5 text-left">
            
            <div className="inline-block text-xs font-semibold text-teal-800 tracking-wider uppercase bg-teal-50 px-2.5 py-1 rounded border border-teal-200/60">
              Back to Nature (Spinal Clinic)
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0e2742] tracking-tight leading-[1.2]">
              Spinal & Musculoskeletal Care
            </h1>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              Professional chiropractic, osteopathic and physiotherapy care with a focus on helping patients move with greater comfort and confidence.
            </p>

            {/* Doctor Attribution Box */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded">
              <div className="text-sm font-bold text-slate-900">
                Dr Shahvez Iqbal
              </div>
              <div className="text-xs text-teal-800 font-medium mt-0.5">
                Chiropractor • Osteopath • Physiotherapist
              </div>
              <div className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>New Care Medical Center 5C4</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="tel:03142779877"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call: 03142779877</span>
              </a>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
};
