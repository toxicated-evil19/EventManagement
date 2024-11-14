import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Event Planner - Creating Unforgettable Experiences',
  description: 'Transform your vision into extraordinary events. Professional event planning services for weddings, corporate events, birthdays, and special occasions.',
  keywords: ['event planning', 'wedding planning', 'corporate events', 'birthday parties'],
  openGraph: {
    title: 'Event Planner - Creating Unforgettable Experiences',
    description: 'Transform your vision into extraordinary events',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Planner - Creating Unforgettable Experiences',
    description: 'Transform your vision into extraordinary events',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
