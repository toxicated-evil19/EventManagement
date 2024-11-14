'use client';
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { TypeAnimation } from 'react-type-animation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Calendar, Gift, Building2, PartyPopper, ChevronRight, LogIn, Menu, X, MapPin, Share2, QrCode, Camera, Instagram, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import Image from 'next/image';

const EventPlannerLanding = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    }
  ];

  const services = [
    { icon: Calendar, title: "Weddings", description: "Create your perfect day" },
    { icon: Building2, title: "Corporate Events", description: "Memorable business gatherings" },
    { icon: PartyPopper, title: "Birthday Parties", description: "Celebrate in style" },
    { icon: Gift, title: "Special Occasions", description: "Custom event solutions" }
  ];

  const galleryItems = [
    { id: 1, type: 'wedding', theme: 'floral', title: 'Elegant Beach Wedding', image: '/images/beach.jpg' },
    { id: 2, type: 'corporate', theme: 'minimalist', title: 'Tech Summit 2024', image: '/images/tech.jpg' },
    { id: 3, type: 'birthday', theme: 'rustic', title: 'Vintage 30th Birthday', image: '/api/placeholder/400/400' },
    { id: 4, type: 'wedding', theme: 'minimalist', title: 'Modern City Wedding', image: '/api/placeholder/400/600' },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const NavigationItems = () => (
    <>
      <NavigationMenuItem>
        <NavigationMenuLink className="text-gray-100 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Services</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink className="text-gray-100 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Gallery</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink className="text-gray-100 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Testimonials</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink className="text-gray-100 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Contact</NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navbar */}
      <nav className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <span className={cn(
              "text-2xl font-semibold transition-colors duration-300",
              isScrolled ? "text-gray-800" : "text-gray-100"
            )}>Events</span>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex items-center space-x-8">
                <NavigationItems />
                <NavigationMenuItem>
                  <Button variant="outline" className="flex items-center gap-2 bg-white/30 hover:bg-white/50 text-gray-800 border-gray-300/50">
                    <LogIn className="w-4 h-4" /> Login
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden" size="icon">
                  <Menu className={cn(
                    "h-6 w-6 transition-colors duration-300",
                    isScrolled ? "text-gray-800" : "text-gray-100"
                  )} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <NavigationItems />
                  <Button className="w-full" variant="outline">
                    <LogIn className="mr-2 h-4 w-4" /> Login
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen w-full flex items-center justify-center overflow-hidden relative">
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('${slide.image}')`,
              opacity: currentSlide === index ? 1 : 0,
              filter: 'brightness(0.4)',
            }}
          />
        ))}

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 absolute w-full ${
                currentSlide === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl/tight font-serif mb-6">
                {slide.title}
              </h1>
            </div>
          ))}

          <div className="h-20 md:h-24 mb-6 mt-32">
            <TypeAnimation
              sequence={[
                'Transform your vision into extraordinary events',
                1000,
                `Celebrate life's special moments with style`,
                1000,
                'Craft memories that last a lifetime',
                1000,
                'Experience the magic of flawless planning',
                1000,
              ]}
              wrapper="p"
              speed={54}
              repeat={Infinity}
              className="text-lg md:text-xl lg:text-2xl opacity-50"
            />
          </div>

          <Button 
            size="lg" 
            className="bg-rose-500 hover:bg-rose-600 text-white animate-pulse mb-16"
          >
            Plan Your Event <ChevronRight className="ml-2 w-4 h-4" />
          </Button>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 md:mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-rose-500" />
                </div>
                <CardTitle className="font-serif">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform duration-300">
                  Learn More <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 container mx-auto px-4">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-serif">Event Gallery</h2>
            <TabsList className="flex-wrap">
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="wedding">Weddings</TabsTrigger>
              <TabsTrigger value="corporate">Corporate</TabsTrigger>
              <TabsTrigger value="birthday">Birthdays</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {galleryItems.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                      <img
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transform transition-transform group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                          <p className="text-sm opacity-75">Click to view details</p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <VisuallyHidden>
                      <DialogTitle>{item.title}</DialogTitle>
                    </VisuallyHidden>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <img src={item.image} alt={item.title} className="w-full rounded-lg" />
                      <div>
                        <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                        <div className="space-y-4">
                          <p className="text-gray-600">Location: Beach Resort, Malibu</p>
                          <p className="text-gray-600">Services: Full Planning, Decor, Catering</p>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Client Testimonial</h4>
                            <p className="italic text-gray-600">"Absolutely perfect in every way. The team made our dream wedding come true!"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center">Book Your Event</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-4 md:p-8">
              <div>
                <div className="flex items-center justify-between mb-6">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className={`text-sm md:text-base w-1/3 text-center ${step === activeStep ? 'font-bold' : 'text-gray-500'}`}>
                      Step {step}
                    </div>
                  ))}
                </div>
                {activeStep === 1 && (
                  <div className="space-y-4">
                    <Input placeholder="Name" />
                    <Input placeholder="Email" />
                    <Input placeholder="Phone Number" />
                    <Button 
                      onClick={() => setActiveStep(2)} 
                      className="w-full md:w-auto"
                    >
                      Next <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                )}
                {activeStep === 2 && (
                  <div className="space-y-4">
                    <div className="relative">
                      <Input 
                        type="date" 
                        placeholder="Event Date" 
                      />
                    </div>
                    <div className="relative">
                      <Input 
                        placeholder="Event Location"
                      />
                      <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                    <Textarea 
                      placeholder="Describe your event" 
                      className="min-h-[100px]"
                    />
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button 
                        variant="outline" 
                        onClick={() => setActiveStep(1)}
                        className="w-full sm:w-auto"
                      >
                        Back
                      </Button>
                      <Button 
                        onClick={() => setActiveStep(3)}
                        className="w-full sm:w-auto"
                      >
                        Next <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
                {activeStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <h3 className="font-medium text-lg">Event Summary</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Contact Information</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span>email@example.com</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span>+1 234 567 8900</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-500">Event Details</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>Selected Date</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>Event Location</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button 
                        variant="outline" 
                        onClick={() => setActiveStep(2)}
                        className="w-full sm:w-auto"
                      >
                        Back
                      </Button>
                      <Button 
                        className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Digital Tools Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 md:mb-12">Digital Tools for Every Event</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <Camera className="w-8 h-8 text-rose-500" />
              </div>
              <CardTitle className="font-serif">Photography</CardTitle>
              <CardDescription>
                Capture every moment with our professional photographers. Real-time photo sharing and instant digital delivery.
              </CardDescription>
              <Button variant="outline" className="mt-4">
                Learn More <Share2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <Instagram className="w-8 h-8 text-rose-500" />
              </div>
              <CardTitle className="font-serif">Social Media</CardTitle>
              <CardDescription>
                Share your event highlights instantly on social platforms. Custom event hashtags and live social walls.
              </CardDescription>
              <Button variant="outline" className="mt-4">
                Learn More <Share2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <QrCode className="w-8 h-8 text-rose-500" />
              </div>
              <CardTitle className="font-serif">QR Invitations</CardTitle>
              <CardDescription>
                Send modern QR code invitations for quick access. Digital RSVPs and guest management system.
              </CardDescription>
              <Button variant="outline" className="mt-4">
                Learn More <Share2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer - New Section */}
      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +1 234 567 8900
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> contact@events.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> 123 Event Street, NY
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-serif mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-rose-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-serif mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-rose-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-rose-400 transition-colors">
                  <Camera className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-rose-400 transition-colors">
                  <Share2 className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-serif mb-4">Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white" 
                />
                <Button className="bg-rose-500 hover:bg-rose-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2024 Events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventPlannerLanding;