import React from 'react'

function Industries() {
  const industries = [
    { name: 'Small Business', color: 'bg-[#76C6B3]' },
    { name: 'Corporate', color: 'bg-[#FFA37C]' },
    { name: 'Consulting Firm', color: 'bg-[#3758D3]' },
    { name: 'Startup', color: 'bg-[#FFBAB9]' },
    { name: 'Ecommerce store', color: 'bg-[#70A2E1]' },
    { name: 'Tech company', color: 'bg-[#FFD37D]' },
    { name: 'Non profit', color: 'bg-[#FE6037]' },
    { name: 'Marketing Agency', color: 'bg-[#3861F9]' }
  ]

  return (
    <div className='bg-[#E8F4D9] py-20 px-6 md:px-25'>
      <div className='max-w-6xl mx-auto text-center'>
        {/* Header Badge */}
        <div className='inline-block mb-8'>
          <span className='bg-[#8DC63F] text-white px-4 py-2 rounded-[4px] text-sm font-medium uppercase tracking-wide'>
            INDUSTRIES WE SERVE
          </span>
        </div>

        {/* Main Heading */}
        <h2 className='text-4xl md:text-5xl font-medium text-gray-800 mb-12 leading-tight'>
          Industry-Specific Expertise to<br />
          Drive Your Success
        </h2>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200'>
            Let's talk
          </button>
          <button className='border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-colors duration-200'>
            Learn more
          </button>
        </div>

        {/* Industry Pills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto'>
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`${industry.color} text-white px-8 py-4 rounded-full text-center font-medium text-lg hover:opacity-90 transition-opacity duration-200 cursor-pointer transform hover:scale-105 transition-transform`}
            >
              {industry.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Industries