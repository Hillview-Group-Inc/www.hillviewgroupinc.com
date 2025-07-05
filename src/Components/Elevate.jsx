import React from 'react'

function Elevate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Ready to Elevate Badge */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <span className="inline-block bg-[#8DC63F] text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-[4px] tracking-wide">
          READY TO ELEVATE?
        </span>
      </div>
      
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gray-800 text-center max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mb-8 sm:mb-10 lg:mb-12 leading-tight px-2">
        Proceed Toward Your Next Achievement
      </h1>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-14 lg:mb-16 w-full max-w-xs sm:max-w-none">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full transition-colors duration-200 w-full sm:w-auto sm:min-w-32 lg:min-w-40 text-sm sm:text-base">
          Let's talk
        </button>
        <button className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full transition-colors duration-200 w-full sm:w-auto sm:min-w-32 lg:min-w-40 text-sm sm:text-base">
          Learn more
        </button>
      </div>
      
      {/* Professional Image */}
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div className="w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[2/1] lg:aspect-[2.5/1] rounded-full overflow-hidden shadow-2xl">
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