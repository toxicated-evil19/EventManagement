'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-semibold">
            EventPro
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-gray-900">
              Services
            </Link>
            <Link href="#gallery" className="text-gray-700 hover:text-gray-900">
              Gallery
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-gray-900">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}