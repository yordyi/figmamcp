'use client'

import React, { useState } from 'react'

const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultation and research.',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: [
      'Requirements gathering',
      'Market research',
      'Competitive analysis',
      'Project timeline creation'
    ]
  },
  {
    id: 2,
    number: '02',
    title: 'Design & Prototype',
    description: 'Our design team creates wireframes, mockups, and interactive prototypes to visualize your project before development begins.',
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    ),
    features: [
      'Wireframe creation',
      'UI/UX design',
      'Interactive prototypes',
      'Design system development'
    ]
  },
  {
    id: 3,
    number: '03',
    title: 'Development & Testing',
    description: 'Our developers bring the designs to life using modern technologies, with rigorous testing at every stage.',
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: [
      'Frontend development',
      'Backend development',
      'Quality assurance',
      'Performance optimization'
    ]
  },
  {
    id: 4,
    number: '04',
    title: 'Launch & Support',
    description: 'We deploy your project and provide ongoing support, maintenance, and updates to ensure optimal performance.',
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: [
      'Project deployment',
      'Performance monitoring',
      'Ongoing maintenance',
      'Feature updates'
    ]
  }
]

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section id="process" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-8">
            <span className="text-green-400 text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined process ensures efficient project delivery while maintaining the highest quality standards.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 transform -translate-y-1/2"></div>
          <div className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transform -translate-y-1/2 transition-all duration-500" style={{ width: `${((activeStep - 1) / (processSteps.length - 1)) * 100}%` }}></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep === step.id ? 'transform scale-105' : ''
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Step Card */}
                <div className={`bg-gray-800 rounded-2xl p-8 border transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'border-blue-500 bg-gray-800/80' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}>
                  {/* Step Number */}
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300 ${
                    activeStep === step.id 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                      : 'bg-gray-700'
                  }`}>
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-6 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="mt-16 bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {processSteps[activeStep - 1].title}
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              {processSteps[activeStep - 1].description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps[activeStep - 1].features.map((feature, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-blue-400 font-semibold text-sm">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Project Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">1-2</div>
              <div className="text-gray-300 text-sm">Weeks</div>
              <div className="text-gray-400 text-xs mt-1">Discovery & Planning</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">2-3</div>
              <div className="text-gray-300 text-sm">Weeks</div>
              <div className="text-gray-400 text-xs mt-1">Design & Prototype</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">4-8</div>
              <div className="text-gray-300 text-sm">Weeks</div>
              <div className="text-gray-400 text-xs mt-1">Development & Testing</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
              <div className="text-gray-300 text-sm">Ongoing</div>
              <div className="text-gray-400 text-xs mt-1">Launch & Support</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}