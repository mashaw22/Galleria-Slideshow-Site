import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import GalleryDirections from '../components/GalleryDirections'
import Layout from "../components/Layout"
import * as styles from "../styles/painting-details.module.css"
import iconViewImage from "../images/icons/iconViewImage.svg"

export default function PaintingDetails({ data }) {
  console.log(data)
  const { html } = data.markdownRemark
  const {name, source, year, artist, images} = data.markdownRemark.frontmatter

  return (
      <Layout stopSlideShow="Stop Slideshow">
        <div className={styles.layout}>

          <div className={styles.hero__section}>
            <div>
              <GatsbyImage className={styles.hero__small} image={getImage(images.hero.small)} alt={name}/>
              <GatsbyImage className={styles.hero__large}image={getImage(images.hero.large)} alt={name}/>
              <div className={styles.hero__view}>
                <img src={iconViewImage} alt="View Image"/>
                <p>View Image</p>
              </div>
            </div>

              <div className={styles.hero__subdetails}>
                <div className={styles.hero__text}>
                    <h1>{name}</h1>
                    <h2>{artist.name}</h2>
                </div>    
                <div className={styles.hero__artist}>
                  <GatsbyImage image={getImage(artist.image)} alt={artist.name} />
                </div>
              </div>
          </div>
          
          <div className={styles.details}>
            <h3>{year}</h3>
            <div className={styles.details__text}>
              <div dangerouslySetInnerHTML={{ __html: html}}/>
              <a href={source}>Go to source</a>
            </div>

          </div>
        </div>
        <GalleryDirections name={name} artist={artist.name}/>
      </Layout>
  )
}

export const query = graphql`
  query PaintingDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        name
        source
        year
        artist {
          name
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        images {
          hero {
            small {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            large {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`