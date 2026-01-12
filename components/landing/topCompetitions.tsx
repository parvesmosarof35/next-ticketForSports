"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
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
    footerTitle: "FIFA WORLD CUP",
    location: "Old Trafford, Manchester",
  },
  {
    name: "Champions League",
    tickets: "123827 tickets",
    image: "/cup.png",
    footerTitle: "FIFA WORLD CUP",
    location: "Old Trafford, Manchester",
  },
  {
    name: "World cup 2026",
    tickets: "123827 tickets",
    image: "/cup.png",
    footerTitle: "FIFA WORLD CUP",
    location: "Old Trafford, Manchester",
  },
  {
    name: "World cup 2026",
    tickets: "123827 tickets",
    image: "/cup.png",
    footerTitle: "FIFA WORLD CUP",
    location: "Old Trafford, Manchester",
  },
   {
    name: "World cup 2026",
    tickets: "123827 tickets",
    image: "/cup.png",
    footerTitle: "FIFA WORLD CUP",
    location: "Old Trafford, Manchester",
  },
];

function CompetitionCard({ competition }: { competition: typeof competitions[0] }) {
  return (
    <div className="bg-white rounded-[30px] p-[24px] w-[305px] h-[324px] overflow-hidden relative shadow-lg border-[6px] border-[#B2955C] flex flex-col justify-between mx-auto text-center">
        
        {/* Header */}
        <div className="flex flex-col items-center pt-2">
            <h3 className="text-[#05305F] text-xl font-bold leading-tight">{competition.name}</h3>
            <span className="text-gray-500 text-xs mt-1">{competition.tickets}</span>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center flex-grow -my-2">
            <div className="w-[100px] h-[120px] relative">
                 <Image
                    src={competition.image}
                    alt={competition.name}
                    fill
                    className="object-contain"
                />
            </div>
        </div>

        {/* Footer Info */}
        <div className="mb-4">
             <h4 className="text-[#05305F] text-sm font-bold uppercase tracking-wide">{competition.footerTitle}</h4>
             <div className="flex justify-center items-center gap-1 text-gray-400 text-[10px] mt-1">
                <span className="text-[#1E90FF]">📍</span> {competition.location}
             </div>
        </div>

        {/* Button */}
        <Button className={`w-full h-[40px] bg-[#0645A0] hover:bg-[#05305F] transition-colors rounded-2xl text-white text-[16px] leading-[100%] tracking-[0%] text-center uppercase ${montserrat.className}`}>
            FIND TICKETS
        </Button>
    </div>
  )
}

export function TopCompetitions() {
  return (
    <section className="py-12 bg-[#05305F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Top Competitions</h2>
          <Button className="bg-white text-[#05305F] hover:bg-gray-100 font-bold rounded-lg px-6 hidden md:block">
            More Competitions
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full"
        >
          <CarouselContent className="-ml-4 md:ml-4 md:gap-10 -gap-2">
            {competitions.map((competition, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                <CompetitionCard competition={competition} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex bg-white/10 hover:bg-white/20 text-white border-none -left-4 xl:-left-8" />
          <CarouselNext className="flex bg-white/10 hover:bg-white/20 text-white border-none -right-4 xl:-right-8" />
        </Carousel>

        <div className="mt-8 text-center md:hidden">
            <Button className="bg-white text-[#05305F] hover:bg-gray-100 font-bold rounded-lg px-6">
              More Competitions
           </Button>
        </div>
      </div>
    </section>
  );
}
