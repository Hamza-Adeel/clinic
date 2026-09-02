"use client";

import React from "react";
import { X, ShieldCheck, FileText, AlertTriangle, Activity, Calendar, ArrowRight } from "lucide-react";
import { ConditionItem } from "./ConditionsSection";

interface LegalModalsProps {
  privacyOpen: boolean;
  termsOpen: boolean;
  disclaimerOpen: boolean;
  selectedCondition: ConditionItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  privacyOpen,
  termsOpen,
  disclaimerOpen,
  selectedCondition,
  onClose,
  onOpenBooking,
}) => {
  if (!privacyOpen && !termsOpen && !disclaimerOpen && !selectedCondition) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 text-slate-900 overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Privacy Policy</h3>
                <span className="text-xs text-slate-500">Back to Nature (Spinal Clinic)</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>1. Collection of Information:</strong> When you submit an appointment request through our website, we collect personal contact details including your full name, phone number, optional email address, preferred date/time, and general reason for consultation.
            </p>
            <p>
              <strong>2. Use of Information:</strong> The information provided is used exclusively to facilitate your healthcare consultation, confirm appointment timing, and communicate administrative clinic details.
            </p>
            <p>
              <strong>3. Confidentiality & Security:</strong> We do not sell, rent, or trade your personal contact details to third parties. All submissions are treated in accordance with responsible healthcare privacy practices.
            </p>
            <p>
              <strong>4. Medical Records:</strong> Detailed clinical and medical examination notes taken during in-person visits at New Care Medical Center 5C4 are maintained separately under clinical confidentiality standards.
            </p>
            <p>
              <strong>5. Contact:</strong> If you have questions regarding this privacy policy, you may contact the clinic directly at 03183130220.
            </p>
          </div>

          <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {termsOpen && (
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 text-slate-900 overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Terms & Conditions</h3>
                <span className="text-xs text-slate-500">Website Usage & Clinic Guidelines</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>1. General Informational Nature:</strong> Content published on this website is for general educational and informational purposes. It does not constitute a clinical diagnosis or medical prescription.
            </p>
            <p>
              <strong>2. Appointment Requests:</strong> Requesting an appointment online represents a scheduling request and is not guaranteed until confirmed directly by clinic staff via telephone or messaging.
            </p>
            <p>
              <strong>3. Practitioner Identification:</strong> Clinical care at Back to Nature (Spinal Clinic) is provided by Dr Shahvez Iqbal, listed as a Chiropractor, Osteopath, and Physiotherapist.
            </p>
            <p>
              <strong>4. Clinical Assessment:</strong> All treatment recommendations are formulated following individualized physical evaluation at New Care Medical Center 5C4.
            </p>
          </div>

          <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Detailed Medical Disclaimer Modal */}
      {disclaimerOpen && (
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 text-slate-900 overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Medical Disclaimer</h3>
                <span className="text-xs text-slate-500">Important Health Notice</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
              <strong>Medical Disclaimer:</strong> The information provided on this website is intended for general informational purposes only and should not be considered a substitute for professional medical advice, diagnosis or treatment. Individual conditions vary. Please consult an appropriately qualified healthcare professional regarding your specific health concerns. If you have a medical emergency, contact your local emergency medical service.
            </div>

            <p>
              <strong>No Emergency Facilities:</strong> Back to Nature (Spinal Clinic) is an outpatient musculoskeletal and spinal practice and is not equipped for medical emergencies, acute trauma, fractures, or urgent life-threatening situations.
            </p>
            <p>
              <strong>Individual Clinical Variations:</strong> Recovery rates, symptom responses, and treatment plans differ by individual patient history, structural health, and daily activities. We do not offer guaranteed outcomes.
            </p>
          </div>

          <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700"
            >
              I Understand
            </button>
          </div>
        </div>
      )}

      {/* Condition Deep-Dive Detail Modal */}
      {selectedCondition && (
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 text-slate-900 overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-teal-700 uppercase">
                  {selectedCondition.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedCondition.name}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-600 leading-relaxed">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                Clinical Overview:
              </h4>
              <p>{selectedCondition.fullDesc}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Commonly Reported Symptoms:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCondition.commonSymptoms.map((symptom, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                Conservative Care & Assessment Approach:
              </h4>
              <p className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100 text-xs sm:text-sm text-teal-900">
                {selectedCondition.careApproach}
              </p>
            </div>

            <div className="text-[11px] text-slate-500 italic">
              *Assessment and care may be available depending on the individual&apos;s condition after in-person evaluation by Dr Shahvez Iqbal.
            </div>
          </div>

          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment for {selectedCondition.name}</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
