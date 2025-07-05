import React from "react";
import { CheckCircle } from "lucide-react";

const ChallengesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="mb-1">
              <span className="inline-block bg-[#8DC63F] text-white px-4 py-2 rounded-[4px] text-sm font-medium mb-6">
                FACING CHALLENGES
              </span>
              <h2 className="text-2xl lg:text-4xl font-medium text-gray-900 leading-tight mb-0">
                Overcoming These Key Barriers
                <br className="hidden lg:block"/>
                <span className="text-gray-700"> Starts Here Today</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Identify the barriers that prevent your business from reaching its
              full potential. Addressing these issues can transform your path to
              success.
            </p>

            <div className="space-y-6">
              <div className="flex items-start md:items-center jusitfy-start space-x-4">
                <img src="/assets/SVG.png" alt="" className="w-6 h-6  mt-1 flex-shrink-0" />
                <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-center gap-2">
                  <h3 className="text-xl font-medium text-gray-900">
                    Inefficient Processes - 
                  </h3>
                  <p className="text-gray-600">
                    Wasting valuable time and resources.
                  </p>
                </div>
              </div>

              <div className="flex items-start md:items-center jusitfy-start space-x-4">
                <img src="/assets/SVG.png" alt="" className="w-6 h-6 flex-shrink-0" />
                <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-center gap-2">
                  <h3 className="text-xl font-medium text-gray-900">
                    Inconsistent Growth - 
                  </h3>
                  <p className="text-gray-600">
                    {" "}Struggling to reach new milestones.
                  </p>
                </div>
              </div>

              <div className="flex items-start md:items-center jusitfy-start space-x-4">
                <img src="/assets/SVG.png" alt="" className="w-6 h-6  flex-shrink-0" />
                <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-center gap-2">
                  <h3 className="text-xl font-medium text-gray-900">
                    Limited Support -  
                  </h3>
                  <p className="text-gray-600 mb-0">
                    {" "}Wasting valuable time and resources.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/assets/challenges.png"
              alt="Professional woman working on laptop with challenge labels"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
