"use client";

import { Flag, HelpCircle, Snowflake, Castle, Trophy, Cross, Award, LandPlot } from "lucide-react";
import Image from "next/image";

const sportsEvents = [
  {
    name: "World Cup 2026",
    image: "/PopularCompetitions (1).jpg", // Replace with the appropriate image URL
    location: "Zapopan, Mexico",
    tickets: "186104 Tickets",
    price: "€222",
    date: "JUN-JUL 11-19",
  },
  {
    name: "Premier League",
    image: "/PopularCompetitions (2).png", // Replace with the appropriate image URL
    location: "Birmingham, United Kingdom",
    tickets: "235838 Tickets",
    price: "€60",
    date: "DEC-MAY 6-24",
  },
  {
    name: "Men's T20 World Cup",
    image: "/PopularCompetitions (3).png", // Replace with the appropriate image URL
    location: "Colombo, Sri Lanka",
    tickets: "872 Tickets",
    price: "€195",
    date: "FEB-MAR 7-8",
  },
  {
    name: "La Liga",
    image: "/PopularCompetitions (1).jpg", // Replace with the appropriate image URL
    location: "Oviedo, Spain",
    tickets: "34335 Tickets",
    price: "€65",
    date: "DEC-MAY 5-24",
  },
];

export function TopSportsEvents() {
  return (
    <section className="py-16 bg-[#111827]">
      <div className="container mx-auto px-4">
        {/* Header with title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">Popular Competitions</h2>
        </div>

        {/* Sports Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {sportsEvents.map((event, index) => (
            <div
              key={index}
              className="bg-[#212631] rounded-lg overflow-hidden relative shadow-lg hover:shadow-xl border border-gray-500/20 hover:bg-[#2a303d] transition-colors cursor-pointer"
            >
              {/* Event Image */}
              <Image
                src={event.image}
                alt={event.name}
                width={350}
                height={200}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                {/* Event Name */}
                <h3 className="text-xl text-white font-semibold">{event.name}</h3>

                {/* Location */}
                <div className="text-sm text-gray-400 mt-1">
                  <span className="text-gray-500">Location:</span> {event.location}
                </div>

                {/* Tickets */}
                <div className="text-sm text-gray-400 mt-2">{event.tickets}</div>

                {/* Date and Price */}
                <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
                  <div>{event.date}</div>
                  <div className="text-lg text-white font-semibold">{event.price}</div>
                </div>

                {/* Buy Button */}
                <button className="w-full mt-4 bg-[#1E90FF] text-white py-2 rounded-xl hover:bg-[#0d7ed9] transition-colors">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
