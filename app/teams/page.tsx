"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Mock Data for Teams
const teams = [
  { id: 1, name: "Liverpool", logo: "/Top Football Clubs (2).png", slug: "liverpool" }, // Using verified existing assets or close matches
  { id: 2, name: "FC Barcelona", logo: "/Top Football Clubs (1).png", slug: "fc-barcelona" },
  { id: 3, name: "Arsenal", logo: "/Top Football Clubs (3).png", slug: "arsenal" },
  { id: 4, name: "Manchester United", logo: "/Top Football Clubs (4).png", slug: "manchester-united" },
  { id: 5, name: "Chelsea", logo: "/team (4).png", slug: "chelsea" },
  { id: 6, name: "Manchester City", logo: "/team (1).png", slug: "manchester-city" },
  { id: 7, name: "Atletico Madrid", logo: "/team (2).png", slug: "atletico-madrid" },
  { id: 8, name: "Paris Saint-Germain", logo: "/team (4).png", slug: "paris-saint-germain" }, // Reusing asset if specific one not found, or use placeholders
];

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-[#051d3b] pt-32 pb-20 px-4 text-center relative overflow-hidden">
        {/* Background glow similar to other pages */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Teams</h1>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Compare ticket prices for your favourite football teams on TicketforSport.com
          </p>

          <div className="relative max-w-xl mx-auto">
            <div className="bg-[#0f294d] rounded-full flex items-center p-2 border border-white/10 shadow-xl">
              <Search className="w-5 h-5 text-blue-400 ml-4 mr-2" />
              <Input
                placeholder="Search Team"
                className="border-none bg-transparent shadow-none text-white placeholder:text-gray-400 h-10 flex-1 focus-visible:ring-0 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTeams.map((team) => (
            <div
              key={team.id}
              className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#D3AB66] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{team.name}</h3>
              
              <div className="relative w-32 h-32 mb-8 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={team.logo}
                  alt={team.name}
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>

              <Link href={`/clubs/${team.slug}`} className="w-full">
                <Button className="w-full bg-[#0E2A4D] hover:bg-[#173e6d] text-white py-6 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors duration-300">
                  Find Tickets
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No teams found matching "{searchTerm}"</p>
            <Button
              variant="link"
              onClick={() => setSearchTerm("")}
              className="text-blue-600 mt-2"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
