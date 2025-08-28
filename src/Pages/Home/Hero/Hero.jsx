import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    type: "video",
    src: "video2.mp4",
    quote: "In pursuit of truth and understanding,",
    highlight: "bridging ancient wisdom with modern life.",
    name: "Sajjad Akbar",
  },
  {
    type: "image",
    src: "https://umudakosanlar.org.tr/Assets/Images/Slider/00033/hz-meryem-cami-ve-egitim-merkezi--video.jpe",
    quote: "",
    highlight: "",
    name: "",
  },
  {
    type: "video",
    src: "video3.mp4",
    quote: "Rooted in tradition, yet embracing change,",
    highlight: "for a brighter, guided future.",
    name: "Sajjad Akbar",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  // Update transform on slide change
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides wrapper */}
      <div
        ref={sliderRef}
        className="flex h-full transition-transform duration-1000 ease-in-out"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative flex-shrink-0 w-full h-full">
            {slide.type === "video" ? (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={slide.src}
                alt="slide"
                className="w-full h-full object-cover"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Text content */}
            {(slide.quote || slide.name) && (
              <div className="absolute bottom-10 left-5 sm:bottom-16 sm:left-10 md:bottom-20 md:left-16 lg:bottom-24 lg:left-24 z-20 text-white max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl px-4 text-left">
                <p className="text-base sm:text-lg md:text-2xl leading-snug font-light">
                  {slide.quote}
                  <br />
                  <span className="font-semibold text-blue-300">
                    {slide.highlight}
                  </span>
                </p>
                <h1 className="mt-3 text-xl sm:text-2xl md:text-4xl font-bold">
                  {slide.name}
                </h1>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-blue-400 w-5 sm:w-6"
                : "bg-white/70 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
