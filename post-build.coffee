Feed = require('feed')
filter = require 'lodash/filter'
sortBy = require 'lodash/sortBy'
moment = require 'moment'
MarkdownIt = require 'markdown-it'
fs = require 'fs'
frontmatter = require 'front-matter'

md = MarkdownIt({
  html: true
  linkify: true
  typographer: true
})

module.exports = (pages, callback) ->
  console.log("running post-build")
  generateAtomFeed(pages)
  callback()

generateAtomFeed = (pages) ->
  feed = new Feed({
    title:       'Kindling Sparks',
    description: 'A theology blog!',
    link:        'https://kindlingsparks.org/',
    id:        'https://kindlingsparks.org/',
    copyright:   'All rights reserved 2016',
  })

  # Sort by date.
  pages = sortBy(pages, (page) -> page.data?.createdAt).reverse()

  for page in filter(pages, (f) ->
    f.data?.title? and not f.data?.draft
  ).slice(0,10)
    feed.addItem({
      title: page.data.title
      id: "https://kindlingsparks.org#{page.path}"
      link: "https://kindlingsparks.org#{page.path}"
      date: moment(page.data.createdAt).toDate()
      content: md.render(
        frontmatter(
          fs.readFileSync(
            "#{__dirname}/pages/#{page.requirePath}",
            'utf-8'
          )
        ).body
      )
      author: [{
        name: page.data.authorId
      }]
    })

  fs.writeFileSync "#{__dirname}/public/atom.xml", feed.render('atom-1.0')
