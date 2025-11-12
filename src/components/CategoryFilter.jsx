export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => 
            selectedCategory?.id === category.id 
              ? onSelectCategory(null) 
              : onSelectCategory(category)
          }
          className={`flex items-center px-4 py-2 rounded-full border transition-all ${
            selectedCategory?.id === category.id
              ? 'bg-purple-500/10 border-purple-500 text-purple-400'
              : 'bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800/80'
          }`}
        >
          <span className="mr-2">{category.emoji}</span>
          {category.name}
        </button>
      ))}
    </div>
  )
}