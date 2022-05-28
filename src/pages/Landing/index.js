'use strict'
import { Box, Link, Text } from '@symbo.ls/symbols'

import LOGO_BIG_PNG from '../../assets/icons/logoBig.png'

import { positionOpacity, letterSpacing3, opacity, opacityReverse } from '../../animations'

const heading = {
  tag: 'h1',
  proto: [Text, Box],
  props: {
    text: 'BB Hospitality',
    color: 'gold 1'
  },
  style: {
    fontSize: `${90 / 16}em`,
    fontWeight: 200,
    animationName: letterSpacing3,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    zIndex: 2,
    opacity: '.85',
    '@media only screen and (max-width: 768px)': {
      fontSize: `45px`,
      opacity: 1,
      fontWeight: 900,
      textTransform: 'uppercase'
    },
    '@media only screen and (max-width: 480px)': {

      fontSize: `30px`
    }
  }
}

const links = {
  proto: Box,
  props: {
    flexAlign: 'center center',
    gap: 'A',
    padding: '0 C 0 0'
  },
  style: {
    '@media only screen and (max-width: 768px)': {
      flexFlow: 'column',
      gap: '35px',
      alignItems: 'flex-start',
      paddingLeft: `${50 / 16}em`,
      '> a': {
        width: `${200 / 16}em`,
        textAlign: 'center'
      }
      // alignItems: 'center'
    }
  },
  childProto: {
    proto: [Link, Text, Box],
    props: {
      size: 'Z',
      padding: 'A B',
      round: 'B',
      background: 'cream .1',
      color: 'cream'
    },
    style: {
      textTransform: 'uppercase',
      fontWeight: 900,
      textDecoration: 'none',
      transition: 'background .3s ease-in-out',
      backdropFilter: 'blur(5px)'
    }
  },
  ...[
    {
      props: {
        text: 'residence',
        href: '/Sololaki'
      },
      style: {
        '&:hover': { background: 'rgba(244, 233, 217, .25)' }
      }
    },
    {
      props: { text: 'travel' },
      style: {
        position: 'relative',
        opacity: '.65',
        '&:before': {
          content: '"soon"',
          position: 'absolute',
          bottom: '-30px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 400,
          textTransform: 'lowercase',
          color: '#FFCEA8',
          opacity: '.55'
        }
      }
    },
    {
      props: { text: 'car rental' },
      style: {
        position: 'relative',
        opacity: '.65',
        '&:before': {
          content: '"soon"',
          position: 'absolute',
          bottom: '-30px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 400,
          textTransform: 'lowercase',
          color: '#FFCEA8',
          opacity: '.55'
        }
      }
    }
  ]

}

const Container = {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: 0,
    left: 0,
    flexAlign: 'center flex-end'
  },
  style: {
    backgroundImage: 'url(' + LOGO_BIG_PNG + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    animationName: positionOpacity,
    animationDuration: '20s',
    animationTimingFunction: 'ease-in-out',
    backgroundAttachment: 'fixed',
    overflow: 'hidden',
    '@media only screen and (max-width: 1024px)': {
      justifyContent: 'center'
    },
    '@media only screen and (max-width: 768px)': {
      animation: 'none',
      backgroundPosition: 'right -30px center',
      alignItems: 'flex-start',
      paddingTop: `${135 / 16}em`
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(rgba(42, 81, 61, .5), rgba(42, 81, 61, .8))',
      opacity: '1'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(rgba(42, 81, 61, 1), rgba(42, 81, 61, 1))',
      opacity: 0,
      animationName: opacityReverse,
      animationDuration: '5s',
      animationTimingFunction: 'ease-in-out',
      pointerEvents: 'none'
    }
  },
  content: {
    proto: Box,
    props: {
      flexFlow: 'column',
      gap: 'C2',
      flexAlign: 'flex-end center',
      padding: '0 E2 0 0'
    },
    style: {
      animationName: opacity,
      animationDuration: '.3s',
      animationTimingFunction: 'ease-in-out',
      '@media only screen and (max-width: 1024px)': {
        paddingRight: 0,
        paddingBottom: `${100 / 16}em`
      },
      '@media only screen and (max-width: 768px)': {
        alignItems: 'center',
        gap: '65px'
        // paddingLeft: '30px'

      }
    },
    heading,
    links
  }
}
export default {
  proto: Container
}
