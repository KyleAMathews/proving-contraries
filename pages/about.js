import React from 'react'
import { Container } from 'react-responsive-grid'

class About extends React.Component {
  render () {
    return (
      <Container
        style={{
          maxWidth: 425,
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: '"Alegreya SC",sans-serif',
          }}
        >
          About
        </h1>
        <p>Kindling Light is a group theology blog started by a small
          group of friends in 2016. We're currently composed of 4 Mormons and 1 Catholic.
        </p>
      </Container>
    )
  }
}

export default About
