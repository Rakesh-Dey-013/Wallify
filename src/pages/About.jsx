export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-300">About Wallify</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Your go-to destination for high-quality HD and 4K wallpapers.
        </p>
      </div>

      <div className="bg-zinc-800/50 rounded-xl p-8 mb-8 border border-zinc-700">
        <h2 className="text-2xl font-semibold mb-4 text-gray-300">Our Mission</h2>
        <p className="text-gray-400 mb-6">
          Wallify was created to provide a seamless experience for finding and downloading beautiful wallpapers for all your devices. We believe everyone should have access to high-quality wallpapers without any hassle.
        </p>
        <p className="text-gray-400">
          Our collection is powered by the Pexels API, offering a vast selection of free-to-use images from talented photographers around the world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700">
          <h3 className="text-xl font-semibold mb-3 text-gray-300">Image Credits</h3>
          <p className="text-gray-400 mb-4">
            All wallpapers are sourced from Pexels and are free to use under their license.
          </p>
          <a
            href="https://www.pexels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Visit Pexels
          </a>
        </div>

        <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700">
          <h3 className="text-xl font-semibold mb-3 text-gray-300">Developer</h3>
          <p className="text-gray-400 mb-2">Wallify was developed by Rakesh</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Rakesh-Dey-013"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rakeshdey007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700">
        <h3 className="text-xl font-semibold mb-3 text-gray-300">Attribution</h3>
        <p className="text-gray-400">
          When using these images, please consider giving credit to the original photographers when possible.
        </p>
      </div>
    </div>
  )
}