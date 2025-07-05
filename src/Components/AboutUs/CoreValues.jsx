import React from "react";

function CoreValues() {
  return (
    <div className="flex flex-col items-center justify-center my-15">
      <div className="inline-block mb-8">
        <span className="bg-[#8DC63F] text-white px-4 py-2 rounded-[4px] text-sm font-medium uppercase tracking-wide">
          OUR CORE VALUES
        </span>
      </div>
      <h2 className="text-2xl text-center md:text-left md:text-5xl font-medium text-gray-800 mb-4 leading-tight">
        The Principles That Drive Us Forward
      </h2>
      <span className="text-[#606060] text-[16px] w-full md:w-[719px] mb-20 text-center">
        At Hillview Group, our values are more than words—they're the foundation
        of every project, partnership, and product. They shape how we work, how
        we grow, and how we help our clients thrive in a constantly evolving
        digital world.
      </span>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div
          className="w-[292px] h-[280px] rounded-xl bg-white px-6 pt-6"
          style={{
            boxShadow: `0px 0px 0px 1px #1B1F2326, 0px 1px 3px 0px #00000005`,
          }}
        >
            <img src="/assets/search.png" alt="" className="mb-4"/>
            <span className="font-medium text-[26px]">Excellence</span>
            <h3 className="font-regular text-[18px] text-[#777777]">We are committed to delivering the highest quality in everything we do—from code to customer service.</h3>
        </div>
        <div
          className="w-[292px] h-[280px] rounded-xl bg-white px-6 pt-6"
          style={{
            boxShadow: `0px 0px 0px 1px #1B1F2326, 0px 1px 3px 0px #00000005`,
          }}
        >
            <img src="/assets/integrity.png" alt="" className="mb-4"/>
            <span className="font-medium text-[26px]">Integrity</span>
            <h3 className="font-regular text-[18px] text-[#777777]">We act with transparency and respect, building trust with every interaction.</h3>
        </div>
        <div
          className="w-[292px] h-[280px] rounded-xl bg-white px-6 pt-6"
          style={{
            boxShadow: `0px 0px 0px 1px #1B1F2326, 0px 1px 3px 0px #00000005`,
          }}
        >
            <img src="/assets/innovation.png" alt="" className="mb-4"/>
            <span className="font-medium text-[26px]">Innovation</span>
            <h3 className="font-regular text-[18px] text-[#777777]">We embrace change, pursue creative ideas, and stay ahead of industry trends to bring cutting-edge solutions to our clients.</h3>
        </div>
        <div
          className="w-[292px] h-[280px] rounded-xl bg-white px-6 pt-6"
          style={{
            boxShadow: `0px 0px 0px 1px #1B1F2326, 0px 1px 3px 0px #00000005`,
          }}
        >
            <img src="/assets/empowerment.png" alt="" className="mb-4"/>
            <span className="font-medium text-[26px]">Empowerment</span>
            <h3 className="font-regular text-[18px] text-[#777777]">We are passionate about equipping people with the tools and knowledge to succeed in their personal and professional lives.</h3>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
