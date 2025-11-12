import HeroSlider from '../components/HeroSlider'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Spotlight background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r  from-emerald-400 to-blue-600 bg-clip-text text-transparent"
          >
            Stunning HD & 4K Wallpapers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-400"
          >
            Discover and download high-quality wallpapers for your desktop, mobile, or tablet. Free to use for any purpose.
          </motion.p>
        </section>

        {/* Hero Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <HeroSlider />
        </motion.div>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-300">Why Choose Wallify?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🖼️',
                title: '4K Quality',
                description: 'Crystal clear wallpapers in ultra HD resolution'
              },
              {
                icon: '📥',
                title: 'Instant Download',
                description: 'One-click downloads with no registration required'
              },
              {
                icon: '🔍',
                title: 'Smart Search',
                description: 'Find exactly what you need with powerful search'
              },
              {
                icon: '💡',
                title: 'Categories',
                description: 'Organized collections for easy browsing'
              },
              {
                icon: '🌐',
                title: 'API Powered',
                description: 'Fresh content updated regularly'
              },
              {
                icon: '🚀',
                title: 'Free Forever',
                description: 'No subscriptions, no hidden fees'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-zinc-800/50 hover:bg-zinc-800/80 p-6 rounded-xl border border-zinc-700 transition-all hover:shadow-lg"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-300">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center py-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-300">Ready to Explore?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-400">
            Browse our collection of thousands of high-quality wallpapers and find your perfect match.
          </p>
          <a
            href="/explore"
            className="inline-block px-8 py-3 bg-gradient-to-r  from-emerald-500 to-blue-700 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 text-xl"
          >
            Explore Wallpapers
          </a>
        </motion.section>
      </div>
    </div>
  )
}