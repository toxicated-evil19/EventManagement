import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Sparkles, Calendar, Award } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      title: 'Creating Unforgettable Experiences',
      subtitle: 'Where Dreams Become Reality'
    },
    {
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
      title: `Celebrate Life's Moments`,
      subtitle: 'Every Detail Perfectly Crafted'
    },
    {
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
      title: 'Professional Excellence',
      subtitle: 'Events That Leave Lasting Impressions'
    },
    {
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
      title: 'Unforgettable Celebrations',
      subtitle: 'Making Every Moment Count'
    }
  ];

  const stats = [
    { icon: Calendar, value: '15+', label: 'Years' },
    { icon: Award, value: '3,200+', label: 'Events' },
    { icon: Sparkles, value: '2,500+', label: 'Happy Clients' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Slides with Parallax Effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentSlide === index ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-[5000ms] ease-out"
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: currentSlide === index ? 'scale(1)' : 'scale(1.1)',
            }}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/20 to-transparent" />
        </div>
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
        {/* Main Title with Slide Transition */}
        <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 mb-4 md:mb-6">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
                currentSlide === index
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-serif mb-3 md:mb-4 tracking-tight">
                {slide.title}
              </h1>
              <div className="flex items-center gap-3 text-rose-200">
                <div className="h-px w-12 bg-rose-400" />
                <p className="text-base sm:text-lg md:text-xl font-light tracking-wide">
                  {slide.subtitle}
                </p>
                <div className="h-px w-12 bg-rose-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Typing Animation */}
        <div className="h-20 sm:h-24 md:h-28 mb-8 md:mb-10 flex items-center justify-center">
          <TypeAnimation
            sequence={[
              'Transform your vision into extraordinary events',
              2000,
              `Celebrate life's special moments with elegance`,
              2000,
              'Craft memories that last a lifetime',
              2000,
              'Experience the magic of flawless planning',
              2000,
            ]}
            wrapper="p"
            speed={60}
            repeat={Infinity}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light max-w-3xl mx-auto"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
          <button className="group relative w-full sm:w-auto bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            <span>Plan Your Event</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button className="group w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105">
            View Our Work
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto mb-12">
          {/* {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-rose-400 mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/70 font-medium">{stat.label}</div>
            </div>
          ))} */}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'bg-white w-10 h-2.5'
                  : 'bg-white/30 hover:bg-white/50 w-2.5 h-2.5'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;