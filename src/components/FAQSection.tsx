'use client'

import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'What services does SquareUp provide?',
    answer: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in web development, mobile app development, UI/UX design, and digital strategy consulting.'
  },
  {
    id: 2,
    question: 'How can SquareUp help my business?',
    answer: 'We help businesses by creating digital solutions that enhance their online presence, improve user experience, and drive growth. Our team works closely with you to understand your goals and deliver customized solutions.'
  },
  {
    id: 3,
    question: 'What industries does SquareUp work with?',
    answer: 'We work with a diverse range of industries including e-commerce, healthcare, finance, education, real estate, and technology startups. Our adaptable approach allows us to serve various business sectors effectively.'
  },
  {
    id: 4,
    question: 'How long does it take to complete a project with SquareUp?',
    answer: 'Project timelines vary depending on complexity and scope. A typical website project takes 4-8 weeks, while more complex applications may take 3-6 months. We provide detailed timelines during our initial consultation.'
  },
  {
    id: 5,
    question: 'Do you offer ongoing support and maintenance after the project is completed?',
    answer: 'Yes, we provide ongoing support and maintenance services to ensure your digital products continue to perform optimally. Our support packages include regular updates, security monitoring, and technical assistance.'
  },
  {
    id: 6,
    question: 'Can you work with existing design or development frameworks?',
    answer: 'Absolutely! We can work with your existing frameworks, systems, and design guidelines. Our team is experienced in integrating with various technologies and adapting to your current infrastructure.'
  },
  {
    id: 7,
    question: 'How involved will I be in the project development process?',
    answer: 'We believe in collaborative partnerships. You\'ll be involved throughout the process with regular check-ins, milestone reviews, and feedback sessions. We ensure transparency and keep you informed at every step.'
  },
  {
    id: 8,
    question: 'Can you help with website or app maintenance and updates?',
    answer: 'Yes, we offer comprehensive maintenance and update services. This includes content updates, security patches, performance optimization, and feature enhancements to keep your digital products current and secure.'
  }
]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Still you have any questions? Contact our Team via hello@squareup.com
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="bg-dark-800 rounded-2xl border border-dark-700 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-dark-700 transition-colors duration-200"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {String(faq.id).padStart(2, '0')}. {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-green-400 transition-transform duration-200 flex-shrink-0 ${
                    openFAQ === faq.id ? 'rotate-45' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}