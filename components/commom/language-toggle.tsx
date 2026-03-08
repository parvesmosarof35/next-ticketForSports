"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Montserrat } from "next/font/google";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });

const languages = [
  {
    code: "EN",
    name: "English",
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full">
        <mask id="circleMaskUK">
          <circle cx="256" cy="256" r="256" fill="#fff" />
        </mask>
        <g mask="url(#circleMaskUK)">
          <path fill="#00247d" d="M0 0h512v512H0z" />
          <path fill="#fff" d="M444 0 256 125 68 0H0v46l188 126L0 297v45h68l188-126 188 126h68v-45L324 172 512 46V0h-68zM512 466 324 340 512 214v-46h-68L256 294 68 168H0v46l188 126L0 466v46h68l188-126 188 126h68v-46z" />
          <path fill="#cf142b" d="M336 512 512 393v-46L326 461l10 51zM0 347l176 118-10 47L0 393v-46zm176 0L0 120V73l186 125-10 149zM512 120 336 0h-47l125 186 98-66z" />
          <path fill="#fff" d="M210 0v512h92V0h-92zM0 210v92h512v-92H0z" />
          <path fill="#cf142b" d="M227 0v512h58V0h-58zM0 227v58h512v-58H0z" />
        </g>
      </svg>
    )
  },
  {
    code: "SV",
    name: "Svenska",
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full">
        <mask id="circleMaskSE">
          <circle cx="256" cy="256" r="256" fill="#fff" />
        </mask>
        <g mask="url(#circleMaskSE)">
          <path fill="#006aa7" d="M0 0h512v512H0z" />
          <path fill="#fecc00" d="M166 0h64v512h-64zM0 224h512v64H0z" />
        </g>
      </svg>
    )
  }
];

const currencies = [
  { code: "EUR", symbol: "€" },
  { code: "USD", symbol: "$" },
];

export function LanguageToggle() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [language, setLanguage] = useState(languages[0]);

  return (
    <div className={`flex items-center gap-2 ${montserrat.className}`}>

      {/* Currency Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center justify-between gap-3 px-4 py-2 min-w-[100px] h-[40px] bg-white border-2 border-[#1E90FF] rounded-full cursor-pointer hover:bg-blue-50 transition-all shadow-sm">
            <span className="text-xl font-bold text-black">{currency.symbol}</span>
            <ChevronDown className="w-5 h-5 text-[#1E90FF] stroke-[3px]" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-2xl border-2 border-[#1E90FF]/20 overflow-hidden min-w-[100px]">
          {currencies.map((curr) => (
            <DropdownMenuItem
              key={curr.code}
              onClick={() => setCurrency(curr)}
              className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-blue-50 font-bold text-[#05305F]"
            >
              <span>{curr.symbol}</span>
              <span className="text-xs opacity-50">{curr.code}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Language Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center justify-between gap-3 px-3 py-2 min-w-[130px] h-[40px] bg-white border-2 border-[#1E90FF] rounded-full cursor-pointer hover:bg-blue-50 transition-all shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm border border-gray-100 flex-shrink-0">
                {language.flag}
              </div>
              <span className="text-xl font-bold text-[#05305F] tracking-tight leading-none uppercase">{language.code}</span>
            </div>
            <ChevronDown className="w-5 h-5 text-[#1E90FF] stroke-[3px]" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-2xl border-2 border-[#1E90FF]/20 overflow-hidden min-w-[140px]">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang)}
              className="flex items-center gap-3 px-3 py-3 cursor-pointer hover:bg-blue-50 font-bold text-[#05305F]"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-100">
                {lang.flag}
              </div>
              <span>{lang.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  );
}
