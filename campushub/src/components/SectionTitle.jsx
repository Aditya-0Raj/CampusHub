import React from 'react'

const SectionTitle = ({ smallText, title }) => {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-800">
        {smallText}
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle