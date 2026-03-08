"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });

const fixtures = [
  {
    id: 1,
    date: "NOV 30",
    team1: { name: "Arsenal", logo: "/player1.png" },
    team2: { name: "Man Utd", logo: "/player2.png" },
    location: "Emirates Stadium, London",
    time: "18:30",
    price: "352"
  },
  {
    id: 2,
    date: "DEC 5",
    team1: { name: "Liverpool", logo: "/player1.png" },
    team2: { name: "Man City", logo: "/player2.png" },
    location: "Anfield, Liverpool",
    time: "17:30",
    price: "245"
  },
  {
    id: 3,
    date: "DEC 12",
    team1: { name: "Chelsea", logo: "/player1.png" },
    team2: { name: "Tottenham", logo: "/player2.png" },
    location: "Stamford Bridge, London",
    time: "20:00",
    price: "500"
  },
  {
    id: 4,
    date: "JAN 2",
    team1: { name: "Bayern", logo: "/player1.png" },
    team2: { name: "Dortmund", logo: "/player2.png" },
    location: "Allianz Arena, Munich",
    time: "18:30",
    price: "180"
  },
  {
    id: 5,
    date: "JAN 15",
    team1: { name: "PSG", logo: "/player1.png" },
    team2: { name: "Marseille", logo: "/player2.png" },
    location: "Parc des Princes, Paris",
    time: "21:00",
    price: "210"
  },
  {
    id: 6,
    date: "FEB 1",
    team1: { name: "Inter Milan", logo: "/player1.png" },
    team2: { name: "AC Milan", logo: "/player2.png" },
    location: "San Siro, Milan",
    time: "20:45",
    price: "280"
  },
];

function FixtureCard({ fixture }: { fixture: typeof fixtures[0] }) {
  return (
    <div
      className="mt-10 bg-white rounded-[32px] p-5 md:p-6 w-full aspect-square overflow-hidden relative shadow-lg border-2 border-transparent hover:border-[#B2955C] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center justify-between mx-auto group cursor-pointer"
    >
      {/* Top Row: Date & Location */}
      <div className="w-full flex justify-between items-start">
        <div className="bg-[#1E56B1] text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full z-10 transition-transform group-hover:scale-110">
          {fixture.date}
        </div>
        <div className="text-gray-400 text-[9px] md:text-[11px] text-right max-w-[120px] leading-tight">
          {fixture.location}
        </div>
      </div>

      {/* Match Title */}
      <h3 className="text-[#05305F] text-base md:text-lg font-semibold text-center mt-2 px-2 transition-colors group-hover:text-[#0A4DA1]">
        {fixture.team1.name} vs. {fixture.team2.name}
      </h3>

      {/* Teams / Players Section */}
      <div className="flex items-center justify-between w-full gap-2 my-2">
        {/* Team 1 Player */}
        <div className="relative">
          <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
            <Image
              src={fixture.team1.logo}
              alt={fixture.team1.name}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Time Info */}
        <div className="flex flex-col items-center flex-shrink-0">
          <span className="text-gray-400 text-[10px] md:text-xs font-medium border-gray-200 pb-0.5 mb-1 transition-colors group-hover:text-[#B2955C]">THU</span>
          <span className="text-[#0D1B2A] text-lg md:text-xl font-bold transition-transform group-hover:scale-110">{fixture.time}</span>
        </div>

        {/* Team 2 Player */}
        <div className="relative">
          <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
            <Image
              src={fixture.team2.logo}
              alt={fixture.team2.name}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex items-center gap-1.5 mb-2 transition-transform group-hover:scale-105">
        <span className="text-gray-400 text-xs md:text-sm">From:</span>
        <span className="text-black text-2xl md:text-3xl font-bold">€ {fixture.price}</span>
      </div>

      {/* Button */}
      <Link href={`/football/booking/${fixture.id}`} className="w-full flex justify-center">
        <Button className={`w-[70%] h-[40px] md:h-[48px] bg-[#0A4DA1] hover:bg-[#083D81] transition-all rounded-full text-white text-sm md:text-base font-semibold tracking-wide uppercase shadow-md hover:shadow-lg relative overflow-hidden group/btn ${montserrat.className} cursor-pointer`}>
          <span className="relative z-10">FIND TICKETS</span>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
        </Button>
      </Link>
    </div>
  );
}

export function TopFixtures() {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-black text-[#05305F] ${montserrat.className}`}>Top Fixtures</h2>
          <Link href="/football">
            <Button variant="ghost" className="text-[#0047AB] font-black uppercase tracking-widest hover:bg-blue-50">
              Full Schedule
            </Button>
          </Link>
        </div>

        <div className="relative w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-full"
          >
            <CarouselContent className="-ml-4 pb-12">
              {fixtures.map((fixture, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 min-[1600px]:basis-1/6"
                >
                  <FixtureCard fixture={fixture} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="flex bg-white hover:bg-gray-50 text-[#05305F] border-none -left-4 shadow-xl z-20 h-14 w-14" />
            <CarouselNext className="flex bg-white hover:bg-gray-50 text-[#05305F] border-none -right-4 shadow-xl z-20 h-14 w-14" />

          </Carousel>
        </div>
      </div>
    </section>
  );
}
