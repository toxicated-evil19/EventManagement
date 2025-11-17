import React from 'react';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, Sparkles, User } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const BookingSection = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Schedule Your Consultation</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Share your details and we'll reach out to plan your perfect event.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-rose-50 p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-rose-500 transition-colors" />
                          <Input
                            placeholder="Your Full Name"
                            className="h-14 pl-12 border-gray-200 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:border-rose-500 rounded-xl transition-all text-base"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-rose-500 transition-colors" />
                          <Input
                            type="email"
                            placeholder="Your Email Address"
                            className="h-14 pl-12 border-gray-200 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:border-rose-500 rounded-xl transition-all text-base"
                            {...field}
                          />
                        </div>
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
                        <div className="relative group">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-rose-500 transition-colors" />
                          <Input
                            type="tel"
                            placeholder="Your Phone Number"
                            className="h-14 pl-12 border-gray-200 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:border-rose-500 rounded-xl transition-all text-base"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative group">
                          <Sparkles className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-rose-500 transition-colors" />
                          <Textarea
                            placeholder="Tell us about your event vision, preferred dates, guest count, or any questions you have..."
                            className="min-h-[160px] pl-12 pt-4 border-gray-200 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:border-rose-500 rounded-xl transition-all resize-none text-base"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  We'll get back to you within 24 hours to discuss your perfect event
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;