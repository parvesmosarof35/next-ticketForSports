"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const matches = [
  {
    date: "NOV 30",
    team1: { name: "Liverpool", logo: "/team (1).png" },
    team2: { name: "Chelsea", logo: "/team (2).png" },
    location: "Anfield, Liverpool",
    time: "21:00"
  },
  {
    date: "DEC 5",
    team1: { name: "Man United", logo: "/team (2).png" },
    team2: { name: "Arsenal", logo: "/team (1).png" },
    location: "Old Trafford, Manchester",
    time: "20:00"
  },
  {
    date: "DEC 12",
    team1: { name: "Barcelona", logo: "/team (1).png" },
    team2: { name: "Real Madrid", logo: "/team (2).png" },
    location: "Camp Nou, Barcelona",
    time: "22:00"
  },
  {
    date: "NOV 30",
    team1: { name: "Liverpool", logo: "/team (1).png" },
    team2: { name: "Chelsea", logo: "/team (2).png" },
    location: "Anfield, Liverpool",
    time: "21:00"
  },
  {
    date: "DEC 12",
    team1: { name: "Barcelona", logo: "/team (1).png" },
    team2: { name: "Real Madrid", logo: "/team (2).png" },
    location: "Camp Nou, Barcelona",
    time: "22:00"
  },
];

function MatchCard({ match }: { match: typeof matches[0] }) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-[#242a38] rounded-3xl p-6 w-full max-w-[300px] overflow-hidden relative shadow-lg hover:shadow-xl border border-gray-600"
    >
      {/* Date Badge */}
      <div className="absolute top-8 left-6 bg-[#293c5e] text-white text-md font-medium px-3 py-1 rounded-full">
        {match.date}
      </div>

      {/* Teams */}
      <div className="flex flex-col pt-8 pb-4 mt-8">
        <div className="flex items-center justify-between gap-6 mb-4">
          {/* Team 1 */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
              <Image
                src={match.team1.logo}
                alt={match.team1.name}
                width={60}
                height={60}
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="text-white text-sm font-medium">{match.team1.name}</span>
          </div>

          <div className="font-bold text-lg text-gray-400">VS</div>

          {/* Team 2 */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
              <Image
                src={match.team2.logo}
                alt={match.team2.name}
                width={60}
                height={60}
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="text-white text-sm font-medium">{match.team2.name}</span>
          </div>
        </div>

        {/* Location + Time */}
        <div className="text-gray-400 text-sm mb-6 flex justify-between mt-2 rounded-sm border border-gray-700/40 p-2">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {match.location}
          </div>

          <div className="mt-1">{match.time}</div>
        </div>

        {/* Button */}
        <Button className="w-full h-12 bg-gradient-to-tr from-[#1E90FF] to-[#0066CC] hover:bg-blue-700 transition-colors rounded-2xl text-white text-md font-bold cursor-pointer mt-2">
          Check Availability
        </Button>
      </div>
    </motion.div>
  );
}

export function TopMatches() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#111827]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Top Football Matches</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
          {matches.map((match, index) => (
            <MatchCard key={index} match={match} />
          ))}
        </div>
      </div>
    </section>
  );
}
  