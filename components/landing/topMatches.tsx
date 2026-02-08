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
    team1: { name: "Liverpool", logo: "/team (1).png" },
    team2: { name: "Chelsea", logo: "/team (2).png" },
    location: "Anfield, Liverpool",
    time: "21:00"
  },
  {
    id: 2,
    date: "DEC 5",
    team1: { name: "Man United", logo: "/team (2).png" },
    team2: { name: "Arsenal", logo: "/team (1).png" },
    location: "Old Trafford, Manchester",
    time: "20:00"
  },
  {
    id: 3,
    date: "DEC 12",
    team1: { name: "Barcelona", logo: "/team (1).png" },
    team2: { name: "Real Madrid", logo: "/team (2).png" },
    location: "Camp Nou, Barcelona",
    time: "22:00"
  },
  {
    id: 4,
    date: "NOV 30",
    team1: { name: "Liverpool", logo: "/team (1).png" },
    team2: { name: "Chelsea", logo: "/team (2).png" },
    location: "Anfield, Liverpool",
    time: "21:00"
  },
  {
    id: 5,
    date: "DEC 12",
    team1: { name: "Barcelona", logo: "/team (1).png" },
    team2: { name: "Real Madrid", logo: "/team (2).png" },
    location: "Camp Nou, Barcelona",
    time: "22:00"
  },
  {
    id: 6,
    date: "DEC 15",
    team1: { name: "Man United", logo: "/team (2).png" },
    team2: { name: "Arsenal", logo: "/team (1).png" },
    location: "Old Trafford, Manchester",
    time: "20:00"
  },
];


function MatchCard({ match }: { match: typeof matches[0] }) {
  return (
    <div
      className="bg-white rounded-[24px] md:rounded-[30px] p-4 sm:p-5 md:p-6 w-full h-[280px] md:h-[330px] overflow-hidden relative shadow-lg border-[4px] md:border-[6px] border-[#B2955C] flex flex-col justify-between mx-auto"
    >
      {/* Date Badge */}
      <div className="absolute top-[20px] left-[20px] md:top-[24px] md:left-[24px] bg-[#0645A0] text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full z-10">
        {match.date}
      </div>

      {/* Location Top Right */}
      <div className="absolute top-[24px] right-[20px] md:top-[28px] md:right-[24px] text-gray-500 text-[10px] md:text-xs text-right max-w-[80px] md:max-w-[100px] truncate">
        {match.location}
      </div>


      {/* Teams */}
      <div className="flex flex-col pt-6 md:pt-8 pb-1 md:pb-2 mt-2 md:mt-4 flex-grow justify-center">
        <div className="flex items-center justify-between gap-1 mb-1 md:mb-2">
          {/* Team 1 */}
          <div className="text-center flex-1 min-w-0">
            <div className="w-10 h-10 md:w-14 md:h-14 mx-auto rounded-full flex items-center justify-center mb-1">
              <Image
                src={match.team1.logo}
                alt={match.team1.name}
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-[8px] md:text-[10px] font-bold">THU</span>
            <span className="text-[#05305F] text-base md:text-lg font-extrabold">19:00</span>
            <span className="text-[#B2955C] text-[10px] md:text-sm font-bold">VS.</span>
          </div>

          {/* Team 2 */}
          <div className="text-center flex-1 min-w-0">
            <div className="w-10 h-10 md:w-14 md:h-14 mx-auto rounded-full flex items-center justify-center mb-1">
              <Image
                src={match.team2.logo}
                alt={match.team2.name}
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Team Names Row below logos */}
        <div className="flex justify-between items-center w-full px-1 mb-1 md:mb-2">
          <span className="text-[#05305F] text-[10px] md:text-sm font-bold text-center w-5/12 leading-tight truncate">{match.team1.name}</span>
          <span className="text-[#05305F] text-[10px] md:text-sm font-bold text-center w-5/12 leading-tight truncate">{match.team2.name}</span>
        </div>


        {/* Price / Location placeholder if similar to image */}
        <div className="flex justify-center items-baseline gap-1 my-1 md:my-2">
          <span className="text-gray-400 text-[10px] md:text-sm">From:</span>
          <span className="text-[#05305F] text-lg md:text-2xl font-bold">€ 250</span>
        </div>

      </div>

      {/* Button */}
      <Link href={`/football/booking/${match.id}`} className="w-full">
        <Button className={`w-full h-[32px] md:h-[40px] bg-[#0645A0] hover:bg-[#05305F] transition-colors rounded-xl md:rounded-2xl text-white text-[12px] md:text-[16px] leading-[100%] tracking-[0%] text-center uppercase cursor-pointer ${montserrat.className}`}>
          CHECK AVAILABILITY
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
