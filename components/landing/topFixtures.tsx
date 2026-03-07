"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });

interface Fixture {
  id: number;
  dateBadge: string;
  league: string;
  team1: {
    name: string;
    logo: string;
  };
  team2: {
    name: string;
    logo: string;
  };
  location: string;
  time: string;
}

const fixtures: Fixture[] = [
  {
    id: 1,
    dateBadge: "NOV 30",
    league: "Premier League",
    team1: { name: "Arsenal", logo: "/FixturesImg (1).png" },
    team2: { name: "Man Utd", logo: "/FixturesImg (2).png" },
    location: "Emirates Stadium, London",
    time: "18:30"
  },
  {
    id: 2,
    dateBadge: "DEC 05",
    league: "Premier League",
    team1: { name: "Liverpool", logo: "/FixturesImg (3).png" },
    team2: { name: "Man City", logo: "/FixturesImg (4).png" },
    location: "Anfield, Liverpool",
    time: "17:30"
  },
  {
    id: 3,
    dateBadge: "DEC 12",
    league: "Premier League",
    team1: { name: "Chelsea", logo: "/FixturesImg (5).png" },
    team2: { name: "Tottenham", logo: "/FixturesImg (1).png" },
    location: "Stamford Bridge, London",
    time: "20:00"
  },
  {
    id: 4,
    dateBadge: "NOV 30",
    league: "Premier League",
    team1: { name: "Arsenal", logo: "/FixturesImg (1).png" },
    team2: { name: "Man Utd", logo: "/FixturesImg (2).png" },
    location: "Emirates Stadium, London",
    time: "18:30"
  },
  {
    id: 5,
    dateBadge: "DEC 05",
    league: "Premier League",
    team1: { name: "Liverpool", logo: "/FixturesImg (3).png" },
    team2: { name: "Man City", logo: "/FixturesImg (4).png" },
    location: "Anfield, Liverpool",
    time: "17:30"
  }
];

function FixtureCard({ fixture }: { fixture: Fixture }) {
  return (
    <div className={`bg-white rounded-[32px] p-6 w-full h-[320px] md:h-[380px] overflow-hidden relative shadow-lg border-2 border-transparent hover:border-[#B2955C] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between mx-auto group cursor-pointer ${montserrat.className}`}>

      {/* Header: Date Badge & League */}
      <div className="flex justify-between items-start">
        <div className="bg-[#0047AB] text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest shadow-lg shadow-blue-200">
          {fixture.dateBadge}
        </div>
        <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{fixture.league}</span>
      </div>

      {/* Teams Display */}
      <div className="flex items-center justify-between gap-4 my-4">
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 md:w-20 md:h-20 relative mb-3 transition-transform group-hover:scale-110 duration-500">
            <Image src={fixture.team1.logo} alt={fixture.team1.name} fill className="object-contain" />
          </div>
          <span className="text-[#05305F] text-sm md:text-base font-black text-center leading-tight">{fixture.team1.name}</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-gray-300 font-bold text-xs mb-1">vs</span>
          <div className="bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
            <span className="text-[#05305F] text-lg font-black">{fixture.time}</span>
          </div>
        </div>

        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 md:w-20 md:h-20 relative mb-3 transition-transform group-hover:scale-110 duration-500">
            <Image src={fixture.team2.logo} alt={fixture.team2.name} fill className="object-contain" />
          </div>
          <span className="text-[#05305F] text-sm md:text-base font-black text-center leading-tight">{fixture.team2.name}</span>
        </div>
      </div>

      {/* Location */}
      <div className="text-center px-2">
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter truncate opacity-60 group-hover:opacity-100 transition-opacity">
          {fixture.location}
        </p>
      </div>

      {/* Button */}
      <Button className="w-full py-7 bg-[#0047AB] hover:bg-[#003685] transition-all rounded-2xl text-white text-sm font-black uppercase tracking-widest shadow-xl shadow-blue-200/50 group-hover:scale-[1.02]">
        GET TICKETS
      </Button>

    </div>
  );
}

export function TopFixtures() {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-black text-[#05305F] ${montserrat.className}`}>Top Fixtures</h2>
          <Button variant="ghost" className="text-[#0047AB] font-black uppercase tracking-widest hover:bg-blue-50">
            Full Schedule
          </Button>
        </div>

        <div className="relative w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-full"
          >
            <CarouselContent className="-ml-4 pb-12">
              {fixtures.map((fixture) => (
                <CarouselItem
                  key={fixture.id}
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
