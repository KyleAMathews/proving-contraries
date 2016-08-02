import React from 'react'
import { Container } from 'react-responsive-grid'
import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import { Link } from 'react-router'
import { rhythm } from 'utils/typography'
import Bullet from 'components/Bullet'

class Archive extends React.Component {
  render () {
    let postsData = filter(this.props.route.pages, (page) =>
      page.file.ext === 'md' && page.path !== '/404/'
    )
    postsData = sortBy(postsData, (post) => post.data.createdAt).reverse()
    let items = []
    let lastQuarter
    postsData.forEach((post) => {
      const quarter = moment(post.data.createdAt).format('QYYYY')
      console.log(quarter)
      if (quarter !== lastQuarter) {
        items.push(
          <h6
            style={{
              marginTop: rhythm(1),
            }}
          >
            {moment(post.data.createdAt).format('Qo [Quarter], YYYY')}
          </h6>
        )
      }
      lastQuarter = quarter

      items.push(
        <li>
          <Link
            to={post.path}
          >
            {post.data.title}
          </Link>
        </li>
      )
    })

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
          Archive
        </h1>
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
          }}
        >
          {items}
        </ul>
      </Container>
    )
  }
}

export default Archive
