import React from "react";

export default function WhyUs() {
  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-block bg-green-400 text-white px-4 py-2 rounded-md text-sm font-medium mb-6">
            WHY US
          </div>
          <h1 className="text-5xl font-medium text-gray-900 mb-4 leading-tight">
            Your Vision. Our Expertise.
          </h1>
          <h2 className="text-5xl font-medium text-gray-900 mb-8 leading-tight">
            Limitless Possibilities.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            We don't just deliver services—we build partnerships. At Hillview
            Group, we align our technical expertise with your goals to create
            lasting impact. Whether you're a startup, a growing business, or an
            enterprise looking to scale, our solutions are designed to empower
            your journey through innovation, reliability, and measurable
            results.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full flex items-center justify-center gap-6 mb-5">
          {/* Client-Centric Approach Card */}
          <div className="relative rounded-2xl overflow-hidden h-80 group w-[45%]">
            <img
              src="assets/whyus (2).png"
              alt="Client-Centric Approach"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Simulated progressive blur overlay */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 top-[35.2%] w-full h-[64.8%]
               bg-gradient-to-b from-black/0 via-black/20 to-black/30
               backdrop-blur-md"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 100%)",
              }}
            />

            {/* Text content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
              <h3 className="text-2xl font-medium mb-3">
                Client-Centric Approach
              </h3>
              <p className="text-gray-200 text-lg">
                We prioritize your goals and tailor solutions accordingly.
              </p>
            </div>
          </div>

          {/* Expert Team Card */}
          <div className="relative rounded-2xl overflow-hidden h-80 group w-[55%]">
            <img
              src="assets/whyus (1).png"
              alt="Expert Team"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div
              className="absolute left-1/2 transform -translate-x-1/2 top-[35.2%] w-full h-[64.8%] 
               bg-gradient-to-b from-black/0 via-black/20 to-black/30 
               backdrop-blur-md pointer-events-none"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
              <h3 className="text-2xl font-medium mb-3">Expert Team</h3>
              <p className="text-gray-200 text-lg">
                Our professionals bring a wealth of experience across various
                industries.
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full flex items-center justify-center gap-6">
          {/* Innovative Solutions Card */}
          <div className="relative rounded-2xl overflow-hidden h-80 group w-[30%]">
            <img
              src="assets/whyus (3).png"
              alt="Innovative Solutions"
              className="absolute inset-0 w-full h-full object-cover z-0"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div
              className="absolute left-1/2 transform -translate-x-1/2 top-[35.2%] w-full h-[64.8%] 
               bg-gradient-to-b from-black/0 via-black/20 to-black/30 
               backdrop-blur-md pointer-events-none"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
              <h3 className="text-2xl font-medium mb-3">Innovative Solutions</h3>
              <p className="text-gray-200 text-lg">
                We harness the latest technologies to deliver forward-thinking
                results.
              </p>
            </div>
          </div>

          {/* Proven Track Record Card */}
          <div className="relative rounded-2xl overflow-hidden h-80 group w-[70%]">
            <img
              src="assets/whyus (4).png"
              alt="Proven Track Record"
              className="absolute inset-0 w-full h-full object-cover z-0"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div
              className="absolute left-1/2 transform -translate-x-1/2 top-[35.2%] w-full h-[64.8%] 
               bg-gradient-to-b from-black/0 via-black/20 to-black/30 
               backdrop-blur-md pointer-events-none"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
              <h3 className="text-2xl font-medium mb-3">Proven Track Record</h3>
              <p className="text-gray-200 text-lg">
                Our portfolio showcases successful projects and satisfied
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
