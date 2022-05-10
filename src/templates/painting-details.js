import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import GalleryDirections from '../components/GalleryDirections'
import Layout from "../components/Layout"
import {layout, thumbnail, headerText, artistImg, details} from "../styles/painting-details.module.css"

export default function PaintingDetails({ data }) {
  console.log(data)
  const { html } = data.markdownRemark
  const {name, source, year, artist, images} = data.markdownRemark.frontmatter

  return (
      <Layout stopSlideShow="Stop Slideshow">
        <div className={layout}>
          
          <div className={thumbnail}>
            <GatsbyImage image={getImage(images.hero.small)} alt={name}/>
            <div className={headerText}>
                <h1>{name}</h1>
                <h2>{artist.name}</h2>
            </div>
          </div>
          


          <div className={artistImg}>
            <GatsbyImage image={getImage(artist.image)} alt={artist.name} />
          </div>
          
          <div className={details}>
            <h3>{year}</h3>
            <div dangerouslySetInnerHTML={{ __html: html}}/>
            <a href={source}>Go to source</a>

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