import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
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
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(post => {
          return (
            <li className={blogStyles.post}>
              <Link to={post.node.fields.slug}>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>

      <h1>Blog</h1>
    </Layout>
  )
}

export default Blog
