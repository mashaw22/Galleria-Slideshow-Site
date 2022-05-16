import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/galleria.module.css"

export default function Home({ data }) {
  const galleria = data.allMarkdownRemark.nodes
  const firstPage = galleria[0].frontmatter.slug

  const galleriaElements = galleria.map(painting => (
    <Link to={painting.frontmatter.slug} key={painting.id}>
      <div className={styles.gallery__img}>
        <GatsbyImage image={getImage(painting.frontmatter.images.gallery)} alt={painting.frontmatter.name} />
        <div className={styles.gallery__text}>
          <h2>{painting.frontmatter.name}</h2>
          <p>{painting.frontmatter.artist.name}</p>
        </div>
      </div>
    </Link>
  ))

  const column1 = galleriaElements.slice(0, 4)
  const column2 = galleriaElements.slice(4, 8)
  const column3 = galleriaElements.slice(8, 12)
  const column4 = galleriaElements.slice(12, 15)

  return (
    <Layout firstPage={firstPage} galleria={galleria}>
    <div className={styles.gallery}>

      <div className={styles.column__two}>
        <div className={styles.column}>{column1}</div>
        <div className={styles.column}>{column2}</div>
      </div>

      <div className={styles.column__two}>
        <div className={styles.column}>{column3}</div>
        <div className={styles.column}>{column4}</div> 
      </div>
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