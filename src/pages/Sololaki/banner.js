'use strict'
import { Box, Text } from '@symbo.ls/symbols'

import { position, height, letterSpacing, opacity7, zoom } from '../../animations'
import SOLOLAKI_JPG from '../../assets/images/sololaki/entrence2.jpg'

const heading = {
  proto: Box,
  props: {
    position: 'absolute',
    top: '35%',
    right: '20.5%',
    flexFlow: 'column',
    flexAlign: 'flex-end flex-start',
    height: `${100 / 16}em`,
    '@mobileL': {
      flexAlign: 'center flex-start',
      right: '0',
      left: '50%'

    },
    '@mobileS': {
      top: '40%'
    }
  },
  style: {
    whiteSpace: 'nowrap',
    '@media only screen and (max-width: 768px)': {
      transform: 'translate(-50%, -50%)'
    }
  },

  h1: {
    proto: [Text, Box],
    props: {
      text: 'BB Residence',
      color: 'gold 1',
      margin: '0'
    },
    style: {
      fontSize: `${60 / 16}em`,
      overflow: 'hidden',
      animationName: height,
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out',
      animationDelay: '.4s',
      fontWeight: 100,
      letterSpacing: `${-3 / 120}em`,
      '@media only screen and (max-width: 480px)': {
        fontSize: `${42.5 / 16}em`,
        fontWeight: 200,
        textTransform: 'uppercase'

      }
    }
  },

  span: {
    proto: [Text, Box],
    props: {
      text: 'sololaki',
      fontSize: 'Z',
      color: 'cream2 .9',
      position: 'absolute',
      bottom: `${-10 / 14}em`,
      '@mobileL': {
        fontSize: `B`,
        bottom: `${-100 / 18}em`
      },
      '@mobileS': { bottom: `${-50 / 18}em` }
    },

    style: {
      textTransform: 'uppercase',
      fontWeight: 500,
      overflow: 'hidden',
      letterSpacing: `${10 / 14}em`,
      animationName: letterSpacing,
      animationDuration: '6s',
      animationDelay: '.3s',
      animationTimingFunction: 'ease-in-out'
    }
  }
}

const image = {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0'
  },
  style: {

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
    animationName: position,
    animationDelay: '.1s',
    animationDuration: '6s',
    animationTimingFunction: 'ease-in-out',
    backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
    backgroundAttachment: 'fixed',
    '@media only screen and (max-width: 1366px)': {
      backgroundAttachment: 'initial',
      animationName: zoom,
      animationDelay: '-1s',
      animationDuration: '8s'
    },
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      background: 'radial-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .8))',
      animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)'
    }
  }
}
const container = {
  proto: Box,
  props: {
    minWidth: '100%',
    minHeight: '100%',
    position: 'relative'
  },
  style: {
    overflow: 'hidden',
    background: 'radial-gradient(rgba(0 ,0 , 0, .8), rgba(0 , 0, 0, .95))',
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(rgba(0 , 0, 0, 1), rgba(0, 0, 0, 1))',
      opacity: '0',
      position: 'absolute',
      animationName: opacity7,
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out'
    }
  }
}

export const banner = {
  proto: container,

  image,
  heading
}
