"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/commom/hero-section";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });

// Mock Data for Stadiums
const stadiumsData = [
  {
    id: 1,
    name: "Wembley Stadium",
    slug: "wembley-stadium",
    eventsCount: 2847,
    image: "/heroPlayground.png",
    description: "The Home of Football"
  },
  {
    id: 2,
    name: "Etihad Stadium",
    slug: "etihad-stadium",
    eventsCount: 1923,
    image: "/heroPlayground.png",
    description: "Home of Manchester City"
  },
  {
    id: 3,
    name: "Anfield",
    slug: "anfield",
    eventsCount: 845,
    image: "/heroPlayground.png",
    description: "Home of Liverpool FC"
  },
  {
    id: 4,
    name: "Stamford Bridge",
    slug: "stamford-bridge",
    eventsCount: 1456,
    image: "/heroPlayground.png",
    description: "Home of Chelsea FC"
  },
  {
    id: 5,
    name: "Tottenham Hotspur Stadium",
    slug: "tottenham-hotspur-stadium",
    eventsCount: 1289,
    image: "/heroPlayground.png",
    description: "State of the art venue"
  },
  {
    id: 6,
    name: "Old Trafford",
    slug: "old-trafford",
    eventsCount: 1523,
    image: "/heroPlayground.png",
    description: "The Theatre of Dreams"
  },
  {
    id: 7,
    name: "Emirates Stadium",
    slug: "emirates-stadium",
    eventsCount: 1100,
    image: "/heroPlayground.png",
    description: "Home of Arsenal FC"
  },
  {
    id: 8,
    name: "St. James' Park",
    slug: "st-james-park",
    eventsCount: 950,
    image: "/heroPlayground.png",
    description: "Home of Newcastle United"
  },
  {
    id: 9,
    name: "Villa Park",
    slug: "villa-park",
    eventsCount: 800,
    image: "/heroPlayground.png",
    description: "Home of Aston Villa"
  },
  {
    id: 10,
    name: "St. George's Park",
    slug: "st.-george's-park",
    eventsCount: 450,
    image: "/heroPlayground.png",
    description: "The FA's national football centre"
  },
  {
    id: 11,
    name: "Camp Nou",
    slug: "camp-nou",
    eventsCount: 3200,
    image: "/heroPlayground.png",
    description: "Home of FC Barcelona"
  },
  {
    id: 12,
    name: "San Siro",
    slug: "san-siro",
    eventsCount: 2100,
    image: "/heroPlayground.png",
    description: "Home of AC Milan and Inter Milan"
  },
  {
    id: 13,
    name: "Allianz Arena",
    slug: "allianz-arena",
    eventsCount: 2800,
    image: "/heroPlayground.png",
    description: "Home of FC Bayern Munich"
  }
];

function StadiumsContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams?.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  useEffect(() => {
    if (initialSearch) {
      setSearchTerm(initialSearch);
    }
  }, [initialSearch]);

  const filteredStadiums = stadiumsData.filter(stadium =>
    stadium.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen bg-[#F9FAFB] ${montserrat.className}`}>
      {/* Hero Section */}
      <HeroSection
        title="Stadiums"
        description="Discover the world's most iconic venues and compare ticket prices for every event on TicketforSport.com"
        isCentered={true}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-xl w-full mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl flex items-center p-2 border border-white/20 shadow-2xl h-16 group focus-within:bg-white/20 transition-all">
            <Search className="w-6 h-6 text-blue-400 ml-5 mr-3" />
            <Input
              placeholder="Search for a stadium..."
              className="border-none bg-transparent shadow-none text-white placeholder:text-gray-400 h-full flex-1 focus-visible:ring-0 text-lg font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
      </HeroSection>

      {/* Grid Content */}
      <div className="container mx-auto px-4 max-w-6xl py-20 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStadiums.map((stadium, idx) => (
            <motion.div
              key={stadium.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-4xl overflow-hidden shadow-lg border-[3px] hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Stadium Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={stadium.image}
                  alt={stadium.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Stadium Name */}
                <h3 className="text-xl font-black text-[#051d3b] uppercase tracking-tight mb-2 italic">
                  {stadium.name}
                </h3>

                {/* Events Count & Verified */}
                <div className="flex items-center gap-2 text-xs font-bold mb-6">
                  <span className="text-[#0047AB]">
                    {stadium.eventsCount.toLocaleString()} EVENTS
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-400 uppercase tracking-wider">Verified</span>
                </div>

                <div className="mt-auto">
                  <Link href={`/stadium/${stadium.slug}`} className="block w-full">
                    <Button className="w-full bg-[#0047AB] hover:bg-[#003685] text-white py-5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg transition-all active:scale-95 cursor-pointer">
                      Explore Venue
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredStadiums.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] shadow-sm border border-gray-100 mt-10">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-500 text-2xl font-black italic uppercase tracking-tight">No stadiums found</p>
            <p className="text-gray-400 mt-2 font-bold uppercase text-xs tracking-widest">Matching "{searchTerm}"</p>
            <Button
              variant="link"
              onClick={() => setSearchTerm("")}
              className="text-[#0047AB] mt-6 font-black uppercase tracking-widest hover:underline"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function StadiumsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#051d3b]" />}>
      <StadiumsContent />
    </Suspense>
  );
}
