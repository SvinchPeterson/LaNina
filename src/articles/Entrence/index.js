'use strict'
import { Box, Text } from '@symbo.ls/symbols'
import ENTRENCE_JPG from '../../assets/images/sololaki/entrance.jpg'
import STREET_JPG from '../../assets/images/sololaki/street.jpg'

const yardEntrence = {
  proto: Box,
  props: {
    minWidth: `${900 / 16}em`,
    minHeight: ` ${800 / 16}em`
    // boxSize: `${650 / 16}em ${400 / 16}em`,
    // position: 'absolute',
    // margin: '0 G 0 0',

  },
  style: {
    flex: '1',
    // boxShadow: 'inset 0 0 35px 1px rgba(0, 0, 0, .8)',
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
    // position: 'absolute',
    // xSize: `${400 / 16}em ${500 / 16}em`,
    flex: '.4',
    minWidth: `${500 / 16}em`,
    minHeight: `${500 / 16}em`,
    // margin: 'H 0 0 H1',
    '@tabletL': { display: 'none' }
  },
  style: {
    // border: '3px solid red',
    flex: '1',
    marginTop: '-100px',
    marginRight: '-400px',
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .35)),url(' + STREET_JPG + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'right 250px bottom 200px'
    // backgroundPosition: 'right 170px bottom 200px'
  }
}

const texts = {
  proto: Box,
  props: {
    position: 'absolute',
    flexFlow: 'column',
    // left: '0',
    bottom: '-E',
    margin: '0 0 0 -H1',
    gap: 'A1',
    minHeight: 'fit-content'
    // margin: 'H 0 0 0',
    // top: 'H'
    // fontWeight: '900',
    // fontSize: 'Y',
  },
  style: {
    zIndex: 3,
    alignSelf: 'center',
    boxSizing: 'border-box',
    // border: '5px solid blue',
    textTransform: 'uppercase',
    // padding: '100px 0 0 0',
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
    flexFlow: 'column',
    position: 'relative',
    flexAlign: 'center center',
    minHeight: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    maxHeight: 'I',
    gap: 'Z'
  },
  style: {
    marginBottom: '450px',
    marginTop: '300px'
  },

  yardEntrence,
  streetEntrence,
  texts
}
