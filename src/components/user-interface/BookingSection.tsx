import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Mail, Phone, Calendar, Users, Clock, Heart } from "lucide-react";

const BookingSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { number: 1, title: "Personal Details" },
    { number: 2, title: "Event Information" },
    { number: 3, title: "Confirmation" }
  ];

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background with gradient and subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-100/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Book Your Event</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Let's create your perfect celebration together
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-rose-100/20 shadow-xl backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-10 relative">
              <div className="absolute h-0.5 bg-rose-100 w-full top-5 -z-10" />
              <div className="absolute h-0.5 bg-rose-500 transition-all duration-500" 
                   style={{ 
                     width: `${((activeStep - 1) / (steps.length - 1)) * 100}%`,
                     top: "1.25rem"
                   }} 
              />
              
              {steps.map((step) => (
                <div key={step.number} className="flex-1">
                  <div className={`
                    flex flex-col items-center gap-2
                    ${step.number === activeStep ? 'text-rose-500' : 
                      step.number < activeStep ? 'text-rose-400' : 'text-gray-400'}
                  `}>
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                      transition-all duration-500 
                      ${step.number === activeStep ? 'bg-rose-500 text-white scale-110' :
                        step.number < activeStep ? 'bg-rose-400 text-white' : 'bg-rose-50 text-gray-500'}
                    `}>
                      {step.number}
                    </div>
                    <span className="text-sm font-medium hidden md:block">
                      {step.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Step Content */}
            {activeStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input 
                    placeholder="First Name" 
                    className="border-rose-100 focus-visible:ring-rose-500"
                  />
                  <Input 
                    placeholder="Last Name"
                    className="border-rose-100 focus-visible:ring-rose-500"
                  />
                </div>
                <Input 
                  placeholder="Email"
                  className="border-rose-100 focus-visible:ring-rose-500"
                />
                <Input 
                  placeholder="Phone Number"
                  className="border-rose-100 focus-visible:ring-rose-500"
                />
                <Button 
                  onClick={() => setActiveStep(2)} 
                  className="w-full md:w-auto bg-rose-500 hover:bg-rose-600"
                >
                  Next Step <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <Input 
                      type="date" 
                      placeholder="Event Date"
                      className="border-rose-100 focus-visible:ring-rose-500"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-400 w-4 h-4" />
                  </div>
                  <div className="relative">
                    <Input 
                      type="time"
                      placeholder="Event Time"
                      className="border-rose-100 focus-visible:ring-rose-500"
                    />
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-400 w-4 h-4" />
                  </div>
                </div>
                <div className="relative">
                  <Input 
                    placeholder="Event Location"
                    className="border-rose-100 focus-visible:ring-rose-500"
                  />
                  <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-400 w-4 h-4" />
                </div>
                <div className="relative">
                  <Input 
                    placeholder="Number of Guests"
                    type="number"
                    className="border-rose-100 focus-visible:ring-rose-500"
                  />
                  <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-400 w-4 h-4" />
                </div>
                <Textarea 
                  placeholder="Tell us about your vision for the event..." 
                  className="min-h-[120px] border-rose-100 focus-visible:ring-rose-500"
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveStep(1)}
                    className="w-full sm:w-auto border-rose-200 text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                  >
                    Previous Step
                  </Button>
                  <Button 
                    onClick={() => setActiveStep(3)}
                    className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600"
                  >
                    Review Details <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-6">
                <div className="bg-rose-50/50 p-6 rounded-xl space-y-6">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-500" />
                    <h3 className="font-serif text-lg">Event Summary</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-rose-900/70">Contact Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-rose-400" />
                          <span className="text-gray-600">email@example.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-rose-400" />
                          <span className="text-gray-600">+1 234 567 8900</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-rose-900/70">Event Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-rose-400" />
                          <span className="text-gray-600">June 15, 2024 at 3:00 PM</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-rose-400" />
                          <span className="text-gray-600">Sunset Beach Resort</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="w-4 h-4 text-rose-400" />
                          <span className="text-gray-600">150 Guests</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveStep(2)}
                    className="w-full sm:w-auto border-rose-200 text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                  >
                    Previous Step
                  </Button>
                  <Button 
                    className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 animate-pulse"
                  >
                    Confirm Booking
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;