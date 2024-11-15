import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { MapPin, CalendarDays, Users, Heart } from "lucide-react";

const GallerySection = () => {

  const galleryItems = [
    {
      id: 1,
      type: 'wedding',
      theme: 'floral',
      title: 'Elegant Beach Wedding',
      image: '/images/beach.jpg',
      location: 'Sunset Beach Resort, Malibu',
      date: 'June 15, 2024',
      guests: '200 Guests',
      services: ['Full Planning', 'Decor', 'Catering', 'Photography']
    },
    {
      id: 2,
      type: 'corporate',
      theme: 'minimalist',
      title: 'Tech Summit 2024',
      image: '/images/tech.jpg',
      location: 'Innovation Center, Silicon Valley',
      date: 'March 28, 2024',
      guests: '500 Attendees',
      services: ['Venue Setup', 'Technical Support', 'Catering', 'Registration']
    },
    {
      id: 3,
      type: 'birthday',
      theme: 'rustic',
      title: 'Vintage 30th Birthday',
      image: 'https://plus.unsplash.com/premium_photo-1691688120469-b03c249e7158?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Rustic Barn & Gardens',
      date: 'April 12, 2024',
      guests: '100 Guests',
      services: ['Theme Design', 'Decoration', 'Entertainment', 'Catering']
    },
    {
      id: 4,
      type: 'wedding',
      theme: 'minimalist',
      title: 'Modern City Wedding',
      image: 'https://plus.unsplash.com/premium_photo-1681841703443-53de247ce32b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Metropolitan Hotel, Downtown',
      date: 'May 20, 2024',
      guests: '150 Guests',
      services: ['Full Planning', 'Venue Coordination', 'Floral Design', 'Catering']
    },
    {
      id: 5,
      type: 'wedding',
      theme: 'minimalist',
      title: 'Modern City Wedding',
      image: 'https://plus.unsplash.com/premium_photo-1681841703443-53de247ce32b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Metropolitan Hotel, Downtown',
      date: 'May 20, 2024',
      guests: '150 Guests',
      services: ['Full Planning', 'Venue Coordination', 'Floral Design', 'Catering']
    },
    {
      id: 6,
      type: 'wedding',
      theme: 'minimalist',
      title: 'Modern City Wedding',
      image: 'https://plus.unsplash.com/premium_photo-1681841703443-53de247ce32b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Metropolitan Hotel, Downtown',
      date: 'May 20, 2024',
      guests: '150 Guests',
      services: ['Full Planning', 'Venue Coordination', 'Floral Design', 'Catering']
    },
  ];

  return (
    <section className="py-12 md:py-16 container mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/5 to-transparent pointer-events-none" />

      <Tabs defaultValue="all" className="relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Event Gallery</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto sm:mx-0">
              Explore our curated collection of extraordinary events and celebrations
            </p>
          </div>
          <TabsList className="flex-wrap bg-rose-50/50 p-1 rounded-full">
            {['all', 'wedding', 'birthday'].map((tab) => (
              <TabsTrigger 
                key={tab} 
                value={tab}
                className="data-[state=active]:bg-rose-500 data-[state=active]:text-white px-4 sm:px-6 rounded-full capitalize transition-all duration-300"
              >
                {tab === 'all' ? 'All Events' : `${tab}s`}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {galleryItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div className="relative group cursor-pointer overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transform transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                      <div className="text-white p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-1 sm:mb-2">{item.title}</h3>
                        <p className="text-rose-200 text-xs sm:text-sm">{item.location}</p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto p-4 sm:p-6">
                  <VisuallyHidden>
                    <DialogTitle>{item.title}</DialogTitle>
                  </VisuallyHidden>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full rounded-xl object-cover h-[250px] sm:h-[350px] md:h-[400px]" 
                    />
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">{item.title}</h3>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                            <MapPin className="w-4 h-4 text-rose-500" />
                            <span className="text-sm sm:text-base">{item.location}</span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                            <CalendarDays className="w-4 h-4 text-rose-500" />
                            <span className="text-sm sm:text-base">{item.date}</span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                            <Users className="w-4 h-4 text-rose-500" />
                            <span className="text-sm sm:text-base">{item.guests}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 sm:mb-3">Services Provided</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.services.map((service, index) => (
                            <span 
                              key={index}
                              className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs sm:text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-rose-50/50 p-4 sm:p-6 rounded-xl">
                        <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
                          <h4 className="font-medium text-sm sm:text-base">Client Testimonial</h4>
                        </div>
                        <p className="italic text-gray-600 text-sm sm:text-base">
                          "Absolutely perfect in every way. The team's attention to detail and dedication made our dream event come true!"
                        </p>
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
  );
};

export default GallerySection;
