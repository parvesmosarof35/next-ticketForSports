"use client";

import { Trophy } from "lucide-react";
import Link from "next/link";

const competitions = [
  "Premier League",
  "Champions League",
  "Europa League",
  "La Liga",
  "Bundesliga",
  "Serie A",
  "Ligue 1",
  "Eredivisie"
];

export function TopCompetitions() {
  return (
    <section className="py-16 bg-[#0e131f]">
      <div className="container mx-auto px-4">
        {/* Header with title and button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">Top Football Competitions</h2>
          <Link 
            href="/competitions" 
            className="bg-[#1d8ffe] hover:bg-[#0d7ed9] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            More Competitions
          </Link>
        </div>

        {/* Competition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {competitions.slice(0, 4).map((competition) => (
            <div 
              key={competition}
              className="bg-[#212631] rounded-lg p-4 flex items-center space-x-3 border border-gray-500/20 hover:bg-[#2a303d] transition-colors cursor-pointer"
            >
              <div className="bg-gray-500/20 p-2 rounded-lg">
                <Trophy className="w-5 h-5 text-gray-300" />
              </div>
              <span className="text-gray-200 font-medium">{competition}</span>
            </div>
          ))}
        </div>

        {/* Second Row of Competitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
          {competitions.slice(4).map((competition) => (
            <div 
              key={competition}
              className="bg-[#212631] rounded-lg p-4 flex items-center space-x-3 border border-gray-500/20 hover:bg-[#2a303d] transition-colors cursor-pointer"
            >
              <div className="bg-gray-500/20 p-2 rounded-lg">
                <Trophy className="w-5 h-5 text-gray-300" />
              </div>
              <span className="text-gray-200 font-medium">{competition}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
