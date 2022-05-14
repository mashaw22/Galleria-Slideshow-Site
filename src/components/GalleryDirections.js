import { Link } from 'gatsby'
import React from 'react'
import iconBackButton from "../images/icons/iconBackButton.svg"
import iconNextButton from "../images/icons/iconNextButton.svg"
import * as styles from "../styles/directions.module.css"

export default function GalleryDirections({ name, artist, previous, next }) {

  return (
    <div className={styles.directions}>
        <div className={styles.text}>
            <h3>{name}</h3>
            <p>{artist}</p>
        </div>
        <div className={styles.images}>
            {previous && <Link to={"/" + previous.frontmatter.slug} rel="prev">
              <img className={styles.backButton}src={iconBackButton} alt="back button"/>
            </Link>}

            {next && <Link to={"/" + next.frontmatter.slug} rel="next">
              <img className={styles.nextButton} src={iconNextButton} alt="next button"/>
            </Link>}
        </div>
    </div>
  )
}
