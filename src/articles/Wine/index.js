'use strict'
import { Box } from '@symbo.ls/symbols'
import { wineText } from '../../texts'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'

const image = {
  proto: Box,

  props: {
    boxSize: `H H2`,
    position: 'absolute',
    margin: '0 G 0 0',
    '@tabletL': {
      width: '80%',
      margin: '0'
    },
    '@mobileS': { boxSize: '100% G3' }
  },
  style: {
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .35)),url(' + WINE_JPG + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'left 300px bottom 150px',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    zIndex: 2,
    '@media only screen and (max-width: 1366px)': {
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'initial'
    }
  }
}

const paragraph = {
  proto: Box,
  props: {
    height: `${800 / 16}em`,
    position: 'absolute',
    padding: '0 D 0 E',
    margin: '0 0 0 H1',
    flexAlign: 'center flex-end',
    '@tabletL': {
      height: 'fit-content',
      padding: '0 D',
      background: 'cream2',
      top: '100%',
      margin: '0'
    },
    '@mobileS': {
      padding: '0 B2',
      top: '90%'
    }
  },
  style: {
    borderTop: 'none',
    '@media only screen and (min-width: 1366px)': {
      background: 'linear-gradient(rgba(248, 241, 227, 0), rgba(248, 241, 227, 0),rgba(42, 81, 61, .35))',
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
    props: {
      fontSize: 'Z',
      maxWidth: 'G1',
      color: 'black .35',
      '@tabletL': { maxWidth: 'H3' }
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
    margin: 'G2 0 G 0',
    '@mobileL': { margin: 'F 0 G 0' },
    '@mobileS': { margin: 'D 0 F 0' }
  },
  attr: { id: 'wine' },

  image,
  paragraph
}
