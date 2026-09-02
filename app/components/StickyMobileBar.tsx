"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/90 p-3 shadow-2xl safe-area-inset-bottom">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href="tel:03183130220"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-white text-xs font-bold tracking-wide active:scale-95 transition-all shadow-xs"
        >
          <Phone className="w-4 h-4 text-teal-400" />
          <span>Call Clinic</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold tracking-wide active:scale-95 transition-all shadow-md shadow-teal-700/20"
        >
          <Calendar className="w-4 h-4 text-teal-200" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
