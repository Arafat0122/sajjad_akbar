import sajjadImage from "/Hero Section Sajjad Akbar.png";
import { FaQuoteLeft } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-[#0B0B0B] w-full text-white">
      <div
        className="relative w-full max-w-6xl mx-auto px-6 md:px-12 h-[520px] sm:h-[580px] md:h-[620px] flex items-end md:items-center"
        style={{
          backgroundImage: `url(${sajjadImage})`,
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        {/* Quote & Name */}
        <div className="w-full md:w-1/2 bg-gradient-to-b from-transparent to-black/90 md:bg-none md:bg-transparent py-8 sm:py-12 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            {/* Quote icon */}
            <FaQuoteLeft className="text-3xl sm:text-4xl text-[#D4AF37] mb-4 mx-auto md:mx-0" />

            {/* Quote */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif italic text-[#F8F5E3] leading-relaxed drop-shadow-md">
              A guide in the light of the Quran and Sunnah,
              <br className="hidden sm:block" />
              <span className="text-[#E8C97E] font-semibold">
                sharing timeless wisdom in a modern world.
              </span>
            </p>

            {/* Name */}
            <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-[#F8F5E3] drop-shadow-xl">
              Sajjad Akbar
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
