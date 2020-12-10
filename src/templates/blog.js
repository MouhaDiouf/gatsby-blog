import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulGastbyApp(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`
function BlogPost(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      },
    },
  }
  console.log(JSON.parse(props.data.contentfulGastbyApp.body.raw))
  return (
    <Layout>
      <h1>{props.data.contentfulGastbyApp.title}</h1>
      <p>{props.data.contentfulGastbyApp.publishedDate}</p>
      <p>
        {" "}
        {documentToReactComponents(
          JSON.parse(props.data.contentfulGastbyApp.body.raw, options)
        )}
      </p>
    </Layout>
  )
}

export default BlogPost
