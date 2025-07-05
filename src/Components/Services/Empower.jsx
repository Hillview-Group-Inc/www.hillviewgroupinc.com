import React from "react";

function Empower() {
  return (
    <div className="bg-white mt-20 flex flex-col items-center justify-center">
      <div className="inline-block mb-8">
        <span className="bg-[#8DC63F] text-white px-6 py-2 rounded-sm text-sm font-medium">
          OUR CLIENTS
        </span>
      </div>
      <span className="text-[26px] lg:text-[38px] text-[#333333] font-medium text-center md:text-left">Empowering Your Digital Transformation</span>
      <span className="text-[#606060] text-center text-[16px] md:w-[719px] mt-2 mb-10 lg:mb-20">At Hillview Group, we specialize in delivering cutting-edge solutions that drive innovation and efficiency. Our comprehensive services are designed to help individuals and businesses thrive in the digital age.</span>
      <img src="/assets/services1.png" alt=""  className="w-[90%] object-cover md:w-full"/>
    </div>
  );
}

export default Empower;
