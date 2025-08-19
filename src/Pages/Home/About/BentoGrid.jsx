import React from "react";
import poster1 from "/poster1.jpg"; 

const BentoGrid = () => {
  return (
    <div className="px-6 mx-auto md:py-20 max-w-7xl">
     
      <h4 className="pb-10 text-2xl text-black">Sajjad Akbar on Best Work</h4>

    
      <div className="grid gap-4 cursor-pointer md:grid-cols-2">
        
        <div className="md:row-span-2">
          <div className="relative h-[280px] sm:h-[360px] md:h-full min-h-[420px] overflow-hidden">
            <img
              src={poster1}
              alt="Feature"
              className="w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Top Row: 2 images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative overflow-hidden cursor-pointer">
            <img
              src={poster1}
              alt="Poster"
              className="w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden cursor-pointer">
            <img
              src={poster1}
              alt="Poster"
              className="w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Bottom Row: 2 images */}
        <div className="grid grid-cols-1 gap-4">
          <div className="relative overflow-hidden cursor-pointer">
            <img
              src={poster1}
              alt="Poster"
              className="w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
