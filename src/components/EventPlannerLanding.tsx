'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import GallerySection from './GallerySection';
import BookingSection from './BookingSection';
import DigitalToolsSection from './DigitalToolsSection';
import Footer from './Footer';

const EventPlannerLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar isScrolled={isScrolled} />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <BookingSection />
      <DigitalToolsSection />
      <Footer />
    </div>
  );
};

export default EventPlannerLanding;