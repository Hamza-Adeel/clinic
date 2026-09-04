import React from "react";
import { WhatsAppIcon } from "./Icons";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/923183130220"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat on WhatsApp (03183130220)"
    >
      <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
      <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
        Chat on WhatsApp
      </span>
    </a>
  );
};
