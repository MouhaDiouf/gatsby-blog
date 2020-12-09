import { Link } from "gatsby"
import React from "react"
import "./header.module.scss"
import headerStyles from "./header.module.scss"

function header() {
  return (
    <div className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          Mouhamadou Diouf
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            {" "}
            <Link
              to="/"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/blog"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/about"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/contact"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default header
