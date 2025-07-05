import React from "react";

const ClientSection = () => {
  const clients = [
    {
      name: "business",
      logo: "/assets/business.png",
      alt: "Business Logo",
    },
    {
      name: "application",
      logo: "/assets/application.png",
      alt: "Application Logo",
    },
    {
      name: "startup",
      logo: "/assets/startup.png", // Replace with your actual image path
      alt: "Startup Logo",
    },
    {
      name: "Logoipsum",
      logo: "/assets/logoipsum.png", // Replace with your actual image path
      alt: "Logoipsum Logo",
    },
    {
      name: "Logoipsun",
      logo: "/assets/logoipsum2.png", // Replace with your actual image path
      alt: "Logoipsun Logo",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-sky-400 to-blue-500 py-16 px-4">
      <div className="w-full mx-auto text-center">
        {/* Header Badge */}
        <div className="inline-block mb-8">
          <span className="bg-white/90 text-[#8DC63F] px-6 py-2 rounded-sm text-sm font-medium">
            OUR CLIENTS
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[22px] md:text-5xl font-medium text-white mb-16 w-full mx-auto leading-tight">
          Trusted by High-Growth
          <br />
          Startups Across Industries
        </h2>

        {/* Client Logos Row */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex flex-nowrap items-center px-4 py-6 space-x-6 min-w-max">
            {clients.map((client, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="h-8 md:h-12  object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                {index < clients.length - 1 && (
                  <div className="w-px h-10 bg-white/30"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
