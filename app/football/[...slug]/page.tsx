"use client";

import { useState } from "react";
import { Navbar } from '@/components/commom/navbar';
import { Footer } from '@/components/commom/footer';
import { Testimonials } from '@/components/landing/testimonials';
import { WhyChoose } from '@/components/landing/why-choose';
import { Search, Settings, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function FootballSlugPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const matches = [
    {
      id: 1,
      date: { day: "15", month: "JAN 2025" },
      time: '15:00',
      league: 'PREMIER LEAGUE',
      team1: { name: 'Manchester United', logo: '/FixturesImg (2).png' },
      team2: { name: 'Liverpool', logo: '/FixturesImg (3).png' },
      stadium: 'Old Trafford',
      city: 'Manchester',
      price: 89,
      available: true
    },
    {
      id: 2,
      date: { day: "16", month: "JAN 2025" },
      time: '16:30',
      league: 'LA LIGA',
      team1: { name: 'Barcelona', logo: '/FixturesImg (5).png' },
      team2: { name: 'Real Madrid', logo: '/FixturesImg (1).png' },
      stadium: 'Camp Nou',
      city: 'Barcelona',
      price: 120,
      available: true
    },
    {
      id: 3,
      date: { day: "21", month: "JAN 2025" },
      time: '20:00',
      league: 'BUNDESLIGA',
      team1: { name: 'Bayern Munich', logo: '/FixturesImg (1).png' },
      team2: { name: 'Dortmund', logo: '/FixturesImg (2).png' },
      stadium: 'Allianz Arena',
      city: 'Munich',
      price: 95,
      available: true
    }
  ];

  const filteredMatches = matches.filter(match =>
    match.team1.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    match.team2.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen bg-[#F9FAFB] pb-20 ${montserrat.className}`}>

      {/* Hero Header */}
      <div className="bg-[#051D3B] py-20 px-4 pt-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-4">
      
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Football Tickets</h1>
          </div>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed font-medium">
            Find tickets to your favorite football leagues and tournaments. Secure your seat today with our verified sellers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-[32px] shadow-2xl shadow-gray-200/50 p-8 mb-12 border border-gray-100/50 backdrop-blur-xl">
          <h2 className="text-3xl font-black text-[#05305F] mb-8 tracking-tight">Compare Football Ticket Prices</h2>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 pb-8 border-b border-gray-100">
            <div className="flex items-center w-full md:w-auto">
              <Select defaultValue="date">
                <SelectTrigger className="w-full md:w-[220px] bg-gray-50 border-gray-200 rounded-full px-6 h-14 font-bold text-[#05305F] hover:bg-white transition-all">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-gray-100">
                  <SelectItem value="date" className="font-bold py-3">Sort by: Date</SelectItem>
                  <SelectItem value="price_asc" className="font-bold py-3">Price: Low to High</SelectItem>
                  <SelectItem value="price_desc" className="font-bold py-3">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative w-full md:w-[400px]">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search by team..."
                className="pl-14 bg-gray-50 border-gray-200 rounded-full h-14 font-medium text-[#05305F] focus-visible:ring-blue-500/20 focus:bg-white transition-all shadow-inner"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Matches List */}
          <div className="space-y-6">
            {filteredMatches.map((ticket) => (
              <div
                key={ticket.id}
                className="group bg-white rounded-3xl border-2 border-transparent hover:border-[#B2955C] shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 p-6 flex flex-col md:flex-row items-center gap-4 min-h-[140px] relative overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Left: Date Section */}
                <div className="flex items-center gap-8 min-w-[140px]">
                  <div className="flex flex-col items-center">
                    <span className="text-5xl font-black text-[#05305F] leading-none tracking-tighter">{ticket.date.day}</span>
                    <span className="text-sm font-black text-gray-400 tracking-widest mt-1 uppercase">
                      {ticket.date.month.split(' ')[0]}
                    </span>
                  </div>
                  <div className="hidden md:block h-16 w-[2px] bg-gray-100" />
                </div>

                {/* Middle: Match Details */}
                <div className="flex-1 w-full px-2 md:px-4">
                  <div className="flex flex-col gap-4">
                    {/* Teams Title */}
                    <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-2xl md:text-3xl font-black text-[#05305F] tracking-tight">
                      <span>{ticket.team1.name}</span>
                      <span className="text-gray-300 font-medium text-xl">vs</span>
                      <span>{ticket.team2.name}</span>
                    </div>

                    {/* Sub-details row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-bold uppercase tracking-wide">
                      <span className="text-blue-600 font-black">
                        {ticket.time}
                      </span>
                      <div className="h-4 w-[1px] bg-gray-300 hidden sm:block" />
                      <span className="text-gray-500">{ticket.stadium}, {ticket.city}</span>
                      <div className="h-4 w-[1px] bg-gray-300 hidden sm:block" />
                      <div className="bg-[#6B21A8] text-white px-3 py-1.5 rounded-md text-[10px] font-black tracking-widest uppercase shadow-sm shadow-purple-200">
                        {ticket.league}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Info & CTA */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 w-full md:w-auto mt-6 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 border-gray-100">
                  {/* Tickets Left */}
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <span className="text-red-500 font-black text-2xl tracking-tighter">203</span>
                    <span className="text-gray-400 font-black text-lg tracking-tight">tickets left</span>
                  </div>

                  {/* Price Button */}
                  <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                    <span className="text-[10px] text-gray-400 font-black tracking-widest uppercase mr-3">Starting from</span>
                    <Button className={`w-full md:w-auto bg-[#0047AB] hover:bg-[#003685] text-white rounded-2xl px-10 py-8 shadow-2xl shadow-blue-300/40 flex items-center gap-4 group/btn transition-all duration-300 hover:scale-105 border-b-4 border-blue-900 ${montserrat.className}`}>
                      <span className="text-3xl font-black italic">€ {ticket.price}</span>
                      <span className="text-blue-200 text-xs font-black uppercase tracking-widest border-l border-blue-400/30 pl-4 transition-transform group-hover/btn:translate-x-1">View</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WhyChoose />
      <Testimonials />
    </div>
  );
}
