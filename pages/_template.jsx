import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import gray from 'gray-percentage'

import { rhythm } from 'utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
      location: React.PropTypes.object,
    }
  },
  render () {
    console.log(this.props.location)
    let headroom
    let maxWidth = 1024
    if (this.props.location.pathname !== "/") {
      maxWidth = 700
      headroom = (
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: '#fffdf8',
            borderBottom: `1px solid ${gray(90)}`,
            paddingTop: rhythm(1/2),
            paddingBottom: `calc(${rhythm(1/2)} - 1px)`,
          }}
        >
          <Container
            style={{
              maxWidth,
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: 'none',
              }}
            >
              <h4
                style={{
                  margin: 0,
                  paddingLeft: rhythm(1/2),
                }}
              >
                Proving Contraries
              </h4>
            </Link>
          </Container>
        </Headroom>
      )
    }
    return (
      <div>
        {headroom}
        <Container
          style={{
            maxWidth,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
