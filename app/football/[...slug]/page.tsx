import { Navbar } from '@/components/commom/navbar';
import { Footer } from '@/components/commom/footer';
import { Testimonials } from '@/components/landing/testimonials';
import { WhyChoose } from '@/components/landing/why-choose';
import { Search, Calendar, ChevronDown, Trophy } from 'lucide-react';

export default function FootballPage() {
  const matches = [
    {
      id: 1,
      date: 'SAT, 15 JAN',
      time: '15:00',
      league: 'PREMIER LEAGUE',
      teams: 'Manchester United vs Liverpool',
      stadium: 'Old Trafford',
      city: 'Manchester',
      price: '£89.00',
      available: true
    },
    {
      id: 2,
      date: 'SUN, 16 JAN',
      time: '16:30',
      league: 'LA LIGA',
      teams: 'Barcelona vs Real Madrid',
      stadium: 'Camp Nou',
      city: 'Barcelona',
      price: '£120.00',
      available: true
    },
    {
      id: 3,
      date: 'FRI, 21 JAN',
      time: '20:00',
      league: 'BUNDESLIGA',
      teams: 'Bayern Munich vs Borussia Dortmund',
      stadium: 'Allianz Arena',
      city: 'Munich',
      price: '£95.00',
      available: true
    },
    {
      id: 4,
      date: 'SAT, 22 JAN',
      time: '18:00',
      league: 'SERIE A',
      teams: 'Inter Milan vs Juventus',
      stadium: 'San Siro',
      city: 'Milan',
      price: '£110.00',
      available: true
    },
    {
      id: 5,
      date: 'SUN, 23 JAN',
      time: '21:00',
      league: 'LIGUE 1',
      teams: 'PSG vs Monaco',
      stadium: 'Parc des Princes',
      city: 'Paris',
      price: '£105.00',
      available: true
    },
    {
      id: 6,
      date: 'FRI, 24 JAN',
      time: '19:30',
      league: 'CHAMPIONS LEAGUE',
      teams: 'Liverpool vs Real Madrid',
      stadium: 'Anfield',
      city: 'Liverpool',
      price: '£130.00',
      available: true
    }
  ];

  return (
<div>
        <Navbar></Navbar>
    <div className="min-h-screen bg-[#0e131f] text-white pt-10">
      {/* Header Section */}
      <div className="pt-16 pb-6">
        <div className="container mx-auto px-8 bg-[#212631] py-10 rounded-2xl flex items-center">
          <div className="flex  mb-6 gap-6">
            <div className="bg-[#207cf5] p-8 rounded-md mb-4">
              <Trophy className="size-10" />
            </div>
            <div>
                <h1 className="text-4xl font-bold mb-2">Football Tickets</h1>
            <p className=" text-gray-300 max-w-3xl">
              All football tickets listed on TicketforSport come from verified vendors with 100% guarantee. 
              Compare prices across sellers and find the best match-day seats effortlessly. 
              Experience the thrill of live football with complete peace of mind.
            </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Compare Football Ticket Prices</h1>
        
        {/* Search and Filter Bar */}
        <div className="bg-[#212631] rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-[#1a1f2c] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#207cf5] focus:border-[#207cf5]"
                placeholder="Search by team..."
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <select
                className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-700 rounded-md leading-5 bg-[#1a1f2c] text-white focus:outline-none focus:ring-2 focus:ring-[#207cf5] focus:border-[#207cf5]"
                defaultValue=""
              >
                <option value="" className="bg-[#1a1f2c]">Sort by Date</option>
                <option value="date-asc" className="bg-[#1a1f2c]">Date (Earliest First)</option>
                <option value="date-desc" className="bg-[#1a1f2c]">Date (Latest First)</option>
                <option value="price-asc" className="bg-[#1a1f2c]">Price (Low to High)</option>
                <option value="price-desc" className="bg-[#1a1f2c]">Price (High to Low)</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Matches List */}
        <div className="space-y-4">
          {matches.map((match) => (
            <div key={match.id} className="bg-[#212631] rounded-lg overflow-hidden border border-gray-700">
              <div className="p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-400 mb-1">{match.league}</div>
                    <h3 className="text-lg font-bold text-white">{match.teams}</h3>
                    <div className="mt-1 text-sm text-gray-400">
                      <div>{match.stadium}</div>
                      <div>{match.city}</div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-center">
                    <div className="text-sm font-medium text-gray-400">{match.date}</div>
                    <div className="text-base font-bold text-white">{match.time}</div>
                  </div>
                  <div className="mt-4 md:mt-0 text-center">
                    {match.available ? (
                      <button className="bg-[#207cf5] hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-200">
                        Tickets from {match.price}
                      </button>
                    ) : (
                      <button className="bg-gray-700 text-gray-400 font-medium py-2 px-4 rounded cursor-not-allowed" disabled>
                        Sold Out
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <WhyChoose></WhyChoose>
    <Testimonials />
    <Footer />
</div>
  );
}
