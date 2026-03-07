"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });

const sportsEvents = [
  {
    name: "World Cup 2026",
    image: "/PopularCompetitions (1).jpg",
    location: "Zapopan, Mexico",
    tickets: "186104 Tickets",
    price: "€222",
    date: "JUN-JUL 11-19",
  },
  {
    name: "Premier League",
    image: "/PopularCompetitions (2).png",
    location: "Birmingham, United Kingdom",
    tickets: "235838 Tickets",
    price: "€60",
    date: "DEC-MAY 6-24",
  },
  {
    name: "Men's T20 World Cup",
    image: "/PopularCompetitions (3).png",
    location: "Colombo, Sri Lanka",
    tickets: "872 Tickets",
    price: "€195",
    date: "FEB-MAR 7-8",
  },
  {
    name: "La Liga",
    image: "/PopularCompetitions (1).jpg",
    location: "Oviedo, Spain",
    tickets: "34335 Tickets",
    price: "€65",
    date: "DEC-MAY 5-24",
  },
];

export function TopSportsEvents() {
  return (
    <section className={`py-20 bg-[#05305F] ${montserrat.className}`}>
      <div className="container mx-auto px-4">
        {/* Header with title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white px-2">Popular Competitions</h2>
          <Button className="bg-white text-[#05305F] hover:bg-gray-100 font-bold rounded-xl px-8 mt-4 md:mt-0 transition-all hover:scale-105">
            View All
          </Button>
        </div>

        {/* Sports Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sportsEvents.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-[32px] overflow-hidden relative shadow-lg border-2 border-transparent hover:border-[#B2955C] hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full hover:-translate-y-2"
            >
              {/* Event Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[#05305F] font-black text-sm shadow-lg">
                  {event.price}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* Event Name */}
                <h3 className="text-2xl text-[#05305F] font-black tracking-tight leading-none group-hover:text-blue-700 transition-colors">
                  {event.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-gray-400 font-bold mt-4 uppercase tracking-tighter">
                  <span className="text-gray-300">Location:</span>
                  <span className="text-gray-500 truncate">{event.location}</span>
                </div>

                {/* Tickets & Date */}
                <div className="flex justify-between items-center mt-auto pt-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Available</span>
                    <span className="text-[#05305F] font-black text-lg leading-none">{event.tickets.split(' ')[0]}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Date</span>
                    <span className="text-gray-500 font-bold">{event.date}</span>
                  </div>
                </div>

                {/* Buy Button */}
                <Button className="w-full mt-6 bg-[#0047AB] hover:bg-[#003685] text-white py-7 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-200/50 group-hover:scale-[1.02]">
                  Check Tickets
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
