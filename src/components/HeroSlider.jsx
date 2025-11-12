import { useState, useEffect } from 'react'

const trendingWallpapers = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
    alt: 'Mountain landscape at golden hour',
    title: 'Majestic Peaks',
    category: 'Nature',
    description: 'Breathtaking mountain vistas in stunning 4K quality'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2070&auto=format&fit=crop',
    alt: 'Serene lake reflection',
    title: 'Mirror Lake',
    category: 'Landscape',
    description: 'Perfect reflections captured in pristine waters'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop',
    alt: 'Northern lights aurora',
    title: 'Aurora Borealis',
    category: 'Sky',
    description: 'Dancing lights painting the northern sky'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop',
    alt: 'Ocean waves at sunset',
    title: 'Endless Ocean',
    category: 'Seascape',
    description: 'Where the ocean meets the endless horizon'
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trendingWallpapers.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoplay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trendingWallpapers.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trendingWallpapers.length) % trendingWallpapers.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  return (
    <div className="relative w-full h-screen max-h-[80vh] min-h-[500px] overflow-hidden group">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {trendingWallpapers.map((wallpaper, index) => (
          <div
            key={wallpaper.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] group-hover:scale-105"
              style={{
                backgroundImage: `url(${wallpaper.url})`
              }}
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Content */}
            <div 
              className={`absolute inset-0 flex items-center transition-all duration-1000 delay-300 ${
                index === currentSlide 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-2xl">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
                    {wallpaper.category}
                  </div>
                  
                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                      {wallpaper.title}
                    </span>
                  </h1>
                  
                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                    {wallpaper.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group/btn px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-white/25">
                      <svg className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download 4K
                    </button>
                    
                    <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Slide Counter */}
            <div className="absolute top-8 right-8 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-white/20">
              {String(index + 1).padStart(2, '0')} / {String(trendingWallpapers.length).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10 border border-white/20 group/nav opacity-0 group-hover:opacity-100"
      >
        <svg className="w-6 h-6 group-hover/nav:-translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10 border border-white/20 group/nav opacity-0 group-hover:opacity-100"
      >
        <svg className="w-6 h-6 group-hover/nav:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {trendingWallpapers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-emerald-400 to-blue-500 transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / trendingWallpapers.length) * 100}%` 
          }}
        />
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </div>
  )
}