// app/page.tsx
import { Metadata } from 'next'
import LandingPage from '@/app/components/landing-page/LandingPage'

export const metadata: Metadata = {
  title: 'EventPro - Creating Unforgettable Experiences',
  description: 'Transform your vision into extraordinary events that leave lasting impressions',
}

export default function Home() {
  return <LandingPage />
}