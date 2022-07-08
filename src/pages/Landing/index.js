'use strict'
import { Box, Link, Text } from '@symbo.ls/symbols'

import LOGO_BIG_PNG from '../../assets/icons/logoBig.png'

import {
  positionCenterTop, letterSpacing3, opacityReverse,
  positionCenterTop2, positionCenterTop3, positionCenterTop4,
  positionCenterTop5, opacity
} from '../../animations'

const heading = {
  tag: 'h1',
  proto: [Text, Box],
  props: {
    text: 'BB Hospitality',
    color: 'gold .55',
    fontSize: 'K',
    fontWeight: '100',
    '@mobileM': {
      fontSize: 'E',
      fontWeight: '900',
      textTransform: 'uppercase'
    }
  },
  style: {
    animationName: letterSpacing3,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    zIndex: 2,
    letterSpacing: '0px'
  }
}

const links = {
  proto: Box,
  props: {
    flexAlign: 'center center',
    gap: 'B2',
    padding: '0 C2 0 0',
    '@tabletS': { padding: '0 0 0 B' },
    '@mobileM': { flexFlow: 'column' }
  },
  childProto: {
    proto: [Link, Text, Box],
    props: {
      fontSize: 'Z',
      round: 'D',
      color: 'cream',
      '@mobileM': {
        background: 'cream .15',
        minWidth: 'F2',
        padding: 'A 0',
        flexAlign: 'centr center'
      }
    },
    style: {
      textTransform: 'uppercase',
      fontWeight: 900,
      textDecoration: 'none',
      transition: 'background .3s ease-in-out',
      zIndex: 10
    }
  },
  ...[
    {
      props: {
        text: 'residence',
        href: '/Sololaki'
      },
      style: {
        opacity: '.75',
        '&:hover': {
          opacity: '1'
        }
      }
    },
    {
      props: { text: 'travel' },
      style: {
        position: 'relative',
        opacity: '.55',
        '&:before': {
          content: '"soon"',
          position: 'absolute',
          bottom: `-${35 / 16}em`,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 300,
          textTransform: 'lowercase',
          color: '#FFCEA8',
          opacity: '.8'
        }
      }
    },
    {
      props: { text: 'car rental' },
      style: {
        position: 'relative',
        opacity: '.55',
        '&:before': {
          content: '"soon"',
          position: 'absolute',
          bottom: `-${35 / 16}em`,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 300,
          textTransform: 'lowercase',
          color: '#FFCEA8',
          opacity: '.8'
        }
      }
    }
  ]

}

const Container = {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    flexAlign: 'center flex-end',
    '@tabletS': { flexAlign: 'center center' }
  },
  style: {
    backgroundImage: 'url(' + LOGO_BIG_PNG + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    animationName: positionCenterTop,
    animationDuration: '20s',
    backgroundPosition: 'top 50px left -425px',
    animationTimingFunction: 'ease-in-out',
    backgroundAttachment: 'fixed',
    overflow: 'hidden',
    '@media only screen and (max-width: 1366px)': {
      backgroundPosition: 'top 50px left -350px',
      animationName: positionCenterTop2
    },
    '@media only screen and (max-width: 1024px)': {
      backgroundPosition: 'top 50px left -330px',
      animationName: positionCenterTop3
    },
    '@media only screen and (max-width: 560px)': {
      backgroundPosition: 'top 50px left -300px',
      animationName: positionCenterTop4
    },
    '@media only screen and (max-width: 480px)': {
      backgroundPosition: 'top 50px left -230px',
      animationName: positionCenterTop5
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(#212121, #1F1F1F, #1D1D1D, #1B1B1B, #181818, #151515, #111111, #101010)',
      opacity: '.85'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'black',
      opacity: 0,
      animationName: opacityReverse,
      animationDuration: '2s',
      animationTimingFunction: 'linear',
      pointerEvents: 'none'
    }
  },
  content: {
    proto: Box,
    props: {
      flexFlow: 'column',
      gap: 'C',
      flexAlign: 'flex-end center',
      padding: '0 E2 F 0',

      '@tabletS': {
        flexAlign: 'flex-start center',
        padding: '0 0 F1 0'
      },
      '@mobileL': {
        padding: '0 0 E 0',
        flexAlign: 'flex-start center'
      }
    },
    style: {
      animationName: opacity,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out'
    },
    heading,
    links
  }
}

export default {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  style: {
    fontFamily: 'Helvetica Neue',
    background: 'radial-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .92))'
  },
  container: { proto: Container }
}
