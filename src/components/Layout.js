import React from 'react'
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({children, stopSlideShow}) {
  return (
    <div className="layout">
        <Navbar stopSlideShow={stopSlideShow} />
        {children}
    </div>
  )
}
