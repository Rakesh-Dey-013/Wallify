export default function Footer() {
  return (
    <footer className="bg-zinc-800/80 border-t border-zinc-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r  from-emerald-500 to-blue-700 bg-clip-text text-transparent">
              Wallify
            </span>
            <p className="text-gray-500 text-sm mt-1">
              Your source for beautiful wallpapers
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-sm">
            <a
              href="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Pexels API
            </a>
            <a
              href="https://github.com/Rakesh-Dey-013/Wallify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-700 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Wallify. All rights reserved.</p>
          <p className="mt-1">
            Images provided by Pexels API under their free license.
          </p>
        </div>
      </div>
    </footer>
  )
}