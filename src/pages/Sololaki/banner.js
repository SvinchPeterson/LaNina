'use strict'
import { Box, Text } from '@symbo.ls/symbols'

import { position, height, letterSpacing, scale, height2, letterSpacing2 } from '../../animations'
import SOLOLAKI_JPG from '../../assets/images/sololaki/sololaki.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/sololaki/sololaki-tablet.jpg'

const heading = {
  proto: Box,
  props: {
    position: 'absolute',
    top: '45%',
    right: '17.5%',
    '@mobileL': {
      right: 'auto',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  },

  span: {
    proto: [Text, Box],
    props: {
      fontSize: 'A',
      text: 'sololaki',
      color: 'orange2 .85',
      position: 'absolute',
      right: 'A2',
      top: 'A',
      '@tabletS': {
        top: 'Z',
        right: '0'
      },
      '@mobileL': {
        top: 'auto',
        right: 'C',
        color: 'orange2',
        bottom: '-B1'
      },
      '@mobileS': {
        right: 'B',
        bottom: '0'
      }
    },
    style: {
      textTransform: 'uppercase',
      fontWeight: 900,
      letterSpacing: `${10 / 16}em`,
      animationName: letterSpacing,
      animationDuration: '2.3s',
      animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)',
      '@media only screen and (max-width: 768px)': {
        letterSpacing: `${8 / 16}em`,
        animationName: letterSpacing2,
        animationDuration: '8s'
      }
    }
  },

  h1: {
    proto: [Text, Box],
    props: {
      text: 'BB Residence',
      color: 'gold',
      margin: '0'
    },
    style: {
      fontSize: `${100 / 16}em`,
      paddingRight: '15px',
      overflow: 'hidden',
      animationName: height,
      animationDuration: '2.5s',
      animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)',
      // animationTimingFunction: 'ease-in-out',
      fontWeight: 100,
      letterSpacing: `${-3 / 120}em`,

      textShadow: '0px 0px 20px rgba(0, 0, 0, .35)',
      '@media only screen and (max-width: 1024px)': {
        fontSize: `${100 / 16}em`
      },
      '@media only screen and (max-width: 768px)': {
        fontSize: `${80 / 16}em`,
        fontWeight: 100,
        animationDuration: '1.5s',
        whiteSpace: 'nowrap',
        animationName: height2,
        height: `${100 / 80}em`
      },
      '@media only screen and (max-width: 480px)': {
        fontSize: `${55 / 16}em`,
        height: `${100 / 55}em`
      }
    }
  }
}

const image = {
  proto: Box,
  props: {
    boxSize: '60% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    '@mobileL': { boxSize: '100% 100%' }
  },
  style: {
    boxShadow: 'inset 0px 0px 5px 0px black',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    '@media only screen and (min-width: 1366px)': {
      backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
      backgroundAttachment: 'fixed',
      animationName: position,
      animationDuration: '3s',
      animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)'
    },
    '@media only screen and (max-width: 1366px)': {
      backgroundImage: 'url(' + SOLOLAKI_TABLET_JPG + ')',
      animationName: scale,
      animationDuration: '4s',
      animationTimingFunction: 'ease-in-out'
    },
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      background: 'linear-gradient(rgba(60,84, 72, .25), rgba(60,84, 72, .85))'
    }
  }
}
const container = {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    position: 'relative'
  },
  style: {
    overflow: 'hidden',
    background: 'radial-gradient(rgba(60,84, 72, .8), rgba(60,84, 72, 1))'
  }
}

export const banner = {
  proto: container,

  image,
  heading
}
