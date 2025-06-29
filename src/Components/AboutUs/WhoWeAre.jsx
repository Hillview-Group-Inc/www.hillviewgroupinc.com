import React from "react";

function WhoWeAre() {
  return (
    <div className="bg-white py-20">
      <div className="inline-block mb-8 ml-5 w-[719px]">
        <span className="bg-[#8DC63F] text-white px-4 py-2 rounded-[4px] text-sm font-medium uppercase tracking-wide mb-4">
          Who We are
        </span>
        <h2 className="text-4xl md:text-[68px] font-medium text-gray-800 leading-tight mb-2">
          Driven by Purpose, Defined by Innovation
        </h2>
        <span className="text-[#606060] text-[16px] w-[719px] mt-2 mb-20">
          Hillview Group is a technology-driven solutions provider based in
          Nigeria, dedicated to delivering excellence in software development,
          IT training, and business consultancy. From startups to large
          enterprises, our clients trust us to provide scalable, sustainable
          solutions that drive real impact. With a team of experienced
          developers, instructors, and consultants, we pride ourselves on
          combining deep technical expertise with a personalized approach to
          problem-solving.
        </span>
      </div>
      <div className="flex items-center justify-between gap-6">
        <div className="w-1/2 h-[225px] bg-[#D3EEF9] rounded-[16px] relative pl-10 pt-10 overflow-hidden">
          <img
            src="/assets/Vector (9).png"
            alt=""
            className="absolute right-0 bottom-0"
          />
          <div className="w-[466px]">
            <h1 className="text-[32px] font-medium">Our Mission</h1>
            <p className="text-[#4A4A4A] text-[18px]">
              To enable businesses and individuals to thrive in a digital world
              by providing reliable, innovative, and user-centered solutions.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-[225px] bg-[#E8F4D9] rounded-[16px] relative pl-10 pt-10 overflow-hidden">
          <img
            src="/assets/misc (1).png"
            alt=""
            className="absolute right-0 bottom-0"
          />
          <div className="w-[466px]">
            <h1 className="text-[32px] font-medium">Our Vision</h1>
            <p className="text-[#4A4A4A] text-[18px]">
              To be a leading African technology company, recognized globally
              for transforming ideas into impactful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
