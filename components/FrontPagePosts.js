import React from 'react'
import Flexbox from 'flexbox-react'
import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'

import FrontPagePostPreview from 'components/FrontPagePostPreview'

const FrontPagePosts = ({ pages }) => {
  console.log(pages)
  const postsData = sortBy(filter(pages, (page) =>
    page.file.ext === 'md' && page.path !== '/404/'
  ), (page) => page.createdAt)
  const posts = postsData.map((post) => (
    <FrontPagePostPreview key={post.path} post={post} />
  ))
  return (
    <Flexbox justifyContent="center">
      {posts}
    </Flexbox>
  )
}

export default FrontPagePosts
