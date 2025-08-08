import React, { useEffect, useRef, useState } from 'react';
import './HeroStyle.css';

const videoSources = [
  'video1.mp4',
  'video2.mp4',
  'video3.mp4',
  'video4.mp4',
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSources.length);
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
        {videoSources.map((src, index) => (
          <video
            key={index}
            src={src}
            autoPlay
            muted
            loop
            className="slider-video"
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to Sajjad Akbar's World</h1>
          <p>Knowledge • Faith • Wisdom</p>
        </div>
        <div className="image">
          <img src='Sajjad Akbar.png' alt=''></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
