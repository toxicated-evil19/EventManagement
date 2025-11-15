import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Camera, Share2, ChevronRight, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-serif">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+12345678900" className="flex items-center gap-3 hover:text-rose-400 transition-all duration-300">
                <div className="w-10 h-10 bg-rose-500/10 rounded-full flex items-center justify-center group-hover:bg-rose-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm sm:text-base">+91 9876543210</span>
              </a>
              <a href="mailto:contact@events.com" className="flex items-center gap-3 hover:text-rose-400 transition-all duration-300">
                <div className="w-10 h-10 bg-rose-500/10 rounded-full flex items-center justify-center group-hover:bg-rose-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm sm:text-base">dummy@dummy.com</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-500/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm sm:text-base"></span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-serif">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-rose-400 transition-all duration-300 text-sm sm:text-base"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-serif">Follow Us</h3>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-500/10 rounded-full flex items-center justify-center hover:bg-rose-500/20 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-serif">Newsletter</h3>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 h-10 sm:h-12"
              />
              <Button className="w-full h-10 sm:h-12 bg-rose-500 hover:bg-rose-600 transition-all duration-300">
                Subscribe <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm sm:text-base text-gray-400">© {new Date().getFullYear()} Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
