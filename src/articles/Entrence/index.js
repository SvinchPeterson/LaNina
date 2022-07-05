'use strict'
import { Box, Text } from '@symbo.ls/symbols'
import ENTRENCE_JPG from '../../assets/images/sololaki/entrance.jpg'
import STREET_JPG from '../../assets/images/sololaki/street.jpg'

const yardEntrence = {
  proto: Box,
  props: {
    boxSize: `${650 / 16}em ${400 / 16}em`,
    position: 'absolute',
    margin: '0 G 0 0',
    '@tabletL': {
      margin: '0 0 0 0',
      boxSize: `80% ${400 / 16}em`
    },
    '@mobileL': {
      boxSize: `85% ${400 / 16}em`
    },
    '@mobileM': {
      boxSize: `100% ${400 / 16}em`
    }

  },
  style: {
    boxShadow: 'inset 0 0 35px 1px rgba(0, 0, 0, .8)',
    backgroundAttachment: 'fixed',
    backgroundImage: 'url(' + ENTRENCE_JPG + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' },
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      background: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .45))'
    }
  }
}

const streetEntrence = {
  proto: Box,
  props: {
    position: 'absolute',
    boxSize: `${400 / 16}em ${500 / 16}em`,
    margin: 'H 0 0 H1',
    '@tabletL': { display: 'none' }
  },
  style: {
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .35)),url(' + STREET_JPG + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'right 170px bottom 200px'
  }
}

const texts = {
  proto: Box,
  props: {
    position: 'absolute',
    flexFlow: 'column',
    fontSize: 'Z',
    gap: 'A1',
    // fontWeight: '900',
    // fontSize: 'Y',
    '@tabletL': {
      margin: '0 0 0 0',
      bottom: '-B'
    },
    '@mobileM': {
      padding: '0 B1',
      bottom: '-C'
    },
    '@mobileS': {
      bottom: '-C2'
    },
    '@mobileXS': {
      padding: '0 A'
    }
  },
  style: {
    zIndex: 3,
    alignSelf: 'flex-end',
    boxSizing: 'border-box',
    // border: '5px solid blue',
    textTransform: 'uppercase',
    margin: '0 430px -200px 0',
    padding: '100px 0 0 0',
    letterSpacing: '1px',
    fontWeight: ''
  },

  ...[
    { text: 'central location' },
    { text: 'free on site parking' },
    { text: 'free wifi' },
    { text: '24/7 customer service' },
    { tex: 'complimentary services' }
  ]
}

export default {
  proto: Box,
  props: {
    position: 'relative',
    flexAlign: 'center center',
    boxSize: `100% ${800 / 16}em`,
    maxHeight: 'I',
    margin: 'D 0 H 0',
    '@tabletL': { margin: '0 0 F1 0' }
  },

  yardEntrence,
  streetEntrence,
  texts
}
