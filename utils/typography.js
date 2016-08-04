import Typography from 'typography'
import ms from 'modularscale'
import { MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'


const options = {
  baseFontSize: '18px',
  baseLineHeight: '27px',
  googleFonts: [
    {
      name: 'Alegreya Sans',
      styles: [
        '400',
        '400i',
        '700',
      ],
    },
    {
      name: 'Alegreya SC',
      styles: [
        '400',
      ],
    },
    {
      name: 'Alegreya',
      styles: [
        '400',
      ],
    },
  ],
  headerFontFamily: [
    'Alegreya',
    'Georgia',
    'serif',
  ],
  bodyFontFamily: ['Alegreya Sans', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 400,
  boldWeight: 700,
  headerGray: 15,
  bodyGray: 30,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options) => ({
    body: {
      background: '#fffdf8',
    },
    '.title-display': {
      ...adjustFontSizeTo(`${ms(9/5, 'octave') * options.baseFontSize.slice(0, -2)}px`),
      fontFamily: '"Alegreya SC",sans-serif',
    },
    [TABLET_MEDIA_QUERY]: {
      'h1.title-display': {
        ...adjustFontSizeTo(`${ms(7/5, 'golden') * options.baseFontSize.slice(0, -2)}px`),
      },
      h4: {
        lineHeight: 1.45,
      },
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(1.5),
        marginRight: 0,
      },
    },
    h4: {
      lineHeight: 1.5,
    },
    'h5,h6': {
      marginBottom: rhythm(1/2),
    },
    a: {
      color: '#9E5757',
      textDecoration: 'underline',
    },
    'a:hover': {
      textDecoration: 'none',
    },
    blockquote: {
      ...adjustFontSizeTo('16px'),
      marginLeft: rhythm(3),
      marginRight: rhythm(1),
      marginTop: rhythm(1.5),
      marginBottom: rhythm(1.5),
    },
    'p > img': {
      marginBottom: 0,
    },
  }),
}
const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
