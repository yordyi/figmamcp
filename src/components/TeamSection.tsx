'use client'

import React, { useState } from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    department: 'Leadership',
    image: '/api/placeholder/300/400',
    bio: 'Visionary leader with 10+ years of experience in digital transformation and business strategy.',
    skills: ['Leadership', 'Strategy', 'Business Development'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'CTO',
    department: 'Technology',
    image: '/api/placeholder/300/400',
    bio: 'Technical architect with expertise in scalable systems and emerging technologies.',
    skills: ['Architecture', 'Cloud Computing', 'AI/ML'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Lead Designer',
    department: 'Design',
    image: '/api/placeholder/300/400',
    bio: 'Creative designer passionate about creating meaningful user experiences.',
    skills: ['UI/UX Design', 'Branding', 'User Research'],
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#'
    },
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Senior Developer',
    department: 'Development',
    image: '/api/placeholder/300/400',
    bio: 'Full-stack developer with expertise in modern web technologies and frameworks.',
    skills: ['React', 'Node.js', 'Python'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Marketing Director',
    department: 'Marketing',
    image: '/api/placeholder/300/400',
    bio: 'Digital marketing expert with a proven track record of driving growth.',
    skills: ['Digital Marketing', 'SEO', 'Content Strategy'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Project Manager',
    department: 'Operations',
    image: '/api/placeholder/300/400',
    bio: 'Agile project manager ensuring seamless project delivery and client satisfaction.',
    skills: ['Project Management', 'Agile', 'Team Leadership'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    color: 'from-pink-500 to-rose-600'
  }
]

const departments = ['All', 'Leadership', 'Technology', 'Design', 'Development', 'Marketing', 'Operations']

export default function TeamSection() {
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const filteredMembers = selectedDepartment === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment)

  return (
    <section id="team" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8">
            <span className="text-indigo-400 text-sm font-medium">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our diverse team of talented professionals brings together expertise from various fields to deliver exceptional results.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setSelectedDepartment(department)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedDepartment === department
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {department}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className={`group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-500 ${
                hoveredMember === member.id ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Member Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <span className="text-white text-sm font-semibold">
                          {platform[0].toUpperCase()}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-indigo-400 font-medium">{member.department}</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Contact Button */}
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-2 rounded-lg font-medium transition-all duration-300 text-sm">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-indigo-400 mb-2">50+</div>
            <div className="text-gray-300 text-sm">Team Members</div>
          </div>
          <div className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-300 text-sm">Countries</div>
          </div>
          <div className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Support</div>
          </div>
          <div className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-300 text-sm">Satisfaction</div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team. 
              Explore our current opportunities and be part of something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Open Positions
              </button>
              <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}