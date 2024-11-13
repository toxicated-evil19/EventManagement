'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {  Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Gift, Building2, PartyPopper, ChevronRight, LogIn, Calendar as CalendarIcon, MapPin, Users, Phone, Mail, Share2, QrCode, Camera, Instagram } from "lucide-react";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const EventPlannerLanding = () => {
  const [activeStep, setActiveStep] = useState(1);
  
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full backdrop-blur-sm bg-white/75 z-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold text-gray-900">EventPro</span>
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex items-center space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-gray-600 hover:text-gray-900 cursor-pointer">Services</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-gray-600 hover:text-gray-900 cursor-pointer">Gallery</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-gray-600 hover:text-gray-900 cursor-pointer">Testimonials</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="outline" className="flex items-center gap-2"><LogIn className="w-4 h-4" /> Login</Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/birthday.jpg')`, filter: 'brightness(0.7)' }} />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Creating Unforgettable Experiences</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Transform your vision into extraordinary events</p>
          <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white">Plan Your Event <ChevronRight className="ml-2 w-4 h-4" /></Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen w-full py-20 container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform duration-300">Learn More <ChevronRight className="ml-2 w-4 h-4" /></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="min-h-screen w-full py-16 container mx-auto px-4">
  <Tabs defaultValue="all" className="mb-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-serif">Event Gallery</h2>
      <TabsList>
        <TabsTrigger value="all">All Events</TabsTrigger>
        <TabsTrigger value="wedding">Weddings</TabsTrigger>
        <TabsTrigger value="corporate">Corporate</TabsTrigger>
        <TabsTrigger value="birthday">Birthdays</TabsTrigger>
      </TabsList>
    </div>
    <TabsContent value="all" className="mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                <img src={item.image} alt={item.title} className="w-full h-[300px] object-cover transform transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                    <p className="text-sm opacity-75">Click to view details</p>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              {/* Accessible Dialog Title */}
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
      <section className="min-h-screen w-full py-16 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center">Book Your Event</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div>
                <div className="flex items-center justify-between">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className={`w-1/3 ${step === activeStep ? 'font-bold' : 'text-gray-500'}`}>
                      Step {step}
                    </div>
                  ))}
                </div>
                {activeStep === 1 && (
                  <div>
                    <Input placeholder="Name" className="mb-4" />
                    <Input placeholder="Email" className="mb-4" />
                    <Input placeholder="Phone Number" className="mb-4" />
                    <Button onClick={() => setActiveStep(2)}>Next</Button>
                  </div>
                )}
                {activeStep === 2 && (
                  <div>
                    <Input placeholder="Event Date" className="mb-4" />
                    <Input placeholder="Event Location" className="mb-4" />
                    <Textarea placeholder="Describe your event" className="mb-4" />
                    <Button onClick={() => setActiveStep(3)}>Next</Button>
                  </div>
                )}
                {activeStep === 3 && (
                  <div className="text-center">
                    <p className="mb-6">Review and submit your event details.</p>
                    <Button>Submit</Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Digital Tools Section */}
      <section className="min-h-screen w-full py-16 container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">Digital Tools for Every Event</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 flex flex-col items-center text-center">
            <Camera className="w-12 h-12 text-rose-500 mb-4" />
            <CardTitle className="font-serif mb-2">Photography</CardTitle>
            <CardDescription>Capture every moment with our professional photographers.</CardDescription>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <Instagram className="w-12 h-12 text-rose-500 mb-4" />
            <CardTitle className="font-serif mb-2">Social Media</CardTitle>
            <CardDescription>Share your event highlights instantly on social platforms.</CardDescription>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <QrCode className="w-12 h-12 text-rose-500 mb-4" />
            <CardTitle className="font-serif mb-2">QR Invitations</CardTitle>
            <CardDescription>Send modern QR code invitations for quick access.</CardDescription>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default EventPlannerLanding;
