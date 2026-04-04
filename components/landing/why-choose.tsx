"use client";

import { Star, Plane, Medal, Award } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export function WhyChoose() {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "We find the best tickets",
      description: "Our platform scans multiple sellers to bring you the most competitive prices for every event."
    },
    {
      icon: <Plane className="w-8 h-8 text-white " />,
      title: "Travel-packages",
      description: "We compare complete sports travel packages, including tickets, hotel accommodation, and flights, for a wide range of events."
    },
    {
      icon: <Award className="w-8 h-8 text-white " />,
      title: "Best seat guarantee",
      description: "Find the best seat at the best price with our advanced search filters."
    }
  ];

  return (
    <section className={`py-10 px-4 sm:px-6 lg:px-8 bg-white ${montserrat.className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-black mb-4">Why Choose Us</h2>
          <div className="w-20 h-1.5 bg-[#0062e6] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all flex flex-col items-center text-center group"
            >
              {/* Circular Icon with Gradient */}
              <div className="size-24 rounded-full bg-gradient-to-r from-[#0062e6] to-[#006dff] flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-black text-black mb-4 tracking-tight">
                {feature.title}
              </h3>

              <p className="text-[#4A4A4A] leading-relaxed text-[15px] font-medium px-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}