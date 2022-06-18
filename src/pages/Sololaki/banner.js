'use strict'
import { Box, Text } from '@symbo.ls/symbols'

import { position, height, letterSpacing, scale, height2, letterSpacing2 } from '../../animations'
import SOLOLAKI_JPG from '../../assets/images/sololaki/sololaki.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/sololaki/sololaki-tablet.jpg'

const heading = {
  proto: Box,
  props: {
    position: 'absolute',
    top: '44%',
    right: '13.5%'
  },
  style: {
    '@media only screen and (max-width: 768px)': {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      right: 'initial'
    }
  },
  span: {
    proto: [Text, Box],
    props: {
      text: 'sololaki',
      fontSize: 'A',
      color: 'orange2 .85',
      position: 'absolute',
      right: '0',
      '@mobileL': {
        top: 'initial',
        right: '60px',
        color: 'orange2',
        bottom: '-20px',
        fontSize: 'B'
      },
      '@mobileS': {
        fontSize: 'A',
        right: '20px',
        bottom: '10px'
      }
    },
    style: {
      textTransform: 'uppercase',
      fontWeight: 900,
      letterSpacing: '12px',
      animationName: letterSpacing,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
      '@media only screen and (max-width: 768px)': {
        letterSpacing: '8px',
        animationName: letterSpacing2
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
      overflow: 'hidden',
      animationName: height,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
      fontWeight: 100,
      letterSpacing: '-3px',
      fontSize: `${120 / 16}em`,
      height: '150px',
      '@media only screen and (max-width: 1024px)': {
        fontSize: `${100 / 16}em`
      },
      '@media only screen and (max-width: 768px)': {
        fontSize: `${80 / 16}em`,
        fontWeight: 200,
        animationDuration: '1.5s',
        whiteSpace: 'nowrap',
        animationName: height2,
        height: '100px',
        lineHeight: '80px'
      },
      '@media only screen and (max-width: 480px)': {
        fontSize: `${55 / 16}em`,
        lineHeight: '50px'
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
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    '@media only screen and (min-width: 1366px)': {
      backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
      backgroundAttachment: 'fixed',
      animationName: position,
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out'
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
