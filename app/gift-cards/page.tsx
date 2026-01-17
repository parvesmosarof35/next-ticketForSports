"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Gift, CreditCard } from "lucide-react";
import { WhyChoose } from "@/components/landing/why-choose";
import { Testimonials } from "@/components/landing/testimonials";

interface GiftCard {
  id: number;
  name: string;
  type: string;
  image: string;
  description: string;
  values: number[];
}

const giftCards: GiftCard[] = [
  {
    id: 1,
    name: "TicketforSport Gift Card",
    type: "Digital",
    image: "/navlogo.png", // Using logo
    description: "The perfect gift for any sports fan. Redeemable on all events.",
    values: [50, 100, 200, 500],
  },
  {
    id: 2,
    name: "VIP Experience Pass",
    type: "Digital",
    image: "/cup.png", // Placeholder
    description: "Gift the ultimate VIP matchday experience.",
    values: [250, 500, 1000],
  },
];

export default function GiftCardsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16">
      {/* Hero Header */}
      <div className="bg-[#111827] bg-linear-to-r from-yellow-600 to-[#111827] py-16 px-4">
        <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                 <Gift className="text-white w-8 h-8 spin-slow" /> 
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Gift Cards</h1>
            </div>
            <p className="text-gray-300 max-w-3xl text-sm md:text-base leading-relaxed">
             Give the gift of live items. Our gift cards are the perfect present for friends, family, and colleagues. redeemable on thousands of events worldwide.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
         <div className="bg-white rounded-xl shadow-xs p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Gift Cards</h2>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                <div className="flex items-center">
                    <Select defaultValue="popular">
                        <SelectTrigger className="w-[180px] bg-gray-100 border-none rounded-full px-4 font-medium text-gray-600">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="popular">Popularity</SelectItem>
                            <SelectItem value="value_asc">Value: Low to High</SelectItem>
                            <SelectItem value="value_desc">Value: High to Low</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="relative w-full md:w-[300px]">
                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                     <Input 
                        placeholder="Search gift cards..." 
                        className="pl-10 bg-gray-100 border-none rounded-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                </div>
            </div>

            {/* Gift Card List */}
            <div className="space-y-4">
                {giftCards.map((card) => (
                    <div key={card.id} className="bg-white border-2 border-yellow-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                        
                        <div className="flex items-center gap-6 flex-1">
                             <div className="w-24 h-16 relative bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                                  {/* Just a simple image display, adapting from football logo */}
                                  <div className="relative w-full h-full p-2">
                                     <Image src={card.image} alt={card.name} fill className="object-contain" />
                                  </div>
                             </div>

                             <div>
                                 <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
                                 <p className="text-sm text-gray-500 mb-2">{card.description}</p>
                                 <div className="flex items-center gap-2">
                                       <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full uppercase tracking-wider">{card.type}</span>
                                 </div>
                             </div>
                        </div>

                        {/* Price & Action */}
                         <div className="flex flex-col md:items-end gap-3 min-w-[200px] border-t md:border-t-0 pt-4 md:pt-0">
                               <div className="flex gap-2">
                                   {card.values.slice(0, 3).map(val => (
                                       <span key={val} className="text-sm font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-md">€{val}</span>
                                   ))}
                                   {card.values.length > 3 && <span className="text-sm text-gray-400 self-center">+</span>}
                               </div>
                             <Button className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-8 py-3 w-full md:w-auto font-bold shadow-md">
                                Buy Now
                             </Button>
                         </div>
                    </div>
                ))}
            </div>

         </div>
      </div>

      <WhyChoose />
      <Testimonials />
    </div>
  );
}
