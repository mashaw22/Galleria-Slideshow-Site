import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/logo.svg"


export default function Navbar({toggleStartStop, slideShowIsPlaying, currentPageSlug}) {  

  return (
    <nav>
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>
        {/* <Link to={"/" + currentPageSlug}>
          <button onClick={toggleStartStop}>{slideShowIsPlaying ? "stop slideshow" : "start slideshow"}</button>
        </Link> */}
    </nav>
  )
}
