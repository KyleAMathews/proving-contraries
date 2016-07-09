import React from 'react'
import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'

import FrontPagePostPreview from 'components/FrontPagePostPreview'

const FrontPagePosts = ({ pages }) => {
  console.log(pages)
  let postsData = filter(pages, (page) =>
    page.file.ext === 'md' && page.path !== '/404/'
  )
  postsData = sortBy(postsData, (post) => post.data.createdAt).reverse()
  const posts = postsData.map((post, i) => (
    <FrontPagePostPreview
      post={post}
      notLast={i + 1 !== postsData.length}
    />
  ))

  return (
    <div
      style={{
        width: 500,
        maxWidth: '100%',
        margin: '0 auto',
      }}
    >
      {posts}
    </div>
  )
}

export default FrontPagePosts
