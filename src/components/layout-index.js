import React from "react"
import PropTypes from "prop-types"
import "./layout.scss"

const LayoutIndex = ({ children }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Ibarra+Real+Nova|UnifrakturCook:700&display=swap" rel="stylesheet" /> 
      <main>{children}</main>
    </>
  )
}

LayoutIndex.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutIndex
