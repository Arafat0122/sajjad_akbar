import React from "react";
import poster1 from "/poster1.jpg"; // Replace with real posters/images

const projects = [
  {
    id: 1,
    title: "Islamic Education Platform",
    description: "An online space for learning Quran and Sunnah interactively.",
    img: poster1,
    span: "row-span-2",
  },
  {
    id: 2,
    title: "Lighthouse Mentoring",
    description: "Personal guidance and spiritual mentoring programs.",
    img: poster1,
  },
  {
    id: 3,
    title: "Community Workshops",
    description: "Hands-on workshops to build skills and strengthen faith.",
    img: poster1,
  },
  {
    id: 4,
    title: "Digital Media Channel",
    description: "Sharing authentic knowledge through engaging content.",
    img: poster1,
  },
];

const BentoGrid = () => {
  return (
    <div className="px-6 mx-auto md:pb-20 max-w-7xl">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h4 className="text-3xl font-extrabold text-gray-900 mb-2">
          Sajjad Akbar’s Best Work
        </h4>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Explore some of the highlighted projects and initiatives that showcase
          dedication, creativity, and impact.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2 auto-rows-[200px] sm:auto-rows-[280px] md:auto-rows-[320px]">
        {projects.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition-all duration-500 ${item.span}`}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Text Content */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 text-white">
              <h5 className="text-lg font-bold">{item.title}</h5>
              <p className="text-sm text-gray-200">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
