'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "YouTube Thumbnail Tester & Previewer",
  description: "Test and preview your video thumbnail designs for YouTube. Ensure your content stands out and attracts viewers with our easy-to-use and customizable tool",
};

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en">
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
 <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-red-600">
              ThumbnailTester
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-red-600">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-red-600">
              Features
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-red-600">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-red-600">Home</Link>
            <Link href="/features" className="block px-3 py-2 text-gray-700 hover:text-red-600">Features</Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-red-600">Blog</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">Contact</Link>
          </div>
        )}
      </nav>
    </header>
        {children}

   <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase">About</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-red-600">Company</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-red-600">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-red-600">Careers</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase">Tools</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/thumbnail-tester" className="text-gray-600 hover:text-red-600">Thumbnail Tester</Link></li>
              <li><Link href="/analytics" className="text-gray-600 hover:text-red-600">Analytics</Link></li>
              <li><Link href="/templates" className="text-gray-600 hover:text-red-600">Templates</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/privacy" className="text-gray-600 hover:text-red-600">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-red-600">Terms</Link></li>
              <li><Link href="/cookie-policy" className="text-gray-600 hover:text-red-600">Cookies</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-red-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">...</svg>
              </Link>
              {/* Add other social icons */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} ThumbnailTester. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
      </body>
    </html>
  );
}
