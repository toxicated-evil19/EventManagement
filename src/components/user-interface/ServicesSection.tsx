import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Gift, Building2, PartyPopper, ChevronRight } from "lucide-react";

const ServicesSection = () => {
    const services = [
        { icon: Calendar, title: "Weddings", description: "Create your perfect day" },
        { icon: Building2, title: "Corporate Events", description: "Memorable business gatherings" },
        { icon: PartyPopper, title: "Birthday Parties", description: "Celebrate in style" },
        { icon: Gift, title: "Special Occasions", description: "Custom event solutions" }
      ];

  return (
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
  );
};

export default ServicesSection;