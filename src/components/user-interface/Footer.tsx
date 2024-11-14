import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Camera, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +1 234 567 8900
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> contact@events.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> 123 Event Street, NY
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-serif mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-rose-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-serif mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-rose-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-rose-400 transition-colors">
                  <Camera className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-rose-400 transition-colors">
                  <Share2 className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-serif mb-4">Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white" 
                />
                <Button className="bg-rose-500 hover:bg-rose-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2024 Events. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;