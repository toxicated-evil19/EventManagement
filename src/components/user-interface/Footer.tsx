import React from 'react';
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook, Sparkles, Heart, Award, Calendar, ArrowRight, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Wedding Planning', href: '#' },
    { name: 'Corporate Events', href: '#' },
    { name: 'Birthday Parties', href: '#' },
    { name: 'Special Occasions', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  ];

  const achievements = [
    { icon: Calendar, value: '15+', label: 'Years' },
    { icon: Heart, value: '3,200+', label: 'Events' },
    { icon: Award, value: '2,500+', label: 'Happy Clients' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold leading-none">
                  EventCraft
                </span>
                <span className="text-[10px] uppercase tracking-wider text-rose-400">
                  Premium Events
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Crafting unforgettable moments and turning dreams into reality since 2009. Your vision, our expertise.
            </p>

            {/* Stats Mini Cards */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:border-rose-500/30 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 text-rose-400 mb-1" />
                  <div className="text-sm font-bold text-white">{item.value}</div>
                  <div className="text-[10px] text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-semibold flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-rose-500 to-rose-600 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-rose-400 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-rose-400 group-hover:scale-150 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-semibold flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-rose-500 to-rose-600 rounded-full" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-rose-400 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-rose-400 group-hover:scale-150 transition-all duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-semibold flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-rose-500 to-rose-600 rounded-full" />
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+919876543210"
                className="group flex items-center gap-3 text-sm text-gray-400 hover:text-rose-400 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 group-hover:border-rose-500/50 group-hover:bg-rose-500/10 transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 9876543210</span>
              </a>
              <a
                href="mailto:dummy@dummy.com"
                className="group flex items-center gap-3 text-sm text-gray-400 hover:text-rose-400 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 group-hover:border-rose-500/50 group-hover:bg-rose-500/10 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span>dummy@dummy.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Event Planning Studio</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`group w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 hover:border-transparent transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-r from-rose-500/10 via-rose-600/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-2">Ready to Create Magic?</h3>
                <p className="text-sm md:text-base text-gray-400">Let's bring your vision to life. Start planning your dream event today.</p>
              </div>
              <button className="group bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap">
                <span>Plan Your Event</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} EventCraft. All rights reserved. Crafted with <Heart className="inline w-4 h-4 text-rose-400" /> for unforgettable moments.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-rose-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-rose-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-rose-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
