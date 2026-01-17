"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, MapPin, Globe } from "lucide-react";
import { WhyChoose } from "@/components/landing/why-choose";

// Mock Data for Competitions
const competitionsData: Record<string, any> = {
  "premier-league": {
    name: "Premier League",
    region: "England",
    founded: "1992",
    color: "from-purple-900",
    accent: "bg-purple-600",
    textAccent: "text-purple-600",
    borderAccent: "border-purple-200",
    description: "The Premier League is the top level of the English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League.",
    logo: "/cup.png", // Using existing asset
    banner: "/heroPlayground.png", // Using existing asset
  },
  "champions-league": {
    name: "Champions League",
    region: "Europe",
    founded: "1955",
    color: "from-blue-900",
    accent: "bg-blue-800",
    textAccent: "text-blue-800",
    borderAccent: "border-blue-200",
    description: "The UEFA Champions League is an annual club football competition organised by the Union of European Football Associations (UEFA) and contested by top-division European clubs.",
    logo: "/cup.png", // Placeholder
    banner: "/heroPlayground.png",
  },
  "europa-league": {
    name: "Europa League",
    region: "Europe",
    founded: "1971",
    color: "from-orange-800",
    accent: "bg-orange-600",
    textAccent: "text-orange-600",
    borderAccent: "border-orange-200",
    description: "The UEFA Europa League is an annual football club competition organised by UEFA for eligible European football clubs.",
    logo: "/cup.png", // Placeholder
    banner: "/heroPlayground.png",
  },
  "fa-cup": {
    name: "FA Cup",
    region: "England",
    founded: "1871",
    color: "from-red-900",
    accent: "bg-red-600",
    textAccent: "text-red-600",
    borderAccent: "border-red-200",
    description: "The Football Association Challenge Cup, commonly known as the FA Cup, is an annual knockout football competition in men's domestic English football.",
    logo: "/cup.png", // Placeholder
    banner: "/heroPlayground.png",
  },
  "la-liga": {
    name: "La Liga",
    region: "Spain",
    founded: "1929",
    color: "from-red-500", // Orange-ish red
    accent: "bg-red-500",
    textAccent: "text-red-500",
    borderAccent: "border-red-200",
    description: "The Campeonato Nacional de Liga de Primera División, commonly known as La Liga, is the men's top professional football division of the Spanish football league system.",
    logo: "/cup.png", // Placeholder
    banner: "/heroPlayground.png",
  },
  "bundesliga": {
    name: "Bundesliga",
    region: "Germany",
    founded: "1963",
    color: "from-red-700",
    accent: "bg-red-600",
    textAccent: "text-red-600",
    borderAccent: "border-red-200",
    description: "The Bundesliga is a professional association football league in Germany. At the top of the German football league system, the Bundesliga is Germany's primary football competition.",
    logo: "/cup.png", // Placeholder
    banner: "/heroPlayground.png",
  }
};

// Mock Tickets (filtered later)
const allTickets = [
  { id: 1, team1: "Manchester United", team2: "Liverpool", date: "16 MAR 2025", time: "17:00", price: 350, competition: "Premier League", logo1: "/FixturesImg (2).png", logo2: "/FixturesImg (3).png" },
  { id: 2, team1: "Real Madrid", team2: "Barcelona", date: "22 MAR 2025", time: "20:00", price: 550, competition: "La Liga", logo1: "/FixturesImg (5).png", logo2: "/FixturesImg (1).png" },
  { id: 3, team1: "Bayern Munich", team2: "Dortmund", date: "05 APR 2025", time: "15:00", price: 310, competition: "Bundesliga", logo1: "/FixturesImg (2).png", logo2: "/FixturesImg (3).png" },
  { id: 4, team1: "Man City", team2: "Inter Milan", date: "12 APR 2025", time: "20:00", price: 450, competition: "Champions League", logo1: "/FixturesImg (3).png", logo2: "/FixturesImg (5).png" },
  { id: 5, team1: "Chelsea", team2: "Arsenal", date: "19 APR 2025", time: "17:30", price: 320, competition: "FA Cup", logo1: "/FixturesImg (1).png", logo2: "/FixturesImg (2).png" },
];

export default function EventPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [competition, setCompetition] = useState<any>(null);

  useEffect(() => {
    if (slug && competitionsData[slug]) {
      setCompetition(competitionsData[slug]);
    }
  }, [slug]);

  if (!slug) return null;
  
  if (!competitionsData[slug] && typeof window !== 'undefined') {
      return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl font-bold">Competition not found</h1>
        </div>
      );
  }
  
  if (!competition) return <div className="min-h-screen"></div>;

  const eventTickets = allTickets.filter(t => 
    t.competition.toLowerCase() === competition.name.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16">
      {/* Hero Section */}
      <div className={`relative bg-[#111827] bg-linear-to-r ${competition.color} to-[#111827] py-20 px-4 overflow-hidden`}>
         <div className="absolute inset-0 opacity-10 pointer-events-none">
             <Image src={competition.banner} alt="Stadium" fill className="object-cover" />
         </div>
         
         <div className="container mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 md:w-40 md:h-40 relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shrink-0 flex items-center justify-center">
                     {/* In a real app, use specific vectors. Here using standard cup image */}
                    <Image src={competition.logo} alt={competition.name} width={80} height={80} className="object-contain" />
                </div>
                <div className="text-center md:text-left text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{competition.name}</h1>
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-200 font-medium">
                        <span className="flex items-center gap-2"><Globe className="w-5 h-5" /> {competition.region}</span>
                        <span className="flex items-center gap-2"><Trophy className="w-5 h-5" /> Top Tier</span>
                        <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> Est. {competition.founded}</span>
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
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">About the League</h2>
                      <p className="text-gray-600 leading-relaxed mb-6">
                          {competition.description}
                      </p>
                  </div>
              </div>

              {/* Right Column: Tickets */}
              <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Matches</h2>
                  
                  <div className="space-y-4">
                      {eventTickets.length > 0 ? (
                          eventTickets.map((ticket) => (
                              <div key={ticket.id} className={`bg-white border-2 ${competition.borderAccent} rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow`}>
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
                                              <span className={`px-2 py-0.5 rounded text-[10px] bg-gray-100 text-gray-600 font-medium border border-gray-200`}>{ticket.competition}</span>
                                              <span>•</span>
                                              <span>{ticket.time}</span>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                                      <div className="text-right hidden md:block">
                                          <div className="text-xs text-gray-500">Starting from</div>
                                          <div className={`text-xl font-bold ${competition.textAccent}`}>€{ticket.price}</div>
                                      </div>
                                      <Button className={`${competition.accent} hover:opacity-90 text-white rounded-full px-8 py-2 font-bold w-full md:w-auto`}>
                                          Buy Tickets
                                      </Button>
                                  </div>
                              </div>
                          ))
                      ) : (
                          <div className="bg-white rounded-xl p-8 text-center border border-gray-100">
                              <p className="text-gray-500">No upcoming matches available for this competition at the moment.</p>
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
