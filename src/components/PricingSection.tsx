'use client'

import React, { useState } from 'react'

const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    price: 999,
    period: 'project',
    description: 'Perfect for small businesses and startups looking to establish their digital presence.',
    features: [
      'Responsive website design',
      'Basic SEO optimization',
      'Contact form integration',
      'Social media integration',
      '3 months support',
      'Basic analytics setup'
    ],
    limitations: [
      'Up to 5 pages',
      'Basic customization',
      'Standard hosting'
    ],
    popular: false,
    color: 'from-blue-500 to-cyan-500',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Professional',
    price: 2499,
    period: 'project',
    description: 'Ideal for growing businesses that need advanced features and functionality.',
    features: [
      'Custom website design',
      'Advanced SEO optimization',
      'CMS integration',
      'E-commerce functionality',
      '6 months support',
      'Advanced analytics',
      'Performance optimization',
      'Security features'
    ],
    limitations: [
      'Up to 15 pages',
      'Advanced customization',
      'Premium hosting'
    ],
    popular: true,
    color: 'from-purple-500 to-pink-500',
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 4999,
    period: 'project',
    description: 'Comprehensive solution for large organizations with complex requirements.',
    features: [
      'Fully custom development',
      'Advanced integrations',
      'Multi-language support',
      'Custom admin panel',
      '12 months support',
      'Enterprise analytics',
      'Load balancing',
      'Database optimization',
      'Third-party integrations',
      'API development'
    ],
    limitations: [
      'Unlimited pages',
      'Full customization',
      'Enterprise hosting'
    ],
    popular: false,
    color: 'from-green-500 to-teal-500',
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
]

const monthlyPlans = [
  {
    id: 1,
    name: 'Maintenance',
    price: 199,
    period: 'month',
    description: 'Keep your website running smoothly with our maintenance services.',
    features: [
      'Regular updates',
      'Security monitoring',
      'Performance optimization',
      'Content updates',
      'Technical support',
      'Monthly reports'
    ]
  },
  {
    id: 2,
    name: 'Growth',
    price: 499,
    period: 'month',
    description: 'Accelerate your business growth with our ongoing digital services.',
    features: [
      'Everything in Maintenance',
      'SEO optimization',
      'Content creation',
      'Social media management',
      'Email marketing',
      'Analytics reporting'
    ]
  },
  {
    id: 3,
    name: 'Premium',
    price: 999,
    period: 'month',
    description: 'Complete digital transformation with dedicated support.',
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      'Priority support',
      'Custom development',
      'Advanced integrations',
      'Consultation services'
    ]
  }
]

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'project' | 'monthly'>('project')
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  const currentPlans = billingCycle === 'project' ? pricingPlans : monthlyPlans

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full mb-8">
            <span className="text-pink-400 text-sm font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options to suit businesses of all sizes. From startups to enterprises, we have the right solution for you.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-1 flex">
            <button
              onClick={() => setBillingCycle('project')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                billingCycle === 'project'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Project Based
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly Retainer
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative group transition-all duration-500 ${
                hoveredPlan === plan.id ? 'transform scale-105' : ''
              } ${plan.popular ? 'md:-mt-8' : ''}`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Card */}
              <div className={`bg-gray-800 rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-pink-500 bg-gray-800/80' 
                  : 'border-gray-700 hover:border-gray-600'
              } ${hoveredPlan === plan.id ? 'border-pink-500/50' : ''}`}>
                
                {/* Background gradient */}
                {billingCycle === 'project' && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    {billingCycle === 'project' ? plan.icon : (
                      <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{plan.name}</h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 text-lg">/{plan.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-center mb-8">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Limitations */}
                  {billingCycle === 'project' && plan.limitations && (
                    <ul className="space-y-2 mb-8">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-center text-gray-400">
                          <svg className="w-4 h-4 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">What's included in support?</h4>
              <p className="text-gray-300 text-sm">Our support includes bug fixes, security updates, performance monitoring, and technical assistance via email and chat.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">Can I upgrade my plan later?</h4>
              <p className="text-gray-300 text-sm">Yes, you can upgrade your plan at any time. We'll work with you to ensure a smooth transition to your new plan.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">Do you offer custom pricing?</h4>
              <p className="text-gray-300 text-sm">Yes, we offer custom pricing for large enterprises and unique requirements. Contact us to discuss your specific needs.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h4>
              <p className="text-gray-300 text-sm">We accept all major credit cards, PayPal, and bank transfers. Payment plans are available for larger projects.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 border border-pink-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs and budget.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Contact Us for Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}