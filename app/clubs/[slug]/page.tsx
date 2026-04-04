"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Trophy, Users } from "lucide-react";
import { WhyChoose } from "@/components/landing/why-choose";
import { Montserrat } from "next/font/google";
import { Navbar } from "@/components/commom/navbar";
import { Footer } from "@/components/commom/footer";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

const leagueColors: Record<string, string> = {
  "Premier League": "#3D195B",
  "La Liga": "#EE1C23",
  "Bundesliga": "#D20222",
  "Serie A": "#1B2E56",
};

// Mock Data for Clubs
const clubsData: Record<string, any> = {
  "manchester-united": {
    name: "Manchester United",
    stadium: "Old Trafford",
    capacity: "74,310",
    founded: "1878",
    color: "from-red-900",
    themeColor: "#DA291C",
    description: "Manchester United is one of the most prestigious football clubs in the world, with a rich history of success including 20 League titles, 12 FA Cups, and 3 European Cups.",
    logo: "/FixturesImg (2).png",
    banner: "/heroPlayground.png",
  },
  "liverpool": {
    name: "Liverpool",
    stadium: "Anfield",
    capacity: "61,276",
    founded: "1892",
    themeColor: "#C8102E",
    color: "from-red-800",
    description: "Liverpool Football Club is a professional football club based in Liverpool, England, that competes in the Premier League, the top tier of English football.",
    logo: "/FixturesImg (3).png",
    banner: "/heroPlayground.png",
  },
  "arsenal": {
    name: "Arsenal",
    stadium: "Emirates Stadium",
    capacity: "60,704",
    founded: "1886",
    themeColor: "#DB0007",
    color: "from-red-600",
    description: "Arsenal Football Club is a professional football club based in Islington, London, England. Arsenal plays in the Premier League, the top flight of English football.",
    logo: "/FixturesImg (5).png",
    banner: "/heroPlayground.png",
  },
  "chelsea": {
    name: "Chelsea",
    stadium: "Stamford Bridge",
    capacity: "40,341",
    founded: "1905",
    themeColor: "#034694",
    color: "from-blue-800",
    description: "Chelsea Football Club is an English professional football club based in Fulham, West London. Founded in 1905, they play their home games at Stamford Bridge.",
    logo: "/FixturesImg (1).png",
    banner: "/heroPlayground.png",
  },
  "manchester-city": {
    name: "Manchester City",
    stadium: "Etihad Stadium",
    capacity: "53,400",
    founded: "1880",
    themeColor: "#6CABDD",
    color: "from-sky-500",
    description: "Manchester City Football Club is an English football club based in Manchester that competes in the Premier League, the top flight of English football.",
    logo: "/FixturesImg (2).png",
    banner: "/heroPlayground.png",
  },
  "tottenham": {
    name: "Tottenham Hotspur",
    stadium: "Tottenham Hotspur Stadium",
    capacity: "62,850",
    founded: "1882",
    themeColor: "#132257",
    color: "from-blue-900",
    description: "Tottenham Hotspur Football Club, commonly referred to as Tottenham or Spurs, is an English professional football club based in Tottenham, London.",
    logo: "/FixturesImg (3).png",
    banner: "/heroPlayground.png",
  }
};

const allTickets = [
  { id: 1, team1: "Manchester United", team2: "Liverpool", date: "16 MAR 2025", time: "17:00", price: 350, league: "Premier League" },
  { id: 2, team1: "Arsenal", team2: "Chelsea", date: "22 MAR 2025", time: "20:00", price: 280, league: "Premier League" },
  { id: 3, team1: "Manchester City", team2: "Tottenham", date: "05 APR 2025", time: "15:00", price: 310, league: "Premier League" },
  { id: 4, team1: "Liverpool", team2: "Everton", date: "12 APR 2025", time: "12:30", price: 250, league: "Premier League" },
  { id: 5, team1: "Chelsea", team2: "Manchester United", date: "19 APR 2025", time: "17:30", price: 320, league: "Premier League" },
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

  if (!slug) return null;
  if (!clubsData[slug] && typeof window !== 'undefined') {
    return <div className="min-h-screen flex items-center justify-center font-black">Club not found</div>;
  }
  if (!club) return <div className="min-h-screen"></div>;

  const clubTickets = allTickets.filter(t =>
    t.team1.toLowerCase().includes(club.name.toLowerCase()) ||
    t.team2.toLowerCase().includes(club.name.toLowerCase())
  );

  return (
    <div className={`min-h-screen bg-[#F9FAFB] ${montserrat.className}`}>
      <Navbar />

      {/* Hero Section */}
      <div className={`relative bg-[#051D3B] pt-32 pb-20 overflow-hidden border-b border-white/10`}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src={club.banner} alt="Stadium" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#051D3B] via-transparent to-transparent" />

        <div className="container mx-auto relative z-10 px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">

            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">{club.name}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-8 text-white/70 font-bold uppercase tracking-widest text-xs">
                <span>{club.stadium}</span>
                <span>{club.capacity} Fans</span>
                <span>Est. {club.founded}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col h-full">
              <h2 className="text-3xl font-black text-black mb-6 tracking-tight">About the Club</h2>
              <p className="text-[#4A4A4A] leading-relaxed text-[17px] font-medium mb-10">
                {club.description}
              </p>

              <div className="mt-auto space-y-4">
                <div className="p-6 bg-gray-50 rounded-3xl flex items-center justify-between border border-gray-100">
                  <span className="text-[#9B9B9B] font-bold text-xs uppercase tracking-wider">League</span>
                  <span className="text-black font-black">Premier League</span>
                </div>
                <div className="p-6 bg-gray-50 rounded-3xl flex items-center justify-between border border-gray-100">
                  <span className="text-[#9B9B9B] font-bold text-xs uppercase tracking-wider">City</span>
                  <span className="text-black font-black">{club.stadium.includes("London") ? "London" : "Manchester"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tickets Column */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-black mb-10 tracking-tight">Upcoming Matches & Tickets</h2>

            <div className="space-y-6">
              {clubTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="group bg-white rounded-[32px] p-6 md:p-8 flex flex-row items-center justify-between gap-4 md:gap-10 border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden"
                >
                  {/* Dynamic Team Color Border Line */}
                  <div
                    className="absolute bottom-0 left-0 h-1 transition-all duration-500 group-hover:w-full w-0"
                    style={{ backgroundColor: club.themeColor }}
                  />

                  <div className="flex items-center gap-4 md:gap-8 flex-1">
                    {/* Date */}
                    <div className="flex flex-col items-center justify-center pr-4 md:pr-8 border-r border-gray-100 min-w-[70px] md:min-w-[90px]">
                      <span className="text-3xl md:text-4xl font-black text-black leading-none tracking-tighter">{ticket.date.split(' ')[0]}</span>
                      <span className="text-[10px] md:text-xs font-black text-[#9B9B9B] uppercase tracking-widest mt-1">{ticket.date.split(' ')[1]}</span>
                    </div>

                    {/* Match Identity */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 md:gap-4 text-xl md:text-3xl font-black text-black tracking-tight mb-2 truncate">
                        <span>{ticket.team1}</span>
                        <span className="text-gray-400 font-medium text-sm md:text-xl">vs</span>
                        <span>{ticket.team2}</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold text-[#4A4A4A] whitespace-nowrap overflow-hidden">
                        <span className="text-blue-600 font-black">{ticket.time}</span>
                        <span className="text-gray-200">|</span>
                        <span className="truncate">{club.stadium}, {club.stadium.includes("London") ? "London" : "Manchester"}</span>
                        <span className="text-gray-200">|</span>
                        <div
                          className="px-2 py-0.5 rounded-md text-[9px] font-black text-white uppercase tracking-tighter shrink-0"
                          style={{ backgroundColor: leagueColors[ticket.league] || '#3D195B' }}
                        >
                          {ticket.league}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <div className="text-[9px] md:text-[10px] text-[#9B9B9B] font-black uppercase tracking-widest leading-none mr-2">Starting from</div>
                    <Link href={`/matches/${ticket.id}`} className="w-full md:w-auto">
                      <Button
                        className="h-[50px] md:h-[64px] rounded-2xl flex items-center gap-0 p-0 overflow-hidden shadow-xl hover:shadow-2xl transition-all border-none group/btn"
                        style={{ backgroundColor: club.themeColor }}
                      >
                        <div className="flex items-center justify-center px-5 md:px-8 h-full border-r border-white/10 shrink-0">
                          <span className="text-xl md:text-2xl font-black text-white leading-none">€ {ticket.price}</span>
                        </div>
                        <div className="flex items-center justify-center px-4 md:px-6 h-full bg-black/5 hover:bg-black/10 transition-colors uppercase font-bold text-[10px] md:text-xs tracking-widest text-white">
                          View
                        </div>
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <WhyChoose />
      <Footer />
    </div>
  );
}
