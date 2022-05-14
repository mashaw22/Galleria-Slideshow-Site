const path = require("path")

exports.createPages = async({graphql, actions}) => {
    const { data } = await graphql(`
        query Gallery {
            allMarkdownRemark {
                edges {
                  node {
                    frontmatter {
                      slug
                    }
                  }
                }
              }
            }          
    `)

    const nodes = data.allMarkdownRemark.edges

    nodes.forEach((node, index) => {
        const next = index === nodes.length - 1 ? null : nodes[index + 1].node
        const previous = index === 0 ? null : nodes[index - 1].node

        actions.createPage({
            path: node.node.frontmatter.slug,
            component: path.resolve("./src/templates/painting-details.js"),
            context: { 
                slug: node.node.frontmatter.slug,
                previous,
                next,
            }
        })
    })
}