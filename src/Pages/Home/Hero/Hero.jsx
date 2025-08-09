import React, { useEffect, useRef, useState } from 'react';
import './HeroStyle.css';

const slides = [
  {
    video: 'video1.mp4',
    quote: 'A guide in the light of the Quran and Sunnah,',
    highlight: 'sharing timeless wisdom in a modern world.',
    name: 'Sajjad Akbar',
  },
  {
    video: 'video2.mp4',
    quote: 'In pursuit of truth and understanding,',
    highlight: 'bridging ancient wisdom with modern life.',
    name: 'Sajjad Akbar',
  },
  {
    video: 'video3.mp4',
    quote: 'Leading with integrity and compassion,',
    highlight: 'inspiring the hearts of many.',
    name: 'Sajjad Akbar',
  },
  {
    video: 'video4.mp4',
    quote: 'Rooted in tradition, yet embracing change,',
    highlight: 'for a brighter, guided future.',
    name: 'Sajjad Akbar',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <section className="hero-slider-wrapper">
      <div className="hero-slider" ref={sliderRef}>
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <video
              src={slide.video}
              autoPlay
              muted
              loop
              className="slider-video"
            />
            <div className="hero-overlay"></div>
            <div className="hero-text">
              <span className="quote-mark">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-3xl sm:text-4xl text-[#D4AF37] mb-4 mx-auto md:mx-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
              </span>
              <p>
                <em>{slide.quote}</em>{' '}
                <br></br>
                <em className="highlight">{slide.highlight}</em>
              </p>
              <h1>{slide.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
