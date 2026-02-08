import { Search, Shield, Heart } from "lucide-react"

export function WhyChoose() {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-[#0645A0]" />,
      title: "We find the best tickets",
      description: "Our platform scans hundreds of sellers to bring you the most competitive prices for every event."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#0645A0]" />,
      title: "Safe & secure site",
      description: "Your data is protected with industry-leading encryption and secure payment processing."
    },
    {
      icon: <Heart className="w-6 h-6 text-[#0645A0]" />,
      title: "Fans love us",
      description: "Join over 78,000 satisfied customers who trust us for their event tickets."
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#05305F] mb-3">Why Choose Us</h2>
          <div className="w-20 h-1 bg-[#0645A0] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="size-16 bg-[#E6F0FA] rounded-lg flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#05305F] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}