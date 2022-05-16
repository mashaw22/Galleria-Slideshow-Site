import React, {useState, useEffect} from 'react'
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({children, firstPage, currentPage, next}) {
  const [slideShowIsPlaying, setSlideShowIsPlaying] = useState(false)
  const [currentPageSlug, setCurrentPageSlug] = useState(firstPage)
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  // console.log(next.frontmatter.slug)

  function toggleStartStop(){
    setSlideShowIsPlaying(prevState => !prevState)
  }

  useEffect(() => {
    // if (slideShowIsPlaying && currentPage === firstPage) {
    //   setTimeout(() => {
    //     setCurrentPageSlug(nextSlug)
    //   }, 2000)
    // } else {
    //   setSlideShowIsPlaying(false)
    // }
  }, [currentPageSlug])

  // console.log(currentPageSlug)

  return (
    <div className="layout">
        <Navbar slideShowIsPlaying={slideShowIsPlaying} toggleStartStop ={toggleStartStop} currentPageSlug={currentPageSlug}/>
        {children}
    </div>
  )
}
