import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Mail, Phone, Calendar, Users, Clock, Heart } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";

const BookingSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventDate: "",
      eventTime: "",
      location: "",
      description: ""
    }
  });

  const steps = [
    { number: 1, title: "Personal Details" },
    { number: 2, title: "Event Information" },
    { number: 3, title: "Confirmation" }
  ];

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-white">
      {/* Updated gradient background for better mobile visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/40 to-white pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 text-gray-900">Book Your Event</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Let's create your perfect celebration together
          </p>
        </div>

        {/* Updated Card styling for better mobile clarity */}
        <Card className="max-w-full sm:max-w-3xl mx-auto bg-white/95 shadow-lg border border-rose-100">
          <CardContent className="p-4 sm:p-6 md:p-8">
            {/* Progress bar section with improved mobile visibility */}
            <div className="flex items-center justify-between mb-8 md:mb-10 relative px-5">
        {/* Background line */}
        <div className="absolute h-0.5 bg-rose-100 left-0 right-0 top-5 -z-10" />
        
        {/* Progress line - now using (activeStep - 1) to show progress only up to previous step */}
        <div
          className="absolute h-0.5 bg-rose-500 transition-all duration-500 left-0"
          style={{
            width: `${Math.max(0, ((activeStep - 1) / (steps.length - 1)) * 100)}%`,
            top: "1.25rem"
          }}
        />

        {/* Step circles */}
        <div className="flex items-center justify-between w-full">
          {steps.map((step: { number: number; title: string }) => (
            <div key={step.number} className="relative flex flex-col items-center">
              <div 
                className={`
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center 
                  text-xs sm:text-sm font-medium transition-all duration-500
                  ${step.number === activeStep ? 'bg-rose-500 text-white scale-110 shadow-md' :
                    step.number < activeStep ? 'bg-rose-400 text-white' : 
                    'bg-white text-gray-500 border-2 border-rose-100'}
                `}
              >
                {step.number}
              </div>
              <span 
                className={`
                  text-xs sm:text-sm font-medium hidden sm:block mt-2 whitespace-nowrap
                  ${step.number === activeStep ? 'text-rose-500' :
                    step.number < activeStep ? 'text-rose-400' : 'text-gray-400'}
                `}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                {activeStep === 1 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder="First Name" 
                                className="border-gray-200 focus-visible:ring-rose-500 bg-white" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder="Last Name" 
                                className="border-gray-200 focus-visible:ring-rose-500 bg-white" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              placeholder="Email" 
                              className="border-gray-200 focus-visible:ring-rose-500 bg-white" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              placeholder="Phone Number" 
                              className="border-gray-200 focus-visible:ring-rose-500 bg-white" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="button" 
                      onClick={() => setActiveStep(2)} 
                      className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 shadow-sm"
                    >
                      Next Step <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem className="relative">
                            <FormControl>
                              <Input 
                                type="date" 
                                placeholder="Event Date" 
                                className="border-gray-200 focus-visible:ring-rose-500 bg-white" 
                                {...field} 
                              />
                            </FormControl>
                            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-400 w-4 h-4" />
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="eventTime"
                        render={({ field }) => (
                          <FormItem className="relative">
                            <FormControl>
                              <Input 
                                type="time" 
                                placeholder="Event Time" 
                                className="border-gray-200 focus-visible:ring-rose-500 bg-white" 
                                {...field} 
                              />
                            </FormControl>
                            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-400 w-4 h-4" />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              placeholder="Event Location" 
                              className="border-gray-200 focus-visible:ring-rose-500 bg-white" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your vision..." 
                              className="min-h-[120px] border-gray-200 focus-visible:ring-rose-500 bg-white" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setActiveStep(1)} 
                        className="w-full sm:w-auto border-rose-200 text-rose-500 hover:bg-rose-50 shadow-sm"
                      >
                        Previous Step
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => setActiveStep(3)} 
                        className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 shadow-sm"
                      >
                        Review Details <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-rose-50 p-4 sm:p-6 rounded-xl space-y-4 sm:space-y-6 shadow-sm">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-rose-500" />
                        <h3 className="font-serif text-lg text-gray-900">Event Summary</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium text-gray-900">Contact Details</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-rose-400" />
                              <span className="text-gray-600">{form.getValues("email")}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-rose-400" />
                              <span className="text-gray-600">{form.getValues("phone")}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-medium text-gray-900">Event Details</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-rose-400" />
                              <span className="text-gray-600">
                                {form.getValues("eventDate")} - {form.getValues("eventTime")}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-rose-400" />
                              <span className="text-gray-600">{form.getValues("location")}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setActiveStep(2)} 
                        className="w-full sm:w-auto border-rose-200 text-rose-500 hover:bg-rose-50 shadow-sm"
                      >
                        Previous Step
                      </Button>
                      <Button 
                        type="submit" 
                        className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 shadow-sm animate-pulse"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;