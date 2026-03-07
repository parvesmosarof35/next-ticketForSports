"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });

import Link from "next/link"; // Add import

const matches = [
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


function MatchCard({ match }: { match: typeof matches[0] }) {
  return (
    <div
      className="bg-white rounded-[32px] p-5 md:p-6 w-full aspect-square overflow-hidden relative shadow-xl border border-gray-100 flex flex-col items-center justify-between mx-auto"
    >
      {/* Top Row: Date & Location */}
      <div className="w-full flex justify-between items-start">
        <div className="bg-[#1E56B1] text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full z-10">
          {match.date}
        </div>
        <div className="text-gray-400 text-[9px] md:text-[11px] text-right max-w-[120px] leading-tight">
          {match.location}
        </div>
      </div>

      {/* Match Title */}
      <h3 className="text-[#05305F] text-base md:text-lg font-semibold text-center mt-2 px-2">
        {match.team1.name} vs. {match.team2.name}
      </h3>

      {/* Teams / Players Section */}
      <div className="flex items-center justify-between w-full gap-2 my-2">
        {/* Team 1 Player */}
        <div className="relative">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#5FB0E8]/10 flex items-center justify-center overflow-hidden border border-[#5FB0E8]/20">
            <Image
              src={match.team1.logo}
              alt={match.team1.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Time Info */}
        <div className="flex flex-col items-center flex-shrink-0">
          <span className="text-gray-400 text-[10px] md:text-xs font-medium border-b border-gray-200 pb-0.5 mb-1">THU</span>
          <span className="text-[#0D1B2A] text-lg md:text-xl font-bold">{match.time}</span>
        </div>

        {/* Team 2 Player */}
        <div className="relative">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E5322E]/10 flex items-center justify-center overflow-hidden border border-[#E5322E]/20">
            <Image
              src={match.team2.logo}
              alt={match.team2.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-gray-400 text-xs md:text-sm">From:</span>
        <span className="text-black text-2xl md:text-3xl font-bold">€ {match.price}</span>
      </div>

      {/* Button */}
      <Link href={`/football/booking/${match.id}`} className="w-full flex justify-center">
        <Button className={`w-[70%] h-[40px] md:h-[48px] bg-[#0A4DA1] hover:bg-[#083D81] transition-all rounded-full text-white text-sm md:text-base font-semibold tracking-wide uppercase shadow-md hover:shadow-lg relative overflow-hidden group ${montserrat.className}`}>
          <span className="relative z-10">FIND TICKETS</span>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </Button>
      </Link>
    </div>
  );
}

export function TopMatches() {
  return (
    <section className="py-6 bg-[#05305F]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Top Football Matches</h2>
          <Link href="/football">
            <Button className="bg-white text-[#05305F] hover:bg-gray-100 font-bold rounded-lg px-6 hidden md:block cursor-pointer">
              More Football Matches
            </Button>
          </Link>
        </div>

        <div className="relative w-full">
          {/* Left Fade Effect */}
          <div className="absolute top-0 bottom-0 left-0 md:w-32 w-5 bg-gradient-to-r from-[#05305F] via-[#05305F]/80 to-transparent z-10 pointer-events-none" />
          {/* Right Fade Effect */}
          <div className="absolute top-0 bottom-0 right-0 md:w-32 w-5 bg-gradient-to-l from-[#05305F] via-[#05305F]/80 to-transparent z-10 pointer-events-none" />

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
            <CarouselPrevious className="flex bg-[#05305F] hover:bg-[#0645A0] text-white border-none left-4 z-20 h-12 w-12" />
            <CarouselNext className="flex bg-[#05305F] hover:bg-[#0645A0] text-white border-none right-4 z-20 h-12 w-12" />
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
