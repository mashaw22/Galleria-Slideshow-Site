import { Link } from 'gatsby'
import React from 'react'
import logo from "../images/logo.svg"


export default function Navbar() {
  return (
    <nav>
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>
        {/* Link needed for start slideshow, but to what path? */}
        <h3>start slideshow</h3>
    </nav>
  )
}
