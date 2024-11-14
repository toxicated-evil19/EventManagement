import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    {
      image: '/images/birthday.jpg',
      title: 'Creating Unforgettable Experiences',
      subtitle: 'Transform your vision into extraordinary events',
      accent: 'from-rose-500 to-purple-500'
    },
    {
      image: '/images/beach.jpg',
      title: `Celebrate Life's Moments`,
      subtitle: 'Design your perfect celebration',
      accent: 'from-blue-500 to-teal-500'
    },
    {
      image: '/images/tech.jpg',
      title: 'Professional Excellence',
      subtitle: 'Corporate events that leave lasting impressions',
      accent: 'from-amber-500 to-rose-500'
    }
  ];

  useEffect(() => {
    setIsLoading(false);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const words = [
    "Transform your vision into extraordinary events",
    "Celebrate life's special moments with style",
    "Craft memories that last a lifetime",
    "Experience the magic of flawless planning"
  ];

  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, isDeleting, currentWord]);

  const tick = () => {
    let fullText = words[currentWord];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(200);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
      setDelta(100);
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center overflow-hidden relative bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-90" />
      
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out transform
            ${currentSlide === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            filter: 'brightness(0.4)',
          }}
        />
      ))}

      {/* Animated noise overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat animate-noise" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className={`relative container mx-auto px-4 text-center text-white transition-all duration-1000 
        ${isLoading ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        
        {/* Sliding titles */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 absolute w-full ${
              currentSlide === index
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif mb-6 tracking-tight">
              <span className={`bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}>
                {slide.title}
              </span>
            </h1>
          </div>
        ))}

        {/* Typing effect */}
        <div className="h-20 md:h-24 mb-6 mt-32">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Animated buttons */}
        <div className="space-y-6">
          <Button
            size="lg"
            className={`bg-gradient-to-r ${slides[currentSlide].accent} hover:opacity-90 
              text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg
              group relative overflow-hidden`}
          >
            <span className="relative z-10 flex items-center">
              Plan Your Event 
              <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </Button>

          <div>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 
                transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Enhanced carousel indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 rounded-full 
                ${currentSlide === index
                  ? `w-12 h-1.5 bg-gradient-to-r ${slides[index].accent}`
                  : 'w-3 h-1.5 bg-white/30 hover:bg-white/50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;