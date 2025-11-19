import React from 'react';
import { Award, Users, Calendar, Heart, Sparkles, Target } from "lucide-react";
import { motion } from "motion/react";

const AboutSection = () => {
  const stats = [
    { icon: Calendar, label: "Years of Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "2,500+" },
    { icon: Heart, label: "Events Completed", value: "3,200+" },
    // { icon: Award, label: "Industry Awards", value: "25+" }
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Creativity & Innovation",
      description: "We bring fresh, unique ideas to every event, ensuring your celebration stands out and leaves lasting memories."
    },
    {
      icon: Target,
      title: "Attention to Detail",
      description: "From the grandest elements to the smallest touches, we meticulously plan every aspect of your special day."
    },
    {
      icon: Heart,
      title: "Passion & Dedication",
      description: "Your vision becomes our mission. We're committed to bringing your dream event to life with heart and soul."
    }
  ];

  return (
    <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6">About Us</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting unforgettable moments and turning dreams into reality since 2009
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="mb-16 md:mb-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-rose-600">Our Story</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-sm sm:text-base">
                  Founded with a passion for creating extraordinary experiences, we've grown from a small team of dreamers into a full-service event planning company trusted by thousands.
                </p>
                <p className="text-sm sm:text-base">
                  Every event we plan is a reflection of our commitment to excellence, creativity, and personalized service. We believe that no two celebrations are alike, and we pride ourselves on tailoring every detail to match your unique vision.
                </p>
                <p className="text-sm sm:text-base">
                  Whether it's an intimate gathering or a grand celebration, we bring the same level of dedication, expertise, and attention to detail that has made us a leader in the event planning industry.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                  alt="Event planning team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-rose-50 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-br from-rose-50 to-rose-100/50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                >
                  <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-rose-500 mx-auto mb-3 md:mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <div>
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            What Drives Us
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-rose-50"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <div className="bg-rose-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-5 md:mb-6">
                  <value.icon className="w-7 h-7 md:w-8 md:h-8 text-rose-600" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{value.title}</h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-16 md:mt-20 text-center">
          <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">Ready to Create Magic Together?</h3>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
              Let's bring your vision to life. Every great event starts with a conversation.
            </p>
            <button className="bg-white text-rose-600 px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-rose-50 transition-colors duration-300 shadow-lg">
              Start Planning Your Event
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
