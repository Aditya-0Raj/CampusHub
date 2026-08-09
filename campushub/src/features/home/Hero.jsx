import React, { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const Hero = () => {

  const heroRef = useRef(null)

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const timeline = gsap.timeline()

      timeline
        .fromTo(
          '.hero-tag',
          {
            y: 40
          },
          {
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          }
        )

        .fromTo(
          '.hero-title',
          {
            y: 80,
            scale: 0.95
          },
          {
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out'
          },
          '-=0.4'
        )

        .fromTo(
          '.hero-description',
          {
            y: 40
          },
          {
            y: 0,
            duration: 0.7,
            ease: 'power3.out'
          },
          '-=0.5'
        )

        .fromTo(
          '.hero-buttons',
          {
            y: 30
          },
          {
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
          },
          '-=0.4'
        )

        .fromTo(
          '.hero-card',
          {
            y: 70,
            scale: 0.97
          },
          {
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out'
          },
          '-=0.3'
        )

    }, heroRef)

    return () => ctx.revert()

  }, [])


  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-[#050706] px-6 pb-20 pt-36 text-white"
    >

      <div className="mx-auto max-w-7xl">

        {/* Small heading */}

        <p className="hero-tag mb-6 text-sm font-medium uppercase tracking-[0.3em] text-lime-300">
          Your campus. Your community.
        </p>


        {/* Main heading */}

        <h1 className="hero-title text-6xl font-bold leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">

          Find.

          <br />

          <span className="text-lime-300">
            Join.
          </span>

          <br />

          Belong.

        </h1>


        {/* Description */}

        <p className="hero-description mt-8 max-w-xl text-base leading-7 text-white/80 md:text-lg">
          Discover events, clubs and activities happening
          around your campus. Find your people and make
          your college experience better.
        </p>


        {/* Buttons */}

        <div className="hero-buttons mt-8 flex flex-wrap gap-4">

          <Link
            to="/events"
            className="rounded-full bg-lime-300 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-lime-200"
          >
            Explore Events →
          </Link>

          <Link
            to="/dashboard"
            className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition duration-300 hover:border-lime-300 hover:text-lime-300"
          >
            My Dashboard
          </Link>

        </div>


        {/* Featured Event */}

        <div className="hero-card mt-20 overflow-hidden rounded-[2rem] border border-white/20 bg-[#18291f]">

          <div className="grid md:grid-cols-2">

            {/* Left */}

            <div className="min-h-[350px] bg-gradient-to-br from-lime-300/40 via-emerald-600/30 to-[#102018] p-8 md:p-12">

              <p className="text-sm uppercase tracking-[0.25em] text-lime-300">
                Featured Event
              </p>

              <h2 className="mt-6 max-w-lg text-4xl font-bold text-white md:text-5xl">
                Campus Hackathon 2026
              </h2>

              <p className="mt-5 max-w-md leading-7 text-white/80">
                Build something meaningful with your friends
                and compete with the best minds on campus.
              </p>

              <Link
                to="/events"
                className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
              >
                View Event
              </Link>

            </div>


            {/* Right */}

            <div className="grid grid-cols-2 bg-[#14261b]">

              <div className="border-b border-r border-white/20 p-8">
                <h3 className="text-4xl font-bold text-lime-300">
                  120+
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Events
                </p>
              </div>

              <div className="border-b border-white/20 p-8">
                <h3 className="text-4xl font-bold text-white">
                  40+
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Clubs
                </p>
              </div>

              <div className="border-r border-white/20 p-8">
                <h3 className="text-4xl font-bold text-white">
                  5K+
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Students
                </p>
              </div>

              <div className="p-8">
                <h3 className="text-4xl font-bold text-white">
                  24/7
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Community
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero