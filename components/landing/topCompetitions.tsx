"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });

const competitions = [
  {
    name: "World cup 2026",
    tickets: "123827 tickets",
    image: "/cup.png",
    location: "USA, Mexico, Canada",
  },
  {
    name: "Champions League",
    tickets: "123827 tickets",
    image: "/cup.png",
    location: "Europe, various cities",
  },
  {
    name: "World cup 2026",
    tickets: "123827 tickets",
    image: "/cup.png",
    location: "USA, Mexico, Canada",
  },
  {
    name: "World cup 2026",
    tickets: "123827 tickets",
    image: "/cup.png",
    location: "USA, Mexico, Canada",
  },
  {
    name: "World cup 2026",
    tickets: "123827 tickets",
    image: "/cup.png",
    location: "USA, Mexico, Canada",
  },
];

function CompetitionCard({ competition }: { competition: typeof competitions[0] }) {
  return (
    <div className="h-full bg-white rounded-[32px] p-5 md:p-6 w-full aspect-square overflow-hidden relative shadow-lg border-2 border-transparent hover:border-[#B2955C] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center justify-between mx-auto group cursor-pointer">

      {/* Header */}
      <div className="flex flex-col items-center pt-2 transition-transform group-hover:scale-105">
        <h3 className="text-[#05305F] text-xl md:text-xl font-bold leading-tight">{competition.name}</h3>
        <p className="text-gray-400 text-sm md:text-base mt-1">
          {competition.tickets.split(' ')[0]} <span className="text-[#05305F]/60">tickets</span>
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center flex-grow transition-transform duration-500 group-hover:scale-110">
        <div className="w-[100px] h-[140px] md:w-[120px] md:h-[160px] relative">
          <Image
            src={competition.image}
            alt={competition.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Location Info */}
      <div className="flex items-center gap-2 mb-4 transition-transform group-hover:scale-105">
        <MapPin className="w-5 h-5 text-black"  />
        <span className="text-black text-sm md:text-lg ">{competition.location}</span>
      </div>

      {/* Button */}
      <Button className={`w-[70%]  h-[44px] md:h-[52px] bg-[#0A4DA1] hover:bg-[#083D81] transition-all rounded-full text-white text-sm md:text-base font-semibold tracking-wide uppercase shadow-md hover:shadow-lg relative overflow-hidden group/btn ${montserrat.className} cursor-pointer`}>
        <span className="relative z-10">FIND TICKETS</span>
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
      </Button>
    </div>
  )
}

export function TopCompetitions() {
  return (
    <section className="pt-20 py-6 bg-[#05305F]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Top Competitions</h2>
          <Button className="bg-white text-[#05305F] hover:bg-gray-100 font-bold rounded-lg px-6 hidden md:block cursor-pointer">
            More Competitions
          </Button>
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
            <CarouselContent className="-ml-4 pb-12">
              {competitions.map((competition, index) => (
                <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 min-[1600px]:basis-1/6">
                  <CompetitionCard competition={competition} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex bg-[#05305F] hover:bg-[#0645A0] text-white border-none md:left-4 -left-3 z-20 h-12 w-12" />
            <CarouselNext className="flex bg-[#05305F] hover:bg-[#0645A0] text-white border-none md:right-4 -right-3 z-20 h-12 w-12" />
          </Carousel>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button className="bg-white text-[#05305F] hover:bg-gray-100 font-bold rounded-lg px-6">
            More Competitions
          </Button>
        </div>
      </div>
    </section>
  );
}
