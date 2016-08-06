import React from 'react'
import gray from 'gray-percentage'
import DocumentTitle from 'react-document-title'
import moment from 'moment'
import DisqusThread from 'react-disqus-thread'

import { config } from 'config'
import { rhythm, adjustFontSizeTo } from 'utils/typography'
import Bullet from 'components/Bullet'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    return (
      <DocumentTitle title={`${config.siteTitle} | ${post.title}`}>
        <div>
          <h1
            style={{
              marginBottom: 0,
            }}
          >
            {post.title}
          </h1>
          <div
            style={{
              ...adjustFontSizeTo('15px'),
              color: gray(40),
              marginBottom: rhythm(1),
            }}
          >
            By {post.authorId} <Bullet /> {moment(post.createdAt).format('MMM D, YYYY')} <Bullet /> {post.category}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
          <DisqusThread
            shortname="kindlinglight"
            title={post.title}
            url={"https://kindlinglight.com#{this.props.route.page.path}"}
          />
        </div>
      </DocumentTitle>
    )
  },
})
