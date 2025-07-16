'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Background with geometric patterns */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800/50 to-dark-900"></div>
        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Small badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8">
            <span className="text-primary-400 text-sm font-medium">✨ Welcome to SquareUp</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">A Digital Product Studio</span>
            <span className="block text-white">that will <span className="gradient-text">Work</span></span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your brand with our innovative digital solutions that strategically 
            engage your audience and drive measurable results.
          </p>
          
          {/* Service tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-dark-800 rounded-full text-gray-300 text-sm">Strategy</span>
            <span className="px-4 py-2 bg-dark-800 rounded-full text-gray-300 text-sm">Enterprise Innovation</span>
            <span className="px-4 py-2 bg-dark-800 rounded-full text-gray-300 text-sm">Media & Publications</span>
            <span className="px-4 py-2 bg-dark-800 rounded-full text-gray-300 text-sm">Social Good</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#services"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Our Work
            </Link>
            <Link
              href="#contact"
              className="bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Dotted border overlay */}
      <div className="absolute inset-4 border-2 border-dashed border-primary-400/30 rounded-lg pointer-events-none"></div>
    </section>
  )
}