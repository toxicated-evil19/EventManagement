'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Building2, Cake, HeartHandshake, Music, Camera, ArrowRight } from 'lucide-react'
import { ServiceCard } from './ServiceCard'

const services = [
  {
    icon: Calendar,
    title: "Weddings",
    description: "Create your perfect day with our comprehensive wedding planning services"
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Memorable celebrations for all ages"
  },
  {
    icon: HeartHandshake,
    title: "Social Gatherings",
    description: "Turn any occasion into an unforgettable event"
  },
//   {
//     icon: Camera,
//     title: "Photography",
//     description: "Capture every moment with professional photography"
//   }
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}