import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(post => {
          return (
            <li>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>

      <h1>Blog</h1>
    </Layout>
  )
}

export default Blog
