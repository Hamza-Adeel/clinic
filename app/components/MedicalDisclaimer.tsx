import React from "react";
import { ShieldAlert, AlertTriangle, Info } from "lucide-react";

interface MedicalDisclaimerProps {
  onOpenDetails?: () => void;
}

export const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({ onOpenDetails }) => {
  return (
    <section className="bg-slate-100 py-8 border-t border-slate-200 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span>Medical Disclaimer</span>
                  <span className="text-[10px] font-normal text-slate-500 lowercase bg-slate-100 px-2 py-0.5 rounded">
                    General Health Notice
                  </span>
                </h3>
                {onOpenDetails && (
                  <button
                    onClick={onOpenDetails}
                    className="text-xs text-teal-700 hover:text-teal-800 font-semibold underline underline-offset-2"
                  >
                    Read Full Medical Policy
                  </button>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Medical Disclaimer:</strong> The information provided on this website is intended for general informational purposes only and should not be considered a substitute for professional medical advice, diagnosis or treatment. Individual conditions vary. Please consult an appropriately qualified healthcare professional regarding your specific health concerns. If you have a medical emergency, contact your local emergency medical service.
              </p>

              <div className="pt-1 text-[11px] text-slate-500">
                Back to Nature (Spinal Clinic) does not provide emergency medical services. For acute traumatic injuries, sudden severe neurological deficits, or medical emergencies, seek immediate emergency hospital care.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
