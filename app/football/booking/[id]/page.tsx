"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { ArrowLeft, Check, Minus, Plus, Users, MapPin, Calendar, Clock, Ticket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const matches = [
  {
    id: 1,
    date: "NOV 30",
    team1: { name: "Liverpool", logo: "/team (1).png" },
    team2: { name: "Chelsea", logo: "/team (2).png" },
    location: "Anfield, Liverpool",
    time: "21:00"
  },
  {
    id: 2,
    date: "DEC 5",
    team1: { name: "Man United", logo: "/team (2).png" },
    team2: { name: "Arsenal", logo: "/team (1).png" },
    location: "Old Trafford, Manchester",
    time: "20:00"
  },
  {
    id: 3,
    date: "DEC 12",
    team1: { name: "Barcelona", logo: "/team (1).png" },
    team2: { name: "Real Madrid", logo: "/team (2).png" },
    location: "Camp Nou, Barcelona",
    time: "22:00"
  },
  {
    id: 4,
    date: "NOV 30",
    team1: { name: "Liverpool", logo: "/team (1).png" },
    team2: { name: "Chelsea", logo: "/team (2).png" },
    location: "Anfield, Liverpool",
    time: "21:00"
  },
  {
    id: 5,
    date: "DEC 12",
    team1: { name: "Barcelona", logo: "/team (1).png" },
    team2: { name: "Real Madrid", logo: "/team (2).png" },
    location: "Camp Nou, Barcelona",
    time: "22:00"
  },
  {
    id: 6,
    date: "DEC 15",
    team1: { name: "Man United", logo: "/team (2).png" },
    team2: { name: "Arsenal", logo: "/team (1).png" },
    location: "Old Trafford, Manchester",
    time: "20:00"
  },
];

const ticketCategories = [
  {
    id: "cat1",
    name: "Category 1",
    price: 350,
    description: "Long side lower tier, central view",
    color: "bg-[#0645A0]",
    border: "border-[#0645A0]"
  },
  {
    id: "cat2",
    name: "Category 2",
    price: 250,
    description: "Short side / Corner view",
    color: "bg-[#B2955C]",
    border: "border-[#B2955C]"
  },
  {
    id: "vip",
    name: "VIP Hospitality",
    price: 850,
    description: "Lounge access, catering, best view",
    color: "bg-black",
    border: "border-black"
  },
];

export default function BookingPage() {
  const params = useParams();
  const matchId = Number(params.id);
  const match = matches.find((m) => m.id === matchId) || matches[0];

  const [seatCount, setSeatCount] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showTickets, setShowTickets] = useState(false);

  const incrementSeats = () => setSeatCount((prev) => Math.min(prev + 1, 10));
  const decrementSeats = () => setSeatCount((prev) => Math.max(prev - 1, 1));

  const selectedTicket = ticketCategories.find((t) => t.id === selectedCategory);
  const totalPrice = selectedTicket ? selectedTicket.price * seatCount : 0;

  return (
    <div className={`min-h-screen bg-[#F5F7FA] ${montserrat.className} text-[#05305F]`}>
      
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-[#0645A0] transition-colors group">
            <div className="p-2 rounded-full bg-gray-100 group-hover:bg-[#0645A0]/10 transition-colors">
                 <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-semibold text-sm uppercase tracking-wide">Back</span>
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-extrabold uppercase tracking-tight">
              match day
            </h1>
          </div>
          <div className="w-20"></div> 
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        
        {/* Match Header Info */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
        >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4 border border-gray-100/50">
               <Calendar className="w-4 h-4 text-[#B2955C]" />
               <span className="text-sm font-semibold">{match.date}</span>
               <span className="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
               <Clock className="w-4 h-4 text-[#B2955C]" />
               <span className="text-sm font-semibold">{match.time}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-[#05305F] uppercase mb-4 leading-tight">
              {match.team1.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2955C] to-[#D4B875]">VS</span> {match.team2.name}
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span className="font-medium text-lg">{match.location}</span>
            </div>
        </motion.div>

        {/* Step 1: Seat Selection */}
        <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="bg-white rounded-[2rem] shadow-xl shadow-blue-900/5 overflow-hidden p-8 md:p-10 mb-8 border border-white"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-2">How many seats?</h2>
                    <p className="text-gray-500">Select the number of people attending</p>
                </div>

                <div className="flex flex-col items-center gap-4">
                     <div className="flex items-center gap-6 bg-[#F5F7FA] p-2 rounded-2xl border border-gray-200/50">
                        <button 
                            onClick={decrementSeats}
                            className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow text-[#05305F] hover:bg-gray-50 disabled:opacity-50 transition-all"
                            disabled={seatCount <= 1 || showTickets}
                        >
                        <Minus size={20} className="stroke-[3px]" />
                        </button>
                        <div className="flex flex-col items-center w-16">
                            <span className="text-3xl font-extrabold text-[#05305F] leading-none">{seatCount}</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Seats</span>
                        </div>
                        <button 
                            onClick={incrementSeats}
                            className="w-12 h-12 flex items-center justify-center bg-[#0645A0] text-white rounded-xl shadow-lg shadow-blue-900/20 hover:bg-[#05305F] hover:shadow-xl disabled:opacity-50 transition-all"
                            disabled={seatCount >= 10 || showTickets}
                        >
                        <Plus size={20} className="stroke-[3px]" />
                        </button>
                    </div>

                    {!showTickets && (
                        <Button 
                            onClick={() => setShowTickets(true)}
                            className="mt-2 bg-[#B2955C] hover:bg-[#967d4d] text-white rounded-xl px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        >
                            View Available Tickets
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>


         {/* Step 2: Tickets & Visualization */}
        <AnimatePresence>
            {showTickets && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
                        
                        {/* Left Column: Tickets */}
                        <div className="lg:col-span-7 flex flex-col gap-4">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold">Select Category</h3>
                                <button onClick={() => setShowTickets(false)} className="text-sm text-gray-400 hover:text-[#0645A0] underline underline-offset-4">Change seats</button>
                            </div>
                            
                            {ticketCategories.map((ticket, idx) => (
                                <motion.div
                                    key={ticket.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => setSelectedCategory(ticket.id)}
                                    className={`
                                        relative cursor-pointer group transition-all duration-300
                                        border-2 rounded-[1.5rem] p-5 flex items-center gap-5 bg-white
                                        hover:shadow-lg hover:-translate-y-1
                                        ${selectedCategory === ticket.id 
                                            ? `${ticket.border} shadow-lg ring-1 ${ticket.border.replace('border-', 'ring-')}` 
                                            : "border-transparent shadow-sm hover:border-gray-200"
                                        }
                                    `}
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${ticket.color} flex items-center justify-center shadow-lg`}>
                                        <Ticket className="text-white w-6 h-6" />
                                    </div>
                                    
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-extrabold text-lg text-[#05305F]">{ticket.name}</h4>
                                            <span className="font-bold text-2xl text-[#05305F]">€{ticket.price}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">{ticket.description}</p>
                                    </div>

                                    {selectedCategory === ticket.id && (
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2"
                                        >
                                            <div className="w-8 h-8 bg-[#0645A0] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                                                <Check size={16} className="text-white stroke-[4px]" />
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Column: Stadium & Summary */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                             {/* Stadium Card */}
                             <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white p-3 rounded-[2rem] shadow-xl shadow-blue-900/5 relative group"
                             >
                                <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden">
                                     <Image 
                                        src="/heroPlayground.png" 
                                        alt="Stadium Map" 
                                        fill 
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#05305F]/90 to-transparent flex flex-col justify-end p-6">
                                         <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Your View</p>
                                         <p className="text-white text-2xl font-bold">
                                            {selectedCategory ? ticketCategories.find(t => t.id === selectedCategory)?.name : "Select a category"}
                                         </p>
                                    </div>
                                </div>
                             </motion.div>

                            {/* Sticky Bottom Bar on Mobile / Inline on Desktop */}
                             <motion.div 
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className={`
                                    fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-40
                                    lg:relative lg:p-0 lg:border-none lg:shadow-none lg:bg-transparent lg:z-0
                                `}
                             >
                                 <div className="bg-[#05305F] text-white p-6 rounded-3xl shadow-2xl lg:shadow-xl flex flex-col gap-4 max-w-5xl mx-auto">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Total Amount</p>
                                            <p className="text-3xl font-extrabold">€{totalPrice}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white font-bold">{seatCount} x Tickets</p>
                                            <p className="text-blue-200 text-sm">{selectedCategory ? matches.find(m => m.id === matchId)?.team1.name + " vs " + matches.find(m => m.id === matchId)?.team2.name : "Select category"}</p>
                                        </div>
                                    </div>
                                    <Button 
                                        className="w-full h-14 bg-[#B2955C] hover:bg-[#967d4d] text-white font-extrabold text-lg rounded-2xl uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
                                        disabled={!selectedCategory}
                                    >
                                        Checkout Now
                                    </Button>
                                 </div>
                             </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

      </main>
    </div>
  );
}
