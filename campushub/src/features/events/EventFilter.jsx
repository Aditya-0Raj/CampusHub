import React from 'react'

const EventFilter = ({ selectedCategory, setSelectedCategory }) => {

  const categories = [
    'All',
    'Technology',
    'Design',
    'Cultural',
    'Sports'
  ]

  return (
    <div className="flex flex-wrap gap-3">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`rounded-full px-5 py-2 text-sm transition ${
            selectedCategory === category
              ? 'bg-lime-300 text-black'
              : 'border border-white/15 text-white/70 hover:border-lime-300 hover:text-lime-300'
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  )
}

export default EventFilter
