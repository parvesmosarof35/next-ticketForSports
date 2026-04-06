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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });


interface City {
  id: number;
  name: string;
  description: string;
  image: string;
}

const cities = [
  {
    id: 1,
    name: "New York",
    description: "The city that never sleeps",
    image: "/cities (1).png",
  },
  {
    id: 2,
    name: "London",
    description: "Historic and vibrant",
    image: "/cities (2).png",
  },
  {
    id: 3,
    name: "Tokyo",
    description: "Where tradition meets future",
    image: "/cities (2).png",
  },
  {
    id: 4,
    name: "Paris",
    description: "City of love and lights",
    image: "/cities (3).png",
  },
  {
    id: 5,
    name: "Sydney",
    description: "Harbor city with iconic landmarks",
    image: "/cities (1).png",
  },
  {
    id: 6,
    name: "Sydney",
    description: "Harbor city with iconic landmarks",
    image: "/cities (1).png",
  },
  {
    id: 7,
    name: "Sydney",
    description: "Harbor city with iconic landmarks",
    image: "/cities (1).png",
  },
  {
    id: 8,
    name: "Sydney",
    description: "Harbor city with iconic landmarks",
    image: "/cities (1).png",
  },
  {
    id: 9,
    name: "Sydney",
    description: "Harbor city with iconic landmarks",
    image: "/cities (1).png",
  },
];


export function Features() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full mx-auto">
        <div className="relative">

          <div className="max-w-6xl mx-auto flex items-center justify-between mb-12">
            <h2 className={`text-3xl font-bold text-gray-800 ${montserrat.className}`}>Cities</h2>
            {/* <Link href="/locations">
              <Button variant="outline" className="border-gray-300 text-gray-700 font-bold rounded-xl px-4 sm:px-6 py-2.5 flex items-center gap-2 cursor-pointer transition-all hover:bg-gray-50 bg-transparent">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link> */}

            <Link href="/locations">
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
              className="w-full relative"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {cities.map((city) => (
                  <CarouselItem key={city.id} className="pl-2 basis-auto">
                    <div className="p-2">
                      <div className="relative w-[280px] h-[285px] rounded-[32px] overflow-hidden group shadow-lg mx-auto">
                        <Image
                          src={city.image}
                          alt={city.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col items-center justify-end text-center">
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:scale-105 transition-transform">{city.name}</h3>
                          <p className="text-gray-200 text-xs mb-4 line-clamp-1 group-hover:scale-105 transition-transform">{city.description}</p>
                          <Link
                            href={`/locations?search=${encodeURIComponent(city.name)}`}
                            className="w-[85%] h-[40px] bg-[#0A4DA1] text-white flex items-center justify-center rounded-full text-sm font-semibold hover:bg-[#083D81] transition-all shadow-md hover:shadow-lg relative overflow-hidden group/btn"
                          >
                             <span className="relative z-10">VIEW EVENTS</span>
                             <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

             <CarouselPrevious className="flex bg-[#05305F] hover:bg-[#0645A0] text-white border-none md:-left-2 z-20 h-10 w-10 md:h-12 md:w-12" />
            <CarouselNext className="flex bg-[#05305F] hover:bg-[#0645A0] text-white border-none md:-right-2 z-20 h-10 w-10 md:h-12 md:w-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}