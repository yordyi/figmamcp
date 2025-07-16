'use client'

import { useState } from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Creative Director',
    image: '/api/placeholder/300/400',
    bio: 'With over 10 years of experience in digital design, Alex leads our creative vision.',
    skills: ['Design Strategy', 'Creative Direction', 'Brand Development'],
    social: {
      twitter: '#',
      linkedin: '#',
      dribbble: '#'
    }
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Lead Developer',
    image: '/api/placeholder/300/400',
    bio: 'Sarah specializes in modern web technologies and full-stack development.',
    skills: ['React', 'Node.js', 'TypeScript'],
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'Mike Rodriguez',
    role: 'UX Designer',
    image: '/api/placeholder/300/400',
    bio: 'Mike focuses on creating intuitive user experiences and interface design.',
    skills: ['User Research', 'Prototyping', 'Interaction Design'],
    social: {
      behance: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Marketing Strategist',
    image: '/api/placeholder/300/400',
    bio: 'Emily develops comprehensive digital marketing strategies for our clients.',
    skills: ['SEO', 'Content Strategy', 'Analytics'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  }
]

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '5', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }
]

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('team')

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Our Agency</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a passionate team of designers, developers, and digital strategists 
            dedicated to creating exceptional digital experiences.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-dark-800 rounded-lg p-1 flex">
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'team' 
                  ? 'bg-primary-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('team')}
            >
              Our Team
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'story' 
                  ? 'bg-primary-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('story')}
            >
              Our Story
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'values' 
                  ? 'bg-primary-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('values')}
            >
              Our Values
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'team' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeInUp">
              {teamMembers.map((member) => (
                <div key={member.id} className="group">
                  <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-primary-400/50 transition-all duration-300 card-hover">
                    {/* Avatar */}
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    {/* Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary-400 text-sm mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-1 justify-center mb-4">
                        {member.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex justify-center space-x-3">
                        {Object.entries(member.social).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            className="w-8 h-8 bg-dark-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                          >
                            <span className="text-xs text-gray-400 hover:text-white">
                              {platform[0].toUpperCase()}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'story' && (
            <div className="max-w-4xl mx-auto animate-fadeInUp">
              <div className="bg-dark-800 rounded-2xl p-8 md:p-12 border border-dark-700">
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Our Journey
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Founded in 2019, our digital agency started with a simple mission: 
                    to help businesses thrive in the digital world through innovative 
                    design and technology solutions.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    What began as a small team of passionate creatives has grown into 
                    a full-service digital agency. We've had the privilege of working 
                    with startups, established businesses, and everything in between.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Today, we continue to push boundaries, embrace new technologies, 
                    and deliver exceptional results for our clients. Our commitment 
                    to excellence and innovation remains at the core of everything we do.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeInUp">
              <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Excellence
                </h3>
                <p className="text-gray-300">
                  We strive for excellence in every project, delivering quality 
                  that exceeds expectations.
                </p>
              </div>
              <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Innovation
                </h3>
                <p className="text-gray-300">
                  We embrace new technologies and creative solutions to solve 
                  complex challenges.
                </p>
              </div>
              <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Collaboration
                </h3>
                <p className="text-gray-300">
                  We believe in the power of collaboration, working closely 
                  with our clients as partners.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}