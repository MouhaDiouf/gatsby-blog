import { Link } from "gatsby"
import React from "react"
import "./header.css"
function header() {
  return (
    <div className="header">
      <h1>Mouha Diouf</h1>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>

          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default header
