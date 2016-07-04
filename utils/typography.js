import Typography from 'typography'
import ms from 'modularscale'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'


const options = {
  baseFontSize: '18px',
  baseLineHeight: '27px',
  googleFonts: [
    {
      name: 'Alegreya Sans',
      styles: [
        '300',
        '300i',
        '400',
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
  bodyWeight: 300,
  headerWeight: 400,
  boldWeight: 400,
  headerGray: 10,
  bodyGray: 10,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options) => ({
    body: {
      background: '#fffdf8',
    },
    '.title-display': {
      ...adjustFontSizeTo(`${ms(8/5, 'octave') * options.baseFontSize.slice(0, -2)}px`),
      fontFamily: '"Alegreya SC",sans-serif',
    },
    [TABLET_MEDIA_QUERY]: {
      'h1.title-display': {
        ...adjustFontSizeTo(`${ms(8/5, 'golden') * options.baseFontSize.slice(0, -2)}px`),
      },
    },
    h4: {
      lineHeight: 1.5,
    },
    a: {
      color: '#9E5757',
      fontWeight: 600,
      textDecoration: 'none',
    },
    'a:hover': {
      textDecoration: 'underline',
    },
    blockquote: {
      fontStyle: 'italic',
    },
  }),
}
const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
