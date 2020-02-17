import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Ibarra+Real+Nova|UnifrakturCook:700&display=swap" rel="stylesheet" /> 
      <header>
        <Link to='/'>Matthew Gifford</Link>
      </header>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
