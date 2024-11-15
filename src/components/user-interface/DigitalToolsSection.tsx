import React from 'react';
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Instagram, QrCode, Share2 } from "lucide-react";

const DigitalToolsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay - similar to hero section */}
      <div className="absolute inset-0 bg-gray-50/80"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-serif text-gray-900 mb-6">
            Digital Tools for Every Event
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your events with our cutting-edge digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group relative p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-rose-500/10 rounded-full flex items-center justify-center group-hover:bg-rose-500/20 transition-colors duration-300">
                <Camera className="w-10 h-10 text-rose-500" />
              </div>
              <CardTitle className="font-serif text-2xl text-gray-900">Photography</CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Capture every moment with our professional photographers. Real-time photo sharing and instant digital delivery.
              </CardDescription>
              <Button 
                className="mt-4 bg-rose-500 hover:bg-rose-600 text-white transition-colors duration-300"
              >
                Learn More <Share2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>

          <Card className="group relative p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-rose-500/10 rounded-full flex items-center justify-center group-hover:bg-rose-500/20 transition-colors duration-300">
                <Instagram className="w-10 h-10 text-rose-500" />
              </div>
              <CardTitle className="font-serif text-2xl text-gray-900">Social Media</CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Share your event highlights instantly on social platforms. Custom event hashtags and live social walls.
              </CardDescription>
              <Button 
                className="mt-4 bg-rose-500 hover:bg-rose-600 text-white transition-colors duration-300"
              >
                Learn More <Share2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>

          <Card className="group relative p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-rose-500/10 rounded-full flex items-center justify-center group-hover:bg-rose-500/20 transition-colors duration-300">
                <QrCode className="w-10 h-10 text-rose-500" />
              </div>
              <CardTitle className="font-serif text-2xl text-gray-900">QR Invitations</CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Send modern QR code invitations for quick access. Digital RSVPs and guest management system.
              </CardDescription>
              <Button 
                className="mt-4 bg-rose-500 hover:bg-rose-600 text-white transition-colors duration-300"
              >
                Learn More <Share2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DigitalToolsSection;