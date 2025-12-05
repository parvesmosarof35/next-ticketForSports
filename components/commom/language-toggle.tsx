"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div className="flex items-center bg-white/10 rounded-full p-0.5">
      <button
        onClick={() => setIsEnglish(true)}
        className={cn(
          "px-3 py-1 text-sm font-medium rounded-full transition-colors cursor-pointer",
          isEnglish 
            ? "bg-gradient-to-r from-[#1E90FF] to-[#1E90FF]/80 text-white shadow-md" 
            : "text-white/70 hover:text-white"
        )}
      >
        EN
      </button>
      <button
        onClick={() => setIsEnglish(false)}
        className={cn(
          "px-3 py-1 text-sm font-medium rounded-full transition-colors cursor-pointer",
          !isEnglish 
            ? "bg-gradient-to-r from-[#1E90FF] to-[#1E90FF]/80 text-white shadow-md" 
            : "text-white/70 hover:text-white"
        )}
      >
        SV
      </button>
    </div>
  );
}
