import React from "react"
import { Link } from "gatsby"
const IndexPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default IndexPage
