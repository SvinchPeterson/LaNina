'use strict'
import { Box, Link, Text } from '@symbo.ls/symbols'

import LOGO_BIG_PNG from '../../assets/icons/logoBig.png'

import { positionCenterTop, letterSpacing3, opacityReverse } from '../../animations'

const heading = {
  tag: 'h1',
  proto: [Text, Box],
  props: {
    text: 'BB Hospitality',
    color: 'gold .8'
  },
  style: {
    fontSize: `${90 / 16}em`,
    fontWeight: 100,
    // animationName: letterSpacing3,
    // animationDuration: '2s',
    // animationTimingFunction: 'ease-in-out',
    zIndex: 2,
    letterSpacing: '-1px',
    '@media only screen and (max-width: 768px)': {
      fontSize: `45px`,
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
    gap: 'B2',
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
    }
  },
  childProto: {
    proto: [Link, Text, Box],
    props: {
      fontSize: 'Z',
      // padding: 'Z1 B',
      round: 'D',
      // background: 'cream .1',
      color: 'cream'
    },
    style: {
      textTransform: 'uppercase',
      fontWeight: 900,
      textDecoration: 'none',
      transition: 'background .3s ease-in-out',
      zIndex: 10
      // backdropFilter: 'blur(5px)'
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
          // background: 'rgba(244, 233, 217, .25)',
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
          bottom: '-35px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 300,
          textTransform: 'lowercase',
          color: '#FFCEA8',
          opacity: '.7'
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
          bottom: '-35px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 300,
          textTransform: 'lowercase',
          color: '#FFCEA8',
          opacity: '.7'
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
    // animationName: positionCenterTop,
    // animationDuration: '25s',
    backgroundPosition: 'top 50px left -300px',
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
      background: 'radial-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .8))',
      opacity: '1'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // background: 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
      opacity: 0,
      animationName: opacityReverse,
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out',
      pointerEvents: 'none'
    }
  },
  content: {
    proto: Box,
    props: {
      flexFlow: 'column',
      gap: 'C',
      flexAlign: 'flex-end center',
      padding: '0 E2 D 0'
    },
    style: {
      '@media only screen and (max-width: 1024px)': {
        paddingRight: 0,
        paddingBottom: `${100 / 16}em`
      },
      '@media only screen and (max-width: 768px)': {
        alignItems: 'center',
        gap: '65px'
      }
    },
    heading,
    links
  }
}
export default {
  proto: Container
}
