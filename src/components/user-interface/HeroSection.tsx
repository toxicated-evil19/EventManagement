import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { TypeAnimation } from 'react-type-animation';
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/birthday.jpg',
      title: 'Creating Unforgettable Experiences',
      subtitle: 'Transform your vision into extraordinary events'
    },
    {
      image: '/images/beach.jpg',
      title: `Celebrate Life's Moments`,
      subtitle: 'Design your perfect celebration'
    },
    {
      image: '/images/tech.jpg',
      title: 'Professional Excellence',
      subtitle: 'Corporate events that leave lasting impressions'
    },
    {
      image: 'https://images.unsplash.com/photo-1567530331069-630c6a3926f3?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Family-Friendly Events',
      subtitle: 'Make your event more enjoyable for guests'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${slide.image}')`,
            opacity: currentSlide === index ? 1 : 0,
            filter: 'brightness(0.5)',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 absolute w-full ${
              currentSlide === index
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-tight font-serif mb-6">
              {slide.title}
            </h1>
          </div>
        ))}

        <div className="h-16 sm:h-20 md:h-24 mb-6 mt-24 sm:mt-32">
          <TypeAnimation
            sequence={[
              'Transform your vision into extraordinary events',
              2000,
              `Celebrate life's special moments with style`,
              2000,
              'Craft memories that last a lifetime',
              2000,
              'Experience the magic of flawless planning',
              2000,
            ]}
            wrapper="p"
            speed={60}
            repeat={Infinity}
            className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-60"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white animate-pulse"
          >
            Plan Your Event <ChevronRight className="ml-2 w-4 h-4" />
          </Button>

          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gray-100 text-rose-500 hover:text-rose-600 hover:bg-gray-300"
          >
            Learn More
          </Button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white/40 w-5'
                  : 'bg-white/20'
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