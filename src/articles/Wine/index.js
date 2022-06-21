'use strict'
import { Box } from '@symbo.ls/symbols'
import { wineText } from '../../texts'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'

const image = {
  proto: Box,

  props: {
    boxSize: `H H2`,
    '@tabletL': {
      boxSize: '70% H'
    },
    '@mobileM': {
      boxSize: '100% G3',
      margin: '-D 0 0 0'
    }
  },
  style: {
    // border: '5px solid red',
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
    padding: 'D F',
    background: 'cream2',
    flexAlign: 'center flex-end',
    '@tabletL': {
      height: 'fit-content',
      minWidth: '70%',
      background: 'cream2',
      top: '100%',
      margin: '0 auto',
      padding: 'C 0 0 0'
    },
    '@mobileL': {
      width: '450px',
      padding: '0'
    },
    '@mobileM': {
      top: '90%'
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
    // border: '5px solid blue',
    '@media only screen and (min-width: 1366px)': {
      // background: 'linear-gradient(rgba(42, 81, 61, .35), rgba(42, 81, 61, .35),rgba(42, 81, 61, .35))',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'bottom 200px center'
    },
    '@media only screen and (max-width: 1366px)': {
      zIndex: 4,
      height: 'fit-content'
    },
    '@media only screen and (max-width: 1225px)': {
      // border: '10px solid red'
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
    margin: 'D 0 F 0',
    padding: 'F2 0 0 0',
    '@tabletM': {
      padding: 'D1 0 0 0'

    },
    '@mobileL': { margin: 'F 0 G 0' },
    '@mobileS': { margin: '0 0 F 0' }
  },
  attr: { id: 'wine' },
  style: {
    // border: '5px solid green'
  },

  image,
  paragraph
}
