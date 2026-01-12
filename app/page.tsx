import { Hero } from "@/components/landing/hero"
import { TopMatches } from "@/components/landing/topMatches"
import { TopCompetitions } from "@/components/landing/topCompetitions"
import { TopVenues } from "@/components/landing/value-props"
import { Features } from "@/components/landing/features"
import { Testimonials } from "@/components/landing/testimonials"

import { TopSportsEvents } from "@/components/landing/topSportsEvents"
import { WhyChoose } from "@/components/landing/why-choose"
import TopFootballClubs from "@/components/landing/topFootballClubs"
import { TopFixtures } from "@/components/landing/topFixtures"
import { Reliable } from "@/components/landing/reliable"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Hero />
      <TopMatches />
      <div id="how-it-works">
        <TopCompetitions />
      </div>

         <div id="features">
        <Features />
      </div>

      {/* <div id="sports-events">
        <TopSportsEvents />
      </div>
      <TopFootballClubs />
      <TopVenues /> */}
   
      <div id="fixtures">
        <TopFixtures />
      </div>
      <Reliable />
      <WhyChoose />
      <Testimonials />
    </main>
  )
}
