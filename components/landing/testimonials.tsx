"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Testimonials() {
  return (
   <div>
     <section className=" ">
      <div className="max-w-6xl py-20 px-4 sm:px-6 lg:px-8 rounded-3xl my-10 mx-auto text-center bg-[#1E90FF]">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">Stay in the Game</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 78,000 fans who get notified about major events.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-14 px-6 text-lg rounded-md border-0 focus-visible:ring-2 focus-visible:ring-white bg-white"
              />
            </div>
            <Button 
              className="h-14 px-8 text-lg rounded-md font-semibold bg-white text-black hover:bg-blue-50  transition-colors"
              size="lg"
            >
              Subscribe Now
            </Button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-500">
          <div className="flex flex-wrap justify-center gap-4">
            {['Football', 'Basketball', 'Tennis', 'Cricket', 'Rugby', 'Golf', 'Boxing', 'F1'].map((sport) => (
              <span 
                key={sport} 
                className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
   </div>
  )
}