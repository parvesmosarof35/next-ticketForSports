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

const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });

import Link from "next/link"; // Add import

export const matches = [
  {
    id: 1,
    date: "NOV 30",
    team1: { name: "Manchester City", logo: "/player1.png" },
    team2: { name: "Arsenal", logo: "/player2.png" },
    location: "Etihad Stadium, Manchester",
    time: "19:00",
    price: "352"
  },
  {
    id: 2,
    date: "DEC 5",
    team1: { name: "Liverpool", logo: "/player1.png" },
    team2: { name: "Chelsea", logo: "/player2.png" },
    location: "Anfield, Liverpool",
    time: "20:00",
    price: "245"
  },
  {
    id: 3,
    date: "DEC 12",
    team1: { name: "Barcelona", logo: "/player1.png" },
    team2: { name: "Real Madrid", logo: "/player2.png" },
    location: "Camp Nou, Barcelona",
    time: "22:00",
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


export function MatchCard({ match }: { match: typeof matches[0] }) {
  return (
    <div
      className="mt-10 bg-white rounded-[32px] p-5 w-[280px] min-w-[280px] h-[310px] overflow-hidden relative shadow-lg border-2 border-transparent hover:border-[#B2955C] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center justify-between mx-auto group cursor-pointer shrink-0"
    >
      {/* Top Row: Date & Location */}
      <div className="w-full flex justify-between items-start">
        <div className="bg-[#1E56B1] text-white text-[11px] font-bold px-3 py-1 rounded-full z-10 transition-transform group-hover:scale-110">
          {match.date}
        </div>
        <div className="text-gray-400 text-[10px] text-right max-w-[120px] leading-tight mt-1">
          {match.location}
        </div>
      </div>

      {/* Match Title */}
      <h3 className="text-[#05305F] text-[17px] font-bold text-center mt-2 px-1 transition-colors group-hover:text-[#0A4DA1] leading-tight flex items-center justify-center gap-1.5 w-full">
        <span className="truncate">{match.team1.name}</span>
        <span className="text-gray-500 text-sm font-medium shrink-0">vs.</span>
        <span className="truncate">{match.team2.name}</span>
      </h3>

      {/* Teams / Players Section */}
      <div className="flex items-center justify-between w-full gap-2 my-2 mt-5 px-1">
        {/* Team 1 Player */}
        <div className="relative">
          <div className="w-[84px] h-[84px] flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
            <Image
              src={match.team1.logo}
              alt={match.team1.name}
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Time Info */}
        <div className="flex flex-col items-center flex-shrink-0">
          <span className="text-gray-400 text-[11px] font-bold border-gray-200 pb-0.5 mb-1 transition-colors group-hover:text-[#B2955C]">THU</span>
          <span className="text-[#0D1B2A] text-xl font-black tracking-tight transition-transform group-hover:scale-110">{match.time}</span>
        </div>

        {/* Team 2 Player */}
        <div className="relative">
          <div className="w-[84px] h-[84px] flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
            <Image
              src={match.team2.logo}
              alt={match.team2.name}
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex items-center gap-2 my-3 transition-transform group-hover:scale-105">
        <span className="text-gray-400 text-[9px] font-semibold tracking-wide">From</span> 
        <span className="font-bold text-2xl">€{match.price}</span>
      </div>

      {/* Button */}
      <Link href={`/football/booking/${match.id}`} className="w-full flex justify-center mb-1">
        <Button className="w-[85%] h-[44px] bg-[#0A4DA1] hover:bg-[#083D81] transition-all rounded-full text-white text-[15px] font-semibold shadow-md hover:shadow-lg relative overflow-hidden group/btn cursor-pointer">
          <span className="relative z-10 flex gap-1">FIND TICKETS </span>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
        </Button>
      </Link>
    </div>
  );
}

export function TopMatches() {
  return (
    <section className="py-20 bg-[#05305F]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
          <h2 className={`text-3xl font-bold text-white ${montserrat.className}`}>Top Football Matches</h2>
          <Link href="/football">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[#05305F] font-bold rounded-xl px-4 sm:px-6 py-2.5 flex items-center gap-2 cursor-pointer transition-all bg-transparent">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="relative w-full">
          {/* Left Fade Effect */}
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-60 bg-gradient-to-r from-[#05305F] via-[#05305F]/20 to-transparent z-10 pointer-events-none" />
          {/* Right Fade Effect */}
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-60 bg-gradient-to-l from-[#05305F] via-[#05305F]/20 to-transparent z-10 pointer-events-none" />

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-full"
          >
            <CarouselContent className="-ml-4">
              {matches.map((match, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 min-[1600px]:basis-1/6">
                  <MatchCard match={match} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex bg-[#05305F] hover:bg-[#0645A0] text-white border-none md:-left-2 z-20 h-10 w-10 md:h-12 md:w-12" />
            <CarouselNext className="flex bg-[#05305F] hover:bg-[#0645A0] text-white border-none md:-right-2 z-20 h-10 w-10 md:h-12 md:w-12" />
          </Carousel>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button className="bg-white text-[#05305F] hover:bg-gray-100 font-bold rounded-lg px-6">
            More Football Matches
          </Button>
        </div>

      </div>
    </section>
  );
}
