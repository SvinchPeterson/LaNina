'use strict'
import { Box, Text } from '@symbo.ls/symbols'
import ENTRENCE_JPG from '../../assets/images/sololaki/balcony2.jpg'
import STREET_JPG from '../../assets/images/sololaki/street.jpg'

const yardEntrence = {
  proto: Box,
  props: {
    minWidth: `${600 / 16}em`,
    position: 'relative',
    minHeight: '500px',
    padding: '0'
  },
  style: {
    flex: '1',
    backgroundAttachment: 'fixed',
    backgroundImage: 'radial-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .8)), url(' + ENTRENCE_JPG + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    backgroundPosition: 'bottom 200px center',
    height: '500px',
    maxHeight: '500px',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '0',
      width: '100%',
      height: '100%',
      // background: 'radial-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, .55))',
      zIndex: '30'
    }
  }
}

// const texts = {
//   proto: Box,
//   props: {
//     position: 'absolute',
//     flexFlow: 'column',
//     bottom: '-E2',
//     margin: '0 0 0 -H1',
//     gap: 'A1',
//     minHeight: 'fit-content'
//   },
//   style: {
//     zIndex: 3,
//     alignSelf: 'center',
//     boxSizing: 'border-box',
//     textTransform: 'uppercase',
//     letterSpacing: '1px'

//   },

//   ...[
//     { text: 'central location' },
//     { text: 'free on site parking' },
//     { text: 'free wifi' },
//     { text: '24/7 customer service' },
//     { tex: 'complimentary services' }
//   ]
// }

const texts = {
  proto: Box,
  props: {
    margin: 'E 0 0 0',
    fontWeight: '400',
    flexFlow: 'column',
    gap: 'Z'
  },
  style: {
    textAlign: 'center',
    letterSpacing: '.7px',
    wordSpacing: '3px',
    fontSize: '13.5px'
  },
  ...[
    { text: 'apartments are designed to match your mood' },
    { text: 'create own atmosphere in any kind of trip' },
    {
      proto: Box,
      props: { margin: 'A2 0 0 0' },
      text: 'you are special for us'
    }
  ]
}

export default {
  proto: Box,
  props: {
    width: '100%',
    flexFlow: 'column',
    position: 'relative',
    flexAlign: 'center flex-start',
    margin: '0 auto',
    gap: 'Z'
  },
  style: {
    // border: '2px solid green',
    fontSize: '22px',
    marginTop: `${200 / 16}em`,
    marginBottom: `${200 / 16}em`,
    fontWeight: '300',
    textTransform: 'uppercase'
    // marginBottom: `${0 / 16}em`
    // border: '2px solid red'
    // marginTop: `${300 / 16}em`
  },

  yardEntrence,
  texts
}
