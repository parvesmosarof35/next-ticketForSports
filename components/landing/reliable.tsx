"use client";

import { Search, ShieldCheck, Award } from "lucide-react";

export function Reliable() {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-[#0645A0]" />,
      title: "Compare in One Place",
      description: "Browse thousands of events and compare prices from top sellers instantly."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#0645A0]" />,
      title: "Only Verified Sellers",
      description: "All sellers are vetted and verified to ensure safe and secure transactions."
    },
    {
      icon: <Award className="w-8 h-8 text-[#0645A0]" />,
      title: "Best Seat Guaranteed",
      description: "Find the perfect seat at the best price with our advanced search filters."
    }
  ];

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white text-[#05305F]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#05305F]">
            TicketforSport — Reliable Tickets <br /> at the Right Price
          </h2>
          <p className="max-w-2xl text-xl md:text-2xl text-gray-600 mx-auto">
            We prioritize your security and ensure all transactions are protected with the latest encryption technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-[#E6F0FA] w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
