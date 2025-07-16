'use client'

import React, { useState } from 'react'

const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce solution with advanced features and seamless user experience.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure and intuitive mobile banking application with biometric authentication.',
    image: '/api/placeholder/600/400',
    tags: ['React Native', 'Firebase', 'Biometrics', 'API'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    category: 'UI/UX Design',
    description: 'Comprehensive healthcare management dashboard for medical professionals.',
    image: '/api/placeholder/600/400',
    tags: ['Figma', 'User Research', 'Prototyping', 'Testing'],
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    title: 'Food Delivery App',
    category: 'Full Stack',
    description: 'Complete food delivery solution with real-time tracking and payment integration.',
    image: '/api/placeholder/600/400',
    tags: ['Flutter', 'Express', 'PostgreSQL', 'Maps'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'Learning Management System',
    category: 'Web Development',
    description: 'Comprehensive LMS platform for educational institutions and corporate training.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'Django', 'Video Streaming', 'Analytics'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    category: 'Full Stack',
    description: 'Advanced real estate platform with virtual tours and property management.',
    image: '/api/placeholder/600/400',
    tags: ['Vue.js', 'Laravel', 'VR', 'Maps'],
    color: 'from-pink-500 to-rose-500'
  }
]

const stats = [
  { number: '500+', label: 'Projects Completed', icon: '🚀' },
  { number: '200+', label: 'Happy Clients', icon: '😊' },
  { number: '50+', label: 'Team Members', icon: '👥' },
  { number: '99%', label: 'Success Rate', icon: '📈' }
]

export default function AboutPortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Full Stack']

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8">
                <span className="text-purple-400 text-sm font-medium">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                We Are <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Creative</span> Digital Agency
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                With over 5 years of experience in the digital industry, we specialize in creating 
                innovative solutions that help businesses grow and succeed in the digital world.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Expert team of designers and developers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Cutting-edge technology and tools</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn More About Us
              </button>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <span className="text-blue-400 text-sm font-medium">Our Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Recent <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-500 ${
                  hoveredItem === item.id ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-4xl font-bold opacity-50">
                      {item.category.split(' ')[0]}
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      View Project
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-400 font-medium">{item.category}</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}