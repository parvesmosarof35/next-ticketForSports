"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Search, ChevronRight, Trophy, Calendar, Flag, Shield, Activity } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

// Sample data for the slider
const slides = [
    {
        id: 1,
        title: "World Cup",
        image: "/heroPlayground.png",
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
];

const categories = [
    { name: "Premier League", icon: "⚽" },
    { name: "Champions League", icon: "⚽" },
    { name: "La Liga", icon: "⚽" },
    { name: "NBA", icon: "🏀" },
    { name: "Formula 1", icon: "🏎️" },
    { name: "UFC", icon: "🥊" },
];

export function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [query, setQuery] = React.useState("");
    const [isActive, setIsActive] = React.useState(false);

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    React.useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        const intervalId = setInterval(() => {
            if (emblaApi) emblaApi.scrollNext();
        }, 5000);
        return () => {
            emblaApi.off("select", onSelect);
            clearInterval(intervalId);
        };
    }, [emblaApi, onSelect]);

    const scrollTo = React.useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    return (
        <section className={`bg-white pb-10 pt-28 xl:pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${montserrat.className}`}>
            <div className="container mx-auto flex flex-col xl:flex-row gap-6 xl:gap-8 max-w-6xl">

                {/* 1. Sidebar Section */}
                <motion.aside
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full xl:w-[280px] shrink-0"
                >
                    <div className="bg-[#F8F9FA] rounded-3xl p-5 xl:p-6 shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col lg:flex-row xl:flex-col h-full gap-3">
                        <div className="flex-1">
                            <h3 className="text-base xl:text-lg font-black text-[#4A4A4A] mb-4 px-2">Popular Categories</h3>
                            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-col gap-1">
                            {categories.map((cat, idx) => (
                                <Link
                                    key={idx}
                                    href="/football"
                                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-white hover:shadow-sm transition-all group group-hover:translate-x-1 duration-300"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl grayscale group-hover:grayscale-0 transition-all">{cat.icon}</span>
                                        <span className="text-[14px] font-bold text-[#6B7280] group-hover:text-[#05305F] transition-colors">{cat.name}</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#05305F] transition-colors" />
                                </Link>
                            ))}
                            </div>
                        </div>

                        {/* Events Badge */}
                        <div className="mt-auto p-4 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all w-full">
                            <div className="flex items-center gap-3">
                                <div className="size-8 rounded-xl bg-gray-50 flex items-center justify-center">
                                    <Calendar className="w-4 h-4 text-gray-400" />
                                </div>
                                <div>
                                    <p className="text-[13px] font-black text-[#05305F]">
                                        +12,000 <span className="text-[#6B7280] font-bold">events available</span>
                                    </p>
                                </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                        </div>
                    </div>
                </motion.aside>

                {/* 2. Main Content Area */}
                <div className="flex-1 flex flex-col gap-8">

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-50"
                    >
                        <div className="bg-white rounded-3xl sm:rounded-full p-2 pl-4 sm:pl-6 flex flex-col sm:flex-row items-center shadow-lg border border-gray-100 h-auto sm:h-[60px] gap-2 sm:gap-0">
                            <div className="flex items-center w-full">
                                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2 sm:mr-3 shrink-0" />
                                <Input
                                    type="text"
                                    placeholder="Search for teams, events, or stadiums..."
                                    className="border-none shadow-none bg-transparent focus-visible:ring-0 text-sm sm:text-base placeholder:text-gray-400 h-10 sm:h-full w-full font-medium"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>
                            <Button className="rounded-full w-full sm:w-auto bg-[#0062E6] hover:bg-[#0055c7] text-white px-6 sm:px-8 h-[44px] sm:h-[48px] text-sm font-black transition-all shadow-md hover:shadow-lg active:scale-95 sm:ml-2 cursor-pointer">
                                Find Your Event
                            </Button>
                        </div>
                    </motion.div>

                    {/* Slider Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-[24px] overflow-hidden shadow-xl h-full flex-1 min-h-[260px] md:min-h-[280px] lg:min-h-[300px]"
                    >
                        <div className="overflow-hidden h-full" ref={emblaRef}>
                            <div className="flex h-full">
                                {slides.map((slide) => (
                                    <div className="flex-[0_0_100%] min-w-0" key={slide.id}>
                                        <div className="flex flex-col-reverse md:grid md:grid-cols-5 h-full w-full">
                                            {/* Left Panel: Blue Content */}
                                            <div className="md:col-span-3 bg-[#0062E6] text-white p-5 pb-12 sm:pb-12 md:p-6 lg:p-8 flex flex-col justify-center relative flex-1 md:min-h-0">
                                                <div className="space-y-3 md:space-y-4 z-10 w-full max-w-[90%]">
                                                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight tracking-tight">
                                                        {slide.title}
                                                    </h2>
                                                    <p className="text-white/80 text-xs md:text-sm lg:text-base font-medium max-w-sm">
                                                        {slide.description}
                                                    </p>
                                                    <Link href="/football">
                                                        <Button
                                                            variant="outline"
                                                            className="border-white/30 text-white hover:bg-white hover:text-[#0062E6] bg-transparent h-[40px] md:h-[48px] px-6 md:px-8 rounded-xl text-[14px] md:text-[15px] font-black transition-all cursor-pointer backdrop-blur-sm mt-2"
                                                        >
                                                            See Tickets
                                                        </Button>
                                                    </Link>
                                                </div>

                                                {/* Pagination Dots */}
                                                <div className="absolute bottom-4 left-5 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 flex gap-2 md:gap-3">
                                                    {slides.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => scrollTo(index)}
                                                            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === selectedIndex
                                                                ? "bg-white w-6"
                                                                : "bg-white/40 hover:bg-white/60"
                                                                }`}
                                                            aria-label={`Go to slide ${index + 1}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right Panel: Image */}
                                            <div className="md:col-span-2 relative w-full h-[180px] sm:h-[220px] md:h-full min-h-[180px] md:min-h-0 bg-gray-900 group overflow-hidden">
                                                <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-black/0 transition-all duration-500" />
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                    priority={slide.id === 1}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;