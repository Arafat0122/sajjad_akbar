import { FaBullseye, FaRocket } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="px-6 py-10 md:py-24 ">
      <div className="mx-auto max-w-7xl">
      
        <h2 className="mb-10 font-serif text-3xl font-extrabold text-center md:mb-20 sm:text-5xl drop-shadow-xl">
          Vision & Mission
        </h2>

        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex-1">
            <img src="./mq.png" alt="" className="object-cover h-full rounded-xl"/>
          </div>
          <div className="flex-1 space-y-10">
 
          <div
            className="flex flex-col items-start gap-6 bg-[#141414] rounded-3xl p-10 shadow-lg border border-[#2A2A2A] hover:shadow-[#D4AF3760] transition-shadow duration-300"
            role="region"
            aria-labelledby="vision-title"
          >
            <div className="flex items-center gap-5 text-[#D4AF37]">
              <FaRocket size={30} aria-hidden="true" />
              <h3
                id="vision-title"
                className="text-3xl font-serif font-semibold text-[#E8C97E]"
              >
                Vision
              </h3>
            </div>
            <p className="text-[#F8F5E3] text-lg leading-relaxed font-serif italic drop-shadow-md">
              To be a beacon of light guiding the global Muslim community toward
              enlightened living by harmonizing timeless Islamic wisdom with
              contemporary knowledge and values.
            </p>
            <p className="text-[#CFC9A9] text-base leading-relaxed font-serif">
              We envision a future where spiritual growth, intellectual curiosity,
              and compassionate action flourish hand in hand, creating lasting
              positive impact.
            </p>
          </div>


          <div
            className="flex flex-col items-start gap-6 bg-[#141414] rounded-3xl p-10 shadow-lg border border-[#2A2A2A] hover:shadow-[#D4AF3760] transition-shadow duration-300"
            role="region"
            aria-labelledby="mission-title"
          >
            <div className="flex items-center gap-5 text-[#D4AF37]">
              <FaBullseye size={30} aria-hidden="true" />
              <h3
                id="mission-title"
                className="text-3xl font-serif font-semibold text-[#E8C97E]"
              >
                Mission
              </h3>
            </div>
            <p className="text-[#F8F5E3] text-lg leading-relaxed font-serif italic drop-shadow-md">
              To craft inspiring content, organize engaging events, and publish
              works that nurture faith, knowledge, and purpose-driven lives
              within Muslim communities worldwide.
            </p>
            <p className="text-[#CFC9A9] text-base leading-relaxed font-serif">
              We commit to authenticity, inclusivity, and fostering connections
              that empower individuals to lead meaningful, balanced lives.
            </p>
          </div>
        </div>
        </div>

        
      </div>
    </section>
  );
};

export default VisionMission;
