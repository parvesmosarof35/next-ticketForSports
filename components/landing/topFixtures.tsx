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
import { MatchCard } from "./topMatches";

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
  {
    id: 7,
    date: "FEB 1",
    team1: { name: "Inter Milan", logo: "/player1.png" },
    team2: { name: "AC Milan", logo: "/player2.png" },
    location: "San Siro, Milan",
    time: "20:45",
    price: "280"
  },
  {
    id: 8,
    date: "FEB 1",
    team1: { name: "Inter Milan", logo: "/player1.png" },
    team2: { name: "AC Milan", logo: "/player2.png" },
    location: "San Siro, Milan",
    time: "20:45",
    price: "280"
  },
];



export function TopFixtures() {
  return (
    <section className="py-10 bg-[#F5F5F7]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-0">
          <h2 className={`text-3xl font-bold text-[#05305F] ${montserrat.className}`}>Top Fixtures</h2>
          <Link href="/football">
            <Button variant="outline" className="border-gray-300 text-gray-700 font-bold rounded-xl px-4 sm:px-6 py-2.5 flex items-center gap-2 cursor-pointer transition-all hover:bg-gray-50">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="relative w-full">
          {/* Left Fade Effect */}
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-60 bg-gradient-to-r from-[#F5F5F7] via-[#F5F5F7]/20 to-transparent z-10 pointer-events-none" />
          {/* Right Fade Effect */}
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-60 bg-gradient-to-l from-[#F5F5F7] via-[#F5F5F7]/20 to-transparent z-10 pointer-events-none" />
          
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-full"
          >
            <CarouselContent className="-ml-2 pb-12">
              {fixtures.map((fixture, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 basis-auto"
                >
                  <MatchCard match={fixture as any} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="flex bg-[#05305F] hover:bg-[#0645A0] text-white border-none md:-left-2 z-20 h-10 w-10 md:h-12 md:w-12" />
            <CarouselNext className="flex bg-[#05305F] hover:bg-[#0645A0] text-white border-none md:-right-2 z-20 h-10 w-10 md:h-12 md:w-12" />

          </Carousel>
        </div>
      </div>
    </section>
  );
}
