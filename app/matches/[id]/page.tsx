"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, AlertCircle, Info } from "lucide-react";

// Mock Match Data
const matchData = {
  id: 1,
  team1: { name: "Chelsea", logo: "/team (2).png" }, // Assuming these assets exist or reusing placeholders
  team2: { name: "Arsenal", logo: "/team (1).png" },
  date: "20 Nov 2025",
  competition: "Premier League",
  location: "Stamford Bridge, London",
  description: "The upcoming Premier League clash between Chelsea and Arsenal at Stamford Bridge on Nov 20, 2025 promises to be a thrilling London derby. Secure your seats now to witness this historic rivalry live from the stands.",
  
  ticketCategories: [
    { name: "Longside Lower Tier", avg: "£145", platform: "£125", avail: "High", risk: "Low", id: "cat1" },
    { name: "Longside Upper Tier", avg: "£110", platform: "£95", avail: "Medium", risk: "Low", id: "cat2" },
    { name: "Shortside Lower Tier", avg: "£105", platform: "£85", avail: "Low", risk: "Low", id: "cat3" },
    { name: "Shortside Upper Tier", avg: "£90", platform: "£75", avail: "Low", risk: "Low", id: "cat4" },
    { name: "VIP / Executive Box", avg: "£450", platform: "£350", avail: "Very Low", risk: "Low", id: "vip" },
    { name: "Away", avg: "£145", platform: "£200", avail: "Rare", risk: "High", id: "away" },
    { name: "Other", avg: "£200", platform: "£150", avail: "Low", risk: "Medium", id: "other" }
  ],

  summaryStats: {
    cheapest: "£75",
    avg: "£165",
    accessibility: "High",
    ticketAvailability: "72"
  },

  faq: [
    { q: "Can I buy cheap Chelsea vs Arsenal tickets?", a: "Yes, ticket prices vary by category. Upper tier seats are generally more affordable." },
    { q: "When do Chelsea vs Arsenal tickets go on sale?", a: "Tickets are typically released 4-6 weeks before the match date." },
    { q: "Do you sell Chelsea hospitality tickets?", a: "Yes, we offer a range of VIP and hospitality packages for this match." },
    { q: "How Does TicketForSport Ticket Exchange Work?", a: "Our platform connects vetted sellers with buyers, ensuring a safe and secure transaction for every ticket." },
    { q: "Where can I View Chelsea vs Arsenal Seating Plans?", a: "You can view the interactive seating map during the checkout process." }
  ]
};

export default function MatchSummaryPage() {
  const params = useParams();
  const matchId = params?.id || "1";

  // In real app, fetch match data based on ID
  const match = matchData; 

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 py-16">
      
      {/* Header / Banner */}
      <div className="bg-[#051d3b] text-white py-12 px-4 shadow-lg border-b-4 border-red-600">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
           
           {/* Team 1 */}
           <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-white rounded-full p-4 flex items-center justify-center shadow-lg">
                <Image src={match.team1.logo} alt={match.team1.name} width={64} height={64} className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold">{match.team1.name}</h2>
              <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Home</span>
           </div>

           {/* VS / Score info */}
           <div className="flex flex-col items-center gap-2">
               <span className="text-5xl font-extrabold text-[#D3AB66]">VS</span>
               <span className="text-gray-400 font-medium">{match.date}</span>
               <div className="px-4 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase text-blue-200 border border-blue-500/30">
                  {match.competition}
               </div>
           </div>

           {/* Team 2 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-white rounded-full p-4 flex items-center justify-center shadow-lg">
                <Image src={match.team2.logo} alt={match.team2.name} width={64} height={64} className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold">{match.team2.name}</h2>
              <span className="text-red-300 text-sm font-semibold uppercase tracking-wider">Away</span>
           </div>

        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-12">
        
        {/* Intro */}
        <section className="text-center">
             <h1 className="text-3xl font-extrabold text-gray-900 mb-6">{match.team1.name} vs {match.team2.name} Tickets</h1>
             
             {/* Ticket Cards */}
             <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex items-center justify-between hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            {match.date.split(' ')[0]}
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold text-gray-800">{match.team1.name} vs {match.team2.name}</h3>
                            <p className="text-sm text-gray-500">{match.location}</p>
                        </div>
                    </div>
                    <Link href={`/football/booking/${matchId}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6 shadow-md">
                            Tickets from {match.summaryStats.cheapest}
                        </Button>
                    </Link>
                </div>
                 <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex items-center justify-between hover:shadow-lg transition-all opacity-80">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                             VS
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold text-gray-800">{match.team2.name} vs {match.team1.name}</h3>
                            <p className="text-sm text-gray-500">Reverse Fixture</p>
                        </div>
                    </div>
                    <Button variant="outline" className="font-bold rounded-full px-6">
                        Notify Me
                    </Button>
                </div>
             </div>
        </section>

        {/* Matchday Summary */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200 text-center">
                <h2 className="text-2xl font-extrabold text-gray-900">Matchday Summary</h2>
                <Link href={`/football/booking/${matchId}`}>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
                        {match.team1.name} vs {match.team2.name} {match.date} Tickets
                    </Button>
                </Link>
            </div>

            <div className="p-8">
                <p className="text-gray-600 mb-8 text-center leading-relaxed">
                    {match.description}
                </p>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50 hover:bg-gray-50">
                                <TableHead className="font-bold text-gray-700">Section</TableHead>
                                <TableHead className="font-bold text-gray-700 text-center">Other Products</TableHead>
                                <TableHead className="font-bold text-gray-700 text-center text-blue-600">This Platform</TableHead>
                                <TableHead className="font-bold text-gray-700 text-center">Availability</TableHead>
                                <TableHead className="font-bold text-gray-700 text-center">Risk</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {match.ticketCategories.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className="font-medium text-gray-900">{row.name}</TableCell>
                                    <TableCell className="text-center text-gray-500 line-through decoration-red-500">{row.avg}</TableCell>
                                    <TableCell className="text-center font-bold text-blue-600">{row.platform}</TableCell>
                                    <TableCell className="text-center">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold 
                                            ${row.avail === 'High' ? 'bg-green-100 text-green-700' : 
                                              row.avail === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                                              'bg-red-100 text-red-700'}`}>
                                            {row.avail}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-center">
                                         <span className={`px-2 py-1 rounded-full text-xs font-bold 
                                            ${row.risk === 'Low' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {row.risk}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                               <TableRow className="bg-gray-50 hover:bg-gray-50 font-bold">
                                    <TableCell>Total</TableCell>
                                    <TableCell className="text-center">Avg</TableCell>
                                    <TableCell className="text-center text-blue-600">{match.summaryStats.avg}</TableCell>
                                    <TableCell colSpan={2} className="text-right pr-8 text-gray-500">Based on recent data</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
                     <div className="bg-gray-50 p-4 rounded-xl text-center">
                         <p className="text-xs text-gray-500 font-bold uppercase mb-1">Cheapest Ticket</p>
                         <p className="text-xl font-extrabold text-blue-600">{match.summaryStats.cheapest}</p>
                     </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                         <p className="text-xs text-gray-500 font-bold uppercase mb-1">Most Popular</p>
                         <p className="text-xl font-extrabold text-gray-800">Longside</p>
                     </div>
                       <div className="bg-gray-50 p-4 rounded-xl text-center">
                         <p className="text-xs text-gray-500 font-bold uppercase mb-1">Accessibility</p>
                         <p className="text-xl font-extrabold text-green-600">{match.summaryStats.accessibility}</p>
                     </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                         <p className="text-xs text-gray-500 font-bold uppercase mb-1">Total Available</p>
                         <p className="text-xl font-extrabold text-gray-800">{match.summaryStats.ticketAvailability}</p>
                     </div>
                </div>
            </div>
        </section>

        {/* SEO / Info Text */}
        <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Buying {match.team1.name} vs {match.team2.name} Tickets</h2>
            <div className="prose text-gray-600 max-w-none">
                <p>
                    {match.team1.name} welcome town rivals {match.team2.name} to {match.location} for what promises to be a crucial Premier League fixture. 
                    This derby always delivers intensity, passion, and world-class football. 
                </p>
                <p>
                    Tickets for this match are in high demand. We offer a secure platform to compare ticket prices from vetted sellers. 
                    From affordable seats in the upper tiers to premium VIP experiences, find the perfect spot to watch the action unfold.
                </p>
                <h3 className="text-lg font-bold text-gray-900 mt-4">Why buy from us?</h3>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>100% Ticket Guarantee on all orders.</li>
                    <li>Secure checkout and instant confirmation options.</li>
                    <li>Dedicated customer support for all ticket inquiries.</li>
                </ul>
            </div>
            
             <Link href={`/football/booking/${matchId}`}>
                 <Button className="w-full md:w-auto bg-[#D3AB66] hover:bg-[#b08d55] text-white font-bold py-3 px-8 rounded-lg shadow-md">
                    Get {match.team1.name} vs {match.team2.name} Tickets
                 </Button>
             </Link>
        </section>

        {/* FAQ */}
         <section className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
            <p className="text-center text-gray-500 text-sm mb-6">Find answers about buying tickets for this match</p>
            
            <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                {match.faq.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0 px-4">
                        <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">{item.q}</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            {item.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>

         {/* Support CTA */}
         <div className="bg-gray-100 rounded-xl p-8 text-center">
             <h3 className="font-bold text-gray-900 mb-2">Still have questions?</h3>
             <p className="text-gray-500 text-sm mb-4">Our support team is available 24/7 to help you.</p>
             <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-white">Contact Support</Button>
         </div>

      </div>
    </div>
  );
}
