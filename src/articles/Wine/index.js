'use strict'
import { Box } from '@symbo.ls/symbols'
import { wineText } from '../../texts'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'

const image = {
  proto: Box,
  props: {
    boxSize: `${450 / 16}em ${600 / 16}em`,
    position: 'absolute',
    '@tabletL': {
      boxSize: `80% ${600 / 16}em`
    },
    '@mobileS': {
      boxSize: `100% ${400 / 16}em`
    }
  },
  style: {
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .35)),url(' + WINE_JPG + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    backgroundPosition: 'center center',
    '@media only screen and (min-width: 1366px)': {
      backgroundAttachment: 'fixed',
      backgroundPosition: 'left 300px bottom 150px',
      marginRight: `${300 / 16}em`,
      backgroundSize: 'contain'
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: '100%',
      left: 0,
      width: '600px',
      height: '3px'
    }
  }
}

const paragraph = {
  proto: Box,
  props: {
    height: `${800 / 16}em`,
    position: 'absolute',
    padding: '0 D 0 E',
    flexAlign: 'center flex-end',
    '@tabletL': {
      height: 'fit-content',
      padding: '0 D',
      background: 'cream2',
      top: '100%'
    },
    '@mobileS': {
      padding: '0 B2',
      top: '90%'
    }
  },
  style: {
    // border: '3px solid green',
    // borderLeft: '3px solid rgba(168, 98, 63, 1)',
    borderTop: 'none',
    '@media only screen and (min-width: 1366px)': {
      background: 'linear-gradient(rgba(248, 241, 227, 0), rgba(248, 241, 227, 0),rgba(42, 81, 61, .35))',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'bottom 200px center',
      marginLeft: '500px'
    },
    '@media only screen and (max-width: 1366px)': {
      zIndex: 4,
      height: 'fit-content'
    }
  },
  span: {
    proto: [wineText, Box],
    props: {
      fontSize: `${14 / 16}em`,
      maxWidth: `${300 / 14}em`,
      display: 'block',
      color: 'black .35',
      '@tabletL': {
        maxWidth: `${620 / 14}em`
      }
    },
    style: {
      '@media only screen and (max-width: 1366px)': {
        textAlign: 'left'
      }
      // border: '3px solid red',
      // backdropFilter: 'blur(3px)'
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
