'use client'

import React, { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: '/api/placeholder/80/80',
    content: 'Working with this team has been absolutely fantastic. They delivered a beautiful, functional website that exceeded our expectations. The attention to detail and professional approach made the entire process smooth and enjoyable.',
    rating: 5,
    project: 'E-commerce Platform',
    result: '300% increase in online sales'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'InnovateLab',
    image: '/api/placeholder/80/80',
    content: 'The mobile app they developed for us is phenomenal. User engagement has increased dramatically, and the feedback from our customers has been overwhelmingly positive. Highly recommend their services.',
    rating: 5,
    project: 'Mobile App Development',
    result: '250% user engagement boost'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthCorp',
    image: '/api/placeholder/80/80',
    content: 'Their digital marketing strategy transformed our online presence. We saw immediate results in terms of traffic and conversions. The team is knowledgeable, responsive, and truly cares about our success.',
    rating: 5,
    project: 'Digital Marketing Campaign',
    result: '400% increase in web traffic'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CTO',
    company: 'DataFlow Systems',
    image: '/api/placeholder/80/80',
    content: 'The technical expertise and problem-solving skills of this team are outstanding. They helped us build a complex system that scales perfectly with our growing user base. Excellent communication throughout.',
    rating: 5,
    project: 'Enterprise Software',
    result: '99.9% system uptime achieved'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'VP of Operations',
    company: 'RetailMax',
    image: '/api/placeholder/80/80',
    content: 'From initial consultation to final delivery, the entire experience was professional and efficient. They understood our vision and brought it to life with exceptional quality and attention to detail.',
    rating: 5,
    project: 'Brand Redesign',
    result: '180% brand recognition increase'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Product Manager',
    company: 'HealthTech Pro',
    image: '/api/placeholder/80/80',
    content: 'The UI/UX design work was incredible. They created an intuitive, beautiful interface that our users love. The design process was collaborative and the final result exceeded all expectations.',
    rating: 5,
    project: 'Healthcare Dashboard',
    result: '95% user satisfaction rate'
  }
]

export default function EnhancedTestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlay])

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-8">
            <span className="text-yellow-400 text-sm font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-700 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-orange-600/10 rounded-full blur-3xl"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-yellow-400/20">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl md:text-3xl text-white font-medium mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold text-white">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-yellow-400 font-semibold text-sm">
                        {testimonials[currentTestimonial].project}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonials[currentTestimonial].result}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client Avatar */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">
                        {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-4">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentTestimonial === index ? 'bg-yellow-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Auto-play Toggle */}
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`p-3 rounded-full transition-colors ${
                  isAutoPlay ? 'bg-yellow-500 text-white' : 'bg-gray-700 text-gray-300'
                }`}
              >
                {isAutoPlay ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer ${
                currentTestimonial === index ? 'border-yellow-400/50 bg-gray-800/50' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                "{testimonial.content.length > 150 ? testimonial.content.substring(0, 150) + '...' : testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-yellow-400 text-xs font-medium">{testimonial.project}</span>
                  <span className="text-gray-400 text-xs">{testimonial.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-600/10 border border-yellow-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. Your success story could be next!
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}