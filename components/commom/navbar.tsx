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
import { LogOut, User, LayoutDashboard, ChevronDown, Menu, X } from "lucide-react";
import { LanguageToggle } from "./language-toggle";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Top Banner Component
function TopBanner({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full bg-gradient-to-r from-[#FF4B1F] to-[#FF9068] text-white relative flex items-center justify-center overflow-hidden z-[110]"
        >
          {/* Animated Background Shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite] pointer-events-none" />

          <div className="py-2 px-4 w-full flex items-center justify-center gap-3 text-[10px] md:text-xs font-black tracking-widest relative z-10 h-full uppercase">
        
            <span className="text-center truncate font-bold">
              Best price on tickets & travel – fast & easy.
            </span>
            <Link href="/football" className="underline decoration-white/50 hover:decoration-white transition-all whitespace-nowrap shrink-0">
              Book Now &rarr;
            </Link>
          </div>

          <button
            onClick={onClose}
            className="absolute right-2 md:right-4 p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer z-20 shrink-0"
            aria-label="Close banner"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
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
    "St. George's Park", "Camp Nou", "San Siro", "Allianz Arena"
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => navigate.push("/football")}
        className="flex items-center gap-1 text-[14px] font-bold text-gray-800 hover:text-[#0062E6] transition-colors cursor-pointer">
        Football
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-0 w-[800px] bg-white border border-gray-200 rounded-lg shadow-2xl p-6 z-[120]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-gray-900 font-bold text-xs mb-3 uppercase tracking-wider opacity-50">Leagues</h3>
              <div className="flex flex-col gap-1">
                {displayedLeagues.map((league, index) => (
                  <Link
                    key={index}
                    href={`/football/league/${encodeURIComponent(league.toLowerCase().replace(/\\s+/g, '-'))}`}
                    className="text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors"
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
                    className="text-sm text-blue-600 font-bold hover:underline py-1 text-left"
                  >
                    View All
                  </button>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-xs mb-3 uppercase tracking-wider opacity-50">Tournaments</h3>
              <div className="flex flex-col gap-1">
                {tournaments.map((tournament, index) => (
                  <Link
                    key={index}
                    href={`/football/tournament/${encodeURIComponent(tournament.toLowerCase().replace(/\\s+/g, '-'))}`}
                    className="text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors"
                  >
                    {tournament}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-xs mb-3 uppercase tracking-wider opacity-50">Nations</h3>
              <div className="flex flex-col gap-1">
                {nations.map((nation, index) => (
                  <Link
                    key={index}
                    href={`/locations?search=${encodeURIComponent(nation)}`}
                    className="text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors"
                  >
                    {nation}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-xs mb-3 uppercase tracking-wider opacity-50">Others</h3>
              <div className="flex flex-col gap-1">
                <Link href="/teams" className="text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors font-bold">Teams</Link>
                <Link href="/stadium" className="text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors font-bold">Stadiums</Link>
              </div>
            </div>
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
    { title: "Leagues", items: ["NBA", "EuroLeague", "Liga ACB", "Serie A"] },
    { title: "Tournaments", items: ["FIBA World Cup", "EuroBasket", "Olympic Games"] },
    { title: "Nations", items: ["USA", "Spain", "France", "Germany"] }
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => navigate.push("/basketball")}
        className="flex items-center gap-1 text-[14px] font-bold text-gray-800 hover:text-[#0062E6] transition-colors cursor-pointer"
      >
        Basketball
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-0 w-[600px] bg-white border border-gray-200 rounded-lg shadow-2xl p-6 z-[120]"
        >
          <div className="grid grid-cols-3 gap-6">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-gray-900 font-bold text-xs mb-3 uppercase tracking-wider opacity-50">{section.title}</h3>
                <div className="flex flex-col gap-1">
                  {section.items.map((item, iIdx) => (
                    <Link
                      key={iIdx}
                      href={`/search?q=${encodeURIComponent(item)}`}
                      className="text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors"
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



export function Navbar() {
  const router = useRouter();
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <TopBanner isVisible={isBannerVisible} onClose={() => setIsBannerVisible(false)} />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`w-full relative px-4 sm:px-6 lg:px-0 transition-all duration-300 border-b border-gray-100 bg-white shadow-sm ${isBannerVisible ? 'py-2 md:py-2.5' : 'py-3 md:py-4'
          }`}
      >
        <div className="container mx-auto px-1 sm:px-4 lg:px-8 xl:px-4 flex items-center justify-between max-w-6xl">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/navlogolight.png"
              alt="Logo"
              width={160}
              height={40}
              className="w-[120px] md:w-[140px] lg:w-[160px] xl:w-[220px] h-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            <FootballDropdown />
            <BasketballDropdown />
            
            <div className="flex items-center gap-3 xl:gap-4 border-l border-gray-100 pl-4 xl:pl-5">
              <Link
                href="/ticket-hotel"
                className="text-[14px] font-bold text-gray-800 hover:text-[#0062E6] transition-colors whitespace-nowrap"
              >
                Tickets + Hotel
              </Link>
              <Link
                href="/ticket-hotel-flight"
                className="text-[14px] font-bold text-gray-800 hover:text-[#0062E6] transition-colors whitespace-nowrap"
              >
                Hotel + Flight
              </Link>
              <Link
                href="/"
                className="text-[14px] font-bold text-gray-800 hover:text-[#0062E6] transition-colors whitespace-nowrap"
              >
                Other Sports
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-4 shrink-0">
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
                  className="bg-blue-600 text-white hover:bg-blue-700 font-bold px-3 md:px-6 h-9 md:h-11 rounded-xl text-xs md:text-sm uppercase tracking-wider"
                >
                  Sign In
                </Button>
              </Link>
            )}

            {/* Hamburger Button for Mobile/Tablet */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 md:p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors ml-1"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden z-[100]"
            >
              <div className="flex flex-col p-4 md:p-6 pb-6 gap-3">
                <Link href="/football" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-gray-800 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">Football</Link>
                <Link href="/basketball" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-gray-800 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">Basketball</Link>
                <Link href="/ticket-hotel" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-gray-800 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">Tickets + Hotel</Link>
                <Link href="/ticket-hotel-flight" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-gray-800 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">Tickets + Hotel + Flight</Link>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-gray-800 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">Other Sports</Link>
                
                <div className="h-px bg-gray-200 my-2 w-full" />
                <div className="md:hidden flex items-center justify-between p-2">
                   <span className="text-sm font-semibold text-gray-600">Language</span>
                   <LanguageToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
