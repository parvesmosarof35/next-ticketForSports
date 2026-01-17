"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Info } from "lucide-react";
import { WhyChoose } from "@/components/landing/why-choose";

// Reuse Mock Data for simplicity in this demo environment
// In a real app, this would come from an API or shared data file
const stadiumsData: Record<string, any> = {
  "wembley-stadium": {
    name: "Wembley Stadium",
    location: "London, UK",
    capacity: "90,000",
    description: "Wembley Stadium is the home of English football and the largest sports venue in the UK.",
    image: "/heroPlayground.png",
    map: "/map-placeholder.png"
  },
  "etihad-stadium": {
    name: "Etihad Stadium",
    location: "Manchester, UK",
    capacity: "53,400",
    description: "The Etihad Stadium is the home of Manchester City Football Club, featuring modern facilities and atmosphere.",
    image: "/heroPlayground.png",
  },
  "anfield": {
      name: "Anfield",
      location: "Liverpool, UK",
      capacity: "61,276",
      description: "Anfield is a football stadium in Anfield, Liverpool, Merseyside, England, which has a seating capacity of 61,276.",
      image: "/heroPlayground.png"
  },
  "tottenham-hotspur-stadium": {
      name: "Tottenham Hotspur Stadium",
      location: "London, UK",
      capacity: "62,850",
      description: "A world-class multi-purpose sports and entertainment destination.",
      image: "/heroPlayground.png"
  },
  "stamford-bridge": {
      name: "Stamford Bridge",
      location: "London, UK",
      capacity: "40,341",
      description: "Stamford Bridge is a football stadium in Fulham, holding major historical significance for Chelsea FC.",
      image: "/heroPlayground.png"
  },
  // Add fallback for others
};

// Mock Tickets
const upcomingTickets = [
    { id: 1, event: "Cup Final", date: "20 May 2025", time: "15:00", price: 150 },
    { id: 2, event: "League Match", date: "27 May 2025", time: "20:00", price: 85 },
    { id: 3, event: "Concert Event", date: "10 Jun 2025", time: "18:00", price: 120 },
];

export default function StadiumDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [stadium, setStadium] = useState<any>(null);

  useEffect(() => {
    if (slug) {
        // Fallback for demo: if specific data exists use it, else generic
        setStadium(stadiumsData[slug] || {
            name: slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
            location: "United Kingdom",
            capacity: "Unknown",
            description: "Detailed information about this stadium is coming soon.",
            image: "/heroPlayground.png"
        });
    }
  }, [slug]);

  if (!stadium) return <div className="min-h-screen"></div>;

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16">
      {/* Hero Section */}
      <div className="relative bg-[#111827] h-[400px]">
         <Image src={stadium.image} alt={stadium.name} fill className="object-cover opacity-50" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
         
         <div className="container mx-auto relative z-10 h-full flex flex-col justify-end px-4 pb-12">
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{stadium.name}</h1>
             <div className="flex flex-wrap gap-6 text-gray-200">
                 <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> {stadium.location}</span>
                 <span className="flex items-center gap-2"><Users className="w-5 h-5" /> Capacity: {stadium.capacity}</span>
             </div>
         </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Info */}
              <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-xs p-8 mb-8">
                      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Info className="w-5 h-5 text-blue-600" />
                          Venue Info
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6">
                          {stadium.description}
                      </p>
                  </div>
              </div>

              {/* Right Column: Events */}
              <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events at {stadium.name}</h2>
                  
                  <div className="space-y-4">
                      {upcomingTickets.map((ticket) => (
                          <div key={ticket.id} className="bg-white border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                               <div className="flex-1">
                                   <div className="text-sm text-blue-600 font-semibold mb-1">{ticket.date} • {ticket.time}</div>
                                   <h3 className="text-lg font-bold text-gray-900">{ticket.event}</h3>
                               </div>
                               <div className="flex items-center gap-4 w-full md:w-auto">
                                    <div className="text-right hidden md:block">
                                        <div className="text-xs text-gray-500">From</div>
                                        <div className="text-xl font-bold text-gray-900">€{ticket.price}</div>
                                    </div>
                                    <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                                        View Tickets
                                    </Button>
                               </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
      <WhyChoose />
    </div>
  );
}
