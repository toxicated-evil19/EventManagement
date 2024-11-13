'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Calendar, Building2, Cake, HeartHandshake, Music, Camera } from 'lucide-react'
import { Navbar } from './Navbar'
import { Hero } from './Hero'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
    </main>
  )
}