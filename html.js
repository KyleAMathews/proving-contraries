import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'typography-react'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    const title = DocumentTitle.rewind()

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon} />
          <link rel="alternate" type="application/atom+xml"href="/atom.xml" />
          <GoogleFont typography={typography} />
          <TypographyStyle typography={typography} />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: `
              var clicky_site_ids = clicky_site_ids || [];
              clicky_site_ids.push(100978989);
              (function() {
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = '//static.getclicky.com/js';
                ( document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild( s );
              })();
          ` }}
          />
          <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/100978228ns.gif" /></p></noscript>

        </body>
      </html>
    )
  },
})
