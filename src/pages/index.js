import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
const IndexPage = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  )
}

export default IndexPage
