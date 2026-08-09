import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../../components/Container'

const UpcomingEvents = () => {
  return (
    <section className="bg-[#0b2118] px-6 py-28 text-white">

      <Container>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300">
              Don't miss out
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              What's happening?
            </h2>
          </div>

          <Link
            to="/events"
            className="w-fit rounded-full bg-lime-300 px-6 py-3 font-semibold text-black"
          >
            View all events
          </Link>

        </div>


        <div className="mt-14 grid gap-5 md:grid-cols-3">

          <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-7">

            <p className="text-sm font-semibold text-lime-300">
              24 AUG
            </p>

            <h3 className="mt-14 text-2xl font-bold">
              Campus Hackathon
            </h3>

            <p className="mt-3 text-sm text-white/50">
              Technology
            </p>

          </div>


          <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-7">

            <p className="text-sm font-semibold text-lime-300">
              28 AUG
            </p>

            <h3 className="mt-14 text-2xl font-bold">
              Design Thinking Workshop
            </h3>

            <p className="mt-3 text-sm text-white/50">
              Design
            </p>

          </div>


          <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-7">

            <p className="text-sm font-semibold text-lime-300">
              02 SEP
            </p>

            <h3 className="mt-14 text-2xl font-bold">
              Cultural Night
            </h3>

            <p className="mt-3 text-sm text-white/50">
              Culture
            </p>

          </div>

        </div>

      </Container>

    </section>
  )
}

export default UpcomingEvents