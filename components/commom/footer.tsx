import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const popularEvents = [
    { name: "Premier League", href: "/premier-league" },
    { name: "Champions League", href: "/champions-league" },
    { name: "Europa League", href: "/europa-league" },
    { name: "FA Cup", href: "/fa-cup" },
    { name: "La Liga", href: "/la-liga" },
    { name: "Bundesliga", href: "/bundesliga" }
  ]

  const topClubs = [
    { name: "Manchester United", href: "/manchester-united" },
    { name: "Liverpool", href: "/liverpool" },
    { name: "Arsenal", href: "/arsenal" },
    { name: "Chelsea", href: "/chelsea" },
    { name: "Manchester City", href: "/manchester-city" },
    { name: "Tottenham", href: "/tottenham" }
  ]

  const usefulLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-and-policy" }
  ]

  const browse = [
    { name: "Football Tickets", href: "/football" },
    { name: "Concert Tickets", href: "/concert-tickets" },
    { name: "Theater Tickets", href: "/theater-tickets" },
    { name: "Sports Tickets", href: "/sports-tickets" },
    { name: "Gift Cards", href: "/gift-cards" }
  ]

  return (
    <footer className="bg-white text-[#05305F] py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#05305F]">Popular Football Events</h4>
            <ul className="space-y-2">
              {popularEvents.map((event) => (
                <li key={event.name}>
                  <Link href={`/events${event.href}`} className="text-gray-600 hover:text-[#0645A0] transition-colors">
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-[#05305F]">Top Clubs</h4>
            <ul className="space-y-2">
              {topClubs.map((club) => (
                <li key={club.name}>
                  <Link href={`/clubs${club.href}`} className="text-gray-600 hover:text-[#0645A0] transition-colors">
                    {club.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-[#05305F]">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#0645A0] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-[#05305F]">Browse</h4>
            <ul className="space-y-2">
              <li>
                  <Link href="/locations" className="text-gray-600 hover:text-[#0645A0] transition-colors">
                    Cities
                  </Link>
                </li>
              {browse.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-[#0645A0] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <Image 
            src="/navlogolight.png" 
            alt="Logo" 
            width={200} 
            height={40} 
            className="h-10 w-auto"
          />
        </div>

        <div className="text-center text-gray-500 mb-8">
          <p>© TicketforSport 2025 — All rights reserved.</p>
        </div>

        <div className="flex justify-center space-x-4">
          <a 
            href="#" 
            className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0645A0] hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0645A0] hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0645A0] hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  )
}