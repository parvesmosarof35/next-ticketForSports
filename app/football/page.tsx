"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Calendar, MapPin, Settings } from "lucide-react";
import { WhyChoose } from "@/components/landing/why-choose";
import { Testimonials } from "@/components/landing/testimonials";

interface Ticket {
  id: number;
  date: {
    day: string;
    month: string;
  };
  team1: {
    name: string;
    logo: string;
  };
  team2: {
    name: string;
    logo: string;
  };
  competition: {
    name: string;
    logo: string; // Using logo for the competition icon
  };
  location: string;
  time: string;
  price: number;
}

const tickets: Ticket[] = [
  {
    id: 1,
    date: { day: "16", month: "MAR 2025" },
    team1: { name: "Manchester United", logo: "/FixturesImg (2).png" }, // Using existing assets
    team2: { name: "Liverpool", logo: "/FixturesImg (3).png" },
    competition: { name: "Premier League", logo: "/cup.png" }, // Placeholder for PL logo
    location: "Old Trafford, Manchester",
    time: "Thursday, 17:00",
    price: 352,
  },
  {
    id: 2,
    date: { day: "15", month: "MAR 2025" },
    team1: { name: "Barcelona", logo: "/FixturesImg (5).png" }, // Placeholder
    team2: { name: "Bayern Munich", logo: "/FixturesImg (1).png" }, // Placeholder
    competition: { name: "Premier League", logo: "/cup.png" },
    location: "Old Trafford, Manchester",
    time: "Thursday, 07:00",
    price: 352,
  },
  {
    id: 3,
    date: { day: "16", month: "MAR 2025" },
    team1: { name: "Manchester United", logo: "/FixturesImg (2).png" },
    team2: { name: "Liverpool", logo: "/FixturesImg (3).png" },
    competition: { name: "Premier League", logo: "/cup.png" },
    location: "Old Trafford, Manchester",
    time: "Thursday, 17:00",
    price: 352,
  },
  {
    id: 4,
    date: { day: "15", month: "MAR 2025" },
    team1: { name: "Barcelona", logo: "/FixturesImg (5).png" },
    team2: { name: "Bayern Munich", logo: "/FixturesImg (1).png" },
    competition: { name: "Premier League", logo: "/cup.png" },
    location: "Old Trafford, Manchester",
    time: "Thursday, 07:00",
    price: 352,
  },
  {
    id: 5,
    date: { day: "16", month: "MAR 2025" },
    team1: { name: "Manchester United", logo: "/FixturesImg (2).png" },
    team2: { name: "Liverpool", logo: "/FixturesImg (3).png" },
    competition: { name: "Premier League", logo: "/cup.png" },
    location: "Old Trafford, Manchester",
    time: "Thursday, 17:00",
    price: 352,
  },
  {
    id: 6,
    date: { day: "15", month: "MAR 2025" },
    team1: { name: "Barcelona", logo: "/FixturesImg (5).png" },
    team2: { name: "Bayern Munich", logo: "/FixturesImg (1).png" },
    competition: { name: "Premier League", logo: "/cup.png" },
    location: "Old Trafford, Manchester",
    time: "Thursday, 07:00",
    price: 352,
  },
  {
    id: 7,
    date: { day: "15", month: "MAR 2025" },
    team1: { name: "Barcelona", logo: "/FixturesImg (5).png" },
    team2: { name: "Bayern Munich", logo: "/FixturesImg (1).png" },
    competition: { name: "Premier League", logo: "/cup.png" },
    location: "Old Trafford, Manchester",
    time: "Thursday, 07:00",
    price: 352,
  },
];

export default function FootballPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16">
      {/* Hero Header */}
      <div className="bg-[#111827] bg-linear-to-r from-blue-900 to-[#111827] py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Settings className="text-white w-8 h-8 spin-slow" />
              {/* Placeholder icon, replace with specific football icon if needed */}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Football Tickets</h1>
          </div>
          <p className="text-gray-300 max-w-3xl text-sm md:text-base leading-relaxed">
            All football tickets listed on TicketforSport come from verified vendors with 100% guarantee. Compare prices across sellers and find the best match-day seats effortlessly. Experience the thrill of live football with complete peace of mind.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-xs p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare Football Ticket Prices</h2>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div className="flex items-center">
              <Select defaultValue="date">
                <SelectTrigger className="w-[180px] bg-gray-100 border-none rounded-full px-4 font-medium text-gray-600">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Sort by: Date</SelectItem>
                  <SelectItem value="price_asc">Price: Low to High</SelectItem>
                  <SelectItem value="price_desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative w-full md:w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by team..."
                className="pl-10 bg-gray-100 border-none rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Ticket List */}
          <div className="space-y-6">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col lg:flex-row items-center gap-6">

                {/* Date Badge */}
                <div className="flex flex-col items-center justify-center min-w-[80px] h-[80px] bg-blue-50 rounded-xl text-blue-900 border border-blue-100">
                  <span className="text-2xl font-black">{ticket.date.day}</span>
                  <span className="text-xs font-bold uppercase tracking-wider">{ticket.date.month.split(' ')[0]}</span>
                </div>

                {/* Match Info */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Teams */}
                    <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-start">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 relative hover:scale-110 transition-transform">
                          <Image src={ticket.team1.logo} alt={ticket.team1.name} fill className="object-contain" />
                        </div>
                        <span className="hidden md:block text-xl font-bold text-gray-900 w-32 text-right leading-tight">{ticket.team1.name}</span>
                      </div>

                      <div className="flex flex-col items-center px-4">
                        <span className="text-gray-400 text-xs font-bold mb-1">vs</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600 border border-gray-200">
                          {ticket.time.split(', ')[1]}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="hidden md:block text-xl font-bold text-gray-900 w-32 text-left leading-tight">{ticket.team2.name}</span>
                        <div className="w-16 h-16 relative hover:scale-110 transition-transform">
                          <Image src={ticket.team2.logo} alt={ticket.team2.name} fill className="object-contain" />
                        </div>
                      </div>
                    </div>

                    {/* Mobile Teams Text */}
                    <div className="md:hidden text-center -mt-4">
                      <h3 className="text-lg font-bold text-gray-900">{ticket.team1.name} <span className="text-gray-400 font-normal">vs</span> {ticket.team2.name}</h3>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col items-center md:items-start gap-2 min-w-[180px] border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                          🏆
                        </span>
                        <span className="font-medium">{ticket.competition.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                          <MapPin className="w-4 h-4" />
                        </span>
                        <span className="font-medium truncate max-w-[150px]">{ticket.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex flex-col items-end gap-2 min-w-[140px] border-t lg:border-t-0 p-4 lg:p-0 w-full lg:w-auto mt-2 lg:mt-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-gray-400 font-medium uppercase">Starting from</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#065EC2] to-[#044288] hover:from-[#054a99] hover:to-[#03336b] text-white rounded-xl py-6 shadow-lg shadow-blue-200 transition-all hover:shadow-blue-300 group-hover:scale-105">
                    <span className="text-lg font-bold">€ {ticket.price}</span>
                    <span className="ml-2 text-blue-200 text-xs">View</span>
                  </Button>
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
