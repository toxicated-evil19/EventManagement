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
    <section className="relative py-16 md:py-24 container mx-auto px-4 overflow-hidden">
      {/* Background gradient to match hero aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-50/10 pointer-events-none" />
      
      <div className="relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-4">
          Our Services
        </h2>
        <p className="text-base sm:text-lg text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          Experience excellence in event planning with our comprehensive range of services
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-rose-100/20 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-rose-100/80 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-200 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-rose-500 group-hover:text-rose-600 transition-colors duration-300" />
                </div>
                <CardTitle className="font-serif text-xl md:text-2xl mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="group-hover:translate-x-2 transition-all duration-300 text-rose-500 hover:text-rose-600 hover:bg-rose-50/50 p-0"
                >
                  Explore Service 
                  <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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