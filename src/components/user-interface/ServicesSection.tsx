import React from 'react';
import { Calendar, Gift, Building2, PartyPopper, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const ServicesSection = () => {
  const services = [
    {
      icon: Calendar,
      title: "Weddings",
      description: "Transform your special day into an unforgettable celebration of love",
      features: ["Venue Selection", "Decor & Design", "Vendor Coordination", "Day-of Management"],
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Create impactful business gatherings that leave lasting impressions",
      features: ["Conference Planning", "Team Building", "Product Launches", "Networking Events"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: PartyPopper,
      title: "Birthday Parties",
      description: "Design extraordinary celebrations that bring joy and excitement",
      features: ["Theme Design", "Entertainment", "Catering Services", "Party Favors"],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Gift,
      title: "Special Occasions",
      description: "Craft bespoke events that capture life's precious moments",
      features: ["Anniversaries", "Engagements", "Baby Showers", "Milestone Celebrations"],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience excellence in event planning with our comprehensive range of services tailored to your unique vision
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-50 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl md:text-3xl font-serif mb-3 text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-rose-500 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <button className="flex items-center gap-2 text-rose-600 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-rose-100 rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-br from-rose-50 to-rose-100/50 rounded-3xl p-8 md:p-12 border border-rose-100">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 text-gray-900">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              We specialize in creating custom events tailored to your specific needs. Let's discuss your vision.
            </p>
            <button className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg">
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;