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

interface Fixture {
  id: number;
  date: string;
  team1: {
    name: string;
    logo: string;
  };
  team2: {
    name: string;
    logo: string;
  };
  stadium: string;
}

const fixtures: Fixture[] = [
  {
    id: 1,
    date: "SAT, 15 JUL 2023 | 18:30",
    team1: {
      name: "Arsenal",
      logo: "/FixturesImg (1).png",
    },
    team2: {
      name: "Man Utd",
      logo: "/FixturesImg (2).png",
    },
    stadium: "Emirates Stadium, London",
  },
  {
    id: 2,
    date: "SUN, 16 JUL 2023 | 17:30",
    team1: {
      name: "Liverpool",
      logo: "/FixturesImg (3).png",
    },
    team2: {
      name: "Man City",
      logo: "/FixturesImg (4).png",
    },
    stadium: "Anfield, Liverpool",
  },
  {
    id: 3,
    date: "MON, 17 JUL 2023 | 20:00",
    team1: {
      name: "Chelsea",
      logo: "/FixturesImg (5).png",
    },
    team2: {
      name: "Tottenham",
      logo: "/FixturesImg (1).png",
    },
    stadium: "Stamford Bridge, London",
  },
    {
    id: 4,
    date: "SAT, 15 JUL 2023 | 18:30",
    team1: {
      name: "Arsenal",
      logo: "/FixturesImg (1).png",
    },
    team2: {
      name: "Man Utd",
      logo: "/FixturesImg (2).png",
    },
    stadium: "Emirates Stadium, London",
  },
  {
    id: 5,
    date: "SUN, 16 JUL 2023 | 17:30",
    team1: {
      name: "Liverpool",
      logo: "/FixturesImg (3).png",
    },
    team2: {
      name: "Man City",
      logo: "/FixturesImg (4).png",
    },
    stadium: "Anfield, Liverpool",
  },
  {
    id: 6,
    date: "MON, 17 JUL 2023 | 20:00",
    team1: {
      name: "Chelsea",
      logo: "/FixturesImg (5).png",
    },
    team2: {
      name: "Tottenham",
      logo: "/FixturesImg (1).png",
    },
    stadium: "Stamford Bridge, London",
  },
];

export function TopFixtures() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0F20]">
      <div className="container mx-auto">
        <div className="relative">

                      <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >


          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-4 items-center">
              <CarouselPrevious className="relative top-0 left-0 right-0 translate-y-0 h-12 w-12 border-4 border-white bg-white text-black hover:bg-gray-50" />
            </div>
            <h2 className="text-3xl font-bold text-gray-200">Top Fixtures</h2>
            <div className="flex gap-4 items-center justify-end">
              <CarouselNext className="relative top-0 left-0 right-0 -translate-y-0 h-12 w-12 border-4 border-white bg-white text-black hover:bg-gray-50" />
            </div>
          </div>


            <CarouselContent className="-ml-2 md:-ml-4">
              {fixtures.map((fixture) => (
                <CarouselItem
                  key={fixture.id}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-2 h-full">
                    <div className="bg-[#1A1F37] rounded-xl overflow-hidden border border-white/10 h-full flex flex-col">
                      {/* Header with badge and league */}
                      <div className="relative p-6 pb-0">
                        <div className="absolute top-4 left-4 bg-[#293c5e] text-white text-xs font-bold px-3 py-1 rounded-full">
                          DEC 16
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-[#8B8E9F] uppercase tracking-wider">
                            Premier League
                          </span>
                        </div>
                      </div>

                      <div className="p-6 pt-4 flex-1 flex flex-col">
                        <p className="text-sm text-[#8B8E9F] mb-4 hidden">
                          {fixture.date}
                        </p>

                        <div className="flex items-center justify-center gap-4 mb-6">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 relative">
                              <Image
                                src={fixture.team1.logo}
                                alt={fixture.team1.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <span className="text-white text-sm font-medium">
                              {fixture.team1.name}
                            </span>
                          </div>

                          <div className="rounded-lg px-4 py-2">
                            <span className="text-gray-200 text-3xl font-bold">VS</span>
                          </div>

                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 relative">
                              <Image
                                src={fixture.team2.logo}
                                alt={fixture.team2.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <span className="text-white text-sm font-medium">
                              {fixture.team2.name}
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg
                                className="w-4 h-4 text-[#8B8E9F] mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <span className="text-sm text-[#8B8E9F]">
                                {fixture.stadium}
                              </span>
                            </div>
                            <Button
                              className="bg-linear-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                              Get Tickets
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            
          </Carousel>
        </div>
      </div>
    </section>
  );
}
