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
      <div className="bg-[#051D3B] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto relative z-10 px-4">
          <div className="flex items-center gap-6 mb-6">
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight leading-none uppercase">Football Tickets</h1>
          </div>
          <p className="text-gray-400 max-w-2xl text-xl font-medium leading-relaxed">
            Find and compare official ticket prices for all major football leagues and tournaments globally.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-32">
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
                className="group bg-white rounded-[40px] p-8 md:p-12 flex flex-col xl:flex-row items-center justify-between gap-10 border-2 border-transparent transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] relative overflow-hidden"
                style={{ '--league-color': leagueColors[ticket.league] || '#0062E6' } as any}
              >
                {/* Dynamic Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--league-color)] opacity-0 group-hover:opacity-30 transition-all duration-700 rounded-[40px] pointer-events-none" />
                {/* Horizontal Border matching League color */}
                <div
                  className="absolute bottom-0 left-0 h-2 bg-blue-600 transition-all duration-700 group-hover:w-full w-0"
                  style={{ backgroundColor: leagueColors[ticket.league] || '#3D195B' }}
                />

                <div className="flex items-center gap-12 flex-1 w-full xl:w-auto">
                  {/* Date Column */}
                  <div className="flex flex-col items-center justify-center pr-12 border-r-2 border-gray-50 min-w-[120px]">
                    <span className="text-6xl font-black text-black leading-none tracking-tighter">{ticket.date.day}</span>
                    <span className="text-base font-black text-[#9B9B9B] uppercase tracking-[0.2em] mt-2">{ticket.date.month.split(' ')[0]}</span>
                  </div>

                  {/* Match Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 text-3xl md:text-5xl font-black text-black tracking-tight mb-6">
                      <span>{ticket.team1.name}</span>
                      <span className="text-gray-200 font-medium md:text-3xl">vs</span>
                      <span>{ticket.team2.name}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-blue-50 flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-[#0062E6] font-black uppercase text-sm tracking-widest">{ticket.time}</span>
                      </div>
                      <div className="h-5 w-[2px] bg-gray-100 hidden sm:block" />
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <span className="text-[#4A4A4A] font-bold text-base tracking-tight">{ticket.location}</span>
                      </div>
                      <div className="h-5 w-[2px] bg-gray-100 hidden sm:block" />
                      <div
                        className="px-4 py-2 rounded-xl text-[10px] font-black text-white tracking-[0.15em] uppercase shadow-md active:scale-95 transition-all"
                        style={{ backgroundColor: leagueColors[ticket.league] || '#3D195B' }}
                      >
                        {ticket.league}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info & Price */}
                <div className="flex flex-col sm:flex-row items-center gap-12 shrink-0 w-full xl:w-auto">
                  <div className="text-right hidden xl:block">
                    <div className="text-xs text-[#9B9B9B] font-black uppercase tracking-[0.2em] mb-2 px-1">Starting from</div>
                    <div className="text-4xl font-black text-black tracking-tighter">€ {ticket.price}</div>
                  </div>

                  <Link href={`/matches/${ticket.id}`} className="w-full md:w-auto hover:translate-x-1 transition-transform">
                    <Button
                      className="h-[80px] rounded-[24px] flex items-center gap-0 p-0 overflow-hidden shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/30 transition-all border-none bg-blue-600 w-full md:w-auto"
                      style={{ backgroundColor: ticket.team1.color || '#0062E6' }}
                    >
                      <div className="px-10 h-full flex flex-col items-center justify-center border-r border-white/10 shrink-0">
                        <span className="text-3xl md:text-3xl font-black italic text-white leading-none">€ {ticket.price}</span>
                      </div>
                      <div className="px-10 h-full flex items-center justify-center bg-black/10 hover:bg-black/20 font-black text-sm uppercase tracking-widest text-white/90">
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
