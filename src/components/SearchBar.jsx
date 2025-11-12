import { useState, useRef, useEffect } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { useDebounce } from '../hooks/useDebounce'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)

  // Call parent's onSearch when debounced query changes
  useEffect(() => {
    onSearch(debouncedQuery)
  }, [debouncedQuery, onSearch])

  const clearSearch = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="text-gray-500" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search wallpapers..."
        className="block w-full pl-10 pr-10 py-3 bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-300 placeholder-gray-500"
      />
      {query && (
        <button
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <FiX className="text-gray-500 hover:text-gray-300 transition-colors" />
        </button>
      )}
    </div>
  )
}