'use strict'
import { Box } from '@symbo.ls/symbols'
import { wineText } from '../../texts'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'

const image = {
  proto: Box,

  props: {
    boxSize: `H H2`,
    '@tabletL': {
      boxSize: '75% H',
      margin: '0'
    },
    '@mobileM': {
      boxSize: '100% G3',
      margin: '-D 0 0 0'
    }
  },
  style: {
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .35)),url(' + WINE_JPG + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center bottom 100px',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    zIndex: 2,
    '@media only screen and (max-width: 1366px)': {
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'initial'
    },
    ' @media only screen and (max-width: 560px)': {
      // border: '2px solid red'

    }
  }
}

const paragraph = {
  proto: Box,
  props: {
    position: 'absolute',
    padding: 'D2 B',
    background: 'cream2',
    flexAlign: 'center flex-end',
    '@tabletL': {
      height: 'fit-content',
      padding: '0 E1',
      background: 'cream2',
      top: '92%',
      margin: '0'
    },
    '@mobileL': {
      width: '450px',
      padding: '0'
    },
    '@mobileM': {
      top: '85%'
    },
    '@mobileS': {
      padding: '0 C'
    },
    '@mobileXS': {
      padding: '0 D'
    }
  },
  style: {
    borderTop: 'none',
    zIndex: '10',
    '@media only screen and (min-width: 1366px)': {
      // background: 'linear-gradient(rgba(42, 81, 61, .35), rgba(42, 81, 61, .35),rgba(42, 81, 61, .35))',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'bottom 200px center'
    },
    '@media only screen and (max-width: 1366px)': {
      zIndex: 4,
      height: 'fit-content'
    }
  },

  span: {
    proto: [wineText, Box],
    style: { fontSize: `${15 / 16}em` },
    props: {
      maxWidth: 'H',
      padding: '0 C',
      color: 'black .35',
      '@tabletL': { maxWidth: 'H3' },
      '@mobileM': { padding: '0 B2' },
      '@mobileXS': { padding: '0 B1' }
    }
  }
}

export default {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    maxHeight: `${750 / 16}em`,
    position: 'relative',
    flexAlign: 'center center',
    margin: 'G 0 F2 0',
    '@mobileL': { margin: 'F 0 G 0' },
    '@mobileS': { margin: '0 0 F 0' }
  },
  attr: { id: 'wine' },

  image,
  paragraph
}
