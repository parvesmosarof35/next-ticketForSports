"use client"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative min-h-[78vh] flex items-center justify-center bg-gradient-to-tr from-black via-slate-900 to-blue-950 overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
            {/* Background stadium image with overlay */}
            <div className="absolute inset-0 bg-[url('/heroPlayground.png')] bg-cover bg-center opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
            
            <div className="container mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto text-center space-y-8"
                >


                                        {/* Search Bar - matching the image design */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="max-w-4xl mx-auto mt-12"
                    >
                        <div className="flex items-center gap-0 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 shadow-2xl">
                            <div className="relative flex-1">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="Search for teams, events, or stadiums..."
                                    className="pl-14 pr-6 py-6 text-base bg-transparent border-0 text-white placeholder-gray-400 focus:ring-0 focus:outline-none"
                                />
                            </div>
                            <Button 
                                size="lg" 
                                className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-6 text-base font-semibold rounded-xl transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
                            >
                                Find Your Event
                            </Button>
                        </div>
                    </motion.div>


                    
                    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
                        Reliable Tickets at the<br />Right Price
                    </h1>
                    
                    <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                        Compare ticket prices from trusted sellers — secure and fast.
                    </p>


                </motion.div>
            </div>
        </section>
    )
}

export default Hero;