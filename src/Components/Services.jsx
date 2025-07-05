import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Software development",
      description: "We design and build custom software solutions tailored to your business needs — from web platforms to mobile apps that scale.",
      image: "/assets/software-dev.png"
    },
    {
      id: 2,
      title: "Training",
      description: "We deliver practical digital training programs to upskill teams and empower them with the tools to succeed in a tech-driven world.",
      image: "/assets/training.png"
    },
    {
      id: 3,
      title: "Consultancy",
      description: "We provide expert guidance to help businesses solve complex challenges, optimize operations, and drive sustainable growth.",
      image: "/assets/consultancy.png"
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full mb-6">
            OUR SERVICES
          </div>
          <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 max-w-4xl mx-auto leading-tight">
            Our Expert Services to Drive Growth
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Software Development - Top Left */}
          <ServiceCard service={services[0]} />
          
          {/* Training - Top Right */}
          <ServiceCard service={services[1]} />
          
          {/* Consultancy - Bottom Full Width */}
          <div className="lg:col-span-2">
            <ServiceCard service={services[2]} isLarge={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, isLarge = false }) {
    return (
      <div 
        className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
          isLarge ? 'h-80 lg:h-96' : 'h-80'
        }`}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/30" />
        
        {/* Content */}
        <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between text-white">
          {/* Title at the top */}
          <div className="w-full flex items-center justify-between">
            <h3 className="text-xl lg:text-3xl font-semibold group-hover:transform group-hover:translate-y-[-4px] transition-transform duration-300">
              {service.title}
            </h3>
            <div className="flex justify-end">
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center group-hover:bg-cyan-300 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
          
          {/* Description and Arrow at the bottom */}
          <div className="space-y-6">
            <p className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              {service.description}
            </p>
            
            {/* Arrow Button */}
      
          </div>
        </div>
        
        {/* Subtle border highlight on hover */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300" />
      </div>
    );
  }