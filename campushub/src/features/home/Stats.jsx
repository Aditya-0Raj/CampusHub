import React from 'react'

const Stats = () => {
  return (
    <section className="bg-[#050706] px-6 py-20 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-2 border border-white/10 rounded-3xl overflow-hidden md:grid-cols-4">

          <div className="border-b border-r border-white/10 p-8 md:border-b-0">
            <h2 className="text-4xl font-bold text-lime-300">
              120+
            </h2>

            <p className="mt-2 text-white/60">
              Events
            </p>
          </div>


          <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r">
            <h2 className="text-4xl font-bold">
              40+
            </h2>

            <p className="mt-2 text-white/60">
              Clubs
            </p>
          </div>


          <div className="border-r border-white/10 p-8">
            <h2 className="text-4xl font-bold">
              5K+
            </h2>

            <p className="mt-2 text-white/60">
              Students
            </p>
          </div>


          <div className="p-8">
            <h2 className="text-4xl font-bold">
              24/7
            </h2>

            <p className="mt-2 text-white/60">
              Community
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Stats