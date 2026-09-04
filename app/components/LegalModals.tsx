"use client";

import React from "react";
import { X, ShieldCheck, AlertTriangle } from "lucide-react";

interface LegalModalsProps {
  privacyOpen: boolean;
  disclaimerOpen: boolean;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  privacyOpen,
  disclaimerOpen,
  onClose,
}) => {
  if (!privacyOpen && !disclaimerOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      
      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div className="bg-white rounded-lg max-w-xl w-full max-h-[85vh] flex flex-col shadow-xl border border-slate-200 text-slate-900 overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-700" />
              <h3 className="text-base font-bold text-slate-900">Privacy Policy</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 overflow-y-auto space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
            <p>
              <strong>1. Information Collection:</strong> When submitting an appointment inquiry, we collect your full name, phone number, optional email address, and reason for consultation.
            </p>
            <p>
              <strong>2. Use of Information:</strong> Contact details are used exclusively to arrange your consultation with Dr Shahvez Iqbal at Back to Nature (Spinal Clinic).
            </p>
            <p>
              <strong>3. Confidentiality:</strong> Patient information is treated confidentially and is never shared, sold, or distributed to third parties.
            </p>
            <p>
              <strong>4. Contact:</strong> For inquiries regarding your privacy, contact the clinic directly at 03183130220.
            </p>
          </div>

          <div className="p-3 border-t border-slate-200 bg-slate-50 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-[#0e2742] text-white text-xs font-semibold hover:bg-[#16385d]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Medical Disclaimer Modal */}
      {disclaimerOpen && (
        <div className="bg-white rounded-lg max-w-xl w-full max-h-[85vh] flex flex-col shadow-xl border border-slate-200 text-slate-900 overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h3 className="text-base font-bold text-slate-900">Medical Disclaimer</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 overflow-y-auto space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-900 text-xs sm:text-sm">
              <strong>Medical Disclaimer:</strong> The information provided on this website is intended for general informational purposes only and should not be considered a substitute for professional medical advice, diagnosis or treatment. Individual conditions vary. Please consult an appropriately qualified healthcare professional regarding your specific health concerns. If you have a medical emergency, contact your local emergency medical service.
            </div>

            <p>
              <strong>Non-Emergency Practice:</strong> Back to Nature (Spinal Clinic) provides outpatient spinal and musculoskeletal care and is not an emergency medical facility.
            </p>
          </div>

          <div className="p-3 border-t border-slate-200 bg-slate-50 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-teal-800 text-white text-xs font-semibold hover:bg-teal-900"
            >
              I Understand
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
