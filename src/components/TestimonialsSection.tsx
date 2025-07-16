'use client'

import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO of One.Boutique',
    content: 'SquareUp has been instrumental in transforming our online presence. Their team\'s expertise in web development and design resulted in a visually stunning and user-friendly website. We saw a significant increase in online engagement and conversions.',
    image: '/api/placeholder/60/60'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Founder of DesignWorks',
    content: 'Working with SquareUp was a breeze. They understood our vision and delivered outstanding results. The team was professional, responsive, and delivered the project on time and within budget.',
    image: '/api/placeholder/60/60'
  },
  {
    id: 3,
    name: 'Mark Thompson',
    role: 'CEO of EventMakers',
    content: 'SquareUp developed a comprehensive booking and reservation system for our event management company. The platform is robust, user-friendly, and has streamlined our operations significantly.',
    image: '/api/placeholder/60/60'
  },
  {
    id: 4,
    name: 'Laura Adams',
    role: 'CEO of ProTech Solutions',
    content: 'ProTech Solutions turned to SquareUp to automate our workflow. Their solution streamlined our productivity and reduced manual tasks. Exceptional expertise and professionalism have made them a trusted technology partner.',
    image: '/api/placeholder/60/60'
  },
  {
    id: 5,
    name: 'Michael Anderson',
    role: 'Founder of Bryant Estate Realty',
    content: 'SquareUp designed and developed a captivating website for our real estate listings. The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes with ease.',
    image: '/api/placeholder/60/60'
  },
  {
    id: 6,
    name: 'Emily Taylor',
    role: 'CEO of FitLife Tracker',
    content: 'FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans. SquareUp delivered with a feature-rich app that has helped our users achieve their fitness goals.',
    image: '/api/placeholder/60/60'
  }
]

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0)

  return (
    <section className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What our Clients say About us
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-green-400/50 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedTestimonial(index)}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                {testimonial.content}
              </p>
              
              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              {/* Open Website Button */}
              <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Open Website
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}