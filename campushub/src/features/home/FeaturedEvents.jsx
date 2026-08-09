import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedEvents = () => {

  const events = [
    {
      title: 'Campus Hackathon',
      category: 'Technology',
      date: '20 Aug 2026',
    },
    {
      title: 'Design Meetup',
      category: 'Design',
      date: '24 Aug 2026',
    },
    {
      title: 'Music Night',
      category: 'Entertainment',
      date: '28 Aug 2026',
    },
  ]

  return (
    <section className="bg-[#050706] px-6 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-lime-300">
              Upcoming
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              Don't miss
              <span className="text-lime-300">
                {' '}out.
              </span>
            </h2>

          </div>


          <Link
            to="/events"
            className="w-fit rounded-full border border-white/20 px-6 py-3 transition hover:border-lime-300 hover:text-lime-300"
          >
            View all events →
          </Link>

        </div>


        {/* Events */}

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {events.map((event, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#14261b] transition duration-300 hover:-translate-y-2 hover:border-lime-300/40"
            >

              {/* Fake event image */}

              <div className="flex h-48 items-end bg-gradient-to-br from-lime-300/40 via-emerald-700/30 to-[#0b130e] p-6">

                <span className="rounded-full bg-black/50 px-4 py-2 text-xs uppercase tracking-wider text-lime-300">
                  {event.category}
                </span>

              </div>


              {/* Content */}

              <div className="p-6">

                <p className="text-sm text-white/50">
                  {event.date}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {event.title}
                </h3>

                <Link
                  to="/events"
                  className="mt-6 inline-block text-sm font-semibold text-lime-300"
                >
                  Explore event →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default FeaturedEvents