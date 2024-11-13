'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg" // Replace with your image path
          alt="Event venue"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold animate-fade-in">
            Creating Unforgettable Experiences
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-slide-up">
            Transform your vision into extraordinary events that leave lasting impressions
          </p>
          <Button size="lg" className="animate-bounce-subtle mt-8">
            Plan Your Event
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}