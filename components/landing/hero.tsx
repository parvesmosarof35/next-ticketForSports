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
    { name: "Champions League", icon: "🏆" },
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
        <section className={`bg-white pb-16 pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${montserrat.className}`}>
            <div className="container mx-auto flex flex-col lg:flex-row gap-8">

                {/* 1. Sidebar Section */}
                <motion.aside
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full lg:w-[320px] shrink-0"
                >
                    <div className="bg-[#F8F9FA] rounded-[32px] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full">
                        <h3 className="text-xl font-black text-[#4A4A4A] mb-8 px-2">Popular Categories</h3>

                        <div className="flex flex-col gap-1 flex-1">
                            {categories.map((cat, idx) => (
                                <Link
                                    key={idx}
                                    href="/football"
                                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all group group-hover:translate-x-1 duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{cat.icon}</span>
                                        <span className="text-[17px] font-bold text-[#6B7280] group-hover:text-[#05305F] transition-colors">{cat.name}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#05305F] transition-colors" />
                                </Link>
                            ))}
                        </div>

                        {/* Events Badge */}
                        <div className="mt-8 p-5 bg-white rounded-3xl shadow-sm border border-gray-50 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-xl bg-gray-50 flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                </div>
                                <div>
                                    <p className="text-[15px] font-black text-[#05305F]">
                                        +12,000 <span className="text-[#6B7280] font-bold">events available</span>
                                    </p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
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
                        <div className="bg-white rounded-full p-2 pl-8 flex items-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 h-[72px]">
                            <Search className="h-6 w-6 text-gray-400 mr-4 shrink-0" />
                            <Input
                                type="text"
                                placeholder="Search for teams, events, or stadiums..."
                                className="border-none shadow-none bg-transparent focus-visible:ring-0 text-lg placeholder:text-gray-400 h-full w-full font-medium"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <Button className="rounded-full bg-[#0062E6] hover:bg-[#0055c7] text-white px-10 h-[56px] text-base font-black transition-all shadow-lg shadow-blue-500/20 active:scale-95 ml-2 cursor-pointer">
                                Find Your Event
                            </Button>
                        </div>
                    </motion.div>

                    {/* Slider Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-[32px] overflow-hidden shadow-2xl h-full flex-1 min-h-[500px]"
                    >
                        <div className="overflow-hidden h-full" ref={emblaRef}>
                            <div className="flex h-full">
                                {slides.map((slide) => (
                                    <div className="flex-[0_0_100%] min-w-0" key={slide.id}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
                                            {/* Left Panel: Blue Content */}
                                            <div className="bg-[#0062E6] text-white p-12 md:p-16 flex flex-col justify-center relative">
                                                <div className="space-y-6 z-10">
                                                    <h2 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight">
                                                        {slide.title}
                                                    </h2>
                                                    <p className="text-white/80 text-lg md:text-xl font-medium max-w-sm">
                                                        {slide.description}
                                                    </p>
                                                    <Link href="/football">
                                                        <Button
                                                            variant="outline"
                                                            className="border-white/30 text-white hover:bg-white hover:text-[#0062E6] bg-transparent h-[56px] px-10 rounded-2xl text-[17px] font-black transition-all cursor-pointer backdrop-blur-sm"
                                                        >
                                                            See Tickets
                                                        </Button>
                                                    </Link>
                                                </div>

                                                {/* Pagination Dots */}
                                                <div className="absolute bottom-12 left-12 flex gap-3">
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
                                            <div className="relative h-full bg-gray-900 group overflow-hidden">
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