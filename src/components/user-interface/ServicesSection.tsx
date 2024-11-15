import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Gift, Building2, PartyPopper, ChevronRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Calendar,
      title: "Weddings",
      description: "Transform your special day into an unforgettable celebration of love"
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Create impactful business gatherings that leave lasting impressions"
    },
    {
      icon: PartyPopper,
      title: "Birthday Parties",
      description: "Design extraordinary celebrations that bring joy and excitement"
    },
    {
      icon: Gift,
      title: "Special Occasions",
      description: "Craft bespoke events that capture life's precious moments"
    }
  ];

  return (
    <section className="relative py-8 md:py-16 px-4 sm:px-6 lg:px-8 container mx-auto overflow-hidden">
      {/* Simplified background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-rose-50/50 pointer-events-none"></div>

      <div className="relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-6 md:mb-8">
          Our Services
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-center text-gray-600 mb-8 sm:mb-10 md:mb-16 max-w-xl mx-auto">
          Experience excellence in event planning with our comprehensive range of services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 rounded-lg bg-white"
            >
              <CardHeader>
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-rose-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors duration-300">
                  <service.icon className="w-6 h-6 sm:w-7 text-rose-500 group-hover:text-rose-600 transition-colors duration-300" />
                </div>
                <CardTitle className="font-serif text-lg sm:text-xl text-center">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  variant="ghost"
                  className="group-hover:translate-x-1 transition-transform duration-300 text-rose-500 hover:text-rose-600 hover:bg-rose-50 p-0"
                >
                  Explore Service
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;