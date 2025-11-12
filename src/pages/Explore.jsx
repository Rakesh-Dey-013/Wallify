import { useState, useEffect } from 'react'
import { useWallpapers } from '../hooks/useWallpapers'
import WallpaperGrid from '../components/WallpaperGrid'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import Loader from '../components/Loader'

const categories = [
  { id: 'nature', name: 'Nature', emoji: '🌿' },
  { id: 'technology', name: 'Tech', emoji: '🖥️' },
  { id: 'anime', name: 'Anime', emoji: '👘' },
  { id: 'abstract', name: 'Abstract', emoji: '🎨' },
  { id: 'animals', name: 'Animals', emoji: '🐱' },
  { id: 'photography', name: 'Photography', emoji: '📷' }
]

export default function Explore() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const { wallpapers, loading, error, fetchWallpapers } = useWallpapers()

  useEffect(() => {
    fetchWallpapers(query, selectedCategory?.id)
  }, [query, selectedCategory])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-300">Explore Wallpapers</h1>
        
        <div className="mb-8">
          <SearchBar onSearch={setQuery} />
        </div>
        
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-red-400">{error}</p>
        </div>
      ) : (
        <WallpaperGrid wallpapers={wallpapers} />
      )}
    </div>
  )
}