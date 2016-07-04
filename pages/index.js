import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Flexbox from 'flexbox-react'

import Display from 'components/Display'
import MenuNavItem from 'components/MenuNavItem'
import FrontPagePosts from 'components/FrontPagePosts'

import { rhythm } from 'utils/typography'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Index extends React.Component {
  render () {
    console.log(this.props)
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <Flexbox justifyContent="center">
            <Display
              style={{
                marginBottom: rhythm(1),
                marginTop: rhythm(1.5),
              }}
            >
              Proving Contraries
            </Display>
          </Flexbox>
          <Flexbox justifyContent="center">
            <MenuNavItem>
              About
            </MenuNavItem>
            <MenuNavItem>
              Authors
            </MenuNavItem>
            <MenuNavItem>
              Archive
            </MenuNavItem>
          </Flexbox>
          <hr
            style={{
              marginBottom: `calc(${rhythm(2)} - 1px)`,
              marginTop: rhythm(1/8),
            }}
          />
          <FrontPagePosts pages={this.props.route.pages} />
        </div>
      </DocumentTitle>
    )
  }
}
