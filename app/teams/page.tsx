"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Trophy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });

// Mock Data for Teams
const teams = [
  { id: 1, name: "Liverpool", logo: "/Top Football Clubs (2).png", slug: "liverpool" },
  { id: 2, name: "FC Barcelona", logo: "/Top Football Clubs (1).png", slug: "fc-barcelona" },
  { id: 3, name: "Arsenal", logo: "/Top Football Clubs (3).png", slug: "arsenal" },
  { id: 4, name: "Manchester United", logo: "/Top Football Clubs (4).png", slug: "manchester-united" },
  { id: 5, name: "Chelsea", logo: "/team (4).png", slug: "chelsea" },
  { id: 6, name: "Manchester City", logo: "/team (1).png", slug: "manchester-city" },
  { id: 7, name: "Atletico Madrid", logo: "/team (2).png", slug: "atletico-madrid" },
  { id: 8, name: "Paris Saint-Germain", logo: "/team (4).png", slug: "paris-saint-germain" },
];

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen bg-[#F9FAFB] ${montserrat.className}`}>
      {/* Header Section */}
      <div className="bg-[#051D3B] pt-32 pb-20 px-4 text-center relative overflow-hidden">
        {/* Background glow shadow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl font-medium mb-10 max-w-2xl mx-auto"
          >
            Find and compare official ticket prices for the world's greatest football teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl flex items-center p-2 border border-white/20 shadow-2xl h-16 group focus-within:bg-white/20 transition-all">
              <Search className="w-6 h-6 text-blue-400 ml-5 mr-3" />
              <Input
                placeholder="Search for a team..."
                className="border-none bg-transparent shadow-none text-white placeholder:text-gray-400 h-full flex-1 focus-visible:ring-0 text-lg font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="container mx-auto px-4 max-w-7xl py-20 -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTeams.map((team, idx) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-xl border-2 border-transparent hover:border-[#B2955C] hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Trophy className="w-20 h-20 text-[#05305F]" />
              </div>

              <h3 className="text-2xl font-black text-[#05305F] mb-8 uppercase italic tracking-tight group-hover:text-blue-700 transition-colors">{team.name}</h3>

              <div className="relative w-40 h-40 mb-10 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={team.logo}
                  alt={team.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              <Link href={`/clubs/${team.slug}`} className="w-full mt-auto">
                <Button className="w-full bg-[#0047AB] hover:bg-[#003685] text-white py-8 rounded-[1.5rem] text-sm font-black uppercase tracking-widest shadow-xl shadow-blue-200/50 transition-all active:scale-95 border-b-4 border-blue-900">
                  Find Tickets
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] shadow-sm border border-gray-100 mt-10">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-500 text-2xl font-black italic uppercase tracking-tight">No teams found</p>
            <p className="text-gray-400 mt-2 font-bold uppercase text-xs tracking-widest">Matching "{searchTerm}"</p>
            <Button
              variant="link"
              onClick={() => setSearchTerm("")}
              className="text-[#0047AB] mt-6 font-black uppercase tracking-widest hover:underline"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
