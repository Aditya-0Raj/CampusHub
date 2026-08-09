import React from 'react'

const HowItWorks = () => {
  return (
    <section className="bg-[#050706] px-6 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="max-w-2xl">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-lime-300">
            How it works
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Everything happening
            <span className="text-lime-300">
              {' '}around you.
            </span>
          </h2>

          <p className="mt-6 leading-7 text-white/60">
            Find events, connect with students and
            become part of the campus community.
          </p>

        </div>


        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">


          {/* Card 1 */}

          <div className="rounded-3xl border border-white/10 bg-[#14261b] p-8 transition duration-300 hover:-translate-y-2 hover:border-lime-300/50">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-300 text-xl font-bold text-black">
              01
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Discover
            </h3>

            <p className="mt-4 leading-7 text-white/60">
              Explore events, clubs and activities
              happening on your campus.
            </p>

          </div>


          {/* Card 2 */}

          <div className="rounded-3xl border border-white/10 bg-[#14261b] p-8 transition duration-300 hover:-translate-y-2 hover:border-lime-300/50">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-300 text-xl font-bold text-black">
              02
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Connect
            </h3>

            <p className="mt-4 leading-7 text-white/60">
              Meet people who share your interests
              and join communities.
            </p>

          </div>


          {/* Card 3 */}

          <div className="rounded-3xl border border-white/10 bg-[#14261b] p-8 transition duration-300 hover:-translate-y-2 hover:border-lime-300/50">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-300 text-xl font-bold text-black">
              03
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Participate
            </h3>

            <p className="mt-4 leading-7 text-white/60">
              Book your seat and take part in
              experiences that matter.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default HowItWorks