"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { HeroSection } from "@/components/commom/hero-section";
import { motion } from "framer-motion";

// Mock Data for Cities
const citiesData = [
  {
    id: 1,
    name: "New York",
    eventsCount: 2847,
    image: "/cities (1).png",
    description: "The city that never sleeps"
  },
  {
    id: 2,
    name: "London",
    eventsCount: 1543,
    image: "/cities (2).png",
    description: "Historic and vibrant"
  },
  {
    id: 3,
    name: "Los Angeles",
    eventsCount: 1923,
    image: "/cities (1).png", // Reusing standard asset
    description: "Entertainment capital"
  },
  {
    id: 4,
    name: "Paris",
    eventsCount: 1240,
    image: "/cities (3).png",
    description: "City of love and lights"
  },
  {
    id: 5,
    name: "Sydney",
    eventsCount: 890,
    image: "/cities (1).png",
    description: "Harbor city"
  },
  {
    id: 6,
    name: "Seattle",
    eventsCount: 845,
    image: "/cities (2).png", // Reusing
    description: "Emerald City"
  },
  {
    id: 7,
    name: "Chicago",
    eventsCount: 1456,
    image: "/cities (1).png",
    description: "The Windy City"
  },
  {
    id: 8,
    name: "Miami",
    eventsCount: 1289,
    image: "/cities (2).png",
    description: "Magic City"
  },
  {
    id: 9,
    name: "Austin",
    eventsCount: 1523,
    image: "/cities (3).png",
    description: "Live Music Capital"
  }
];

function LocationsContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams?.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [activeFilter, setActiveFilter] = useState("All Cities");

  // Update search term if URL param changes
  useEffect(() => {
    if (initialSearch) {
        setSearchTerm(initialSearch);
    }
  }, [initialSearch]);

  const filteredCities = citiesData.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort logic: if searching, searched item comes first (already handled by filter usually narrowing it down)
  // But if we want specific sorting (e.g. searched item FIRST, then others), we can do:
  const sortedCities = [...filteredCities].sort((a, b) => {
      // If exact match, prioritize
      if (a.name.toLowerCase() === searchTerm.toLowerCase()) return -1;
      if (b.name.toLowerCase() === searchTerm.toLowerCase()) return 1;
      return 0;
  });

  return (
    <div className="min-h-screen bg-white mt-5">
      <HeroSection
        title="Discover locations"
        description="Explore premium venues and iconic destinations hosting unforgettable events worldwide"
        isCentered={true}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-xl w-full mx-auto mb-8"
        >
          <div className="bg-[#1e3a5f] rounded-full flex items-center p-1 border border-white/10">
            <Search className="w-5 h-5 text-blue-400 ml-4 mr-2" />
            <Input
              placeholder="Search Locations..."
              className="border-none bg-transparent shadow-none text-white placeholder:text-gray-400 h-10 flex-1 focus-visible:ring-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {["All Cities", "Popular", "Trending"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                  ? "bg-[#1e3a5f] text-blue-400 border border-blue-400/30"
                  : "bg-[#0b2545] text-gray-400 border border-transparent hover:bg-[#1e3a5f]"
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </HeroSection>

      {/* Grid Content */}
      <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedCities.map((city) => (
                    <div key={city.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border-[3px] border-[#C5A059] hover:shadow-xl transition-all duration-300 group flex flex-col">
                        <div className="relative h-64 w-full">
                            <Image 
                                 src={city.image} 
                                 alt={city.name} 
                                 fill 
                                 className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{city.name}</h3>
                            <p className="text-gray-500 text-sm mb-6">{city.eventsCount.toLocaleString()} upcoming events</p>
                            
                            <div className="mt-auto">
                                <Button className="w-full bg-[#0E2A4D] hover:bg-[#173e6d] text-white py-6 rounded-full text-lg font-bold shadow-md">
                                    See Events
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
          </div>
          
          {sortedCities.length === 0 && (
              <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">No locations found matching "{searchTerm}"</p>
                  <Button 
                    variant="link" 
                    onClick={() => setSearchTerm("")}
                    className="text-blue-600 mt-2"
                  >
                      Clear Search
                  </Button>
              </div>
          )}
      </div>
    </div>
  );
}

// Main page component wrapped in Suspense because it uses useSearchParams
export default function LocationsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#051d3b]" />}>
      <LocationsContent />
    </Suspense>
  );
}
