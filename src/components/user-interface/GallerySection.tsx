import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { MapPin, CalendarDays, Users, Heart, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'wedding',
      theme: 'floral',
      title: 'Elegant Beach Wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
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
      type: 'birthday',
      theme: 'colorful',
      title: 'Garden Birthday Party',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
      location: 'Botanical Gardens',
      date: 'May 20, 2024',
      guests: '80 Guests',
      services: ['Theme Planning', 'Outdoor Setup', 'Kids Entertainment', 'Catering']
    },
    {
      id: 6,
      type: 'corporate',
      theme: 'elegant',
      title: 'Annual Gala Dinner',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
      location: 'Grand Ballroom',
      date: 'August 15, 2024',
      guests: '300 Guests',
      services: ['Full Production', 'Stage Design', 'Fine Dining', 'Entertainment']
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.type === activeFilter);

  const filters = [
    { value: 'all', label: 'All Events', icon: Sparkles },
    { value: 'wedding', label: 'Weddings', icon: Heart },
    { value: 'corporate', label: 'Corporate', icon: Users },
    { value: 'birthday', label: 'Birthdays', icon: CalendarDays }
  ];

  return (
    <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Event Gallery
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Explore our curated collection of extraordinary events and celebrations that showcase our passion for perfection
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-rose-50 border border-rose-100 hover:border-rose-300 hover:shadow-md'
                }`}
              >
                <filter.icon className="w-4 h-4" />
                <span className="text-sm md:text-base">{filter.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-rose-500 text-white text-xs font-semibold rounded-full mb-3 capitalize">
                        {item.type}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif text-white mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-rose-200 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  {/* <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                    <Sparkles className="w-5 h-5 text-rose-500" />
                    Click
                  </div> */}
                </div>
              </DialogTrigger>

              {/* Modal Content */}
              <DialogContent className="max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto p-0 overflow-hidden bg-white rounded-3xl">
                <VisuallyHidden>
                  <DialogTitle>{item.title}</DialogTitle>
                </VisuallyHidden>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative h-[300px] md:h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content Side */}
                  <div className="p-6 md:p-8 space-y-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 text-xs font-semibold rounded-full mb-3 capitalize">
                        {item.type} Event
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif mb-4 text-gray-900">{item.title}</h3>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-600">
                          <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-rose-500" />
                          </div>
                          <span className="text-sm md:text-base">{item.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                            <CalendarDays className="w-5 h-5 text-rose-500" />
                          </div>
                          <span className="text-sm md:text-base">{item.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-rose-500" />
                          </div>
                          <span className="text-sm md:text-base">{item.guests}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Services Provided</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="bg-rose-50 text-rose-600 px-4 py-2 rounded-full text-xs md:text-sm font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-rose-50 to-rose-100/50 p-5 rounded-2xl border border-rose-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                        <h4 className="font-semibold text-gray-900">Client Testimonial</h4>
                      </div>
                      <p className="italic text-gray-700 text-sm md:text-base leading-relaxed">
                        "Absolutely perfect in every way. The team's attention to detail and dedication made our dream event come true!"
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-10 h-10 text-rose-500" />
            </div>
            <h3 className="text-xl font-serif text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
