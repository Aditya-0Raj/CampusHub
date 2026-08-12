import React, { useMemo, useState } from 'react'

import EventCard from './EventCard'
import EventFilter from './EventFilter'

const Events = () => {

  const [selectedCategory, setSelectedCategory] = useState('All')

  const events = [
    {
      id: 1,
      title: 'Campus Hackathon',
      category: 'Technology',
      date: '20 Aug 2026',
      description: 'Build innovative projects with students from your campus.'
    },
    {
      id: 2,
      title: 'Design Meetup',
      category: 'Design',
      date: '24 Aug 2026',
      description: 'Learn design thinking and meet other creative students.'
    },
    {
      id: 3,
      title: 'Cultural Night',
      category: 'Cultural',
      date: '28 Aug 2026',
      description: 'Celebrate different cultures through music, food and performances.'
    },
    {
      id: 4,
      title: 'Football Tournament',
      category: 'Sports',
      date: '02 Sep 2026',
      description: 'Compete with different teams and represent your campus.'
    },
    {
      id: 5,
      title: 'AI Workshop',
      category: 'Technology',
      date: '05 Sep 2026',
      description: 'Learn the basics of artificial intelligence and machine learning.'
    },
    {
      id: 6,
      title: 'Photography Walk',
      category: 'Design',
      date: '10 Sep 2026',
      description: 'Explore your campus and capture interesting moments.'
    }
  ]


  const filteredEvents = useMemo(() => {

    if (selectedCategory === 'All') {
      return events
    }

    return events.filter(
      (event) => event.category === selectedCategory
    )

  }, [selectedCategory])


  return (
    <main className="min-h-screen bg-[#050706] px-6 pb-20 pt-36 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Page heading */}

        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.3em] text-lime-300">
            Discover
          </p>

          <h1 className="mt-5 text-5xl font-bold md:text-7xl">
            Find something
            <span className="text-lime-300">
              {' '}worth joining.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-7 text-white/60">
            Discover events, workshops, clubs and activities
            happening around your campus.
          </p>

        </div>


        {/* Filters */}

        <div className="mt-12">
          <EventFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>


        {/* Events */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filteredEvents.map((event) => (

            <EventCard
              key={event.id}
              event={event}
            />

          ))}

        </div>


        {/* No events */}

        {filteredEvents.length === 0 && (

          <div className="py-20 text-center">

            <h2 className="text-2xl font-bold">
              No events found
            </h2>

            <p className="mt-3 text-white/50">
              Try selecting another category.
            </p>

          </div>

        )}

      </div>

    </main>
  )
}

export default Events
