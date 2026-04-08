"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/commom/hero-section";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });

// Mock Data for Teams
const teams = [
  { id: 1, name: "Liverpool", logo: "/Top Football Clubs (4).png", slug: "liverpool" },
  { id: 2, name: "FC Barcelona", logo: "/Top Football Clubs (1).png", slug: "fc-barcelona" },
  { id: 3, name: "Arsenal", logo: "/Top Football Clubs (3).png", slug: "arsenal" },
  { id: 4, name: "Manchester United", logo: "/Top Football Clubs (2).png", slug: "manchester-united" },
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
      <HeroSection
        title="Teams"
        description="Find and compare official ticket prices for the world's greatest football teams."
        isCentered={true}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
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
      </HeroSection>

      {/* Teams Grid */}
      <div className="container mx-auto px-4 max-w-7xl py-20 -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTeams.map((team, idx) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-square bg-white rounded-[32px] p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Bottom Accent Bar */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#05305F] group-hover:bg-[#B2955C] transition-colors duration-500" />
              
              <div className="flex flex-col items-center justify-between h-full w-full">
                {/* Team Logo */}
                <div className="flex-1 flex items-center justify-center w-full min-h-0">
                  <div className="relative w-32 h-32 md:w-36 md:h-36 transition-all duration-700 group-hover:scale-110">
                    <Image
                      src={team.logo}
                      alt={team.name}
                      fill
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                </div>

                {/* Team Info */}
                <div className="w-full text-center mt-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#05305F] tracking-tight group-hover:text-blue-700 transition-colors mb-6 whitespace-nowrap">
                    {team.name}
                  </h3>
                  
                  <Link href={`/clubs/${team.slug}`} className="block">
                    <Button className="w-full bg-[#0047AB] hover:bg-[#003685] text-white h-[56px] rounded-2xl text-[14px] font-bold shadow-lg shadow-blue-200/50 transition-all active:scale-95 border-b-4 border-blue-900">
                      Find tickets
                    </Button>
                  </Link>
                </div>
              </div>
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
