import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import {gallery, gallery__img, gallery__text} from "../styles/galleria.module.css"

export default function Home({ data }) {
  console.log(data)
  const galleria = data.allMarkdownRemark.nodes

  const galleriaElements = galleria.map(painting => (
    <Link to={painting.frontmatter.slug} key={painting.id}>
      <div className={gallery__img}>
        <GatsbyImage image={getImage(painting.frontmatter.images.gallery)} alt={painting.frontmatter.name} />
        <div className={gallery__text}>
          <h2>{painting.frontmatter.name}</h2>
          <p>{painting.frontmatter.artist.name}</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <Layout>
    <div className={gallery}>
      {galleriaElements}
    </div>
    </Layout>
  )
}

export const query = graphql`
query Galleria {
  allMarkdownRemark {
    nodes {
      frontmatter {
        name
        images {
          gallery {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        slug
        artist {
          name
        }
      }
      id
    }
  }
}

`