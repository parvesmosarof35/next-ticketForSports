"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Music } from "lucide-react";
import { WhyChoose } from "@/components/landing/why-choose";
import { Testimonials } from "@/components/landing/testimonials";

interface Ticket {
  id: number;
  date: {
    day: string;
    month: string;
  };
  artist: {
    name: string;
    image: string;
  };
  tour: {
    name: string;
    image: string;
  };
  venue: string;
  location: string;
  time: string;
  price: number;
}

const tickets: Ticket[] = [
  {
    id: 1,
    date: { day: "15", month: "JUN 2025" },
    artist: { name: "Taylor Swift", image: "/FixturesImg (2).png" }, // Placeholder
    tour: { name: "The Eras Tour", image: "/FixturesImg (3).png" }, // Placeholder
    venue: "Wembley Stadium",
    location: "London, UK",
    time: "Saturday, 19:00",
    price: 450,
  },
  {
    id: 2,
    date: { day: "22", month: "JUL 2025" },
    artist: { name: "Coldplay", image: "/FixturesImg (5).png" }, // Placeholder
    tour: { name: "Music of the Spheres", image: "/FixturesImg (1).png" }, // Placeholder
    venue: "Stade de France",
    location: "Paris, France",
    time: "Friday, 20:00",
    price: 320,
  },
  {
    id: 3,
    date: { day: "10", month: "AUG 2025" },
    artist: { name: "Ed Sheeran", image: "/FixturesImg (2).png" },
    tour: { name: "Mathematics Tour", image: "/FixturesImg (3).png" },
    venue: "MetLife Stadium",
    location: "New Jersey, USA",
    time: "Sunday, 18:30",
    price: 180,
  },
  {
    id: 4,
    date: { day: "05", month: "SEP 2025" },
    artist: { name: "Beyoncé", image: "/FixturesImg (5).png" },
    tour: { name: "Renaissance World Tour", image: "/FixturesImg (1).png" },
    venue: "SoFi Stadium",
    location: "Los Angeles, USA",
    time: "Saturday, 20:00",
    price: 500,
  },
];

export default function ConcertTicketsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16">
      {/* Hero Header */}
      <div className="bg-[#111827] bg-linear-to-r from-purple-900 to-[#111827] py-16 px-4">
        <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-600 p-3 rounded-xl">
                 <Music className="text-white w-8 h-8 spin-slow" /> 
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Concert Tickets</h1>
            </div>
            <p className="text-gray-300 max-w-3xl text-sm md:text-base leading-relaxed">
             Find tickets to the biggest concerts worldwide. From sold-out stadium tours to intimate gigs, secure your spot to see your favorite artists live. 100% verified tickets.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
         <div className="bg-white rounded-xl shadow-xs p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Concerts</h2>
            
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
                        placeholder="Search by artist..." 
                        className="pl-10 bg-gray-100 border-none rounded-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                </div>
            </div>

            {/* Ticket List */}
            <div className="space-y-4">
                {tickets.map((ticket) => (
                    <div key={ticket.id} className="bg-white border-2 border-purple-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                        
                        {/* Date & Info */}
                        <div className="flex items-center flex-1 gap-6">
                            {/* Date Layout */}
                            <div className="flex flex-col items-center justify-center border-r border-gray-200 pr-6 min-w-[80px]">
                                <span className="text-3xl font-extrabold text-gray-900">{ticket.date.day}</span>
                                <span className="text-[10px] font-bold text-gray-500 uppercase">{ticket.date.month}</span>
                            </div>

                            {/* Logos & Names */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                                    <Image src={ticket.artist.image} alt={ticket.artist.name} fill className="object-cover" />
                                </div>
                                
                                <div className="hidden md:block">
                                    <h3 className="text-lg font-bold text-gray-900">{ticket.artist.name}</h3>
                                    <p className="text-sm text-purple-600 font-medium">{ticket.tour.name}</p>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {ticket.venue}, {ticket.location}</span>
                                    </div>
                                    <div className="text-[10px] text-purple-500 font-medium mt-1 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>
                                        {ticket.time}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Mobile Info only */}
                            <div className="md:hidden">
                                 <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1">{ticket.artist.name}</h3>
                                 <p className="text-xs text-purple-600 mb-1">{ticket.tour.name}</p>
                                  <div className="text-[10px] text-gray-500">{ticket.time}</div>
                            </div>
                        </div>

                        {/* Price & Action */}
                         <div className="flex items-center justify-between md:justify-end gap-4 min-w-[200px] border-t md:border-t-0 p-4 md:p-0 mt-2 md:mt-0">
                             <div className="text-right hidden md:block">
                                 <p className="text-xs text-gray-400">From</p>
                             </div>
                             <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg min-w-[140px]">
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
