import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Mail, Phone, Calendar } from "lucide-react";

const BookingSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
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
  );
};

export default BookingSection;