import React from 'react';
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Instagram, QrCode, Share2 } from "lucide-react";

const DigitalToolsSection = () => {
  return (
    <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 md:mb-12">Digital Tools for Every Event</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <Camera className="w-8 h-8 text-rose-500" />
              </div>
              <CardTitle className="font-serif">Photography</CardTitle>
              <CardDescription>
                Capture every moment with our professional photographers. Real-time photo sharing and instant digital delivery.
              </CardDescription>
              <Button variant="outline" className="mt-4">
                Learn More <Share2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <Instagram className="w-8 h-8 text-rose-500" />
              </div>
              <CardTitle className="font-serif">Social Media</CardTitle>
              <CardDescription>
                Share your event highlights instantly on social platforms. Custom event hashtags and live social walls.
              </CardDescription>
              <Button variant="outline" className="mt-4">
                Learn More <Share2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <QrCode className="w-8 h-8 text-rose-500" />
              </div>
              <CardTitle className="font-serif">QR Invitations</CardTitle>
              <CardDescription>
                Send modern QR code invitations for quick access. Digital RSVPs and guest management system.
              </CardDescription>
              <Button variant="outline" className="mt-4">
                Learn More <Share2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

  );
};

export default DigitalToolsSection;