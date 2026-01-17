"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Trophy, Users } from "lucide-react";
import { WhyChoose } from "@/components/landing/why-choose";

// Mock Data for Clubs
const clubsData: Record<string, any> = {
  "manchester-united": {
    name: "Manchester United",
    stadium: "Old Trafford",
    capacity: "74,310",
    founded: "1878",
    color: "from-red-900",
    accent: "bg-red-600",
    textAccent: "text-red-600",
    borderAccent: "border-red-200",
    description: "Manchester United is one of the most prestigious football clubs in the world, with a rich history of success including 20 League titles, 12 FA Cups, and 3 European Cups.",
    logo: "/FixturesImg (2).png", // Using existing asset
    banner: "/heroPlayground.png", // Using existing asset
  },
  "liverpool": {
    name: "Liverpool",
    stadium: "Anfield",
    capacity: "61,276",
    founded: "1892",
    color: "from-red-800",
    accent: "bg-red-700",
    textAccent: "text-red-700",
    borderAccent: "border-red-200",
    description: "Liverpool Football Club is a professional football club based in Liverpool, England, that competes in the Premier League, the top tier of English football.",
    logo: "/FixturesImg (3).png",
    banner: "/heroPlayground.png",
  },
  "arsenal": {
    name: "Arsenal",
    stadium: "Emirates Stadium",
    capacity: "60,704",
    founded: "1886",
    color: "from-red-600",
    accent: "bg-red-500",
    textAccent: "text-red-500",
    borderAccent: "border-red-200",
    description: "Arsenal Football Club is a professional football club based in Islington, London, England. Arsenal plays in the Premier League, the top flight of English football.",
    logo: "/FixturesImg (5).png", // Placeholder
    banner: "/heroPlayground.png",
  },
  "chelsea": {
    name: "Chelsea",
    stadium: "Stamford Bridge",
    capacity: "40,341",
    founded: "1905",
    color: "from-blue-800",
    accent: "bg-blue-700",
    textAccent: "text-blue-700",
    borderAccent: "border-blue-200",
    description: "Chelsea Football Club is an English professional football club based in Fulham, West London. Founded in 1905, they play their home games at Stamford Bridge.",
    logo: "/FixturesImg (1).png", // Placeholder
    banner: "/heroPlayground.png",
  },
  "manchester-city": {
    name: "Manchester City",
    stadium: "Etihad Stadium",
    capacity: "53,400",
    founded: "1880",
    color: "from-sky-500",
    accent: "bg-sky-400",
    textAccent: "text-sky-500",
    borderAccent: "border-sky-200",
    description: "Manchester City Football Club is an English football club based in Manchester that competes in the Premier League, the top flight of English football.",
    logo: "/FixturesImg (2).png", // Placeholder
    banner: "/heroPlayground.png",
  },
  "tottenham": {
    name: "Tottenham Hotspur",
    stadium: "Tottenham Hotspur Stadium",
    capacity: "62,850",
    founded: "1882",
    color: "from-blue-900",
    accent: "bg-blue-800",
    textAccent: "text-blue-800",
    borderAccent: "border-blue-200",
    description: "Tottenham Hotspur Football Club, commonly referred to as Tottenham or Spurs, is an English professional football club based in Tottenham, London.",
    logo: "/FixturesImg (3).png", // Placeholder
    banner: "/heroPlayground.png",
  }
};

// Mock Tickets (filtered later)
const allTickets = [
  { id: 1, team1: "Manchester United", team2: "Liverpool", date: "16 MAR 2025", time: "17:00", price: 350, logo1: "/FixturesImg (2).png", logo2: "/FixturesImg (3).png" },
  { id: 2, team1: "Arsenal", team2: "Chelsea", date: "22 MAR 2025", time: "20:00", price: 280, logo1: "/FixturesImg (5).png", logo2: "/FixturesImg (1).png" },
  { id: 3, team1: "Manchester City", team2: "Tottenham", date: "05 APR 2025", time: "15:00", price: 310, logo1: "/FixturesImg (2).png", logo2: "/FixturesImg (3).png" },
  { id: 4, team1: "Liverpool", team2: "Everton", date: "12 APR 2025", time: "12:30", price: 250, logo1: "/FixturesImg (3).png", logo2: "/FixturesImg (5).png" }, // Placeholder logo for Everton
  { id: 5, team1: "Chelsea", team2: "Manchester United", date: "19 APR 2025", time: "17:30", price: 320, logo1: "/FixturesImg (1).png", logo2: "/FixturesImg (2).png" },
];

export default function ClubPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [club, setClub] = useState<any>(null);

  useEffect(() => {
    if (slug && clubsData[slug]) {
      setClub(clubsData[slug]);
    }
  }, [slug]);

  if (!slug) return null; // Or loading state
  
  // If slug is valid but not in our data, show basic fallback or 404
  if (!clubsData[slug] && typeof window !== 'undefined') {
      // In a real app we might redirect or show 404 component
      return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl font-bold">Club not found</h1>
        </div>
      );
  }
  
  if (!club) return <div className="min-h-screen"></div>;

  const clubTickets = allTickets.filter(t => 
    t.team1.toLowerCase().includes(club.name.toLowerCase()) || 
    t.team2.toLowerCase().includes(club.name.toLowerCase()) ||
    club.name.toLowerCase().includes(t.team1.toLowerCase()) // partial match just in case
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16">
      {/* Hero Section */}
      <div className={`relative bg-[#111827] bg-linear-to-r ${club.color} to-[#111827] py-20 px-4 overflow-hidden`}>
         {/* Background Pattern/Image Overlay */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
             <Image src={club.banner} alt="Stadium" fill className="object-cover" />
         </div>
         
         <div className="container mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 md:w-40 md:h-40 relative bg-white rounded-full p-4 shadow-2xl shrink-0">
                    <Image src={club.logo} alt={club.name} fill className="object-contain p-4" />
                </div>
                <div className="text-center md:text-left text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{club.name}</h1>
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-200 font-medium">
                        <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> {club.stadium}</span>
                        <span className="flex items-center gap-2"><Users className="w-5 h-5" /> Capacity: {club.capacity}</span>
                        <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> Est. {club.founded}</span>
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Info */}
              <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-xs p-8 mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Club</h2>
                      <p className="text-gray-600 leading-relaxed mb-6">
                          {club.description}
                      </p>
                      <div className="pt-6 border-t border-gray-100">
                          <h3 className="font-semibold text-gray-900 mb-3">Club Details</h3>
                          <ul className="space-y-3 text-sm text-gray-600">
                             <li className="flex justify-between"><span>League</span> <span className="font-medium text-gray-900">Premier League</span></li>
                             <li className="flex justify-between"><span>Country</span> <span className="font-medium text-gray-900">United Kingdom</span></li>
                             <li className="flex justify-between"><span>City</span> <span className="font-medium text-gray-900">{club.stadium.includes("London") ? "London" : "Manchester"}</span></li>
                          </ul>
                      </div>
                  </div>
              </div>

              {/* Right Column: Tickets */}
              <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Matches & Tickets</h2>
                  
                  <div className="space-y-4">
                      {clubTickets.length > 0 ? (
                          clubTickets.map((ticket) => (
                              <div key={ticket.id} className={`bg-white border-2 ${club.borderAccent} rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow`}>
                                  <div className="flex items-center gap-6 flex-1 w-full md:w-auto">
                                      {/* Match Date */}
                                       <div className="flex flex-col items-center justify-center border-r border-gray-100 pr-6 min-w-[70px]">
                                          <span className="text-2xl font-bold text-gray-900">{ticket.date.split(' ')[0]}</span>
                                          <span className="text-xs font-bold text-gray-500 uppercase">{ticket.date.split(' ')[1]}</span>
                                      </div>
                                      
                                      {/* Teams */}
                                      <div className="flex-1">
                                          <div className="flex items-center gap-3 mb-2">
                                              <span className="text-lg font-bold text-gray-900">{ticket.team1}</span>
                                              <span className="text-gray-400 text-sm">vs</span>
                                              <span className="text-lg font-bold text-gray-900">{ticket.team2}</span>
                                          </div>
                                          <div className="flex items-center gap-2 text-sm text-gray-500">
                                              <span className={`px-2 py-0.5 rounded text-[10px] bg-gray-100 text-gray-600 font-medium border border-gray-200`}>Premier League</span>
                                              <span>•</span>
                                              <span>{ticket.time}</span>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                                      <div className="text-right hidden md:block">
                                          <div className="text-xs text-gray-500">Starting from</div>
                                          <div className={`text-xl font-bold ${club.textAccent}`}>€{ticket.price}</div>
                                      </div>
                                      <Button className={`${club.accent} hover:opacity-90 text-white rounded-full px-8 py-2 font-bold w-full md:w-auto`}>
                                          Buy Tickets
                                      </Button>
                                  </div>
                              </div>
                          ))
                      ) : (
                          <div className="bg-white rounded-xl p-8 text-center border border-gray-100">
                              <p className="text-gray-500">No upcoming tickets available for this club at the moment.</p>
                          </div>
                      )}
                  </div>
              </div>
          </div>

      </div>

      <WhyChoose />
    </div>
  );
}
