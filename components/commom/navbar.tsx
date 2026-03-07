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

// Top Banner Component
function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#FF4B1F] to-[#FF9068] text-white py-2 px-4 relative flex items-center justify-center overflow-hidden z-50">
      {/* Animated Background Shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite] pointer-events-none" />

      <div className="container mx-auto flex items-center justify-center gap-2 text-xs md:text-sm font-bold tracking-wide relative z-10">
        <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] uppercase font-bold animate-pulse">Limited Offer</span>
        <span className="text-center">
          Find the best price on tickets and sports travel – fast and easy.
        </span>
        <Link href="/football" className="underline decoration-white/50 hover:decoration-white transition-all ml-1">
          Book Now &rarr;
        </Link>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 md:right-4 p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
        aria-label="Close banner"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}

// Football Dropdown Component
function FootballDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreLeagues, setShowMoreLeagues] = useState(false);
  const navigate = useRouter();

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

  const stadiums = [
    "St. George's Park", "Camp Nou", "San Siro", "Allianz Arena",
    "Camp Nou", "Camp Nou", "Camp Nou", "Camp Nou", "Camp Nou", "Camp Nou", "Camp Nou"
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)} // Ensure the dropdown closes only when both the button and the dropdown content are no longer hovered
    >
      <button
        onClick={() => navigate.push("/football")}
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
        Football
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }} // Optional exit animation for smooth closing
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-0 w-[800px] bg-white/95 backdrop-blur-lg border border-gray-200 rounded-lg shadow-2xl p-6"
        >
          {/* Leagues Section */}
          <div className="mb-6">
            <h3 className="text-gray-900 font-semibold text-sm mb-3 uppercase tracking-wide">Leagues</h3>
            <div className="flex flex-wrap gap-2">
              {displayedLeagues.map((league, index) => (
                <Link
                  key={index}
                  href={`/football/league/${encodeURIComponent(league.toLowerCase().replace(/\s+/g, '-'))}`}
                  className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 text-sm rounded-md transition-all border border-gray-200 hover:border-blue-200"
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
            <h3 className="text-gray-900 font-semibold text-sm mb-3 uppercase tracking-wide">Tournaments</h3>
            <div className="flex flex-wrap gap-2">
              {tournaments.map((tournament, index) => (
                <Link
                  key={index}
                  href={`/football/tournament/${encodeURIComponent(tournament.toLowerCase().replace(/\s+/g, '-'))}`}
                  className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 text-sm rounded-md transition-all border border-gray-200 hover:border-blue-200"
                >
                  {tournament}
                </Link>
              ))}
            </div>
          </div>

          {/* Nations Section */}
          <div>
            <h3 className="text-gray-900 font-semibold text-sm mb-3 uppercase tracking-wide">Nations</h3>
            <div className="flex flex-wrap gap-2">
              {nations.map((nation, index) => (
                <Link
                  key={index}
                  href={`/locations?search=${encodeURIComponent(nation)}`}
                  className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 text-sm rounded-md transition-all border border-gray-200 hover:border-blue-200"
                >
                  {nation}
                </Link>
              ))}
            </div>
          </div>



          {/* Teams Section */}
          <div className="mb-6">
            <h3 className="text-gray-900 font-semibold text-sm mb-3 uppercase tracking-wide">Teams</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/teams"
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 text-sm rounded-md transition-all border border-gray-200 hover:border-blue-200"
              >
                All Teams
              </Link>
            </div>
          </div>

          {/* Stadiums Section */}
          <div>
            <h3 className="text-gray-900 font-semibold text-sm my-3 uppercase tracking-wide">Stadiums</h3>
            <div className="flex flex-wrap gap-2">
              <Link

                href={`/stadium/`}
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 text-sm rounded-md transition-all border border-gray-200 hover:border-blue-200"
              >
                all
              </Link>
              {stadiums.map((stadium, index) => (


                <Link
                  key={index}
                  href={`/stadium/${stadium.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 text-sm rounded-md transition-all border border-gray-200 hover:border-blue-200"
                >
                  {stadium}
                </Link>
              ))}
            </div>
          </div>

          {/* Matches Section */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex gap-4">
            <Link href="/matches" className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              All Matches
            </Link>
            <Link href="/matches?filter=recent" className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Recent Matches
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Basketball Dropdown Component
function BasketballDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useRouter();

  const sections = [
    { title: "Leagues", items: ["NBA", "EuroLeague", "Liga ACB", "Serie A", "Bundesliga", "LNB Pro A"] },
    { title: "Tournaments", items: ["FIBA World Cup", "EuroBasket", "Olympic Games", "Asian Cup"] },
    { title: "Nations", items: ["USA", "Spain", "France", "Germany", "Serbia", "Slovenia", "Italy", "Greece"] },
    { title: "Teams", items: ["LA Lakers", "Golden State Warriors", "Boston Celtics", "Real Madrid", "Barcelona", "Anadolu Efes"] },
    { title: "Stadiums", items: ["Madison Square Garden", "Crypto.com Arena", "O2 Arena", "Stark Arena"] }
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => navigate.push("/basketball")}
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
      >
        Basketball
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-[-200px] mt-0 w-[800px] bg-white border border-gray-200 rounded-lg shadow-2xl p-6"
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-gray-900 font-semibold text-xs mb-3 uppercase tracking-wide opacity-50">{section.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item, iIdx) => (
                    <Link
                      key={iIdx}
                      href={`/search?q=${encodeURIComponent(item)}`}
                      className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 text-sm rounded-md transition-all border border-gray-200 hover:border-blue-200"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Travel Dropdown Component (for Ticket + Hotel and Ticket + Hotel + Flight)
function TravelDropdown({ label, href }: { label: string, href: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useRouter();

  const nations = ["England", "Spain", "Italy", "Germany", "France", "USA", "UAE", "Qatar"];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => navigate.push(href)}
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-[-100px] mt-0 w-[450px] bg-white border border-gray-200 rounded-lg shadow-2xl p-6"
        >
          <h3 className="text-gray-900 font-semibold text-xs mb-3 uppercase tracking-wide opacity-50">Nations</h3>
          <div className="flex flex-wrap gap-2">
            {nations.map((nation, index) => (
              <Link
                key={index}
                href={`/locations?search=${encodeURIComponent(nation)}`}
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 text-sm rounded-md transition-all border border-gray-200 hover:border-blue-200"
              >
                {nation}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Other Sports Dropdown Component
function OtherSportsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useRouter();

  const sports = ["Football", "Basketball", "Tennis", "Golf", "F1", "Cricket", "Boxing", "Rugby", "MMA"];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => navigate.push("/")}
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
      >
        Other Sports
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full right-0 mt-0 w-[450px] bg-white border border-gray-200 rounded-lg shadow-2xl p-6"
        >
          <h3 className="text-gray-900 font-semibold text-xs mb-3 uppercase tracking-wide opacity-50">All Sports</h3>
          <div className="grid grid-cols-2 gap-2">
            {sports.map((sport, index) => (
              <Link
                key={index}
                href={`/search?q=${sport.toLowerCase()}`}
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 text-sm rounded-md transition-all border border-gray-100 hover:border-blue-200"
              >
                {sport}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export function Navbar() {
  const router = useRouter();
  const { user, isAuthenticated, logout, isLoading } = useAuth();
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
    <div className="fixed top-0 w-full z-100 flex flex-col font-sans">
      <TopBanner />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`w-full relative px-4 sm:px-6 lg:px-0 py-3 transition-all duration-500 border-b border-gray-100 bg-white shadow-sm`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/navlogolight.png" alt="Logo" width={200} height={50} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <FootballDropdown />
            <BasketballDropdown />
            <TravelDropdown label="Tickets + Hotel" href="/ticket-hotel" />
            <TravelDropdown label="Tickets + Hotel + Flight" href="/ticket-hotel-flight" />
            <OtherSportsDropdown />
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LanguageToggle />
            </div>

            {isLoading ? (
              <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
            ) : isAuthenticated && user ? (
              <DropdownMenu modal={false}>
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
                    <Link href="/admin/dashboard" className="cursor-pointer">
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
                  variant="default"
                  className="bg-blue-600 text-white hover:bg-blue-700 font-medium px-5"
                >
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
