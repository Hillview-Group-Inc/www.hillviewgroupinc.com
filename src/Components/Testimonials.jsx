import React from "react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Mayor all, Envato CEO",
      image: "/assets/testimonials1.png",
      quote:
        "Their creativity and dedication were evident from day one. The final design not only looked stunning but also aligned perfectly with our brand values. A fantastic experience from start to finish!",
    },
    {
      id: 2,
      name: "Mayor all, Envato CEO",
      image: "/assets/testimonials2.png",
      quote:
        "Their creativity and dedication were evident from day one. The final design not only looked stunning but also aligned perfectly with our brand values. A fantastic experience from start to finish!",
    },
    {
      id: 3,
      name: "Mayor all, Envato CEO",
      image: "/assets/testimonials3.png",
      quote:
        "Their creativity and dedication were evident from day one. The final design not only looked stunning but also aligned perfectly with our brand values. A fantastic experience from start to finish!",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-[#8DC63F] text-white rounded-sm text-sm font-medium uppercase tracking-wide mb-6">
            Our Clients
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
            Relied on by Companies Globally
          </h2>
        </div>

        {/* Testimonials Horizontal Scroll */}
        <div className="overflow-x-auto testimonial-scroll-container">
          <div className="flex gap-6 pb-4 w-max testimonial-scroll-inner">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#25AAE1] h-[288px] shadow-sm flex items-center justify-center w-[503px] rounded-[24px] px-4 flex-shrink-0"
              >
                {/* Left side - Image */}
                <div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[210px] h-[256px] object-cover"
                  />
                </div>

                {/* Right side - Content */}
                <div className="flex-1 flex-col p-6 text-white">
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <img src="/assets/quotes.png" alt="" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-white text-sm leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">
                      - {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
