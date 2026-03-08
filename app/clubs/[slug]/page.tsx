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
      <div className={`relative bg-[#051D3B] pt-40 pb-24 overflow-hidden border-b border-white/10`}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src={club.banner} alt="Stadium" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#051D3B] via-transparent to-transparent" />

        <div className="container mx-auto relative z-10 px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-40 h-40 relative bg-white rounded-[2.5rem] p-6 shadow-2xl shrink-0 group hover:rotate-2 transition-transform duration-500">
              <Image src={club.logo} alt={club.name} fill className="object-contain p-6" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-lg">{club.name}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-8 text-white/70 font-bold uppercase tracking-widest text-xs">
                <span className="flex items-center gap-3"><MapPin className="w-5 h-5 text-blue-400" /> {club.stadium}</span>
                <span className="flex items-center gap-3"><Users className="w-5 h-5 text-blue-400" /> {club.capacity} Fans</span>
                <span className="flex items-center gap-3"><Calendar className="w-5 h-5 text-blue-400" /> Est. {club.founded}</span>
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
                  className="bg-white rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-transparent hover:border-[#0062E6]/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative group overflow-hidden"
                  style={{ '--hover-color': club.themeColor } as any}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,var(--hover-color),transparent_70%)] opacity-0 group-hover:opacity-[0.03] transition-opacity" />

                  <div className="flex items-center gap-10 flex-1 w-full md:w-auto">
                    {/* Date */}
                    <div className="flex flex-col items-center justify-center pr-10 border-r border-gray-100 min-w-[100px]">
                      <span className="text-4xl font-black text-black leading-none">{ticket.date.split(' ')[0]}</span>
                      <span className="text-sm font-black text-[#9B9B9B] uppercase tracking-widest mt-1">{ticket.date.split(' ')[1]}</span>
                    </div>

                    {/* Match Identity */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 flex-wrap text-2xl md:text-3xl font-black text-black tracking-tight mb-4">
                        <span>{ticket.team1}</span>
                        <span className="text-gray-300 font-medium text-lg">vs</span>
                        <span>{ticket.team2}</span>
                      </div>
                      <div className="flex items-center flex-wrap gap-4">
                        <span className="text-[#0062E6] font-black uppercase text-xs tracking-widest leading-none">{ticket.time}</span>
                        <div className="h-4 w-[1.5px] bg-gray-200" />
                        <span className="text-[#4A4A4A] font-bold text-[13px] uppercase tracking-tight">{club.stadium}, {club.stadium.includes("London") ? "London" : "Manchester"}</span>
                        <div className="h-4 w-[1.5px] bg-gray-200" />
                        <div
                          className="px-3 py-1 rounded-md text-[9px] font-black text-white tracking-[0.1em] uppercase shadow-sm"
                          style={{ backgroundColor: leagueColors[ticket.league] || '#3D195B' }}
                        >
                          {ticket.league}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center gap-8 shrink-0 w-full md:w-auto">
                    <div className="text-right hidden xl:block">
                      <div className="text-[10px] text-[#9B9B9B] font-black uppercase tracking-[0.15em] mb-1">Starting from</div>
                      <div className="text-2xl font-black text-black leading-none">€ {ticket.price}</div>
                    </div>
                    <Link href="/football" className="w-full md:w-auto">
                      <Button
                        className="h-[64px] rounded-2xl flex items-center gap-0 overflow-hidden group/btn shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95 transition-all w-full p-0"
                        style={{ backgroundColor: club.themeColor }}
                      >
                        <div className="flex flex-col items-center justify-center px-6 h-full border-r border-white/10 shrink-0">
                          <span className="text-2xl md:text-3xl font-black italic text-white flex gap-1">€ {ticket.price}</span>
                        </div>
                        <div className="flex items-center justify-center px-6 h-full bg-black/5 hover:bg-black/10 transition-colors uppercase font-black text-xs md:text-sm tracking-widest text-white/90">
                          View
                        </div>
                      </Button>
                    </Link>
                  </div>

                  {/* Card Border Line matching Team Color */}
                  <div
                    className="absolute bottom-0 left-0 h-1 transition-all duration-500 group-hover:w-full w-0"
                    style={{ backgroundColor: club.themeColor }}
                  />
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
