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

const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });

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
    team1: {
      name: "Arsenal",
      logo: "/FixturesImg (1).png",
    },
    team2: {
      name: "Man Utd",
      logo: "/FixturesImg (2).png",
    },
    location: "Emirates Stadium, London",
    time: "18:30"
  },
  {
    id: 2,
    dateBadge: "DEC 05",
    league: "Premier League",
    team1: {
      name: "Liverpool",
      logo: "/FixturesImg (3).png",
    },
    team2: {
      name: "Man City",
      logo: "/FixturesImg (4).png",
    },
    location: "Anfield, Liverpool",
    time: "17:30"
  },
  {
    id: 3,
    dateBadge: "DEC 12",
    league: "Premier League",
    team1: {
      name: "Chelsea",
      logo: "/FixturesImg (5).png",
    },
    team2: {
      name: "Tottenham",
      logo: "/FixturesImg (1).png",
    },
    location: "Stamford Bridge, London",
    time: "20:00"
  },
  {
    id: 4,
    dateBadge: "NOV 30",
    league: "Premier League",
    team1: {
      name: "Arsenal",
      logo: "/FixturesImg (1).png",
    },
    team2: {
      name: "Man Utd",
      logo: "/FixturesImg (2).png",
    },
    location: "Emirates Stadium, London",
    time: "18:30"
  },
  {
    id: 5,
    dateBadge: "DEC 05",
    league: "Premier League",
    team1: {
      name: "Liverpool",
      logo: "/FixturesImg (3).png",
    },
    team2: {
      name: "Man City",
      logo: "/FixturesImg (4).png",
    },
    location: "Anfield, Liverpool",
    time: "17:30"
  },
];

function FixtureCard({ fixture }: { fixture: Fixture }) {
  return (
    <div className="bg-white rounded-[30px] p-4 sm:p-5 md:p-6 w-full h-[300px] md:h-[360px] overflow-hidden relative shadow-lg border-[6px] border-[#B2955C] flex flex-col justify-between mx-auto">

      {/* Header: Date Badge & League */}
      <div className="flex justify-between items-start mb-2">
        <div className="bg-[#0645A0] text-white text-xs font-bold px-3 py-1 rounded-full">
          {fixture.dateBadge}
        </div>
        <span className="text-gray-500 text-xs font-bold">{fixture.league}</span>
      </div>

      {/* Versus Title */}
      <div className="text-center mb-2">
        <h3 className="text-[#05305F] text-lg font-bold">
          {fixture.team1.name} VS {fixture.team2.name}
        </h3>
      </div>

      {/* Teams & Time Center */}
      <div className="flex items-center justify-between gap-1 mb-2">
        {/* Team 1 */}
        <div className="text-center flex-1">
          <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-1">
            <Image
              src={fixture.team1.logo}
              alt={fixture.team1.name}
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Time Info */}
        <div className="flex flex-col items-center px-1">
          <span className="text-gray-400 text-[10px] font-bold">THU</span>
          <span className="text-[#05305F] text-lg font-extrabold">{fixture.time}</span>
          <span className="text-[#0645A0] text-sm font-bold">VS.</span>
        </div>

        {/* Team 2 */}
        <div className="text-center flex-1">
          <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-1">
            <Image
              src={fixture.team2.logo}
              alt={fixture.team2.name}
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="text-center mb-4">
        <p className="text-gray-500 text-[10px] truncate px-2">{fixture.location}</p>
      </div>

      {/* Button */}
      <Button className={`w-full h-[40px] bg-[#0645A0] hover:bg-[#05305F] transition-colors rounded-2xl text-white text-[16px] leading-[100%] tracking-[0%] text-center uppercase ${montserrat.className}`}>
        GET TICKETS
      </Button>

    </div>
  );
}

export function TopFixtures() {
  return (
    <section className="py-16 bg-[#F5F5F7]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#05305F]">Top Fixtures</h2>
        </div>

        <div className="relative w-full">
          {/* Left Fade Effect */}
          <div className="absolute top-0 bottom-0 left-0 md:w-32 w-5 bg-gradient-to-r from-[#F5F5F7] via-[#F5F5F7]/80 to-transparent z-10 pointer-events-none" />
          {/* Right Fade Effect */}
          <div className="absolute top-0 bottom-0 right-0 md:w-32 w-5 bg-gradient-to-l from-[#F5F5F7] via-[#F5F5F7]/80 to-transparent z-10 pointer-events-none" />

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-full"
          >
            <CarouselContent className="-ml-4">
              {fixtures.map((fixture) => (
                <CarouselItem
                  key={fixture.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 min-[1600px]:basis-1/6"
                >
                  <FixtureCard fixture={fixture} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="flex bg-[#F5F5F7] hover:bg-gray-200 text-[#05305F] border-none left-4 z-20 h-12 w-12" />
            <CarouselNext className="flex bg-[#F5F5F7] hover:bg-gray-200 text-[#05305F] border-none right-4 z-20 h-12 w-12" />

          </Carousel>
        </div>
      </div>
    </section>
  );
}
