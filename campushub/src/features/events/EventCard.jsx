import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = ({ event }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#14261b]">

      {/* Event Image */}

      <div className="flex h-52 items-end bg-gradient-to-br from-lime-300/30 via-emerald-700/30 to-[#07100a] p-6">

        <span className="rounded-full bg-black/50 px-4 py-2 text-xs uppercase tracking-wider text-lime-300">
          {event.category}
        </span>

      </div>


      {/* Event Information */}

      <div className="p-6">

        <p className="text-sm text-white/50">
          {event.date}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {event.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/60">
          {event.description}
        </p>

        <Link
          to={`/events/${event.id}`}
          className="mt-6 inline-block text-sm font-semibold text-lime-300"
        >
          View event →
        </Link>

      </div>

    </div>
  )
}

export default EventCard
