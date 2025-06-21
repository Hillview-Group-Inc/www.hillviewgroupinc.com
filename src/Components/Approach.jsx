import React from 'react';

export default function ApproachSection() {
  const steps = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description: "We start by understanding your goals and creating a clear, actionable plan tailored to your needs."
    },
    {
      number: 2,
      title: "Design & Planning",
      description: "We develop a detailed roadmap to ensure smooth, efficient execution at every stage."
    },
    {
      number: 3,
      title: "Implementation",
      description: "Our team brings the plan to life, focusing on precision and alignment with your vision."
    },
    {
      number: 4,
      title: "Optimization & Growth",
      description: "We track outcomes, refine strategies and support ongoing growth for lasting impact."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                OUR APPROACH
              </span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                A Streamlined Process for Lasting Results
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                  Let's talk
                </button>
                <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-colors">
                  Learn more
                </button>
              </div>
            </div>
            
                <img src="/assets/approach.png" alt="" />
          </div>
          
          {/* Right Column - Steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}