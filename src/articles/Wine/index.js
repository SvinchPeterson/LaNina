'use strict'
import { Box } from '@symbo.ls/symbols'
import { wineText } from '../../texts'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'

const image = {
  proto: Box,

  props: {
    boxSize: `H H3`,
    padding: 'D 0 0 0',
    '@tabletL': {
      boxSize: '70% H'
    },
    '@mobileM': {
      boxSize: '100% G3',
      margin: '-D 0 0 0'
    }
  },
  style: {
    // borderRight: '3px solid red',
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .25), rgba(60,84, 72, .5)), url(' + WINE_JPG + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center bottom 100px',
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
    position: 'absolute',
    background: 'cream2',
    flexAlign: 'center flex-start',
    width: 'fit-content',
    color: 'black .75',
    margin: '-D -E2 0 0',
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
    '@media only screen and (min-width: 1366px)': {
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
      maxWidth: `${450 / 14.3}em`,
      margin: '0 auto',
      color: 'black .75',
      padding: 'F1 0 F1 E1',
      '@tabletL': { maxWidth: 'H3' },
      '@mobileM': { padding: '0 B2' },
      '@mobileXS': { padding: '0 B1' }
    },
    style: {
      textAlign: 'justify',
      wordSpacing: '-1px',
      fontSize: `${14 / 16}em`,
      lineHeight: `${21.5 / 14.1}em`,
      letterSpacing: '.8px',
      boxShadow: '0px 0px 70px 20px rgba(248, 241, 227, .35)'
    }

  }
}

export default {
  proto: Box,
  props: {
    minHeight: '100%',
    position: 'relative',
    flexAlign: 'center center',
    margin: 'F2 0 E2 0'
    // padding: 'G2 0'
  },
  style: {
    // border: '10px solid black'
  },
  attr: { id: 'wine' },

  image,
  paragraph
}
