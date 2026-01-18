"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Calendar, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock Matches Data
const matchesData = [
  {
    id: 1,
    team1: { name: "Chelsea", logo: "/team (2).png" },
    team2: { name: "Arsenal", logo: "/team (1).png" },
    date: "20 Nov 2025",
    time: "20:00",
    competition: "Premier League",
    location: "Stamford Bridge, London",
    price: "75"
  },
  {
    id: 2,
    team1: { name: "Liverpool", logo: "/team (3).png" },
    team2: { name: "Man City", logo: "/team (2).png" },
    date: "22 Nov 2025",
    time: "17:30",
    competition: "Premier League",
    location: "Anfield, Liverpool",
    price: "85"
  },
  {
    id: 3,
    team1: { name: "Real Madrid", logo: "/team (2).png" },
    team2: { name: "Barcelona", logo: "/team (1).png" },
    date: "05 Dec 2025",
    time: "21:00",
    competition: "La Liga",
    location: "Santiago Bernabéu, Madrid",
    price: "120"
  },
  {
    id: 4,
    team1: { name: "Bayern Munich", logo: "/team (1).png" },
    team2: { name: "Dortmund", logo: "/team (2).png" },
    date: "12 Dec 2025",
    time: "18:30",
    competition: "Bundesliga",
    location: "Allianz Arena, Munich",
    price: "60"
  },
   {
    id: 5,
    team1: { name: "Chelsea", logo: "/team (2).png" },
    team2: { name: "Arsenal", logo: "/team (1).png" },
    date: "20 Nov 2025",
    time: "20:00",
    competition: "Premier League",
    location: "Stamford Bridge, London",
    price: "75"
  },
  {
    id: 6,
    team1: { name: "Liverpool", logo: "/team (3).png" },
    team2: { name: "Man City", logo: "/team (2).png" },
    date: "22 Nov 2025",
    time: "17:30",
    competition: "Premier League",
    location: "Anfield, Liverpool",
    price: "85"
  },
];

export default function MatchesPage() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMatches = matchesData.filter(match => {
      const matchText = `${match.team1.name} ${match.team2.name} ${match.competition} ${match.location}`.toLowerCase();
      return matchText.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans">
      
      {/* Hero / Filter Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-[#05305F] mb-6">Find Matches</h1>
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Tabs */}
                <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button 
                        onClick={() => setFilter("all")}
                        className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${filter === 'all' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        All Matches
                    </button>
                    <button 
                         onClick={() => setFilter("recent")}
                        className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${filter === 'recent' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Recent Added
                    </button>
                </div>

                {/* Search */}
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                        placeholder="Search teams, leagues, or venues..." 
                        className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 mt-16">
          
          <div className="space-y-4 max-w-5xl mx-auto">
              {filteredMatches.map((match) => (
                  <div key={match.id} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition-all group">
                       
                       {/* Date Box */}
                       <div className="flex-shrink-0 flex flex-col items-center justify-center w-full md:w-24 bg-gray-50 rounded-lg p-2 border border-gray-100">
                           <span className="text-xs font-bold text-gray-500 uppercase">{match.date.split(' ')[1]}</span>
                           <span className="text-2xl font-extrabold text-[#05305F]">{match.date.split(' ')[0]}</span>
                           <span className="text-xs font-medium text-gray-400">{match.time}</span>
                       </div>

                       {/* Teams */}
                       <div className="flex-grow flex flex-col md:flex-row items-center gap-8 w-full">
                           <div className="flex items-center gap-4 flex-1 justify-end">
                               <span className="font-bold text-lg text-right">{match.team1.name}</span>
                               <div className="w-12 h-12 relative flex-shrink-0">
                                   <Image src={match.team1.logo} alt={match.team1.name} fill className="object-contain" />
                               </div>
                           </div>
                           
                           <span className="text-gray-300 font-bold text-xl">VS</span>

                           <div className="flex items-center gap-4 flex-1">
                               <div className="w-12 h-12 relative flex-shrink-0">
                                   <Image src={match.team2.logo} alt={match.team2.name} fill className="object-contain" />
                               </div>
                               <span className="font-bold text-lg">{match.team2.name}</span>
                           </div>
                       </div>

                       {/* Info & Action */}
                       <div className="flex flex-col md:items-end gap-2 min-w-[200px] border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
                           <div className="flex items-center gap-2 text-gray-500 text-sm">
                               <Image src="/cup.png" alt="League" width={16} height={16} className="opacity-60" />
                               <span>{match.competition}</span>
                           </div>
                           <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                               <MapPin className="w-4 h-4" />
                               <span className="truncate max-w-[150px]">{match.location}</span>
                           </div>
                           
                           <Link href={`/matches/${match.id}`} className="w-full">
                                <Button className="w-full bg-[#05305F] group-hover:bg-blue-600 text-white font-bold rounded-lg transition-colors">
                                    Tickets from £{match.price}
                                </Button>
                           </Link>
                       </div>

                  </div>
              ))}
          </div>

          {filteredMatches.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                  <p>No matches found matching "{searchTerm}"</p>
              </div>
          )}
      </div>
    </div>
  );
}
