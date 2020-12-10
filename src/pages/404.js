import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
function NotFound() {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
