export default function ClientLogos() {
  const clients = [
    { name: 'Zapier', logo: 'zapier' },
    { name: 'Spotify', logo: 'spotify' },
    { name: 'Zoom', logo: 'zoom' },
    { name: 'Slack', logo: 'slack' },
    { name: 'Amazon', logo: 'amazon' },
    { name: 'Adobe', logo: 'adobe' }
  ]

  return (
    <section className="py-12 bg-dark-900 border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm uppercase tracking-wide">
            Trusted by industry leaders
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className="flex items-center justify-center h-12 w-24 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="text-gray-400 hover:text-white transition-colors duration-300">
                {client.logo === 'zapier' && (
                  <svg className="h-8 w-20" viewBox="0 0 100 30" fill="currentColor">
                    <text x="0" y="20" fontSize="14" fontWeight="bold">zapier</text>
                  </svg>
                )}
                {client.logo === 'spotify' && (
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">♪</span>
                    </div>
                    <span className="font-semibold">Spotify</span>
                  </div>
                )}
                {client.logo === 'zoom' && (
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg mr-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">Z</span>
                    </div>
                    <span className="font-semibold">oom</span>
                  </div>
                )}
                {client.logo === 'slack' && (
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg mr-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">#</span>
                    </div>
                    <span className="font-semibold">lack</span>
                  </div>
                )}
                {client.logo === 'amazon' && (
                  <div className="flex items-center">
                    <span className="font-bold text-orange-500 text-lg">amazon</span>
                  </div>
                )}
                {client.logo === 'adobe' && (
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-500 rounded-lg mr-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <span className="font-semibold">dobe</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}