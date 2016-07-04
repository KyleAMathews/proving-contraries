import React from 'react'

const Display = ({ children, style = {} }) => (
  <h1 className="title-display" style={style}>
    {children}
  </h1>
)

export default Display
