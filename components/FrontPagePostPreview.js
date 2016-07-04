import React from 'react'
import typography, { fontSizeToPx, rhythm } from 'utils/typography'
import { Link } from 'react-router'
import moment from 'moment'
import Bullet from 'components/Bullet'

const FrontPagePostPreview = ({post}) => (
  <div
    style={{
      marginRight: rhythm(1/2),
      marginLeft: rhythm(1/2),
    }}
  >
    <h6
      style={{
        ...fontSizeToPx('15px'),
        fontFamily: '"Alegreya SC",sans-serif',
        marginBottom: rhythm(0),
      }}
    >
      {post.data.category}
    </h6>
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
        ...fontSizeToPx('14px'),
        marginBottom: rhythm(1/2),
      }}
    >
      By {post.data.authorId} <Bullet /> {moment(post.data.createdAt).format('MMM D, YYYY')}
    </div>
    <div>
      We traditionally represent pain and emotional burdens as loads that we carry around with us. (Mosiah 18:8, Matthew 11:28-30, etc). Physically, we represent them as mass.
    </div>
    <Link to={post.path}>more</Link>
  </div>
)

export default FrontPagePostPreview
