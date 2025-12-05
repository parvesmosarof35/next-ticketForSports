"use client";

import Image from "next/image";
import Link from "next/link";

const clubs = [
  {
    id: 1,
    name: "Real Madrid",
    image: "/Top Football Clubs (1).png", // Replace with actual image path or URL
  },
  {
    id: 2,
    name: "Barcelona",
    image: "/Top Football Clubs (2).png", // Replace with actual image path or URL
  },
  {
    id: 3,
    name: "Bayern Munich",
    image: "/Top Football Clubs (3).png", // Replace with actual image path or URL
  },
  {
    id: 4,
    name: "Manchester City",
    image: "/Top Football Clubs (4).png", // Replace with actual image path or URL
  },
  // Repeat clubs to show more images
  {
    id: 5,
    name: "Arsenal",
    image: "/Top Football Clubs (1).png", // Use a different image for Arsenal
  },
  {
    id: 6,
    name: "Chelsea",
    image: "/Top Football Clubs (2).png", // Use a different image for Chelsea
  },
  {
    id: 7,
    name: "PSG",
    image: "/Top Football Clubs (3).png", // Use a different image for PSG
  },
  {
    id: 8,
    name: "Liverpool",
    image: "/Top Football Clubs (4).png", // Use a different image for Liverpool
  },
];

export default function TopFootballClubs() {
  return (
    <section className="py-16 bg-[#111827]">
      <div className="container mx-auto px-4">

                {/* Header with title and button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">Top Football Clubs</h2>
          <Link
            href="/competitions" 
            className="bg-[#1d8ffe] hover:bg-[#0d7ed9] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            More Clubs
          </Link>
        </div>



        {/* Football Clubs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-6">
          {clubs.map((club) => (
            <div
              key={club.id}
              className=" rounded-lg overflow-hidden transition-colors group"
            >
              {/* Club Image */}
              <div className="relative w-full h-28">
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Club Name */}
              <div className="text-center py-3">
                <h3 className="text-white font-semibold text-lg">{club.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
