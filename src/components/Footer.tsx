import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-white text-xl font-bold">Digital Agency</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We are a creative digital agency specializing in innovative web development, 
              stunning design, and strategic digital marketing solutions that drive results.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'LinkedIn', icon: 'L', color: 'from-blue-500 to-blue-600' },
                { name: 'Twitter', icon: 'T', color: 'from-blue-400 to-blue-500' },
                { name: 'Instagram', icon: 'I', color: 'from-pink-500 to-purple-600' },
                { name: 'GitHub', icon: 'G', color: 'from-gray-700 to-gray-800' },
                { name: 'Dribbble', icon: 'D', color: 'from-pink-400 to-pink-500' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group`}
                >
                  <span className="text-white font-bold text-sm group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Process', href: '#process' },
                { name: 'Team', href: '#team' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile Development',
                'UI/UX Design',
                'Digital Marketing',
                'Brand Strategy',
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300">Subscribe to our newsletter for the latest insights and updates.</p>
          </div>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Digital Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}