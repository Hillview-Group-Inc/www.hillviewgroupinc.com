import React from "react";

function Building() {
  return (
    <div className="bg-white py-20 lg:px-25 px-3">
      <div className="inline-block mb-8 ml-5 w-full lg:w-[719px]">
        <span className="bg-[#8DC63F] text-white px-4 py-2 rounded-[4px] text-sm font-medium uppercase tracking-wide !mb-[8px]">
          About Us
        </span>
        <h2 className="text-2xl md:text-[68px] font-medium text-gray-800 leading-tight mb-2 mt-4">
          Building Tomorrow's Solutions, Today.
        </h2>
        <span className="text-[#606060] text-[16px] w-[719px] mt-2 mb-20">
          At Hillview Group, we believe that innovation is the heartbeat of
          progress. Founded with a passion for empowering businesses and
          individuals through technology, we have grown into a trusted partner
          for digital transformation across industries. We are more than a tech
          company—we are architects of change, builders of opportunity, and
          champions of growth.
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        <img src="/assets/about1.png" alt="" className="w-[90%] md:w-2/3 object-contain" />
        <img src="/assets/about2.png" alt="" className="w-[90%] md:w-1/3 object-contain" />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between mt-12 gap-6">
        <div className="w-full md:w-1/3 bg-[#25AAE1] h-[216px] rounded-[8px] flex flex-col items-center justify-center gap-2 relative">
          <img
            src="/assets/triangle.png"
            alt=""
            className="absolute top-4 left-1/2 transform -translate-x-1/2"
          />
          <div className="flex flex-col items-center text-white">
            <h1 className="text-[56px] font-medium">100%</h1>
            <p className="text-[18px]">Client Satisfaction</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-[#8DC63F] h-[216px] rounded-[8px] flex flex-col items-center justify-center gap-2 relative">
          <img
            src="/assets/moon.png"
            alt=""
            className="absolute top-4 left-1/2 transform -translate-x-1/2"
          />
          <div className="flex flex-col items-center text-white">
            <h1 className="text-[56px] font-medium">3 +</h1>
            <p className="text-[18px]">Years on Market</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-[#25AAE1] h-[216px] rounded-[8px] flex flex-col items-center justify-center gap-2 relative">
          <img
            src="/assets/flower.png"
            alt=""
            className="absolute top-4 left-1/2 transform -translate-x-1/2"
          />
          <div className="flex flex-col items-center text-white">
            <h1 className="text-[56px] font-medium">$4m</h1>
            <p className="text-[18px]">In Pure Profits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Building;
