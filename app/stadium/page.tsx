"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

// Mock Data for Stadiums
const stadiumsData = [
  {
    id: 1,
    name: "Wembley Stadium",
    slug: "wembley-stadium",
    eventsCount: 2847,
    image: "/heroPlayground.png", // Using expansive hero image as placeholder
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#051d3b] pt-24 pb-20 px-4 text-center relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Stadium</h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Compare ticket prices for your favourite football teams on TicketforSport.com
            </p>

            <div className="relative max-w-xl mx-auto mb-8">
                 <div className="bg-[#1e3a5f] rounded-lg flex items-center p-1 border border-white/10 h-12">
                     <Search className="w-5 h-5 text-blue-400 ml-4 mr-2" />
                     <Input 
                        placeholder="Search Stadium" 
                        className="border-none bg-transparent shadow-none text-white placeholder:text-gray-400 h-full flex-1 focus-visible:ring-0 text-base"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                 </div>
            </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredStadiums.map((stadium) => (
                   <div key={stadium.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-[#D3AB66] hover:shadow-xl transition-all duration-300 group flex flex-col">
                       <div className="relative h-56 w-full">
                           <Image 
                                src={stadium.image} 
                                alt={stadium.name} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                           />
                       </div>
                       <div className="p-6 flex-1 flex flex-col">
                           <h3 className="text-xl font-bold text-gray-900 mb-2">{stadium.name}</h3>
                           <p className="text-gray-500 text-xs mb-6">{stadium.eventsCount.toLocaleString()} upcoming events</p>
                           
                           <div className="mt-auto">
                               <Link href={`/stadium/${stadium.slug}`} className="block w-full">
                                    <Button className="w-full bg-[#0E2A4D] hover:bg-[#173e6d] text-white py-6 rounded-full text-base font-semibold">
                                        See Events
                                    </Button>
                               </Link>
                           </div>
                       </div>
                   </div>
               ))}
          </div>
          
          {filteredStadiums.length === 0 && (
              <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">No stadiums found matching "{searchTerm}"</p>
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

export default function StadiumsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#051d3b]" />}>
      <StadiumsContent />
    </Suspense>
  );
}
