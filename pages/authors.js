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
          <h1
            style={{
              fontFamily: '"Alegreya SC",sans-serif',
            }}
          >
            Authors
          </h1>
          <h3>[Laura]</h3>
          <p>
            [Laura] is pretty cool and should write a bio for herself.
          </p>
          <h3>Pascal</h3>
          <p>
            Pascal is pretty cool and should write a bio for himself.
          </p>
          <h3>Locke</h3>
          <p>
            Locke is a software engineer and entreprenuer that lives in San Francisco.
            He is fascinated by science and technology and the world of ideas. He loves
            to read and wander around San Francisco and other cities he finds himself in.
            He is fascinated by his Mormon intellectual inheritance and loves to mashup
            these ideas with other intellectual explorations.
          </p>
          <h3>Tyndale</h3>
          <p> Tyndale is a religion-loving lawyer in
            Silicon Valley.  She is actively engaged in
            reexamining Mormonism in light of the simple
            messages of love, grace, and freedom embodied
            by the New Testament church and reinvigorated
            by the Protestant Reformation.
          </p>
        </Container>
      </DocumentTitle>
    )
  }
}

export default Authors
