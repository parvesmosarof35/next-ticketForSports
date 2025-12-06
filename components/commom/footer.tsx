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
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Sitemap", href: "/sitemap" }
  ]

  const browse = [
    { name: "Football Tickets", href: "/football-tickets" },
    { name: "Concert Tickets", href: "/concert-tickets" },
    { name: "Theater Tickets", href: "/theater-tickets" },
    { name: "Sports Tickets", href: "/sports-tickets" },
    { name: "Gift Cards", href: "/gift-cards" }
  ]

  return (
<footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-4">Popular Football Events</h4>
            <ul className="space-y-2">
              {popularEvents.map((event) => (
                <li key={event.name}>
                  <Link href={event.href} className="hover:text-blue-600 transition-colors">
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Top Clubs</h4>
            <ul className="space-y-2">
              {topClubs.map((club) => (
                <li key={club.name}>
                  <Link href={club.href} className="hover:text-blue-600 transition-colors">
                    {club.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Browse</h4>
            <ul className="space-y-2">
              {browse.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

 <div className="flex justify-center mb-8">
      <Image 
        src="/navlogo.png" 
        alt="Logo" 
        width={200} 
        height={40} 
        className="h-10 w-auto"
      />
    </div>

    <div className="text-center text-gray-400 mb-8">
      <p>© TicketforSport 2025 — All rights reserved.</p>
    </div>



 <div className="flex justify-center space-x-4">
      <a 
        href="#" 
        className="w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a 
        href="#" 
        className="w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a 
        href="#" 
        className="w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>



      </div>
    </footer>
  )
}