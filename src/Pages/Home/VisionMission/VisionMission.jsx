import { FaBullseye, FaRocket } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Decorative golden line */}
        <div className="h-1 w-48 mx-auto mb-12 bg-gradient-to-r from-[#D4AF37] via-[#E8C97E] to-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF3770]" />

        {/* Section Title */}
        <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#F8F5E3] text-center mb-20 drop-shadow-xl">
          Vision & Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Vision */}
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

          {/* Mission */}
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
    </section>
  );
};

export default VisionMission;
