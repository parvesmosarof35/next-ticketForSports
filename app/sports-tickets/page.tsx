"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Trophy } from "lucide-react";
import { WhyChoose } from "@/components/landing/why-choose";
import { Testimonials } from "@/components/landing/testimonials";

interface Ticket {
  id: number;
  date: {
    day: string;
    month: string;
  };
  event: [string, string];
  competition: string;
  image: string; // Using one image for sport
  location: string;
  time: string;
  price: number;
}

const tickets: Ticket[] = [
  {
    id: 1,
    date: { day: "30", month: "MAY 2025" },
    event: ["Lakers", "Warriors"],
    competition: "NBA",
    image: "/FixturesImg (1).png", // Placeholder
    location: "Crypto.com Arena, LA",
    time: "Friday, 19:30",
    price: 350,
  },
  {
    id: 2,
    date: { day: "07", month: "JUL 2025" },
    event: ["Wimbledon", "Finals"],
    competition: "Tennis",
    image: "/FixturesImg (2).png", // Placeholder
    location: "All England Club, London",
    time: "Sunday, 14:00",
    price: 2500,
  },
  {
    id: 3,
    date: { day: "15", month: "MAR 2025" },
    event: ["Red Bull", "Ferrari"],
    competition: "Formula 1",
    image: "/FixturesImg (3).png", // Placeholder
    location: "Albert Park, Melbourne",
    time: "Sunday, 15:00",
    price: 450,
  },
  {
    id: 4,
    date: { day: "02", month: "FEB 2025" },
    event: ["Chiefs", "Eagles"],
    competition: "NFL",
    image: "/FixturesImg (5).png", // Placeholder
    location: "State Farm Stadium, AZ",
    time: "Sunday, 18:30",
    price: 800,
  },
];

export default function SportsTicketsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16">
      {/* Hero Header */}
      <div className="bg-[#111827] bg-linear-to-r from-green-900 to-[#111827] py-16 px-4">
        <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-600 p-3 rounded-xl">
                 <Trophy className="text-white w-8 h-8 spin-slow" /> 
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Sports Tickets</h1>
            </div>
            <p className="text-gray-300 max-w-3xl text-sm md:text-base leading-relaxed">
             Beyond football. Secure your seats for NBA, NFL, Tennis, F1, and more. Witness the greatest sporting moments live.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
         <div className="bg-white rounded-xl shadow-xs p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Sporting Events</h2>
            
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
                        placeholder="Search by sport..." 
                        className="pl-10 bg-gray-100 border-none rounded-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                </div>
            </div>

            {/* Ticket List */}
            <div className="space-y-4">
                {tickets.map((ticket) => (
                    <div key={ticket.id} className="bg-white border-2 border-green-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                        
                        {/* Date & Info */}
                        <div className="flex items-center flex-1 gap-6">
                            {/* Date Layout */}
                            <div className="flex flex-col items-center justify-center border-r border-gray-200 pr-6 min-w-[80px]">
                                <span className="text-3xl font-extrabold text-gray-900">{ticket.date.day}</span>
                                <span className="text-[10px] font-bold text-gray-500 uppercase">{ticket.date.month}</span>
                            </div>

                            {/* Logos & Names */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 relative">
                                    <Image src={ticket.image} alt={ticket.competition} fill className="object-contain" />
                                </div>
                                
                                <div className="hidden md:block">
                                    <h3 className="text-lg font-bold text-gray-900">{ticket.event[0]} <span className="text-gray-400">vs</span> {ticket.event[1]}</h3>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                        <span className="flex items-center gap-1 font-semibold text-green-600">🏆 {ticket.competition}</span>
                                        <span className="text-gray-300">|</span>
                                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {ticket.location}</span>
                                    </div>
                                    <div className="text-[10px] text-green-500 font-medium mt-1 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                                        {ticket.time}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Mobile Info only */}
                            <div className="md:hidden">
                                 <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1">{ticket.event[0]} vs {ticket.event[1]}</h3>
                                 <div className="text-[10px] text-green-500 font-bold mb-1">{ticket.competition}</div>
                                  <div className="text-[10px] text-gray-500">{ticket.time}</div>
                            </div>
                        </div>

                        {/* Price & Action */}
                         <div className="flex items-center justify-between md:justify-end gap-4 min-w-[200px] border-t md:border-t-0 p-4 md:p-0 mt-2 md:mt-0">
                             <div className="text-right hidden md:block">
                                 <p className="text-xs text-gray-400">From</p>
                             </div>
                             <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg min-w-[140px]">
                                € {ticket.price}
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
