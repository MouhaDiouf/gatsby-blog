import { Link } from "gatsby"
import React from "react"
import Footer from "../components/footer"
function about() {
  return (
    <div>
      <h1>About </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        placeat odio assumenda odit distinctio corporis ab maiores consequuntur
        at consectetur!
        <Link to="/contact">Contact Me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default about
