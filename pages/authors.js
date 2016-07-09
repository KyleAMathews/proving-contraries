import React from 'react'
import { Container } from 'react-responsive-grid'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { rhythm } from 'utils/typography'

class Authors extends React.Component {
  render () {
    return (
      <DocumentTitle title={`Authors | ${config.siteTitle}`}>
        <Container
          style={{
            maxWidth: 425,
            textAlign: 'center',
          }}
        >
          <h1 style={{marginBottom: rhythm(2)}}>Authors</h1>
          <h3>Calcsam</h3>
          <p>
            Calcsam is pretty cool and should write a bio for himself.
          </p>
          <h3>John Locke</h3>
          <p>
            John is a software engineer and entreprenuer that lives in San Francisco.
            He is fascinated by science and technology and the world of ideas. He loves
            to read and wonder around San Francisco and other cities he finds himself in.
          </p>
          <p>
            John likes to write idea mashups with ideas he's inherited from
            Mormonism and from his other intellectual explorations.
          </p>
        </Container>
      </DocumentTitle>
    )
  }
}

export default Authors
