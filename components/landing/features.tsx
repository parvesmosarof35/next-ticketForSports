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
];


export function Features() {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full mx-auto">
        <div className="relative">

          <div className="max-w-6xl mx-auto flex items-center justify-between mb-12">
            <h2 className={`text-3xl font-bold text-gray-800 ${montserrat.className}`}>Cities</h2>
            <Link href="/locations">
              <Button variant="outline" className="border-gray-300 text-gray-700 font-bold rounded-xl px-4 sm:px-6 py-2.5 flex items-center gap-2 cursor-pointer transition-all hover:bg-gray-50 bg-transparent">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="relative w-full">
            {/* Left Fade Effect */}
            <div className="absolute top-0 bottom-0 left-0 md:w-32 w-5 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            {/* Right Fade Effect */}
            <div className="absolute top-0 bottom-0 right-0 md:w-32 w-5 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full relative"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {cities.map((city) => (
                  <CarouselItem key={city.id} className="pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/3">
                    <div className="p-2">
                      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group">
                        <Image
                          src={city.image}
                          alt={city.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                          <p className="text-gray-200 mb-4">{city.description}</p>
                          <a
                            href={`/locations?search=${encodeURIComponent(city.name)}`}
                            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
                          >
                            View Events
                          </a>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="flex bg-white hover:bg-gray-50 text-[#05305F] border-none md:-left-2 shadow-xl z-20 h-10 w-10 md:h-12 md:w-12" />
              <CarouselNext className="flex bg-white hover:bg-gray-50 text-[#05305F] border-none md:-right-2 shadow-xl z-20 h-10 w-10 md:h-12 md:w-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}