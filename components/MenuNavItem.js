import React from 'react'
import { rhythm } from 'utils/typography'

const MenuNavItem = ({ children }) => (
  <h6
    style={{
      fontFamily: '"Alegreya SC",sans-serif',
      display: 'inline-block',
      marginRight: rhythm(1/2),
      marginLeft: rhythm(1/2),
      marginBottom: 0,
    }}
  >
    {children}
  </h6>
)

export default MenuNavItem

