import React from 'react'

function Elevate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 py-16">
      {/* Ready to Elevate Badge */}
      <div className="mb-8">
        <span className="inline-block bg-[#8DC63F] text-white text-sm font-medium px-4 py-2 rounded-[4px] tracking-wide">
          READY TO ELEVATE?
        </span>
      </div>
      
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 text-center max-w-4xl mb-12 leading-tight">
        Proceed Toward Your Next Achievement
      </h1>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 min-w-32">
          Let's talk
        </button>
        <button className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 min-w-32">
          Learn more
        </button>
      </div>
      
      {/* Professional Image */}
      <div className="relative">
        <div className="w-96 h-64 md:w-[606px] md:h-[300px] rounded-full overflow-hidden shadow-2xl">
          <img 
            src="/assets/elevate.png" 
            alt="Two professionals collaborating at a desk with charts and graphs"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Subtle shadow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
      </div>
    </div>
  )
}

export default Elevate