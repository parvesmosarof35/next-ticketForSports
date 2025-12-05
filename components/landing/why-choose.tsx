import { Search, Shield, Heart } from "lucide-react"

export function WhyChoose() {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "We find the best tickets",
      description: "Our platform scans hundreds of sellers to bring you the most competitive prices for every event."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Safe & secure site",
      description: "Your data is protected with industry-leading encryption and secure payment processing."
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Fans love us",
      description: "Join over 78,000 satisfied customers who trust us for their event tickets."
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111827]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Why Choose Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-lg hover:shadow-lg transition-all hover:bg-gray-700"
            >
              <div className="size-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}