import React from 'react'
import typography, { adjustFontSizeTo, rhythm } from 'utils/typography'
import { Link } from 'react-router'
import moment from 'moment'
import Bullet from 'components/Bullet'
import gray from 'gray-percentage'

const addBorder = (notLast) => {
  if (notLast) {
    return `1px solid ${gray(90)}`
  }
}

const FrontPagePostPreview = ({notLast, post}) => (
  <div
    style={{
      borderBottom: addBorder(notLast),
      paddingBottom: `calc(${rhythm(2)} - 1px)`,
      textAlign: 'center',
      marginBottom: rhythm(2),
    }}
  >
    <Link
      to={post.path}
    >
      <h4
        style={{
          marginBottom: 0,
          color: '#9E5757',
        }}
      >
        {post.data.title}
      </h4>
    </Link>
    <div
      style={{
        ...adjustFontSizeTo('14px'),
        marginBottom: rhythm(1/4),
        marginTop: rhythm(-1/8),
      }}
    >
      By {post.data.authorId} <Bullet /> {moment(post.data.createdAt).format('MMM D, YYYY')} <Bullet /> {post.data.category}
    </div>
    <div>
      {post.data.excerpt}
      {' … '}<Link to={post.path}>more »</Link>
    </div>
  </div>
)

export default FrontPagePostPreview
