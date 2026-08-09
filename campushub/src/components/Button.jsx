import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="inline-block rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105"
    >
      {children}
    </Link>
  )
}

export default Button