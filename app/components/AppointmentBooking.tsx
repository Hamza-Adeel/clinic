"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  PhoneCall,
  X
} from "lucide-react";

interface AppointmentBookingProps {
  initialReason?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  initialReason = "",
  onClose,
  isModal = false,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    reasonForVisit: initialReason || "Back Pain",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const visitReasons = [
    "Back Pain",
    "Joint Pain",
    "Sports Injury",
    "Neck Pain",
    "Headache",
    "Scoliosis",
    "Disc Injury",
    "Shoulder Pain",
    "Pinching Nerve",
    "Ankylosing Spondylitis",
    "Other"
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number.";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 7) {
      errs.phone = "Please provide a valid phone number.";
    }
    if (!formData.preferredDate) errs.preferredDate = "Please choose a preferred date.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      preferredDate: "",
      preferredTime: "",
      reasonForVisit: "Back Pain",
      message: "",
    });
  };

  return (
    <div
      id="booking"
      className={`${
        isModal ? "p-4 sm:p-6" : "py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800"
      }`}
    >
      <div className={`${isModal ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}`}>
        
        {/* Header if not in modal */}
        {!isModal && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-3.5 py-1 rounded-full border border-teal-800">
              Schedule Your Visit
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2.5">
              Book Your Appointment
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Request an appointment with Dr Shahvez Iqbal at Back to Nature (Spinal Clinic). We will contact you directly to confirm suitable availability.
            </p>
          </div>
        )}

        <div className={`grid grid-cols-1 ${isModal ? "" : "lg:grid-cols-12"} gap-8 items-start`}>
          
          {/* Left Column (Information & Direct Phone Lines) - hidden in small modal */}
          {!isModal && (
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-850 border border-slate-700/80 shadow-xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Direct Phone Contact</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Prefer to speak with clinic staff directly? Call now:
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:03183130220"
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/90 border border-slate-700 hover:border-teal-400 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                        <PhoneCall className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-slate-400">Primary Contact</div>
                        <div className="text-base font-bold text-white tracking-wide">
                          03183130220
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-teal-400 font-semibold group-hover:underline">
                      Call Now
                    </span>
                  </a>

                  <a
                    href="tel:03142779877"
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/90 border border-slate-700 hover:border-teal-400 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                        <PhoneCall className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-slate-400">Alternative Line</div>
                        <div className="text-base font-bold text-white tracking-wide">
                          03142779877
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-teal-400 font-semibold group-hover:underline">
                      Call Now
                    </span>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-700/80 text-xs text-slate-400 space-y-2">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Location: New Care Medical Center 5C4</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Practitioner: Dr Shahvez Iqbal (Chiropractor • Osteopath • Physiotherapist)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Form Container */}
          <div className={`${isModal ? "w-full" : "lg:col-span-7"}`}>
            <div
              className={`rounded-3xl p-6 sm:p-8 shadow-2xl ${
                isModal
                  ? "bg-white text-slate-900 border border-slate-200"
                  : "bg-white text-slate-900 border border-slate-200"
              }`}
            >
              {isModal && onClose && (
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900">
                    Book Your Appointment
                  </h3>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}

              {submitted ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10 text-teal-600" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Request Received
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you. Your appointment request has been received. The clinic will contact you to confirm availability.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 max-w-md mx-auto space-y-1">
                    <div><strong>Patient:</strong> {formData.fullName}</div>
                    <div><strong>Phone:</strong> {formData.phone}</div>
                    <div><strong>Selected Concern:</strong> {formData.reasonForVisit}</div>
                    {formData.preferredDate && (
                      <div><strong>Preferred Date:</strong> {formData.preferredDate}</div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors"
                    >
                      Submit Another Request
                    </button>
                    {isModal && onClose && (
                      <button
                        onClick={onClose}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 transition-colors"
                      >
                        Done
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                          errors.fullName ? "border-red-400 bg-red-50/30" : "border-slate-200 focus:bg-white"
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 0318 3130220"
                          className={`w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                            errors.phone ? "border-red-400 bg-red-50/30" : "border-slate-200 focus:bg-white"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. name@example.com"
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split("T")[0]}
                          className={`w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                            errors.preferredDate ? "border-red-400 bg-red-50/30" : "border-slate-200 focus:bg-white"
                          }`}
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Preferred Time Preference
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
                        >
                          <option value="">Any time available</option>
                          <option value="Morning">Morning Preference</option>
                          <option value="Afternoon">Afternoon Preference</option>
                          <option value="Evening">Evening Preference</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Reason for Visit Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Reason for Visit *
                    </label>
                    <select
                      name="reasonForVisit"
                      value={formData.reasonForVisit}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
                    >
                      {visitReasons.map((reason) => (
                        <option key={reason} value={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Message / Additional Notes <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your symptoms or specific questions..."
                      className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Privacy Notice:</strong> Your information is used strictly to arrange your consultation with Back to Nature (Spinal Clinic). We respect patient confidentiality.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md shadow-teal-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        <span>Request Appointment</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    *Appointment requests are subject to confirmation by clinic staff.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
