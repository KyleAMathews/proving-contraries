import React from 'react'
import DocumentTitle from 'react-document-title'

import { config } from 'config'
import FrontPagePosts from 'components/FrontPagePosts'

export default class Index extends React.Component {
  render () {
    console.log(this.props)
    return (
      <DocumentTitle title={config.siteTitle}>
        <FrontPagePosts pages={this.props.route.pages} />
      </DocumentTitle>
    )
  }
}
