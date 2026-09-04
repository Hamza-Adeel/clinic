"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white border-t border-slate-200 p-2.5 shadow-lg">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:03183130220"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-slate-100 text-slate-800 text-xs font-semibold"
        >
          <Phone className="w-3.5 h-3.5 text-teal-700" />
          <span>Call Clinic</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-[#0e2742] text-white text-xs font-semibold"
        >
          <Calendar className="w-3.5 h-3.5 text-teal-300" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
