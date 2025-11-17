'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/user-interface/Navbar';
import HeroSection from '@/components/user-interface/HeroSection';
import AboutSection from '@/components/user-interface/AboutSection';
import ServicesSection from '@/components/user-interface/ServicesSection';
import GallerySection from '@/components/user-interface/GallerySection';
import BookingSection from '@/components/user-interface/BookingSection';
import DigitalToolsSection from '@/components/user-interface/DigitalToolsSection';
import Footer from '@/components/user-interface/Footer';

const EventPlannerLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 900);

    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar isScrolled={isScrolled} />
      <HeroSection />
      <AboutSection/>
      <ServicesSection />
      <GallerySection />
      <BookingSection />
      {/* <DigitalToolsSection /> */}
      <Footer />
    </div>
  );
};

export default EventPlannerLanding;