import { useState } from 'react'
import { FiDownload, FiHeart, FiEye } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function WallpaperCard({ wallpaper }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-xl overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={wallpaper.src.medium}
        alt={wallpaper.alt}
        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />

      {/* Overlay */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">
              {wallpaper.width} × {wallpaper.height}
            </span>
            <div className="flex space-x-2">
              <button className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
                <FiHeart size={16} />
              </button>
              <button className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
                <FiEye size={16} />
              </button>
            </div>
          </div>

          <a
            href={wallpaper.src.original}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:shadow-md transition-all"
          >
            <FiDownload className="mr-2" />
            Download
          </a>
        </motion.div>
      )}
    </motion.div>
  )
}