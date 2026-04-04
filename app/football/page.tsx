"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Settings, Calendar, ArrowRight } from "lucide-react";
import { WhyChoose } from "@/components/landing/why-choose";
import { Testimonials } from "@/components/landing/testimonials";
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

interface Ticket {
  id: number;
  date: {
    day: string;
    month: string;
  };
  team1: { name: string; logo: string; color: string };
  team2: { name: string; logo: string; color: string };
  league: string;
  location: string;
  time: string;
  price: number;
}

const tickets: Ticket[] = [
  {
    id: 1,
    date: { day: "16", month: "MAR 2025" },
    team1: { name: "Manchester Utd", logo: "/FixturesImg (2).png", color: "#DA291C" },
    team2: { name: "Liverpool", logo: "/FixturesImg (3).png", color: "#C8102E" },
    league: "Premier League",
    location: "Old Trafford, Manchester",
    time: "17:00",
    price: 352,
  },
  {
    id: 2,
    date: { day: "22", month: "MAR 2025" },
    team1: { name: "Arsenal", logo: "/FixturesImg (5).png", color: "#DB0007" },
    team2: { name: "Chelsea", logo: "/FixturesImg (1).png", color: "#034694" },
    league: "Premier League",
    location: "Emirates Stadium, London",
    time: "20:00",
    price: 280,
  },
  {
    id: 3,
    date: { day: "05", month: "APR 2025" },
    team1: { name: "Manchester City", logo: "/FixturesImg (2).png", color: "#6CABDD" },
    team2: { name: "Tottenham", logo: "/FixturesImg (3).png", color: "#132257" },
    league: "Premier League",
    location: "Etihad Stadium, Manchester",
    time: "15:00",
    price: 310,
  },
];

export default function FootballPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTickets = tickets.filter(ticket =>
    ticket.team1.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.team2.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen bg-[#F9FAFB] ${montserrat.className}`}>
      <Navbar />

      {/* Hero Header */}
      <div className="bg-[#051D3B] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto relative z-10 px-4">
          <div className="flex items-center gap-6 mb-6">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">Football Tickets</h1>
          </div>
          <p className="text-gray-400 max-w-2xl text-xl font-medium leading-relaxed">
            Find and compare official ticket prices for all major football leagues and tournaments globally.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-16 relative z-20 pb-32">
        <div className="bg-white rounded-[40px] shadow-[0_32px_80px_rgba(0,0,0,0.06)] p-10 md:p-16 border border-gray-100">

          {/* Header & Filters */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
            <div>
              <h2 className="text-4xl font-black text-black tracking-tight mb-2">Match Fixtures</h2>
              <p className="text-[#9B9B9B] font-bold uppercase tracking-widest text-xs">Verified Tickets & Safe Checkout</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1 md:w-[400px]">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for teams or leagues..."
                  className="pl-16 bg-gray-50 border-gray-100 rounded-2xl h-[64px] font-bold text-black focus-visible:ring-blue-500/20 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select defaultValue="date">
                <SelectTrigger className="w-full md:w-[220px] bg-gray-50 border-gray-100 rounded-2xl px-8 h-[64px] font-black text-black text-lg">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-gray-100">
                  <SelectItem value="date" className="font-black py-4">By Date</SelectItem>
                  <SelectItem value="price_asc" className="font-black py-4">Price: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Ticket List */}
          <div className="grid grid-cols-1 gap-8">
            {filteredTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="group bg-white rounded-[32px] p-6 md:p-8 flex flex-row items-center justify-between gap-4 md:gap-10 border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden"
              >
                {/* Horizontal Border matching League color */}
                <div
                  className="absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-700 group-hover:w-full w-0"
                  style={{ backgroundColor: leagueColors[ticket.league] || '#3D195B' }}
                />

                <div className="flex items-center gap-4 md:gap-8 flex-1">
                  {/* Date Column */}
                  <div className="flex flex-col items-center justify-center pr-4 md:pr-8 border-r border-gray-100 min-w-[70px] md:min-w-[90px]">
                    <span className="text-3xl md:text-4xl font-black text-black leading-none tracking-tighter">{ticket.date.day}</span>
                    <span className="text-[10px] md:text-xs font-black text-[#9B9B9B] uppercase tracking-widest mt-1">{ticket.date.month.split(' ')[0]}</span>
                  </div>

                  {/* Match Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 md:gap-4 text-xl md:text-3xl font-black text-black tracking-tight mb-2 truncate">
                      <span>{ticket.team1.name}</span>
                      <span className="text-gray-400 font-medium text-sm md:text-xl">vs</span>
                      <span>{ticket.team2.name}</span>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold text-[#4A4A4A] whitespace-nowrap overflow-hidden">
                      <span className="text-blue-600 font-black">{ticket.time}</span>
                      <span className="text-gray-200">|</span>
                      <span className="truncate">{ticket.location}</span>
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

                {/* Info & Price */}
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <div className="text-[9px] md:text-[10px] text-[#9B9B9B] font-black uppercase tracking-widest leading-none mr-2">Starting from</div>
                  <Link href={`/matches/${ticket.id}`}>
                    <Button
                      className="h-[50px] md:h-[64px] rounded-2xl flex items-center gap-0 p-0 overflow-hidden shadow-xl hover:shadow-2xl transition-all border-none group/btn"
                      style={{ backgroundColor: '#E23B2B' }}
                    >
                      <div className="px-5 md:px-8 h-full flex items-center justify-center border-r border-white/10">
                        <span className="text-xl md:text-2xl font-black text-white leading-none">€ {ticket.price}</span>
                      </div>
                      <div className="px-4 md:px-6 h-full flex items-center justify-center bg-black/5 hover:bg-black/10 font-bold text-[10px] md:text-xs uppercase tracking-widest text-white">
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

      <WhyChoose />
      <Testimonials />
      <Footer />
    </div>
  );
}
