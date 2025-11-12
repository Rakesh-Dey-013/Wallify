import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import logo from "../assets/picture.png"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { darkMode, toggleTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 bg-zinc-800/80 backdrop-blur-md border-b border-zinc-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex gap-3">
            <img src={logo} alt="" className='w-9' />
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-blue-700 bg-clip-text text-transparent">
                Wallify
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-xl font-medium hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to="/explore"
                className="px-3 py-2 rounded-md text-xl font-medium hover:text-white transition-colors"
              >
                Explore
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md text-xl font-medium hover:text-white transition-colors"
              >
                About
              </Link>

            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-zinc-700 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-800/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}