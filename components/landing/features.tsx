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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="relative">

                       <Carousel
             opts={{
               align: "start",
             }}
             className="w-full relative"
           >
 
           <div className="flex items-center justify-between mb-8">
               <h2 className="text-3xl font-bold text-gray-800">Cities</h2>
               <Link href="/locations">
                 <Button variant="ghost" className="text-white bg-blue-500 hover:text-white hover:bg-blue-600 font-semibold group">
                   View All
                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                 </Button>
               </Link>
           </div>
 
 
             <CarouselContent className="-ml-2 md:-ml-4">
               {cities.map((city) => (
                 <CarouselItem key={city.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2">
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
             
             {/* Navigation Buttons: Overlay on mobile, Flanking on desktop */}
             <div className="block">
                <CarouselPrevious className="absolute -left-4 top-4/7 -translate-y-1/2 md:-left-12 h-10 w-10 md:h-12 md:w-12 border-none bg-white/80 md:bg-white hover:bg-white shadow-md text-gray-700 hover:text-blue-600 z-10" />
                <CarouselNext className="absolute -right-4 top-4/7 -translate-y-1/2 md:-right-12 h-10 w-10 md:h-12 md:w-12 border-none bg-white/80 md:bg-white hover:bg-white shadow-md text-gray-700 hover:text-blue-600 z-10" />
             </div>
           </Carousel>
        </div>
      </div>
    </section>
  );
}