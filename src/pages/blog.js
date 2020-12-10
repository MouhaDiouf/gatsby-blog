import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"
function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGastbyApp(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />

      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulGastbyApp.edges.map(post => {
          return (
            <li className={blogStyles.post}>
              <Link to={post.node.slug}>
                <h2>{post.node.title}</h2>
                <p>{post.node.date}</p>
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
