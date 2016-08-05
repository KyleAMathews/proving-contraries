import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import Headroom from 'react-headroom'
import includes from 'lodash/includes'

import { rhythm, adjustFontSizeTo } from 'utils/typography'
import Display from 'components/Display'
import MenuNavItem from 'components/MenuNavItem'

const blogHeader = (
  <Headroom
    disable
    style={{
      background: '#fffdf8',
      paddingTop: rhythm(3/4),
      paddingBottom: rhythm(3/4),
    }}
  >
    <Container
      style={{
        maxWidth: 700,
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        <h5
          style={{
            margin: 0,
            paddingLeft: rhythm(3/4),
            fontFamily: '"Alegreya SC",sans-serif',
          }}
        >
          Kindling Sparks
        </h5>
      </Link>
    </Container>
  </Headroom>
)

const indexPageHeader = (
<div>
  <Display
    style={{
      marginBottom: rhythm(1),
      marginTop: rhythm(1.5),
      textAlign: 'center',
    }}
  >
    <Link
      to="/"
      style={{
        color: 'inherit',
        fontWeight: 400,
        textDecoration: 'none',
      }}
    >
      Kindling Sparks
    </Link>
  </Display>
  <div
    style={{
      textAlign: 'center',
      marginBottom: rhythm(2),
    }}
  >
    <MenuNavItem>
      <Link
        to="/about/"
        style={{
          color: 'inherit',
          fontWeight: 400,
          textDecoration: 'none',
        }}
      >
        About
      </Link>
    </MenuNavItem>
    <MenuNavItem>
      <Link
        to="/authors/"
        style={{
          color: 'inherit',
          fontWeight: 400,
          textDecoration: 'none',
        }}
      >
        Authors
      </Link>
    </MenuNavItem>
    <MenuNavItem>
      <Link
        to="/archive/"
        style={{
          color: 'inherit',
          fontWeight: 400,
          textDecoration: 'none',
        }}
      >
        Archive
      </Link>
    </MenuNavItem>
  </div>
</div>
)

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
      location: React.PropTypes.object,
    }
  },
  render () {
    let header
    let maxWidth
    if (includes(['/', '/about/', '/authors/', '/archive/'], this.props.location.pathname)) {
      maxWidth = 1024
      header = indexPageHeader
    } else {
      maxWidth = 700
      header = blogHeader
    }
    return (
      <div>
        {header}
        <Container
          style={{
            maxWidth,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
