import worksData from "../../../data/worksData";
import WorkCard from "./WorkCard";

const FeaturedWorks = () => {
  return (
    <section className="relative px-6 py-12 overflow-hidden text-white md:py-24">
      <div className="relative z-10 mx-auto text-center max-w-7xl">
        <h2 className="mb-10 font-serif text-3xl font-extrabold text-center text-black md:mb-20 sm:text-5xl drop-shadow-xl">
          Featured Works
        </h2>

        <div className="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {worksData.map((work) => (
            <WorkCard key={work.id} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
