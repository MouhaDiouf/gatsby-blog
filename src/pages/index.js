import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      <p>
        I am Mouhamadou and I am a full-stack developer based in Dakar -
        Senegal. You can contact me in Twitter via{" "}
        <a href="https://twitter.com/mouhamadiouf" target="_blank">
          @mouhadiouf
        </a>{" "}
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
