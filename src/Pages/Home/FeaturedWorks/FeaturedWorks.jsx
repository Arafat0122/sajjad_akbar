import worksData from "../../../data/worksData";
import WorkCard from "./WorkCard";

const FeaturedWorks = () => {
    return (
        <section className="relative bg-[#0B0B0B] py-24 px-6 text-white overflow-hidden">

            {/* Main Content */}
            <div className="max-w-6xl mx-auto text-center relative z-10">

                <div className="h-1 w-48 mx-auto mb-12 bg-gradient-to-r from-[#D4AF37] via-[#E8C97E] to-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF3770]"></div>

                <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#F8F5E3] text-center mb-20 drop-shadow-xl">
                    Featured Works
                </h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {worksData.map((work) => (
                        <WorkCard key={work.id} {...work} />
                    ))}
                </div>

                <div className="mt-14">
                    <button className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E8C97E] text-black font-semibold rounded-full transition duration-300 shadow-md">
                        View All
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWorks;