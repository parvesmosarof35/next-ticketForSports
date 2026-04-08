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
import { HeroSection } from "@/components/commom/hero-section";

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

      <HeroSection
        title="Football Tickets"
        description="Find and compare official ticket prices for all major football leagues and tournaments globally."
      />

      <div className="container mx-auto px-4 max-w-7xl -mt-16 relative z-20 pb-32">
        <div className="bg-white rounded-[32px] shadow-[0_32px_80px_rgba(0,0,0,0.06)] p-10 md:p-16 border-2 border-transparent  transition-all duration-500">

          {/* Header & Filters */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
            <div>
              <h2 className="text-4xl font-black text-[#05305F] tracking-tight mb-2">Match fixtures</h2>
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
                  <SelectItem value="date" className="font-black py-10">By Date</SelectItem>
                  <SelectItem value="price_asc" className="font-black py-10">Price: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Ticket List */}
          <div className="grid grid-cols-1 gap-8">
            {filteredTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="group bg-white rounded-[24px] md:rounded-[32px] p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-6 lg:gap-10 border-2 border-transparent hover:border-[#B2955C] shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden min-h-[140px]"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#B2955C] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center gap-3 sm:gap-4 md:gap-8 flex-1 w-full lg:w-auto min-w-0">
                  {/* Date Column */}
                  <div className="flex flex-col items-center justify-center pr-3 sm:pr-4 md:pr-8 border-r border-gray-100 min-w-[55px] sm:min-w-[70px] md:min-w-[90px]">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-none tracking-tighter">{ticket.date.day}</span>
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-black text-[#9B9B9B] uppercase tracking-widest mt-1">{ticket.date.month.split(' ')[0]}</span>
                  </div>

                  {/* Match Content */}
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg sm:text-xl md:text-3xl font-black text-black tracking-tight mb-2">
                      <span className="truncate">{ticket.team1.name}</span>
                      <span className="text-gray-400 font-medium text-xs sm:text-sm md:text-xl shrink-0">vs</span>
                      <span className="truncate">{ticket.team2.name}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] sm:text-[10px] md:text-xs font-bold text-[#4A4A4A]">
                      <span className="text-blue-600 font-black">{ticket.time}</span>
                      <span className="text-gray-200">|</span>
                      <span className="truncate">{ticket.location}</span>
                      <span className="text-gray-200">|</span>
                      <div className="px-2 py-0.5 rounded-sm text-[9px] sm:text-[10px] tracking-wide text-white uppercase shrink-0 bg-[#6e27aa] font-semibold">
                        {ticket.league}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info & Price */}
                <div className="flex items-center justify-between lg:justify-end gap-4 sm:gap-6 md:gap-10 w-full lg:w-auto shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                  <div className="text-red-500 font-black text-xs sm:text-sm md:text-base whitespace-nowrap">203 tickets left</div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="text-[8px] sm:text-[9px] md:text-[10px] text-[#9B9B9B] font-black uppercase tracking-widest leading-none mr-2">Starting from</div>
                    <Link href={`/football/booking/${ticket.id}`}>
                      <Button
                        className="h-[44px] sm:h-[50px] md:h-[64px] rounded-xl md:rounded-2xl flex items-center gap-0 p-0 overflow-hidden shadow-xl hover:shadow-2xl transition-all border-none group/btn bg-[#0047AB]"
                      >
                        <div className="px-3 sm:px-5 md:px-8 h-full flex items-center justify-center border-r border-white/10">
                          <span className="text-lg sm:text-xl md:text-2xl font-black text-white leading-none">€ {ticket.price}</span>
                        </div>
                        <div className="px-3 sm:px-4 md:px-6 h-full flex items-center justify-center bg-black/5 hover:bg-black/10 font-bold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-white">
                          View
                        </div>
                      </Button>
                    </Link>
                  </div>
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
