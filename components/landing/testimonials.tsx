"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export function Testimonials() {
  return (
    <section className={`py-5 px-4 sm:px-6 lg:px-8 bg-white ${montserrat.className}`}>
      <div className="max-w-6xl mx-auto rounded-[32px] overflow-hidden relative isolate shadow-2xl">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-[#05305F] -z-10">
          {/* Subtle Glow Effect matches User's design */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(0,109,255,0.4)_0%,_transparent_70%)] opacity-40"></div>
        </div>

        <div className="py-20 px-8 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Stay in the Game
          </h2>
          <p className="text-white/80 text-lg font-medium mb-12 max-w-xl">
            Join our newsletter and get updates on major sporting events.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mb-12">
            <div className="flex-1 relative group">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-[64px] px-8 text-base md:text-lg rounded-2xl border-0 focus-visible:ring-0 bg-white text-black placeholder:text-gray-400 font-medium transition-all shadow-xl"
              />
            </div>
            <Button
              className="h-[64px] px-10 text-base md:text-lg rounded-2xl font-black bg-[#0062E6] hover:bg-[#0055c7] text-white transition-all shadow-lg active:scale-95 shrink-0"
            >
              Subscribe Now
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {['Football', 'Basketball', 'Tennis', 'Cricket', 'Rugby', 'Golf', 'Boxing', 'F1'].map((sport) => (
              <span
                key={sport}
                className="px-6 py-2.5 bg-[#1A3A5F] hover:bg-[#234A77] text-white/90 rounded-full text-sm font-bold transition-all cursor-pointer border border-white/5"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}