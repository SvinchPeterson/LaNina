'use strict'
import { Box } from '@symbo.ls/symbols'
import { wineText } from '../../texts'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'

export default {
  proto: Box,
  attr: { id: 'wine' },
  props: {
    padding: '300px 0'
  },
  style: {
    backgroundColor: 'rgba(244, 233, 217, 1)',
    minHeight: `${700 / 16}em`,
    '@media only screen and (max-width: 1225px)': {
      paddingTop: 0,
      paddingBottom: 0
    },
    '@media only screen and (max-width: 768px)': {
      minHeight: `${600 / 16}em`
    }
  },
  content: {
    proto: Box,
    props: {
      flexAlign: 'center center'
    },
    style: {
      minHeight: `${700 / 16}em`,
      backgroundImage: 'url(' + WINE_JPG + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      '@media only screen and (max-width: 1225px)': {
        backgroundSize: 'cover',
        backgroundAttachment: 'initial',
        backgroundImage: 'linear-gradient(rgba(42, 81, 61, .35), rgba(42, 81, 61, 1)), url(' + WINE_JPG + ')'
      },
      '@media only screen and (max-width: 768px)': {
        minHeight: `${600 / 16}em`
      }
    },
    p: {
      proto: Box,
      props: {
        background: 'cream'
      },
      style: {
        background: 'rgba(244, 233, 217, 1)',
        color: 'rgba(0, 0, 0, .35)',
        flex: 1,
        fontSize: `${15 / 16}em`,
        '@media only screen and (max-width: 1225px)': {
          background: 'transparent',
          color: 'rgba(244, 233, 217, 1)'
        }
      },

      span: {
        proto: [wineText, Box],
        props: { padding: 'E D2' },
        style: {
          display: 'block',
          maxWidth: `${650 / 14}em`,
          margin: '0 auto',
          lineHeight: `${21 / 14}em`,
          // fontSize: `${15 / 16}em`,
          letterSpacing: '.9px',
          fontWeight: 400,
          '@media only screen and (max-width: 1225px)': {
            fontWeight: 400,
            padding: '0 30px'
          }
        }
      }
    }

  }
}
