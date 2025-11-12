import Masonry from 'react-masonry-css'
import WallpaperCard from './WallpaperCard'

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
}

export default function WallpaperGrid({ wallpapers = [] }) {
  return (
    <div className="mt-8">
      {wallpapers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No wallpapers found. Try a different search.</p>
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {wallpapers.map((wallpaper) => (
            <div key={wallpaper.id} className="mb-4">
              <WallpaperCard wallpaper={wallpaper} />
            </div>
          ))}
        </Masonry>
      )}
    </div>
  );
}
