import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-5 py-5">

      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-5 py-3 backdrop-blur-md">

        {/* Logo */}

        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          Campus<span className="text-lime-300">Hub</span>
        </Link>


        {/* Navigation */}

        <div className="hidden items-center gap-7 text-sm text-white/70 md:flex">

          <Link
            to="/events"
            className="transition hover:text-lime-300"
          >
            Events
          </Link>

          <Link
            to="/agenda"
            className="transition hover:text-lime-300"
          >
            Agenda
          </Link>

          <Link
            to="/dashboard"
            className="transition hover:text-lime-300"
          >
            Dashboard
          </Link>

        </div>


        {/* Button */}

        <Button to="/events">
          Explore
        </Button>

      </div>

    </nav>
  )
}

export default Navbar