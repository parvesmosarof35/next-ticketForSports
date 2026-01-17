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
      className="bg-white rounded-[30px] p-[24px] w-[305px] h-[324px] overflow-hidden relative shadow-lg border-[6px] border-[#B2955C] flex flex-col justify-between mx-auto"
    >
      {/* Date Badge */}
      <div className="absolute top-[24px] left-[24px] bg-[#0645A0] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
        {match.date}
      </div>

       {/* Location Top Right */}
       <div className="absolute top-[28px] right-[24px] text-gray-500 text-xs text-right max-w-[100px] truncate">
          {match.location}
       </div>


      {/* Teams */}
      <div className="flex flex-col pt-8 pb-2 mt-4 flex-grow justify-center">
        <div className="flex items-center justify-between gap-2 mb-2">
          {/* Team 1 */}
          <div className="text-center flex-1">
            <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-1">
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
             <span className="text-gray-400 text-[10px] font-bold">THU</span>
             <span className="text-[#05305F] text-lg font-extrabold">19:00</span>
             <span className="text-[#B2955C] text-sm font-bold">VS.</span>
          </div>

          {/* Team 2 */}
          <div className="text-center flex-1">
            <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-1">
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
        <div className="flex justify-between items-center w-full px-1 mb-2">
             <span className="text-[#05305F] text-sm font-bold text-center w-5/12 leading-tight">{match.team1.name}</span>
             <span className="text-[#05305F] text-sm font-bold text-center w-5/12 leading-tight">{match.team2.name}</span>
        </div>


        {/* Price / Location placeholder if similar to image */}
        <div className="flex justify-center items-baseline gap-1 my-2">
             <span className="text-gray-400 text-sm">From:</span>
             <span className="text-[#05305F] text-2xl font-bold">€ 250</span> 
        </div>

      </div>

      {/* Button */}
      <Link href={`/football/booking/${match.id}`} className="w-full">
        <Button className={`w-full h-[40px] bg-[#0645A0] hover:bg-[#05305F] transition-colors rounded-2xl text-white text-[16px] leading-[100%] tracking-[0%] text-center uppercase ${montserrat.className}`}>
          CHECK AVAILABILITY
        </Button>
      </Link>
    </div>
  );
}

export function TopMatches() {
  return (
    <section className="py-12 bg-[#05305F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Top Football Matches</h2>
           <Link href="/football">
           <Button className="bg-white text-[#05305F] hover:bg-gray-100 font-bold rounded-lg px-6 hidden md:block">
              More Football Matches
           </Button>
           </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full"
        >
          <CarouselContent className="-ml-4 md:ml-4 md:gap-10 -gap-2">
            {matches.map((match, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                <MatchCard match={match} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex bg-white/10 hover:bg-white/20 text-white border-none -left-4 xl:-left-8" />
          <CarouselNext className="flex bg-white/10 hover:bg-white/20 text-white border-none -right-4 xl:-right-8" />
        </Carousel>
         
        <div className="mt-8 text-center md:hidden">
            <Button className="bg-white text-[#05305F] hover:bg-gray-100 font-bold rounded-lg px-6">
              More Football Matches
           </Button>
        </div>

      </div>
    </section>
  );
}
  