import { Link } from "gatsby"
import React from "react"
import "./header.module.scss"
import headerStyles from "./header.module.scss"

function header() {
  return (
    <div className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          Mouha Diouf
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/" className={headerStyles.link}>
              Home
            </Link>
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
