import React from "react";

const Travel = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1483247416020-58799b6de4c1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A breathtaking view of a mountain peak at sunset, perfect for adventure lovers And Travlers Also.",
    Loca: `
    Location:Mount Everest  
      `,
  },
];

const Hero = () => {
  return (
    <div className="min-h-screen w-full sm:p-6 md:p-8 ">
      <h1 className="text-center font-bold text-slate-100 text-4xl sm:text-4xl mb-6">
        Travel Chronicles
      </h1>
      <div className="space-y-8 md:space-y-12">
        {Travel.map((item, index) => (
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between "
            key={index}>
            <img
              src={item.image}
              alt={item.description}
              className="object-cover w-full md:w-1/2 rounded-lg mb-4 md:mb-0"
            />
            <div className="md:w-1/2 md:pl-8 space-y-2">
              <h2 className="font-bold text-slate-200 text-2xl sm:text-3xl">
                {item.description}
              </h2>
              <p className="text-l sm:text-xl text-slate-300 font-medium">
                {item.Loca}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
