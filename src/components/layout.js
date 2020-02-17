import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
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
