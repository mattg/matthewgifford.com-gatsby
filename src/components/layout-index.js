import React from "react"
import PropTypes from "prop-types"
import "./layout.scss"

const LayoutIndex = ({ children }) => {
  return (
    <>
      <header>
        &nbsp;
      </header>
      <main>{children}</main>
    </>
  )
}

LayoutIndex.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutIndex
