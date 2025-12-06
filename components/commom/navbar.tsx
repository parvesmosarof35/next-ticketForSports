"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User, LayoutDashboard, ChevronDown } from "lucide-react";
import { LanguageToggle } from "./language-toggle";
import Image from "next/image";
import { motion } from "framer-motion";

// Football Dropdown Component
function FootballDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreLeagues, setShowMoreLeagues] = useState(false);

  const leagues = [
    "Premier League", "La Liga", "Serie A", "Bundesliga", 
    "Ligue 1", "Champions League", "Europa League", "MLS",
    "Eredivisie", "Portuguese Liga", "Scottish Premiership"
  ];

  const displayedLeagues = showMoreLeagues ? leagues : leagues.slice(0, 7);
  const hasMoreLeagues = leagues.length > 7;

  const tournaments = [
    "World Cup", "Euro Championship", "Copa America", 
    "African Cup", "Asian Cup", "Club World Cup"
  ];

  const nations = [
    "England", "Spain", "Italy", "Germany", "France", 
    "Brazil", "Argentina", "Portugal", "Netherlands"
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)} // Ensure the dropdown closes only when both the button and the dropdown content are no longer hovered
    >
      <button className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors">
        Football
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }} // Optional exit animation for smooth closing
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-0 w-[800px] bg-[#0A2A43]/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl p-6"
        >
          {/* Leagues Section */}
          <div className="mb-6">
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Leagues</h3>
            <div className="flex flex-wrap gap-2">
              {displayedLeagues.map((league, index) => (
                <Link
                  key={index}
                  href={`/football/league/${encodeURIComponent(league.toLowerCase().replace(/\s+/g, '-'))}`}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white/90 hover:text-white text-sm rounded-md transition-all border border-white/10 hover:border-white/20"
                >
                  {league}
                </Link>
              ))}
              {hasMoreLeagues && !showMoreLeagues && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMoreLeagues(true);
                  }}
                  className="px-4 py-2 bg-blue-600/80 hover:bg-blue-600 text-white text-sm rounded-md transition-all font-medium"
                >
                  Other Leagues
                </button>
              )}
            </div>
          </div>

          {/* Tournaments Section */}
          <div className="mb-6">
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Tournaments</h3>
            <div className="flex flex-wrap gap-2">
              {tournaments.map((tournament, index) => (
                <Link
                  key={index}
                  href={`/football/tournament/${encodeURIComponent(tournament.toLowerCase().replace(/\s+/g, '-'))}`}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white/90 hover:text-white text-sm rounded-md transition-all border border-white/10 hover:border-white/20"
                >
                  {tournament}
                </Link>
              ))}
            </div>
          </div>

          {/* Nations Section */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Nations</h3>
            <div className="flex flex-wrap gap-2">
              {nations.map((nation, index) => (
                <Link
                  key={index}
                  href={`/nation/${nation.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white/90 hover:text-white text-sm rounded-md transition-all border border-white/10 hover:border-white/20"
                >
                  {nation}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export function Navbar() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`w-full fixed top-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-500 border-b border-[#0e3256] ${
        isScrolled
          ? "bg-linear-to-r from-[#000000]/95 via-[#0A2A43]/90 to-[#006cfd]/90"
          : "bg-linear-to-r from-transparent via-transparent to-transparent "
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/navlogo.png" alt="Logo" width={200} height={50} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <FootballDropdown />
          <Link href="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Other Sports
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageToggle />
          </div>

          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none"
                >
                  <Avatar className="w-8 h-8 border-2 border-gray-200">
                    <AvatarFallback className="bg-blue-600 text-white text-sm font-semibold">
                      {user.fullName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{user.fullName}</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                      {user.role}
                    </span>
                  </div>
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{user.fullName}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="cursor-pointer">
                    <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/signin">
              <Button
                variant="outline"
                className="bg-transparent text-white border-white/40 hover:bg-white/10 hover:border-white/60 font-medium px-5"
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
