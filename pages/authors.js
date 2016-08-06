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
          <h3>The Utopian</h3>
          <p>
            The Utopian is a Washington D.C. lawyer and a convert to
            Catholicism. He is fascinated by the traditions, richness, and
            history of the Christian Faith but also ecumenicalism and the
            promise of the universal church. He is continuing to pursue an
            understanding of the inexplicable goodness of our Lord and how to
            grow in love of God and love of neighbor.
          </p>
          <h3>Pascal</h3>
          <p>
            Pascal is a software engineer in Silicon Valley. A convert to
            Mormonism, he loves the expansive theology sketched in latter-day
            scriptures and explored by Joseph Smith. He hopes to nourish the
            trees of both modernity and the Church via some experimental
            grafting.
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
