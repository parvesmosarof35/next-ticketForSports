import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export function Footer() {
  const popularSports = [
    { name: "Football", href: "/football" },
    { name: "Basketball", href: "/basketball" },
    { name: "Tennis", href: "/search?q=tennis" },
    { name: "Golf", href: "/search?q=golf" },
    { name: "Boxing", href: "/search?q=boxing" },
    { name: "F1", href: "/search?q=f1" }
  ];

  const popularFootballEvents = [
    { name: "Premier League", href: "/football/league/premier-league" },
    { name: "Champions League", href: "/football/tournament/champions-league" },
    { name: "Europa League", href: "/football/tournament/europa-league" },
    { name: "FA Cup", href: "/football/tournament/fa-cup" },
    { name: "La Liga", href: "/football/league/la-liga" },
    { name: "Bundesliga", href: "/football/league/bundesliga" }
  ];

  const usefulLinks = [
    { name: "About us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Terms & Condition", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-and-policy" }
  ];

  const browse = [
    { name: "Cities", href: "/locations" },
    { name: "Ticket + Hotel + Flight", href: "/ticket-hotel-flight" },
    { name: "Popular Competitions", href: "/football" },
    { name: "Top Fixtures", href: "/matches" }
  ];

  return (
    <footer className={`bg-white text-[#05305F] py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100 ${montserrat.className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 px-4 md:px-0">
          {/* Popular Sports */}
          <div>
            <h4 className="font-black text-lg mb-6 text-[#05305F] tracking-tight">Popular Sports</h4>
            <ul className="flex flex-col gap-3">
              {popularSports.map((sport) => (
                <li key={sport.name}>
                  <Link href={sport.href} className="text-[#4A4A4A] font-medium hover:text-[#0062e6] transition-colors text-[15px]">
                    {sport.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Football Events */}
          <div>
            <h4 className="font-black text-lg mb-6 text-[#05305F] tracking-tight">Popular Football Events</h4>
            <ul className="flex flex-col gap-3">
              {popularFootballEvents.map((event) => (
                <li key={event.name}>
                  <Link href={event.href} className="text-[#4A4A4A] font-medium hover:text-[#0062e6] transition-colors text-[15px]">
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-black text-lg mb-6 text-[#05305F] tracking-tight">Useful Links</h4>
            <ul className="flex flex-col gap-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#4A4A4A] font-medium hover:text-[#0062e6] transition-colors text-[15px]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Browse */}
          <div>
            <h4 className="font-black text-lg mb-6 text-[#05305F] tracking-tight">Browse</h4>
            <ul className="flex flex-col gap-3">
              {browse.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#4A4A4A] font-medium hover:text-[#0062e6] transition-colors text-[15px]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-gray-50 flex flex-col items-center">
          <div className="mb-8">
            <Image
              src="/navlogolight.png"
              alt="Logo"
              width={220}
              height={50}
              className="w-[180px] md:w-[220px] h-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>

          <div className="text-center text-[#9B9B9B] text-sm font-medium mb-8">
            <p>© Ticket for Sport 2025 — All rights reserved.</p>
          </div>

          <div className="flex justify-center space-x-5">
            {[
              { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
              { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
              { icon: <Instagram className="w-5 h-5" />, label: "Instagram" }
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center text-[#05305F] hover:bg-[#0062e6] hover:text-white transition-all duration-300 shadow-sm"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}