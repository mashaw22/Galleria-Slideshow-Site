import React from 'react'
import iconBackButton from "../images/icons/iconBackButton.svg"
import iconNextButton from "../images/icons/iconNextButton.svg"
import {directions, text, images} from "../styles/directions.module.css"

export default function GalleryDirections({ name, artist }) {
  return (
    <div className={directions}>
        <div className={text}>
            <h3>{name}</h3>
            <p>{artist}</p>
        </div>
        <div className={images}>
            <img src={iconBackButton} alt="back button"/>
            <img src={iconNextButton} alt="next button"/>
        </div>
    </div>
  )
}
