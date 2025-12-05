"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function TopVenues() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111827]">
      <div className="container mx-auto">
        {/* Header with title and button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">Top Stadiums</h2>
          <Link
            href="/venues"
            className="bg-[#1d8ffe] hover:bg-[#0d7ed9] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            More Venues
          </Link>
        </div>


        {/* Stadium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Each Stadium Card */}
          {[
            {
              name: "Camp Nou",
              image: "/topStadium (1).png", // Replace with actual image path
            },
            {
              name: "Old Trafford",
              image: "/topStadium (2).png", // Replace with actual image path
            },
            {
              name: "Anfield",
              image: "/topStadium (3).png", // Replace with actual image path
            },
            {
              name: "Allianz Arena",
              image: "/topStadium (4).png", // Replace with actual image path
            },
          ].map((venue, index) => (
            <div
              key={index}
              className="relative h-88 rounded-lg overflow-hidden group"
            >
              <Image
                src={venue.image} // Replace with actual image path
                alt={venue.name}
                width={500}
                height={500}
                objectFit="cover" // Ensures the image covers the area
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black/10 ">
                <h3 className="text-3xl text-white font-semibold">{venue.name}</h3>
                <button className="mt-4 bg-[#1d8ffe] text-white px-2 py-3 rounded-full text-lg font-medium hover:bg-[#0d7ed9] transition-colors w-1/2">
                  View Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
