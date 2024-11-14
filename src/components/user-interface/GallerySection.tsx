import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const GallerySection = () => {
  
    const galleryItems = [
        { id: 1, type: 'wedding', theme: 'floral', title: 'Elegant Beach Wedding', image: '/images/beach.jpg' },
        { id: 2, type: 'corporate', theme: 'minimalist', title: 'Tech Summit 2024', image: '/images/tech.jpg' },
        { id: 3, type: 'birthday', theme: 'rustic', title: 'Vintage 30th Birthday', image: '/api/placeholder/400/400' },
        { id: 4, type: 'wedding', theme: 'minimalist', title: 'Modern City Wedding', image: '/api/placeholder/400/600' },
      ];

  return (
    <section className="py-16 container mx-auto px-4">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-serif">Event Gallery</h2>
            <TabsList className="flex-wrap">
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="wedding">Weddings</TabsTrigger>
              <TabsTrigger value="corporate">Corporate</TabsTrigger>
              <TabsTrigger value="birthday">Birthdays</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {galleryItems.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                      <img
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transform transition-transform group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                          <p className="text-sm opacity-75">Click to view details</p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
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
  );
};

export default GallerySection;