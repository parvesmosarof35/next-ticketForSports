
"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image"
import Link from "next/link"

// Sample data for the slider
const slides = [
    {
        id: 1,
        title: "World Cup",
        image: "/heroPlayground.png", // Assuming this exists, or use placeholders
        description: "Experience the biggest football event."
    },
    {
        id: 2,
        title: "Champions League",
        image: "/heroPlayground.png", 
        description: "Watch top European clubs compete."
    },
    {
        id: 3,
        title: "Premier League",
        image: "/heroPlayground.png",
        description: "The most exciting league in the world."
    }
]

export function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    React.useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        
        // Auto-play functionality
        const intervalId = setInterval(() => {
            if (emblaApi) emblaApi.scrollNext()
        }, 5000)

        return () => {
            emblaApi.off("select", onSelect)
            clearInterval(intervalId)
        }
    }, [emblaApi, onSelect])

    const scrollTo = React.useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    )

    return (
        <section className="bg-white pb-16 pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="container mx-auto space-y-12">
                
                {/* 1. Search Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center px-4"
                >
                    <div className="w-full max-w-4xl bg-gray-100/80 rounded-3xl md:rounded-full p-4 md:p-2 md:pl-6 flex flex-col md:flex-row items-center shadow-sm border border-gray-200 gap-3 md:gap-0">
                        <div className="flex items-center w-full md:w-auto flex-1 bg-white md:bg-transparent rounded-full px-4 md:px-0 h-10 md:h-auto">
                             <Search className="h-5 w-5 text-gray-500 mr-2 shrink-0" />
                             <Input
                                type="text"
                                placeholder="Search for teams, events, or stadiums..."
                                className="border-none shadow-none bg-transparent focus-visible:ring-0 text-sm md:text-base placeholder:text-gray-500 h-10 w-full"
                             />
                        </div>
                        <Button className="w-full md:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-10 md:h-12 text-sm md:text-base font-semibold md:ml-2">
                            Find Your Event
                        </Button>
                    </div>
                </motion.div>

                {/* 2. Slider Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                     className="relative max-w-8xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                >
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {slides.map((slide) => (
                                <div className="flex-[0_0_100%] min-w-0" key={slide.id}>
                                    <div className="grid grid-cols-1 md:grid-cols-12 md:h-[600px] w-full">
                                        {/* Left Panel: Blue Content */}
                                        <div className="md:col-span-5 bg-[#0066FF] text-white p-8 md:p-12 flex flex-col justify-center relative min-h-[300px] md:min-h-auto order-2 md:order-1">
                                            <div className="space-y-4 md:space-y-6 z-10">
                                                <h2 className="text-3xl md:text-6xl font-bold leading-tight">
                                                    {slide.title}
                                                </h2>
                                                <p className="text-blue-100 text-sm md:text-lg">
                                                    {slide.description}
                                                </p>
                                               <Link href="/football">
                                               <Button 
                                                    variant="outline" 
                                                    className="border-white/30 text-white hover:bg-white hover:text-blue-600 bg-transparent h-10 md:h-12 px-6 md:px-8 rounded-lg text-sm md:text-base font-medium transition-all"
                                                >
                                                    See Tickets
                                                </Button>
                                               </Link>
                                            </div>

                                            {/* Pagination Dots (Inside Blue Panel) */}
                                            <div className="absolute bottom-6 left-8 md:bottom-12 md:left-12 flex gap-3">
                                                {slides.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => scrollTo(index)}
                                                        className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
                                                            index === selectedIndex 
                                                                ? "bg-white w-3 md:w-4" 
                                                                : "bg-white/40 hover:bg-white/60"
                                                        }`}
                                                        aria-label={`Go to slide ${index + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Panel: Image */}
                                        <div className="md:col-span-7 relative h-[250px] md:h-full bg-gray-900 order-1 md:order-2">
                                            {/* You might want to use a different image for each slide */}
                                            <div className="absolute inset-0 bg-black/20 z-10" />
                                            {/* Using standard img tag if Image component has issues with external usage in this context, or keep Image if configured */}
                                            <div 
                                                className="w-full h-full bg-cover bg-center"
                                                style={{ backgroundImage: `url('${slide.image}')` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero;