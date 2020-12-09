import React from "react"
import Header from "../components/header"
import Footer from "./footer"
import layoutStyles from "./layout.module.scss"

function layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default layout
